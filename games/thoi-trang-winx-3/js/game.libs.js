(function() {
  var MAX_INT = 9007199254740992;
  var MIN_INT = -MAX_INT;
  var NUMBERS = "0123456789";
  var CHARS_LOWER = "abcdefghijklmnopqrstuvwxyz";
  var CHARS_UPPER = CHARS_LOWER.toUpperCase();
  var HEX_POOL = NUMBERS + "abcdef";
  var slice = Array.prototype.slice;
  function Chance(seed) {
    if (!(this instanceof Chance)) {
      return seed == null ? new Chance : new Chance(seed);
    }
    if (typeof seed === "function") {
      this.random = seed;
      return this;
    }
    if (arguments.length) {
      this.seed = 0;
    }
    for (var i = 0;i < arguments.length;i++) {
      var seedling = 0;
      if (Object.prototype.toString.call(arguments[i]) === "[object String]") {
        for (var j = 0;j < arguments[i].length;j++) {
          var hash = 0;
          for (var k = 0;k < arguments[i].length;k++) {
            hash = arguments[i].charCodeAt(k) + (hash << 6) + (hash << 16) - hash;
          }
          seedling += hash;
        }
      } else {
        seedling = arguments[i];
      }
      this.seed += (arguments.length - i) * seedling;
    }
    this.mt = this.mersenne_twister(this.seed);
    this.bimd5 = this.blueimp_md5();
    this.random = function() {
      return this.mt.random(this.seed);
    };
    return this;
  }
  Chance.prototype.VERSION = "1.0.1";
  function initOptions(options, defaults) {
    options || (options = {});
    if (defaults) {
      for (var i in defaults) {
        if (typeof options[i] === "undefined") {
          options[i] = defaults[i];
        }
      }
    }
    return options;
  }
  function testRange(test, errorMessage) {
    if (test) {
      throw new RangeError(errorMessage);
    }
  }
  var base64 = function() {
    throw new Error("No Base64 encoder available.");
  };
  (function determineBase64Encoder() {
    if (typeof btoa === "function") {
      base64 = btoa;
    } else {
      if (typeof Buffer === "function") {
        base64 = function(input) {
          return (new Buffer(input)).toString("base64");
        };
      }
    }
  })();
  Chance.prototype.bool = function(options) {
    options = initOptions(options, {likelihood:50});
    testRange(options.likelihood < 0 || options.likelihood > 100, "Chance: Likelihood accepts values from 0 to 100.");
    return this.random() * 100 < options.likelihood;
  };
  Chance.prototype.character = function(options) {
    options = initOptions(options);
    testRange(options.alpha && options.symbols, "Chance: Cannot specify both alpha and symbols.");
    var symbols = "!@#$%^&*()[]", letters, pool;
    if (options.casing === "lower") {
      letters = CHARS_LOWER;
    } else {
      if (options.casing === "upper") {
        letters = CHARS_UPPER;
      } else {
        letters = CHARS_LOWER + CHARS_UPPER;
      }
    }
    if (options.pool) {
      pool = options.pool;
    } else {
      if (options.alpha) {
        pool = letters;
      } else {
        if (options.symbols) {
          pool = symbols;
        } else {
          pool = letters + NUMBERS + symbols;
        }
      }
    }
    return pool.charAt(this.natural({max:pool.length - 1}));
  };
  Chance.prototype.floating = function(options) {
    options = initOptions(options, {fixed:4});
    testRange(options.fixed && options.precision, "Chance: Cannot specify both fixed and precision.");
    var num;
    var fixed = Math.pow(10, options.fixed);
    var max = MAX_INT / fixed;
    var min = -max;
    testRange(options.min && options.fixed && options.min < min, "Chance: Min specified is out of range with fixed. Min should be, at least, " + min);
    testRange(options.max && options.fixed && options.max > max, "Chance: Max specified is out of range with fixed. Max should be, at most, " + max);
    options = initOptions(options, {min:min, max:max});
    num = this.integer({min:options.min * fixed, max:options.max * fixed});
    var num_fixed = (num / fixed).toFixed(options.fixed);
    return parseFloat(num_fixed);
  };
  Chance.prototype.integer = function(options) {
    options = initOptions(options, {min:MIN_INT, max:MAX_INT});
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");
    return Math.floor(this.random() * (options.max - options.min + 1) + options.min);
  };
  Chance.prototype.natural = function(options) {
    options = initOptions(options, {min:0, max:MAX_INT});
    testRange(options.min < 0, "Chance: Min cannot be less than zero.");
    return this.integer(options);
  };
  Chance.prototype.string = function(options) {
    options = initOptions(options, {length:this.natural({min:5, max:20})});
    testRange(options.length < 0, "Chance: Length cannot be less than zero.");
    var length = options.length, text = this.n(this.character, length, options);
    return text.join("");
  };
  Chance.prototype.capitalize = function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  };
  Chance.prototype.mixin = function(obj) {
    for (var func_name in obj) {
      Chance.prototype[func_name] = obj[func_name];
    }
    return this;
  };
  Chance.prototype.unique = function(fn, num, options) {
    testRange(typeof fn !== "function", "Chance: The first argument must be a function.");
    options = initOptions(options, {comparator:function(arr, val) {
      return arr.indexOf(val) !== -1;
    }});
    var arr = [], count = 0, result, MAX_DUPLICATES = num * 50, params = slice.call(arguments, 2);
    while (arr.length < num) {
      result = fn.apply(this, params);
      if (!options.comparator(arr, result)) {
        arr.push(result);
        count = 0;
      }
      if (++count > MAX_DUPLICATES) {
        throw new RangeError("Chance: num is likely too large for sample set");
      }
    }
    return arr;
  };
  Chance.prototype.n = function(fn, n) {
    testRange(typeof fn !== "function", "Chance: The first argument must be a function.");
    if (typeof n === "undefined") {
      n = 1;
    }
    var i = n, arr = [], params = slice.call(arguments, 2);
    i = Math.max(0, i);
    for (null;i--;null) {
      arr.push(fn.apply(this, params));
    }
    return arr;
  };
  Chance.prototype.pad = function(number, width, pad) {
    pad = pad || "0";
    number = number + "";
    return number.length >= width ? number : (new Array(width - number.length + 1)).join(pad) + number;
  };
  Chance.prototype.pick = function(arr, count) {
    if (arr.length === 0) {
      throw new RangeError("Chance: Cannot pick() from an empty array");
    }
    if (!count || count === 1) {
      return arr[this.natural({max:arr.length - 1})];
    } else {
      return this.shuffle(arr).slice(0, count);
    }
  };
  Chance.prototype.pickone = function(arr) {
    if (arr.length === 0) {
      throw new RangeError("Chance: Cannot pickone() from an empty array");
    }
    return arr[this.natural({max:arr.length - 1})];
  };
  Chance.prototype.pickset = function(arr, count) {
    if (count === 0) {
      return [];
    }
    if (arr.length === 0) {
      throw new RangeError("Chance: Cannot pickset() from an empty array");
    }
    if (count < 0) {
      throw new RangeError("Chance: count must be positive number");
    }
    if (!count || count === 1) {
      return [this.pickone(arr)];
    } else {
      return this.shuffle(arr).slice(0, count);
    }
  };
  Chance.prototype.shuffle = function(arr) {
    var old_array = arr.slice(0), new_array = [], j = 0, length = Number(old_array.length);
    for (var i = 0;i < length;i++) {
      j = this.natural({max:old_array.length - 1});
      new_array[i] = old_array[j];
      old_array.splice(j, 1);
    }
    return new_array;
  };
  Chance.prototype.weighted = function(arr, weights) {
    if (arr.length !== weights.length) {
      throw new RangeError("Chance: length of array and weights must match");
    }
    for (var weightIndex = weights.length - 1;weightIndex >= 0;--weightIndex) {
      if (weights[weightIndex] <= 0) {
        arr.splice(weightIndex, 1);
        weights.splice(weightIndex, 1);
      }
    }
    var sum = weights.reduce(function(total, weight) {
      return total + weight;
    }, 0);
    var selected = this.random() * sum;
    var total = 0;
    var chosen;
    weights.some(function(weight, index) {
      if (selected <= total + weight) {
        chosen = arr[index];
        return true;
      }
      total += weight;
      return false;
    });
    return chosen;
  };
  Chance.prototype.paragraph = function(options) {
    options = initOptions(options);
    var sentences = options.sentences || this.natural({min:3, max:7}), sentence_array = this.n(this.sentence, sentences);
    return sentence_array.join(" ");
  };
  Chance.prototype.sentence = function(options) {
    options = initOptions(options);
    var words = options.words || this.natural({min:12, max:18}), punctuation = options.punctuation, text, word_array = this.n(this.word, words);
    text = word_array.join(" ");
    text = this.capitalize(text);
    if (punctuation !== false && !/^[\.\?;!:]$/.test(punctuation)) {
      punctuation = ".";
    }
    if (punctuation) {
      text += punctuation;
    }
    return text;
  };
  Chance.prototype.syllable = function(options) {
    options = initOptions(options);
    var length = options.length || this.natural({min:2, max:3}), consonants = "bcdfghjklmnprstvwz", vowels = "aeiou", all = consonants + vowels, text = "", chr;
    for (var i = 0;i < length;i++) {
      if (i === 0) {
        chr = this.character({pool:all});
      } else {
        if (consonants.indexOf(chr) === -1) {
          chr = this.character({pool:consonants});
        } else {
          chr = this.character({pool:vowels});
        }
      }
      text += chr;
    }
    if (options.capitalize) {
      text = this.capitalize(text);
    }
    return text;
  };
  Chance.prototype.word = function(options) {
    options = initOptions(options);
    testRange(options.syllables && options.length, "Chance: Cannot specify both syllables AND length.");
    var syllables = options.syllables || this.natural({min:1, max:3}), text = "";
    if (options.length) {
      do {
        text += this.syllable();
      } while (text.length < options.length);
      text = text.substring(0, options.length);
    } else {
      for (var i = 0;i < syllables;i++) {
        text += this.syllable();
      }
    }
    if (options.capitalize) {
      text = this.capitalize(text);
    }
    return text;
  };
  Chance.prototype.age = function(options) {
    options = initOptions(options);
    var ageRange;
    switch(options.type) {
      case "child":
        ageRange = {min:1, max:12};
        break;
      case "teen":
        ageRange = {min:13, max:19};
        break;
      case "adult":
        ageRange = {min:18, max:65};
        break;
      case "senior":
        ageRange = {min:65, max:100};
        break;
      case "all":
        ageRange = {min:1, max:100};
        break;
      default:
        ageRange = {min:18, max:65};
        break;
    }
    return this.natural(ageRange);
  };
  Chance.prototype.birthday = function(options) {
    options = initOptions(options, {year:(new Date).getFullYear() - this.age(options)});
    return this.date(options);
  };
  Chance.prototype.cpf = function() {
    var n = this.n(this.natural, 9, {max:9});
    var d1 = n[8] * 2 + n[7] * 3 + n[6] * 4 + n[5] * 5 + n[4] * 6 + n[3] * 7 + n[2] * 8 + n[1] * 9 + n[0] * 10;
    d1 = 11 - d1 % 11;
    if (d1 >= 10) {
      d1 = 0;
    }
    var d2 = d1 * 2 + n[8] * 3 + n[7] * 4 + n[6] * 5 + n[5] * 6 + n[4] * 7 + n[3] * 8 + n[2] * 9 + n[1] * 10 + n[0] * 11;
    d2 = 11 - d2 % 11;
    if (d2 >= 10) {
      d2 = 0;
    }
    return "" + n[0] + n[1] + n[2] + "." + n[3] + n[4] + n[5] + "." + n[6] + n[7] + n[8] + "-" + d1 + d2;
  };
  Chance.prototype.cnpj = function() {
    var n = this.n(this.natural, 12, {max:12});
    var d1 = n[11] * 2 + n[10] * 3 + n[9] * 4 + n[8] * 5 + n[7] * 6 + n[6] * 7 + n[5] * 8 + n[4] * 9 + n[3] * 2 + n[2] * 3 + n[1] * 4 + n[0] * 5;
    d1 = 11 - d1 % 11;
    if (d1 < 2) {
      d1 = 0;
    }
    var d2 = d1 * 2 + n[11] * 3 + n[10] * 4 + n[9] * 5 + n[8] * 6 + n[7] * 7 + n[6] * 8 + n[5] * 9 + n[4] * 2 + n[3] * 3 + n[2] * 4 + n[1] * 5 + n[0] * 6;
    d2 = 11 - d2 % 11;
    if (d2 < 2) {
      d2 = 0;
    }
    return "" + n[0] + n[1] + "." + n[2] + n[3] + n[4] + "." + n[5] + n[6] + n[7] + "/" + n[8] + n[9] + n[10] + n[11] + "-" + d1 + d2;
  };
  Chance.prototype.first = function(options) {
    options = initOptions(options, {gender:this.gender(), nationality:"en"});
    return this.pick(this.get("firstNames")[options.gender.toLowerCase()][options.nationality.toLowerCase()]);
  };
  Chance.prototype.gender = function() {
    return this.pick(["Male", "Female"]);
  };
  Chance.prototype.last = function(options) {
    options = initOptions(options, {nationality:"en"});
    return this.pick(this.get("lastNames")[options.nationality.toLowerCase()]);
  };
  Chance.prototype.israelId = function() {
    var x = this.string({pool:"0123456789", length:8});
    var y = 0;
    for (var i = 0;i < x.length;i++) {
      var thisDigit = x[i] * (i / 2 === parseInt(i / 2) ? 1 : 2);
      thisDigit = this.pad(thisDigit, 2).toString();
      thisDigit = parseInt(thisDigit[0]) + parseInt(thisDigit[1]);
      y = y + thisDigit;
    }
    x = x + (10 - parseInt(y.toString().slice(-1))).toString().slice(-1);
    return x;
  };
  Chance.prototype.mrz = function(options) {
    var checkDigit = function(input) {
      var alpha = "<ABCDEFGHIJKLMNOPQRSTUVWXYXZ".split(""), multipliers = [7, 3, 1], runningTotal = 0;
      if (typeof input !== "string") {
        input = input.toString();
      }
      input.split("").forEach(function(character, idx) {
        var pos = alpha.indexOf(character);
        if (pos !== -1) {
          character = pos === 0 ? 0 : pos + 9;
        } else {
          character = parseInt(character, 10);
        }
        character *= multipliers[idx % multipliers.length];
        runningTotal += character;
      });
      return runningTotal % 10;
    };
    var generate = function(opts) {
      var pad = function(length) {
        return (new Array(length + 1)).join("<");
      };
      var number = ["P<", opts.issuer, opts.last.toUpperCase(), "<<", opts.first.toUpperCase(), pad(39 - (opts.last.length + opts.first.length + 2)), opts.passportNumber, checkDigit(opts.passportNumber), opts.nationality, opts.dob, checkDigit(opts.dob), opts.gender, opts.expiry, checkDigit(opts.expiry), pad(14), checkDigit(pad(14))].join("");
      return number + checkDigit(number.substr(44, 10) + number.substr(57, 7) + number.substr(65, 7));
    };
    var that = this;
    options = initOptions(options, {first:this.first(), last:this.last(), passportNumber:this.integer({min:1E8, max:999999999}), dob:function() {
      var date = that.birthday({type:"adult"});
      return [date.getFullYear().toString().substr(2), that.pad(date.getMonth() + 1, 2), that.pad(date.getDate(), 2)].join("");
    }(), expiry:function() {
      var date = new Date;
      return [(date.getFullYear() + 5).toString().substr(2), that.pad(date.getMonth() + 1, 2), that.pad(date.getDate(), 2)].join("");
    }(), gender:this.gender() === "Female" ? "F" : "M", issuer:"GBR", nationality:"GBR"});
    return generate(options);
  };
  Chance.prototype.name = function(options) {
    options = initOptions(options);
    var first = this.first(options), last = this.last(options), name;
    if (options.middle) {
      name = first + " " + this.first(options) + " " + last;
    } else {
      if (options.middle_initial) {
        name = first + " " + this.character({alpha:true, casing:"upper"}) + ". " + last;
      } else {
        name = first + " " + last;
      }
    }
    if (options.prefix) {
      name = this.prefix(options) + " " + name;
    }
    if (options.suffix) {
      name = name + " " + this.suffix(options);
    }
    return name;
  };
  Chance.prototype.name_prefixes = function(gender) {
    gender = gender || "all";
    gender = gender.toLowerCase();
    var prefixes = [{name:"Doctor", abbreviation:"Dr."}];
    if (gender === "male" || gender === "all") {
      prefixes.push({name:"Mister", abbreviation:"Mr."});
    }
    if (gender === "female" || gender === "all") {
      prefixes.push({name:"Miss", abbreviation:"Miss"});
      prefixes.push({name:"Misses", abbreviation:"Mrs."});
    }
    return prefixes;
  };
  Chance.prototype.prefix = function(options) {
    return this.name_prefix(options);
  };
  Chance.prototype.name_prefix = function(options) {
    options = initOptions(options, {gender:"all"});
    return options.full ? this.pick(this.name_prefixes(options.gender)).name : this.pick(this.name_prefixes(options.gender)).abbreviation;
  };
  Chance.prototype.ssn = function(options) {
    options = initOptions(options, {ssnFour:false, dashes:true});
    var ssn_pool = "1234567890", ssn, dash = options.dashes ? "-" : "";
    if (!options.ssnFour) {
      ssn = this.string({pool:ssn_pool, length:3}) + dash + this.string({pool:ssn_pool, length:2}) + dash + this.string({pool:ssn_pool, length:4});
    } else {
      ssn = this.string({pool:ssn_pool, length:4});
    }
    return ssn;
  };
  Chance.prototype.name_suffixes = function() {
    var suffixes = [{name:"Doctor of Osteopathic Medicine", abbreviation:"D.O."}, {name:"Doctor of Philosophy", abbreviation:"Ph.D."}, {name:"Esquire", abbreviation:"Esq."}, {name:"Junior", abbreviation:"Jr."}, {name:"Juris Doctor", abbreviation:"J.D."}, {name:"Master of Arts", abbreviation:"M.A."}, {name:"Master of Business Administration", abbreviation:"M.B.A."}, {name:"Master of Science", abbreviation:"M.S."}, {name:"Medical Doctor", abbreviation:"M.D."}, {name:"Senior", abbreviation:"Sr."}, {name:"The Third", 
    abbreviation:"III"}, {name:"The Fourth", abbreviation:"IV"}, {name:"Bachelor of Engineering", abbreviation:"B.E"}, {name:"Bachelor of Technology", abbreviation:"B.TECH"}];
    return suffixes;
  };
  Chance.prototype.suffix = function(options) {
    return this.name_suffix(options);
  };
  Chance.prototype.name_suffix = function(options) {
    options = initOptions(options);
    return options.full ? this.pick(this.name_suffixes()).name : this.pick(this.name_suffixes()).abbreviation;
  };
  Chance.prototype.nationalities = function() {
    return this.get("nationalities");
  };
  Chance.prototype.nationality = function() {
    var nationality = this.pick(this.nationalities());
    return nationality.name;
  };
  Chance.prototype.android_id = function() {
    return "APA91" + this.string({pool:"0123456789abcefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_", length:178});
  };
  Chance.prototype.apple_token = function() {
    return this.string({pool:"abcdef1234567890", length:64});
  };
  Chance.prototype.wp8_anid2 = function() {
    return base64(this.hash({length:32}));
  };
  Chance.prototype.wp7_anid = function() {
    return "A=" + this.guid().replace(/-/g, "").toUpperCase() + "&E=" + this.hash({length:3}) + "&W=" + this.integer({min:0, max:9});
  };
  Chance.prototype.bb_pin = function() {
    return this.hash({length:8});
  };
  Chance.prototype.avatar = function(options) {
    var url = null;
    var URL_BASE = "//www.gravatar.com/avatar/";
    var PROTOCOLS = {http:"http", https:"https"};
    var FILE_TYPES = {bmp:"bmp", gif:"gif", jpg:"jpg", png:"png"};
    var FALLBACKS = {404:"404", mm:"mm", identicon:"identicon", monsterid:"monsterid", wavatar:"wavatar", retro:"retro", blank:"blank"};
    var RATINGS = {g:"g", pg:"pg", r:"r", x:"x"};
    var opts = {protocol:null, email:null, fileExtension:null, size:null, fallback:null, rating:null};
    if (!options) {
      opts.email = this.email();
      options = {};
    } else {
      if (typeof options === "string") {
        opts.email = options;
        options = {};
      } else {
        if (typeof options !== "object") {
          return null;
        } else {
          if (options.constructor === "Array") {
            return null;
          }
        }
      }
    }
    opts = initOptions(options, opts);
    if (!opts.email) {
      opts.email = this.email();
    }
    opts.protocol = PROTOCOLS[opts.protocol] ? opts.protocol + ":" : "";
    opts.size = parseInt(opts.size, 0) ? opts.size : "";
    opts.rating = RATINGS[opts.rating] ? opts.rating : "";
    opts.fallback = FALLBACKS[opts.fallback] ? opts.fallback : "";
    opts.fileExtension = FILE_TYPES[opts.fileExtension] ? opts.fileExtension : "";
    url = opts.protocol + URL_BASE + this.bimd5.md5(opts.email) + (opts.fileExtension ? "." + opts.fileExtension : "") + (opts.size || opts.rating || opts.fallback ? "?" : "") + (opts.size ? "&s=" + opts.size.toString() : "") + (opts.rating ? "&r=" + opts.rating : "") + (opts.fallback ? "&d=" + opts.fallback : "");
    return url;
  };
  Chance.prototype.color = function(options) {
    function gray(value, delimiter) {
      return [value, value, value].join(delimiter || "");
    }
    function rgb(hasAlpha) {
      var rgbValue = hasAlpha ? "rgba" : "rgb";
      var alphaChanal = hasAlpha ? "," + this.floating({min:0, max:1}) : "";
      var colorValue = isGrayscale ? gray(this.natural({max:255}), ",") : this.natural({max:255}) + "," + this.natural({max:255}) + "," + this.natural({max:255});
      return rgbValue + "(" + colorValue + alphaChanal + ")";
    }
    function hex(start, end, withHash) {
      var simbol = withHash ? "#" : "";
      var expression = isGrayscale ? gray(this.hash({length:start})) : this.hash({length:end});
      return simbol + expression;
    }
    options = initOptions(options, {format:this.pick(["hex", "shorthex", "rgb", "rgba", "0x", "name"]), grayscale:false, casing:"lower"});
    var isGrayscale = options.grayscale;
    var colorValue;
    if (options.format === "hex") {
      colorValue = hex.call(this, 2, 6, true);
    } else {
      if (options.format === "shorthex") {
        colorValue = hex.call(this, 1, 3, true);
      } else {
        if (options.format === "rgb") {
          colorValue = rgb.call(this, false);
        } else {
          if (options.format === "rgba") {
            colorValue = rgb.call(this, true);
          } else {
            if (options.format === "0x") {
              colorValue = "0x" + hex.call(this, 2, 6);
            } else {
              if (options.format === "name") {
                return this.pick(this.get("colorNames"));
              } else {
                throw new RangeError('Invalid format provided. Please provide one of "hex", "shorthex", "rgb", "rgba", "0x" or "name".');
              }
            }
          }
        }
      }
    }
    if (options.casing === "upper") {
      colorValue = colorValue.toUpperCase();
    }
    return colorValue;
  };
  Chance.prototype.domain = function(options) {
    options = initOptions(options);
    return this.word() + "." + (options.tld || this.tld());
  };
  Chance.prototype.email = function(options) {
    options = initOptions(options);
    return this.word({length:options.length}) + "@" + (options.domain || this.domain());
  };
  Chance.prototype.fbid = function() {
    return parseInt("10000" + this.natural({max:1E11}), 10);
  };
  Chance.prototype.google_analytics = function() {
    var account = this.pad(this.natural({max:999999}), 6);
    var property = this.pad(this.natural({max:99}), 2);
    return "UA-" + account + "-" + property;
  };
  Chance.prototype.hashtag = function() {
    return "#" + this.word();
  };
  Chance.prototype.ip = function() {
    return this.natural({min:1, max:254}) + "." + this.natural({max:255}) + "." + this.natural({max:255}) + "." + this.natural({min:1, max:254});
  };
  Chance.prototype.ipv6 = function() {
    var ip_addr = this.n(this.hash, 8, {length:4});
    return ip_addr.join(":");
  };
  Chance.prototype.klout = function() {
    return this.natural({min:1, max:99});
  };
  Chance.prototype.semver = function(options) {
    options = initOptions(options, {include_prerelease:true});
    var range = this.pickone(["^", "~", "<", ">", "<=", ">=", "="]);
    if (options.range) {
      range = options.range;
    }
    var prerelease = "";
    if (options.include_prerelease) {
      prerelease = this.weighted(["", "-dev", "-beta", "-alpha"], [50, 10, 5, 1]);
    }
    return range + this.rpg("3d10").join(".") + prerelease;
  };
  Chance.prototype.tlds = function() {
    return ["com", "org", "edu", "gov", "co.uk", "net", "io", "ac", "ad", "ae", "af", "ag", "ai", "al", "am", "an", "ao", "aq", "ar", "as", "at", "au", "aw", "ax", "az", "ba", "bb", "bd", "be", "bf", "bg", "bh", "bi", "bj", "bm", "bn", "bo", "bq", "br", "bs", "bt", "bv", "bw", "by", "bz", "ca", "cc", "cd", "cf", "cg", "ch", "ci", "ck", "cl", "cm", "cn", "co", "cr", "cu", "cv", "cw", "cx", "cy", "cz", "de", "dj", "dk", "dm", "do", "dz", "ec", "ee", "eg", "eh", "er", "es", "et", "eu", "fi", "fj", "fk", 
    "fm", "fo", "fr", "ga", "gb", "gd", "ge", "gf", "gg", "gh", "gi", "gl", "gm", "gn", "gp", "gq", "gr", "gs", "gt", "gu", "gw", "gy", "hk", "hm", "hn", "hr", "ht", "hu", "id", "ie", "il", "im", "in", "io", "iq", "ir", "is", "it", "je", "jm", "jo", "jp", "ke", "kg", "kh", "ki", "km", "kn", "kp", "kr", "kw", "ky", "kz", "la", "lb", "lc", "li", "lk", "lr", "ls", "lt", "lu", "lv", "ly", "ma", "mc", "md", "me", "mg", "mh", "mk", "ml", "mm", "mn", "mo", "mp", "mq", "mr", "ms", "mt", "mu", "mv", "mw", 
    "mx", "my", "mz", "na", "nc", "ne", "nf", "ng", "ni", "nl", "no", "np", "nr", "nu", "nz", "om", "pa", "pe", "pf", "pg", "ph", "pk", "pl", "pm", "pn", "pr", "ps", "pt", "pw", "py", "qa", "re", "ro", "rs", "ru", "rw", "sa", "sb", "sc", "sd", "se", "sg", "sh", "si", "sj", "sk", "sl", "sm", "sn", "so", "sr", "ss", "st", "su", "sv", "sx", "sy", "sz", "tc", "td", "tf", "tg", "th", "tj", "tk", "tl", "tm", "tn", "to", "tp", "tr", "tt", "tv", "tw", "tz", "ua", "ug", "uk", "us", "uy", "uz", "va", "vc", 
    "ve", "vg", "vi", "vn", "vu", "wf", "ws", "ye", "yt", "za", "zm", "zw"];
  };
  Chance.prototype.tld = function() {
    return this.pick(this.tlds());
  };
  Chance.prototype.twitter = function() {
    return "@" + this.word();
  };
  Chance.prototype.url = function(options) {
    options = initOptions(options, {protocol:"http", domain:this.domain(options), domain_prefix:"", path:this.word(), extensions:[]});
    var extension = options.extensions.length > 0 ? "." + this.pick(options.extensions) : "";
    var domain = options.domain_prefix ? options.domain_prefix + "." + options.domain : options.domain;
    return options.protocol + "://" + domain + "/" + options.path + extension;
  };
  Chance.prototype.address = function(options) {
    options = initOptions(options);
    return this.natural({min:5, max:2E3}) + " " + this.street(options);
  };
  Chance.prototype.altitude = function(options) {
    options = initOptions(options, {fixed:5, min:0, max:8848});
    return this.floating({min:options.min, max:options.max, fixed:options.fixed});
  };
  Chance.prototype.areacode = function(options) {
    options = initOptions(options, {parens:true});
    var areacode = this.natural({min:2, max:9}).toString() + this.natural({min:0, max:8}).toString() + this.natural({min:0, max:9}).toString();
    return options.parens ? "(" + areacode + ")" : areacode;
  };
  Chance.prototype.city = function() {
    return this.capitalize(this.word({syllables:3}));
  };
  Chance.prototype.coordinates = function(options) {
    return this.latitude(options) + ", " + this.longitude(options);
  };
  Chance.prototype.countries = function() {
    return this.get("countries");
  };
  Chance.prototype.country = function(options) {
    options = initOptions(options);
    var country = this.pick(this.countries());
    return options.full ? country.name : country.abbreviation;
  };
  Chance.prototype.depth = function(options) {
    options = initOptions(options, {fixed:5, min:-10994, max:0});
    return this.floating({min:options.min, max:options.max, fixed:options.fixed});
  };
  Chance.prototype.geohash = function(options) {
    options = initOptions(options, {length:7});
    return this.string({length:options.length, pool:"0123456789bcdefghjkmnpqrstuvwxyz"});
  };
  Chance.prototype.geojson = function(options) {
    return this.latitude(options) + ", " + this.longitude(options) + ", " + this.altitude(options);
  };
  Chance.prototype.latitude = function(options) {
    options = initOptions(options, {fixed:5, min:-90, max:90});
    return this.floating({min:options.min, max:options.max, fixed:options.fixed});
  };
  Chance.prototype.longitude = function(options) {
    options = initOptions(options, {fixed:5, min:-180, max:180});
    return this.floating({min:options.min, max:options.max, fixed:options.fixed});
  };
  Chance.prototype.phone = function(options) {
    var self = this, numPick, ukNum = function(parts) {
      var section = [];
      parts.sections.forEach(function(n) {
        section.push(self.string({pool:"0123456789", length:n}));
      });
      return parts.area + section.join(" ");
    };
    options = initOptions(options, {formatted:true, country:"us", mobile:false});
    if (!options.formatted) {
      options.parens = false;
    }
    var phone;
    switch(options.country) {
      case "fr":
        if (!options.mobile) {
          numPick = this.pick(["01" + this.pick(["30", "34", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "53", "55", "56", "58", "60", "64", "69", "70", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83"]) + self.string({pool:"0123456789", length:6}), "02" + this.pick(["14", "18", "22", "23", "28", "29", "30", "31", "32", "33", "34", "35", "36", "37", "38", "40", "41", "43", "44", "45", "46", "47", "48", "49", "50", "51", "52", "53", "54", "56", "57", "61", 
          "62", "69", "72", "76", "77", "78", "85", "90", "96", "97", "98", "99"]) + self.string({pool:"0123456789", length:6}), "03" + this.pick(["10", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "39", "44", "45", "51", "52", "54", "55", "57", "58", "59", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "70", "71", "72", "73", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "90"]) + self.string({pool:"0123456789", length:6}), "04" + this.pick(["11", "13", "15", 
          "20", "22", "26", "27", "30", "32", "34", "37", "42", "43", "44", "50", "56", "57", "63", "66", "67", "68", "69", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "80", "81", "82", "83", "84", "85", "86", "88", "89", "90", "91", "92", "93", "94", "95", "97", "98"]) + self.string({pool:"0123456789", length:6}), "05" + this.pick(["08", "16", "17", "19", "24", "31", "32", "33", "34", "35", "40", "45", "46", "47", "49", "53", "55", "56", "57", "58", "59", "61", "62", "63", "64", 
          "65", "67", "79", "81", "82", "86", "87", "90", "94"]) + self.string({pool:"0123456789", length:6}), "09" + self.string({pool:"0123456789", length:8})]);
          phone = options.formatted ? numPick.match(/../g).join(" ") : numPick;
        } else {
          numPick = this.pick(["06", "07"]) + self.string({pool:"0123456789", length:8});
          phone = options.formatted ? numPick.match(/../g).join(" ") : numPick;
        }
        break;
      case "uk":
        if (!options.mobile) {
          numPick = this.pick([{area:"01" + this.character({pool:"234569"}) + "1 ", sections:[3, 4]}, {area:"020 " + this.character({pool:"378"}), sections:[3, 4]}, {area:"023 " + this.character({pool:"89"}), sections:[3, 4]}, {area:"024 7", sections:[3, 4]}, {area:"028 " + this.pick(["25", "28", "37", "71", "82", "90", "92", "95"]), sections:[2, 4]}, {area:"012" + this.pick(["04", "08", "54", "76", "97", "98"]) + " ", sections:[5]}, {area:"013" + this.pick(["63", "64", "84", "86"]) + " ", sections:[5]}, 
          {area:"014" + this.pick(["04", "20", "60", "61", "80", "88"]) + " ", sections:[5]}, {area:"015" + this.pick(["24", "27", "62", "66"]) + " ", sections:[5]}, {area:"016" + this.pick(["06", "29", "35", "47", "59", "95"]) + " ", sections:[5]}, {area:"017" + this.pick(["26", "44", "50", "68"]) + " ", sections:[5]}, {area:"018" + this.pick(["27", "37", "84", "97"]) + " ", sections:[5]}, {area:"019" + this.pick(["00", "05", "35", "46", "49", "63", "95"]) + " ", sections:[5]}]);
          phone = options.formatted ? ukNum(numPick) : ukNum(numPick).replace(" ", "", "g");
        } else {
          numPick = this.pick([{area:"07" + this.pick(["4", "5", "7", "8", "9"]), sections:[2, 6]}, {area:"07624 ", sections:[6]}]);
          phone = options.formatted ? ukNum(numPick) : ukNum(numPick).replace(" ", "");
        }
        break;
      case "us":
        var areacode = this.areacode(options).toString();
        var exchange = this.natural({min:2, max:9}).toString() + this.natural({min:0, max:9}).toString() + this.natural({min:0, max:9}).toString();
        var subscriber = this.natural({min:1E3, max:9999}).toString();
        phone = options.formatted ? areacode + " " + exchange + "-" + subscriber : areacode + exchange + subscriber;
    }
    return phone;
  };
  Chance.prototype.postal = function() {
    var pd = this.character({pool:"XVTSRPNKLMHJGECBA"});
    var fsa = pd + this.natural({max:9}) + this.character({alpha:true, casing:"upper"});
    var ldu = this.natural({max:9}) + this.character({alpha:true, casing:"upper"}) + this.natural({max:9});
    return fsa + " " + ldu;
  };
  Chance.prototype.provinces = function() {
    return this.get("provinces");
  };
  Chance.prototype.province = function(options) {
    return options && options.full ? this.pick(this.provinces()).name : this.pick(this.provinces()).abbreviation;
  };
  Chance.prototype.state = function(options) {
    return options && options.full ? this.pick(this.states(options)).name : this.pick(this.states(options)).abbreviation;
  };
  Chance.prototype.states = function(options) {
    options = initOptions(options, {us_states_and_dc:true});
    var states, us_states_and_dc = this.get("us_states_and_dc"), territories = this.get("territories"), armed_forces = this.get("armed_forces");
    states = [];
    if (options.us_states_and_dc) {
      states = states.concat(us_states_and_dc);
    }
    if (options.territories) {
      states = states.concat(territories);
    }
    if (options.armed_forces) {
      states = states.concat(armed_forces);
    }
    return states;
  };
  Chance.prototype.street = function(options) {
    options = initOptions(options);
    var street = this.word({syllables:2});
    street = this.capitalize(street);
    street += " ";
    street += options.short_suffix ? this.street_suffix().abbreviation : this.street_suffix().name;
    return street;
  };
  Chance.prototype.street_suffix = function() {
    return this.pick(this.street_suffixes());
  };
  Chance.prototype.street_suffixes = function() {
    return this.get("street_suffixes");
  };
  Chance.prototype.zip = function(options) {
    var zip = this.n(this.natural, 5, {max:9});
    if (options && options.plusfour === true) {
      zip.push("-");
      zip = zip.concat(this.n(this.natural, 4, {max:9}));
    }
    return zip.join("");
  };
  Chance.prototype.ampm = function() {
    return this.bool() ? "am" : "pm";
  };
  Chance.prototype.date = function(options) {
    var date_string, date;
    if (options && (options.min || options.max)) {
      options = initOptions(options, {american:true, string:false});
      var min = typeof options.min !== "undefined" ? options.min.getTime() : 1;
      var max = typeof options.max !== "undefined" ? options.max.getTime() : 864E13;
      date = new Date(this.natural({min:min, max:max}));
    } else {
      var m = this.month({raw:true});
      var daysInMonth = m.days;
      if (options && options.month) {
        daysInMonth = this.get("months")[(options.month % 12 + 12) % 12].days;
      }
      options = initOptions(options, {year:parseInt(this.year(), 10), month:m.numeric - 1, day:this.natural({min:1, max:daysInMonth}), hour:this.hour(), minute:this.minute(), second:this.second(), millisecond:this.millisecond(), american:true, string:false});
      date = new Date(options.year, options.month, options.day, options.hour, options.minute, options.second, options.millisecond);
    }
    if (options.american) {
      date_string = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    } else {
      date_string = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }
    return options.string ? date_string : date;
  };
  Chance.prototype.hammertime = function(options) {
    return this.date(options).getTime();
  };
  Chance.prototype.hour = function(options) {
    options = initOptions(options, {min:options && options.twentyfour ? 0 : 1, max:options && options.twentyfour ? 23 : 12});
    testRange(options.min < 0, "Chance: Min cannot be less than 0.");
    testRange(options.twentyfour && options.max > 23, "Chance: Max cannot be greater than 23 for twentyfour option.");
    testRange(!options.twentyfour && options.max > 12, "Chance: Max cannot be greater than 12.");
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");
    return this.natural({min:options.min, max:options.max});
  };
  Chance.prototype.millisecond = function() {
    return this.natural({max:999});
  };
  Chance.prototype.minute = Chance.prototype.second = function(options) {
    options = initOptions(options, {min:0, max:59});
    testRange(options.min < 0, "Chance: Min cannot be less than 0.");
    testRange(options.max > 59, "Chance: Max cannot be greater than 59.");
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");
    return this.natural({min:options.min, max:options.max});
  };
  Chance.prototype.month = function(options) {
    options = initOptions(options, {min:1, max:12});
    testRange(options.min < 1, "Chance: Min cannot be less than 1.");
    testRange(options.max > 12, "Chance: Max cannot be greater than 12.");
    testRange(options.min > options.max, "Chance: Min cannot be greater than Max.");
    var month = this.pick(this.months().slice(options.min - 1, options.max));
    return options.raw ? month : month.name;
  };
  Chance.prototype.months = function() {
    return this.get("months");
  };
  Chance.prototype.second = function() {
    return this.natural({max:59});
  };
  Chance.prototype.timestamp = function() {
    return this.natural({min:1, max:parseInt((new Date).getTime() / 1E3, 10)});
  };
  Chance.prototype.weekday = function(options) {
    options = initOptions(options, {weekday_only:false});
    var weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    if (!options.weekday_only) {
      weekdays.push("Saturday");
      weekdays.push("Sunday");
    }
    return this.pickone(weekdays);
  };
  Chance.prototype.year = function(options) {
    options = initOptions(options, {min:(new Date).getFullYear()});
    options.max = typeof options.max !== "undefined" ? options.max : options.min + 100;
    return this.natural(options).toString();
  };
  Chance.prototype.cc = function(options) {
    options = initOptions(options);
    var type, number, to_generate;
    type = options.type ? this.cc_type({name:options.type, raw:true}) : this.cc_type({raw:true});
    number = type.prefix.split("");
    to_generate = type.length - type.prefix.length - 1;
    number = number.concat(this.n(this.integer, to_generate, {min:0, max:9}));
    number.push(this.luhn_calculate(number.join("")));
    return number.join("");
  };
  Chance.prototype.cc_types = function() {
    return this.get("cc_types");
  };
  Chance.prototype.cc_type = function(options) {
    options = initOptions(options);
    var types = this.cc_types(), type = null;
    if (options.name) {
      for (var i = 0;i < types.length;i++) {
        if (types[i].name === options.name || types[i].short_name === options.name) {
          type = types[i];
          break;
        }
      }
      if (type === null) {
        throw new RangeError("Credit card type '" + options.name + "'' is not supported");
      }
    } else {
      type = this.pick(types);
    }
    return options.raw ? type : type.name;
  };
  Chance.prototype.currency_types = function() {
    return this.get("currency_types");
  };
  Chance.prototype.currency = function() {
    return this.pick(this.currency_types());
  };
  Chance.prototype.currency_pair = function(returnAsString) {
    var currencies = this.unique(this.currency, 2, {comparator:function(arr, val) {
      return arr.reduce(function(acc, item) {
        return acc || item.code === val.code;
      }, false);
    }});
    if (returnAsString) {
      return currencies[0].code + "/" + currencies[1].code;
    } else {
      return currencies;
    }
  };
  Chance.prototype.dollar = function(options) {
    options = initOptions(options, {max:1E4, min:0});
    var dollar = this.floating({min:options.min, max:options.max, fixed:2}).toString(), cents = dollar.split(".")[1];
    if (cents === undefined) {
      dollar += ".00";
    } else {
      if (cents.length < 2) {
        dollar = dollar + "0";
      }
    }
    if (dollar < 0) {
      return "-$" + dollar.replace("-", "");
    } else {
      return "$" + dollar;
    }
  };
  Chance.prototype.exp = function(options) {
    options = initOptions(options);
    var exp = {};
    exp.year = this.exp_year();
    if (exp.year === (new Date).getFullYear().toString()) {
      exp.month = this.exp_month({future:true});
    } else {
      exp.month = this.exp_month();
    }
    return options.raw ? exp : exp.month + "/" + exp.year;
  };
  Chance.prototype.exp_month = function(options) {
    options = initOptions(options);
    var month, month_int, curMonth = (new Date).getMonth() + 1;
    if (options.future && curMonth !== 12) {
      do {
        month = this.month({raw:true}).numeric;
        month_int = parseInt(month, 10);
      } while (month_int <= curMonth);
    } else {
      month = this.month({raw:true}).numeric;
    }
    return month;
  };
  Chance.prototype.exp_year = function() {
    var curMonth = (new Date).getMonth() + 1, curYear = (new Date).getFullYear();
    return this.year({min:curMonth === 12 ? curYear + 1 : curYear, max:curYear + 10});
  };
  Chance.prototype.pl_pesel = function() {
    var number = this.natural({min:1, max:9999999999});
    var arr = this.pad(number, 10).split("");
    for (var i = 0;i < arr.length;i++) {
      arr[i] = parseInt(arr[i]);
    }
    var controlNumber = (1 * arr[0] + 3 * arr[1] + 7 * arr[2] + 9 * arr[3] + 1 * arr[4] + 3 * arr[5] + 7 * arr[6] + 9 * arr[7] + 1 * arr[8] + 3 * arr[9]) % 10;
    if (controlNumber !== 0) {
      controlNumber = 10 - controlNumber;
    }
    return arr.join("") + controlNumber;
  };
  Chance.prototype.pl_nip = function() {
    var number = this.natural({min:1, max:999999999});
    var arr = this.pad(number, 9).split("");
    for (var i = 0;i < arr.length;i++) {
      arr[i] = parseInt(arr[i]);
    }
    var controlNumber = (6 * arr[0] + 5 * arr[1] + 7 * arr[2] + 2 * arr[3] + 3 * arr[4] + 4 * arr[5] + 5 * arr[6] + 6 * arr[7] + 7 * arr[8]) % 11;
    if (controlNumber === 10) {
      return this.pl_nip();
    }
    return arr.join("") + controlNumber;
  };
  Chance.prototype.pl_regon = function() {
    var number = this.natural({min:1, max:99999999});
    var arr = this.pad(number, 8).split("");
    for (var i = 0;i < arr.length;i++) {
      arr[i] = parseInt(arr[i]);
    }
    var controlNumber = (8 * arr[0] + 9 * arr[1] + 2 * arr[2] + 3 * arr[3] + 4 * arr[4] + 5 * arr[5] + 6 * arr[6] + 7 * arr[7]) % 11;
    if (controlNumber === 10) {
      controlNumber = 0;
    }
    return arr.join("") + controlNumber;
  };
  function diceFn(range) {
    return function() {
      return this.natural(range);
    };
  }
  Chance.prototype.d4 = diceFn({min:1, max:4});
  Chance.prototype.d6 = diceFn({min:1, max:6});
  Chance.prototype.d8 = diceFn({min:1, max:8});
  Chance.prototype.d10 = diceFn({min:1, max:10});
  Chance.prototype.d12 = diceFn({min:1, max:12});
  Chance.prototype.d20 = diceFn({min:1, max:20});
  Chance.prototype.d30 = diceFn({min:1, max:30});
  Chance.prototype.d100 = diceFn({min:1, max:100});
  Chance.prototype.rpg = function(thrown, options) {
    options = initOptions(options);
    if (!thrown) {
      throw new RangeError("A type of die roll must be included");
    } else {
      var bits = thrown.toLowerCase().split("d"), rolls = [];
      if (bits.length !== 2 || !parseInt(bits[0], 10) || !parseInt(bits[1], 10)) {
        throw new Error("Invalid format provided. Please provide #d# where the first # is the number of dice to roll, the second # is the max of each die");
      }
      for (var i = bits[0];i > 0;i--) {
        rolls[i - 1] = this.natural({min:1, max:bits[1]});
      }
      return typeof options.sum !== "undefined" && options.sum ? rolls.reduce(function(p, c) {
        return p + c;
      }) : rolls;
    }
  };
  Chance.prototype.guid = function(options) {
    options = initOptions(options, {version:5});
    var guid_pool = "abcdef1234567890", variant_pool = "ab89", guid = this.string({pool:guid_pool, length:8}) + "-" + this.string({pool:guid_pool, length:4}) + "-" + options.version + this.string({pool:guid_pool, length:3}) + "-" + this.string({pool:variant_pool, length:1}) + this.string({pool:guid_pool, length:3}) + "-" + this.string({pool:guid_pool, length:12});
    return guid;
  };
  Chance.prototype.hash = function(options) {
    options = initOptions(options, {length:40, casing:"lower"});
    var pool = options.casing === "upper" ? HEX_POOL.toUpperCase() : HEX_POOL;
    return this.string({pool:pool, length:options.length});
  };
  Chance.prototype.luhn_check = function(num) {
    var str = num.toString();
    var checkDigit = +str.substring(str.length - 1);
    return checkDigit === this.luhn_calculate(+str.substring(0, str.length - 1));
  };
  Chance.prototype.luhn_calculate = function(num) {
    var digits = num.toString().split("").reverse();
    var sum = 0;
    var digit;
    for (var i = 0, l = digits.length;l > i;++i) {
      digit = +digits[i];
      if (i % 2 === 0) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
    }
    return sum * 9 % 10;
  };
  Chance.prototype.md5 = function(options) {
    var opts = {str:"", key:null, raw:false};
    if (!options) {
      opts.str = this.string();
      options = {};
    } else {
      if (typeof options === "string") {
        opts.str = options;
        options = {};
      } else {
        if (typeof options !== "object") {
          return null;
        } else {
          if (options.constructor === "Array") {
            return null;
          }
        }
      }
    }
    opts = initOptions(options, opts);
    if (!opts.str) {
      throw new Error("A parameter is required to return an md5 hash.");
    }
    return this.bimd5.md5(opts.str, opts.key, opts.raw);
  };
  Chance.prototype.file = function(options) {
    var fileOptions = options || {};
    var poolCollectionKey = "fileExtension";
    var typeRange = Object.keys(this.get("fileExtension"));
    var fileName;
    var fileExtention;
    fileName = this.word({length:fileOptions.length});
    if (fileOptions.extention) {
      fileExtention = fileOptions.extention;
      return fileName + "." + fileExtention;
    }
    if (fileOptions.extentions) {
      if (Array.isArray(fileOptions.extentions)) {
        fileExtention = this.pickone(fileOptions.extentions);
        return fileName + "." + fileExtention;
      } else {
        if (fileOptions.extentions.constructor === Object) {
          var extentionObjectCollection = fileOptions.extentions;
          var keys = Object.keys(extentionObjectCollection);
          fileExtention = this.pickone(extentionObjectCollection[this.pickone(keys)]);
          return fileName + "." + fileExtention;
        }
      }
      throw new Error("Expect collection of type Array or Object to be passed as an argument ");
    }
    if (fileOptions.fileType) {
      var fileType = fileOptions.fileType;
      if (typeRange.indexOf(fileType) !== -1) {
        fileExtention = this.pickone(this.get(poolCollectionKey)[fileType]);
        return fileName + "." + fileExtention;
      }
      throw new Error("Expect file type value to be 'raster', 'vector', '3d' or 'document' ");
    }
    fileExtention = this.pickone(this.get(poolCollectionKey)[this.pickone(typeRange)]);
    return fileName + "." + fileExtention;
  };
  var data = {firstNames:{"male":{"en":["James", "John", "Robert", "Michael", "William", "David", "Richard", "Joseph", "Charles", "Thomas", "Christopher", "Daniel", "Matthew", "George", "Donald", "Anthony", "Paul", "Mark", "Edward", "Steven", "Kenneth", "Andrew", "Brian", "Joshua", "Kevin", "Ronald", "Timothy", "Jason", "Jeffrey", "Frank", "Gary", "Ryan", "Nicholas", "Eric", "Stephen", "Jacob", "Larry", "Jonathan", "Scott", "Raymond", "Justin", "Brandon", "Gregory", "Samuel", "Benjamin", "Patrick", 
  "Jack", "Henry", "Walter", "Dennis", "Jerry", "Alexander", "Peter", "Tyler", "Douglas", "Harold", "Aaron", "Jose", "Adam", "Arthur", "Zachary", "Carl", "Nathan", "Albert", "Kyle", "Lawrence", "Joe", "Willie", "Gerald", "Roger", "Keith", "Jeremy", "Terry", "Harry", "Ralph", "Sean", "Jesse", "Roy", "Louis", "Billy", "Austin", "Bruce", "Eugene", "Christian", "Bryan", "Wayne", "Russell", "Howard", "Fred", "Ethan", "Jordan", "Philip", "Alan", "Juan", "Randy", "Vincent", "Bobby", "Dylan", "Johnny", "Phillip", 
  "Victor", "Clarence", "Ernest", "Martin", "Craig", "Stanley", "Shawn", "Travis", "Bradley", "Leonard", "Earl", "Gabriel", "Jimmy", "Francis", "Todd", "Noah", "Danny", "Dale", "Cody", "Carlos", "Allen", "Frederick", "Logan", "Curtis", "Alex", "Joel", "Luis", "Norman", "Marvin", "Glenn", "Tony", "Nathaniel", "Rodney", "Melvin", "Alfred", "Steve", "Cameron", "Chad", "Edwin", "Caleb", "Evan", "Antonio", "Lee", "Herbert", "Jeffery", "Isaac", "Derek", "Ricky", "Marcus", "Theodore", "Elijah", "Luke", 
  "Jesus", "Eddie", "Troy", "Mike", "Dustin", "Ray", "Adrian", "Bernard", "Leroy", "Angel", "Randall", "Wesley", "Ian", "Jared", "Mason", "Hunter", "Calvin", "Oscar", "Clifford", "Jay", "Shane", "Ronnie", "Barry", "Lucas", "Corey", "Manuel", "Leo", "Tommy", "Warren", "Jackson", "Isaiah", "Connor", "Don", "Dean", "Jon", "Julian", "Miguel", "Bill", "Lloyd", "Charlie", "Mitchell", "Leon", "Jerome", "Darrell", "Jeremiah", "Alvin", "Brett", "Seth", "Floyd", "Jim", "Blake", "Micheal", "Gordon", "Trevor", 
  "Lewis", "Erik", "Edgar", "Vernon", "Devin", "Gavin", "Jayden", "Chris", "Clyde", "Tom", "Derrick", "Mario", "Brent", "Marc", "Herman", "Chase", "Dominic", "Ricardo", "Franklin", "Maurice", "Max", "Aiden", "Owen", "Lester", "Gilbert", "Elmer", "Gene", "Francisco", "Glen", "Cory", "Garrett", "Clayton", "Sam", "Jorge", "Chester", "Alejandro", "Jeff", "Harvey", "Milton", "Cole", "Ivan", "Andre", "Duane", "Landon"], "it":["Francesco", "Alessandro", "Lorenzo", "Andrea", "Marco", "Leonardo", "Matteo", 
  "Federico", "Mattia", "Riccardo", "Luca", "Davide", "Gabriele", "Edoardo", "Tommaso", "Giacomo", "Simone", "Christian", "Stefano", "Diego", "Filippo", "Giuseppe"]}, "female":{"en":["Mary", "Emma", "Elizabeth", "Minnie", "Margaret", "Ida", "Alice", "Bertha", "Sarah", "Annie", "Clara", "Ella", "Florence", "Cora", "Martha", "Laura", "Nellie", "Grace", "Carrie", "Maude", "Mabel", "Bessie", "Jennie", "Gertrude", "Julia", "Hattie", "Edith", "Mattie", "Rose", "Catherine", "Lillian", "Ada", "Lillie", "Helen", 
  "Jessie", "Louise", "Ethel", "Lula", "Myrtle", "Eva", "Frances", "Lena", "Lucy", "Edna", "Maggie", "Pearl", "Daisy", "Fannie", "Josephine", "Dora", "Rosa", "Katherine", "Agnes", "Marie", "Nora", "May", "Mamie", "Blanche", "Stella", "Ellen", "Nancy", "Effie", "Sallie", "Nettie", "Della", "Lizzie", "Flora", "Susie", "Maud", "Mae", "Etta", "Harriet", "Sadie", "Caroline", "Katie", "Lydia", "Elsie", "Kate", "Susan", "Mollie", "Alma", "Addie", "Georgia", "Eliza", "Lulu", "Nannie", "Lottie", "Amanda", 
  "Belle", "Charlotte", "Rebecca", "Ruth", "Viola", "Olive", "Amelia", "Hannah", "Jane", "Virginia", "Emily", "Matilda", "Irene", "Kathryn", "Esther", "Willie", "Henrietta", "Ollie", "Amy", "Rachel", "Sara", "Estella", "Theresa", "Augusta", "Ora", "Pauline", "Josie", "Lola", "Sophia", "Leona", "Anne", "Mildred", "Ann", "Beulah", "Callie", "Lou", "Delia", "Eleanor", "Barbara", "Iva", "Louisa", "Maria", "Mayme", "Evelyn", "Estelle", "Nina", "Betty", "Marion", "Bettie", "Dorothy", "Luella", "Inez", 
  "Lela", "Rosie", "Allie", "Millie", "Janie", "Cornelia", "Victoria", "Ruby", "Winifred", "Alta", "Celia", "Christine", "Beatrice", "Birdie", "Harriett", "Mable", "Myra", "Sophie", "Tillie", "Isabel", "Sylvia", "Carolyn", "Isabelle", "Leila", "Sally", "Ina", "Essie", "Bertie", "Nell", "Alberta", "Katharine", "Lora", "Rena", "Mina", "Rhoda", "Mathilda", "Abbie", "Eula", "Dollie", "Hettie", "Eunice", "Fanny", "Ola", "Lenora", "Adelaide", "Christina", "Lelia", "Nelle", "Sue", "Johanna", "Lilly", "Lucinda", 
  "Minerva", "Lettie", "Roxie", "Cynthia", "Helena", "Hilda", "Hulda", "Bernice", "Genevieve", "Jean", "Cordelia", "Marian", "Francis", "Jeanette", "Adeline", "Gussie", "Leah", "Lois", "Lura", "Mittie", "Hallie", "Isabella", "Olga", "Phoebe", "Teresa", "Hester", "Lida", "Lina", "Winnie", "Claudia", "Marguerite", "Vera", "Cecelia", "Bess", "Emilie", "John", "Rosetta", "Verna", "Myrtie", "Cecilia", "Elva", "Olivia", "Ophelia", "Georgie", "Elnora", "Violet", "Adele", "Lily", "Linnie", "Loretta", "Madge", 
  "Polly", "Virgie", "Eugenia", "Lucile", "Lucille", "Mabelle", "Rosalie"], "it":["Sofia", "Giulia", "Martina", "Giorgia", "Emma", "Chiara", "Aurora", "Sara", "Alice", "Beatrice", "Ginevra", "Elena", "Alessia", "Greta", "Francesca", "Eleonora", "Viola", "Anna", "Elisa", "Giada", "Matilde", "Laura", "Nicole", "Asia", "Camilla", "Arianna", "Rachele", "Rebecca", "Gaia"]}}, lastNames:{"en":["Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor", "Anderson", "Thomas", 
  "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson", "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King", "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Gonzalez", "Nelson", "Carter", "Mitchell", "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart", "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera", "Cooper", 
  "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James", "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson", "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler", "Simmons", "Foster", "Gonzales", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers", "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens", "Reynolds", 
  "Fisher", "Ellis", "Harrison", "Gibson", "McDonald", "Cruz", "Marshall", "Ortiz", "Gomez", "Murray", "Freeman", "Wells", "Webb", "Simpson", "Stevens", "Tucker", "Porter", "Hunter", "Hicks", "Crawford", "Henry", "Boyd", "Mason", "Morales", "Kennedy", "Warren", "Dixon", "Ramos", "Reyes", "Burns", "Gordon", "Shaw", "Holmes", "Rice", "Robertson", "Hunt", "Black", "Daniels", "Palmer", "Mills", "Nichols", "Grant", "Knight", "Ferguson", "Rose", "Stone", "Hawkins", "Dunn", "Perkins", "Hudson", "Spencer", 
  "Gardner", "Stephens", "Payne", "Pierce", "Berry", "Matthews", "Arnold", "Wagner", "Willis", "Ray", "Watkins", "Olson", "Carroll", "Duncan", "Snyder", "Hart", "Cunningham", "Bradley", "Lane", "Andrews", "Ruiz", "Harper", "Fox", "Riley", "Armstrong", "Carpenter", "Weaver", "Greene", "Lawrence", "Elliott", "Chavez", "Sims", "Austin", "Peters", "Kelley", "Franklin", "Lawson", "Fields", "Gutierrez", "Ryan", "Schmidt", "Carr", "Vasquez", "Castillo", "Wheeler", "Chapman", "Oliver", "Montgomery", "Richards", 
  "Williamson", "Johnston", "Banks", "Meyer", "Bishop", "McCoy", "Howell", "Alvarez", "Morrison", "Hansen", "Fernandez", "Garza", "Harvey", "Little", "Burton", "Stanley", "Nguyen", "George", "Jacobs", "Reid", "Kim", "Fuller", "Lynch", "Dean", "Gilbert", "Garrett", "Romero", "Welch", "Larson", "Frazier", "Burke", "Hanson", "Day", "Mendoza", "Moreno", "Bowman", "Medina", "Fowler", "Brewer", "Hoffman", "Carlson", "Silva", "Pearson", "Holland", "Douglas", "Fleming", "Jensen", "Vargas", "Byrd", "Davidson", 
  "Hopkins", "May", "Terry", "Herrera", "Wade", "Soto", "Walters", "Curtis", "Neal", "Caldwell", "Lowe", "Jennings", "Barnett", "Graves", "Jimenez", "Horton", "Shelton", "Barrett", "Obrien", "Castro", "Sutton", "Gregory", "McKinney", "Lucas", "Miles", "Craig", "Rodriquez", "Chambers", "Holt", "Lambert", "Fletcher", "Watts", "Bates", "Hale", "Rhodes", "Pena", "Beck", "Newman", "Haynes", "McDaniel", "Mendez", "Bush", "Vaughn", "Parks", "Dawson", "Santiago", "Norris", "Hardy", "Love", "Steele", "Curry", 
  "Powers", "Schultz", "Barker", "Guzman", "Page", "Munoz", "Ball", "Keller", "Chandler", "Weber", "Leonard", "Walsh", "Lyons", "Ramsey", "Wolfe", "Schneider", "Mullins", "Benson", "Sharp", "Bowen", "Daniel", "Barber", "Cummings", "Hines", "Baldwin", "Griffith", "Valdez", "Hubbard", "Salazar", "Reeves", "Warner", "Stevenson", "Burgess", "Santos", "Tate", "Cross", "Garner", "Mann", "Mack", "Moss", "Thornton", "Dennis", "McGee", "Farmer", "Delgado", "Aguilar", "Vega", "Glover", "Manning", "Cohen", 
  "Harmon", "Rodgers", "Robbins", "Newton", "Todd", "Blair", "Higgins", "Ingram", "Reese", "Cannon", "Strickland", "Townsend", "Potter", "Goodwin", "Walton", "Rowe", "Hampton", "Ortega", "Patton", "Swanson", "Joseph", "Francis", "Goodman", "Maldonado", "Yates", "Becker", "Erickson", "Hodges", "Rios", "Conner", "Adkins", "Webster", "Norman", "Malone", "Hammond", "Flowers", "Cobb", "Moody", "Quinn", "Blake", "Maxwell", "Pope", "Floyd", "Osborne", "Paul", "McCarthy", "Guerrero", "Lindsey", "Estrada", 
  "Sandoval", "Gibbs", "Tyler", "Gross", "Fitzgerald", "Stokes", "Doyle", "Sherman", "Saunders", "Wise", "Colon", "Gill", "Alvarado", "Greer", "Padilla", "Simon", "Waters", "Nunez", "Ballard", "Schwartz", "McBride", "Houston", "Christensen", "Klein", "Pratt", "Briggs", "Parsons", "McLaughlin", "Zimmerman", "French", "Buchanan", "Moran", "Copeland", "Roy", "Pittman", "Brady", "McCormick", "Holloway", "Brock", "Poole", "Frank", "Logan", "Owen", "Bass", "Marsh", "Drake", "Wong", "Jefferson", "Park", 
  "Morton", "Abbott", "Sparks", "Patrick", "Norton", "Huff", "Clayton", "Massey", "Lloyd", "Figueroa", "Carson", "Bowers", "Roberson", "Barton", "Tran", "Lamb", "Harrington", "Casey", "Boone", "Cortez", "Clarke", "Mathis", "Singleton", "Wilkins", "Cain", "Bryan", "Underwood", "Hogan", "McKenzie", "Collier", "Luna", "Phelps", "McGuire", "Allison", "Bridges", "Wilkerson", "Nash", "Summers", "Atkins"], "it":["Rossi", "Ferrari", "Russo", "Bianchi", "Esposito", "Colombo", "Romano", "Ricci", "Gallo", "Greco", 
  "Conti", "Marino", "De Luca", "Bruno", "Costa", "Giordano", "Mancini", "Lombardi", "Barbieri", "Moretti", "Fontana", "Rizzo", "Santoro", "Caruso", "Mariani", "Martini", "Ferrara", "Galli", "Rinaldi", "Leone", "Serra", "Conte", "Villa", "Marini", "Ferri", "Bianco", "Monti", "De Santis", "Parisi", "Fiore", "De Angelis", "Longo", "Sanna", "Sala", "Romeo", "Martinelli", "Grassi", "Neri", "Marchetti", "Vitale", "Mari", "Gentile", "Viola", "Marchi", "Rossetti", "Bellini", "Grasso", "Fabbri", "Franco", 
  "Messina", "Rosso", "Rizzi", "D'Angelo", "Morelli", "Giorgi", "Riva", "Mazza", "De Rosa", "Testa", "Coppola", "Amato", "Donati", "Palumbo", "Ferro", "Basile", "Ferraro", "Franchi", "Castelli", "Lombardo", "Farina", "Carli", "Bruni", "Piras", "Giuliani", "Martino", "Poli", "Gasparini", "Montanari", "Orlando", "Alberti", "Bernardi", "Silvestri", "Ferretti", "Pellegrino", "Sartori", "Palmieri", "Cattaneo", "Benedetti", "Valenti", "Bassi", "Verdi"]}, countries:[{"name":"Afghanistan", "abbreviation":"AF"}, 
  {"name":"Albania", "abbreviation":"AL"}, {"name":"Algeria", "abbreviation":"DZ"}, {"name":"American Samoa", "abbreviation":"AS"}, {"name":"Andorra", "abbreviation":"AD"}, {"name":"Angola", "abbreviation":"AO"}, {"name":"Anguilla", "abbreviation":"AI"}, {"name":"Antarctica", "abbreviation":"AQ"}, {"name":"Antigua and Barbuda", "abbreviation":"AG"}, {"name":"Argentina", "abbreviation":"AR"}, {"name":"Armenia", "abbreviation":"AM"}, {"name":"Aruba", "abbreviation":"AW"}, {"name":"Australia", "abbreviation":"AU"}, 
  {"name":"Austria", "abbreviation":"AT"}, {"name":"Azerbaijan", "abbreviation":"AZ"}, {"name":"Bahamas", "abbreviation":"BS"}, {"name":"Bahrain", "abbreviation":"BH"}, {"name":"Bangladesh", "abbreviation":"BD"}, {"name":"Barbados", "abbreviation":"BB"}, {"name":"Belarus", "abbreviation":"BY"}, {"name":"Belgium", "abbreviation":"BE"}, {"name":"Belize", "abbreviation":"BZ"}, {"name":"Benin", "abbreviation":"BJ"}, {"name":"Bermuda", "abbreviation":"BM"}, {"name":"Bhutan", "abbreviation":"BT"}, {"name":"Bolivia", 
  "abbreviation":"BO"}, {"name":"Bosnia and Herzegovina", "abbreviation":"BA"}, {"name":"Botswana", "abbreviation":"BW"}, {"name":"Bouvet Island", "abbreviation":"BV"}, {"name":"Brazil", "abbreviation":"BR"}, {"name":"British Antarctic Territory", "abbreviation":"BQ"}, {"name":"British Indian Ocean Territory", "abbreviation":"IO"}, {"name":"British Virgin Islands", "abbreviation":"VG"}, {"name":"Brunei", "abbreviation":"BN"}, {"name":"Bulgaria", "abbreviation":"BG"}, {"name":"Burkina Faso", "abbreviation":"BF"}, 
  {"name":"Burundi", "abbreviation":"BI"}, {"name":"Cambodia", "abbreviation":"KH"}, {"name":"Cameroon", "abbreviation":"CM"}, {"name":"Canada", "abbreviation":"CA"}, {"name":"Canton and Enderbury Islands", "abbreviation":"CT"}, {"name":"Cape Verde", "abbreviation":"CV"}, {"name":"Cayman Islands", "abbreviation":"KY"}, {"name":"Central African Republic", "abbreviation":"CF"}, {"name":"Chad", "abbreviation":"TD"}, {"name":"Chile", "abbreviation":"CL"}, {"name":"China", "abbreviation":"CN"}, {"name":"Christmas Island", 
  "abbreviation":"CX"}, {"name":"Cocos [Keeling] Islands", "abbreviation":"CC"}, {"name":"Colombia", "abbreviation":"CO"}, {"name":"Comoros", "abbreviation":"KM"}, {"name":"Congo - Brazzaville", "abbreviation":"CG"}, {"name":"Congo - Kinshasa", "abbreviation":"CD"}, {"name":"Cook Islands", "abbreviation":"CK"}, {"name":"Costa Rica", "abbreviation":"CR"}, {"name":"Croatia", "abbreviation":"HR"}, {"name":"Cuba", "abbreviation":"CU"}, {"name":"Cyprus", "abbreviation":"CY"}, {"name":"Czech Republic", 
  "abbreviation":"CZ"}, {"name":"C\u00f4te d\u2019Ivoire", "abbreviation":"CI"}, {"name":"Denmark", "abbreviation":"DK"}, {"name":"Djibouti", "abbreviation":"DJ"}, {"name":"Dominica", "abbreviation":"DM"}, {"name":"Dominican Republic", "abbreviation":"DO"}, {"name":"Dronning Maud Land", "abbreviation":"NQ"}, {"name":"East Germany", "abbreviation":"DD"}, {"name":"Ecuador", "abbreviation":"EC"}, {"name":"Egypt", "abbreviation":"EG"}, {"name":"El Salvador", "abbreviation":"SV"}, {"name":"Equatorial Guinea", 
  "abbreviation":"GQ"}, {"name":"Eritrea", "abbreviation":"ER"}, {"name":"Estonia", "abbreviation":"EE"}, {"name":"Ethiopia", "abbreviation":"ET"}, {"name":"Falkland Islands", "abbreviation":"FK"}, {"name":"Faroe Islands", "abbreviation":"FO"}, {"name":"Fiji", "abbreviation":"FJ"}, {"name":"Finland", "abbreviation":"FI"}, {"name":"France", "abbreviation":"FR"}, {"name":"French Guiana", "abbreviation":"GF"}, {"name":"French Polynesia", "abbreviation":"PF"}, {"name":"French Southern Territories", "abbreviation":"TF"}, 
  {"name":"French Southern and Antarctic Territories", "abbreviation":"FQ"}, {"name":"Gabon", "abbreviation":"GA"}, {"name":"Gambia", "abbreviation":"GM"}, {"name":"Georgia", "abbreviation":"GE"}, {"name":"Germany", "abbreviation":"DE"}, {"name":"Ghana", "abbreviation":"GH"}, {"name":"Gibraltar", "abbreviation":"GI"}, {"name":"Greece", "abbreviation":"GR"}, {"name":"Greenland", "abbreviation":"GL"}, {"name":"Grenada", "abbreviation":"GD"}, {"name":"Guadeloupe", "abbreviation":"GP"}, {"name":"Guam", 
  "abbreviation":"GU"}, {"name":"Guatemala", "abbreviation":"GT"}, {"name":"Guernsey", "abbreviation":"GG"}, {"name":"Guinea", "abbreviation":"GN"}, {"name":"Guinea-Bissau", "abbreviation":"GW"}, {"name":"Guyana", "abbreviation":"GY"}, {"name":"Haiti", "abbreviation":"HT"}, {"name":"Heard Island and McDonald Islands", "abbreviation":"HM"}, {"name":"Honduras", "abbreviation":"HN"}, {"name":"Hong Kong SAR China", "abbreviation":"HK"}, {"name":"Hungary", "abbreviation":"HU"}, {"name":"Iceland", "abbreviation":"IS"}, 
  {"name":"India", "abbreviation":"IN"}, {"name":"Indonesia", "abbreviation":"ID"}, {"name":"Iran", "abbreviation":"IR"}, {"name":"Iraq", "abbreviation":"IQ"}, {"name":"Ireland", "abbreviation":"IE"}, {"name":"Isle of Man", "abbreviation":"IM"}, {"name":"Israel", "abbreviation":"IL"}, {"name":"Italy", "abbreviation":"IT"}, {"name":"Jamaica", "abbreviation":"JM"}, {"name":"Japan", "abbreviation":"JP"}, {"name":"Jersey", "abbreviation":"JE"}, {"name":"Johnston Island", "abbreviation":"JT"}, {"name":"Jordan", 
  "abbreviation":"JO"}, {"name":"Kazakhstan", "abbreviation":"KZ"}, {"name":"Kenya", "abbreviation":"KE"}, {"name":"Kiribati", "abbreviation":"KI"}, {"name":"Kuwait", "abbreviation":"KW"}, {"name":"Kyrgyzstan", "abbreviation":"KG"}, {"name":"Laos", "abbreviation":"LA"}, {"name":"Latvia", "abbreviation":"LV"}, {"name":"Lebanon", "abbreviation":"LB"}, {"name":"Lesotho", "abbreviation":"LS"}, {"name":"Liberia", "abbreviation":"LR"}, {"name":"Libya", "abbreviation":"LY"}, {"name":"Liechtenstein", "abbreviation":"LI"}, 
  {"name":"Lithuania", "abbreviation":"LT"}, {"name":"Luxembourg", "abbreviation":"LU"}, {"name":"Macau SAR China", "abbreviation":"MO"}, {"name":"Macedonia", "abbreviation":"MK"}, {"name":"Madagascar", "abbreviation":"MG"}, {"name":"Malawi", "abbreviation":"MW"}, {"name":"Malaysia", "abbreviation":"MY"}, {"name":"Maldives", "abbreviation":"MV"}, {"name":"Mali", "abbreviation":"ML"}, {"name":"Malta", "abbreviation":"MT"}, {"name":"Marshall Islands", "abbreviation":"MH"}, {"name":"Martinique", "abbreviation":"MQ"}, 
  {"name":"Mauritania", "abbreviation":"MR"}, {"name":"Mauritius", "abbreviation":"MU"}, {"name":"Mayotte", "abbreviation":"YT"}, {"name":"Metropolitan France", "abbreviation":"FX"}, {"name":"Mexico", "abbreviation":"MX"}, {"name":"Micronesia", "abbreviation":"FM"}, {"name":"Midway Islands", "abbreviation":"MI"}, {"name":"Moldova", "abbreviation":"MD"}, {"name":"Monaco", "abbreviation":"MC"}, {"name":"Mongolia", "abbreviation":"MN"}, {"name":"Montenegro", "abbreviation":"ME"}, {"name":"Montserrat", 
  "abbreviation":"MS"}, {"name":"Morocco", "abbreviation":"MA"}, {"name":"Mozambique", "abbreviation":"MZ"}, {"name":"Myanmar [Burma]", "abbreviation":"MM"}, {"name":"Namibia", "abbreviation":"NA"}, {"name":"Nauru", "abbreviation":"NR"}, {"name":"Nepal", "abbreviation":"NP"}, {"name":"Netherlands", "abbreviation":"NL"}, {"name":"Netherlands Antilles", "abbreviation":"AN"}, {"name":"Neutral Zone", "abbreviation":"NT"}, {"name":"New Caledonia", "abbreviation":"NC"}, {"name":"New Zealand", "abbreviation":"NZ"}, 
  {"name":"Nicaragua", "abbreviation":"NI"}, {"name":"Niger", "abbreviation":"NE"}, {"name":"Nigeria", "abbreviation":"NG"}, {"name":"Niue", "abbreviation":"NU"}, {"name":"Norfolk Island", "abbreviation":"NF"}, {"name":"North Korea", "abbreviation":"KP"}, {"name":"North Vietnam", "abbreviation":"VD"}, {"name":"Northern Mariana Islands", "abbreviation":"MP"}, {"name":"Norway", "abbreviation":"NO"}, {"name":"Oman", "abbreviation":"OM"}, {"name":"Pacific Islands Trust Territory", "abbreviation":"PC"}, 
  {"name":"Pakistan", "abbreviation":"PK"}, {"name":"Palau", "abbreviation":"PW"}, {"name":"Palestinian Territories", "abbreviation":"PS"}, {"name":"Panama", "abbreviation":"PA"}, {"name":"Panama Canal Zone", "abbreviation":"PZ"}, {"name":"Papua New Guinea", "abbreviation":"PG"}, {"name":"Paraguay", "abbreviation":"PY"}, {"name":"People's Democratic Republic of Yemen", "abbreviation":"YD"}, {"name":"Peru", "abbreviation":"PE"}, {"name":"Philippines", "abbreviation":"PH"}, {"name":"Pitcairn Islands", 
  "abbreviation":"PN"}, {"name":"Poland", "abbreviation":"PL"}, {"name":"Portugal", "abbreviation":"PT"}, {"name":"Puerto Rico", "abbreviation":"PR"}, {"name":"Qatar", "abbreviation":"QA"}, {"name":"Romania", "abbreviation":"RO"}, {"name":"Russia", "abbreviation":"RU"}, {"name":"Rwanda", "abbreviation":"RW"}, {"name":"R\u00e9union", "abbreviation":"RE"}, {"name":"Saint Barth\u00e9lemy", "abbreviation":"BL"}, {"name":"Saint Helena", "abbreviation":"SH"}, {"name":"Saint Kitts and Nevis", "abbreviation":"KN"}, 
  {"name":"Saint Lucia", "abbreviation":"LC"}, {"name":"Saint Martin", "abbreviation":"MF"}, {"name":"Saint Pierre and Miquelon", "abbreviation":"PM"}, {"name":"Saint Vincent and the Grenadines", "abbreviation":"VC"}, {"name":"Samoa", "abbreviation":"WS"}, {"name":"San Marino", "abbreviation":"SM"}, {"name":"Saudi Arabia", "abbreviation":"SA"}, {"name":"Senegal", "abbreviation":"SN"}, {"name":"Serbia", "abbreviation":"RS"}, {"name":"Serbia and Montenegro", "abbreviation":"CS"}, {"name":"Seychelles", 
  "abbreviation":"SC"}, {"name":"Sierra Leone", "abbreviation":"SL"}, {"name":"Singapore", "abbreviation":"SG"}, {"name":"Slovakia", "abbreviation":"SK"}, {"name":"Slovenia", "abbreviation":"SI"}, {"name":"Solomon Islands", "abbreviation":"SB"}, {"name":"Somalia", "abbreviation":"SO"}, {"name":"South Africa", "abbreviation":"ZA"}, {"name":"South Georgia and the South Sandwich Islands", "abbreviation":"GS"}, {"name":"South Korea", "abbreviation":"KR"}, {"name":"Spain", "abbreviation":"ES"}, {"name":"Sri Lanka", 
  "abbreviation":"LK"}, {"name":"Sudan", "abbreviation":"SD"}, {"name":"Suriname", "abbreviation":"SR"}, {"name":"Svalbard and Jan Mayen", "abbreviation":"SJ"}, {"name":"Swaziland", "abbreviation":"SZ"}, {"name":"Sweden", "abbreviation":"SE"}, {"name":"Switzerland", "abbreviation":"CH"}, {"name":"Syria", "abbreviation":"SY"}, {"name":"S\u00e3o Tom\u00e9 and Pr\u00edncipe", "abbreviation":"ST"}, {"name":"Taiwan", "abbreviation":"TW"}, {"name":"Tajikistan", "abbreviation":"TJ"}, {"name":"Tanzania", 
  "abbreviation":"TZ"}, {"name":"Thailand", "abbreviation":"TH"}, {"name":"Timor-Leste", "abbreviation":"TL"}, {"name":"Togo", "abbreviation":"TG"}, {"name":"Tokelau", "abbreviation":"TK"}, {"name":"Tonga", "abbreviation":"TO"}, {"name":"Trinidad and Tobago", "abbreviation":"TT"}, {"name":"Tunisia", "abbreviation":"TN"}, {"name":"Turkey", "abbreviation":"TR"}, {"name":"Turkmenistan", "abbreviation":"TM"}, {"name":"Turks and Caicos Islands", "abbreviation":"TC"}, {"name":"Tuvalu", "abbreviation":"TV"}, 
  {"name":"U.S. Minor Outlying Islands", "abbreviation":"UM"}, {"name":"U.S. Miscellaneous Pacific Islands", "abbreviation":"PU"}, {"name":"U.S. Virgin Islands", "abbreviation":"VI"}, {"name":"Uganda", "abbreviation":"UG"}, {"name":"Ukraine", "abbreviation":"UA"}, {"name":"Union of Soviet Socialist Republics", "abbreviation":"SU"}, {"name":"United Arab Emirates", "abbreviation":"AE"}, {"name":"United Kingdom", "abbreviation":"GB"}, {"name":"United States", "abbreviation":"US"}, {"name":"Unknown or Invalid Region", 
  "abbreviation":"ZZ"}, {"name":"Uruguay", "abbreviation":"UY"}, {"name":"Uzbekistan", "abbreviation":"UZ"}, {"name":"Vanuatu", "abbreviation":"VU"}, {"name":"Vatican City", "abbreviation":"VA"}, {"name":"Venezuela", "abbreviation":"VE"}, {"name":"Vietnam", "abbreviation":"VN"}, {"name":"Wake Island", "abbreviation":"WK"}, {"name":"Wallis and Futuna", "abbreviation":"WF"}, {"name":"Western Sahara", "abbreviation":"EH"}, {"name":"Yemen", "abbreviation":"YE"}, {"name":"Zambia", "abbreviation":"ZM"}, 
  {"name":"Zimbabwe", "abbreviation":"ZW"}, {"name":"\u00c5land Islands", "abbreviation":"AX"}], provinces:[{name:"Alberta", abbreviation:"AB"}, {name:"British Columbia", abbreviation:"BC"}, {name:"Manitoba", abbreviation:"MB"}, {name:"New Brunswick", abbreviation:"NB"}, {name:"Newfoundland and Labrador", abbreviation:"NL"}, {name:"Nova Scotia", abbreviation:"NS"}, {name:"Ontario", abbreviation:"ON"}, {name:"Prince Edward Island", abbreviation:"PE"}, {name:"Quebec", abbreviation:"QC"}, {name:"Saskatchewan", 
  abbreviation:"SK"}, {name:"Northwest Territories", abbreviation:"NT"}, {name:"Nunavut", abbreviation:"NU"}, {name:"Yukon", abbreviation:"YT"}], nationalities:[{name:"Afghan"}, {name:"Albanian"}, {name:"Algerian"}, {name:"American"}, {name:"Andorran"}, {name:"Angolan"}, {name:"Antiguans"}, {name:"Argentinean"}, {name:"Armenian"}, {name:"Australian"}, {name:"Austrian"}, {name:"Azerbaijani"}, {name:"Bahami"}, {name:"Bahraini"}, {name:"Bangladeshi"}, {name:"Barbadian"}, {name:"Barbudans"}, {name:"Batswana"}, 
  {name:"Belarusian"}, {name:"Belgian"}, {name:"Belizean"}, {name:"Beninese"}, {name:"Bhutanese"}, {name:"Bolivian"}, {name:"Bosnian"}, {name:"Brazilian"}, {name:"British"}, {name:"Bruneian"}, {name:"Bulgarian"}, {name:"Burkinabe"}, {name:"Burmese"}, {name:"Burundian"}, {name:"Cambodian"}, {name:"Cameroonian"}, {name:"Canadian"}, {name:"Cape Verdean"}, {name:"Central African"}, {name:"Chadian"}, {name:"Chilean"}, {name:"Chinese"}, {name:"Colombian"}, {name:"Comoran"}, {name:"Congolese"}, {name:"Costa Rican"}, 
  {name:"Croatian"}, {name:"Cuban"}, {name:"Cypriot"}, {name:"Czech"}, {name:"Danish"}, {name:"Djibouti"}, {name:"Dominican"}, {name:"Dutch"}, {name:"East Timorese"}, {name:"Ecuadorean"}, {name:"Egyptian"}, {name:"Emirian"}, {name:"Equatorial Guinean"}, {name:"Eritrean"}, {name:"Estonian"}, {name:"Ethiopian"}, {name:"Fijian"}, {name:"Filipino"}, {name:"Finnish"}, {name:"French"}, {name:"Gabonese"}, {name:"Gambian"}, {name:"Georgian"}, {name:"German"}, {name:"Ghanaian"}, {name:"Greek"}, {name:"Grenadian"}, 
  {name:"Guatemalan"}, {name:"Guinea-Bissauan"}, {name:"Guinean"}, {name:"Guyanese"}, {name:"Haitian"}, {name:"Herzegovinian"}, {name:"Honduran"}, {name:"Hungarian"}, {name:"I-Kiribati"}, {name:"Icelander"}, {name:"Indian"}, {name:"Indonesian"}, {name:"Iranian"}, {name:"Iraqi"}, {name:"Irish"}, {name:"Israeli"}, {name:"Italian"}, {name:"Ivorian"}, {name:"Jamaican"}, {name:"Japanese"}, {name:"Jordanian"}, {name:"Kazakhstani"}, {name:"Kenyan"}, {name:"Kittian and Nevisian"}, {name:"Kuwaiti"}, {name:"Kyrgyz"}, 
  {name:"Laotian"}, {name:"Latvian"}, {name:"Lebanese"}, {name:"Liberian"}, {name:"Libyan"}, {name:"Liechtensteiner"}, {name:"Lithuanian"}, {name:"Luxembourger"}, {name:"Macedonian"}, {name:"Malagasy"}, {name:"Malawian"}, {name:"Malaysian"}, {name:"Maldivan"}, {name:"Malian"}, {name:"Maltese"}, {name:"Marshallese"}, {name:"Mauritanian"}, {name:"Mauritian"}, {name:"Mexican"}, {name:"Micronesian"}, {name:"Moldovan"}, {name:"Monacan"}, {name:"Mongolian"}, {name:"Moroccan"}, {name:"Mosotho"}, {name:"Motswana"}, 
  {name:"Mozambican"}, {name:"Namibian"}, {name:"Nauruan"}, {name:"Nepalese"}, {name:"New Zealander"}, {name:"Nicaraguan"}, {name:"Nigerian"}, {name:"Nigerien"}, {name:"North Korean"}, {name:"Northern Irish"}, {name:"Norwegian"}, {name:"Omani"}, {name:"Pakistani"}, {name:"Palauan"}, {name:"Panamanian"}, {name:"Papua New Guinean"}, {name:"Paraguayan"}, {name:"Peruvian"}, {name:"Polish"}, {name:"Portuguese"}, {name:"Qatari"}, {name:"Romani"}, {name:"Russian"}, {name:"Rwandan"}, {name:"Saint Lucian"}, 
  {name:"Salvadoran"}, {name:"Samoan"}, {name:"San Marinese"}, {name:"Sao Tomean"}, {name:"Saudi"}, {name:"Scottish"}, {name:"Senegalese"}, {name:"Serbian"}, {name:"Seychellois"}, {name:"Sierra Leonean"}, {name:"Singaporean"}, {name:"Slovakian"}, {name:"Slovenian"}, {name:"Solomon Islander"}, {name:"Somali"}, {name:"South African"}, {name:"South Korean"}, {name:"Spanish"}, {name:"Sri Lankan"}, {name:"Sudanese"}, {name:"Surinamer"}, {name:"Swazi"}, {name:"Swedish"}, {name:"Swiss"}, {name:"Syrian"}, 
  {name:"Taiwanese"}, {name:"Tajik"}, {name:"Tanzanian"}, {name:"Thai"}, {name:"Togolese"}, {name:"Tongan"}, {name:"Trinidadian or Tobagonian"}, {name:"Tunisian"}, {name:"Turkish"}, {name:"Tuvaluan"}, {name:"Ugandan"}, {name:"Ukrainian"}, {name:"Uruguaya"}, {name:"Uzbekistani"}, {name:"Venezuela"}, {name:"Vietnamese"}, {name:"Wels"}, {name:"Yemenit"}, {name:"Zambia"}, {name:"Zimbabwe"}], us_states_and_dc:[{name:"Alabama", abbreviation:"AL"}, {name:"Alaska", abbreviation:"AK"}, {name:"Arizona", abbreviation:"AZ"}, 
  {name:"Arkansas", abbreviation:"AR"}, {name:"California", abbreviation:"CA"}, {name:"Colorado", abbreviation:"CO"}, {name:"Connecticut", abbreviation:"CT"}, {name:"Delaware", abbreviation:"DE"}, {name:"District of Columbia", abbreviation:"DC"}, {name:"Florida", abbreviation:"FL"}, {name:"Georgia", abbreviation:"GA"}, {name:"Hawaii", abbreviation:"HI"}, {name:"Idaho", abbreviation:"ID"}, {name:"Illinois", abbreviation:"IL"}, {name:"Indiana", abbreviation:"IN"}, {name:"Iowa", abbreviation:"IA"}, 
  {name:"Kansas", abbreviation:"KS"}, {name:"Kentucky", abbreviation:"KY"}, {name:"Louisiana", abbreviation:"LA"}, {name:"Maine", abbreviation:"ME"}, {name:"Maryland", abbreviation:"MD"}, {name:"Massachusetts", abbreviation:"MA"}, {name:"Michigan", abbreviation:"MI"}, {name:"Minnesota", abbreviation:"MN"}, {name:"Mississippi", abbreviation:"MS"}, {name:"Missouri", abbreviation:"MO"}, {name:"Montana", abbreviation:"MT"}, {name:"Nebraska", abbreviation:"NE"}, {name:"Nevada", abbreviation:"NV"}, {name:"New Hampshire", 
  abbreviation:"NH"}, {name:"New Jersey", abbreviation:"NJ"}, {name:"New Mexico", abbreviation:"NM"}, {name:"New York", abbreviation:"NY"}, {name:"North Carolina", abbreviation:"NC"}, {name:"North Dakota", abbreviation:"ND"}, {name:"Ohio", abbreviation:"OH"}, {name:"Oklahoma", abbreviation:"OK"}, {name:"Oregon", abbreviation:"OR"}, {name:"Pennsylvania", abbreviation:"PA"}, {name:"Rhode Island", abbreviation:"RI"}, {name:"South Carolina", abbreviation:"SC"}, {name:"South Dakota", abbreviation:"SD"}, 
  {name:"Tennessee", abbreviation:"TN"}, {name:"Texas", abbreviation:"TX"}, {name:"Utah", abbreviation:"UT"}, {name:"Vermont", abbreviation:"VT"}, {name:"Virginia", abbreviation:"VA"}, {name:"Washington", abbreviation:"WA"}, {name:"West Virginia", abbreviation:"WV"}, {name:"Wisconsin", abbreviation:"WI"}, {name:"Wyoming", abbreviation:"WY"}], territories:[{name:"American Samoa", abbreviation:"AS"}, {name:"Federated States of Micronesia", abbreviation:"FM"}, {name:"Guam", abbreviation:"GU"}, {name:"Marshall Islands", 
  abbreviation:"MH"}, {name:"Northern Mariana Islands", abbreviation:"MP"}, {name:"Puerto Rico", abbreviation:"PR"}, {name:"Virgin Islands, U.S.", abbreviation:"VI"}], armed_forces:[{name:"Armed Forces Europe", abbreviation:"AE"}, {name:"Armed Forces Pacific", abbreviation:"AP"}, {name:"Armed Forces the Americas", abbreviation:"AA"}], street_suffixes:[{name:"Avenue", abbreviation:"Ave"}, {name:"Boulevard", abbreviation:"Blvd"}, {name:"Center", abbreviation:"Ctr"}, {name:"Circle", abbreviation:"Cir"}, 
  {name:"Court", abbreviation:"Ct"}, {name:"Drive", abbreviation:"Dr"}, {name:"Extension", abbreviation:"Ext"}, {name:"Glen", abbreviation:"Gln"}, {name:"Grove", abbreviation:"Grv"}, {name:"Heights", abbreviation:"Hts"}, {name:"Highway", abbreviation:"Hwy"}, {name:"Junction", abbreviation:"Jct"}, {name:"Key", abbreviation:"Key"}, {name:"Lane", abbreviation:"Ln"}, {name:"Loop", abbreviation:"Loop"}, {name:"Manor", abbreviation:"Mnr"}, {name:"Mill", abbreviation:"Mill"}, {name:"Park", abbreviation:"Park"}, 
  {name:"Parkway", abbreviation:"Pkwy"}, {name:"Pass", abbreviation:"Pass"}, {name:"Path", abbreviation:"Path"}, {name:"Pike", abbreviation:"Pike"}, {name:"Place", abbreviation:"Pl"}, {name:"Plaza", abbreviation:"Plz"}, {name:"Point", abbreviation:"Pt"}, {name:"Ridge", abbreviation:"Rdg"}, {name:"River", abbreviation:"Riv"}, {name:"Road", abbreviation:"Rd"}, {name:"Square", abbreviation:"Sq"}, {name:"Street", abbreviation:"St"}, {name:"Terrace", abbreviation:"Ter"}, {name:"Trail", abbreviation:"Trl"}, 
  {name:"Turnpike", abbreviation:"Tpke"}, {name:"View", abbreviation:"Vw"}, {name:"Way", abbreviation:"Way"}], months:[{name:"January", short_name:"Jan", numeric:"01", days:31}, {name:"February", short_name:"Feb", numeric:"02", days:28}, {name:"March", short_name:"Mar", numeric:"03", days:31}, {name:"April", short_name:"Apr", numeric:"04", days:30}, {name:"May", short_name:"May", numeric:"05", days:31}, {name:"June", short_name:"Jun", numeric:"06", days:30}, {name:"July", short_name:"Jul", numeric:"07", 
  days:31}, {name:"August", short_name:"Aug", numeric:"08", days:31}, {name:"September", short_name:"Sep", numeric:"09", days:30}, {name:"October", short_name:"Oct", numeric:"10", days:31}, {name:"November", short_name:"Nov", numeric:"11", days:30}, {name:"December", short_name:"Dec", numeric:"12", days:31}], cc_types:[{name:"American Express", short_name:"amex", prefix:"34", length:15}, {name:"Bankcard", short_name:"bankcard", prefix:"5610", length:16}, {name:"China UnionPay", short_name:"chinaunion", 
  prefix:"62", length:16}, {name:"Diners Club Carte Blanche", short_name:"dccarte", prefix:"300", length:14}, {name:"Diners Club enRoute", short_name:"dcenroute", prefix:"2014", length:15}, {name:"Diners Club International", short_name:"dcintl", prefix:"36", length:14}, {name:"Diners Club United States & Canada", short_name:"dcusc", prefix:"54", length:16}, {name:"Discover Card", short_name:"discover", prefix:"6011", length:16}, {name:"InstaPayment", short_name:"instapay", prefix:"637", length:16}, 
  {name:"JCB", short_name:"jcb", prefix:"3528", length:16}, {name:"Laser", short_name:"laser", prefix:"6304", length:16}, {name:"Maestro", short_name:"maestro", prefix:"5018", length:16}, {name:"Mastercard", short_name:"mc", prefix:"51", length:16}, {name:"Solo", short_name:"solo", prefix:"6334", length:16}, {name:"Switch", short_name:"switch", prefix:"4903", length:16}, {name:"Visa", short_name:"visa", prefix:"4", length:16}, {name:"Visa Electron", short_name:"electron", prefix:"4026", length:16}], 
  currency_types:[{"code":"AED", "name":"United Arab Emirates Dirham"}, {"code":"AFN", "name":"Afghanistan Afghani"}, {"code":"ALL", "name":"Albania Lek"}, {"code":"AMD", "name":"Armenia Dram"}, {"code":"ANG", "name":"Netherlands Antilles Guilder"}, {"code":"AOA", "name":"Angola Kwanza"}, {"code":"ARS", "name":"Argentina Peso"}, {"code":"AUD", "name":"Australia Dollar"}, {"code":"AWG", "name":"Aruba Guilder"}, {"code":"AZN", "name":"Azerbaijan New Manat"}, {"code":"BAM", "name":"Bosnia and Herzegovina Convertible Marka"}, 
  {"code":"BBD", "name":"Barbados Dollar"}, {"code":"BDT", "name":"Bangladesh Taka"}, {"code":"BGN", "name":"Bulgaria Lev"}, {"code":"BHD", "name":"Bahrain Dinar"}, {"code":"BIF", "name":"Burundi Franc"}, {"code":"BMD", "name":"Bermuda Dollar"}, {"code":"BND", "name":"Brunei Darussalam Dollar"}, {"code":"BOB", "name":"Bolivia Boliviano"}, {"code":"BRL", "name":"Brazil Real"}, {"code":"BSD", "name":"Bahamas Dollar"}, {"code":"BTN", "name":"Bhutan Ngultrum"}, {"code":"BWP", "name":"Botswana Pula"}, 
  {"code":"BYR", "name":"Belarus Ruble"}, {"code":"BZD", "name":"Belize Dollar"}, {"code":"CAD", "name":"Canada Dollar"}, {"code":"CDF", "name":"Congo/Kinshasa Franc"}, {"code":"CHF", "name":"Switzerland Franc"}, {"code":"CLP", "name":"Chile Peso"}, {"code":"CNY", "name":"China Yuan Renminbi"}, {"code":"COP", "name":"Colombia Peso"}, {"code":"CRC", "name":"Costa Rica Colon"}, {"code":"CUC", "name":"Cuba Convertible Peso"}, {"code":"CUP", "name":"Cuba Peso"}, {"code":"CVE", "name":"Cape Verde Escudo"}, 
  {"code":"CZK", "name":"Czech Republic Koruna"}, {"code":"DJF", "name":"Djibouti Franc"}, {"code":"DKK", "name":"Denmark Krone"}, {"code":"DOP", "name":"Dominican Republic Peso"}, {"code":"DZD", "name":"Algeria Dinar"}, {"code":"EGP", "name":"Egypt Pound"}, {"code":"ERN", "name":"Eritrea Nakfa"}, {"code":"ETB", "name":"Ethiopia Birr"}, {"code":"EUR", "name":"Euro Member Countries"}, {"code":"FJD", "name":"Fiji Dollar"}, {"code":"FKP", "name":"Falkland Islands (Malvinas) Pound"}, {"code":"GBP", "name":"United Kingdom Pound"}, 
  {"code":"GEL", "name":"Georgia Lari"}, {"code":"GGP", "name":"Guernsey Pound"}, {"code":"GHS", "name":"Ghana Cedi"}, {"code":"GIP", "name":"Gibraltar Pound"}, {"code":"GMD", "name":"Gambia Dalasi"}, {"code":"GNF", "name":"Guinea Franc"}, {"code":"GTQ", "name":"Guatemala Quetzal"}, {"code":"GYD", "name":"Guyana Dollar"}, {"code":"HKD", "name":"Hong Kong Dollar"}, {"code":"HNL", "name":"Honduras Lempira"}, {"code":"HRK", "name":"Croatia Kuna"}, {"code":"HTG", "name":"Haiti Gourde"}, {"code":"HUF", 
  "name":"Hungary Forint"}, {"code":"IDR", "name":"Indonesia Rupiah"}, {"code":"ILS", "name":"Israel Shekel"}, {"code":"IMP", "name":"Isle of Man Pound"}, {"code":"INR", "name":"India Rupee"}, {"code":"IQD", "name":"Iraq Dinar"}, {"code":"IRR", "name":"Iran Rial"}, {"code":"ISK", "name":"Iceland Krona"}, {"code":"JEP", "name":"Jersey Pound"}, {"code":"JMD", "name":"Jamaica Dollar"}, {"code":"JOD", "name":"Jordan Dinar"}, {"code":"JPY", "name":"Japan Yen"}, {"code":"KES", "name":"Kenya Shilling"}, 
  {"code":"KGS", "name":"Kyrgyzstan Som"}, {"code":"KHR", "name":"Cambodia Riel"}, {"code":"KMF", "name":"Comoros Franc"}, {"code":"KPW", "name":"Korea (North) Won"}, {"code":"KRW", "name":"Korea (South) Won"}, {"code":"KWD", "name":"Kuwait Dinar"}, {"code":"KYD", "name":"Cayman Islands Dollar"}, {"code":"KZT", "name":"Kazakhstan Tenge"}, {"code":"LAK", "name":"Laos Kip"}, {"code":"LBP", "name":"Lebanon Pound"}, {"code":"LKR", "name":"Sri Lanka Rupee"}, {"code":"LRD", "name":"Liberia Dollar"}, {"code":"LSL", 
  "name":"Lesotho Loti"}, {"code":"LTL", "name":"Lithuania Litas"}, {"code":"LYD", "name":"Libya Dinar"}, {"code":"MAD", "name":"Morocco Dirham"}, {"code":"MDL", "name":"Moldova Leu"}, {"code":"MGA", "name":"Madagascar Ariary"}, {"code":"MKD", "name":"Macedonia Denar"}, {"code":"MMK", "name":"Myanmar (Burma) Kyat"}, {"code":"MNT", "name":"Mongolia Tughrik"}, {"code":"MOP", "name":"Macau Pataca"}, {"code":"MRO", "name":"Mauritania Ouguiya"}, {"code":"MUR", "name":"Mauritius Rupee"}, {"code":"MVR", 
  "name":"Maldives (Maldive Islands) Rufiyaa"}, {"code":"MWK", "name":"Malawi Kwacha"}, {"code":"MXN", "name":"Mexico Peso"}, {"code":"MYR", "name":"Malaysia Ringgit"}, {"code":"MZN", "name":"Mozambique Metical"}, {"code":"NAD", "name":"Namibia Dollar"}, {"code":"NGN", "name":"Nigeria Naira"}, {"code":"NIO", "name":"Nicaragua Cordoba"}, {"code":"NOK", "name":"Norway Krone"}, {"code":"NPR", "name":"Nepal Rupee"}, {"code":"NZD", "name":"New Zealand Dollar"}, {"code":"OMR", "name":"Oman Rial"}, {"code":"PAB", 
  "name":"Panama Balboa"}, {"code":"PEN", "name":"Peru Nuevo Sol"}, {"code":"PGK", "name":"Papua New Guinea Kina"}, {"code":"PHP", "name":"Philippines Peso"}, {"code":"PKR", "name":"Pakistan Rupee"}, {"code":"PLN", "name":"Poland Zloty"}, {"code":"PYG", "name":"Paraguay Guarani"}, {"code":"QAR", "name":"Qatar Riyal"}, {"code":"RON", "name":"Romania New Leu"}, {"code":"RSD", "name":"Serbia Dinar"}, {"code":"RUB", "name":"Russia Ruble"}, {"code":"RWF", "name":"Rwanda Franc"}, {"code":"SAR", "name":"Saudi Arabia Riyal"}, 
  {"code":"SBD", "name":"Solomon Islands Dollar"}, {"code":"SCR", "name":"Seychelles Rupee"}, {"code":"SDG", "name":"Sudan Pound"}, {"code":"SEK", "name":"Sweden Krona"}, {"code":"SGD", "name":"Singapore Dollar"}, {"code":"SHP", "name":"Saint Helena Pound"}, {"code":"SLL", "name":"Sierra Leone Leone"}, {"code":"SOS", "name":"Somalia Shilling"}, {"code":"SPL", "name":"Seborga Luigino"}, {"code":"SRD", "name":"Suriname Dollar"}, {"code":"STD", "name":"S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra"}, {"code":"SVC", 
  "name":"El Salvador Colon"}, {"code":"SYP", "name":"Syria Pound"}, {"code":"SZL", "name":"Swaziland Lilangeni"}, {"code":"THB", "name":"Thailand Baht"}, {"code":"TJS", "name":"Tajikistan Somoni"}, {"code":"TMT", "name":"Turkmenistan Manat"}, {"code":"TND", "name":"Tunisia Dinar"}, {"code":"TOP", "name":"Tonga Pa'anga"}, {"code":"TRY", "name":"Turkey Lira"}, {"code":"TTD", "name":"Trinidad and Tobago Dollar"}, {"code":"TVD", "name":"Tuvalu Dollar"}, {"code":"TWD", "name":"Taiwan New Dollar"}, {"code":"TZS", 
  "name":"Tanzania Shilling"}, {"code":"UAH", "name":"Ukraine Hryvnia"}, {"code":"UGX", "name":"Uganda Shilling"}, {"code":"USD", "name":"United States Dollar"}, {"code":"UYU", "name":"Uruguay Peso"}, {"code":"UZS", "name":"Uzbekistan Som"}, {"code":"VEF", "name":"Venezuela Bolivar"}, {"code":"VND", "name":"Viet Nam Dong"}, {"code":"VUV", "name":"Vanuatu Vatu"}, {"code":"WST", "name":"Samoa Tala"}, {"code":"XAF", "name":"Communaut\u00e9 Financi\u00e8re Africaine (BEAC) CFA Franc BEAC"}, {"code":"XCD", 
  "name":"East Caribbean Dollar"}, {"code":"XDR", "name":"International Monetary Fund (IMF) Special Drawing Rights"}, {"code":"XOF", "name":"Communaut\u00e9 Financi\u00e8re Africaine (BCEAO) Franc"}, {"code":"XPF", "name":"Comptoirs Fran\u00e7ais du Pacifique (CFP) Franc"}, {"code":"YER", "name":"Yemen Rial"}, {"code":"ZAR", "name":"South Africa Rand"}, {"code":"ZMW", "name":"Zambia Kwacha"}, {"code":"ZWD", "name":"Zimbabwe Dollar"}], colorNames:["AliceBlue", "Black", "Navy", "DarkBlue", "MediumBlue", 
  "Blue", "DarkGreen", "Green", "Teal", "DarkCyan", "DeepSkyBlue", "DarkTurquoise", "MediumSpringGreen", "Lime", "SpringGreen", "Aqua", "Cyan", "MidnightBlue", "DodgerBlue", "LightSeaGreen", "ForestGreen", "SeaGreen", "DarkSlateGray", "LimeGreen", "MediumSeaGreen", "Turquoise", "RoyalBlue", "SteelBlue", "DarkSlateBlue", "MediumTurquoise", "Indigo", "DarkOliveGreen", "CadetBlue", "CornflowerBlue", "RebeccaPurple", "MediumAquaMarine", "DimGray", "SlateBlue", "OliveDrab", "SlateGray", "LightSlateGray", 
  "MediumSlateBlue", "LawnGreen", "Chartreuse", "Aquamarine", "Maroon", "Purple", "Olive", "Gray", "SkyBlue", "LightSkyBlue", "BlueViolet", "DarkRed", "DarkMagenta", "SaddleBrown", "Ivory", "White", "DarkSeaGreen", "LightGreen", "MediumPurple", "DarkViolet", "PaleGreen", "DarkOrchid", "YellowGreen", "Sienna", "Brown", "DarkGray", "LightBlue", "GreenYellow", "PaleTurquoise", "LightSteelBlue", "PowderBlue", "FireBrick", "DarkGoldenRod", "MediumOrchid", "RosyBrown", "DarkKhaki", "Silver", "MediumVioletRed", 
  "IndianRed", "Peru", "Chocolate", "Tan", "LightGray", "Thistle", "Orchid", "GoldenRod", "PaleVioletRed", "Crimson", "Gainsboro", "Plum", "BurlyWood", "LightCyan", "Lavender", "DarkSalmon", "Violet", "PaleGoldenRod", "LightCoral", "Khaki", "AliceBlue", "HoneyDew", "Azure", "SandyBrown", "Wheat", "Beige", "WhiteSmoke", "MintCream", "GhostWhite", "Salmon", "AntiqueWhite", "Linen", "LightGoldenRodYellow", "OldLace", "Red", "Fuchsia", "Magenta", "DeepPink", "OrangeRed", "Tomato", "HotPink", "Coral", 
  "DarkOrange", "LightSalmon", "Orange", "LightPink", "Pink", "Gold", "PeachPuff", "NavajoWhite", "Moccasin", "Bisque", "MistyRose", "BlanchedAlmond", "PapayaWhip", "LavenderBlush", "SeaShell", "Cornsilk", "LemonChiffon", "FloralWhite", "Snow", "Yellow", "LightYellow"], fileExtension:{"raster":["bmp", "gif", "gpl", "ico", "jpeg", "psd", "png", "psp", "raw", "tiff"], "vector":["3dv", "amf", "awg", "ai", "cgm", "cdr", "cmx", "dxf", "e2d", "egt", "eps", "fs", "odg", "svg", "xar"], "3d":["3dmf", "3dm", 
  "3mf", "3ds", "an8", "aoi", "blend", "cal3d", "cob", "ctm", "iob", "jas", "max", "mb", "mdx", "obj", "x", "x3d"], "document":["doc", "docx", "dot", "html", "xml", "odt", "odm", "ott", "csv", "rtf", "tex", "xhtml", "xps"]}};
  var o_hasOwnProperty = Object.prototype.hasOwnProperty;
  var o_keys = Object.keys || function(obj) {
    var result = [];
    for (var key in obj) {
      if (o_hasOwnProperty.call(obj, key)) {
        result.push(key);
      }
    }
    return result;
  };
  function _copyObject(source, target) {
    var keys = o_keys(source);
    var key;
    for (var i = 0, l = keys.length;i < l;i++) {
      key = keys[i];
      target[key] = source[key] || target[key];
    }
  }
  function _copyArray(source, target) {
    for (var i = 0, l = source.length;i < l;i++) {
      target[i] = source[i];
    }
  }
  function copyObject(source, _target) {
    var isArray = Array.isArray(source);
    var target = _target || (isArray ? new Array(source.length) : {});
    if (isArray) {
      _copyArray(source, target);
    } else {
      _copyObject(source, target);
    }
    return target;
  }
  Chance.prototype.get = function(name) {
    return copyObject(data[name]);
  };
  Chance.prototype.mac_address = function(options) {
    options = initOptions(options);
    if (!options.separator) {
      options.separator = options.networkVersion ? "." : ":";
    }
    var mac_pool = "ABCDEF1234567890", mac = "";
    if (!options.networkVersion) {
      mac = this.n(this.string, 6, {pool:mac_pool, length:2}).join(options.separator);
    } else {
      mac = this.n(this.string, 3, {pool:mac_pool, length:4}).join(options.separator);
    }
    return mac;
  };
  Chance.prototype.normal = function(options) {
    options = initOptions(options, {mean:0, dev:1, pool:[]});
    testRange(options.pool.constructor !== Array, "Chance: The pool option must be a valid array.");
    if (options.pool.length > 0) {
      return this.normal_pool(options);
    }
    var s, u, v, norm, mean = options.mean, dev = options.dev;
    do {
      u = this.random() * 2 - 1;
      v = this.random() * 2 - 1;
      s = u * u + v * v;
    } while (s >= 1);
    norm = u * Math.sqrt(-2 * Math.log(s) / s);
    return dev * norm + mean;
  };
  Chance.prototype.normal_pool = function(options) {
    var performanceCounter = 0;
    do {
      var idx = Math.round(this.normal({mean:options.mean, dev:options.dev}));
      if (idx < options.pool.length && idx >= 0) {
        return options.pool[idx];
      } else {
        performanceCounter++;
      }
    } while (performanceCounter < 100);
    throw new RangeError("Chance: Your pool is too small for the given mean and standard deviation. Please adjust.");
  };
  Chance.prototype.radio = function(options) {
    options = initOptions(options, {side:"?"});
    var fl = "";
    switch(options.side.toLowerCase()) {
      case "east":
      case "e":
        fl = "W";
        break;
      case "west":
      case "w":
        fl = "K";
        break;
      default:
        fl = this.character({pool:"KW"});
        break;
    }
    return fl + this.character({alpha:true, casing:"upper"}) + this.character({alpha:true, casing:"upper"}) + this.character({alpha:true, casing:"upper"});
  };
  Chance.prototype.set = function(name, values) {
    if (typeof name === "string") {
      data[name] = values;
    } else {
      data = copyObject(name, data);
    }
  };
  Chance.prototype.tv = function(options) {
    return this.radio(options);
  };
  Chance.prototype.cnpj = function() {
    var n = this.n(this.natural, 8, {max:9});
    var d1 = 2 + n[7] * 6 + n[6] * 7 + n[5] * 8 + n[4] * 9 + n[3] * 2 + n[2] * 3 + n[1] * 4 + n[0] * 5;
    d1 = 11 - d1 % 11;
    if (d1 >= 10) {
      d1 = 0;
    }
    var d2 = d1 * 2 + 3 + n[7] * 7 + n[6] * 8 + n[5] * 9 + n[4] * 2 + n[3] * 3 + n[2] * 4 + n[1] * 5 + n[0] * 6;
    d2 = 11 - d2 % 11;
    if (d2 >= 10) {
      d2 = 0;
    }
    return "" + n[0] + n[1] + "." + n[2] + n[3] + n[4] + "." + n[5] + n[6] + n[7] + "/0001-" + d1 + d2;
  };
  Chance.prototype.mersenne_twister = function(seed) {
    return new MersenneTwister(seed);
  };
  Chance.prototype.blueimp_md5 = function() {
    return new BlueImpMD5;
  };
  var MersenneTwister = function(seed) {
    if (seed === undefined) {
      seed = Math.floor(Math.random() * Math.pow(10, 13));
    }
    this.N = 624;
    this.M = 397;
    this.MATRIX_A = 2567483615;
    this.UPPER_MASK = 2147483648;
    this.LOWER_MASK = 2147483647;
    this.mt = new Array(this.N);
    this.mti = this.N + 1;
    this.init_genrand(seed);
  };
  MersenneTwister.prototype.init_genrand = function(s) {
    this.mt[0] = s >>> 0;
    for (this.mti = 1;this.mti < this.N;this.mti++) {
      s = this.mt[this.mti - 1] ^ this.mt[this.mti - 1] >>> 30;
      this.mt[this.mti] = (((s & 4294901760) >>> 16) * 1812433253 << 16) + (s & 65535) * 1812433253 + this.mti;
      this.mt[this.mti] >>>= 0;
    }
  };
  MersenneTwister.prototype.init_by_array = function(init_key, key_length) {
    var i = 1, j = 0, k, s;
    this.init_genrand(19650218);
    k = this.N > key_length ? this.N : key_length;
    for (;k;k--) {
      s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
      this.mt[i] = (this.mt[i] ^ (((s & 4294901760) >>> 16) * 1664525 << 16) + (s & 65535) * 1664525) + init_key[j] + j;
      this.mt[i] >>>= 0;
      i++;
      j++;
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1];
        i = 1;
      }
      if (j >= key_length) {
        j = 0;
      }
    }
    for (k = this.N - 1;k;k--) {
      s = this.mt[i - 1] ^ this.mt[i - 1] >>> 30;
      this.mt[i] = (this.mt[i] ^ (((s & 4294901760) >>> 16) * 1566083941 << 16) + (s & 65535) * 1566083941) - i;
      this.mt[i] >>>= 0;
      i++;
      if (i >= this.N) {
        this.mt[0] = this.mt[this.N - 1];
        i = 1;
      }
    }
    this.mt[0] = 2147483648;
  };
  MersenneTwister.prototype.genrand_int32 = function() {
    var y;
    var mag01 = new Array(0, this.MATRIX_A);
    if (this.mti >= this.N) {
      var kk;
      if (this.mti === this.N + 1) {
        this.init_genrand(5489);
      }
      for (kk = 0;kk < this.N - this.M;kk++) {
        y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
        this.mt[kk] = this.mt[kk + this.M] ^ y >>> 1 ^ mag01[y & 1];
      }
      for (;kk < this.N - 1;kk++) {
        y = this.mt[kk] & this.UPPER_MASK | this.mt[kk + 1] & this.LOWER_MASK;
        this.mt[kk] = this.mt[kk + (this.M - this.N)] ^ y >>> 1 ^ mag01[y & 1];
      }
      y = this.mt[this.N - 1] & this.UPPER_MASK | this.mt[0] & this.LOWER_MASK;
      this.mt[this.N - 1] = this.mt[this.M - 1] ^ y >>> 1 ^ mag01[y & 1];
      this.mti = 0;
    }
    y = this.mt[this.mti++];
    y ^= y >>> 11;
    y ^= y << 7 & 2636928640;
    y ^= y << 15 & 4022730752;
    y ^= y >>> 18;
    return y >>> 0;
  };
  MersenneTwister.prototype.genrand_int31 = function() {
    return this.genrand_int32() >>> 1;
  };
  MersenneTwister.prototype.genrand_real1 = function() {
    return this.genrand_int32() * (1 / 4294967295);
  };
  MersenneTwister.prototype.random = function() {
    return this.genrand_int32() * (1 / 4294967296);
  };
  MersenneTwister.prototype.genrand_real3 = function() {
    return (this.genrand_int32() + .5) * (1 / 4294967296);
  };
  MersenneTwister.prototype.genrand_res53 = function() {
    var a = this.genrand_int32() >>> 5, b = this.genrand_int32() >>> 6;
    return (a * 67108864 + b) * (1 / 9007199254740992);
  };
  var BlueImpMD5 = function() {
  };
  BlueImpMD5.prototype.VERSION = "1.0.1";
  BlueImpMD5.prototype.safe_add = function safe_add(x, y) {
    var lsw = (x & 65535) + (y & 65535), msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 65535;
  };
  BlueImpMD5.prototype.bit_roll = function(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  };
  BlueImpMD5.prototype.md5_cmn = function(q, a, b, x, s, t) {
    return this.safe_add(this.bit_roll(this.safe_add(this.safe_add(a, q), this.safe_add(x, t)), s), b);
  };
  BlueImpMD5.prototype.md5_ff = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & c | ~b & d, a, b, x, s, t);
  };
  BlueImpMD5.prototype.md5_gg = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(b & d | c & ~d, a, b, x, s, t);
  };
  BlueImpMD5.prototype.md5_hh = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(b ^ c ^ d, a, b, x, s, t);
  };
  BlueImpMD5.prototype.md5_ii = function(a, b, c, d, x, s, t) {
    return this.md5_cmn(c ^ (b | ~d), a, b, x, s, t);
  };
  BlueImpMD5.prototype.binl_md5 = function(x, len) {
    x[len >> 5] |= 128 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i, olda, oldb, oldc, oldd, a = 1732584193, b = -271733879, c = -1732584194, d = 271733878;
    for (i = 0;i < x.length;i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = this.md5_ff(a, b, c, d, x[i], 7, -680876936);
      d = this.md5_ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = this.md5_ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = this.md5_ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = this.md5_ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = this.md5_ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = this.md5_ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = this.md5_ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = this.md5_ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = this.md5_ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = this.md5_ff(c, d, a, b, x[i + 10], 17, -42063);
      b = this.md5_ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = this.md5_ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = this.md5_ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = this.md5_ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = this.md5_ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = this.md5_gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = this.md5_gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = this.md5_gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = this.md5_gg(b, c, d, a, x[i], 20, -373897302);
      a = this.md5_gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = this.md5_gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = this.md5_gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = this.md5_gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = this.md5_gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = this.md5_gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = this.md5_gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = this.md5_gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = this.md5_gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = this.md5_gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = this.md5_gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = this.md5_gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = this.md5_hh(a, b, c, d, x[i + 5], 4, -378558);
      d = this.md5_hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = this.md5_hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = this.md5_hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = this.md5_hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = this.md5_hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = this.md5_hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = this.md5_hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = this.md5_hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = this.md5_hh(d, a, b, c, x[i], 11, -358537222);
      c = this.md5_hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = this.md5_hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = this.md5_hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = this.md5_hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = this.md5_hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = this.md5_hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = this.md5_ii(a, b, c, d, x[i], 6, -198630844);
      d = this.md5_ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = this.md5_ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = this.md5_ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = this.md5_ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = this.md5_ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = this.md5_ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = this.md5_ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = this.md5_ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = this.md5_ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = this.md5_ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = this.md5_ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = this.md5_ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = this.md5_ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = this.md5_ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = this.md5_ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = this.safe_add(a, olda);
      b = this.safe_add(b, oldb);
      c = this.safe_add(c, oldc);
      d = this.safe_add(d, oldd);
    }
    return [a, b, c, d];
  };
  BlueImpMD5.prototype.binl2rstr = function(input) {
    var i, output = "";
    for (i = 0;i < input.length * 32;i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 255);
    }
    return output;
  };
  BlueImpMD5.prototype.rstr2binl = function(input) {
    var i, output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0;i < output.length;i += 1) {
      output[i] = 0;
    }
    for (i = 0;i < input.length * 8;i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 255) << i % 32;
    }
    return output;
  };
  BlueImpMD5.prototype.rstr_md5 = function(s) {
    return this.binl2rstr(this.binl_md5(this.rstr2binl(s), s.length * 8));
  };
  BlueImpMD5.prototype.rstr_hmac_md5 = function(key, data) {
    var i, bkey = this.rstr2binl(key), ipad = [], opad = [], hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = this.binl_md5(bkey, key.length * 8);
    }
    for (i = 0;i < 16;i += 1) {
      ipad[i] = bkey[i] ^ 909522486;
      opad[i] = bkey[i] ^ 1549556828;
    }
    hash = this.binl_md5(ipad.concat(this.rstr2binl(data)), 512 + data.length * 8);
    return this.binl2rstr(this.binl_md5(opad.concat(hash), 512 + 128));
  };
  BlueImpMD5.prototype.rstr2hex = function(input) {
    var hex_tab = "0123456789abcdef", output = "", x, i;
    for (i = 0;i < input.length;i += 1) {
      x = input.charCodeAt(i);
      output += hex_tab.charAt(x >>> 4 & 15) + hex_tab.charAt(x & 15);
    }
    return output;
  };
  BlueImpMD5.prototype.str2rstr_utf8 = function(input) {
    return unescape(encodeURIComponent(input));
  };
  BlueImpMD5.prototype.raw_md5 = function(s) {
    return this.rstr_md5(this.str2rstr_utf8(s));
  };
  BlueImpMD5.prototype.hex_md5 = function(s) {
    return this.rstr2hex(this.raw_md5(s));
  };
  BlueImpMD5.prototype.raw_hmac_md5 = function(k, d) {
    return this.rstr_hmac_md5(this.str2rstr_utf8(k), this.str2rstr_utf8(d));
  };
  BlueImpMD5.prototype.hex_hmac_md5 = function(k, d) {
    return this.rstr2hex(this.raw_hmac_md5(k, d));
  };
  BlueImpMD5.prototype.md5 = function(string, key, raw) {
    if (!key) {
      if (!raw) {
        return this.hex_md5(string);
      }
      return this.raw_md5(string);
    }
    if (!raw) {
      return this.hex_hmac_md5(key, string);
    }
    return this.raw_hmac_md5(key, string);
  };
  if (typeof exports !== "undefined") {
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = Chance;
    }
    exports.Chance = Chance;
  }
  if (typeof define === "function" && define.amd) {
    define([], function() {
      return Chance;
    });
  }
  if (typeof importScripts !== "undefined") {
    chance = new Chance;
  }
  if (typeof window === "object" && typeof window.document === "object") {
    window.Chance = Chance;
    window.chance = new Chance;
  }
})();
function isMobileDetected(a) {
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|android|ipad|playbook|silk|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 
  4));
}
this.createjs = this.createjs || {};
createjs.extend = function(subclass, superclass) {
  function o() {
    this.constructor = subclass;
  }
  o.prototype = superclass.prototype;
  return subclass.prototype = new o;
};
this.createjs = this.createjs || {};
createjs.promote = function(subclass, prefix) {
  var subP = subclass.prototype, supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
  if (supP) {
    subP[(prefix += "_") + "constructor"] = supP.constructor;
    for (var n in supP) {
      if (subP.hasOwnProperty(n) && typeof supP[n] == "function") {
        subP[prefix + n] = supP[n];
      }
    }
  }
  return subclass;
};
this.createjs = this.createjs || {};
createjs.indexOf = function(array, searchElement) {
  for (var i = 0, l = array.length;i < l;i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return -1;
};
this.createjs = this.createjs || {};
(function() {
  function Event(type, bubbles, cancelable) {
    this.type = type;
    this.target = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
    this.timeStamp = (new Date).getTime();
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    this.removed = false;
  }
  var p = Event.prototype;
  p.preventDefault = function() {
    this.defaultPrevented = this.cancelable && true;
  };
  p.stopPropagation = function() {
    this.propagationStopped = true;
  };
  p.stopImmediatePropagation = function() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };
  p.remove = function() {
    this.removed = true;
  };
  p.clone = function() {
    return new Event(this.type, this.bubbles, this.cancelable);
  };
  p.set = function(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  p.toString = function() {
    return "[Event (type=" + this.type + ")]";
  };
  createjs.Event = Event;
})();
this.createjs = this.createjs || {};
(function() {
  function EventDispatcher() {
    this._listeners = null;
    this._captureListeners = null;
  }
  var p = EventDispatcher.prototype;
  EventDispatcher.initialize = function(target) {
    target.addEventListener = p.addEventListener;
    target.on = p.on;
    target.removeEventListener = target.off = p.removeEventListener;
    target.removeAllEventListeners = p.removeAllEventListeners;
    target.hasEventListener = p.hasEventListener;
    target.dispatchEvent = p.dispatchEvent;
    target._dispatchEvent = p._dispatchEvent;
    target.willTrigger = p.willTrigger;
  };
  p.addEventListener = function(type, listener, useCapture) {
    var listeners;
    if (useCapture) {
      listeners = this._captureListeners = this._captureListeners || {};
    } else {
      listeners = this._listeners = this._listeners || {};
    }
    var arr = listeners[type];
    if (arr) {
      this.removeEventListener(type, listener, useCapture);
    }
    arr = listeners[type];
    if (!arr) {
      listeners[type] = [listener];
    } else {
      arr.push(listener);
    }
    return listener;
  };
  p.on = function(type, listener, scope, once, data, useCapture) {
    if (listener.handleEvent) {
      scope = scope || listener;
      listener = listener.handleEvent;
    }
    scope = scope || this;
    return this.addEventListener(type, function(evt) {
      listener.call(scope, evt, data);
      once && evt.remove();
    }, useCapture);
  };
  p.removeEventListener = function(type, listener, useCapture) {
    var listeners = useCapture ? this._captureListeners : this._listeners;
    if (!listeners) {
      return;
    }
    var arr = listeners[type];
    if (!arr) {
      return;
    }
    for (var i = 0, l = arr.length;i < l;i++) {
      if (arr[i] == listener) {
        if (l == 1) {
          delete listeners[type];
        } else {
          arr.splice(i, 1);
        }
        break;
      }
    }
  };
  p.off = p.removeEventListener;
  p.removeAllEventListeners = function(type) {
    if (!type) {
      this._listeners = this._captureListeners = null;
    } else {
      if (this._listeners) {
        delete this._listeners[type];
      }
      if (this._captureListeners) {
        delete this._captureListeners[type];
      }
    }
  };
  p.dispatchEvent = function(eventObj, bubbles, cancelable) {
    if (typeof eventObj == "string") {
      var listeners = this._listeners;
      if (!bubbles && (!listeners || !listeners[eventObj])) {
        return true;
      }
      eventObj = new createjs.Event(eventObj, bubbles, cancelable);
    } else {
      if (eventObj.target && eventObj.clone) {
        eventObj = eventObj.clone();
      }
    }
    try {
      eventObj.target = this;
    } catch (e) {
    }
    if (!eventObj.bubbles || !this.parent) {
      this._dispatchEvent(eventObj, 2);
    } else {
      var top = this, list = [top];
      while (top.parent) {
        list.push(top = top.parent);
      }
      var i, l = list.length;
      for (i = l - 1;i >= 0 && !eventObj.propagationStopped;i--) {
        list[i]._dispatchEvent(eventObj, 1 + (i == 0));
      }
      for (i = 1;i < l && !eventObj.propagationStopped;i++) {
        list[i]._dispatchEvent(eventObj, 3);
      }
    }
    return !eventObj.defaultPrevented;
  };
  p.hasEventListener = function(type) {
    var listeners = this._listeners, captureListeners = this._captureListeners;
    return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);
  };
  p.willTrigger = function(type) {
    var o = this;
    while (o) {
      if (o.hasEventListener(type)) {
        return true;
      }
      o = o.parent;
    }
    return false;
  };
  p.toString = function() {
    return "[EventDispatcher]";
  };
  p._dispatchEvent = function(eventObj, eventPhase) {
    var l, listeners = eventPhase == 1 ? this._captureListeners : this._listeners;
    if (eventObj && listeners) {
      var arr = listeners[eventObj.type];
      if (!arr || !(l = arr.length)) {
        return;
      }
      try {
        eventObj.currentTarget = this;
      } catch (e) {
      }
      try {
        eventObj.eventPhase = eventPhase;
      } catch (e) {
      }
      eventObj.removed = false;
      arr = arr.slice();
      for (var i = 0;i < l && !eventObj.immediatePropagationStopped;i++) {
        var o = arr[i];
        if (o.handleEvent) {
          o.handleEvent(eventObj);
        } else {
          o(eventObj);
        }
        if (eventObj.removed) {
          this.off(eventObj.type, o, eventPhase == 1);
          eventObj.removed = false;
        }
      }
    }
  };
  createjs.EventDispatcher = EventDispatcher;
})();
this.createjs = this.createjs || {};
(function() {
  function Ticker() {
    throw "Ticker cannot be instantiated.";
  }
  Ticker.RAF_SYNCHED = "synched";
  Ticker.RAF = "raf";
  Ticker.TIMEOUT = "timeout";
  Ticker.useRAF = false;
  Ticker.timingMode = null;
  Ticker.maxDelta = 0;
  Ticker.paused = false;
  Ticker.removeEventListener = null;
  Ticker.removeAllEventListeners = null;
  Ticker.dispatchEvent = null;
  Ticker.hasEventListener = null;
  Ticker._listeners = null;
  createjs.EventDispatcher.initialize(Ticker);
  Ticker._addEventListener = Ticker.addEventListener;
  Ticker.addEventListener = function() {
    !Ticker._inited && Ticker.init();
    return Ticker._addEventListener.apply(Ticker, arguments);
  };
  Ticker._inited = false;
  Ticker._startTime = 0;
  Ticker._pausedTime = 0;
  Ticker._ticks = 0;
  Ticker._pausedTicks = 0;
  Ticker._interval = 50;
  Ticker._lastTime = 0;
  Ticker._times = null;
  Ticker._tickTimes = null;
  Ticker._timerId = null;
  Ticker._raf = true;
  Ticker.setInterval = function(interval) {
    Ticker._interval = interval;
    if (!Ticker._inited) {
      return;
    }
    Ticker._setupTick();
  };
  Ticker.getInterval = function() {
    return Ticker._interval;
  };
  Ticker.setFPS = function(value) {
    Ticker.setInterval(1E3 / value);
  };
  Ticker.getFPS = function() {
    return 1E3 / Ticker._interval;
  };
  try {
    Object.defineProperties(Ticker, {interval:{get:Ticker.getInterval, set:Ticker.setInterval}, framerate:{get:Ticker.getFPS, set:Ticker.setFPS}});
  } catch (e) {
    console.log(e);
  }
  Ticker.init = function() {
    if (Ticker._inited) {
      return;
    }
    Ticker._inited = true;
    Ticker._times = [];
    Ticker._tickTimes = [];
    Ticker._startTime = Ticker._getTime();
    Ticker._times.push(Ticker._lastTime = 0);
    Ticker.interval = Ticker._interval;
  };
  Ticker.reset = function() {
    if (Ticker._raf) {
      var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
      f && f(Ticker._timerId);
    } else {
      clearTimeout(Ticker._timerId);
    }
    Ticker.removeAllEventListeners("tick");
    Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
    Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
    Ticker._inited = false;
  };
  Ticker.getMeasuredTickTime = function(ticks) {
    var ttl = 0, times = Ticker._tickTimes;
    if (!times || times.length < 1) {
      return -1;
    }
    ticks = Math.min(times.length, ticks || Ticker.getFPS() | 0);
    for (var i = 0;i < ticks;i++) {
      ttl += times[i];
    }
    return ttl / ticks;
  };
  Ticker.getMeasuredFPS = function(ticks) {
    var times = Ticker._times;
    if (!times || times.length < 2) {
      return -1;
    }
    ticks = Math.min(times.length - 1, ticks || Ticker.getFPS() | 0);
    return 1E3 / ((times[0] - times[ticks]) / ticks);
  };
  Ticker.setPaused = function(value) {
    Ticker.paused = value;
  };
  Ticker.getPaused = function() {
    return Ticker.paused;
  };
  Ticker.getTime = function(runTime) {
    return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
  };
  Ticker.getEventTime = function(runTime) {
    return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
  };
  Ticker.getTicks = function(pauseable) {
    return Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
  };
  Ticker._handleSynch = function() {
    Ticker._timerId = null;
    Ticker._setupTick();
    if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval - 1) * .97) {
      Ticker._tick();
    }
  };
  Ticker._handleRAF = function() {
    Ticker._timerId = null;
    Ticker._setupTick();
    Ticker._tick();
  };
  Ticker._handleTimeout = function() {
    Ticker._timerId = null;
    Ticker._setupTick();
    Ticker._tick();
  };
  Ticker._setupTick = function() {
    if (Ticker._timerId != null) {
      return;
    }
    var mode = Ticker.timingMode || Ticker.useRAF && Ticker.RAF_SYNCHED;
    if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
      var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      if (f) {
        Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
        Ticker._raf = true;
        return;
      }
    }
    Ticker._raf = false;
    Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
  };
  Ticker._tick = function() {
    var paused = Ticker.paused;
    var time = Ticker._getTime();
    var elapsedTime = time - Ticker._lastTime;
    Ticker._lastTime = time;
    Ticker._ticks++;
    if (paused) {
      Ticker._pausedTicks++;
      Ticker._pausedTime += elapsedTime;
    }
    if (Ticker.hasEventListener("tick")) {
      var event = new createjs.Event("tick");
      var maxDelta = Ticker.maxDelta;
      event.delta = maxDelta && elapsedTime > maxDelta ? maxDelta : elapsedTime;
      event.paused = paused;
      event.time = time;
      event.runTime = time - Ticker._pausedTime;
      Ticker.dispatchEvent(event);
    }
    Ticker._tickTimes.unshift(Ticker._getTime() - time);
    while (Ticker._tickTimes.length > 100) {
      Ticker._tickTimes.pop();
    }
    Ticker._times.unshift(time);
    while (Ticker._times.length > 100) {
      Ticker._times.pop();
    }
  };
  var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
  Ticker._getTime = function() {
    return (now && now.call(performance) || (new Date).getTime()) - Ticker._startTime;
  };
  createjs.Ticker = Ticker;
})();
this.createjs = this.createjs || {};
(function() {
  function UID() {
    throw "UID cannot be instantiated";
  }
  UID._nextID = 0;
  UID.get = function() {
    return UID._nextID++;
  };
  createjs.UID = UID;
})();
this.createjs = this.createjs || {};
(function() {
  function MouseEvent(type, bubbles, cancelable, stageX, stageY, nativeEvent, pointerID, primary, rawX, rawY, relatedTarget) {
    this.Event_constructor(type, bubbles, cancelable);
    this.stageX = stageX;
    this.stageY = stageY;
    this.rawX = rawX == null ? stageX : rawX;
    this.rawY = rawY == null ? stageY : rawY;
    this.nativeEvent = nativeEvent;
    this.pointerID = pointerID;
    this.primary = !!primary;
    this.relatedTarget = relatedTarget;
  }
  var p = createjs.extend(MouseEvent, createjs.Event);
  p._get_localX = function() {
    return this.currentTarget.globalToLocal(this.rawX, this.rawY).x;
  };
  p._get_localY = function() {
    return this.currentTarget.globalToLocal(this.rawX, this.rawY).y;
  };
  p._get_isTouch = function() {
    return this.pointerID !== -1;
  };
  try {
    Object.defineProperties(p, {localX:{get:p._get_localX}, localY:{get:p._get_localY}, isTouch:{get:p._get_isTouch}});
  } catch (e) {
  }
  p.clone = function() {
    return new MouseEvent(this.type, this.bubbles, this.cancelable, this.stageX, this.stageY, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY);
  };
  p.toString = function() {
    return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]";
  };
  createjs.MouseEvent = createjs.promote(MouseEvent, "Event");
})();
this.createjs = this.createjs || {};
(function() {
  function Matrix2D(a, b, c, d, tx, ty) {
    this.setValues(a, b, c, d, tx, ty);
  }
  var p = Matrix2D.prototype;
  Matrix2D.DEG_TO_RAD = Math.PI / 180;
  Matrix2D.identity = null;
  p.setValues = function(a, b, c, d, tx, ty) {
    this.a = a == null ? 1 : a;
    this.b = b || 0;
    this.c = c || 0;
    this.d = d == null ? 1 : d;
    this.tx = tx || 0;
    this.ty = ty || 0;
    return this;
  };
  p.append = function(a, b, c, d, tx, ty) {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    if (a != 1 || b != 0 || c != 0 || d != 1) {
      this.a = a1 * a + c1 * b;
      this.b = b1 * a + d1 * b;
      this.c = a1 * c + c1 * d;
      this.d = b1 * c + d1 * d;
    }
    this.tx = a1 * tx + c1 * ty + this.tx;
    this.ty = b1 * tx + d1 * ty + this.ty;
    return this;
  };
  p.prepend = function(a, b, c, d, tx, ty) {
    var a1 = this.a;
    var c1 = this.c;
    var tx1 = this.tx;
    this.a = a * a1 + c * this.b;
    this.b = b * a1 + d * this.b;
    this.c = a * c1 + c * this.d;
    this.d = b * c1 + d * this.d;
    this.tx = a * tx1 + c * this.ty + tx;
    this.ty = b * tx1 + d * this.ty + ty;
    return this;
  };
  p.appendMatrix = function(matrix) {
    return this.append(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  };
  p.prependMatrix = function(matrix) {
    return this.prepend(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  };
  p.appendTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
    if (rotation % 360) {
      var r = rotation * Matrix2D.DEG_TO_RAD;
      var cos = Math.cos(r);
      var sin = Math.sin(r);
    } else {
      cos = 1;
      sin = 0;
    }
    if (skewX || skewY) {
      skewX *= Matrix2D.DEG_TO_RAD;
      skewY *= Matrix2D.DEG_TO_RAD;
      this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
      this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
    } else {
      this.append(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
    if (regX || regY) {
      this.tx -= regX * this.a + regY * this.c;
      this.ty -= regX * this.b + regY * this.d;
    }
    return this;
  };
  p.prependTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
    if (rotation % 360) {
      var r = rotation * Matrix2D.DEG_TO_RAD;
      var cos = Math.cos(r);
      var sin = Math.sin(r);
    } else {
      cos = 1;
      sin = 0;
    }
    if (regX || regY) {
      this.tx -= regX;
      this.ty -= regY;
    }
    if (skewX || skewY) {
      skewX *= Matrix2D.DEG_TO_RAD;
      skewY *= Matrix2D.DEG_TO_RAD;
      this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, 0, 0);
      this.prepend(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), x, y);
    } else {
      this.prepend(cos * scaleX, sin * scaleX, -sin * scaleY, cos * scaleY, x, y);
    }
    return this;
  };
  p.rotate = function(angle) {
    angle = angle * Matrix2D.DEG_TO_RAD;
    var cos = Math.cos(angle);
    var sin = Math.sin(angle);
    var a1 = this.a;
    var b1 = this.b;
    this.a = a1 * cos + this.c * sin;
    this.b = b1 * cos + this.d * sin;
    this.c = -a1 * sin + this.c * cos;
    this.d = -b1 * sin + this.d * cos;
    return this;
  };
  p.skew = function(skewX, skewY) {
    skewX = skewX * Matrix2D.DEG_TO_RAD;
    skewY = skewY * Matrix2D.DEG_TO_RAD;
    this.append(Math.cos(skewY), Math.sin(skewY), -Math.sin(skewX), Math.cos(skewX), 0, 0);
    return this;
  };
  p.scale = function(x, y) {
    this.a *= x;
    this.b *= x;
    this.c *= y;
    this.d *= y;
    return this;
  };
  p.translate = function(x, y) {
    this.tx += this.a * x + this.c * y;
    this.ty += this.b * x + this.d * y;
    return this;
  };
  p.identity = function() {
    this.a = this.d = 1;
    this.b = this.c = this.tx = this.ty = 0;
    return this;
  };
  p.invert = function() {
    var a1 = this.a;
    var b1 = this.b;
    var c1 = this.c;
    var d1 = this.d;
    var tx1 = this.tx;
    var n = a1 * d1 - b1 * c1;
    this.a = d1 / n;
    this.b = -b1 / n;
    this.c = -c1 / n;
    this.d = a1 / n;
    this.tx = (c1 * this.ty - d1 * tx1) / n;
    this.ty = -(a1 * this.ty - b1 * tx1) / n;
    return this;
  };
  p.isIdentity = function() {
    return this.tx === 0 && this.ty === 0 && this.a === 1 && this.b === 0 && this.c === 0 && this.d === 1;
  };
  p.equals = function(matrix) {
    return this.tx === matrix.tx && this.ty === matrix.ty && this.a === matrix.a && this.b === matrix.b && this.c === matrix.c && this.d === matrix.d;
  };
  p.transformPoint = function(x, y, pt) {
    pt = pt || {};
    pt.x = x * this.a + y * this.c + this.tx;
    pt.y = x * this.b + y * this.d + this.ty;
    return pt;
  };
  p.decompose = function(target) {
    if (target == null) {
      target = {};
    }
    target.x = this.tx;
    target.y = this.ty;
    target.scaleX = Math.sqrt(this.a * this.a + this.b * this.b);
    target.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
    var skewX = Math.atan2(-this.c, this.d);
    var skewY = Math.atan2(this.b, this.a);
    var delta = Math.abs(1 - skewX / skewY);
    if (delta < 1E-5) {
      target.rotation = skewY / Matrix2D.DEG_TO_RAD;
      if (this.a < 0 && this.d >= 0) {
        target.rotation += target.rotation <= 0 ? 180 : -180;
      }
      target.skewX = target.skewY = 0;
    } else {
      target.skewX = skewX / Matrix2D.DEG_TO_RAD;
      target.skewY = skewY / Matrix2D.DEG_TO_RAD;
    }
    return target;
  };
  p.copy = function(matrix) {
    return this.setValues(matrix.a, matrix.b, matrix.c, matrix.d, matrix.tx, matrix.ty);
  };
  p.clone = function() {
    return new Matrix2D(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  p.toString = function() {
    return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]";
  };
  Matrix2D.identity = new Matrix2D;
  createjs.Matrix2D = Matrix2D;
})();
this.createjs = this.createjs || {};
(function() {
  function DisplayProps(visible, alpha, shadow, compositeOperation, matrix) {
    this.setValues(visible, alpha, shadow, compositeOperation, matrix);
  }
  var p = DisplayProps.prototype;
  p.setValues = function(visible, alpha, shadow, compositeOperation, matrix) {
    this.visible = visible == null ? true : !!visible;
    this.alpha = alpha == null ? 1 : alpha;
    this.shadow = shadow;
    this.compositeOperation = compositeOperation;
    this.matrix = matrix || this.matrix && this.matrix.identity() || new createjs.Matrix2D;
    return this;
  };
  p.append = function(visible, alpha, shadow, compositeOperation, matrix) {
    this.alpha *= alpha;
    this.shadow = shadow || this.shadow;
    this.compositeOperation = compositeOperation || this.compositeOperation;
    this.visible = this.visible && visible;
    matrix && this.matrix.appendMatrix(matrix);
    return this;
  };
  p.prepend = function(visible, alpha, shadow, compositeOperation, matrix) {
    this.alpha *= alpha;
    this.shadow = this.shadow || shadow;
    this.compositeOperation = this.compositeOperation || compositeOperation;
    this.visible = this.visible && visible;
    matrix && this.matrix.prependMatrix(matrix);
    return this;
  };
  p.identity = function() {
    this.visible = true;
    this.alpha = 1;
    this.shadow = this.compositeOperation = null;
    this.matrix.identity();
    return this;
  };
  p.clone = function() {
    return new DisplayProps(this.alpha, this.shadow, this.compositeOperation, this.visible, this.matrix.clone());
  };
  createjs.DisplayProps = DisplayProps;
})();
this.createjs = this.createjs || {};
(function() {
  function Point(x, y) {
    this.setValues(x, y);
  }
  var p = Point.prototype;
  p.setValues = function(x, y) {
    this.x = x || 0;
    this.y = y || 0;
    return this;
  };
  p.copy = function(point) {
    this.x = point.x;
    this.y = point.y;
    return this;
  };
  p.clone = function() {
    return new Point(this.x, this.y);
  };
  p.toString = function() {
    return "[Point (x=" + this.x + " y=" + this.y + ")]";
  };
  createjs.Point = Point;
})();
this.createjs = this.createjs || {};
(function() {
  function Rectangle(x, y, width, height) {
    this.setValues(x, y, width, height);
  }
  var p = Rectangle.prototype;
  p.setValues = function(x, y, width, height) {
    this.x = x || 0;
    this.y = y || 0;
    this.width = width || 0;
    this.height = height || 0;
    return this;
  };
  p.extend = function(x, y, width, height) {
    width = width || 0;
    height = height || 0;
    if (x + width > this.x + this.width) {
      this.width = x + width - this.x;
    }
    if (y + height > this.y + this.height) {
      this.height = y + height - this.y;
    }
    if (x < this.x) {
      this.width += this.x - x;
      this.x = x;
    }
    if (y < this.y) {
      this.height += this.y - y;
      this.y = y;
    }
    return this;
  };
  p.pad = function(top, left, bottom, right) {
    this.x -= left;
    this.y -= top;
    this.width += left + right;
    this.height += top + bottom;
    return this;
  };
  p.copy = function(rectangle) {
    return this.setValues(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
  };
  p.contains = function(x, y, width, height) {
    width = width || 0;
    height = height || 0;
    return x >= this.x && x + width <= this.x + this.width && y >= this.y && y + height <= this.y + this.height;
  };
  p.union = function(rect) {
    return this.clone().extend(rect.x, rect.y, rect.width, rect.height);
  };
  p.intersection = function(rect) {
    var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height;
    if (this.x > x1) {
      x1 = this.x;
    }
    if (this.y > y1) {
      y1 = this.y;
    }
    if (this.x + this.width < x2) {
      x2 = this.x + this.width;
    }
    if (this.y + this.height < y2) {
      y2 = this.y + this.height;
    }
    return x2 <= x1 || y2 <= y1 ? null : new Rectangle(x1, y1, x2 - x1, y2 - y1);
  };
  p.intersects = function(rect) {
    return rect.x <= this.x + this.width && this.x <= rect.x + rect.width && rect.y <= this.y + this.height && this.y <= rect.y + rect.height;
  };
  p.isEmpty = function() {
    return this.width <= 0 || this.height <= 0;
  };
  p.clone = function() {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  p.toString = function() {
    return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]";
  };
  createjs.Rectangle = Rectangle;
})();
this.createjs = this.createjs || {};
(function() {
  function ButtonHelper(target, outLabel, overLabel, downLabel, play, hitArea, hitLabel) {
    if (!target.addEventListener) {
      return;
    }
    this.target = target;
    this.overLabel = overLabel == null ? "over" : overLabel;
    this.outLabel = outLabel == null ? "out" : outLabel;
    this.downLabel = downLabel == null ? "down" : downLabel;
    this.play = play;
    this._isPressed = false;
    this._isOver = false;
    this._enabled = false;
    target.mouseChildren = false;
    this.enabled = true;
    this.handleEvent({});
    if (hitArea) {
      if (hitLabel) {
        hitArea.actionsEnabled = false;
        hitArea.gotoAndStop && hitArea.gotoAndStop(hitLabel);
      }
      target.hitArea = hitArea;
    }
  }
  var p = ButtonHelper.prototype;
  p.setEnabled = function(value) {
    if (value == this._enabled) {
      return;
    }
    var o = this.target;
    this._enabled = value;
    if (value) {
      o.cursor = "pointer";
      o.addEventListener("rollover", this);
      o.addEventListener("rollout", this);
      o.addEventListener("mousedown", this);
      o.addEventListener("pressup", this);
      if (o._reset) {
        o.__reset = o._reset;
        o._reset = this._reset;
      }
    } else {
      o.cursor = null;
      o.removeEventListener("rollover", this);
      o.removeEventListener("rollout", this);
      o.removeEventListener("mousedown", this);
      o.removeEventListener("pressup", this);
      if (o.__reset) {
        o._reset = o.__reset;
        delete o.__reset;
      }
    }
  };
  p.getEnabled = function() {
    return this._enabled;
  };
  try {
    Object.defineProperties(p, {enabled:{get:p.getEnabled, set:p.setEnabled}});
  } catch (e) {
  }
  p.toString = function() {
    return "[ButtonHelper]";
  };
  p.handleEvent = function(evt) {
    var label, t = this.target, type = evt.type;
    if (type == "mousedown") {
      this._isPressed = true;
      label = this.downLabel;
    } else {
      if (type == "pressup") {
        this._isPressed = false;
        label = this._isOver ? this.overLabel : this.outLabel;
      } else {
        if (type == "rollover") {
          this._isOver = true;
          label = this._isPressed ? this.downLabel : this.overLabel;
        } else {
          this._isOver = false;
          label = this._isPressed ? this.overLabel : this.outLabel;
        }
      }
    }
    if (this.play) {
      t.gotoAndPlay && t.gotoAndPlay(label);
    } else {
      t.gotoAndStop && t.gotoAndStop(label);
    }
  };
  p._reset = function() {
    var p = this.paused;
    this.__reset();
    this.paused = p;
  };
  createjs.ButtonHelper = ButtonHelper;
})();
this.createjs = this.createjs || {};
(function() {
  function Shadow(color, offsetX, offsetY, blur) {
    this.color = color || "black";
    this.offsetX = offsetX || 0;
    this.offsetY = offsetY || 0;
    this.blur = blur || 0;
  }
  var p = Shadow.prototype;
  Shadow.identity = new Shadow("transparent", 0, 0, 0);
  p.toString = function() {
    return "[Shadow]";
  };
  p.clone = function() {
    return new Shadow(this.color, this.offsetX, this.offsetY, this.blur);
  };
  createjs.Shadow = Shadow;
})();
this.createjs = this.createjs || {};
(function() {
  function SpriteSheet(data) {
    this.EventDispatcher_constructor();
    this.complete = true;
    this.framerate = 0;
    this._animations = null;
    this._frames = null;
    this._images = null;
    this._data = null;
    this._loadCount = 0;
    this._frameHeight = 0;
    this._frameWidth = 0;
    this._numFrames = 0;
    this._regX = 0;
    this._regY = 0;
    this._spacing = 0;
    this._margin = 0;
    this._parseData(data);
  }
  var p = createjs.extend(SpriteSheet, createjs.EventDispatcher);
  p.getAnimations = function() {
    return this._animations.slice();
  };
  try {
    Object.defineProperties(p, {animations:{get:p.getAnimations}});
  } catch (e) {
  }
  p.getNumFrames = function(animation) {
    if (animation == null) {
      return this._frames ? this._frames.length : this._numFrames || 0;
    } else {
      var data = this._data[animation];
      if (data == null) {
        return 0;
      } else {
        return data.frames.length;
      }
    }
  };
  p.getAnimation = function(name) {
    return this._data[name];
  };
  p.getFrame = function(frameIndex) {
    var frame;
    if (this._frames && (frame = this._frames[frameIndex])) {
      return frame;
    }
    return null;
  };
  p.getFrameBounds = function(frameIndex, rectangle) {
    var frame = this.getFrame(frameIndex);
    return frame ? (rectangle || new createjs.Rectangle).setValues(-frame.regX, -frame.regY, frame.rect.width, frame.rect.height) : null;
  };
  p.toString = function() {
    return "[SpriteSheet]";
  };
  p.clone = function() {
    throw "SpriteSheet cannot be cloned.";
  };
  p._parseData = function(data) {
    var i, l, o, a;
    if (data == null) {
      return;
    }
    this.framerate = data.framerate || 0;
    if (data.images && (l = data.images.length) > 0) {
      a = this._images = [];
      for (i = 0;i < l;i++) {
        var img = data.images[i];
        if (typeof img == "string") {
          var src = img;
          img = document.createElement("img");
          img.src = src;
        }
        a.push(img);
        if (!img.getContext && !img.naturalWidth) {
          this._loadCount++;
          this.complete = false;
          (function(o, src) {
            img.onload = function() {
              o._handleImageLoad(src);
            };
          })(this, src);
          (function(o, src) {
            img.onerror = function() {
              o._handleImageError(src);
            };
          })(this, src);
        }
      }
    }
    if (data.frames == null) {
    } else {
      if (Array.isArray(data.frames)) {
        this._frames = [];
        a = data.frames;
        for (i = 0, l = a.length;i < l;i++) {
          var arr = a[i];
          this._frames.push({image:this._images[arr[4] ? arr[4] : 0], rect:new createjs.Rectangle(arr[0], arr[1], arr[2], arr[3]), regX:arr[5] || 0, regY:arr[6] || 0});
        }
      } else {
        o = data.frames;
        this._frameWidth = o.width;
        this._frameHeight = o.height;
        this._regX = o.regX || 0;
        this._regY = o.regY || 0;
        this._spacing = o.spacing || 0;
        this._margin = o.margin || 0;
        this._numFrames = o.count;
        if (this._loadCount == 0) {
          this._calculateFrames();
        }
      }
    }
    this._animations = [];
    if ((o = data.animations) != null) {
      this._data = {};
      var name;
      for (name in o) {
        var anim = {name:name};
        var obj = o[name];
        if (typeof obj == "number") {
          a = anim.frames = [obj];
        } else {
          if (Array.isArray(obj)) {
            if (obj.length == 1) {
              anim.frames = [obj[0]];
            } else {
              anim.speed = obj[3];
              anim.next = obj[2];
              a = anim.frames = [];
              for (i = obj[0];i <= obj[1];i++) {
                a.push(i);
              }
            }
          } else {
            anim.speed = obj.speed;
            anim.next = obj.next;
            var frames = obj.frames;
            a = anim.frames = typeof frames == "number" ? [frames] : frames.slice(0);
          }
        }
        if (anim.next === true || anim.next === undefined) {
          anim.next = name;
        }
        if (anim.next === false || a.length < 2 && anim.next == name) {
          anim.next = null;
        }
        if (!anim.speed) {
          anim.speed = 1;
        }
        this._animations.push(name);
        this._data[name] = anim;
      }
    }
  };
  p._handleImageLoad = function(src) {
    if (--this._loadCount == 0) {
      this._calculateFrames();
      this.complete = true;
      this.dispatchEvent("complete");
    }
  };
  p._handleImageError = function(src) {
    var errorEvent = new createjs.Event("error");
    errorEvent.src = src;
    this.dispatchEvent(errorEvent);
    if (--this._loadCount == 0) {
      this.dispatchEvent("complete");
    }
  };
  p._calculateFrames = function() {
    if (this._frames || this._frameWidth == 0) {
      return;
    }
    this._frames = [];
    var maxFrames = this._numFrames || 1E5;
    var frameCount = 0, frameWidth = this._frameWidth, frameHeight = this._frameHeight;
    var spacing = this._spacing, margin = this._margin;
    imgLoop: for (var i = 0, imgs = this._images;i < imgs.length;i++) {
      var img = imgs[i], imgW = img.width, imgH = img.height;
      var y = margin;
      while (y <= imgH - margin - frameHeight) {
        var x = margin;
        while (x <= imgW - margin - frameWidth) {
          if (frameCount >= maxFrames) {
            break imgLoop;
          }
          frameCount++;
          this._frames.push({image:img, rect:new createjs.Rectangle(x, y, frameWidth, frameHeight), regX:this._regX, regY:this._regY});
          x += frameWidth + spacing;
        }
        y += frameHeight + spacing;
      }
    }
    this._numFrames = frameCount;
  };
  createjs.SpriteSheet = createjs.promote(SpriteSheet, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function Graphics() {
    this.command = null;
    this._stroke = null;
    this._strokeStyle = null;
    this._oldStrokeStyle = null;
    this._strokeDash = null;
    this._oldStrokeDash = null;
    this._strokeIgnoreScale = false;
    this._fill = null;
    this._instructions = [];
    this._commitIndex = 0;
    this._activeInstructions = [];
    this._dirty = false;
    this._storeIndex = 0;
    this.clear();
  }
  var p = Graphics.prototype;
  var G = Graphics;
  Graphics.getRGB = function(r, g, b, alpha) {
    if (r != null && b == null) {
      alpha = g;
      b = r & 255;
      g = r >> 8 & 255;
      r = r >> 16 & 255;
    }
    if (alpha == null) {
      return "rgb(" + r + "," + g + "," + b + ")";
    } else {
      return "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
    }
  };
  Graphics.getHSL = function(hue, saturation, lightness, alpha) {
    if (alpha == null) {
      return "hsl(" + hue % 360 + "," + saturation + "%," + lightness + "%)";
    } else {
      return "hsla(" + hue % 360 + "," + saturation + "%," + lightness + "%," + alpha + ")";
    }
  };
  Graphics.BASE_64 = {"A":0, "B":1, "C":2, "D":3, "E":4, "F":5, "G":6, "H":7, "I":8, "J":9, "K":10, "L":11, "M":12, "N":13, "O":14, "P":15, "Q":16, "R":17, "S":18, "T":19, "U":20, "V":21, "W":22, "X":23, "Y":24, "Z":25, "a":26, "b":27, "c":28, "d":29, "e":30, "f":31, "g":32, "h":33, "i":34, "j":35, "k":36, "l":37, "m":38, "n":39, "o":40, "p":41, "q":42, "r":43, "s":44, "t":45, "u":46, "v":47, "w":48, "x":49, "y":50, "z":51, 0:52, 1:53, 2:54, 3:55, 4:56, 5:57, 6:58, 7:59, 8:60, 9:61, "+":62, "/":63};
  Graphics.STROKE_CAPS_MAP = ["butt", "round", "square"];
  Graphics.STROKE_JOINTS_MAP = ["miter", "round", "bevel"];
  var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas.getContext) {
    Graphics._ctx = canvas.getContext("2d");
    canvas.width = canvas.height = 1;
  }
  p.getInstructions = function() {
    this._updateInstructions();
    return this._instructions;
  };
  try {
    Object.defineProperties(p, {instructions:{get:p.getInstructions}});
  } catch (e) {
  }
  p.isEmpty = function() {
    return !(this._instructions.length || this._activeInstructions.length);
  };
  p.draw = function(ctx, data) {
    this._updateInstructions();
    var instr = this._instructions;
    for (var i = this._storeIndex, l = instr.length;i < l;i++) {
      instr[i].exec(ctx, data);
    }
  };
  p.drawAsPath = function(ctx) {
    this._updateInstructions();
    var instr, instrs = this._instructions;
    for (var i = this._storeIndex, l = instrs.length;i < l;i++) {
      if ((instr = instrs[i]).path !== false) {
        instr.exec(ctx);
      }
    }
  };
  p.moveTo = function(x, y) {
    return this.append(new G.MoveTo(x, y), true);
  };
  p.lineTo = function(x, y) {
    return this.append(new G.LineTo(x, y));
  };
  p.arcTo = function(x1, y1, x2, y2, radius) {
    return this.append(new G.ArcTo(x1, y1, x2, y2, radius));
  };
  p.arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
    return this.append(new G.Arc(x, y, radius, startAngle, endAngle, anticlockwise));
  };
  p.quadraticCurveTo = function(cpx, cpy, x, y) {
    return this.append(new G.QuadraticCurveTo(cpx, cpy, x, y));
  };
  p.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
    return this.append(new G.BezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y));
  };
  p.rect = function(x, y, w, h) {
    return this.append(new G.Rect(x, y, w, h));
  };
  p.closePath = function() {
    return this._activeInstructions.length ? this.append(new G.ClosePath) : this;
  };
  p.clear = function() {
    this._instructions.length = this._activeInstructions.length = this._commitIndex = 0;
    this._strokeStyle = this._oldStrokeStyle = this._stroke = this._fill = this._strokeDash = this._oldStrokeDash = null;
    this._dirty = this._strokeIgnoreScale = false;
    return this;
  };
  p.beginFill = function(color) {
    return this._setFill(color ? new G.Fill(color) : null);
  };
  p.beginLinearGradientFill = function(colors, ratios, x0, y0, x1, y1) {
    return this._setFill((new G.Fill).linearGradient(colors, ratios, x0, y0, x1, y1));
  };
  p.beginRadialGradientFill = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
    return this._setFill((new G.Fill).radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
  };
  p.beginBitmapFill = function(image, repetition, matrix) {
    return this._setFill((new G.Fill(null, matrix)).bitmap(image, repetition));
  };
  p.endFill = function() {
    return this.beginFill();
  };
  p.setStrokeStyle = function(thickness, caps, joints, miterLimit, ignoreScale) {
    this._updateInstructions(true);
    this._strokeStyle = this.command = new G.StrokeStyle(thickness, caps, joints, miterLimit, ignoreScale);
    if (this._stroke) {
      this._stroke.ignoreScale = ignoreScale;
    }
    this._strokeIgnoreScale = ignoreScale;
    return this;
  };
  p.setStrokeDash = function(segments, offset) {
    this._updateInstructions(true);
    this._strokeDash = this.command = new G.StrokeDash(segments, offset);
    return this;
  };
  p.beginStroke = function(color) {
    return this._setStroke(color ? new G.Stroke(color) : null);
  };
  p.beginLinearGradientStroke = function(colors, ratios, x0, y0, x1, y1) {
    return this._setStroke((new G.Stroke).linearGradient(colors, ratios, x0, y0, x1, y1));
  };
  p.beginRadialGradientStroke = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
    return this._setStroke((new G.Stroke).radialGradient(colors, ratios, x0, y0, r0, x1, y1, r1));
  };
  p.beginBitmapStroke = function(image, repetition) {
    return this._setStroke((new G.Stroke).bitmap(image, repetition));
  };
  p.endStroke = function() {
    return this.beginStroke();
  };
  p.curveTo = p.quadraticCurveTo;
  p.drawRect = p.rect;
  p.drawRoundRect = function(x, y, w, h, radius) {
    return this.drawRoundRectComplex(x, y, w, h, radius, radius, radius, radius);
  };
  p.drawRoundRectComplex = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
    return this.append(new G.RoundRect(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL));
  };
  p.drawCircle = function(x, y, radius) {
    return this.append(new G.Circle(x, y, radius));
  };
  p.drawEllipse = function(x, y, w, h) {
    return this.append(new G.Ellipse(x, y, w, h));
  };
  p.drawPolyStar = function(x, y, radius, sides, pointSize, angle) {
    return this.append(new G.PolyStar(x, y, radius, sides, pointSize, angle));
  };
  p.append = function(command, clean) {
    this._activeInstructions.push(command);
    this.command = command;
    if (!clean) {
      this._dirty = true;
    }
    return this;
  };
  p.decodePath = function(str) {
    var instructions = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo, this.closePath];
    var paramCount = [2, 2, 4, 6, 0];
    var i = 0, l = str.length;
    var params = [];
    var x = 0, y = 0;
    var base64 = Graphics.BASE_64;
    while (i < l) {
      var c = str.charAt(i);
      var n = base64[c];
      var fi = n >> 3;
      var f = instructions[fi];
      if (!f || n & 3) {
        throw "bad path data (@" + i + "): " + c;
      }
      var pl = paramCount[fi];
      if (!fi) {
        x = y = 0;
      }
      params.length = 0;
      i++;
      var charCount = (n >> 2 & 1) + 2;
      for (var p = 0;p < pl;p++) {
        var num = base64[str.charAt(i)];
        var sign = num >> 5 ? -1 : 1;
        num = (num & 31) << 6 | base64[str.charAt(i + 1)];
        if (charCount == 3) {
          num = num << 6 | base64[str.charAt(i + 2)];
        }
        num = sign * num / 10;
        if (p % 2) {
          x = num += x;
        } else {
          y = num += y;
        }
        params[p] = num;
        i += charCount;
      }
      f.apply(this, params);
    }
    return this;
  };
  p.store = function() {
    this._updateInstructions(true);
    this._storeIndex = this._instructions.length;
    return this;
  };
  p.unstore = function() {
    this._storeIndex = 0;
    return this;
  };
  p.clone = function() {
    var o = new Graphics;
    o.command = this.command;
    o._stroke = this._stroke;
    o._strokeStyle = this._strokeStyle;
    o._strokeDash = this._strokeDash;
    o._strokeIgnoreScale = this._strokeIgnoreScale;
    o._fill = this._fill;
    o._instructions = this._instructions.slice();
    o._commitIndex = this._commitIndex;
    o._activeInstructions = this._activeInstructions.slice();
    o._dirty = this._dirty;
    o._storeIndex = this._storeIndex;
    return o;
  };
  p.toString = function() {
    return "[Graphics]";
  };
  p.mt = p.moveTo;
  p.lt = p.lineTo;
  p.at = p.arcTo;
  p.bt = p.bezierCurveTo;
  p.qt = p.quadraticCurveTo;
  p.a = p.arc;
  p.r = p.rect;
  p.cp = p.closePath;
  p.c = p.clear;
  p.f = p.beginFill;
  p.lf = p.beginLinearGradientFill;
  p.rf = p.beginRadialGradientFill;
  p.bf = p.beginBitmapFill;
  p.ef = p.endFill;
  p.ss = p.setStrokeStyle;
  p.sd = p.setStrokeDash;
  p.s = p.beginStroke;
  p.ls = p.beginLinearGradientStroke;
  p.rs = p.beginRadialGradientStroke;
  p.bs = p.beginBitmapStroke;
  p.es = p.endStroke;
  p.dr = p.drawRect;
  p.rr = p.drawRoundRect;
  p.rc = p.drawRoundRectComplex;
  p.dc = p.drawCircle;
  p.de = p.drawEllipse;
  p.dp = p.drawPolyStar;
  p.p = p.decodePath;
  p._updateInstructions = function(commit) {
    var instr = this._instructions, active = this._activeInstructions, commitIndex = this._commitIndex;
    if (this._dirty && active.length) {
      instr.length = commitIndex;
      instr.push(Graphics.beginCmd);
      var l = active.length, ll = instr.length;
      instr.length = ll + l;
      for (var i = 0;i < l;i++) {
        instr[i + ll] = active[i];
      }
      if (this._fill) {
        instr.push(this._fill);
      }
      if (this._stroke) {
        if (this._strokeDash !== this._oldStrokeDash) {
          this._oldStrokeDash = this._strokeDash;
          instr.push(this._strokeDash);
        }
        if (this._strokeStyle !== this._oldStrokeStyle) {
          this._oldStrokeStyle = this._strokeStyle;
          instr.push(this._strokeStyle);
        }
        instr.push(this._stroke);
      }
      this._dirty = false;
    }
    if (commit) {
      active.length = 0;
      this._commitIndex = instr.length;
    }
  };
  p._setFill = function(fill) {
    this._updateInstructions(true);
    this.command = this._fill = fill;
    return this;
  };
  p._setStroke = function(stroke) {
    this._updateInstructions(true);
    if (this.command = this._stroke = stroke) {
      stroke.ignoreScale = this._strokeIgnoreScale;
    }
    return this;
  };
  (G.LineTo = function(x, y) {
    this.x = x;
    this.y = y;
  }).prototype.exec = function(ctx) {
    ctx.lineTo(this.x, this.y);
  };
  (G.MoveTo = function(x, y) {
    this.x = x;
    this.y = y;
  }).prototype.exec = function(ctx) {
    ctx.moveTo(this.x, this.y);
  };
  (G.ArcTo = function(x1, y1, x2, y2, radius) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.radius = radius;
  }).prototype.exec = function(ctx) {
    ctx.arcTo(this.x1, this.y1, this.x2, this.y2, this.radius);
  };
  (G.Arc = function(x, y, radius, startAngle, endAngle, anticlockwise) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.anticlockwise = !!anticlockwise;
  }).prototype.exec = function(ctx) {
    ctx.arc(this.x, this.y, this.radius, this.startAngle, this.endAngle, this.anticlockwise);
  };
  (G.QuadraticCurveTo = function(cpx, cpy, x, y) {
    this.cpx = cpx;
    this.cpy = cpy;
    this.x = x;
    this.y = y;
  }).prototype.exec = function(ctx) {
    ctx.quadraticCurveTo(this.cpx, this.cpy, this.x, this.y);
  };
  (G.BezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
    this.cp1x = cp1x;
    this.cp1y = cp1y;
    this.cp2x = cp2x;
    this.cp2y = cp2y;
    this.x = x;
    this.y = y;
  }).prototype.exec = function(ctx) {
    ctx.bezierCurveTo(this.cp1x, this.cp1y, this.cp2x, this.cp2y, this.x, this.y);
  };
  (G.Rect = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }).prototype.exec = function(ctx) {
    ctx.rect(this.x, this.y, this.w, this.h);
  };
  (G.ClosePath = function() {
  }).prototype.exec = function(ctx) {
    ctx.closePath();
  };
  (G.BeginPath = function() {
  }).prototype.exec = function(ctx) {
    ctx.beginPath();
  };
  p = (G.Fill = function(style, matrix) {
    this.style = style;
    this.matrix = matrix;
  }).prototype;
  p.exec = function(ctx) {
    if (!this.style) {
      return;
    }
    ctx.fillStyle = this.style;
    var mtx = this.matrix;
    if (mtx) {
      ctx.save();
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
    }
    ctx.fill();
    if (mtx) {
      ctx.restore();
    }
  };
  p.linearGradient = function(colors, ratios, x0, y0, x1, y1) {
    var o = this.style = Graphics._ctx.createLinearGradient(x0, y0, x1, y1);
    for (var i = 0, l = colors.length;i < l;i++) {
      o.addColorStop(ratios[i], colors[i]);
    }
    o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, x1:x1, y1:y1, type:"linear"};
    return this;
  };
  p.radialGradient = function(colors, ratios, x0, y0, r0, x1, y1, r1) {
    var o = this.style = Graphics._ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
    for (var i = 0, l = colors.length;i < l;i++) {
      o.addColorStop(ratios[i], colors[i]);
    }
    o.props = {colors:colors, ratios:ratios, x0:x0, y0:y0, r0:r0, x1:x1, y1:y1, r1:r1, type:"radial"};
    return this;
  };
  p.bitmap = function(image, repetition) {
    if (image.naturalWidth || image.getContext || image.readyState >= 2) {
      var o = this.style = Graphics._ctx.createPattern(image, repetition || "");
      o.props = {image:image, repetition:repetition, type:"bitmap"};
    }
    return this;
  };
  p.path = false;
  p = (G.Stroke = function(style, ignoreScale) {
    this.style = style;
    this.ignoreScale = ignoreScale;
  }).prototype;
  p.exec = function(ctx) {
    if (!this.style) {
      return;
    }
    ctx.strokeStyle = this.style;
    if (this.ignoreScale) {
      ctx.save();
      ctx.setTransform(1, 0, 0, 1, 0, 0);
    }
    ctx.stroke();
    if (this.ignoreScale) {
      ctx.restore();
    }
  };
  p.linearGradient = G.Fill.prototype.linearGradient;
  p.radialGradient = G.Fill.prototype.radialGradient;
  p.bitmap = G.Fill.prototype.bitmap;
  p.path = false;
  p = (G.StrokeStyle = function(width, caps, joints, miterLimit, ignoreScale) {
    this.width = width;
    this.caps = caps;
    this.joints = joints;
    this.miterLimit = miterLimit;
    this.ignoreScale = ignoreScale;
  }).prototype;
  p.exec = function(ctx) {
    ctx.lineWidth = this.width == null ? "1" : this.width;
    ctx.lineCap = this.caps == null ? "butt" : isNaN(this.caps) ? this.caps : Graphics.STROKE_CAPS_MAP[this.caps];
    ctx.lineJoin = this.joints == null ? "miter" : isNaN(this.joints) ? this.joints : Graphics.STROKE_JOINTS_MAP[this.joints];
    ctx.miterLimit = this.miterLimit == null ? "10" : this.miterLimit;
    ctx.ignoreScale = this.ignoreScale == null ? false : this.ignoreScale;
  };
  p.path = false;
  (G.StrokeDash = function(segments, offset) {
    this.segments = segments;
    this.offset = offset || 0;
  }).prototype.exec = function(ctx) {
    if (ctx.setLineDash) {
      ctx.setLineDash(this.segments || G.StrokeDash.EMPTY_SEGMENTS);
      ctx.lineDashOffset = this.offset || 0;
    }
  };
  G.StrokeDash.EMPTY_SEGMENTS = [];
  (G.RoundRect = function(x, y, w, h, radiusTL, radiusTR, radiusBR, radiusBL) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.radiusTL = radiusTL;
    this.radiusTR = radiusTR;
    this.radiusBR = radiusBR;
    this.radiusBL = radiusBL;
  }).prototype.exec = function(ctx) {
    var max = (w < h ? w : h) / 2;
    var mTL = 0, mTR = 0, mBR = 0, mBL = 0;
    var x = this.x, y = this.y, w = this.w, h = this.h;
    var rTL = this.radiusTL, rTR = this.radiusTR, rBR = this.radiusBR, rBL = this.radiusBL;
    if (rTL < 0) {
      rTL *= mTL = -1;
    }
    if (rTL > max) {
      rTL = max;
    }
    if (rTR < 0) {
      rTR *= mTR = -1;
    }
    if (rTR > max) {
      rTR = max;
    }
    if (rBR < 0) {
      rBR *= mBR = -1;
    }
    if (rBR > max) {
      rBR = max;
    }
    if (rBL < 0) {
      rBL *= mBL = -1;
    }
    if (rBL > max) {
      rBL = max;
    }
    ctx.moveTo(x + w - rTR, y);
    ctx.arcTo(x + w + rTR * mTR, y - rTR * mTR, x + w, y + rTR, rTR);
    ctx.lineTo(x + w, y + h - rBR);
    ctx.arcTo(x + w + rBR * mBR, y + h + rBR * mBR, x + w - rBR, y + h, rBR);
    ctx.lineTo(x + rBL, y + h);
    ctx.arcTo(x - rBL * mBL, y + h + rBL * mBL, x, y + h - rBL, rBL);
    ctx.lineTo(x, y + rTL);
    ctx.arcTo(x - rTL * mTL, y - rTL * mTL, x + rTL, y, rTL);
    ctx.closePath();
  };
  (G.Circle = function(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
  }).prototype.exec = function(ctx) {
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  };
  (G.Ellipse = function(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }).prototype.exec = function(ctx) {
    var x = this.x, y = this.y;
    var w = this.w, h = this.h;
    var k = .5522848;
    var ox = w / 2 * k;
    var oy = h / 2 * k;
    var xe = x + w;
    var ye = y + h;
    var xm = x + w / 2;
    var ym = y + h / 2;
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  };
  (G.PolyStar = function(x, y, radius, sides, pointSize, angle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.pointSize = pointSize;
    this.angle = angle;
  }).prototype.exec = function(ctx) {
    var x = this.x, y = this.y;
    var radius = this.radius;
    var angle = (this.angle || 0) / 180 * Math.PI;
    var sides = this.sides;
    var ps = 1 - (this.pointSize || 0);
    var a = Math.PI / sides;
    ctx.moveTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    for (var i = 0;i < sides;i++) {
      angle += a;
      if (ps != 1) {
        ctx.lineTo(x + Math.cos(angle) * radius * ps, y + Math.sin(angle) * radius * ps);
      }
      angle += a;
      ctx.lineTo(x + Math.cos(angle) * radius, y + Math.sin(angle) * radius);
    }
    ctx.closePath();
  };
  Graphics.beginCmd = new G.BeginPath;
  createjs.Graphics = Graphics;
})();
this.createjs = this.createjs || {};
(function() {
  function DisplayObject() {
    this.EventDispatcher_constructor();
    this.alpha = 1;
    this.cacheCanvas = null;
    this.cacheID = 0;
    this.id = createjs.UID.get();
    this.mouseEnabled = true;
    this.tickEnabled = true;
    this.name = null;
    this.parent = null;
    this.regX = 0;
    this.regY = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.skewX = 0;
    this.skewY = 0;
    this.shadow = null;
    this.visible = true;
    this.x = 0;
    this.y = 0;
    this.transformMatrix = null;
    this.compositeOperation = null;
    this.snapToPixel = true;
    this.filters = null;
    this.mask = null;
    this.hitArea = null;
    this.cursor = null;
    this._cacheOffsetX = 0;
    this._cacheOffsetY = 0;
    this._filterOffsetX = 0;
    this._filterOffsetY = 0;
    this._cacheScale = 1;
    this._cacheDataURLID = 0;
    this._cacheDataURL = null;
    this._props = new createjs.DisplayProps;
    this._rectangle = new createjs.Rectangle;
    this._bounds = null;
  }
  var p = createjs.extend(DisplayObject, createjs.EventDispatcher);
  DisplayObject._MOUSE_EVENTS = ["click", "dblclick", "mousedown", "mouseout", "mouseover", "pressmove", "pressup", "rollout", "rollover"];
  DisplayObject.suppressCrossDomainErrors = false;
  DisplayObject._snapToPixelEnabled = false;
  var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas.getContext) {
    DisplayObject._hitTestCanvas = canvas;
    DisplayObject._hitTestContext = canvas.getContext("2d");
    canvas.width = canvas.height = 1;
  }
  DisplayObject._nextCacheID = 1;
  p.getStage = function() {
    var o = this, _Stage = createjs["Stage"];
    while (o.parent) {
      o = o.parent;
    }
    if (o instanceof _Stage) {
      return o;
    }
    return null;
  };
  try {
    Object.defineProperties(p, {stage:{get:p.getStage}});
  } catch (e) {
  }
  p.isVisible = function() {
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
  };
  p.draw = function(ctx, ignoreCache) {
    var cacheCanvas = this.cacheCanvas;
    if (ignoreCache || !cacheCanvas) {
      return false;
    }
    var scale = this._cacheScale;
    ctx.drawImage(cacheCanvas, this._cacheOffsetX + this._filterOffsetX, this._cacheOffsetY + this._filterOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale);
    return true;
  };
  p.updateContext = function(ctx) {
    var o = this, mask = o.mask, mtx = o._props.matrix;
    if (mask && mask.graphics && !mask.graphics.isEmpty()) {
      mask.getMatrix(mtx);
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
      mask.graphics.drawAsPath(ctx);
      ctx.clip();
      mtx.invert();
      ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx, mtx.ty);
    }
    this.getMatrix(mtx);
    var tx = mtx.tx, ty = mtx.ty;
    if (DisplayObject._snapToPixelEnabled && o.snapToPixel) {
      tx = tx + (tx < 0 ? -.5 : .5) | 0;
      ty = ty + (ty < 0 ? -.5 : .5) | 0;
    }
    ctx.transform(mtx.a, mtx.b, mtx.c, mtx.d, tx, ty);
    ctx.globalAlpha *= o.alpha;
    if (o.compositeOperation) {
      ctx.globalCompositeOperation = o.compositeOperation;
    }
    if (o.shadow) {
      this._applyShadow(ctx, o.shadow);
    }
  };
  p.cache = function(x, y, width, height, scale) {
    scale = scale || 1;
    if (!this.cacheCanvas) {
      this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    }
    this._cacheWidth = width;
    this._cacheHeight = height;
    this._cacheOffsetX = x;
    this._cacheOffsetY = y;
    this._cacheScale = scale;
    this.updateCache();
  };
  p.updateCache = function(compositeOperation) {
    var cacheCanvas = this.cacheCanvas;
    if (!cacheCanvas) {
      throw "cache() must be called before updateCache()";
    }
    var scale = this._cacheScale, offX = this._cacheOffsetX * scale, offY = this._cacheOffsetY * scale;
    var w = this._cacheWidth, h = this._cacheHeight, ctx = cacheCanvas.getContext("2d");
    var fBounds = this._getFilterBounds();
    offX += this._filterOffsetX = fBounds.x;
    offY += this._filterOffsetY = fBounds.y;
    w = Math.ceil(w * scale) + fBounds.width;
    h = Math.ceil(h * scale) + fBounds.height;
    if (w != cacheCanvas.width || h != cacheCanvas.height) {
      cacheCanvas.width = w;
      cacheCanvas.height = h;
    } else {
      if (!compositeOperation) {
        ctx.clearRect(0, 0, w + 1, h + 1);
      }
    }
    ctx.save();
    ctx.globalCompositeOperation = compositeOperation;
    ctx.setTransform(scale, 0, 0, scale, -offX, -offY);
    this.draw(ctx, true);
    this._applyFilters();
    ctx.restore();
    this.cacheID = DisplayObject._nextCacheID++;
  };
  p.uncache = function() {
    this._cacheDataURL = this.cacheCanvas = null;
    this.cacheID = this._cacheOffsetX = this._cacheOffsetY = this._filterOffsetX = this._filterOffsetY = 0;
    this._cacheScale = 1;
  };
  p.getCacheDataURL = function() {
    if (!this.cacheCanvas) {
      return null;
    }
    if (this.cacheID != this._cacheDataURLID) {
      this._cacheDataURL = this.cacheCanvas.toDataURL();
    }
    return this._cacheDataURL;
  };
  p.localToGlobal = function(x, y, pt) {
    return this.getConcatenatedMatrix(this._props.matrix).transformPoint(x, y, pt || new createjs.Point);
  };
  p.globalToLocal = function(x, y, pt) {
    return this.getConcatenatedMatrix(this._props.matrix).invert().transformPoint(x, y, pt || new createjs.Point);
  };
  p.localToLocal = function(x, y, target, pt) {
    pt = this.localToGlobal(x, y, pt);
    return target.globalToLocal(pt.x, pt.y, pt);
  };
  p.setTransform = function(x, y, scaleX, scaleY, rotation, skewX, skewY, regX, regY) {
    this.x = x || 0;
    this.y = y || 0;
    this.scaleX = scaleX == null ? 1 : scaleX;
    this.scaleY = scaleY == null ? 1 : scaleY;
    this.rotation = rotation || 0;
    this.skewX = skewX || 0;
    this.skewY = skewY || 0;
    this.regX = regX || 0;
    this.regY = regY || 0;
    return this;
  };
  p.getMatrix = function(matrix) {
    var o = this, mtx = matrix && matrix.identity() || new createjs.Matrix2D;
    return o.transformMatrix ? mtx.copy(o.transformMatrix) : mtx.appendTransform(o.x, o.y, o.scaleX, o.scaleY, o.rotation, o.skewX, o.skewY, o.regX, o.regY);
  };
  p.getConcatenatedMatrix = function(matrix) {
    var o = this, mtx = this.getMatrix(matrix);
    while (o = o.parent) {
      mtx.prependMatrix(o.getMatrix(o._props.matrix));
    }
    return mtx;
  };
  p.getConcatenatedDisplayProps = function(props) {
    props = props ? props.identity() : new createjs.DisplayProps;
    var o = this, mtx = o.getMatrix(props.matrix);
    do {
      props.prepend(o.visible, o.alpha, o.shadow, o.compositeOperation);
      if (o != this) {
        mtx.prependMatrix(o.getMatrix(o._props.matrix));
      }
    } while (o = o.parent);
    return props;
  };
  p.hitTest = function(x, y) {
    var ctx = DisplayObject._hitTestContext;
    ctx.setTransform(1, 0, 0, 1, -x, -y);
    this.draw(ctx);
    var hit = this._testHit(ctx);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, 2, 2);
    return hit;
  };
  p.set = function(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  p.getBounds = function() {
    if (this._bounds) {
      return this._rectangle.copy(this._bounds);
    }
    var cacheCanvas = this.cacheCanvas;
    if (cacheCanvas) {
      var scale = this._cacheScale;
      return this._rectangle.setValues(this._cacheOffsetX, this._cacheOffsetY, cacheCanvas.width / scale, cacheCanvas.height / scale);
    }
    return null;
  };
  p.getTransformedBounds = function() {
    return this._getBounds();
  };
  p.setBounds = function(x, y, width, height) {
    if (x == null) {
      this._bounds = x;
    }
    this._bounds = (this._bounds || new createjs.Rectangle).setValues(x, y, width, height);
  };
  p.clone = function() {
    return this._cloneProps(new DisplayObject);
  };
  p.toString = function() {
    return "[DisplayObject (name=" + this.name + ")]";
  };
  p._cloneProps = function(o) {
    o.alpha = this.alpha;
    o.mouseEnabled = this.mouseEnabled;
    o.tickEnabled = this.tickEnabled;
    o.name = this.name;
    o.regX = this.regX;
    o.regY = this.regY;
    o.rotation = this.rotation;
    o.scaleX = this.scaleX;
    o.scaleY = this.scaleY;
    o.shadow = this.shadow;
    o.skewX = this.skewX;
    o.skewY = this.skewY;
    o.visible = this.visible;
    o.x = this.x;
    o.y = this.y;
    o.compositeOperation = this.compositeOperation;
    o.snapToPixel = this.snapToPixel;
    o.filters = this.filters == null ? null : this.filters.slice(0);
    o.mask = this.mask;
    o.hitArea = this.hitArea;
    o.cursor = this.cursor;
    o._bounds = this._bounds;
    return o;
  };
  p._applyShadow = function(ctx, shadow) {
    shadow = shadow || Shadow.identity;
    ctx.shadowColor = shadow.color;
    ctx.shadowOffsetX = shadow.offsetX;
    ctx.shadowOffsetY = shadow.offsetY;
    ctx.shadowBlur = shadow.blur;
  };
  p._tick = function(evtObj) {
    var ls = this._listeners;
    if (ls && ls["tick"]) {
      evtObj.target = null;
      evtObj.propagationStopped = evtObj.immediatePropagationStopped = false;
      this.dispatchEvent(evtObj);
    }
  };
  p._testHit = function(ctx) {
    try {
      var hit = ctx.getImageData(0, 0, 1, 1).data[3] > 1;
    } catch (e) {
      if (!DisplayObject.suppressCrossDomainErrors) {
        throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images.";
      }
    }
    return hit;
  };
  p._applyFilters = function() {
    if (!this.filters || this.filters.length == 0 || !this.cacheCanvas) {
      return;
    }
    var l = this.filters.length;
    var ctx = this.cacheCanvas.getContext("2d");
    var w = this.cacheCanvas.width;
    var h = this.cacheCanvas.height;
    for (var i = 0;i < l;i++) {
      this.filters[i].applyFilter(ctx, 0, 0, w, h);
    }
  };
  p._getFilterBounds = function(rect) {
    var l, filters = this.filters, bounds = this._rectangle.setValues(0, 0, 0, 0);
    if (!filters || !(l = filters.length)) {
      return bounds;
    }
    for (var i = 0;i < l;i++) {
      var f = this.filters[i];
      f.getBounds && f.getBounds(bounds);
    }
    return bounds;
  };
  p._getBounds = function(matrix, ignoreTransform) {
    return this._transformBounds(this.getBounds(), matrix, ignoreTransform);
  };
  p._transformBounds = function(bounds, matrix, ignoreTransform) {
    if (!bounds) {
      return bounds;
    }
    var x = bounds.x, y = bounds.y, width = bounds.width, height = bounds.height, mtx = this._props.matrix;
    mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
    if (x || y) {
      mtx.appendTransform(0, 0, 1, 1, 0, 0, 0, -x, -y);
    }
    if (matrix) {
      mtx.prependMatrix(matrix);
    }
    var x_a = width * mtx.a, x_b = width * mtx.b;
    var y_c = height * mtx.c, y_d = height * mtx.d;
    var tx = mtx.tx, ty = mtx.ty;
    var minX = tx, maxX = tx, minY = ty, maxY = ty;
    if ((x = x_a + tx) < minX) {
      minX = x;
    } else {
      if (x > maxX) {
        maxX = x;
      }
    }
    if ((x = x_a + y_c + tx) < minX) {
      minX = x;
    } else {
      if (x > maxX) {
        maxX = x;
      }
    }
    if ((x = y_c + tx) < minX) {
      minX = x;
    } else {
      if (x > maxX) {
        maxX = x;
      }
    }
    if ((y = x_b + ty) < minY) {
      minY = y;
    } else {
      if (y > maxY) {
        maxY = y;
      }
    }
    if ((y = x_b + y_d + ty) < minY) {
      minY = y;
    } else {
      if (y > maxY) {
        maxY = y;
      }
    }
    if ((y = y_d + ty) < minY) {
      minY = y;
    } else {
      if (y > maxY) {
        maxY = y;
      }
    }
    return bounds.setValues(minX, minY, maxX - minX, maxY - minY);
  };
  p._hasMouseEventListener = function() {
    var evts = DisplayObject._MOUSE_EVENTS;
    for (var i = 0, l = evts.length;i < l;i++) {
      if (this.hasEventListener(evts[i])) {
        return true;
      }
    }
    return !!this.cursor;
  };
  createjs.DisplayObject = createjs.promote(DisplayObject, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function Container() {
    this.DisplayObject_constructor();
    this.children = [];
    this.mouseChildren = true;
    this.tickChildren = true;
  }
  var p = createjs.extend(Container, createjs.DisplayObject);
  p.getNumChildren = function() {
    return this.children.length;
  };
  try {
    Object.defineProperties(p, {numChildren:{get:p.getNumChildren}});
  } catch (e) {
  }
  p.initialize = Container;
  p.isVisible = function() {
    var hasContent = this.cacheCanvas || this.children.length;
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache)) {
      return true;
    }
    var list = this.children.slice();
    for (var i = 0, l = list.length;i < l;i++) {
      var child = list[i];
      if (!child.isVisible()) {
        continue;
      }
      ctx.save();
      child.updateContext(ctx);
      child.draw(ctx);
      ctx.restore();
    }
    return true;
  };
  p.addChild = function(child) {
    if (child == null) {
      return child;
    }
    var l = arguments.length;
    if (l > 1) {
      for (var i = 0;i < l;i++) {
        this.addChild(arguments[i]);
      }
      return arguments[l - 1];
    }
    if (child.parent) {
      child.parent.removeChild(child);
    }
    child.parent = this;
    this.children.push(child);
    child.dispatchEvent("added");
    return child;
  };
  p.addChildAt = function(child, index) {
    var l = arguments.length;
    var indx = arguments[l - 1];
    if (indx < 0 || indx > this.children.length) {
      return arguments[l - 2];
    }
    if (l > 2) {
      for (var i = 0;i < l - 1;i++) {
        this.addChildAt(arguments[i], indx + i);
      }
      return arguments[l - 2];
    }
    if (child.parent) {
      child.parent.removeChild(child);
    }
    child.parent = this;
    this.children.splice(index, 0, child);
    child.dispatchEvent("added");
    return child;
  };
  p.removeChild = function(child) {
    var l = arguments.length;
    if (l > 1) {
      var good = true;
      for (var i = 0;i < l;i++) {
        good = good && this.removeChild(arguments[i]);
      }
      return good;
    }
    return this.removeChildAt(createjs.indexOf(this.children, child));
  };
  p.removeChildAt = function(index) {
    var l = arguments.length;
    if (l > 1) {
      var a = [];
      for (var i = 0;i < l;i++) {
        a[i] = arguments[i];
      }
      a.sort(function(a, b) {
        return b - a;
      });
      var good = true;
      for (var i = 0;i < l;i++) {
        good = good && this.removeChildAt(a[i]);
      }
      return good;
    }
    if (index < 0 || index > this.children.length - 1) {
      return false;
    }
    var child = this.children[index];
    if (child) {
      child.parent = null;
    }
    this.children.splice(index, 1);
    child.dispatchEvent("removed");
    return true;
  };
  p.removeAllChildren = function() {
    var kids = this.children;
    while (kids.length) {
      this.removeChildAt(0);
    }
  };
  p.getChildAt = function(index) {
    return this.children[index];
  };
  p.getChildByName = function(name) {
    var kids = this.children;
    for (var i = 0, l = kids.length;i < l;i++) {
      if (kids[i].name == name) {
        return kids[i];
      }
    }
    return null;
  };
  p.sortChildren = function(sortFunction) {
    this.children.sort(sortFunction);
  };
  p.getChildIndex = function(child) {
    return createjs.indexOf(this.children, child);
  };
  p.swapChildrenAt = function(index1, index2) {
    var kids = this.children;
    var o1 = kids[index1];
    var o2 = kids[index2];
    if (!o1 || !o2) {
      return;
    }
    kids[index1] = o2;
    kids[index2] = o1;
  };
  p.swapChildren = function(child1, child2) {
    var kids = this.children;
    var index1, index2;
    for (var i = 0, l = kids.length;i < l;i++) {
      if (kids[i] == child1) {
        index1 = i;
      }
      if (kids[i] == child2) {
        index2 = i;
      }
      if (index1 != null && index2 != null) {
        break;
      }
    }
    if (i == l) {
      return;
    }
    kids[index1] = child2;
    kids[index2] = child1;
  };
  p.setChildIndex = function(child, index) {
    var kids = this.children, l = kids.length;
    if (child.parent != this || index < 0 || index >= l) {
      return;
    }
    for (var i = 0;i < l;i++) {
      if (kids[i] == child) {
        break;
      }
    }
    if (i == l || i == index) {
      return;
    }
    kids.splice(i, 1);
    kids.splice(index, 0, child);
  };
  p.contains = function(child) {
    while (child) {
      if (child == this) {
        return true;
      }
      child = child.parent;
    }
    return false;
  };
  p.hitTest = function(x, y) {
    return this.getObjectUnderPoint(x, y) != null;
  };
  p.getObjectsUnderPoint = function(x, y, mode) {
    var arr = [];
    var pt = this.localToGlobal(x, y);
    this._getObjectsUnderPoint(pt.x, pt.y, arr, mode > 0, mode == 1);
    return arr;
  };
  p.getObjectUnderPoint = function(x, y, mode) {
    var pt = this.localToGlobal(x, y);
    return this._getObjectsUnderPoint(pt.x, pt.y, null, mode > 0, mode == 1);
  };
  p.getBounds = function() {
    return this._getBounds(null, true);
  };
  p.getTransformedBounds = function() {
    return this._getBounds();
  };
  p.clone = function(recursive) {
    var o = this._cloneProps(new Container);
    if (recursive) {
      this._cloneChildren(o);
    }
    return o;
  };
  p.toString = function() {
    return "[Container (name=" + this.name + ")]";
  };
  p._tick = function(evtObj) {
    if (this.tickChildren) {
      for (var i = this.children.length - 1;i >= 0;i--) {
        var child = this.children[i];
        if (child.tickEnabled && child._tick) {
          child._tick(evtObj);
        }
      }
    }
    this.DisplayObject__tick(evtObj);
  };
  p._cloneChildren = function(o) {
    if (o.children.length) {
      o.removeAllChildren();
    }
    var arr = o.children;
    for (var i = 0, l = this.children.length;i < l;i++) {
      var clone = this.children[i].clone(true);
      clone.parent = o;
      arr.push(clone);
    }
  };
  p._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth) {
    currentDepth = currentDepth || 0;
    if (!currentDepth && !this._testMask(this, x, y)) {
      return null;
    }
    var mtx, ctx = createjs.DisplayObject._hitTestContext;
    activeListener = activeListener || mouse && this._hasMouseEventListener();
    var children = this.children, l = children.length;
    var i, child, result;
    if (!isDesktopBrowser) {
      var bb, match;
      for (i = l - 1;i >= 0;i--) {
        child = children[i];
        if (!child.visible || !child.isVisible() || mouse && !child.mouseEnabled) {
          continue;
        }
        bb = child.bounding_box;
        if (bb) {
          if (child.isRoot) {
            match = child.x + bb.x <= x && x < child.x + bb.x + bb.width && (child.y + bb.y <= y && y < child.y + bb.y + bb.height);
          } else {
            match = (child.x + bb.x) * scaleFactor <= x && x < scaleFactor * (child.x + bb.x + bb.width) && ((child.y + bb.y) * scaleFactor <= y && y < scaleFactor * (child.y + bb.y + bb.height));
          }
          if (match) {
            if (arr) {
              arr.push(child);
              continue;
            } else {
              return mouse && !this.mouseChildren ? this : child;
            }
          }
        }
        if (child instanceof Container) {
          if (child.isRoot) {
            result = child._getObjectsUnderPoint(x - (child.x + child.regX), y - (child.y + child.regY), arr, mouse, activeListener, currentDepth + 1);
          } else {
            result = child._getObjectsUnderPoint(x - (child.x + child.regX) * scaleFactor, y - (child.y + child.regY) * scaleFactor, arr, mouse, activeListener, currentDepth + 1);
          }
          if (!arr && result) {
            return mouse && !this.mouseChildren ? this : result;
          }
        }
      }
      return null;
    }
    for (i = l - 1;i >= 0;i--) {
      child = children[i];
      var hitArea = child.hitArea;
      if (!child.visible || !hitArea && !child.isVisible() || mouse && !child.mouseEnabled) {
        continue;
      }
      if (!hitArea && !this._testMask(child, x, y)) {
        continue;
      }
      if (!hitArea && child instanceof Container) {
        result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth + 1);
        if (!arr && result) {
          return mouse && !this.mouseChildren ? this : result;
        }
      } else {
        if (mouse && !activeListener && !child._hasMouseEventListener()) {
          continue;
        }
        var props = child.getConcatenatedDisplayProps(child._props);
        mtx = props.matrix;
        if (hitArea) {
          mtx.appendMatrix(hitArea.getMatrix(hitArea._props.matrix));
          props.alpha = hitArea.alpha;
        }
        if (child.isOnlyBoundsCheck) {
          var bb = child.bounding_box;
          if (bb) {
            if ((x - mtx.tx) / scaleFactor >= bb.x && (x - mtx.tx) / scaleFactor <= bb.x + bb.width && ((y - mtx.ty) / scaleFactor >= bb.y && (y - mtx.ty) / scaleFactor <= bb.y + bb.height)) {
            } else {
              continue;
            }
          }
        } else {
          ctx.globalAlpha = props.alpha;
          ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
          (hitArea || child).draw(ctx);
          if (!this._testHit(ctx)) {
            continue;
          }
          ctx.setTransform(1, 0, 0, 1, 0, 0);
          ctx.clearRect(0, 0, 2, 2);
        }
        if (arr) {
          arr.push(child);
        } else {
          return mouse && !this.mouseChildren ? this : child;
        }
      }
    }
    return null;
  };
  p._testMask = function(target, x, y) {
    var mask = target.mask;
    if (!mask || !mask.graphics || mask.graphics.isEmpty()) {
      return true;
    }
    var mtx = this._props.matrix, parent = target.parent;
    mtx = parent ? parent.getConcatenatedMatrix(mtx) : mtx.identity();
    mtx = mask.getMatrix(mask._props.matrix).prependMatrix(mtx);
    var ctx = createjs.DisplayObject._hitTestContext;
    ctx.setTransform(mtx.a, mtx.b, mtx.c, mtx.d, mtx.tx - x, mtx.ty - y);
    mask.graphics.drawAsPath(ctx);
    ctx.fillStyle = "#000";
    ctx.fill();
    if (!this._testHit(ctx)) {
      return false;
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, 2, 2);
    return true;
  };
  p._getBounds = function(matrix, ignoreTransform) {
    var bounds = this.DisplayObject_getBounds();
    if (bounds) {
      return this._transformBounds(bounds, matrix, ignoreTransform);
    }
    var mtx = this._props.matrix;
    mtx = ignoreTransform ? mtx.identity() : this.getMatrix(mtx);
    if (matrix) {
      mtx.prependMatrix(matrix);
    }
    var l = this.children.length, rect = null;
    for (var i = 0;i < l;i++) {
      var child = this.children[i];
      if (!child.visible || !(bounds = child._getBounds(mtx))) {
        continue;
      }
      if (rect) {
        rect.extend(bounds.x, bounds.y, bounds.width, bounds.height);
      } else {
        rect = bounds.clone();
      }
    }
    return rect;
  };
  createjs.Container = createjs.promote(Container, "DisplayObject");
})();
this.createjs = this.createjs || {};
(function() {
  function Stage(canvas) {
    this.Container_constructor();
    this.autoClear = true;
    this.canvas = typeof canvas == "string" ? document.getElementById(canvas) : canvas;
    this.mouseX = 0;
    this.mouseY = 0;
    this.drawRect = null;
    this.snapToPixelEnabled = false;
    this.mouseInBounds = false;
    this.tickOnUpdate = true;
    this.mouseMoveOutside = false;
    this.preventSelection = true;
    this._pointerData = {};
    this._pointerCount = 0;
    this._primaryPointerID = null;
    this._mouseOverIntervalID = null;
    this._nextStage = null;
    this._prevStage = null;
    this.enableDOMEvents(true);
  }
  var p = createjs.extend(Stage, createjs.Container);
  p._get_nextStage = function() {
    return this._nextStage;
  };
  p._set_nextStage = function(value) {
    if (this._nextStage) {
      this._nextStage._prevStage = null;
    }
    if (value) {
      value._prevStage = this;
    }
    this._nextStage = value;
  };
  try {
    Object.defineProperties(p, {nextStage:{get:p._get_nextStage, set:p._set_nextStage}});
  } catch (e) {
  }
  p.update = function(props) {
    if (!this.canvas) {
      return;
    }
    if (this.tickOnUpdate) {
      this.tick(props);
    }
    if (this.dispatchEvent("drawstart", false, true) === false) {
      return;
    }
    createjs.DisplayObject._snapToPixelEnabled = this.snapToPixelEnabled;
    var r = this.drawRect, ctx = this.canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (this.autoClear) {
      if (r) {
        ctx.clearRect(r.x, r.y, r.width, r.height);
      } else {
        ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
      }
    }
    ctx.save();
    if (this.drawRect) {
      ctx.beginPath();
      ctx.rect(r.x, r.y, r.width, r.height);
      ctx.clip();
    }
    this.updateContext(ctx);
    this.draw(ctx, false);
    ctx.restore();
    this.dispatchEvent("drawend");
  };
  p.tick = function(props) {
    if (!this.tickEnabled || this.dispatchEvent("tickstart", false, true) === false) {
      return;
    }
    var evtObj = new createjs.Event("tick");
    if (props) {
      for (var n in props) {
        if (props.hasOwnProperty(n)) {
          evtObj[n] = props[n];
        }
      }
    }
    this._tick(evtObj);
    this.dispatchEvent("tickend");
  };
  p.handleEvent = function(evt) {
    if (evt.type == "tick") {
      this.update(evt);
    }
  };
  p.clear = function() {
    if (!this.canvas) {
      return;
    }
    var ctx = this.canvas.getContext("2d");
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, this.canvas.width + 1, this.canvas.height + 1);
  };
  p.toDataURL = function(backgroundColor, mimeType) {
    var data, ctx = this.canvas.getContext("2d"), w = this.canvas.width, h = this.canvas.height;
    if (backgroundColor) {
      data = ctx.getImageData(0, 0, w, h);
      var compositeOperation = ctx.globalCompositeOperation;
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = backgroundColor;
      ctx.fillRect(0, 0, w, h);
    }
    var dataURL = this.canvas.toDataURL(mimeType || "image/png");
    if (backgroundColor) {
      ctx.putImageData(data, 0, 0);
      ctx.globalCompositeOperation = compositeOperation;
    }
    return dataURL;
  };
  p.enableMouseOver = function(frequency) {
    if (this._mouseOverIntervalID) {
      clearInterval(this._mouseOverIntervalID);
      this._mouseOverIntervalID = null;
      if (frequency == 0) {
        this._testMouseOver(true);
      }
    }
    if (frequency == null) {
      frequency = 20;
    } else {
      if (frequency <= 0) {
        return;
      }
    }
    var o = this;
    this._mouseOverIntervalID = setInterval(function() {
      o._testMouseOver();
    }, 1E3 / Math.min(50, frequency));
  };
  p.enableDOMEvents = function(enable) {
    if (enable == null) {
      enable = true;
    }
    var n, o, ls = this._eventListeners;
    if (!enable && ls) {
      for (n in ls) {
        o = ls[n];
        o.t.removeEventListener(n, o.f, false);
      }
      this._eventListeners = null;
    } else {
      if (enable && !ls && this.canvas) {
        var t = window.addEventListener ? window : document;
        var _this = this;
        ls = this._eventListeners = {};
        ls["mouseup"] = {t:t, f:function(e) {
          _this._handleMouseUp(e);
        }};
        ls["mousemove"] = {t:t, f:function(e) {
          _this._handleMouseMove(e);
        }};
        ls["dblclick"] = {t:this.canvas, f:function(e) {
          _this._handleDoubleClick(e);
        }};
        ls["mousedown"] = {t:this.canvas, f:function(e) {
          _this._handleMouseDown(e);
        }};
        for (n in ls) {
          o = ls[n];
          o.t.addEventListener(n, o.f, false);
        }
      }
    }
  };
  p.clone = function() {
    throw "Stage cannot be cloned.";
  };
  p.toString = function() {
    return "[Stage (name=" + this.name + ")]";
  };
  p._getElementRect = function(e) {
    var bounds;
    try {
      bounds = e.getBoundingClientRect();
    } catch (err) {
      bounds = {top:e.offsetTop, left:e.offsetLeft, width:e.offsetWidth, height:e.offsetHeight};
    }
    var offX = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0);
    var offY = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0);
    var styles = window.getComputedStyle ? getComputedStyle(e, null) : e.currentStyle;
    var padL = parseInt(styles.paddingLeft) + parseInt(styles.borderLeftWidth);
    var padT = parseInt(styles.paddingTop) + parseInt(styles.borderTopWidth);
    var padR = parseInt(styles.paddingRight) + parseInt(styles.borderRightWidth);
    var padB = parseInt(styles.paddingBottom) + parseInt(styles.borderBottomWidth);
    return {left:bounds.left + offX + padL, right:bounds.right + offX - padR, top:bounds.top + offY + padT, bottom:bounds.bottom + offY - padB};
  };
  p._getPointerData = function(id) {
    var data = this._pointerData[id];
    if (!data) {
      data = this._pointerData[id] = {x:0, y:0};
    }
    return data;
  };
  p._handleMouseMove = function(e) {
    if (!e) {
      e = window.event;
    }
    this._handlePointerMove(-1, e, e.pageX, e.pageY);
  };
  p._handlePointerMove = function(id, e, pageX, pageY, owner) {
    if (this._prevStage && owner === undefined) {
      return;
    }
    if (!this.canvas) {
      return;
    }
    var nextStage = this._nextStage, o = this._getPointerData(id);
    var inBounds = o.inBounds;
    this._updatePointerPosition(id, e, pageX, pageY);
    if (inBounds || o.inBounds || this.mouseMoveOutside) {
      if (id === -1 && o.inBounds == !inBounds) {
        this._dispatchMouseEvent(this, inBounds ? "mouseleave" : "mouseenter", false, id, o, e);
      }
      this._dispatchMouseEvent(this, "stagemousemove", false, id, o, e);
      this._dispatchMouseEvent(o.target, "pressmove", true, id, o, e);
    }
    nextStage && nextStage._handlePointerMove(id, e, pageX, pageY, null);
  };
  p._updatePointerPosition = function(id, e, pageX, pageY) {
    var rect = this._getElementRect(this.canvas);
    pageX -= rect.left;
    pageY -= rect.top;
    var w = this.canvas.width;
    var h = this.canvas.height;
    pageX /= (rect.right - rect.left) / w;
    pageY /= (rect.bottom - rect.top) / h;
    var o = this._getPointerData(id);
    if (o.inBounds = pageX >= 0 && pageY >= 0 && pageX <= w - 1 && pageY <= h - 1) {
      o.x = pageX;
      o.y = pageY;
    } else {
      if (this.mouseMoveOutside) {
        o.x = pageX < 0 ? 0 : pageX > w - 1 ? w - 1 : pageX;
        o.y = pageY < 0 ? 0 : pageY > h - 1 ? h - 1 : pageY;
      }
    }
    o.posEvtObj = e;
    o.rawX = pageX;
    o.rawY = pageY;
    if (id === this._primaryPointerID || id === -1) {
      this.mouseX = o.x;
      this.mouseY = o.y;
      this.mouseInBounds = o.inBounds;
    }
  };
  p._handleMouseUp = function(e) {
    this._handlePointerUp(-1, e, false);
  };
  p._handlePointerUp = function(id, e, clear, owner) {
    var nextStage = this._nextStage, o = this._getPointerData(id);
    if (this._prevStage && owner === undefined) {
      return;
    }
    var target = null, oTarget = o.target;
    if (!owner && (oTarget || nextStage)) {
      target = this._getObjectsUnderPoint(o.x, o.y, null, true);
    }
    if (o.down) {
      this._dispatchMouseEvent(this, "stagemouseup", false, id, o, e, target);
      o.down = false;
    }
    if (target == oTarget) {
      this._dispatchMouseEvent(oTarget, "click", true, id, o, e);
    }
    this._dispatchMouseEvent(oTarget, "pressup", true, id, o, e);
    if (clear) {
      if (id == this._primaryPointerID) {
        this._primaryPointerID = null;
      }
      delete this._pointerData[id];
    } else {
      o.target = null;
    }
    nextStage && nextStage._handlePointerUp(id, e, clear, owner || target && this);
  };
  p._handleMouseDown = function(e) {
    this._handlePointerDown(-1, e, e.pageX, e.pageY);
  };
  p._handlePointerDown = function(id, e, pageX, pageY, owner) {
    if (this.preventSelection) {
      e.preventDefault();
    }
    if (this._primaryPointerID == null || id === -1) {
      this._primaryPointerID = id;
    }
    if (pageY != null) {
      this._updatePointerPosition(id, e, pageX, pageY);
    }
    var target = null, nextStage = this._nextStage, o = this._getPointerData(id);
    if (!owner) {
      target = o.target = this._getObjectsUnderPoint(o.x, o.y, null, true);
    }
    if (o.inBounds) {
      this._dispatchMouseEvent(this, "stagemousedown", false, id, o, e, target);
      o.down = true;
    }
    this._dispatchMouseEvent(target, "mousedown", true, id, o, e);
    nextStage && nextStage._handlePointerDown(id, e, pageX, pageY, owner || target && this);
  };
  p._testMouseOver = function(clear, owner, eventTarget) {
    if (this._prevStage && owner === undefined) {
      return;
    }
    var nextStage = this._nextStage;
    if (!this._mouseOverIntervalID) {
      nextStage && nextStage._testMouseOver(clear, owner, eventTarget);
      return;
    }
    var o = this._getPointerData(-1);
    if (!o || !clear && this.mouseX == this._mouseOverX && this.mouseY == this._mouseOverY && this.mouseInBounds) {
      return;
    }
    var e = o.posEvtObj;
    var isEventTarget = eventTarget || e && e.target == this.canvas;
    var target = null, common = -1, cursor = "", t, i, l;
    if (!owner && (clear || this.mouseInBounds && isEventTarget)) {
      target = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, true);
      this._mouseOverX = this.mouseX;
      this._mouseOverY = this.mouseY;
    }
    var oldList = this._mouseOverTarget || [];
    var oldTarget = oldList[oldList.length - 1];
    var list = this._mouseOverTarget = [];
    t = target;
    while (t) {
      list.unshift(t);
      if (!cursor) {
        cursor = t.cursor;
      }
      t = t.parent;
    }
    this.canvas.style.cursor = cursor;
    if (!owner && eventTarget) {
      eventTarget.canvas.style.cursor = cursor;
    }
    for (i = 0, l = list.length;i < l;i++) {
      if (list[i] != oldList[i]) {
        break;
      }
      common = i;
    }
    if (oldTarget != target) {
      this._dispatchMouseEvent(oldTarget, "mouseout", true, -1, o, e, target);
    }
    for (i = oldList.length - 1;i > common;i--) {
      this._dispatchMouseEvent(oldList[i], "rollout", false, -1, o, e, target);
    }
    for (i = list.length - 1;i > common;i--) {
      this._dispatchMouseEvent(list[i], "rollover", false, -1, o, e, oldTarget);
    }
    if (oldTarget != target) {
      this._dispatchMouseEvent(target, "mouseover", true, -1, o, e, oldTarget);
    }
    nextStage && nextStage._testMouseOver(clear, owner || target && this, eventTarget || isEventTarget && this);
  };
  p._handleDoubleClick = function(e, owner) {
    var target = null, nextStage = this._nextStage, o = this._getPointerData(-1);
    if (!owner) {
      target = this._getObjectsUnderPoint(o.x, o.y, null, true);
      this._dispatchMouseEvent(target, "dblclick", true, -1, o, e);
    }
    nextStage && nextStage._handleDoubleClick(e, owner || target && this);
  };
  p._dispatchMouseEvent = function(target, type, bubbles, pointerId, o, nativeEvent, relatedTarget) {
    if (!target || !bubbles && !target.hasEventListener(type)) {
      return;
    }
    var evt = new createjs.MouseEvent(type, bubbles, false, o.x, o.y, nativeEvent, pointerId, pointerId === this._primaryPointerID || pointerId === -1, o.rawX, o.rawY, relatedTarget);
    target.dispatchEvent(evt);
  };
  createjs.Stage = createjs.promote(Stage, "Container");
})();
this.createjs = this.createjs || {};
(function() {
  function Bitmap(imageOrUri) {
    this.DisplayObject_constructor();
    if (typeof imageOrUri == "string") {
      this.image = document.createElement("img");
      this.image.src = imageOrUri;
    } else {
      this.image = imageOrUri;
    }
    this.sourceRect = null;
  }
  var p = createjs.extend(Bitmap, createjs.DisplayObject);
  p.initialize = Bitmap;
  p.isVisible = function() {
    var image = this.image;
    var hasContent = this.cacheCanvas || image && (image.naturalWidth || image.getContext || image.readyState >= 2);
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache) || !this.image) {
      return true;
    }
    var img = this.image, rect = this.sourceRect;
    if (rect) {
      var x1 = rect.x, y1 = rect.y, x2 = x1 + rect.width, y2 = y1 + rect.height, x = 0, y = 0, w = img.width, h = img.height;
      if (x1 < 0) {
        x -= x1;
        x1 = 0;
      }
      if (x2 > w) {
        x2 = w;
      }
      if (y1 < 0) {
        y -= y1;
        y1 = 0;
      }
      if (y2 > h) {
        y2 = h;
      }
      ctx.drawImage(img, x1, y1, x2 - x1, y2 - y1, x, y, x2 - x1, y2 - y1);
    } else {
      ctx.drawImage(img, 0, 0);
    }
    return true;
  };
  p.getBounds = function() {
    var rect = this.DisplayObject_getBounds();
    if (rect) {
      return rect;
    }
    var image = this.image, o = this.sourceRect || image;
    var hasContent = image && (image.naturalWidth || image.getContext || image.readyState >= 2);
    return hasContent ? this._rectangle.setValues(0, 0, o.width, o.height) : null;
  };
  p.clone = function() {
    var o = new Bitmap(this.image);
    if (this.sourceRect) {
      o.sourceRect = this.sourceRect.clone();
    }
    this._cloneProps(o);
    return o;
  };
  p.toString = function() {
    return "[Bitmap (name=" + this.name + ")]";
  };
  createjs.Bitmap = createjs.promote(Bitmap, "DisplayObject");
})();
this.createjs = this.createjs || {};
(function() {
  function Sprite(spriteSheet, frameOrAnimation) {
    this.DisplayObject_constructor();
    this.currentFrame = 0;
    this.currentAnimation = null;
    this.paused = true;
    this.spriteSheet = spriteSheet;
    this.currentAnimationFrame = 0;
    this.framerate = 0;
    this._animation = null;
    this._currentFrame = null;
    this._skipAdvance = false;
    if (frameOrAnimation != null) {
      this.gotoAndPlay(frameOrAnimation);
    }
  }
  var p = createjs.extend(Sprite, createjs.DisplayObject);
  p.initialize = Sprite;
  p.isVisible = function() {
    var hasContent = this.cacheCanvas || this.spriteSheet.complete;
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  p.rectMask = null;
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache)) {
      return true;
    }
    this._normalizeFrame();
    var o = this.spriteSheet.getFrame(this._currentFrame | 0);
    if (!o) {
      return false;
    }
    var rect = o.rect;
    if (rect.width && rect.height) {
      if (this.rectMask) {
        ctx.drawImage(o.image, rect.x + this.rectMask.x, rect.y + this.rectMask.y, rect.width + this.rectMask.width, rect.height + this.rectMask.height, -o.regX + this.rectMask.x, -o.regY + this.rectMask.y, rect.width + this.rectMask.width, rect.height + this.rectMask.height);
      } else {
        ctx.drawImage(o.image, rect.x, rect.y, rect.width, rect.height, -o.regX, -o.regY, rect.width, rect.height);
      }
    }
    return true;
  };
  p.play = function() {
    this.paused = false;
  };
  p.stop = function() {
    this.paused = true;
  };
  p.gotoAndPlay = function(frameOrAnimation) {
    this.paused = false;
    this._skipAdvance = true;
    this._goto(frameOrAnimation);
  };
  p.gotoAndStop = function(frameOrAnimation) {
    this.paused = true;
    this._goto(frameOrAnimation);
  };
  p.advance = function(time) {
    var fps = this.framerate || this.spriteSheet.framerate;
    var t = fps && time != null ? time / (1E3 / fps) : 1;
    this._normalizeFrame(t);
  };
  p.getBounds = function() {
    return this.DisplayObject_getBounds() || this.spriteSheet.getFrameBounds(this.currentFrame, this._rectangle);
  };
  p.clone = function() {
    return this._cloneProps(new Sprite(this.spriteSheet));
  };
  p.toString = function() {
    return "[Sprite (name=" + this.name + ")]";
  };
  p._cloneProps = function(o) {
    this.DisplayObject__cloneProps(o);
    o.currentFrame = this.currentFrame;
    o.currentAnimation = this.currentAnimation;
    o.paused = this.paused;
    o.currentAnimationFrame = this.currentAnimationFrame;
    o.framerate = this.framerate;
    o._animation = this._animation;
    o._currentFrame = this._currentFrame;
    o._skipAdvance = this._skipAdvance;
    return o;
  };
  p._tick = function(evtObj) {
    if (!this.paused) {
      if (!this._skipAdvance) {
        this.advance(evtObj && evtObj.delta);
      }
      this._skipAdvance = false;
    }
    this.DisplayObject__tick(evtObj);
  };
  p._normalizeFrame = function(frameDelta) {
    frameDelta = frameDelta || 0;
    var animation = this._animation;
    var paused = this.paused;
    var frame = this._currentFrame;
    var l;
    if (animation) {
      var speed = animation.speed || 1;
      var animFrame = this.currentAnimationFrame;
      l = animation.frames.length;
      if (animFrame + frameDelta * speed >= l) {
        var next = animation.next;
        if (this._dispatchAnimationEnd(animation, frame, paused, next, l - 1)) {
          return;
        } else {
          if (next) {
            return this._goto(next, frameDelta - (l - animFrame) / speed);
          } else {
            this.paused = true;
            animFrame = animation.frames.length - 1;
          }
        }
      } else {
        animFrame += frameDelta * speed;
      }
      this.currentAnimationFrame = animFrame;
      this._currentFrame = animation.frames[animFrame | 0];
    } else {
      frame = this._currentFrame += frameDelta;
      l = this.spriteSheet.getNumFrames();
      if (frame >= l && l > 0) {
        if (!this._dispatchAnimationEnd(animation, frame, paused, l - 1)) {
          if ((this._currentFrame -= l) >= l) {
            return this._normalizeFrame();
          }
        }
      }
    }
    frame = this._currentFrame | 0;
    if (this.currentFrame != frame) {
      this.currentFrame = frame;
      this.dispatchEvent("change");
    }
  };
  p._dispatchAnimationEnd = function(animation, frame, paused, next, end) {
    var name = animation ? animation.name : null;
    if (this.hasEventListener("animationend")) {
      var evt = new createjs.Event("animationend");
      evt.name = name;
      evt.next = next;
      this.dispatchEvent(evt);
    }
    var changed = this._animation != animation || this._currentFrame != frame;
    if (!changed && !paused && this.paused) {
      this.currentAnimationFrame = end;
      changed = true;
    }
    return changed;
  };
  p._goto = function(frameOrAnimation, frame) {
    this.currentAnimationFrame = 0;
    if (isNaN(frameOrAnimation)) {
      var data = this.spriteSheet.getAnimation(frameOrAnimation);
      if (data) {
        this._animation = data;
        this.currentAnimation = frameOrAnimation;
        this._normalizeFrame(frame);
      }
    } else {
      this.currentAnimation = this._animation = null;
      this._currentFrame = frameOrAnimation;
      this._normalizeFrame();
    }
  };
  createjs.Sprite = createjs.promote(Sprite, "DisplayObject");
})();
this.createjs = this.createjs || {};
(function() {
  function Shape(graphics) {
    this.DisplayObject_constructor();
    this.graphics = graphics ? graphics : new createjs.Graphics;
  }
  var p = createjs.extend(Shape, createjs.DisplayObject);
  p.isVisible = function() {
    var hasContent = this.cacheCanvas || this.graphics && !this.graphics.isEmpty();
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache)) {
      return true;
    }
    this.graphics.draw(ctx, this);
    return true;
  };
  p.clone = function(recursive) {
    var g = recursive && this.graphics ? this.graphics.clone() : this.graphics;
    return this._cloneProps(new Shape(g));
  };
  p.toString = function() {
    return "[Shape (name=" + this.name + ")]";
  };
  createjs.Shape = createjs.promote(Shape, "DisplayObject");
})();
this.createjs = this.createjs || {};
(function() {
  function Text(text, font, color) {
    this.DisplayObject_constructor();
    this.text = text;
    this.font = font;
    this.color = color;
    this.textAlign = "left";
    this.textBaseline = "top";
    this.maxWidth = null;
    this.outline = 0;
    this.shadowColor = null;
    this.shadowOffsetX = 0;
    this.shadowOffsetY = 0;
    this.shadowBlur = 0;
    this.additionalOutline = null;
    this.outlineColor = "#fff";
    this.lineHeight = 0;
    this.lineWidth = null;
  }
  var p = createjs.extend(Text, createjs.DisplayObject);
  var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas.getContext) {
    Text._workingContext = canvas.getContext("2d");
    canvas.width = canvas.height = 1;
  }
  Text.H_OFFSETS = {start:0, left:0, center:-.5, end:-1, right:-1};
  Text.V_OFFSETS = {top:0, hanging:-.01, middle:-.4, alphabetic:-.8, ideographic:-.85, bottom:-1};
  p.isVisible = function() {
    var hasContent = this.cacheCanvas || this.text != null && this.text !== "";
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0 && hasContent);
  };
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache)) {
      return true;
    }
    var col = this.color || "#000";
    if (this.outline) {
      ctx.strokeStyle = col;
      ctx.lineWidth = this.outline * 1;
    } else {
      ctx.fillStyle = col;
    }
    this._drawText(this._prepContext(ctx));
    return true;
  };
  p.getMeasuredWidth = function() {
    return this._getMeasuredWidth(this.text);
  };
  p.getMeasuredLineHeight = function() {
    return this._getMeasuredWidth("M") * 1.2;
  };
  p.getMeasuredHeight = function() {
    return this._drawText(null, {}).height;
  };
  p.getBounds = function() {
    var rect = this.DisplayObject_getBounds();
    if (rect) {
      return rect;
    }
    if (this.text == null || this.text === "") {
      return null;
    }
    var o = this._drawText(null, {});
    var w = this.maxWidth && this.maxWidth < o.width ? this.maxWidth : o.width;
    var x = w * Text.H_OFFSETS[this.textAlign || "left"];
    var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    var y = lineHeight * Text.V_OFFSETS[this.textBaseline || "top"];
    return this._rectangle.setValues(x, y, w, o.height);
  };
  p.getMetrics = function() {
    var o = {lines:[]};
    o.lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    o.vOffset = o.lineHeight * Text.V_OFFSETS[this.textBaseline || "top"];
    return this._drawText(null, o, o.lines);
  };
  p.clone = function() {
    return this._cloneProps(new Text(this.text, this.font, this.color));
  };
  p.toString = function() {
    return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]";
  };
  p._cloneProps = function(o) {
    this.DisplayObject__cloneProps(o);
    o.textAlign = this.textAlign;
    o.textBaseline = this.textBaseline;
    o.maxWidth = this.maxWidth;
    o.outline = this.outline;
    o.lineHeight = this.lineHeight;
    o.lineWidth = this.lineWidth;
    return o;
  };
  p._prepContext = function(ctx) {
    ctx.font = this.font || "10px sans-serif";
    ctx.textAlign = this.textAlign || "left";
    ctx.textBaseline = this.textBaseline || "top";
    return ctx;
  };
  p._drawText = function(ctx, o, lines) {
    var paint = !!ctx;
    if (!paint) {
      ctx = Text._workingContext;
      ctx.save();
      this._prepContext(ctx);
    }
    var lineHeight = this.lineHeight || this.getMeasuredLineHeight();
    var maxW = 0, count = 0;
    var hardLines = String(this.text).split(/(?:\r\n|\r|\n)/);
    for (var i = 0, l = hardLines.length;i < l;i++) {
      var str = hardLines[i];
      var w = null;
      if (this.lineWidth != null && (w = ctx.measureText(str).width) > this.lineWidth) {
        var words = str.split(/(\s)/);
        str = words[0];
        w = ctx.measureText(str).width;
        for (var j = 1, jl = words.length;j < jl;j += 2) {
          var wordW = ctx.measureText(words[j] + words[j + 1]).width;
          if (w + wordW > this.lineWidth) {
            if (paint) {
              this._drawTextLine(ctx, str, count * lineHeight);
            }
            if (lines) {
              lines.push(str);
            }
            if (w > maxW) {
              maxW = w;
            }
            str = words[j + 1];
            w = ctx.measureText(str).width;
            count++;
          } else {
            str += words[j] + words[j + 1];
            w += wordW;
          }
        }
      }
      if (paint) {
        this._drawTextLine(ctx, str, count * lineHeight);
      }
      if (lines) {
        lines.push(str);
      }
      if (o && w == null) {
        w = ctx.measureText(str).width;
      }
      if (w > maxW) {
        maxW = w;
      }
      count++;
    }
    if (o) {
      o.width = maxW;
      o.height = count * lineHeight;
    }
    if (!paint) {
      ctx.restore();
    }
    return o;
  };
  p._drawTextLine = function(ctx, text, y) {
    if (this.outline) {
      ctx.strokeText(text, 0, y, this.maxWidth || 65535);
    } else {
      if (this.shadowColor) {
        ctx.shadowColor = this.shadowColor;
        ctx.shadowOffsetX = this.shadowOffsetX;
        ctx.shadowOffsetY = this.shadowOffsetY;
        if (this.shadowBlur) {
          ctx.shadowBlur = this.shadowBlur;
        }
      }
      if (this.additionalOutline) {
        ctx.strokeStyle = this.outlineColor;
        ctx.lineWidth = this.additionalOutline;
        ctx.lineJoin = "round";
        ctx.strokeText(text, 0, y, this.maxWidth || 65535);
      }
      ctx.fillText(text, 0, y, this.maxWidth || 65535);
    }
  };
  p._getMeasuredWidth = function(text) {
    var ctx = Text._workingContext;
    ctx.save();
    var w = this._prepContext(ctx).measureText(text).width;
    ctx.restore();
    return w;
  };
  createjs.Text = createjs.promote(Text, "DisplayObject");
})();
this.createjs = this.createjs || {};
(function() {
  function BitmapText(text, spriteSheet) {
    this.Container_constructor();
    this.text = text || "";
    this.spriteSheet = spriteSheet;
    this.lineHeight = 0;
    this.letterSpacing = 0;
    this.spaceWidth = 0;
    this._oldProps = {text:0, spriteSheet:0, lineHeight:0, letterSpacing:0, spaceWidth:0};
  }
  var p = createjs.extend(BitmapText, createjs.Container);
  BitmapText.maxPoolSize = 100;
  BitmapText._spritePool = [];
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache)) {
      return;
    }
    this._updateText();
    this.Container_draw(ctx, ignoreCache);
  };
  p.getBounds = function() {
    this._updateText();
    return this.Container_getBounds();
  };
  p.isVisible = function() {
    var hasContent = this.cacheCanvas || this.spriteSheet && this.spriteSheet.complete && this.text;
    return !!(this.visible && this.alpha > 0 && this.scaleX !== 0 && this.scaleY !== 0 && hasContent);
  };
  p.clone = function() {
    return this._cloneProps(new BitmapText(this.text, this.spriteSheet));
  };
  p.addChild = p.addChildAt = p.removeChild = p.removeChildAt = p.removeAllChildren = function() {
  };
  p._cloneProps = function(o) {
    this.Container__cloneProps(o);
    o.lineHeight = this.lineHeight;
    o.letterSpacing = this.letterSpacing;
    o.spaceWidth = this.spaceWidth;
    return o;
  };
  p._getFrameIndex = function(character, spriteSheet) {
    var c, o = spriteSheet.getAnimation(character);
    if (!o) {
      character != (c = character.toUpperCase()) || character != (c = character.toLowerCase()) || (c = null);
      if (c) {
        o = spriteSheet.getAnimation(c);
      }
    }
    return o && o.frames[0];
  };
  p._getFrame = function(character, spriteSheet) {
    var index = this._getFrameIndex(character, spriteSheet);
    return index == null ? index : spriteSheet.getFrame(index);
  };
  p._getLineHeight = function(ss) {
    var frame = this._getFrame("1", ss) || this._getFrame("T", ss) || this._getFrame("L", ss) || ss.getFrame(0);
    return frame ? frame.rect.height : 1;
  };
  p._getSpaceWidth = function(ss) {
    var frame = this._getFrame("1", ss) || this._getFrame("l", ss) || this._getFrame("e", ss) || this._getFrame("a", ss) || ss.getFrame(0);
    return frame ? frame.rect.width : 1;
  };
  p._updateText = function() {
    var x = 0, y = 0, o = this._oldProps, change = false, spaceW = this.spaceWidth, lineH = this.lineHeight, ss = this.spriteSheet;
    var pool = BitmapText._spritePool, kids = this.children, childIndex = 0, numKids = kids.length, sprite;
    for (var n in o) {
      if (o[n] != this[n]) {
        o[n] = this[n];
        change = true;
      }
    }
    if (!change) {
      return;
    }
    var hasSpace = !!this._getFrame(" ", ss);
    if (!hasSpace && !spaceW) {
      spaceW = this._getSpaceWidth(ss);
    }
    if (!lineH) {
      lineH = this._getLineHeight(ss);
    }
    for (var i = 0, l = this.text.length;i < l;i++) {
      var character = this.text.charAt(i);
      if (character == " " && !hasSpace) {
        x += spaceW;
        continue;
      } else {
        if (character == "\n" || character == "\r") {
          if (character == "\r" && this.text.charAt(i + 1) == "\n") {
            i++;
          }
          x = 0;
          y += lineH;
          continue;
        }
      }
      var index = this._getFrameIndex(character, ss);
      if (index == null) {
        continue;
      }
      if (childIndex < numKids) {
        sprite = kids[childIndex];
      } else {
        kids.push(sprite = pool.length ? pool.pop() : new createjs.Sprite);
        sprite.parent = this;
        numKids++;
      }
      sprite.spriteSheet = ss;
      sprite.gotoAndStop(index);
      sprite.x = x;
      sprite.y = y;
      childIndex++;
      x += sprite.getBounds().width + this.letterSpacing;
    }
    while (numKids > childIndex) {
      pool.push(sprite = kids.pop());
      sprite.parent = null;
      numKids--;
    }
    if (pool.length > BitmapText.maxPoolSize) {
      pool.length = BitmapText.maxPoolSize;
    }
  };
  createjs.BitmapText = createjs.promote(BitmapText, "Container");
})();
this.createjs = this.createjs || {};
(function() {
  function MovieClip(mode, startPosition, loop, labels) {
    this.Container_constructor();
    !MovieClip.inited && MovieClip.init();
    this.mode = mode || MovieClip.INDEPENDENT;
    this.startPosition = startPosition || 0;
    this.loop = loop;
    this.currentFrame = 0;
    this.timeline = new createjs.Timeline(null, labels, {paused:true, position:startPosition, useTicks:true});
    this.paused = false;
    this.actionsEnabled = true;
    this.autoReset = true;
    this.frameBounds = this.frameBounds || null;
    this.framerate = null;
    this._synchOffset = 0;
    this._prevPos = -1;
    this._prevPosition = 0;
    this._t = 0;
    this._managed = {};
  }
  var p = createjs.extend(MovieClip, createjs.Container);
  MovieClip.INDEPENDENT = "independent";
  MovieClip.SINGLE_FRAME = "single";
  MovieClip.SYNCHED = "synched";
  MovieClip.inited = false;
  MovieClip.init = function() {
    if (MovieClip.inited) {
      return;
    }
    MovieClipPlugin.install();
    MovieClip.inited = true;
  };
  p.getLabels = function() {
    return this.timeline.getLabels();
  };
  p.getCurrentLabel = function() {
    this._updateTimeline();
    return this.timeline.getCurrentLabel();
  };
  p.getDuration = function() {
    return this.timeline.duration;
  };
  try {
    Object.defineProperties(p, {labels:{get:p.getLabels}, currentLabel:{get:p.getCurrentLabel}, totalFrames:{get:p.getDuration}, duration:{get:p.getDuration}});
  } catch (e) {
  }
  p.initialize = MovieClip;
  p.isVisible = function() {
    return !!(this.visible && this.alpha > 0 && this.scaleX != 0 && this.scaleY != 0);
  };
  p.draw = function(ctx, ignoreCache) {
    if (this.DisplayObject_draw(ctx, ignoreCache)) {
      return true;
    }
    this._updateTimeline();
    this.Container_draw(ctx, ignoreCache);
    return true;
  };
  p.play = function() {
    this.paused = false;
  };
  p.stop = function() {
    this.paused = true;
  };
  p.gotoAndPlay = function(positionOrLabel) {
    this.paused = false;
    this._goto(positionOrLabel);
  };
  p.gotoAndStop = function(positionOrLabel) {
    this.paused = true;
    this._goto(positionOrLabel);
  };
  p.advance = function(time) {
    var independent = MovieClip.INDEPENDENT;
    if (this.mode != independent) {
      return;
    }
    var o = this, fps = o.framerate;
    while ((o = o.parent) && fps == null) {
      if (o.mode == independent) {
        fps = o._framerate;
      }
    }
    this._framerate = fps;
    var t = fps != null && fps != -1 && time != null ? time / (1E3 / fps) + this._t : 1;
    var frames = t | 0;
    this._t = t - frames;
    while (!this.paused && frames--) {
      this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1;
      this._updateTimeline();
    }
  };
  p.clone = function() {
    throw "MovieClip cannot be cloned.";
  };
  p.toString = function() {
    return "[MovieClip (name=" + this.name + ")]";
  };
  p._tick = function(evtObj) {
    this.advance(evtObj && evtObj.delta);
    this.Container__tick(evtObj);
  };
  p._goto = function(positionOrLabel) {
    var pos = this.timeline.resolve(positionOrLabel);
    if (pos == null) {
      return;
    }
    if (this._prevPos == -1) {
      this._prevPos = NaN;
    }
    this._prevPosition = pos;
    this._t = 0;
    this._updateTimeline();
  };
  p._reset = function() {
    this._prevPos = -1;
    this._t = this.currentFrame = 0;
    this.paused = false;
  };
  p._updateTimeline = function() {
    var tl = this.timeline;
    var synched = this.mode != MovieClip.INDEPENDENT;
    tl.loop = this.loop == null ? true : this.loop;
    var pos = synched ? this.startPosition + (this.mode == MovieClip.SINGLE_FRAME ? 0 : this._synchOffset) : this._prevPos < 0 ? 0 : this._prevPosition;
    var mode = synched || !this.actionsEnabled ? createjs.Tween.NONE : null;
    this.currentFrame = tl._calcPosition(pos);
    tl.setPosition(pos, mode);
    this._prevPosition = tl._prevPosition;
    if (this._prevPos == tl._prevPos) {
      return;
    }
    this.currentFrame = this._prevPos = tl._prevPos;
    for (var n in this._managed) {
      this._managed[n] = 1;
    }
    var tweens = tl._tweens;
    for (var i = 0, l = tweens.length;i < l;i++) {
      var tween = tweens[i];
      var target = tween._target;
      if (target == this || tween.passive) {
        continue;
      }
      var offset = tween._stepPosition;
      if (target instanceof createjs.DisplayObject) {
        this._addManagedChild(target, offset);
      } else {
        this._setState(target.state, offset);
      }
    }
    var kids = this.children;
    for (i = kids.length - 1;i >= 0;i--) {
      var id = kids[i].id;
      if (this._managed[id] == 1) {
        this.removeChildAt(i);
        delete this._managed[id];
      }
    }
  };
  p._setState = function(state, offset) {
    if (!state) {
      return;
    }
    for (var i = state.length - 1;i >= 0;i--) {
      var o = state[i];
      var target = o.t;
      var props = o.p;
      for (var n in props) {
        target[n] = props[n];
      }
      this._addManagedChild(target, offset);
    }
  };
  p._addManagedChild = function(child, offset) {
    if (child._off) {
      return;
    }
    this.addChildAt(child, 0);
    if (child instanceof MovieClip) {
      child._synchOffset = offset;
      if (child.mode == MovieClip.INDEPENDENT && child.autoReset && !this._managed[child.id]) {
        child._reset();
      }
    }
    this._managed[child.id] = 2;
  };
  p._getBounds = function(matrix, ignoreTransform) {
    var bounds = this.DisplayObject_getBounds();
    if (!bounds) {
      this._updateTimeline();
      if (this.frameBounds) {
        bounds = this._rectangle.copy(this.frameBounds[this.currentFrame]);
      }
    }
    if (bounds) {
      return this._transformBounds(bounds, matrix, ignoreTransform);
    }
    return this.Container__getBounds(matrix, ignoreTransform);
  };
  createjs.MovieClip = createjs.promote(MovieClip, "Container");
  function MovieClipPlugin() {
    throw "MovieClipPlugin cannot be instantiated.";
  }
  MovieClipPlugin.priority = 100;
  MovieClipPlugin.install = function() {
    createjs.Tween.installPlugin(MovieClipPlugin, ["startPosition"]);
  };
  MovieClipPlugin.init = function(tween, prop, value) {
    return value;
  };
  MovieClipPlugin.step = function() {
  };
  MovieClipPlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
    if (!(tween.target instanceof MovieClip)) {
      return value;
    }
    return ratio == 1 ? endValues[prop] : startValues[prop];
  };
})();
this.createjs = this.createjs || {};
(function() {
  function SpriteSheetUtils() {
    throw "SpriteSheetUtils cannot be instantiated";
  }
  var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
  if (canvas.getContext) {
    SpriteSheetUtils._workingCanvas = canvas;
    SpriteSheetUtils._workingContext = canvas.getContext("2d");
    canvas.width = canvas.height = 1;
  }
  SpriteSheetUtils.addFlippedFrames = function(spriteSheet, horizontal, vertical, both) {
    if (!horizontal && !vertical && !both) {
      return;
    }
    var count = 0;
    if (horizontal) {
      SpriteSheetUtils._flip(spriteSheet, ++count, true, false);
    }
    if (vertical) {
      SpriteSheetUtils._flip(spriteSheet, ++count, false, true);
    }
    if (both) {
      SpriteSheetUtils._flip(spriteSheet, ++count, true, true);
    }
  };
  SpriteSheetUtils.extractFrame = function(spriteSheet, frameOrAnimation) {
    if (isNaN(frameOrAnimation)) {
      frameOrAnimation = spriteSheet.getAnimation(frameOrAnimation).frames[0];
    }
    var data = spriteSheet.getFrame(frameOrAnimation);
    if (!data) {
      return null;
    }
    var r = data.rect;
    var canvas = SpriteSheetUtils._workingCanvas;
    canvas.width = r.width;
    canvas.height = r.height;
    SpriteSheetUtils._workingContext.drawImage(data.image, r.x, r.y, r.width, r.height, 0, 0, r.width, r.height);
    var img = document.createElement("img");
    img.src = canvas.toDataURL("image/png");
    return img;
  };
  SpriteSheetUtils.mergeAlpha = function(rgbImage, alphaImage, canvas) {
    if (!canvas) {
      canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
    }
    canvas.width = Math.max(alphaImage.width, rgbImage.width);
    canvas.height = Math.max(alphaImage.height, rgbImage.height);
    var ctx = canvas.getContext("2d");
    ctx.save();
    ctx.drawImage(rgbImage, 0, 0);
    ctx.globalCompositeOperation = "destination-in";
    ctx.drawImage(alphaImage, 0, 0);
    ctx.restore();
    return canvas;
  };
  SpriteSheetUtils._flip = function(spriteSheet, count, h, v) {
    var imgs = spriteSheet._images;
    var canvas = SpriteSheetUtils._workingCanvas;
    var ctx = SpriteSheetUtils._workingContext;
    var il = imgs.length / count;
    for (var i = 0;i < il;i++) {
      var src = imgs[i];
      src.__tmp = i;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, canvas.width + 1, canvas.height + 1);
      canvas.width = src.width;
      canvas.height = src.height;
      ctx.setTransform(h ? -1 : 1, 0, 0, v ? -1 : 1, h ? src.width : 0, v ? src.height : 0);
      ctx.drawImage(src, 0, 0);
      var img = document.createElement("img");
      img.src = canvas.toDataURL("image/png");
      img.width = src.width;
      img.height = src.height;
      imgs.push(img);
    }
    var frames = spriteSheet._frames;
    var fl = frames.length / count;
    for (i = 0;i < fl;i++) {
      src = frames[i];
      var rect = src.rect.clone();
      img = imgs[src.image.__tmp + il * count];
      var frame = {image:img, rect:rect, regX:src.regX, regY:src.regY};
      if (h) {
        rect.x = img.width - rect.x - rect.width;
        frame.regX = rect.width - src.regX;
      }
      if (v) {
        rect.y = img.height - rect.y - rect.height;
        frame.regY = rect.height - src.regY;
      }
      frames.push(frame);
    }
    var sfx = "_" + (h ? "h" : "") + (v ? "v" : "");
    var names = spriteSheet._animations;
    var data = spriteSheet._data;
    var al = names.length / count;
    for (i = 0;i < al;i++) {
      var name = names[i];
      src = data[name];
      var anim = {name:name + sfx, speed:src.speed, next:src.next, frames:[]};
      if (src.next) {
        anim.next += sfx;
      }
      frames = src.frames;
      for (var j = 0, l = frames.length;j < l;j++) {
        anim.frames.push(frames[j] + fl * count);
      }
      data[anim.name] = anim;
      names.push(anim.name);
    }
  };
  createjs.SpriteSheetUtils = SpriteSheetUtils;
})();
this.createjs = this.createjs || {};
(function() {
  function SpriteSheetBuilder(framerate) {
    this.EventDispatcher_constructor();
    this.maxWidth = 2048;
    this.maxHeight = 2048;
    this.spriteSheet = null;
    this.scale = 1;
    this.padding = 1;
    this.timeSlice = .3;
    this.progress = -1;
    this.framerate = framerate || 0;
    this._frames = [];
    this._animations = {};
    this._data = null;
    this._nextFrameIndex = 0;
    this._index = 0;
    this._timerID = null;
    this._scale = 1;
  }
  var p = createjs.extend(SpriteSheetBuilder, createjs.EventDispatcher);
  SpriteSheetBuilder.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions";
  SpriteSheetBuilder.ERR_RUNNING = "a build is already running";
  p.addFrame = function(source, sourceRect, scale, setupFunction, setupData) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    var rect = sourceRect || source.bounds || source.nominalBounds;
    if (!rect && source.getBounds) {
      rect = source.getBounds();
    }
    if (!rect) {
      return null;
    }
    scale = scale || 1;
    return this._frames.push({source:source, sourceRect:rect, scale:scale, funct:setupFunction, data:setupData, index:this._frames.length, height:rect.height * scale}) - 1;
  };
  p.addAnimation = function(name, frames, next, speed) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this._animations[name] = {frames:frames, next:next, speed:speed};
  };
  p.addMovieClip = function(source, sourceRect, scale, setupFunction, setupData, labelFunction) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    var rects = source.frameBounds;
    var rect = sourceRect || source.bounds || source.nominalBounds;
    if (!rect && source.getBounds) {
      rect = source.getBounds();
    }
    if (!rect && !rects) {
      return;
    }
    var i, l, baseFrameIndex = this._frames.length;
    var duration = source.timeline.duration;
    for (i = 0;i < duration;i++) {
      var r = rects && rects[i] ? rects[i] : rect;
      this.addFrame(source, r, scale, this._setupMovieClipFrame, {i:i, f:setupFunction, d:setupData});
    }
    var labels = source.timeline._labels;
    var lbls = [];
    for (var n in labels) {
      lbls.push({index:labels[n], label:n});
    }
    if (lbls.length) {
      lbls.sort(function(a, b) {
        return a.index - b.index;
      });
      for (i = 0, l = lbls.length;i < l;i++) {
        var label = lbls[i].label;
        var start = baseFrameIndex + lbls[i].index;
        var end = baseFrameIndex + (i == l - 1 ? duration : lbls[i + 1].index);
        var frames = [];
        for (var j = start;j < end;j++) {
          frames.push(j);
        }
        if (labelFunction) {
          label = labelFunction(label, source, start, end);
          if (!label) {
            continue;
          }
        }
        this.addAnimation(label, frames, true);
      }
    }
  };
  p.build = function() {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this._startBuild();
    while (this._drawNext()) {
    }
    this._endBuild();
    return this.spriteSheet;
  };
  p.buildAsync = function(timeSlice) {
    if (this._data) {
      throw SpriteSheetBuilder.ERR_RUNNING;
    }
    this.timeSlice = timeSlice;
    this._startBuild();
    var _this = this;
    this._timerID = setTimeout(function() {
      _this._run();
    }, 50 - Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50);
  };
  p.stopAsync = function() {
    clearTimeout(this._timerID);
    this._data = null;
  };
  p.clone = function() {
    throw "SpriteSheetBuilder cannot be cloned.";
  };
  p.toString = function() {
    return "[SpriteSheetBuilder]";
  };
  p._startBuild = function() {
    var pad = this.padding || 0;
    this.progress = 0;
    this.spriteSheet = null;
    this._index = 0;
    this._scale = this.scale;
    var dataFrames = [];
    this._data = {images:[], frames:dataFrames, framerate:this.framerate, animations:this._animations};
    var frames = this._frames.slice();
    frames.sort(function(a, b) {
      return a.height <= b.height ? -1 : 1;
    });
    if (frames[frames.length - 1].height + pad * 2 > this.maxHeight) {
      throw SpriteSheetBuilder.ERR_DIMENSIONS;
    }
    var y = 0, x = 0;
    var img = 0;
    while (frames.length) {
      var o = this._fillRow(frames, y, img, dataFrames, pad);
      if (o.w > x) {
        x = o.w;
      }
      y += o.h;
      if (!o.h || !frames.length) {
        var canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
        canvas.width = this._getSize(x, this.maxWidth);
        canvas.height = this._getSize(y, this.maxHeight);
        this._data.images[img] = canvas;
        if (!o.h) {
          x = y = 0;
          img++;
        }
      }
    }
  };
  p._setupMovieClipFrame = function(source, data) {
    var ae = source.actionsEnabled;
    source.actionsEnabled = false;
    source.gotoAndStop(data.i);
    source.actionsEnabled = ae;
    data.f && data.f(source, data.d, data.i);
  };
  p._getSize = function(size, max) {
    var pow = 4;
    while (Math.pow(2, ++pow) < size) {
    }
    return Math.min(max, Math.pow(2, pow));
  };
  p._fillRow = function(frames, y, img, dataFrames, pad) {
    var w = this.maxWidth;
    var maxH = this.maxHeight;
    y += pad;
    var h = maxH - y;
    var x = pad;
    var height = 0;
    for (var i = frames.length - 1;i >= 0;i--) {
      var frame = frames[i];
      var sc = this._scale * frame.scale;
      var rect = frame.sourceRect;
      var source = frame.source;
      var rx = Math.floor(sc * rect.x - pad);
      var ry = Math.floor(sc * rect.y - pad);
      var rh = Math.ceil(sc * rect.height + pad * 2);
      var rw = Math.ceil(sc * rect.width + pad * 2);
      if (rw > w) {
        throw SpriteSheetBuilder.ERR_DIMENSIONS;
      }
      if (rh > h || x + rw > w) {
        continue;
      }
      frame.img = img;
      frame.rect = new createjs.Rectangle(x, y, rw, rh);
      height = height || rh;
      frames.splice(i, 1);
      dataFrames[frame.index] = [x, y, rw, rh, img, Math.round(-rx + sc * source.regX - pad), Math.round(-ry + sc * source.regY - pad)];
      x += rw;
    }
    return {w:x, h:height};
  };
  p._endBuild = function() {
    this.spriteSheet = new createjs.SpriteSheet(this._data);
    this._data = null;
    this.progress = 1;
    this.dispatchEvent("complete");
  };
  p._run = function() {
    var ts = Math.max(.01, Math.min(.99, this.timeSlice || .3)) * 50;
    var t = (new Date).getTime() + ts;
    var complete = false;
    while (t > (new Date).getTime()) {
      if (!this._drawNext()) {
        complete = true;
        break;
      }
    }
    if (complete) {
      this._endBuild();
    } else {
      var _this = this;
      this._timerID = setTimeout(function() {
        _this._run();
      }, 50 - ts);
    }
    var p = this.progress = this._index / this._frames.length;
    if (this.hasEventListener("progress")) {
      var evt = new createjs.Event("progress");
      evt.progress = p;
      this.dispatchEvent(evt);
    }
  };
  p._drawNext = function() {
    var frame = this._frames[this._index];
    var sc = frame.scale * this._scale;
    var rect = frame.rect;
    var sourceRect = frame.sourceRect;
    var canvas = this._data.images[frame.img];
    var ctx = canvas.getContext("2d");
    frame.funct && frame.funct(frame.source, frame.data);
    ctx.save();
    ctx.beginPath();
    ctx.rect(rect.x, rect.y, rect.width, rect.height);
    ctx.clip();
    ctx.translate(Math.ceil(rect.x - sourceRect.x * sc), Math.ceil(rect.y - sourceRect.y * sc));
    ctx.scale(sc, sc);
    frame.source.draw(ctx);
    ctx.restore();
    return ++this._index < this._frames.length;
  };
  createjs.SpriteSheetBuilder = createjs.promote(SpriteSheetBuilder, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function DOMElement(htmlElement) {
    this.DisplayObject_constructor();
    if (typeof htmlElement == "string") {
      htmlElement = document.getElementById(htmlElement);
    }
    this.mouseEnabled = false;
    var style = htmlElement.style;
    style.position = "absolute";
    style.transformOrigin = style.WebkitTransformOrigin = style.msTransformOrigin = style.MozTransformOrigin = style.OTransformOrigin = "0% 0%";
    this.htmlElement = htmlElement;
    this._oldProps = null;
  }
  var p = createjs.extend(DOMElement, createjs.DisplayObject);
  p.isVisible = function() {
    return this.htmlElement != null;
  };
  p.draw = function(ctx, ignoreCache) {
    return true;
  };
  p.cache = function() {
  };
  p.uncache = function() {
  };
  p.updateCache = function() {
  };
  p.hitTest = function() {
  };
  p.localToGlobal = function() {
  };
  p.globalToLocal = function() {
  };
  p.localToLocal = function() {
  };
  p.clone = function() {
    throw "DOMElement cannot be cloned.";
  };
  p.toString = function() {
    return "[DOMElement (name=" + this.name + ")]";
  };
  p._tick = function(evtObj) {
    var stage = this.getStage();
    stage && stage.on("drawend", this._handleDrawEnd, this, true);
    this.DisplayObject__tick(evtObj);
  };
  p._handleDrawEnd = function(evt) {
    var o = this.htmlElement;
    if (!o) {
      return;
    }
    var style = o.style;
    var props = this.getConcatenatedDisplayProps(this._props), mtx = props.matrix;
    var visibility = props.visible ? "visible" : "hidden";
    if (visibility != style.visibility) {
      style.visibility = visibility;
    }
    if (!props.visible) {
      return;
    }
    var oldProps = this._oldProps, oldMtx = oldProps && oldProps.matrix;
    var n = 1E4;
    if (!oldMtx || !oldMtx.equals(mtx)) {
      var str = "matrix(" + (mtx.a * n | 0) / n + "," + (mtx.b * n | 0) / n + "," + (mtx.c * n | 0) / n + "," + (mtx.d * n | 0) / n + "," + (mtx.tx + .5 | 0);
      style.transform = style.WebkitTransform = style.OTransform = style.msTransform = str + "," + (mtx.ty + .5 | 0) + ")";
      style.MozTransform = str + "px," + (mtx.ty + .5 | 0) + "px)";
      if (!oldProps) {
        oldProps = this._oldProps = new createjs.DisplayProps(true, NaN);
      }
      oldProps.matrix.copy(mtx);
    }
    if (oldProps.alpha != props.alpha) {
      style.opacity = "" + (props.alpha * n | 0) / n;
      oldProps.alpha = props.alpha;
    }
  };
  createjs.DOMElement = createjs.promote(DOMElement, "DisplayObject");
})();
this.createjs = this.createjs || {};
(function() {
  function Filter() {
  }
  var p = Filter.prototype;
  p.getBounds = function(rect) {
    return rect;
  };
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    targetCtx = targetCtx || ctx;
    if (targetX == null) {
      targetX = x;
    }
    if (targetY == null) {
      targetY = y;
    }
    try {
      var imageData = ctx.getImageData(x, y, width, height);
    } catch (e) {
      return false;
    }
    if (this._applyFilter(imageData)) {
      targetCtx.putImageData(imageData, targetX, targetY);
      return true;
    }
    return false;
  };
  p.toString = function() {
    return "[Filter]";
  };
  p.clone = function() {
    return new Filter;
  };
  p._applyFilter = function(imageData) {
    return true;
  };
  createjs.Filter = Filter;
})();
this.createjs = this.createjs || {};
(function() {
  function BlurFilter(blurX, blurY, quality) {
    if (isNaN(blurX) || blurX < 0) {
      blurX = 0;
    }
    if (isNaN(blurY) || blurY < 0) {
      blurY = 0;
    }
    if (isNaN(quality) || quality < 1) {
      quality = 1;
    }
    this.blurX = blurX | 0;
    this.blurY = blurY | 0;
    this.quality = quality | 0;
  }
  var p = createjs.extend(BlurFilter, createjs.Filter);
  BlurFilter.MUL_TABLE = [1, 171, 205, 293, 57, 373, 79, 137, 241, 27, 391, 357, 41, 19, 283, 265, 497, 469, 443, 421, 25, 191, 365, 349, 335, 161, 155, 149, 9, 278, 269, 261, 505, 245, 475, 231, 449, 437, 213, 415, 405, 395, 193, 377, 369, 361, 353, 345, 169, 331, 325, 319, 313, 307, 301, 37, 145, 285, 281, 69, 271, 267, 263, 259, 509, 501, 493, 243, 479, 118, 465, 459, 113, 446, 55, 435, 429, 423, 209, 413, 51, 403, 199, 393, 97, 3, 379, 375, 371, 367, 363, 359, 355, 351, 347, 43, 85, 337, 333, 
  165, 327, 323, 5, 317, 157, 311, 77, 305, 303, 75, 297, 294, 73, 289, 287, 71, 141, 279, 277, 275, 68, 135, 67, 133, 33, 262, 260, 129, 511, 507, 503, 499, 495, 491, 61, 121, 481, 477, 237, 235, 467, 232, 115, 457, 227, 451, 7, 445, 221, 439, 218, 433, 215, 427, 425, 211, 419, 417, 207, 411, 409, 203, 202, 401, 399, 396, 197, 49, 389, 387, 385, 383, 95, 189, 47, 187, 93, 185, 23, 183, 91, 181, 45, 179, 89, 177, 11, 175, 87, 173, 345, 343, 341, 339, 337, 21, 167, 83, 331, 329, 327, 163, 81, 323, 
  321, 319, 159, 79, 315, 313, 39, 155, 309, 307, 153, 305, 303, 151, 75, 299, 149, 37, 295, 147, 73, 291, 145, 289, 287, 143, 285, 71, 141, 281, 35, 279, 139, 69, 275, 137, 273, 17, 271, 135, 269, 267, 133, 265, 33, 263, 131, 261, 130, 259, 129, 257, 1];
  BlurFilter.SHG_TABLE = [0, 9, 10, 11, 9, 12, 10, 11, 12, 9, 13, 13, 10, 9, 13, 13, 14, 14, 14, 14, 10, 13, 14, 14, 14, 13, 13, 13, 9, 14, 14, 14, 15, 14, 15, 14, 15, 15, 14, 15, 15, 15, 14, 15, 15, 15, 15, 15, 14, 15, 15, 15, 15, 15, 15, 12, 14, 15, 15, 13, 15, 15, 15, 15, 16, 16, 16, 15, 16, 14, 16, 16, 14, 16, 13, 16, 16, 16, 15, 16, 13, 16, 15, 16, 14, 9, 16, 16, 16, 16, 16, 16, 16, 16, 16, 13, 14, 16, 16, 15, 16, 16, 10, 16, 15, 16, 14, 16, 16, 14, 16, 16, 14, 16, 16, 14, 15, 16, 16, 16, 14, 
  15, 14, 15, 13, 16, 16, 15, 17, 17, 17, 17, 17, 17, 14, 15, 17, 17, 16, 16, 17, 16, 15, 17, 16, 17, 11, 17, 16, 17, 16, 17, 16, 17, 17, 16, 17, 17, 16, 17, 17, 16, 16, 17, 17, 17, 16, 14, 17, 17, 17, 17, 15, 16, 14, 16, 15, 16, 13, 16, 15, 16, 14, 16, 15, 16, 12, 16, 15, 16, 17, 17, 17, 17, 17, 13, 16, 15, 17, 17, 17, 16, 15, 17, 17, 17, 16, 15, 17, 17, 14, 16, 17, 17, 16, 17, 17, 16, 15, 17, 16, 14, 17, 16, 15, 17, 16, 17, 17, 16, 17, 15, 16, 17, 14, 17, 16, 15, 17, 16, 17, 13, 17, 16, 17, 17, 
  16, 17, 14, 17, 16, 17, 16, 17, 16, 17, 9];
  p.getBounds = function(rect) {
    var x = this.blurX | 0, y = this.blurY | 0;
    if (x <= 0 && y <= 0) {
      return rect;
    }
    var q = Math.pow(this.quality, .2);
    return (rect || new createjs.Rectangle).pad(x * q + 1, y * q + 1, x * q + 1, y * q + 1);
  };
  p.clone = function() {
    return new BlurFilter(this.blurX, this.blurY, this.quality);
  };
  p.toString = function() {
    return "[BlurFilter]";
  };
  p._applyFilter = function(imageData) {
    var radiusX = this.blurX >> 1;
    if (isNaN(radiusX) || radiusX < 0) {
      return false;
    }
    var radiusY = this.blurY >> 1;
    if (isNaN(radiusY) || radiusY < 0) {
      return false;
    }
    if (radiusX == 0 && radiusY == 0) {
      return false;
    }
    var iterations = this.quality;
    if (isNaN(iterations) || iterations < 1) {
      iterations = 1;
    }
    iterations |= 0;
    if (iterations > 3) {
      iterations = 3;
    }
    if (iterations < 1) {
      iterations = 1;
    }
    var px = imageData.data;
    var x = 0, y = 0, i = 0, p = 0, yp = 0, yi = 0, yw = 0, r = 0, g = 0, b = 0, a = 0, pr = 0, pg = 0, pb = 0, pa = 0;
    var divx = radiusX + radiusX + 1 | 0;
    var divy = radiusY + radiusY + 1 | 0;
    var w = imageData.width | 0;
    var h = imageData.height | 0;
    var w1 = w - 1 | 0;
    var h1 = h - 1 | 0;
    var rxp1 = radiusX + 1 | 0;
    var ryp1 = radiusY + 1 | 0;
    var ssx = {r:0, b:0, g:0, a:0};
    var sx = ssx;
    for (i = 1;i < divx;i++) {
      sx = sx.n = {r:0, b:0, g:0, a:0};
    }
    sx.n = ssx;
    var ssy = {r:0, b:0, g:0, a:0};
    var sy = ssy;
    for (i = 1;i < divy;i++) {
      sy = sy.n = {r:0, b:0, g:0, a:0};
    }
    sy.n = ssy;
    var si = null;
    var mtx = BlurFilter.MUL_TABLE[radiusX] | 0;
    var stx = BlurFilter.SHG_TABLE[radiusX] | 0;
    var mty = BlurFilter.MUL_TABLE[radiusY] | 0;
    var sty = BlurFilter.SHG_TABLE[radiusY] | 0;
    while (iterations-- > 0) {
      yw = yi = 0;
      var ms = mtx;
      var ss = stx;
      for (y = h;--y > -1;) {
        r = rxp1 * (pr = px[yi | 0]);
        g = rxp1 * (pg = px[yi + 1 | 0]);
        b = rxp1 * (pb = px[yi + 2 | 0]);
        a = rxp1 * (pa = px[yi + 3 | 0]);
        sx = ssx;
        for (i = rxp1;--i > -1;) {
          sx.r = pr;
          sx.g = pg;
          sx.b = pb;
          sx.a = pa;
          sx = sx.n;
        }
        for (i = 1;i < rxp1;i++) {
          p = yi + ((w1 < i ? w1 : i) << 2) | 0;
          r += sx.r = px[p];
          g += sx.g = px[p + 1];
          b += sx.b = px[p + 2];
          a += sx.a = px[p + 3];
          sx = sx.n;
        }
        si = ssx;
        for (x = 0;x < w;x++) {
          px[yi++] = r * ms >>> ss;
          px[yi++] = g * ms >>> ss;
          px[yi++] = b * ms >>> ss;
          px[yi++] = a * ms >>> ss;
          p = yw + ((p = x + radiusX + 1) < w1 ? p : w1) << 2;
          r -= si.r - (si.r = px[p]);
          g -= si.g - (si.g = px[p + 1]);
          b -= si.b - (si.b = px[p + 2]);
          a -= si.a - (si.a = px[p + 3]);
          si = si.n;
        }
        yw += w;
      }
      ms = mty;
      ss = sty;
      for (x = 0;x < w;x++) {
        yi = x << 2 | 0;
        r = ryp1 * (pr = px[yi]) | 0;
        g = ryp1 * (pg = px[yi + 1 | 0]) | 0;
        b = ryp1 * (pb = px[yi + 2 | 0]) | 0;
        a = ryp1 * (pa = px[yi + 3 | 0]) | 0;
        sy = ssy;
        for (i = 0;i < ryp1;i++) {
          sy.r = pr;
          sy.g = pg;
          sy.b = pb;
          sy.a = pa;
          sy = sy.n;
        }
        yp = w;
        for (i = 1;i <= radiusY;i++) {
          yi = yp + x << 2;
          r += sy.r = px[yi];
          g += sy.g = px[yi + 1];
          b += sy.b = px[yi + 2];
          a += sy.a = px[yi + 3];
          sy = sy.n;
          if (i < h1) {
            yp += w;
          }
        }
        yi = x;
        si = ssy;
        if (iterations > 0) {
          for (y = 0;y < h;y++) {
            p = yi << 2;
            px[p + 3] = pa = a * ms >>> ss;
            if (pa > 0) {
              px[p] = r * ms >>> ss;
              px[p + 1] = g * ms >>> ss;
              px[p + 2] = b * ms >>> ss;
            } else {
              px[p] = px[p + 1] = px[p + 2] = 0;
            }
            p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2;
            r -= si.r - (si.r = px[p]);
            g -= si.g - (si.g = px[p + 1]);
            b -= si.b - (si.b = px[p + 2]);
            a -= si.a - (si.a = px[p + 3]);
            si = si.n;
            yi += w;
          }
        } else {
          for (y = 0;y < h;y++) {
            p = yi << 2;
            px[p + 3] = pa = a * ms >>> ss;
            if (pa > 0) {
              pa = 255 / pa;
              px[p] = (r * ms >>> ss) * pa;
              px[p + 1] = (g * ms >>> ss) * pa;
              px[p + 2] = (b * ms >>> ss) * pa;
            } else {
              px[p] = px[p + 1] = px[p + 2] = 0;
            }
            p = x + ((p = y + ryp1) < h1 ? p : h1) * w << 2;
            r -= si.r - (si.r = px[p]);
            g -= si.g - (si.g = px[p + 1]);
            b -= si.b - (si.b = px[p + 2]);
            a -= si.a - (si.a = px[p + 3]);
            si = si.n;
            yi += w;
          }
        }
      }
    }
    return true;
  };
  createjs.BlurFilter = createjs.promote(BlurFilter, "Filter");
})();
this.createjs = this.createjs || {};
(function() {
  function AlphaMapFilter(alphaMap) {
    this.alphaMap = alphaMap;
    this._alphaMap = null;
    this._mapData = null;
  }
  var p = createjs.extend(AlphaMapFilter, createjs.Filter);
  p.clone = function() {
    var o = new AlphaMapFilter(this.alphaMap);
    o._alphaMap = this._alphaMap;
    o._mapData = this._mapData;
    return o;
  };
  p.toString = function() {
    return "[AlphaMapFilter]";
  };
  p._applyFilter = function(imageData) {
    if (!this.alphaMap) {
      return true;
    }
    if (!this._prepAlphaMap()) {
      return false;
    }
    var data = imageData.data;
    var map = this._mapData;
    for (var i = 0, l = data.length;i < l;i += 4) {
      data[i + 3] = map[i] || 0;
    }
    return true;
  };
  p._prepAlphaMap = function() {
    if (!this.alphaMap) {
      return false;
    }
    if (this.alphaMap == this._alphaMap && this._mapData) {
      return true;
    }
    this._mapData = null;
    var map = this._alphaMap = this.alphaMap;
    var canvas = map;
    var ctx;
    if (map instanceof HTMLCanvasElement) {
      ctx = canvas.getContext("2d");
    } else {
      canvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
      canvas.width = map.width;
      canvas.height = map.height;
      ctx = canvas.getContext("2d");
      ctx.drawImage(map, 0, 0);
    }
    try {
      var imgData = ctx.getImageData(0, 0, map.width, map.height);
    } catch (e) {
      return false;
    }
    this._mapData = imgData.data;
    return true;
  };
  createjs.AlphaMapFilter = createjs.promote(AlphaMapFilter, "Filter");
})();
this.createjs = this.createjs || {};
(function() {
  function AlphaMaskFilter(mask) {
    this.mask = mask;
  }
  var p = createjs.extend(AlphaMaskFilter, createjs.Filter);
  p.applyFilter = function(ctx, x, y, width, height, targetCtx, targetX, targetY) {
    if (!this.mask) {
      return true;
    }
    targetCtx = targetCtx || ctx;
    if (targetX == null) {
      targetX = x;
    }
    if (targetY == null) {
      targetY = y;
    }
    targetCtx.save();
    if (ctx != targetCtx) {
      return false;
    }
    targetCtx.globalCompositeOperation = "destination-in";
    targetCtx.drawImage(this.mask, targetX, targetY);
    targetCtx.restore();
    return true;
  };
  p.clone = function() {
    return new AlphaMaskFilter(this.mask);
  };
  p.toString = function() {
    return "[AlphaMaskFilter]";
  };
  createjs.AlphaMaskFilter = createjs.promote(AlphaMaskFilter, "Filter");
})();
this.createjs = this.createjs || {};
(function() {
  function ColorFilter(redMultiplier, greenMultiplier, blueMultiplier, alphaMultiplier, redOffset, greenOffset, blueOffset, alphaOffset) {
    this.redMultiplier = redMultiplier != null ? redMultiplier : 1;
    this.greenMultiplier = greenMultiplier != null ? greenMultiplier : 1;
    this.blueMultiplier = blueMultiplier != null ? blueMultiplier : 1;
    this.alphaMultiplier = alphaMultiplier != null ? alphaMultiplier : 1;
    this.redOffset = redOffset || 0;
    this.greenOffset = greenOffset || 0;
    this.blueOffset = blueOffset || 0;
    this.alphaOffset = alphaOffset || 0;
  }
  var p = createjs.extend(ColorFilter, createjs.Filter);
  p.toString = function() {
    return "[ColorFilter]";
  };
  p.clone = function() {
    return new ColorFilter(this.redMultiplier, this.greenMultiplier, this.blueMultiplier, this.alphaMultiplier, this.redOffset, this.greenOffset, this.blueOffset, this.alphaOffset);
  };
  p._applyFilter = function(imageData) {
    var data = imageData.data;
    var l = data.length;
    for (var i = 0;i < l;i += 4) {
      data[i] = data[i] * this.redMultiplier + this.redOffset;
      data[i + 1] = data[i + 1] * this.greenMultiplier + this.greenOffset;
      data[i + 2] = data[i + 2] * this.blueMultiplier + this.blueOffset;
      data[i + 3] = data[i + 3] * this.alphaMultiplier + this.alphaOffset;
    }
    return true;
  };
  createjs.ColorFilter = createjs.promote(ColorFilter, "Filter");
})();
this.createjs = this.createjs || {};
(function() {
  function ColorMatrix(brightness, contrast, saturation, hue) {
    this.setColor(brightness, contrast, saturation, hue);
  }
  var p = ColorMatrix.prototype;
  ColorMatrix.DELTA_INDEX = [0, .01, .02, .04, .05, .06, .07, .08, .1, .11, .12, .14, .15, .16, .17, .18, .2, .21, .22, .24, .25, .27, .28, .3, .32, .34, .36, .38, .4, .42, .44, .46, .48, .5, .53, .56, .59, .62, .65, .68, .71, .74, .77, .8, .83, .86, .89, .92, .95, .98, 1, 1.06, 1.12, 1.18, 1.24, 1.3, 1.36, 1.42, 1.48, 1.54, 1.6, 1.66, 1.72, 1.78, 1.84, 1.9, 1.96, 2, 2.12, 2.25, 2.37, 2.5, 2.62, 2.75, 2.87, 3, 3.2, 3.4, 3.6, 3.8, 4, 4.3, 4.7, 4.9, 5, 5.5, 6, 6.5, 6.8, 7, 7.3, 7.5, 7.8, 8, 8.4, 8.7, 
  9, 9.4, 9.6, 9.8, 10];
  ColorMatrix.IDENTITY_MATRIX = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
  ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;
  p.setColor = function(brightness, contrast, saturation, hue) {
    return this.reset().adjustColor(brightness, contrast, saturation, hue);
  };
  p.reset = function() {
    return this.copy(ColorMatrix.IDENTITY_MATRIX);
  };
  p.adjustColor = function(brightness, contrast, saturation, hue) {
    this.adjustHue(hue);
    this.adjustContrast(contrast);
    this.adjustBrightness(brightness);
    return this.adjustSaturation(saturation);
  };
  p.adjustBrightness = function(value) {
    if (value == 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 255);
    this._multiplyMatrix([1, 0, 0, 0, value, 0, 1, 0, 0, value, 0, 0, 1, 0, value, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  p.adjustContrast = function(value) {
    if (value == 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 100);
    var x;
    if (value < 0) {
      x = 127 + value / 100 * 127;
    } else {
      x = value % 1;
      if (x == 0) {
        x = ColorMatrix.DELTA_INDEX[value];
      } else {
        x = ColorMatrix.DELTA_INDEX[value << 0] * (1 - x) + ColorMatrix.DELTA_INDEX[(value << 0) + 1] * x;
      }
      x = x * 127 + 127;
    }
    this._multiplyMatrix([x / 127, 0, 0, 0, .5 * (127 - x), 0, x / 127, 0, 0, .5 * (127 - x), 0, 0, x / 127, 0, .5 * (127 - x), 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  p.adjustSaturation = function(value) {
    if (value == 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 100);
    var x = 1 + (value > 0 ? 3 * value / 100 : value / 100);
    var lumR = .3086;
    var lumG = .6094;
    var lumB = .082;
    this._multiplyMatrix([lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0, lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0, lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  p.adjustHue = function(value) {
    if (value == 0 || isNaN(value)) {
      return this;
    }
    value = this._cleanValue(value, 180) / 180 * Math.PI;
    var cosVal = Math.cos(value);
    var sinVal = Math.sin(value);
    var lumR = .213;
    var lumG = .715;
    var lumB = .072;
    this._multiplyMatrix([lumR + cosVal * (1 - lumR) + sinVal * -lumR, lumG + cosVal * -lumG + sinVal * -lumG, lumB + cosVal * -lumB + sinVal * (1 - lumB), 0, 0, lumR + cosVal * -lumR + sinVal * .143, lumG + cosVal * (1 - lumG) + sinVal * .14, lumB + cosVal * -lumB + sinVal * -.283, 0, 0, lumR + cosVal * -lumR + sinVal * -(1 - lumR), lumG + cosVal * -lumG + sinVal * lumG, lumB + cosVal * (1 - lumB) + sinVal * lumB, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1]);
    return this;
  };
  p.concat = function(matrix) {
    matrix = this._fixMatrix(matrix);
    if (matrix.length != ColorMatrix.LENGTH) {
      return this;
    }
    this._multiplyMatrix(matrix);
    return this;
  };
  p.clone = function() {
    return (new ColorMatrix).copy(this);
  };
  p.toArray = function() {
    var arr = [];
    for (var i = 0, l = ColorMatrix.LENGTH;i < l;i++) {
      arr[i] = this[i];
    }
    return arr;
  };
  p.copy = function(matrix) {
    var l = ColorMatrix.LENGTH;
    for (var i = 0;i < l;i++) {
      this[i] = matrix[i];
    }
    return this;
  };
  p.toString = function() {
    return "[ColorMatrix]";
  };
  p._multiplyMatrix = function(matrix) {
    var i, j, k, col = [];
    for (i = 0;i < 5;i++) {
      for (j = 0;j < 5;j++) {
        col[j] = this[j + i * 5];
      }
      for (j = 0;j < 5;j++) {
        var val = 0;
        for (k = 0;k < 5;k++) {
          val += matrix[j + k * 5] * col[k];
        }
        this[j + i * 5] = val;
      }
    }
  };
  p._cleanValue = function(value, limit) {
    return Math.min(limit, Math.max(-limit, value));
  };
  p._fixMatrix = function(matrix) {
    if (matrix instanceof ColorMatrix) {
      matrix = matrix.toArray();
    }
    if (matrix.length < ColorMatrix.LENGTH) {
      matrix = matrix.slice(0, matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length, ColorMatrix.LENGTH));
    } else {
      if (matrix.length > ColorMatrix.LENGTH) {
        matrix = matrix.slice(0, ColorMatrix.LENGTH);
      }
    }
    return matrix;
  };
  createjs.ColorMatrix = ColorMatrix;
})();
this.createjs = this.createjs || {};
(function() {
  function ColorMatrixFilter(matrix) {
    this.matrix = matrix;
  }
  var p = createjs.extend(ColorMatrixFilter, createjs.Filter);
  p.toString = function() {
    return "[ColorMatrixFilter]";
  };
  p.clone = function() {
    return new ColorMatrixFilter(this.matrix);
  };
  p._applyFilter = function(imageData) {
    var data = imageData.data;
    var l = data.length;
    var r, g, b, a;
    var mtx = this.matrix;
    var m0 = mtx[0], m1 = mtx[1], m2 = mtx[2], m3 = mtx[3], m4 = mtx[4];
    var m5 = mtx[5], m6 = mtx[6], m7 = mtx[7], m8 = mtx[8], m9 = mtx[9];
    var m10 = mtx[10], m11 = mtx[11], m12 = mtx[12], m13 = mtx[13], m14 = mtx[14];
    var m15 = mtx[15], m16 = mtx[16], m17 = mtx[17], m18 = mtx[18], m19 = mtx[19];
    for (var i = 0;i < l;i += 4) {
      r = data[i];
      g = data[i + 1];
      b = data[i + 2];
      a = data[i + 3];
      data[i] = r * m0 + g * m1 + b * m2 + a * m3 + m4;
      data[i + 1] = r * m5 + g * m6 + b * m7 + a * m8 + m9;
      data[i + 2] = r * m10 + g * m11 + b * m12 + a * m13 + m14;
      data[i + 3] = r * m15 + g * m16 + b * m17 + a * m18 + m19;
    }
    return true;
  };
  createjs.ColorMatrixFilter = createjs.promote(ColorMatrixFilter, "Filter");
})();
this.createjs = this.createjs || {};
(function() {
  function Touch() {
    throw "Touch cannot be instantiated";
  }
  Touch.isSupported = function() {
    return !!("ontouchstart" in window || window.navigator["msPointerEnabled"] && window.navigator["msMaxTouchPoints"] > 0 || window.navigator["pointerEnabled"] && window.navigator["maxTouchPoints"] > 0);
  };
  Touch.enable = function(stage, singleTouch, allowDefault) {
    if (!stage || !stage.canvas || !Touch.isSupported()) {
      return false;
    }
    if (stage.__touch) {
      return true;
    }
    stage.__touch = {pointers:{}, multitouch:!singleTouch, preventDefault:!allowDefault, count:0};
    if ("ontouchstart" in window) {
      Touch._IOS_enable(stage);
    } else {
      if (window.navigator["msPointerEnabled"] || window.navigator["pointerEnabled"]) {
        Touch._IE_enable(stage);
      }
    }
    return true;
  };
  Touch.disable = function(stage) {
    if (!stage) {
      return;
    }
    if ("ontouchstart" in window) {
      Touch._IOS_disable(stage);
    } else {
      if (window.navigator["msPointerEnabled"] || window.navigator["pointerEnabled"]) {
        Touch._IE_disable(stage);
      }
    }
    delete stage.__touch;
  };
  Touch._IOS_enable = function(stage) {
    var canvas = stage.canvas;
    var f = stage.__touch.f = function(e) {
      Touch._IOS_handleEvent(stage, e);
    };
    canvas.addEventListener("touchstart", f, false);
    canvas.addEventListener("touchmove", f, false);
    canvas.addEventListener("touchend", f, false);
    canvas.addEventListener("touchcancel", f, false);
  };
  Touch._IOS_disable = function(stage) {
    var canvas = stage.canvas;
    if (!canvas) {
      return;
    }
    var f = stage.__touch.f;
    canvas.removeEventListener("touchstart", f, false);
    canvas.removeEventListener("touchmove", f, false);
    canvas.removeEventListener("touchend", f, false);
    canvas.removeEventListener("touchcancel", f, false);
  };
  Touch._IOS_handleEvent = function(stage, e) {
    if (!stage) {
      return;
    }
    if (stage.__touch.preventDefault) {
      e.preventDefault && e.preventDefault();
    }
    var touches = e.changedTouches;
    var type = e.type;
    for (var i = 0, l = touches.length;i < l;i++) {
      var touch = touches[i];
      var id = touch.identifier;
      if (touch.target != stage.canvas) {
        continue;
      }
      if (type == "touchstart") {
        this._handleStart(stage, id, e, touch.pageX, touch.pageY);
      } else {
        if (type == "touchmove") {
          this._handleMove(stage, id, e, touch.pageX, touch.pageY);
        } else {
          if (type == "touchend" || type == "touchcancel") {
            this._handleEnd(stage, id, e);
          }
        }
      }
    }
  };
  Touch._IE_enable = function(stage) {
    var canvas = stage.canvas;
    var f = stage.__touch.f = function(e) {
      Touch._IE_handleEvent(stage, e);
    };
    if (window.navigator["pointerEnabled"] === undefined) {
      canvas.addEventListener("MSPointerDown", f, false);
      window.addEventListener("MSPointerMove", f, false);
      window.addEventListener("MSPointerUp", f, false);
      window.addEventListener("MSPointerCancel", f, false);
      if (stage.__touch.preventDefault) {
        canvas.style.msTouchAction = "none";
      }
    } else {
      canvas.addEventListener("pointerdown", f, false);
      window.addEventListener("pointermove", f, false);
      window.addEventListener("pointerup", f, false);
      window.addEventListener("pointercancel", f, false);
      if (stage.__touch.preventDefault) {
        canvas.style.touchAction = "none";
      }
    }
    stage.__touch.activeIDs = {};
  };
  Touch._IE_disable = function(stage) {
    var f = stage.__touch.f;
    if (window.navigator["pointerEnabled"] === undefined) {
      window.removeEventListener("MSPointerMove", f, false);
      window.removeEventListener("MSPointerUp", f, false);
      window.removeEventListener("MSPointerCancel", f, false);
      if (stage.canvas) {
        stage.canvas.removeEventListener("MSPointerDown", f, false);
      }
    } else {
      window.removeEventListener("pointermove", f, false);
      window.removeEventListener("pointerup", f, false);
      window.removeEventListener("pointercancel", f, false);
      if (stage.canvas) {
        stage.canvas.removeEventListener("pointerdown", f, false);
      }
    }
  };
  Touch._IE_handleEvent = function(stage, e) {
    if (!stage) {
      return;
    }
    if (stage.__touch.preventDefault) {
      e.preventDefault && e.preventDefault();
    }
    var type = e.type;
    var id = e.pointerId;
    var ids = stage.__touch.activeIDs;
    if (type == "MSPointerDown" || type == "pointerdown") {
      if (e.srcElement != stage.canvas) {
        return;
      }
      ids[id] = true;
      this._handleStart(stage, id, e, e.pageX, e.pageY);
    } else {
      if (ids[id]) {
        if (type == "MSPointerMove" || type == "pointermove") {
          this._handleMove(stage, id, e, e.pageX, e.pageY);
        } else {
          if (type == "MSPointerUp" || type == "MSPointerCancel" || type == "pointerup" || type == "pointercancel") {
            delete ids[id];
            this._handleEnd(stage, id, e);
          }
        }
      }
    }
  };
  Touch._handleStart = function(stage, id, e, x, y) {
    var props = stage.__touch;
    if (!props.multitouch && props.count) {
      return;
    }
    var ids = props.pointers;
    if (ids[id]) {
      return;
    }
    ids[id] = true;
    props.count++;
    stage._handlePointerDown(id, e, x, y);
  };
  Touch._handleMove = function(stage, id, e, x, y) {
    if (!stage.__touch.pointers[id]) {
      return;
    }
    stage._handlePointerMove(id, e, x, y);
  };
  Touch._handleEnd = function(stage, id, e) {
    var props = stage.__touch;
    var ids = props.pointers;
    if (!ids[id]) {
      return;
    }
    props.count--;
    stage._handlePointerUp(id, e, true);
    delete ids[id];
  };
  createjs.Touch = Touch;
})();
this.createjs = this.createjs || {};
(function() {
  var s = createjs.EaselJS = createjs.EaselJS || {};
  s.version = "NEXT";
  s.buildDate = "Wed, 25 Nov 2015 15:53:50 GMT";
})();
(function(window) {
  window.hideAddressbar = function(elem) {
    elem = typeof elem === "string" ? document.querySelector(elem) : elem;
    var ua = navigator.userAgent, iphone = ~ua.indexOf("iPhone") || ~ua.indexOf("iPod"), ipad = ~ua.indexOf("iPad"), ios = iphone || ipad, android = ~ua.indexOf("Android"), fullscreen = window.navigator.standalone, lastWidth = 0;
    if (!(ios || android) || !elem) {
      return;
    }
    if (android) {
      window.addEventListener("scroll", function() {
        elem.style.height = window.innerHeight + "px";
      }, false);
    }
    var setupScroll = function() {
      var height = 0;
      if (ios) {
        height = document.documentElement.clientHeight;
        if (iphone && !fullscreen) {
          height += 60;
        }
      } else {
        if (android) {
          height = window.innerHeight + 56;
        }
      }
      elem.style.height = height + "px";
      setTimeout(scrollTo, 0, 0, 1);
    };
    (function resize() {
      var pageWidth = elem.offsetWidth;
      if (lastWidth === pageWidth) {
        return;
      }
      lastWidth = pageWidth;
      setupScroll();
      window.addEventListener("resize", resize, false);
      console.log("resizefunt");
    })();
  };
})(this);
!function(e) {
  if ("object" == typeof exports && "undefined" != typeof module) {
    module.exports = e();
  } else {
    if ("function" == typeof define && define.amd) {
      define([], e);
    } else {
      var f;
      "undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.keyboardJS = e();
    }
  }
}(function() {
  var define, module, exports;
  return function e(t, n, r) {
    function s(o, u) {
      if (!n[o]) {
        if (!t[o]) {
          var a = typeof require == "function" && require;
          if (!u && a) {
            return a(o, !0);
          }
          if (i) {
            return i(o, !0);
          }
          var f = new Error("Cannot find module '" + o + "'");
          throw f.code = "MODULE_NOT_FOUND", f;
        }
        var l = n[o] = {exports:{}};
        t[o][0].call(l.exports, function(e) {
          var n = t[o][1][e];
          return s(n ? n : e);
        }, l, l.exports, e, t, n, r);
      }
      return n[o].exports;
    }
    var i = typeof require == "function" && require;
    for (var o = 0;o < r.length;o++) {
      s(r[o]);
    }
    return s;
  }({1:[function(require, module, exports) {
    var Keyboard = require("./lib/keyboard");
    var Locale = require("./lib/locale");
    var KeyCombo = require("./lib/key-combo");
    var keyboard = new Keyboard;
    keyboard.setLocale("us", require("./locales/us"));
    exports = module.exports = keyboard;
    exports.Keyboard = Keyboard;
    exports.Locale = Locale;
    exports.KeyCombo = KeyCombo;
  }, {"./lib/key-combo":2, "./lib/keyboard":3, "./lib/locale":4, "./locales/us":5}], 2:[function(require, module, exports) {
    function KeyCombo(keyComboStr) {
      this.sourceStr = keyComboStr;
      this.subCombos = KeyCombo.parseComboStr(keyComboStr);
      this.keyNames = this.subCombos.reduce(function(memo, nextSubCombo) {
        return memo.concat(nextSubCombo);
      });
    }
    KeyCombo.sequenceDeliminator = ">>";
    KeyCombo.comboDeliminator = ">";
    KeyCombo.keyDeliminator = "+";
    KeyCombo.parseComboStr = function(keyComboStr) {
      var subComboStrs = KeyCombo._splitStr(keyComboStr, KeyCombo.comboDeliminator);
      var combo = [];
      for (var i = 0;i < subComboStrs.length;i += 1) {
        combo.push(KeyCombo._splitStr(subComboStrs[i], KeyCombo.keyDeliminator));
      }
      return combo;
    };
    KeyCombo.prototype.check = function(pressedKeyNames) {
      var startingKeyNameIndex = 0;
      for (var i = 0;i < this.subCombos.length;i += 1) {
        startingKeyNameIndex = this._checkSubCombo(this.subCombos[i], startingKeyNameIndex, pressedKeyNames);
        if (startingKeyNameIndex === -1) {
          return false;
        }
      }
      return true;
    };
    KeyCombo.prototype.isEqual = function(otherKeyCombo) {
      if (!otherKeyCombo || typeof otherKeyCombo !== "string" && typeof otherKeyCombo !== "object") {
        return false;
      }
      if (typeof otherKeyCombo === "string") {
        otherKeyCombo = new KeyCombo(otherKeyCombo);
      }
      if (this.subCombos.length !== otherKeyCombo.subCombos.length) {
        return false;
      }
      for (var i = 0;i < this.subCombos.length;i += 1) {
        if (this.subCombos[i].length !== otherKeyCombo.subCombos[i].length) {
          return false;
        }
      }
      for (var i = 0;i < this.subCombos.length;i += 1) {
        var subCombo = this.subCombos[i];
        var otherSubCombo = otherKeyCombo.subCombos[i].slice(0);
        for (var j = 0;j < subCombo.length;j += 1) {
          var keyName = subCombo[j];
          var index = otherSubCombo.indexOf(keyName);
          if (index > -1) {
            otherSubCombo.splice(index, 1);
          }
        }
        if (otherSubCombo.length !== 0) {
          return false;
        }
      }
      return true;
    };
    KeyCombo._splitStr = function(str, deliminator) {
      var s = str;
      var d = deliminator;
      var c = "";
      var ca = [];
      for (var ci = 0;ci < s.length;ci += 1) {
        if (ci > 0 && s[ci] === d && s[ci - 1] !== "\\") {
          ca.push(c.trim());
          c = "";
          ci += 1;
        }
        c += s[ci];
      }
      if (c) {
        ca.push(c.trim());
      }
      return ca;
    };
    KeyCombo.prototype._checkSubCombo = function(subCombo, startingKeyNameIndex, pressedKeyNames) {
      subCombo = subCombo.slice(0);
      pressedKeyNames = pressedKeyNames.slice(startingKeyNameIndex);
      var endIndex = startingKeyNameIndex;
      for (var i = 0;i < subCombo.length;i += 1) {
        var keyName = subCombo[i];
        if (keyName[0] === "\\") {
          var escapedKeyName = keyName.slice(1);
          if (escapedKeyName === KeyCombo.comboDeliminator || escapedKeyName === KeyCombo.keyDeliminator) {
            keyName = escapedKeyName;
          }
        }
        var index = pressedKeyNames.indexOf(keyName);
        if (index > -1) {
          subCombo.splice(i, 1);
          i -= 1;
          if (index > endIndex) {
            endIndex = index;
          }
          if (subCombo.length === 0) {
            return endIndex;
          }
        }
      }
      return -1;
    };
    module.exports = KeyCombo;
  }, {}], 3:[function(require, module, exports) {
    (function(global) {
      var Locale = require("./locale");
      var KeyCombo = require("./key-combo");
      function Keyboard(targetWindow, targetElement, platform, userAgent) {
        this._locale = null;
        this._currentContext = null;
        this._contexts = {};
        this._listeners = [];
        this._appliedListeners = [];
        this._locales = {};
        this._targetElement = null;
        this._targetWindow = null;
        this._targetPlatform = "";
        this._targetUserAgent = "";
        this._isModernBrowser = false;
        this._targetKeyDownBinding = null;
        this._targetKeyUpBinding = null;
        this._targetResetBinding = null;
        this._paused = false;
        this.setContext("global");
        this.watch(targetWindow, targetElement, platform, userAgent);
      }
      Keyboard.prototype.setLocale = function(localeName, localeBuilder) {
        var locale = null;
        if (typeof localeName === "string") {
          if (localeBuilder) {
            locale = new Locale(localeName);
            localeBuilder(locale, this._targetPlatform, this._targetUserAgent);
          } else {
            locale = this._locales[localeName] || null;
          }
        } else {
          locale = localeName;
          localeName = locale._localeName;
        }
        this._locale = locale;
        this._locales[localeName] = locale;
        if (locale) {
          this._locale.pressedKeys = locale.pressedKeys;
        }
      };
      Keyboard.prototype.getLocale = function(localName) {
        localName || (localName = this._locale.localeName);
        return this._locales[localName] || null;
      };
      Keyboard.prototype.bind = function(keyComboStr, pressHandler, releaseHandler, preventRepeatByDefault) {
        if (keyComboStr === null || typeof keyComboStr === "function") {
          preventRepeatByDefault = releaseHandler;
          releaseHandler = pressHandler;
          pressHandler = keyComboStr;
          keyComboStr = null;
        }
        if (keyComboStr && typeof keyComboStr === "object" && typeof keyComboStr.length === "number") {
          for (var i = 0;i < keyComboStr.length;i += 1) {
            this.bind(keyComboStr[i], pressHandler, releaseHandler);
          }
          return;
        }
        this._listeners.push({keyCombo:keyComboStr ? new KeyCombo(keyComboStr) : null, pressHandler:pressHandler || null, releaseHandler:releaseHandler || null, preventRepeat:preventRepeatByDefault || false, preventRepeatByDefault:preventRepeatByDefault || false});
      };
      Keyboard.prototype.addListener = Keyboard.prototype.bind;
      Keyboard.prototype.on = Keyboard.prototype.bind;
      Keyboard.prototype.unbind = function(keyComboStr, pressHandler, releaseHandler) {
        if (keyComboStr === null || typeof keyComboStr === "function") {
          releaseHandler = pressHandler;
          pressHandler = keyComboStr;
          keyComboStr = null;
        }
        if (keyComboStr && typeof keyComboStr === "object" && typeof keyComboStr.length === "number") {
          for (var i = 0;i < keyComboStr.length;i += 1) {
            this.unbind(keyComboStr[i], pressHandler, releaseHandler);
          }
          return;
        }
        for (var i = 0;i < this._listeners.length;i += 1) {
          var listener = this._listeners[i];
          var comboMatches = !keyComboStr && !listener.keyCombo || listener.keyCombo && listener.keyCombo.isEqual(keyComboStr);
          var pressHandlerMatches = !pressHandler && !releaseHandler || !pressHandler && !listener.pressHandler || pressHandler === listener.pressHandler;
          var releaseHandlerMatches = !pressHandler && !releaseHandler || !releaseHandler && !listener.releaseHandler || releaseHandler === listener.releaseHandler;
          if (comboMatches && pressHandlerMatches && releaseHandlerMatches) {
            this._listeners.splice(i, 1);
            i -= 1;
          }
        }
      };
      Keyboard.prototype.removeListener = Keyboard.prototype.unbind;
      Keyboard.prototype.off = Keyboard.prototype.unbind;
      Keyboard.prototype.setContext = function(contextName) {
        if (this._locale) {
          this.releaseAllKeys();
        }
        if (!this._contexts[contextName]) {
          this._contexts[contextName] = [];
        }
        this._listeners = this._contexts[contextName];
        this._currentContext = contextName;
      };
      Keyboard.prototype.getContext = function() {
        return this._currentContext;
      };
      Keyboard.prototype.withContext = function(contextName, callback) {
        var previousContextName = this.getContext();
        this.setContext(contextName);
        callback();
        this.setContext(previousContextName);
      };
      Keyboard.prototype.watch = function(targetWindow, targetElement, targetPlatform, targetUserAgent) {
        var _this = this;
        this.stop();
        if (!targetWindow) {
          if (!global.addEventListener && !global.attachEvent) {
            throw new Error("Cannot find global functions addEventListener or attachEvent.");
          }
          targetWindow = global;
        }
        if (typeof targetWindow.nodeType === "number") {
          targetUserAgent = targetPlatform;
          targetPlatform = targetElement;
          targetElement = targetWindow;
          targetWindow = global;
        }
        if (!targetWindow.addEventListener && !targetWindow.attachEvent) {
          throw new Error("Cannot find addEventListener or attachEvent methods on targetWindow.");
        }
        this._isModernBrowser = !!targetWindow.addEventListener;
        var userAgent = targetWindow.navigator && targetWindow.navigator.userAgent || "";
        var platform = targetWindow.navigator && targetWindow.navigator.platform || "";
        targetElement && targetElement !== null || (targetElement = targetWindow.document);
        targetPlatform && targetPlatform !== null || (targetPlatform = platform);
        targetUserAgent && targetUserAgent !== null || (targetUserAgent = userAgent);
        this._targetKeyDownBinding = function(event) {
          _this.pressKey(event.keyCode, event);
        };
        this._targetKeyUpBinding = function(event) {
          _this.releaseKey(event.keyCode, event);
        };
        this._targetResetBinding = function(event) {
          _this.releaseAllKeys(event);
        };
        this._bindEvent(targetElement, "keydown", this._targetKeyDownBinding);
        this._bindEvent(targetElement, "keyup", this._targetKeyUpBinding);
        this._bindEvent(targetWindow, "focus", this._targetResetBinding);
        this._bindEvent(targetWindow, "blur", this._targetResetBinding);
        this._targetElement = targetElement;
        this._targetWindow = targetWindow;
        this._targetPlatform = targetPlatform;
        this._targetUserAgent = targetUserAgent;
      };
      Keyboard.prototype.stop = function() {
        var _this = this;
        if (!this._targetElement || !this._targetWindow) {
          return;
        }
        this._unbindEvent(this._targetElement, "keydown", this._targetKeyDownBinding);
        this._unbindEvent(this._targetElement, "keyup", this._targetKeyUpBinding);
        this._unbindEvent(this._targetWindow, "focus", this._targetResetBinding);
        this._unbindEvent(this._targetWindow, "blur", this._targetResetBinding);
        this._targetWindow = null;
        this._targetElement = null;
      };
      Keyboard.prototype.pressKey = function(keyCode, event) {
        if (this._paused) {
          return;
        }
        if (!this._locale) {
          throw new Error("Locale not set");
        }
        this._locale.pressKey(keyCode);
        this._applyBindings(event);
      };
      Keyboard.prototype.releaseKey = function(keyCode, event) {
        if (this._paused) {
          return;
        }
        if (!this._locale) {
          throw new Error("Locale not set");
        }
        this._locale.releaseKey(keyCode);
        this._clearBindings(event);
      };
      Keyboard.prototype.releaseAllKeys = function(event) {
        if (this._paused) {
          return;
        }
        if (!this._locale) {
          throw new Error("Locale not set");
        }
        this._locale.pressedKeys.length = 0;
        this._clearBindings(event);
      };
      Keyboard.prototype.pause = function() {
        if (this._paused) {
          return;
        }
        if (this._locale) {
          this.releaseAllKeys();
        }
        this._paused = true;
      };
      Keyboard.prototype.resume = function() {
        this._paused = false;
      };
      Keyboard.prototype.reset = function() {
        this.releaseAllKeys();
        this._listeners.length = 0;
      };
      Keyboard.prototype._bindEvent = function(targetElement, eventName, handler) {
        return this._isModernBrowser ? targetElement.addEventListener(eventName, handler, false) : targetElement.attachEvent("on" + eventName, handler);
      };
      Keyboard.prototype._unbindEvent = function(targetElement, eventName, handler) {
        return this._isModernBrowser ? targetElement.removeEventListener(eventName, handler, false) : targetElement.detachEvent("on" + eventName, handler);
      };
      Keyboard.prototype._getGroupedListeners = function() {
        var listenerGroups = [];
        var listenerGroupMap = [];
        var listeners = this._listeners;
        if (this._currentContext !== "global") {
          listeners = [].concat(listeners, this._contexts.global);
        }
        listeners.sort(function(a, b) {
          return (b.keyCombo ? b.keyCombo.keyNames.length : 0) - (a.keyCombo ? a.keyCombo.keyNames.length : 0);
        }).forEach(function(l) {
          var mapIndex = -1;
          for (var i = 0;i < listenerGroupMap.length;i += 1) {
            if (listenerGroupMap[i] === null && l.keyCombo === null || listenerGroupMap[i] !== null && listenerGroupMap[i].isEqual(l.keyCombo)) {
              mapIndex = i;
            }
          }
          if (mapIndex === -1) {
            mapIndex = listenerGroupMap.length;
            listenerGroupMap.push(l.keyCombo);
          }
          if (!listenerGroups[mapIndex]) {
            listenerGroups[mapIndex] = [];
          }
          listenerGroups[mapIndex].push(l);
        });
        return listenerGroups;
      };
      Keyboard.prototype._applyBindings = function(event) {
        var preventRepeat = false;
        event || (event = {});
        event.preventRepeat = function() {
          preventRepeat = true;
        };
        event.pressedKeys = this._locale.pressedKeys.slice(0);
        var pressedKeys = this._locale.pressedKeys.slice(0);
        var listenerGroups = this._getGroupedListeners();
        for (var i = 0;i < listenerGroups.length;i += 1) {
          var listeners = listenerGroups[i];
          var keyCombo = listeners[0].keyCombo;
          if (keyCombo === null || keyCombo.check(pressedKeys)) {
            for (var j = 0;j < listeners.length;j += 1) {
              var listener = listeners[j];
              if (keyCombo === null) {
                listener = {keyCombo:new KeyCombo(pressedKeys.join("+")), pressHandler:listener.pressHandler, releaseHandler:listener.releaseHandler, preventRepeat:listener.preventRepeat, preventRepeatByDefault:listener.preventRepeatByDefault};
              }
              if (listener.pressHandler && !listener.preventRepeat) {
                listener.pressHandler.call(this, event);
                if (preventRepeat) {
                  listener.preventRepeat = preventRepeat;
                  preventRepeat = false;
                }
              }
              if (listener.releaseHandler && this._appliedListeners.indexOf(listener) === -1) {
                this._appliedListeners.push(listener);
              }
            }
            if (keyCombo) {
              for (var j = 0;j < keyCombo.keyNames.length;j += 1) {
                var index = pressedKeys.indexOf(keyCombo.keyNames[j]);
                if (index !== -1) {
                  pressedKeys.splice(index, 1);
                  j -= 1;
                }
              }
            }
          }
        }
      };
      Keyboard.prototype._clearBindings = function(event) {
        event || (event = {});
        for (var i = 0;i < this._appliedListeners.length;i += 1) {
          var listener = this._appliedListeners[i];
          var keyCombo = listener.keyCombo;
          if (keyCombo === null || !keyCombo.check(this._locale.pressedKeys)) {
            listener.preventRepeat = listener.preventRepeatByDefault;
            listener.releaseHandler.call(this, event);
            this._appliedListeners.splice(i, 1);
            i -= 1;
          }
        }
      };
      module.exports = Keyboard;
    }).call(this, typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});
  }, {"./key-combo":2, "./locale":4}], 4:[function(require, module, exports) {
    var KeyCombo = require("./key-combo");
    function Locale(name) {
      this.localeName = name;
      this.pressedKeys = [];
      this._appliedMacros = [];
      this._keyMap = {};
      this._killKeyCodes = [];
      this._macros = [];
    }
    Locale.prototype.bindKeyCode = function(keyCode, keyNames) {
      if (typeof keyNames === "string") {
        keyNames = [keyNames];
      }
      this._keyMap[keyCode] = keyNames;
    };
    Locale.prototype.bindMacro = function(keyComboStr, keyNames) {
      if (typeof keyNames === "string") {
        keyNames = [keyNames];
      }
      var handler = null;
      if (typeof keyNames === "function") {
        handler = keyNames;
        keyNames = null;
      }
      var macro = {keyCombo:new KeyCombo(keyComboStr), keyNames:keyNames, handler:handler};
      this._macros.push(macro);
    };
    Locale.prototype.getKeyCodes = function(keyName) {
      var keyCodes = [];
      for (var keyCode in this._keyMap) {
        var index = this._keyMap[keyCode].indexOf(keyName);
        if (index > -1) {
          keyCodes.push(keyCode | 0);
        }
      }
      return keyCodes;
    };
    Locale.prototype.getKeyNames = function(keyCode) {
      return this._keyMap[keyCode] || [];
    };
    Locale.prototype.setKillKey = function(keyCode) {
      if (typeof keyCode === "string") {
        var keyCodes = this.getKeyCodes(keyCode);
        for (var i = 0;i < keyCodes.length;i += 1) {
          this.setKillKey(keyCodes[i]);
        }
        return;
      }
      this._killKeyCodes.push(keyCode);
    };
    Locale.prototype.pressKey = function(keyCode) {
      if (typeof keyCode === "string") {
        var keyCodes = this.getKeyCodes(keyCode);
        for (var i = 0;i < keyCodes.length;i += 1) {
          this.pressKey(keyCodes[i]);
        }
        return;
      }
      var keyNames = this.getKeyNames(keyCode);
      for (var i = 0;i < keyNames.length;i += 1) {
        if (this.pressedKeys.indexOf(keyNames[i]) === -1) {
          this.pressedKeys.push(keyNames[i]);
        }
      }
      this._applyMacros();
    };
    Locale.prototype.releaseKey = function(keyCode) {
      if (typeof keyCode === "string") {
        var keyCodes = this.getKeyCodes(keyCode);
        for (var i = 0;i < keyCodes.length;i += 1) {
          this.releaseKey(keyCodes[i]);
        }
      } else {
        var keyNames = this.getKeyNames(keyCode);
        var killKeyCodeIndex = this._killKeyCodes.indexOf(keyCode);
        if (killKeyCodeIndex > -1) {
          this.pressedKeys.length = 0;
        } else {
          for (var i = 0;i < keyNames.length;i += 1) {
            var index = this.pressedKeys.indexOf(keyNames[i]);
            if (index > -1) {
              this.pressedKeys.splice(index, 1);
            }
          }
        }
        this._clearMacros();
      }
    };
    Locale.prototype._applyMacros = function() {
      var macros = this._macros.slice(0);
      for (var i = 0;i < macros.length;i += 1) {
        var macro = macros[i];
        if (macro.keyCombo.check(this.pressedKeys)) {
          if (macro.handler) {
            macro.keyNames = macro.handler(this.pressedKeys);
          }
          for (var j = 0;j < macro.keyNames.length;j += 1) {
            if (this.pressedKeys.indexOf(macro.keyNames[j]) === -1) {
              this.pressedKeys.push(macro.keyNames[j]);
            }
          }
          this._appliedMacros.push(macro);
        }
      }
    };
    Locale.prototype._clearMacros = function() {
      for (var i = 0;i < this._appliedMacros.length;i += 1) {
        var macro = this._appliedMacros[i];
        if (!macro.keyCombo.check(this.pressedKeys)) {
          for (var j = 0;j < macro.keyNames.length;j += 1) {
            var index = this.pressedKeys.indexOf(macro.keyNames[j]);
            if (index > -1) {
              this.pressedKeys.splice(index, 1);
            }
          }
          if (macro.handler) {
            macro.keyNames = null;
          }
          this._appliedMacros.splice(i, 1);
          i -= 1;
        }
      }
    };
    module.exports = Locale;
  }, {"./key-combo":2}], 5:[function(require, module, exports) {
    module.exports = function(locale, platform, userAgent) {
      locale.bindKeyCode(3, ["cancel"]);
      locale.bindKeyCode(8, ["backspace"]);
      locale.bindKeyCode(9, ["tab"]);
      locale.bindKeyCode(12, ["clear"]);
      locale.bindKeyCode(13, ["enter"]);
      locale.bindKeyCode(16, ["shift"]);
      locale.bindKeyCode(17, ["ctrl"]);
      locale.bindKeyCode(18, ["alt", "menu"]);
      locale.bindKeyCode(19, ["pause", "break"]);
      locale.bindKeyCode(20, ["capslock"]);
      locale.bindKeyCode(27, ["escape", "esc"]);
      locale.bindKeyCode(32, ["space", "spacebar"]);
      locale.bindKeyCode(33, ["pageup"]);
      locale.bindKeyCode(34, ["pagedown"]);
      locale.bindKeyCode(35, ["end"]);
      locale.bindKeyCode(36, ["home"]);
      locale.bindKeyCode(37, ["left"]);
      locale.bindKeyCode(38, ["up"]);
      locale.bindKeyCode(39, ["right"]);
      locale.bindKeyCode(40, ["down"]);
      locale.bindKeyCode(41, ["select"]);
      locale.bindKeyCode(42, ["printscreen"]);
      locale.bindKeyCode(43, ["execute"]);
      locale.bindKeyCode(44, ["snapshot"]);
      locale.bindKeyCode(45, ["insert", "ins"]);
      locale.bindKeyCode(46, ["delete", "del"]);
      locale.bindKeyCode(47, ["help"]);
      locale.bindKeyCode(145, ["scrolllock", "scroll"]);
      locale.bindKeyCode(187, ["equal", "equalsign", "="]);
      locale.bindKeyCode(188, ["comma", ","]);
      locale.bindKeyCode(190, ["period", "."]);
      locale.bindKeyCode(191, ["slash", "forwardslash", "/"]);
      locale.bindKeyCode(192, ["graveaccent", "`"]);
      locale.bindKeyCode(219, ["openbracket", "["]);
      locale.bindKeyCode(220, ["backslash", "\\"]);
      locale.bindKeyCode(221, ["closebracket", "]"]);
      locale.bindKeyCode(222, ["apostrophe", "'"]);
      locale.bindKeyCode(48, ["zero", "0"]);
      locale.bindKeyCode(49, ["one", "1"]);
      locale.bindKeyCode(50, ["two", "2"]);
      locale.bindKeyCode(51, ["three", "3"]);
      locale.bindKeyCode(52, ["four", "4"]);
      locale.bindKeyCode(53, ["five", "5"]);
      locale.bindKeyCode(54, ["six", "6"]);
      locale.bindKeyCode(55, ["seven", "7"]);
      locale.bindKeyCode(56, ["eight", "8"]);
      locale.bindKeyCode(57, ["nine", "9"]);
      locale.bindKeyCode(96, ["numzero", "num0"]);
      locale.bindKeyCode(97, ["numone", "num1"]);
      locale.bindKeyCode(98, ["numtwo", "num2"]);
      locale.bindKeyCode(99, ["numthree", "num3"]);
      locale.bindKeyCode(100, ["numfour", "num4"]);
      locale.bindKeyCode(101, ["numfive", "num5"]);
      locale.bindKeyCode(102, ["numsix", "num6"]);
      locale.bindKeyCode(103, ["numseven", "num7"]);
      locale.bindKeyCode(104, ["numeight", "num8"]);
      locale.bindKeyCode(105, ["numnine", "num9"]);
      locale.bindKeyCode(106, ["nummultiply", "num*"]);
      locale.bindKeyCode(107, ["numadd", "num+"]);
      locale.bindKeyCode(108, ["numenter"]);
      locale.bindKeyCode(109, ["numsubtract", "num-"]);
      locale.bindKeyCode(110, ["numdecimal", "num."]);
      locale.bindKeyCode(111, ["numdivide", "num/"]);
      locale.bindKeyCode(144, ["numlock", "num"]);
      locale.bindKeyCode(112, ["f1"]);
      locale.bindKeyCode(113, ["f2"]);
      locale.bindKeyCode(114, ["f3"]);
      locale.bindKeyCode(115, ["f4"]);
      locale.bindKeyCode(116, ["f5"]);
      locale.bindKeyCode(117, ["f6"]);
      locale.bindKeyCode(118, ["f7"]);
      locale.bindKeyCode(119, ["f8"]);
      locale.bindKeyCode(120, ["f9"]);
      locale.bindKeyCode(121, ["f10"]);
      locale.bindKeyCode(122, ["f11"]);
      locale.bindKeyCode(123, ["f12"]);
      locale.bindMacro("shift + `", ["tilde", "~"]);
      locale.bindMacro("shift + 1", ["exclamation", "exclamationpoint", "!"]);
      locale.bindMacro("shift + 2", ["at", "@"]);
      locale.bindMacro("shift + 3", ["number", "#"]);
      locale.bindMacro("shift + 4", ["dollar", "dollars", "dollarsign", "$"]);
      locale.bindMacro("shift + 5", ["percent", "%"]);
      locale.bindMacro("shift + 6", ["caret", "^"]);
      locale.bindMacro("shift + 7", ["ampersand", "and", "&"]);
      locale.bindMacro("shift + 8", ["asterisk", "*"]);
      locale.bindMacro("shift + 9", ["openparen", "("]);
      locale.bindMacro("shift + 0", ["closeparen", ")"]);
      locale.bindMacro("shift + -", ["underscore", "_"]);
      locale.bindMacro("shift + =", ["plus", "+"]);
      locale.bindMacro("shift + [", ["opencurlybrace", "opencurlybracket", "{"]);
      locale.bindMacro("shift + ]", ["closecurlybrace", "closecurlybracket", "}"]);
      locale.bindMacro("shift + \\", ["verticalbar", "|"]);
      locale.bindMacro("shift + ;", ["colon", ":"]);
      locale.bindMacro("shift + '", ["quotationmark", "'"]);
      locale.bindMacro("shift + !,", ["openanglebracket", "<"]);
      locale.bindMacro("shift + .", ["closeanglebracket", ">"]);
      locale.bindMacro("shift + /", ["questionmark", "?"]);
      for (var keyCode = 65;keyCode <= 90;keyCode += 1) {
        var keyName = String.fromCharCode(keyCode + 32);
        var capitalKeyName = String.fromCharCode(keyCode);
        locale.bindKeyCode(keyCode, keyName);
        locale.bindMacro("shift + " + keyName, capitalKeyName);
        locale.bindMacro("capslock + " + keyName, capitalKeyName);
      }
      var semicolonKeyCode = userAgent.match("Firefox") ? 59 : 186;
      var dashKeyCode = userAgent.match("Firefox") ? 173 : 189;
      var leftCommandKeyCode;
      var rightCommandKeyCode;
      if (platform.match("Mac") && (userAgent.match("Safari") || userAgent.match("Chrome"))) {
        leftCommandKeyCode = 91;
        rightCommandKeyCode = 93;
      } else {
        if (platform.match("Mac") && userAgent.match("Opera")) {
          leftCommandKeyCode = 17;
          rightCommandKeyCode = 17;
        } else {
          if (platform.match("Mac") && userAgent.match("Firefox")) {
            leftCommandKeyCode = 224;
            rightCommandKeyCode = 224;
          }
        }
      }
      locale.bindKeyCode(semicolonKeyCode, ["semicolon", ";"]);
      locale.bindKeyCode(dashKeyCode, ["dash", "-"]);
      locale.bindKeyCode(leftCommandKeyCode, ["command", "windows", "win", "super", "leftcommand", "leftwindows", "leftwin", "leftsuper"]);
      locale.bindKeyCode(rightCommandKeyCode, ["command", "windows", "win", "super", "rightcommand", "rightwindows", "rightwin", "rightsuper"]);
      locale.setKillKey("command");
    };
  }, {}]}, {}, [1])(1);
});
var LANDSCAPE_MODE = true;
var hideTimer = null;
var Utils = {touchScreen:"ontouchstart" in window, globalScale:1, setCookie:function(name, value) {
  try {
    window.localStorage.setItem(name, value);
  } catch (e) {
    var exp = new Date;
    exp.setDate(exp.getDate() + 365 * 10);
    document.cookie = name + "=" + value + "; expires=" + exp.toUTCString();
  }
}, getCookie:function(name) {
  var ret;
  try {
    ret = window.localStorage.getItem(name);
  } catch (e) {
    var prefix = name + "=";
    var cookieStartIndex = document.cookie.indexOf(prefix);
    if (cookieStartIndex == -1) {
      return null;
    }
    var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length);
    if (cookieEndIndex == -1) {
      cookieEndIndex = document.cookie.length;
    }
    ret = unescape(document.cookie.substring(cookieStartIndex + prefix.length, cookieEndIndex));
  }
  return ret;
}, bindEvent:function(el, eventName, eventHandler) {
  if (el.addEventListener) {
    el.addEventListener(eventName, eventHandler, false);
  } else {
    if (el.attachEvent) {
      el.attachEvent("on" + eventName, eventHandler);
    }
  }
}, getObjectLeft:function(element) {
  var result = element.offsetLeft;
  if (element.offsetParent) {
    result += Utils.getObjectLeft(element.offsetParent);
  }
  return result;
}, getObjectTop:function(element) {
  var result = element.offsetTop;
  if (element.offsetParent) {
    result += Utils.getObjectTop(element.offsetParent);
  }
  return result;
}, parseGet:function() {
  var get = {};
  var s = new String(window.location);
  var p = s.indexOf("?");
  var tmp, params;
  if (p != -1) {
    s = s.substr(p + 1, s.length);
    params = s.split("&");
    for (var i = 0;i < params.length;i++) {
      tmp = params[i].split("=");
      get[tmp[0]] = tmp[1];
    }
  }
  return get;
}, globalPixelScale:1, getMouseCoord:function(event, object) {
  var e = event || window.event;
  if (e.touches) {
    e = e.touches[0];
  }
  if (!e) {
    return {x:0, y:0};
  }
  var x = 0;
  var y = 0;
  var mouseX = 0;
  var mouseY = 0;
  if (object) {
    x = Utils.getObjectLeft(object);
    y = Utils.getObjectTop(object);
  }
  if (e.pageX || e.pageY) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  } else {
    if (e.clientX || e.clientY) {
      mouseX = e.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft) - document.documentElement.clientLeft;
      mouseY = e.clientY + (document.documentElement.scrollTop || document.body.scrollTop) - document.documentElement.clientTop;
    }
  }
  var retX = mouseX - x;
  var retY = mouseY - y;
  return {x:retX, y:retY};
}, extend:function(Child, Parent) {
  var F = function() {
  };
  F.prototype = Parent.prototype;
  Child.prototype = new F;
  Child.prototype.constructor = Child;
  Child.superclass = Parent.prototype;
}, removeFromArray:function(arr, item) {
  var tmp = [];
  for (var i = 0;i < arr.length;i++) {
    if (arr[i] != item) {
      tmp.push(arr[i]);
    }
  }
  return tmp;
}, showLoadProgress:function(val) {
  var scl = Utils.globalScale;
  var s = "Loading: " + val + "%";
  s += "<br><br>";
  s += '<div style="display: block; background: #000; width: ' + val * scl * 2 + "px; height: " + 10 * scl + 'px;">&nbsp;</div>';
  document.getElementById("progress").innerHTML = s;
}, hideAddressBarLock:false, mobileHideAddressBar:function() {
  if (Utils.hideAddressBarLock) {
    return;
  }
  window.scrollTo(1, 0);
  hideTimer = null;
  console.log("Hide AddressBar");
}, mobileCheckIphone4:function() {
  if (window.devicePixelRatio) {
    if (navigator.userAgent.indexOf("iPhone") != -1 || navigator.userAgent.indexOf("iPad") != -1 && window.devicePixelRatio == 2) {
      return true;
    }
  }
  return false;
}, mobileCheckBrokenGalaxyPhones:function() {
  if (window.devicePixelRatio) {
    if (navigator.userAgent.indexOf("GT-I9300") != -1 || navigator.userAgent.indexOf("GT-I8190") != -1 || navigator.userAgent.indexOf("Android 4.") != -1) {
      return true;
    }
  }
  return false;
}, checkSpilgamesEnvironment:function() {
  return typeof ExternalAPI != "undefined" && ExternalAPI.type == "Spilgames" && ExternalAPI.check();
}, mobileCorrectPixelRatio:function() {
  var meta = document.createElement("meta");
  meta.name = "viewport";
  var content = "target-densitydpi=device-dpi, user-scalable=0";
  if (false) {
    if (window.devicePixelRatio > 1) {
      content += ", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5";
    } else {
      content += ", initial-scale=1, maximum-scale=1, minimum-scale=1";
    }
  } else {
    if (Utils.mobileCheckIphone4()) {
      content += ", initial-scale=0.5, maximum-scale=0.5, minimum-scale=0.5";
    } else {
      content += ", initial-scale=1, maximum-scale=1, minimum-scale=1";
    }
  }
  meta.content = content;
  document.getElementsByTagName("head")[0].appendChild(meta);
}, getMobileScreenResolution:function(landscape) {
  var scale = 1;
  var w = 0;
  var h = 0;
  var scales = [{scale:1, width:320, height:480}, {scale:1.5, width:480, height:720}, {scale:2, width:640, height:960}];
  var container = {width:0, height:0};
  var prop = "";
  if (Utils.touchScreen) {
    container.width = Math.min(window.innerWidth, window.innerHeight);
    container.height = Math.max(window.innerWidth, window.innerHeight);
    prop = "height";
  } else {
    container.width = window.innerWidth;
    container.height = window.innerHeight;
    prop = "height";
  }
  var min = Number.MAX_VALUE;
  for (var i = 0;i < scales.length;i++) {
    var diff = Math.abs(container[prop] - scales[i][prop]);
    if (min > diff) {
      min = diff;
      scale = scales[i].scale;
    }
  }
  return Utils.getScaleScreenResolution(scale, landscape);
}, getScaleScreenResolution:function(scale, landscape) {
  var w, h;
  w = Math.round(320 * scale);
  h = Math.round(480 * scale);
  if (landscape) {
    var tmp = w;
    w = h;
    h = tmp;
  }
  return {width:w, height:h, scale:scale};
}, imagesRoot:"images", initialResolution:{width:320, height:480, scale:1}, createLayout:function(container, resolution, debug, ignoreCanvas) {
  var scl = Utils.globalScale;
  Utils.initialResolution = resolution;
  var height = window.innerHeight;
  if ("orientation" in window) {
    height = 2048;
  } else {
    document.body.style.overflow = "hidden";
  }
  var s = "";
  s += '<div id="progress_container" align="center" style="width: 100%; height: ' + height + 'px; display: block; width: 100%; position: absolute; left: 0px; top: 0px;">';
  s += '<table cellspacing="0" cellpadding="0"><tr><td id="progress" align="center" valign="middle" style="width: ' + resolution.width + "px; height: " + resolution.height + "px; color: #000; background: #fff; font-weight: bold; font-family: Verdana; font-size: " + 12 * scl + 'px; vertical-align: middle;"></td></tr></table>';
  s += "</div>";
  s += '<div id="screen_background_container" align="center" style="width: 100%; height: ' + height + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 2;">';
  s += '<div id="screen_background_wrapper" style="width: ' + resolution.width + "px; height: " + resolution.height + 'px; overflow: hidden; position: relative;">';
  if (!ignoreCanvas) {
    s += '<canvas id="screen_background" width="' + resolution.width + '" height="' + resolution.height + '"></canvas>';
  }
  s += "</div>";
  s += "</div>";
  s += '<div id="screen_container" align="center" style="width: 100%; height: ' + height + 'px; position: absolute; left: 0px; top: 0px; display: none; z-index: 3;">';
  s += '<div id="screen_wrapper" width="' + resolution.width + '" height="' + resolution.height + '" style="width: ' + resolution.width + "px; height: " + resolution.height + 'px; overflow: hidden; position: relative;">';
  if (!ignoreCanvas) {
    s += '<canvas id="screen" style="position: absolute; left: 0px; top: 0px; z-index: 1000000;" width="' + resolution.width + '" height="' + resolution.height + '">You browser does not support this application :(</canvas>';
  }
  s += "</div>";
  s += "</div>";
  container.innerHTML = s;
  var p = document.createElement("div");
  p.setAttribute("id", "p2l_container");
  p.setAttribute("align", "center");
  var w = resolution.width;
  p.setAttribute("style", "width: 100%; height: " + height + "px; position: absolute; left: 0px; top: 0px; display: none; z-index: 1000; background: #fff;");
  p.innerHTML = '<img id="p2l" src="' + Utils.imagesRoot + '/p2l.jpg" style="padding-top: ' + (w - 240) / 2 + 'px" />';
  document.body.appendChild(p);
}, preventEvent:function(e) {
  e.preventDefault();
  e.stopPropagation();
  e.cancelBubble = true;
  e.returnValue = false;
  return false;
}, addMobileListeners:function(landscape) {
  Utils.bindEvent(window, "scroll", function(e) {
    hideTimer = setTimeout(Utils.mobileHideAddressBar, 300);
    console.log("scroll!!");
  });
  setInterval("Utils.checkOrientation(" + (landscape ? "true" : "false") + ")", 500);
  hideTimer = setTimeout(Utils.mobileHideAddressBar, 500);
}, storeOrient:null, checkOrientation:function(landscape) {
  if (!Utils.touchScreen) {
    return;
  }
  if (!document.getElementById("screen_container")) {
    return;
  }
  var getParams = Utils.parseGet();
  if (getParams.nocheckorient == 1) {
    return;
  }
  var orient = false;
  if (window == window.parent) {
    orient = window.innerWidth > window.innerHeight;
  } else {
    var longSide = Math.max(screen.width, screen.height);
    var shortSide = Math.min(screen.width, screen.height);
    var lc = Math.abs(window.innerWidth - longSide);
    var sc = Math.abs(window.innerWidth - shortSide);
    orient = lc < sc;
  }
  if (Utils.storeOrient === orient) {
    return;
  }
  Utils.storeOrient = orient;
  var ok = orient == landscape;
  if (!ok) {
    Utils.dispatchEvent("lockscreen");
    document.getElementById("p2l_container").style.display = "block";
    document.getElementById("screen_background_container").style.display = "none";
    document.getElementById("screen_container").style.display = "none";
  } else {
    Utils.dispatchEvent("unlockscreen");
    document.getElementById("p2l_container").style.display = "none";
    document.getElementById("screen_background_container").style.display = "block";
    document.getElementById("screen_container").style.display = "block";
  }
  if (Utils.checkSpilgamesEnvironment()) {
    document.getElementById("p2l_container").style.display = "none";
  }
  setTimeout(Utils.mobileHideAddressBar, 50);
  setTimeout(Utils.fitLayoutToScreen, 100);
}, fitLayoutTimer:null, addFitLayoutListeners:function() {
  Utils.fitLayoutTimer = setInterval(Utils.fitLayoutToScreen, 500);
}, removeFitLayoutListeners:function() {
  clearInterval(Utils.fitLayoutTimer);
}, fitLayoutLock:false, fitLayoutCorrectHeight:0, fitLayoutToScreen:function(container) {
  if (Utils.fitLayoutLock) {
    return;
  }
  var p, s, width, height;
  if (typeof container != "object" || !container.width) {
    width = window.innerWidth;
    height = window.innerHeight;
    if (Utils.checkSpilgamesEnvironment()) {
      height -= 25;
    }
    height += Utils.fitLayoutCorrectHeight;
    container = {width:width, height:height};
  }
  s = document.getElementById("screen_wrapper");
  if (!s) {
    return;
  }
  if (!s.initWidth) {
    s.initWidth = Utils.initialResolution.width;
    s.initHeight = Utils.initialResolution.height;
  }
  width = s.initWidth;
  height = s.initHeight;
  var scale = 1;
  var scaleX = container.width / width;
  var scaleY = container.height / height;
  scale = scaleX < scaleY ? scaleX : scaleY;
  Utils.globalPixelScale = scale;
  width = Math.floor(width * scale);
  height = Math.floor(height * scale);
  if (s.lastWidth == width && s.lastHeight == height) {
    return;
  }
  s.lastWidth = width;
  s.lastHeight = height;
  Utils.resizeElement("screen", width, height);
  Utils.resizeElement("screen_background", width, height);
  s = document.getElementById("progress");
  if (s) {
    s.style.width = ~~width + "px";
    s.style.height = ~~height + "px";
  }
  s = document.getElementById("screen_wrapper");
  if (s) {
    s.style.width = ~~width + "px";
    s.style.height = ~~height + "px";
  }
  s = document.getElementById("screen_background_wrapper");
  if (s) {
    s.style.width = ~~width + "px";
    s.style.height = ~~height + "px";
  }
  s = document.getElementById("p2l_container");
  if (s) {
    s.style.width = ~~window.innerWidth + "px";
    s.style.height = "2048px";
  }
  Utils.dispatchEvent("fitlayout");
  setTimeout(Utils.mobileHideAddressBar, 50);
}, resizeElement:function(id, width, height) {
  var s = document.getElementById(id);
  if (!s) {
    return;
  }
  s.setAttribute("width", width);
  s.setAttribute("height", height);
}, drawIphoneLimiter:function(stage, landscape) {
  if (landscape) {
    stage.drawRectangle(240, 295, 480, 54, "#f00", true, .5, true);
  } else {
    stage.drawRectangle(160, 448, 320, 64, "#f00", true, .5, true);
  }
}, drawGrid:function(stage, landscape, col) {
  if (typeof landscape == "undefined") {
    landscape = false;
  }
  var dx = 10;
  var dy = 10;
  if (typeof col == "undefined") {
    col = "#FFF";
  }
  var w = 1 / Utils.globalScale / Utils.globalPixelScale;
  var s = {w:landscape ? 480 : 320, h:landscape ? 320 : 480};
  for (var x = dx;x < s.w;x += dx) {
    var o = .1 + .1 * ((x - dx) / dx % 10);
    stage.drawLine(x, 0, x, s.h, w, col, o);
  }
  for (var y = dy;y < s.h;y += dy) {
    var o = .1 + .1 * ((y - dy) / dy % 10);
    stage.drawLine(0, y, s.w, y, w, col, o);
  }
}, drawScaleFix:function(stage, landscape) {
  if (Utils.globalScale == .75) {
    if (landscape) {
      stage.drawRectangle(507, 160, 54, 320, "#000", true, 1, true);
    } else {
      stage.drawRectangle(160, 507, 320, 54, "#000", true, 1, true);
    }
  }
  if (Utils.globalScale == 1.5) {
    if (landscape) {
      stage.drawRectangle(510, 160, 60, 320, "#000", true, 1, true);
    } else {
      stage.drawRectangle(160, 510, 320, 60, "#000", true, 1, true);
    }
  }
}, grad2radian:function(val) {
  return val / (180 / Math.PI);
}, radian2grad:function(val) {
  return val * (180 / Math.PI);
}, eventsListeners:[], onlockscreen:null, onunlockscreen:null, onfitlayout:null, addEventListener:function(type, callback) {
  EventsManager.addEvent(Utils, type, callback);
}, removeEventListener:function(type, callback) {
  EventsManager.removeEvent(Utils, type, callback);
}, dispatchEvent:function(type, params) {
  return EventsManager.dispatchEvent(Utils, type, params);
}};
this.createjs = this.createjs || {}, function() {
  var a = createjs.PreloadJS = createjs.PreloadJS || {};
  a.version = "0.6.2", a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT";
}(), this.createjs = this.createjs || {}, createjs.extend = function(a, b) {
  function c() {
    this.constructor = a;
  }
  return c.prototype = b.prototype, a.prototype = new c;
}, this.createjs = this.createjs || {}, createjs.promote = function(a, b) {
  var c = a.prototype, d = Object.getPrototypeOf && Object.getPrototypeOf(c) || c.__proto__;
  if (d) {
    c[(b += "_") + "constructor"] = d.constructor;
    for (var e in d) {
      c.hasOwnProperty(e) && "function" == typeof d[e] && (c[b + e] = d[e]);
    }
  }
  return a;
}, this.createjs = this.createjs || {}, function() {
  createjs.proxy = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 2);
    return function() {
      return a.apply(b, Array.prototype.slice.call(arguments, 0).concat(c));
    };
  };
}(), this.createjs = this.createjs || {}, createjs.indexOf = function(a, b) {
  for (var c = 0, d = a.length;d > c;c++) {
    if (b === a[c]) {
      return c;
    }
  }
  return -1;
}, this.createjs = this.createjs || {}, function() {
  function Event(a, b, c) {
    this.type = a, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!b, this.cancelable = !!c, this.timeStamp = (new Date).getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1;
  }
  var a = Event.prototype;
  a.preventDefault = function() {
    this.defaultPrevented = this.cancelable && !0;
  }, a.stopPropagation = function() {
    this.propagationStopped = !0;
  }, a.stopImmediatePropagation = function() {
    this.immediatePropagationStopped = this.propagationStopped = !0;
  }, a.remove = function() {
    this.removed = !0;
  }, a.clone = function() {
    return new Event(this.type, this.bubbles, this.cancelable);
  }, a.set = function(a) {
    for (var b in a) {
      this[b] = a[b];
    }
    return this;
  }, a.toString = function() {
    return "[Event (type=" + this.type + ")]";
  }, createjs.Event = Event;
}(), this.createjs = this.createjs || {}, function() {
  function ErrorEvent(a, b, c) {
    this.Event_constructor("error"), this.title = a, this.message = b, this.data = c;
  }
  var a = createjs.extend(ErrorEvent, createjs.Event);
  a.clone = function() {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  }, createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
}(), this.createjs = this.createjs || {}, function() {
  function EventDispatcher() {
    this._listeners = null, this._captureListeners = null;
  }
  var a = EventDispatcher.prototype;
  EventDispatcher.initialize = function(b) {
    b.addEventListener = a.addEventListener, b.on = a.on, b.removeEventListener = b.off = a.removeEventListener, b.removeAllEventListeners = a.removeAllEventListeners, b.hasEventListener = a.hasEventListener, b.dispatchEvent = a.dispatchEvent, b._dispatchEvent = a._dispatchEvent, b.willTrigger = a.willTrigger;
  }, a.addEventListener = function(a, b, c) {
    var d;
    d = c ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
    var e = d[a];
    return e && this.removeEventListener(a, b, c), e = d[a], e ? e.push(b) : d[a] = [b], b;
  }, a.on = function(a, b, c, d, e, f) {
    return b.handleEvent && (c = c || b, b = b.handleEvent), c = c || this, this.addEventListener(a, function(a) {
      b.call(c, a, e), d && a.remove();
    }, f);
  }, a.removeEventListener = function(a, b, c) {
    var d = c ? this._captureListeners : this._listeners;
    if (d) {
      var e = d[a];
      if (e) {
        for (var f = 0, g = e.length;g > f;f++) {
          if (e[f] == b) {
            1 == g ? delete d[a] : e.splice(f, 1);
            break;
          }
        }
      }
    }
  }, a.off = a.removeEventListener, a.removeAllEventListeners = function(a) {
    a ? (this._listeners && delete this._listeners[a], this._captureListeners && delete this._captureListeners[a]) : this._listeners = this._captureListeners = null;
  }, a.dispatchEvent = function(a, b, c) {
    if ("string" == typeof a) {
      var d = this._listeners;
      if (!(b || d && d[a])) {
        return !0;
      }
      a = new createjs.Event(a, b, c);
    } else {
      a.target && a.clone && (a = a.clone());
    }
    try {
      a.target = this;
    } catch (e) {
    }
    if (a.bubbles && this.parent) {
      for (var f = this, g = [f];f.parent;) {
        g.push(f = f.parent);
      }
      var h, i = g.length;
      for (h = i - 1;h >= 0 && !a.propagationStopped;h--) {
        g[h]._dispatchEvent(a, 1 + (0 == h));
      }
      for (h = 1;i > h && !a.propagationStopped;h++) {
        g[h]._dispatchEvent(a, 3);
      }
    } else {
      this._dispatchEvent(a, 2);
    }
    return !a.defaultPrevented;
  }, a.hasEventListener = function(a) {
    var b = this._listeners, c = this._captureListeners;
    return !!(b && b[a] || c && c[a]);
  }, a.willTrigger = function(a) {
    for (var b = this;b;) {
      if (b.hasEventListener(a)) {
        return !0;
      }
      b = b.parent;
    }
    return !1;
  }, a.toString = function() {
    return "[EventDispatcher]";
  }, a._dispatchEvent = function(a, b) {
    var c, d = 1 == b ? this._captureListeners : this._listeners;
    if (a && d) {
      var e = d[a.type];
      if (!e || !(c = e.length)) {
        return;
      }
      try {
        a.currentTarget = this;
      } catch (f) {
      }
      try {
        a.eventPhase = b;
      } catch (f) {
      }
      a.removed = !1, e = e.slice();
      for (var g = 0;c > g && !a.immediatePropagationStopped;g++) {
        var h = e[g];
        h.handleEvent ? h.handleEvent(a) : h(a), a.removed && (this.off(a.type, h, 1 == b), a.removed = !1);
      }
    }
  }, createjs.EventDispatcher = EventDispatcher;
}(), this.createjs = this.createjs || {}, function() {
  function ProgressEvent(a, b) {
    this.Event_constructor("progress"), this.loaded = a, this.total = null == b ? 1 : b, this.progress = 0 == b ? 0 : this.loaded / this.total;
  }
  var a = createjs.extend(ProgressEvent, createjs.Event);
  a.clone = function() {
    return new createjs.ProgressEvent(this.loaded, this.total);
  }, createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
}(window), function() {
  function a(b, d) {
    function f(a) {
      if (f[a] !== q) {
        return f[a];
      }
      var b;
      if ("bug-string-char-index" == a) {
        b = "a" != "a"[0];
      } else {
        if ("json" == a) {
          b = f("json-stringify") && f("json-parse");
        } else {
          var c, e = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
          if ("json-stringify" == a) {
            var i = d.stringify, k = "function" == typeof i && t;
            if (k) {
              (c = function() {
                return 1;
              }).toJSON = c;
              try {
                k = "0" === i(0) && "0" === i(new g) && '""' == i(new h) && i(s) === q && i(q) === q && i() === q && "1" === i(c) && "[1]" == i([c]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({a:[c, !0, !1, null, "\x00\b\n\f\r\t"]}) == e && "1" === i(null, c) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864E13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864E13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552E5)) && 
                '"1969-12-31T23:59:59.999Z"' == i(new j(-1));
              } catch (l) {
                k = !1;
              }
            }
            b = k;
          }
          if ("json-parse" == a) {
            var m = d.parse;
            if ("function" == typeof m) {
              try {
                if (0 === m("0") && !m(!1)) {
                  c = m(e);
                  var n = 5 == c.a.length && 1 === c.a[0];
                  if (n) {
                    try {
                      n = !m('"\t"');
                    } catch (l) {
                    }
                    if (n) {
                      try {
                        n = 1 !== m("01");
                      } catch (l) {
                      }
                    }
                    if (n) {
                      try {
                        n = 1 !== m("1.");
                      } catch (l) {
                      }
                    }
                  }
                }
              } catch (l) {
                n = !1;
              }
            }
            b = n;
          }
        }
      }
      return f[a] = !!b;
    }
    b || (b = e.Object()), d || (d = e.Object());
    var g = b.Number || e.Number, h = b.String || e.String, i = b.Object || e.Object, j = b.Date || e.Date, k = b.SyntaxError || e.SyntaxError, l = b.TypeError || e.TypeError, m = b.Math || e.Math, n = b.JSON || e.JSON;
    "object" == typeof n && n && (d.stringify = n.stringify, d.parse = n.parse);
    var o, p, q, r = i.prototype, s = r.toString, t = new j(-0xc782b5b800cec);
    try {
      t = -109252 == t.getUTCFullYear() && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds();
    } catch (u) {
    }
    if (!f("json")) {
      var v = "[object Function]", w = "[object Date]", x = "[object Number]", y = "[object String]", z = "[object Array]", A = "[object Boolean]", B = f("bug-string-char-index");
      if (!t) {
        var C = m.floor, D = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], E = function(a, b) {
          return D[b] + 365 * (a - 1970) + C((a - 1969 + (b = +(b > 1))) / 4) - C((a - 1901 + b) / 100) + C((a - 1601 + b) / 400);
        };
      }
      if ((o = r.hasOwnProperty) || (o = function(a) {
        var b, c = {};
        return (c.__proto__ = null, c.__proto__ = {toString:1}, c).toString != s ? o = function(a) {
          var b = this.__proto__, c = a in (this.__proto__ = null, this);
          return this.__proto__ = b, c;
        } : (b = c.constructor, o = function(a) {
          var c = (this.constructor || b).prototype;
          return a in this && !(a in c && this[a] === c[a]);
        }), c = null, o.call(this, a);
      }), p = function(a, b) {
        var d, e, f, g = 0;
        (d = function() {
          this.valueOf = 0;
        }).prototype.valueOf = 0, e = new d;
        for (f in e) {
          o.call(e, f) && g++;
        }
        return d = e = null, g ? p = 2 == g ? function(a, b) {
          var c, d = {}, e = s.call(a) == v;
          for (c in a) {
            e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c);
          }
        } : function(a, b) {
          var c, d, e = s.call(a) == v;
          for (c in a) {
            e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
          }
          (d || o.call(a, c = "constructor")) && b(c);
        } : (e = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function(a, b) {
          var d, f, g = s.call(a) == v, h = !g && "function" != typeof a.constructor && c[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
          for (d in a) {
            g && "prototype" == d || !h.call(a, d) || b(d);
          }
          for (f = e.length;d = e[--f];h.call(a, d) && b(d)) {
          }
        }), p(a, b);
      }, !f("json-stringify")) {
        var F = {92:"\\\\", 34:'\\"', 8:"\\b", 12:"\\f", 10:"\\n", 13:"\\r", 9:"\\t"}, G = "000000", H = function(a, b) {
          return (G + (b || 0)).slice(-a);
        }, I = "\\u00", J = function(a) {
          for (var b = '"', c = 0, d = a.length, e = !B || d > 10, f = e && (B ? a.split("") : a);d > c;c++) {
            var g = a.charCodeAt(c);
            switch(g) {
              case 8:
              case 9:
              case 10:
              case 12:
              case 13:
              case 34:
              case 92:
                b += F[g];
                break;
              default:
                if (32 > g) {
                  b += I + H(2, g.toString(16));
                  break;
                }
                b += e ? f[c] : a.charAt(c);
            }
          }
          return b + '"';
        }, K = function(a, b, c, d, e, f, g) {
          var h, i, j, k, m, n, r, t, u, v, B, D, F, G, I, L;
          try {
            h = b[a];
          } catch (M) {
          }
          if ("object" == typeof h && h) {
            if (i = s.call(h), i != w || o.call(h, "toJSON")) {
              "function" == typeof h.toJSON && (i != x && i != y && i != z || o.call(h, "toJSON")) && (h = h.toJSON(a));
            } else {
              if (h > -1 / 0 && 1 / 0 > h) {
                if (E) {
                  for (m = C(h / 864E5), j = C(m / 365.2425) + 1970 - 1;E(j + 1, 0) <= m;j++) {
                  }
                  for (k = C((m - E(j, 0)) / 30.42);E(j, k + 1) <= m;k++) {
                  }
                  m = 1 + m - E(j, k), n = (h % 864E5 + 864E5) % 864E5, r = C(n / 36E5) % 24, t = C(n / 6E4) % 60, u = C(n / 1E3) % 60, v = n % 1E3;
                } else {
                  j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), v = h.getUTCMilliseconds();
                }
                h = (0 >= j || j >= 1E4 ? (0 > j ? "-" : "+") + H(6, 0 > j ? -j : j) : H(4, j)) + "-" + H(2, k + 1) + "-" + H(2, m) + "T" + H(2, r) + ":" + H(2, t) + ":" + H(2, u) + "." + H(3, v) + "Z";
              } else {
                h = null;
              }
            }
          }
          if (c && (h = c.call(b, a, h)), null === h) {
            return "null";
          }
          if (i = s.call(h), i == A) {
            return "" + h;
          }
          if (i == x) {
            return h > -1 / 0 && 1 / 0 > h ? "" + h : "null";
          }
          if (i == y) {
            return J("" + h);
          }
          if ("object" == typeof h) {
            for (G = g.length;G--;) {
              if (g[G] === h) {
                throw l();
              }
            }
            if (g.push(h), B = [], I = f, f += e, i == z) {
              for (F = 0, G = h.length;G > F;F++) {
                D = K(F, h, c, d, e, f, g), B.push(D === q ? "null" : D);
              }
              L = B.length ? e ? "[\n" + f + B.join(",\n" + f) + "\n" + I + "]" : "[" + B.join(",") + "]" : "[]";
            } else {
              p(d || h, function(a) {
                var b = K(a, h, c, d, e, f, g);
                b !== q && B.push(J(a) + ":" + (e ? " " : "") + b);
              }), L = B.length ? e ? "{\n" + f + B.join(",\n" + f) + "\n" + I + "}" : "{" + B.join(",") + "}" : "{}";
            }
            return g.pop(), L;
          }
        };
        d.stringify = function(a, b, d) {
          var e, f, g, h;
          if (c[typeof b] && b) {
            if ((h = s.call(b)) == v) {
              f = b;
            } else {
              if (h == z) {
                g = {};
                for (var i, j = 0, k = b.length;k > j;i = b[j++], h = s.call(i), (h == y || h == x) && (g[i] = 1)) {
                }
              }
            }
          }
          if (d) {
            if ((h = s.call(d)) == x) {
              if ((d -= d % 1) > 0) {
                for (e = "", d > 10 && (d = 10);e.length < d;e += " ") {
                }
              }
            } else {
              h == y && (e = d.length <= 10 ? d : d.slice(0, 10));
            }
          }
          return K("", (i = {}, i[""] = a, i), f, g, e, "", []);
        };
      }
      if (!f("json-parse")) {
        var L, M, N = h.fromCharCode, O = {92:"\\", 34:'"', 47:"/", 98:"\b", 116:"\t", 110:"\n", 102:"\f", 114:"\r"}, P = function() {
          throw L = M = null, k();
        }, Q = function() {
          for (var a, b, c, d, e, f = M, g = f.length;g > L;) {
            switch(e = f.charCodeAt(L)) {
              case 9:
              case 10:
              case 13:
              case 32:
                L++;
                break;
              case 123:
              case 125:
              case 91:
              case 93:
              case 58:
              case 44:
                return a = B ? f.charAt(L) : f[L], L++, a;
              case 34:
                for (a = "@", L++;g > L;) {
                  if (e = f.charCodeAt(L), 32 > e) {
                    P();
                  } else {
                    if (92 == e) {
                      switch(e = f.charCodeAt(++L)) {
                        case 92:
                        case 34:
                        case 47:
                        case 98:
                        case 116:
                        case 110:
                        case 102:
                        case 114:
                          a += O[e], L++;
                          break;
                        case 117:
                          for (b = ++L, c = L + 4;c > L;L++) {
                            e = f.charCodeAt(L), e >= 48 && 57 >= e || e >= 97 && 102 >= e || e >= 65 && 70 >= e || P();
                          }
                          a += N("0x" + f.slice(b, L));
                          break;
                        default:
                          P();
                      }
                    } else {
                      if (34 == e) {
                        break;
                      }
                      for (e = f.charCodeAt(L), b = L;e >= 32 && 92 != e && 34 != e;) {
                        e = f.charCodeAt(++L);
                      }
                      a += f.slice(b, L);
                    }
                  }
                }
                if (34 == f.charCodeAt(L)) {
                  return L++, a;
                }
                P();
              default:
                if (b = L, 45 == e && (d = !0, e = f.charCodeAt(++L)), e >= 48 && 57 >= e) {
                  for (48 == e && (e = f.charCodeAt(L + 1), e >= 48 && 57 >= e) && P(), d = !1;g > L && (e = f.charCodeAt(L), e >= 48 && 57 >= e);L++) {
                  }
                  if (46 == f.charCodeAt(L)) {
                    for (c = ++L;g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e);c++) {
                    }
                    c == L && P(), L = c;
                  }
                  if (e = f.charCodeAt(L), 101 == e || 69 == e) {
                    for (e = f.charCodeAt(++L), (43 == e || 45 == e) && L++, c = L;g > c && (e = f.charCodeAt(c), e >= 48 && 57 >= e);c++) {
                    }
                    c == L && P(), L = c;
                  }
                  return +f.slice(b, L);
                }
                if (d && P(), "true" == f.slice(L, L + 4)) {
                  return L += 4, !0;
                }
                if ("false" == f.slice(L, L + 5)) {
                  return L += 5, !1;
                }
                if ("null" == f.slice(L, L + 4)) {
                  return L += 4, null;
                }
                P();
            }
          }
          return "$";
        }, R = function(a) {
          var b, c;
          if ("$" == a && P(), "string" == typeof a) {
            if ("@" == (B ? a.charAt(0) : a[0])) {
              return a.slice(1);
            }
            if ("[" == a) {
              for (b = [];a = Q(), "]" != a;c || (c = !0)) {
                c && ("," == a ? (a = Q(), "]" == a && P()) : P()), "," == a && P(), b.push(R(a));
              }
              return b;
            }
            if ("{" == a) {
              for (b = {};a = Q(), "}" != a;c || (c = !0)) {
                c && ("," == a ? (a = Q(), "}" == a && P()) : P()), ("," == a || "string" != typeof a || "@" != (B ? a.charAt(0) : a[0]) || ":" != Q()) && P(), b[a.slice(1)] = R(Q());
              }
              return b;
            }
            P();
          }
          return a;
        }, S = function(a, b, c) {
          var d = T(a, b, c);
          d === q ? delete a[b] : a[b] = d;
        }, T = function(a, b, c) {
          var d, e = a[b];
          if ("object" == typeof e && e) {
            if (s.call(e) == z) {
              for (d = e.length;d--;) {
                S(e, d, c);
              }
            } else {
              p(e, function(a) {
                S(e, a, c);
              });
            }
          }
          return c.call(a, b, e);
        };
        d.parse = function(a, b) {
          var c, d;
          return L = 0, M = "" + a, c = R(Q()), "$" != Q() && P(), L = M = null, b && s.call(b) == v ? T((d = {}, d[""] = c, d), "", b) : c;
        };
      }
    }
    return d.runInContext = a, d;
  }
  var b = "function" == typeof define && define.amd, c = {"function":!0, object:!0}, d = c[typeof exports] && exports && !exports.nodeType && exports, e = c[typeof window] && window || this, f = d && c[typeof module] && module && !module.nodeType && "object" == typeof global && global;
  if (!f || f.global !== f && f.window !== f && f.self !== f || (e = f), d && !b) {
    a(e, d);
  } else {
    var g = e.JSON, h = e.JSON3, i = !1, j = a(e, e.JSON3 = {noConflict:function() {
      return i || (i = !0, e.JSON = g, e.JSON3 = h, g = h = null), j;
    }});
    e.JSON = {parse:j.parse, stringify:j.stringify};
  }
  b && define(function() {
    return j;
  });
}.call(this), function() {
  var a = {};
  a.appendToHead = function(b) {
    a.getHead().appendChild(b);
  }, a.getHead = function() {
    return document.head || document.getElementsByTagName("head")[0];
  }, a.getBody = function() {
    return document.body || document.getElementsByTagName("body")[0];
  }, createjs.DomUtils = a;
}(), function() {
  var a = {};
  a.parseXML = function(a, b) {
    var c = null;
    try {
      if (window.DOMParser) {
        var d = new DOMParser;
        c = d.parseFromString(a, b);
      }
    } catch (e) {
    }
    if (!c) {
      try {
        c = new ActiveXObject("Microsoft.XMLDOM"), c.async = !1, c.loadXML(a);
      } catch (e) {
        c = null;
      }
    }
    return c;
  }, a.parseJSON = function(a) {
    if (null == a) {
      return null;
    }
    try {
      return JSON.parse(a);
    } catch (b) {
      throw b;
    }
  }, createjs.DataUtils = a;
}(), this.createjs = this.createjs || {}, function() {
  function LoadItem() {
    this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = b.LOAD_TIMEOUT_DEFAULT;
  }
  var a = LoadItem.prototype = {}, b = LoadItem;
  b.LOAD_TIMEOUT_DEFAULT = 8E3, b.create = function(a) {
    if ("string" == typeof a) {
      var c = new LoadItem;
      return c.src = a, c;
    }
    if (a instanceof b) {
      return a;
    }
    if (a instanceof Object && a.src) {
      return null == a.loadTimeout && (a.loadTimeout = b.LOAD_TIMEOUT_DEFAULT), a;
    }
    throw new Error("Type not recognized.");
  }, a.set = function(a) {
    for (var b in a) {
      this[b] = a[b];
    }
    return this;
  }, createjs.LoadItem = b;
}(), function() {
  var a = {};
  a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function(b) {
    var c = {absolute:!1, relative:!1};
    if (null == b) {
      return c;
    }
    var d = b.indexOf("?");
    d > -1 && (b = b.substr(0, d));
    var e;
    return a.ABSOLUTE_PATT.test(b) ? c.absolute = !0 : a.RELATIVE_PATT.test(b) && (c.relative = !0), (e = b.match(a.EXTENSION_PATT)) && (c.extension = e[1].toLowerCase()), c;
  }, a.formatQueryString = function(a, b) {
    if (null == a) {
      throw new Error("You must specify data.");
    }
    var c = [];
    for (var d in a) {
      c.push(d + "=" + escape(a[d]));
    }
    return b && (c = c.concat(b)), c.join("&");
  }, a.buildPath = function(a, b) {
    if (null == b) {
      return a;
    }
    var c = [], d = a.indexOf("?");
    if (-1 != d) {
      var e = a.slice(d + 1);
      c = c.concat(e.split("&"));
    }
    return -1 != d ? a.slice(0, d) + "?" + this.formatQueryString(b, c) : a + "?" + this.formatQueryString(b, c);
  }, a.isCrossDomain = function(a) {
    var b = document.createElement("a");
    b.href = a.src;
    var c = document.createElement("a");
    c.href = location.href;
    var d = "" != b.hostname && (b.port != c.port || b.protocol != c.protocol || b.hostname != c.hostname);
    return d;
  }, a.isLocal = function(a) {
    var b = document.createElement("a");
    return b.href = a.src, "" == b.hostname && "file:" == b.protocol;
  }, a.isBinary = function(a) {
    switch(a) {
      case createjs.AbstractLoader.IMAGE:
      case createjs.AbstractLoader.BINARY:
        return !0;
      default:
        return !1;
    }
  }, a.isImageTag = function(a) {
    return a instanceof HTMLImageElement;
  }, a.isAudioTag = function(a) {
    return window.HTMLAudioElement ? a instanceof HTMLAudioElement : !1;
  }, a.isVideoTag = function(a) {
    return window.HTMLVideoElement ? a instanceof HTMLVideoElement : !1;
  }, a.isText = function(a) {
    switch(a) {
      case createjs.AbstractLoader.TEXT:
      case createjs.AbstractLoader.JSON:
      case createjs.AbstractLoader.MANIFEST:
      case createjs.AbstractLoader.XML:
      case createjs.AbstractLoader.CSS:
      case createjs.AbstractLoader.SVG:
      case createjs.AbstractLoader.JAVASCRIPT:
      case createjs.AbstractLoader.SPRITESHEET:
        return !0;
      default:
        return !1;
    }
  }, a.getTypeByExtension = function(a) {
    if (null == a) {
      return createjs.AbstractLoader.TEXT;
    }
    switch(a.toLowerCase()) {
      case "jpeg":
      case "jpg":
      case "gif":
      case "png":
      case "webp":
      case "bmp":
        return createjs.AbstractLoader.IMAGE;
      case "ogg":
      case "mp3":
      case "webm":
        return createjs.AbstractLoader.SOUND;
      case "mp4":
      case "webm":
      case "ts":
        return createjs.AbstractLoader.VIDEO;
      case "json":
        return createjs.AbstractLoader.JSON;
      case "xml":
        return createjs.AbstractLoader.XML;
      case "css":
        return createjs.AbstractLoader.CSS;
      case "js":
        return createjs.AbstractLoader.JAVASCRIPT;
      case "svg":
        return createjs.AbstractLoader.SVG;
      default:
        return createjs.AbstractLoader.TEXT;
    }
  }, createjs.RequestUtils = a;
}(), this.createjs = this.createjs || {}, function() {
  function AbstractLoader(a, b, c) {
    this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = c, this.resultFormatter = null, this._item = a ? createjs.LoadItem.create(a) : null, this._preferXHR = b, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null;
  }
  var a = createjs.extend(AbstractLoader, createjs.EventDispatcher), b = AbstractLoader;
  b.POST = "POST", b.GET = "GET", b.BINARY = "binary", b.CSS = "css", b.IMAGE = "image", b.JAVASCRIPT = "javascript", b.JSON = "json", b.JSONP = "jsonp", b.MANIFEST = "manifest", b.SOUND = "sound", b.VIDEO = "video", b.SPRITESHEET = "spritesheet", b.SVG = "svg", b.TEXT = "text", b.XML = "xml", a.getItem = function() {
    return this._item;
  }, a.getResult = function(a) {
    return a ? this._rawResult : this._result;
  }, a.getTag = function() {
    return this._tag;
  }, a.setTag = function(a) {
    this._tag = a;
  }, a.load = function() {
    this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
    var a = new createjs.Event("initialize");
    a.loader = this._request, this.dispatchEvent(a), this._request.load();
  }, a.cancel = function() {
    this.canceled = !0, this.destroy();
  }, a.destroy = function() {
    this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners();
  }, a.getLoadedItems = function() {
    return this._loadedItems;
  }, a._createRequest = function() {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._createTag = function() {
    return null;
  }, a._sendLoadStart = function() {
    this._isCanceled() || this.dispatchEvent("loadstart");
  }, a._sendProgress = function(a) {
    if (!this._isCanceled()) {
      var b = null;
      "number" == typeof a ? (this.progress = a, b = new createjs.ProgressEvent(this.progress)) : (b = a, this.progress = a.loaded / a.total, b.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(b);
    }
  }, a._sendComplete = function() {
    if (!this._isCanceled()) {
      this.loaded = !0;
      var a = new createjs.Event("complete");
      a.rawResult = this._rawResult, null != this._result && (a.result = this._result), this.dispatchEvent(a);
    }
  }, a._sendError = function(a) {
    !this._isCanceled() && this.hasEventListener("error") && (null == a && (a = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(a));
  }, a._isCanceled = function() {
    return null == window.createjs || this.canceled ? !0 : !1;
  }, a.resultFormatter = null, a.handleEvent = function(a) {
    switch(a.type) {
      case "complete":
        this._rawResult = a.target._response;
        var b = this.resultFormatter && this.resultFormatter(this);
        b instanceof Function ? b.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = b || this._rawResult, this._sendComplete());
        break;
      case "progress":
        this._sendProgress(a);
        break;
      case "error":
        this._sendError(a);
        break;
      case "loadstart":
        this._sendLoadStart();
        break;
      case "abort":
      case "timeout":
        this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + a.type.toUpperCase() + "_ERROR"));
    }
  }, a._resultFormatSuccess = function(a) {
    this._result = a, this._sendComplete();
  }, a._resultFormatFailed = function(a) {
    this._sendError(a);
  }, a.buildPath = function(a, b) {
    return createjs.RequestUtils.buildPath(a, b);
  }, a.toString = function() {
    return "[PreloadJS AbstractLoader]";
  }, createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function() {
  function AbstractMediaLoader(a, b, c) {
    this.AbstractLoader_constructor(a, b, c), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this);
  }
  var a = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
  a.load = function() {
    this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load();
  }, a._createTag = function() {
  }, a._createRequest = function() {
    this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
  }, a._updateXHR = function(a) {
    a.loader.setResponseType && a.loader.setResponseType("blob");
  }, a._formatResult = function(a) {
    if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
      var b = window.URL || window.webkitURL, c = a.getResult(!0);
      a.getTag().src = b.createObjectURL(c);
    }
    return a.getTag();
  }, createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  var AbstractRequest = function(a) {
    this._item = a;
  }, a = createjs.extend(AbstractRequest, createjs.EventDispatcher);
  a.load = function() {
  }, a.destroy = function() {
  }, a.cancel = function() {
  }, createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");
}(), this.createjs = this.createjs || {}, function() {
  function TagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null;
  }
  var a = createjs.extend(TagRequest, createjs.AbstractRequest);
  a.load = function() {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
    var a = new createjs.Event("initialize");
    a.loader = this._tag, this.dispatchEvent(a), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, null == this._tag.parentNode && (window.document.body.appendChild(this._tag), this._addedToDOM = !0);
  }, a.destroy = function() {
    this._clean(), this._tag = null, this.AbstractRequest_destroy();
  }, a._handleReadyStateChange = function() {
    clearTimeout(this._loadTimeout);
    var a = this._tag;
    ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleError = function() {
    this._clean(), this.dispatchEvent("error");
  }, a._handleTagComplete = function() {
    this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete");
  }, a._handleTimeout = function() {
    this._clean(), this.dispatchEvent(new createjs.Event("timeout"));
  }, a._clean = function() {
    this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && null != this._tag.parentNode && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout);
  }, a._hideTag = function() {
    this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden";
  }, a._showTag = function() {
    this._tag.style.visibility = this._startTagVisibility;
  }, a._handleStalled = function() {
  }, createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function() {
  function MediaTagRequest(a, b, c) {
    this.AbstractRequest_constructor(a), this._tag = b, this._tagSrcAttribute = c, this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }
  var a = createjs.extend(MediaTagRequest, createjs.TagRequest);
  a.load = function() {
    var a = createjs.proxy(this._handleStalled, this);
    this._stalledCallback = a;
    var b = createjs.proxy(this._handleProgress, this);
    this._handleProgress = b, this._tag.addEventListener("stalled", a), this._tag.addEventListener("progress", b), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load();
  }, a._handleReadyStateChange = function() {
    clearTimeout(this._loadTimeout);
    var a = this._tag;
    ("loaded" == a.readyState || "complete" == a.readyState) && this._handleTagComplete();
  }, a._handleStalled = function() {
  }, a._handleProgress = function(a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);
      this.dispatchEvent(b);
    }
  }, a._clean = function() {
    this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean();
  }, createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
}(), this.createjs = this.createjs || {}, function() {
  function XHRRequest(a) {
    this.AbstractRequest_constructor(a), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, 
    this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), !this._createXHR(a);
  }
  var a = createjs.extend(XHRRequest, createjs.AbstractRequest);
  XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], a.getResult = function(a) {
    return a && this._rawResponse ? this._rawResponse : this._response;
  }, a.cancel = function() {
    this.canceled = !0, this._clean(), this._request.abort();
  }, a.load = function() {
    if (null == this._request) {
      return void this._handleError();
    }
    null != this._request.addEventListener ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", 
    this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), 1 == this._xhrLevel && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, 
    this), this._item.loadTimeout));
    try {
      this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send();
    } catch (a) {
      this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, a));
    }
  }, a.setResponseType = function(a) {
    "blob" === a && (a = window.URL ? "blob" : "arraybuffer", this._responseType = a), this._request.responseType = a;
  }, a.getAllResponseHeaders = function() {
    return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null;
  }, a.getResponseHeader = function(a) {
    return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(a) : null;
  }, a._handleProgress = function(a) {
    if (a && !(a.loaded > 0 && 0 == a.total)) {
      var b = new createjs.ProgressEvent(a.loaded, a.total);
      this.dispatchEvent(b);
    }
  }, a._handleLoadStart = function() {
    clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart");
  }, a._handleAbort = function(a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, a));
  }, a._handleError = function(a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent(a.message));
  }, a._handleReadyStateChange = function() {
    4 == this._request.readyState && this._handleLoad();
  }, a._handleLoad = function() {
    if (!this.loaded) {
      this.loaded = !0;
      var a = this._checkError();
      if (a) {
        return void this._handleError(a);
      }
      if (this._response = this._getResponse(), "arraybuffer" === this._responseType) {
        try {
          this._response = new Blob([this._response]);
        } catch (b) {
          if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, "TypeError" === b.name && window.BlobBuilder) {
            var c = new BlobBuilder;
            c.append(this._response), this._response = c.getBlob();
          }
        }
      }
      this._clean(), this.dispatchEvent(new createjs.Event("complete"));
    }
  }, a._handleTimeout = function(a) {
    this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, a));
  }, a._checkError = function() {
    var a = parseInt(this._request.status);
    switch(a) {
      case 404:
      case 0:
        return new Error(a);
    }
    return null;
  }, a._getResponse = function() {
    if (null != this._response) {
      return this._response;
    }
    if (null != this._request.response) {
      return this._request.response;
    }
    try {
      if (null != this._request.responseText) {
        return this._request.responseText;
      }
    } catch (a) {
    }
    try {
      if (null != this._request.responseXML) {
        return this._request.responseXML;
      }
    } catch (a) {
    }
    return null;
  }, a._createXHR = function(a) {
    var b = createjs.RequestUtils.isCrossDomain(a), c = {}, d = null;
    if (window.XMLHttpRequest) {
      d = new XMLHttpRequest, b && void 0 === d.withCredentials && window.XDomainRequest && (d = new XDomainRequest);
    } else {
      for (var e = 0, f = s.ACTIVEX_VERSIONS.length;f > e;e++) {
        var g = s.ACTIVEX_VERSIONS[e];
        try {
          d = new ActiveXObject(g);
          break;
        } catch (h) {
        }
      }
      if (null == d) {
        return !1;
      }
    }
    null == a.mimeType && createjs.RequestUtils.isText(a.type) && (a.mimeType = "text/plain; charset=utf-8"), a.mimeType && d.overrideMimeType && d.overrideMimeType(a.mimeType), this._xhrLevel = "string" == typeof d.responseType ? 2 : 1;
    var i = null;
    if (i = a.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(a.src, a.values) : a.src, d.open(a.method || createjs.AbstractLoader.GET, i, !0), b && d instanceof XMLHttpRequest && 1 == this._xhrLevel && (c.Origin = location.origin), a.values && a.method == createjs.AbstractLoader.POST && (c["Content-Type"] = "application/x-www-form-urlencoded"), b || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest"), a.headers) {
      for (var j in a.headers) {
        c[j] = a.headers[j];
      }
    }
    for (j in c) {
      d.setRequestHeader(j, c[j]);
    }
    return d instanceof XMLHttpRequest && void 0 !== a.withCredentials && (d.withCredentials = a.withCredentials), this._request = d, !0;
  }, a._clean = function() {
    clearTimeout(this._loadTimeout), null != this._request.removeEventListener ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), 
    this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null);
  }, a.toString = function() {
    return "[PreloadJS XHRRequest]";
  }, createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
}(), this.createjs = this.createjs || {}, function() {
  function LoadQueue(a, b, c) {
    this.AbstractLoader_constructor(), this._plugins = [], this._typeCallbacks = {}, this._extensionCallbacks = {}, this.next = null, this.maintainScriptOrder = !0, this.stopOnError = !1, this._maxConnections = 1, this._availableLoaders = [createjs.ImageLoader, createjs.JavaScriptLoader, createjs.CSSLoader, createjs.JSONLoader, createjs.JSONPLoader, createjs.SoundLoader, createjs.ManifestLoader, createjs.SpriteSheetLoader, createjs.XMLLoader, createjs.SVGLoader, createjs.BinaryLoader, createjs.VideoLoader, 
    createjs.TextLoader], this._defaultLoaderLength = this._availableLoaders.length, this.init(a, b, c);
  }
  var a = createjs.extend(LoadQueue, createjs.AbstractLoader), b = LoadQueue;
  a.init = function(a, b, c) {
    this.useXHR = !0, this.preferXHR = !0, this._preferXHR = !0, this.setPreferXHR(a), this._paused = !1, this._basePath = b, this._crossOrigin = c, this._loadStartWasDispatched = !1, this._currentlyLoadingScript = null, this._currentLoads = [], this._loadQueue = [], this._loadQueueBackup = [], this._loadItemsById = {}, this._loadItemsBySrc = {}, this._loadedResults = {}, this._loadedRawResults = {}, this._numItems = 0, this._numItemsLoaded = 0, this._scriptOrder = [], this._loadedScripts = [], this._lastProgress = 
    0 / 0;
  }, b.loadTimeout = 8E3, b.LOAD_TIMEOUT = 0, b.BINARY = createjs.AbstractLoader.BINARY, b.CSS = createjs.AbstractLoader.CSS, b.IMAGE = createjs.AbstractLoader.IMAGE, b.JAVASCRIPT = createjs.AbstractLoader.JAVASCRIPT, b.JSON = createjs.AbstractLoader.JSON, b.JSONP = createjs.AbstractLoader.JSONP, b.MANIFEST = createjs.AbstractLoader.MANIFEST, b.SOUND = createjs.AbstractLoader.SOUND, b.VIDEO = createjs.AbstractLoader.VIDEO, b.SVG = createjs.AbstractLoader.SVG, b.TEXT = createjs.AbstractLoader.TEXT, 
  b.XML = createjs.AbstractLoader.XML, b.POST = createjs.AbstractLoader.POST, b.GET = createjs.AbstractLoader.GET, a.registerLoader = function(a) {
    if (!a || !a.canLoadItem) {
      throw new Error("loader is of an incorrect type.");
    }
    if (-1 != this._availableLoaders.indexOf(a)) {
      throw new Error("loader already exists.");
    }
    this._availableLoaders.unshift(a);
  }, a.unregisterLoader = function(a) {
    var b = this._availableLoaders.indexOf(a);
    -1 != b && b < this._defaultLoaderLength - 1 && this._availableLoaders.splice(b, 1);
  }, a.setUseXHR = function(a) {
    return this.setPreferXHR(a);
  }, a.setPreferXHR = function(a) {
    return this.preferXHR = 0 != a && null != window.XMLHttpRequest, this.preferXHR;
  }, a.removeAll = function() {
    this.remove();
  }, a.remove = function(a) {
    var b = null;
    if (a && !Array.isArray(a)) {
      b = [a];
    } else {
      if (a) {
        b = a;
      } else {
        if (arguments.length > 0) {
          return;
        }
      }
    }
    var c = !1;
    if (b) {
      for (;b.length;) {
        var d = b.pop(), e = this.getResult(d);
        for (f = this._loadQueue.length - 1;f >= 0;f--) {
          if (g = this._loadQueue[f].getItem(), g.id == d || g.src == d) {
            this._loadQueue.splice(f, 1)[0].cancel();
            break;
          }
        }
        for (f = this._loadQueueBackup.length - 1;f >= 0;f--) {
          if (g = this._loadQueueBackup[f].getItem(), g.id == d || g.src == d) {
            this._loadQueueBackup.splice(f, 1)[0].cancel();
            break;
          }
        }
        if (e) {
          this._disposeItem(this.getItem(d));
        } else {
          for (var f = this._currentLoads.length - 1;f >= 0;f--) {
            var g = this._currentLoads[f].getItem();
            if (g.id == d || g.src == d) {
              this._currentLoads.splice(f, 1)[0].cancel(), c = !0;
              break;
            }
          }
        }
      }
      c && this._loadNext();
    } else {
      this.close();
      for (var h in this._loadItemsById) {
        this._disposeItem(this._loadItemsById[h]);
      }
      this.init(this.preferXHR, this._basePath);
    }
  }, a.reset = function() {
    this.close();
    for (var a in this._loadItemsById) {
      this._disposeItem(this._loadItemsById[a]);
    }
    for (var b = [], c = 0, d = this._loadQueueBackup.length;d > c;c++) {
      b.push(this._loadQueueBackup[c].getItem());
    }
    this.loadManifest(b, !1);
  }, a.installPlugin = function(a) {
    if (null != a && null != a.getPreloadHandlers) {
      this._plugins.push(a);
      var b = a.getPreloadHandlers();
      if (b.scope = a, null != b.types) {
        for (var c = 0, d = b.types.length;d > c;c++) {
          this._typeCallbacks[b.types[c]] = b;
        }
      }
      if (null != b.extensions) {
        for (c = 0, d = b.extensions.length;d > c;c++) {
          this._extensionCallbacks[b.extensions[c]] = b;
        }
      }
    }
  }, a.setMaxConnections = function(a) {
    this._maxConnections = a, !this._paused && this._loadQueue.length > 0 && this._loadNext();
  }, a.loadFile = function(a, b, c) {
    if (null == a) {
      var d = new createjs.ErrorEvent("PRELOAD_NO_FILE");
      return void this._sendError(d);
    }
    this._addItem(a, null, c), this.setPaused(b !== !1 ? !1 : !0);
  }, a.loadManifest = function(a, c, d) {
    var e = null, f = null;
    if (Array.isArray(a)) {
      if (0 == a.length) {
        var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_EMPTY");
        return void this._sendError(g);
      }
      e = a;
    } else {
      if ("string" == typeof a) {
        e = [{src:a, type:b.MANIFEST}];
      } else {
        if ("object" != typeof a) {
          var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_NULL");
          return void this._sendError(g);
        }
        if (void 0 !== a.src) {
          if (null == a.type) {
            a.type = b.MANIFEST;
          } else {
            if (a.type != b.MANIFEST) {
              var g = new createjs.ErrorEvent("PRELOAD_MANIFEST_TYPE");
              this._sendError(g);
            }
          }
          e = [a];
        } else {
          void 0 !== a.manifest && (e = a.manifest, f = a.path);
        }
      }
    }
    for (var h = 0, i = e.length;i > h;h++) {
      this._addItem(e[h], f, d);
    }
    this.setPaused(c !== !1 ? !1 : !0);
  }, a.load = function() {
    this.setPaused(!1);
  }, a.getItem = function(a) {
    return this._loadItemsById[a] || this._loadItemsBySrc[a];
  }, a.getResult = function(a, b) {
    var c = this._loadItemsById[a] || this._loadItemsBySrc[a];
    if (null == c) {
      return null;
    }
    var d = c.id;
    return b && this._loadedRawResults[d] ? this._loadedRawResults[d] : this._loadedResults[d];
  }, a.getItems = function(a) {
    var b = [];
    for (var c in this._loadItemsById) {
      var d = this._loadItemsById[c], e = this.getResult(c);
      (a !== !0 || null != e) && b.push({item:d, result:e, rawResult:this.getResult(c, !0)});
    }
    return b;
  }, a.setPaused = function(a) {
    this._paused = a, this._paused || this._loadNext();
  }, a.close = function() {
    for (;this._currentLoads.length;) {
      this._currentLoads.pop().cancel();
    }
    this._scriptOrder.length = 0, this._loadedScripts.length = 0, this.loadStartWasDispatched = !1, this._itemCount = 0, this._lastProgress = 0 / 0;
  }, a._addItem = function(a, b, c) {
    var d = this._createLoadItem(a, b, c);
    if (null != d) {
      var e = this._createLoader(d);
      null != e && ("plugins" in e && (e.plugins = this._plugins), d._loader = e, this._loadQueue.push(e), this._loadQueueBackup.push(e), this._numItems++, this._updateProgress(), (this.maintainScriptOrder && d.type == createjs.LoadQueue.JAVASCRIPT || d.maintainOrder === !0) && (this._scriptOrder.push(d), this._loadedScripts.push(null)));
    }
  }, a._createLoadItem = function(a, b, c) {
    var d = createjs.LoadItem.create(a);
    if (null == d) {
      return null;
    }
    var e = "", f = c || this._basePath;
    if (d.src instanceof Object) {
      if (!d.type) {
        return null;
      }
      if (b) {
        e = b;
        var g = createjs.RequestUtils.parseURI(b);
        null == f || g.absolute || g.relative || (e = f + e);
      } else {
        null != f && (e = f);
      }
    } else {
      var h = createjs.RequestUtils.parseURI(d.src);
      h.extension && (d.ext = h.extension), null == d.type && (d.type = createjs.RequestUtils.getTypeByExtension(d.ext));
      var i = d.src;
      if (!h.absolute && !h.relative) {
        if (b) {
          e = b;
          var g = createjs.RequestUtils.parseURI(b);
          i = b + i, null == f || g.absolute || g.relative || (e = f + e);
        } else {
          null != f && (e = f);
        }
      }
      d.src = e + d.src;
    }
    d.path = e, (void 0 === d.id || null === d.id || "" === d.id) && (d.id = i);
    var j = this._typeCallbacks[d.type] || this._extensionCallbacks[d.ext];
    if (j) {
      var k = j.callback.call(j.scope, d, this);
      if (k === !1) {
        return null;
      }
      k === !0 || null != k && (d._loader = k), h = createjs.RequestUtils.parseURI(d.src), null != h.extension && (d.ext = h.extension);
    }
    return this._loadItemsById[d.id] = d, this._loadItemsBySrc[d.src] = d, null == d.crossOrigin && (d.crossOrigin = this._crossOrigin), d;
  }, a._createLoader = function(a) {
    if (null != a._loader) {
      return a._loader;
    }
    for (var b = this.preferXHR, c = 0;c < this._availableLoaders.length;c++) {
      var d = this._availableLoaders[c];
      if (d && d.canLoadItem(a)) {
        return new d(a, b);
      }
    }
    return null;
  }, a._loadNext = function() {
    if (!this._paused) {
      this._loadStartWasDispatched || (this._sendLoadStart(), this._loadStartWasDispatched = !0), this._numItems == this._numItemsLoaded ? (this.loaded = !0, this._sendComplete(), this.next && this.next.load && this.next.load()) : this.loaded = !1;
      for (var a = 0;a < this._loadQueue.length && !(this._currentLoads.length >= this._maxConnections);a++) {
        var b = this._loadQueue[a];
        this._canStartLoad(b) && (this._loadQueue.splice(a, 1), a--, this._loadItem(b));
      }
    }
  }, a._loadItem = function(a) {
    a.on("fileload", this._handleFileLoad, this), a.on("progress", this._handleProgress, this), a.on("complete", this._handleFileComplete, this), a.on("error", this._handleError, this), a.on("fileerror", this._handleFileError, this), this._currentLoads.push(a), this._sendFileStart(a.getItem()), a.load();
  }, a._handleFileLoad = function(a) {
    a.target = null, this.dispatchEvent(a);
  }, a._handleFileError = function(a) {
    var b = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, a.item);
    this._sendError(b);
  }, a._handleError = function(a) {
    var b = a.target;
    this._numItemsLoaded++, this._finishOrderedItem(b, !0), this._updateProgress();
    var c = new createjs.ErrorEvent("FILE_LOAD_ERROR", null, b.getItem());
    this._sendError(c), this.stopOnError ? this.setPaused(!0) : (this._removeLoadItem(b), this._cleanLoadItem(b), this._loadNext());
  }, a._handleFileComplete = function(a) {
    var b = a.target, c = b.getItem(), d = b.getResult();
    this._loadedResults[c.id] = d;
    var e = b.getResult(!0);
    null != e && e !== d && (this._loadedRawResults[c.id] = e), this._saveLoadedItems(b), this._removeLoadItem(b), this._finishOrderedItem(b) || this._processFinishedLoad(c, b), this._cleanLoadItem(b);
  }, a._saveLoadedItems = function(a) {
    var b = a.getLoadedItems();
    if (null !== b) {
      for (var c = 0;c < b.length;c++) {
        var d = b[c].item;
        this._loadItemsBySrc[d.src] = d, this._loadItemsById[d.id] = d, this._loadedResults[d.id] = b[c].result, this._loadedRawResults[d.id] = b[c].rawResult;
      }
    }
  }, a._finishOrderedItem = function(a, b) {
    var c = a.getItem();
    if (this.maintainScriptOrder && c.type == createjs.LoadQueue.JAVASCRIPT || c.maintainOrder) {
      a instanceof createjs.JavaScriptLoader && (this._currentlyLoadingScript = !1);
      var d = createjs.indexOf(this._scriptOrder, c);
      return -1 == d ? !1 : (this._loadedScripts[d] = b === !0 ? !0 : c, this._checkScriptLoadOrder(), !0);
    }
    return !1;
  }, a._checkScriptLoadOrder = function() {
    for (var a = this._loadedScripts.length, b = 0;a > b;b++) {
      var c = this._loadedScripts[b];
      if (null === c) {
        break;
      }
      if (c !== !0) {
        var d = this._loadedResults[c.id];
        c.type == createjs.LoadQueue.JAVASCRIPT && createjs.DomUtils.appendToHead(d);
        var e = c._loader;
        this._processFinishedLoad(c, e), this._loadedScripts[b] = !0;
      }
    }
  }, a._processFinishedLoad = function(a, b) {
    if (this._numItemsLoaded++, !this.maintainScriptOrder && a.type == createjs.LoadQueue.JAVASCRIPT) {
      var c = b.getTag();
      createjs.DomUtils.appendToHead(c);
    }
    this._updateProgress(), this._sendFileComplete(a, b), this._loadNext();
  }, a._canStartLoad = function(a) {
    if (!this.maintainScriptOrder || a.preferXHR) {
      return !0;
    }
    var b = a.getItem();
    if (b.type != createjs.LoadQueue.JAVASCRIPT) {
      return !0;
    }
    if (this._currentlyLoadingScript) {
      return !1;
    }
    for (var c = this._scriptOrder.indexOf(b), d = 0;c > d;) {
      var e = this._loadedScripts[d];
      if (null == e) {
        return !1;
      }
      d++;
    }
    return this._currentlyLoadingScript = !0, !0;
  }, a._removeLoadItem = function(a) {
    for (var b = this._currentLoads.length, c = 0;b > c;c++) {
      if (this._currentLoads[c] == a) {
        this._currentLoads.splice(c, 1);
        break;
      }
    }
  }, a._cleanLoadItem = function(a) {
    var b = a.getItem();
    b && delete b._loader;
  }, a._handleProgress = function(a) {
    var b = a.target;
    this._sendFileProgress(b.getItem(), b.progress), this._updateProgress();
  }, a._updateProgress = function() {
    var a = this._numItemsLoaded / this._numItems, b = this._numItems - this._numItemsLoaded;
    if (b > 0) {
      for (var c = 0, d = 0, e = this._currentLoads.length;e > d;d++) {
        c += this._currentLoads[d].progress;
      }
      a += c / b * (b / this._numItems);
    }
    this._lastProgress != a && (this._sendProgress(a), this._lastProgress = a);
  }, a._disposeItem = function(a) {
    delete this._loadedResults[a.id], delete this._loadedRawResults[a.id], delete this._loadItemsById[a.id], delete this._loadItemsBySrc[a.src];
  }, a._sendFileProgress = function(a, b) {
    if (!this._isCanceled() && !this._paused && this.hasEventListener("fileprogress")) {
      var c = new createjs.Event("fileprogress");
      c.progress = b, c.loaded = b, c.total = 1, c.item = a, this.dispatchEvent(c);
    }
  }, a._sendFileComplete = function(a, b) {
    if (!this._isCanceled() && !this._paused) {
      var c = new createjs.Event("fileload");
      c.loader = b, c.item = a, c.result = this._loadedResults[a.id], c.rawResult = this._loadedRawResults[a.id], a.completeHandler && a.completeHandler(c), this.hasEventListener("fileload") && this.dispatchEvent(c);
    }
  }, a._sendFileStart = function(a) {
    var b = new createjs.Event("filestart");
    b.item = a, this.hasEventListener("filestart") && this.dispatchEvent(b);
  }, a.toString = function() {
    return "[PreloadJS LoadQueue]";
  }, createjs.LoadQueue = createjs.promote(LoadQueue, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function TextLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.TEXT);
  }
  var a = (createjs.extend(TextLoader, createjs.AbstractLoader), TextLoader);
  a.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.TEXT;
  }, createjs.TextLoader = createjs.promote(TextLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function BinaryLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.BINARY), this.on("initialize", this._updateXHR, this);
  }
  var a = createjs.extend(BinaryLoader, createjs.AbstractLoader), b = BinaryLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.BINARY;
  }, a._updateXHR = function(a) {
    a.loader.setResponseType("arraybuffer");
  }, createjs.BinaryLoader = createjs.promote(BinaryLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function CSSLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.CSS), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "href", this._tag = document.createElement(b ? "style" : "link"), this._tag.rel = "stylesheet", this._tag.type = "text/css";
  }
  var a = createjs.extend(CSSLoader, createjs.AbstractLoader), b = CSSLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.CSS;
  }, a._formatResult = function(a) {
    if (this._preferXHR) {
      var b = a.getTag();
      if (b.styleSheet) {
        b.styleSheet.cssText = a.getResult(!0);
      } else {
        var c = document.createTextNode(a.getResult(!0));
        b.appendChild(c);
      }
    } else {
      b = this._tag;
    }
    return createjs.DomUtils.appendToHead(b), b;
  }, createjs.CSSLoader = createjs.promote(CSSLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function ImageLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.IMAGE), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", createjs.RequestUtils.isImageTag(a) ? this._tag = a : createjs.RequestUtils.isImageTag(a.src) ? this._tag = a.src : createjs.RequestUtils.isImageTag(a.tag) && (this._tag = a.tag), null != this._tag ? this._preferXHR = !1 : this._tag = document.createElement("img"), this.on("initialize", this._updateXHR, this);
  }
  var a = createjs.extend(ImageLoader, createjs.AbstractLoader), b = ImageLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.IMAGE;
  }, a.load = function() {
    if ("" != this._tag.src && this._tag.complete) {
      return void this._sendComplete();
    }
    var a = this._item.crossOrigin;
    1 == a && (a = "Anonymous"), null == a || createjs.RequestUtils.isLocal(this._item.src) || (this._tag.crossOrigin = a), this.AbstractLoader_load();
  }, a._updateXHR = function(a) {
    a.loader.mimeType = "text/plain; charset=x-user-defined-binary", a.loader.setResponseType && a.loader.setResponseType("blob");
  }, a._formatResult = function() {
    return this._formatImage;
  }, a._formatImage = function(a, b) {
    var c = this._tag, d = window.URL || window.webkitURL;
    if (this._preferXHR) {
      if (d) {
        var e = d.createObjectURL(this.getResult(!0));
        c.src = e, c.addEventListener("load", this._cleanUpURL, !1), c.addEventListener("error", this._cleanUpURL, !1);
      } else {
        c.src = this._item.src;
      }
    } else {
    }
    c.complete ? a(c) : (c.onload = createjs.proxy(function() {
      a(this._tag);
    }, this), c.onerror = createjs.proxy(function() {
      b(_this._tag);
    }, this));
  }, a._cleanUpURL = function(a) {
    var b = window.URL || window.webkitURL;
    b.revokeObjectURL(a.target.src);
  }, createjs.ImageLoader = createjs.promote(ImageLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function JavaScriptLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.JAVASCRIPT), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.setTag(document.createElement("script"));
  }
  var a = createjs.extend(JavaScriptLoader, createjs.AbstractLoader), b = JavaScriptLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.JAVASCRIPT;
  }, a._formatResult = function(a) {
    var b = a.getTag();
    return this._preferXHR && (b.text = a.getResult(!0)), b;
  }, createjs.JavaScriptLoader = createjs.promote(JavaScriptLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function JSONLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.JSON), this.resultFormatter = this._formatResult;
  }
  var a = createjs.extend(JSONLoader, createjs.AbstractLoader), b = JSONLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.JSON;
  }, a._formatResult = function(a) {
    var b = null;
    try {
      b = createjs.DataUtils.parseJSON(a.getResult(!0));
    } catch (c) {
      var d = new createjs.ErrorEvent("JSON_FORMAT", null, c);
      return this._sendError(d), c;
    }
    return b;
  }, createjs.JSONLoader = createjs.promote(JSONLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function JSONPLoader(a) {
    this.AbstractLoader_constructor(a, !1, createjs.AbstractLoader.JSONP), this.setTag(document.createElement("script")), this.getTag().type = "text/javascript";
  }
  var a = createjs.extend(JSONPLoader, createjs.AbstractLoader), b = JSONPLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.JSONP;
  }, a.cancel = function() {
    this.AbstractLoader_cancel(), this._dispose();
  }, a.load = function() {
    if (null == this._item.callback) {
      throw new Error("callback is required for loading JSONP requests.");
    }
    if (null != window[this._item.callback]) {
      throw new Error("JSONP callback '" + this._item.callback + "' already exists on window. You need to specify a different callback or re-name the current one.");
    }
    window[this._item.callback] = createjs.proxy(this._handleLoad, this), window.document.body.appendChild(this._tag), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag.src = this._item.src;
  }, a._handleLoad = function(a) {
    this._result = this._rawResult = a, this._sendComplete(), this._dispose();
  }, a._handleTimeout = function() {
    this._dispose(), this.dispatchEvent(new createjs.ErrorEvent("timeout"));
  }, a._dispose = function() {
    window.document.body.removeChild(this._tag), delete window[this._item.callback], clearTimeout(this._loadTimeout);
  }, createjs.JSONPLoader = createjs.promote(JSONPLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function ManifestLoader(a) {
    this.AbstractLoader_constructor(a, null, createjs.AbstractLoader.MANIFEST), this.plugins = null, this._manifestQueue = null;
  }
  var a = createjs.extend(ManifestLoader, createjs.AbstractLoader), b = ManifestLoader;
  b.MANIFEST_PROGRESS = .25, b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.MANIFEST;
  }, a.load = function() {
    this.AbstractLoader_load();
  }, a._createRequest = function() {
    var a = this._item.callback;
    this._request = null != a ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
  }, a.handleEvent = function(a) {
    switch(a.type) {
      case "complete":
        return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(b.MANIFEST_PROGRESS), void this._loadManifest(this._result);
      case "progress":
        return a.loaded *= b.MANIFEST_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0), void this._sendProgress(a);
    }
    this.AbstractLoader_handleEvent(a);
  }, a.destroy = function() {
    this.AbstractLoader_destroy(), this._manifestQueue.close();
  }, a._loadManifest = function(a) {
    if (a && a.manifest) {
      var b = this._manifestQueue = new createjs.LoadQueue;
      b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("complete", this._handleManifestComplete, this, !0), b.on("error", this._handleManifestError, this, !0);
      for (var c = 0, d = this.plugins.length;d > c;c++) {
        b.installPlugin(this.plugins[c]);
      }
      b.loadManifest(a);
    } else {
      this._sendComplete();
    }
  }, a._handleManifestFileLoad = function(a) {
    a.target = null, this.dispatchEvent(a);
  }, a._handleManifestComplete = function() {
    this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete();
  }, a._handleManifestProgress = function(a) {
    this.progress = a.progress * (1 - b.MANIFEST_PROGRESS) + b.MANIFEST_PROGRESS, this._sendProgress(this.progress);
  }, a._handleManifestError = function(a) {
    var b = new createjs.Event("fileerror");
    b.item = a.data, this.dispatchEvent(b);
  }, createjs.ManifestLoader = createjs.promote(ManifestLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function SoundLoader(a, b) {
    this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(a) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.src) ? this._tag = a : createjs.RequestUtils.isAudioTag(a.tag) && (this._tag = createjs.RequestUtils.isAudioTag(a) ? a : a.src), null != this._tag && (this._preferXHR = !1);
  }
  var a = createjs.extend(SoundLoader, createjs.AbstractMediaLoader), b = SoundLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.SOUND;
  }, a._createTag = function(a) {
    var b = document.createElement("audio");
    return b.autoplay = !1, b.preload = "none", b.src = a, b;
  }, createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function() {
  function VideoLoader(a, b) {
    this.AbstractMediaLoader_constructor(a, b, createjs.AbstractLoader.VIDEO), createjs.RequestUtils.isVideoTag(a) || createjs.RequestUtils.isVideoTag(a.src) ? (this.setTag(createjs.RequestUtils.isVideoTag(a) ? a : a.src), this._preferXHR = !1) : this.setTag(this._createTag());
  }
  var a = createjs.extend(VideoLoader, createjs.AbstractMediaLoader), b = VideoLoader;
  a._createTag = function() {
    return document.createElement("video");
  }, b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.VIDEO;
  }, createjs.VideoLoader = createjs.promote(VideoLoader, "AbstractMediaLoader");
}(), this.createjs = this.createjs || {}, function() {
  function SpriteSheetLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.SPRITESHEET), this._manifestQueue = null;
  }
  var a = createjs.extend(SpriteSheetLoader, createjs.AbstractLoader), b = SpriteSheetLoader;
  b.SPRITESHEET_PROGRESS = .25, b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.SPRITESHEET;
  }, a.destroy = function() {
    this.AbstractLoader_destroy, this._manifestQueue.close();
  }, a._createRequest = function() {
    var a = this._item.callback;
    this._request = null != a ? new createjs.JSONPLoader(this._item) : new createjs.JSONLoader(this._item);
  }, a.handleEvent = function(a) {
    switch(a.type) {
      case "complete":
        return this._rawResult = a.target.getResult(!0), this._result = a.target.getResult(), this._sendProgress(b.SPRITESHEET_PROGRESS), void this._loadManifest(this._result);
      case "progress":
        return a.loaded *= b.SPRITESHEET_PROGRESS, this.progress = a.loaded / a.total, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0), void this._sendProgress(a);
    }
    this.AbstractLoader_handleEvent(a);
  }, a._loadManifest = function(a) {
    if (a && a.images) {
      var b = this._manifestQueue = new createjs.LoadQueue(this._preferXHR, this._item.path, this._item.crossOrigin);
      b.on("complete", this._handleManifestComplete, this, !0), b.on("fileload", this._handleManifestFileLoad, this), b.on("progress", this._handleManifestProgress, this), b.on("error", this._handleManifestError, this, !0), b.loadManifest(a.images);
    }
  }, a._handleManifestFileLoad = function(a) {
    var b = a.result;
    if (null != b) {
      var c = this.getResult().images, d = c.indexOf(a.item.src);
      c[d] = b;
    }
  }, a._handleManifestComplete = function() {
    this._result = new createjs.SpriteSheet(this._result), this._loadedItems = this._manifestQueue.getItems(!0), this._sendComplete();
  }, a._handleManifestProgress = function(a) {
    this.progress = a.progress * (1 - b.SPRITESHEET_PROGRESS) + b.SPRITESHEET_PROGRESS, this._sendProgress(this.progress);
  }, a._handleManifestError = function(a) {
    var b = new createjs.Event("fileerror");
    b.item = a.data, this.dispatchEvent(b);
  }, createjs.SpriteSheetLoader = createjs.promote(SpriteSheetLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function SVGLoader(a, b) {
    this.AbstractLoader_constructor(a, b, createjs.AbstractLoader.SVG), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "data", b ? this.setTag(document.createElement("svg")) : (this.setTag(document.createElement("object")), this.getTag().type = "image/svg+xml");
  }
  var a = createjs.extend(SVGLoader, createjs.AbstractLoader), b = SVGLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.SVG;
  }, a._formatResult = function(a) {
    var b = createjs.DataUtils.parseXML(a.getResult(!0), "text/xml"), c = a.getTag();
    return !this._preferXHR && document.body.contains(c) && document.body.removeChild(c), null != b.documentElement ? (c.appendChild(b.documentElement), c.style.visibility = "visible", c) : b;
  }, createjs.SVGLoader = createjs.promote(SVGLoader, "AbstractLoader");
}(), this.createjs = this.createjs || {}, function() {
  function XMLLoader(a) {
    this.AbstractLoader_constructor(a, !0, createjs.AbstractLoader.XML), this.resultFormatter = this._formatResult;
  }
  var a = createjs.extend(XMLLoader, createjs.AbstractLoader), b = XMLLoader;
  b.canLoadItem = function(a) {
    return a.type == createjs.AbstractLoader.XML;
  }, a._formatResult = function(a) {
    return createjs.DataUtils.parseXML(a.getResult(!0), "text/xml");
  }, createjs.XMLLoader = createjs.promote(XMLLoader, "AbstractLoader");
}();
this.createjs = this.createjs || {};
(function() {
  var s = createjs.SoundJS = createjs.SoundJS || {};
  s.version = "NEXT";
  s.buildDate = "Wed, 25 Nov 2015 15:43:09 GMT";
})();
this.createjs = this.createjs || {};
createjs.extend = function(subclass, superclass) {
  function o() {
    this.constructor = subclass;
  }
  o.prototype = superclass.prototype;
  return subclass.prototype = new o;
};
this.createjs = this.createjs || {};
createjs.promote = function(subclass, prefix) {
  var subP = subclass.prototype, supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
  if (supP) {
    subP[(prefix += "_") + "constructor"] = supP.constructor;
    for (var n in supP) {
      if (subP.hasOwnProperty(n) && typeof supP[n] == "function") {
        subP[prefix + n] = supP[n];
      }
    }
  }
  return subclass;
};
this.createjs = this.createjs || {};
createjs.indexOf = function(array, searchElement) {
  for (var i = 0, l = array.length;i < l;i++) {
    if (searchElement === array[i]) {
      return i;
    }
  }
  return -1;
};
this.createjs = this.createjs || {};
(function() {
  createjs.proxy = function(method, scope) {
    var aArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      return method.apply(scope, Array.prototype.slice.call(arguments, 0).concat(aArgs));
    };
  };
})();
this.createjs = this.createjs || {};
(function() {
  function BrowserDetect() {
    throw "BrowserDetect cannot be instantiated";
  }
  var agent = BrowserDetect.agent = window.navigator.userAgent;
  BrowserDetect.isWindowPhone = agent.indexOf("IEMobile") > -1 || agent.indexOf("Windows Phone") > -1;
  BrowserDetect.isFirefox = agent.indexOf("Firefox") > -1;
  BrowserDetect.isOpera = window.opera != null;
  BrowserDetect.isChrome = agent.indexOf("Chrome") > -1;
  BrowserDetect.isIOS = (agent.indexOf("iPod") > -1 || agent.indexOf("iPhone") > -1 || agent.indexOf("iPad") > -1) && !BrowserDetect.isWindowPhone;
  BrowserDetect.isAndroid = agent.indexOf("Android") > -1 && !BrowserDetect.isWindowPhone;
  BrowserDetect.isBlackberry = agent.indexOf("Blackberry") > -1;
  createjs.BrowserDetect = BrowserDetect;
})();
this.createjs = this.createjs || {};
(function() {
  function EventDispatcher() {
    this._listeners = null;
    this._captureListeners = null;
  }
  var p = EventDispatcher.prototype;
  EventDispatcher.initialize = function(target) {
    target.addEventListener = p.addEventListener;
    target.on = p.on;
    target.removeEventListener = target.off = p.removeEventListener;
    target.removeAllEventListeners = p.removeAllEventListeners;
    target.hasEventListener = p.hasEventListener;
    target.dispatchEvent = p.dispatchEvent;
    target._dispatchEvent = p._dispatchEvent;
    target.willTrigger = p.willTrigger;
  };
  p.addEventListener = function(type, listener, useCapture) {
    var listeners;
    if (useCapture) {
      listeners = this._captureListeners = this._captureListeners || {};
    } else {
      listeners = this._listeners = this._listeners || {};
    }
    var arr = listeners[type];
    if (arr) {
      this.removeEventListener(type, listener, useCapture);
    }
    arr = listeners[type];
    if (!arr) {
      listeners[type] = [listener];
    } else {
      arr.push(listener);
    }
    return listener;
  };
  p.on = function(type, listener, scope, once, data, useCapture) {
    if (listener.handleEvent) {
      scope = scope || listener;
      listener = listener.handleEvent;
    }
    scope = scope || this;
    return this.addEventListener(type, function(evt) {
      listener.call(scope, evt, data);
      once && evt.remove();
    }, useCapture);
  };
  p.removeEventListener = function(type, listener, useCapture) {
    var listeners = useCapture ? this._captureListeners : this._listeners;
    if (!listeners) {
      return;
    }
    var arr = listeners[type];
    if (!arr) {
      return;
    }
    for (var i = 0, l = arr.length;i < l;i++) {
      if (arr[i] == listener) {
        if (l == 1) {
          delete listeners[type];
        } else {
          arr.splice(i, 1);
        }
        break;
      }
    }
  };
  p.off = p.removeEventListener;
  p.removeAllEventListeners = function(type) {
    if (!type) {
      this._listeners = this._captureListeners = null;
    } else {
      if (this._listeners) {
        delete this._listeners[type];
      }
      if (this._captureListeners) {
        delete this._captureListeners[type];
      }
    }
  };
  p.dispatchEvent = function(eventObj) {
    if (typeof eventObj == "string") {
      var listeners = this._listeners;
      if (!listeners || !listeners[eventObj]) {
        return false;
      }
      eventObj = new createjs.Event(eventObj);
    } else {
      if (eventObj.target && eventObj.clone) {
        eventObj = eventObj.clone();
      }
    }
    try {
      eventObj.target = this;
    } catch (e) {
    }
    if (!eventObj.bubbles || !this.parent) {
      this._dispatchEvent(eventObj, 2);
    } else {
      var top = this, list = [top];
      while (top.parent) {
        list.push(top = top.parent);
      }
      var i, l = list.length;
      for (i = l - 1;i >= 0 && !eventObj.propagationStopped;i--) {
        list[i]._dispatchEvent(eventObj, 1 + (i == 0));
      }
      for (i = 1;i < l && !eventObj.propagationStopped;i++) {
        list[i]._dispatchEvent(eventObj, 3);
      }
    }
    return eventObj.defaultPrevented;
  };
  p.hasEventListener = function(type) {
    var listeners = this._listeners, captureListeners = this._captureListeners;
    return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);
  };
  p.willTrigger = function(type) {
    var o = this;
    while (o) {
      if (o.hasEventListener(type)) {
        return true;
      }
      o = o.parent;
    }
    return false;
  };
  p.toString = function() {
    return "[EventDispatcher]";
  };
  p._dispatchEvent = function(eventObj, eventPhase) {
    var l, listeners = eventPhase == 1 ? this._captureListeners : this._listeners;
    if (eventObj && listeners) {
      var arr = listeners[eventObj.type];
      if (!arr || !(l = arr.length)) {
        return;
      }
      try {
        eventObj.currentTarget = this;
      } catch (e) {
      }
      try {
        eventObj.eventPhase = eventPhase;
      } catch (e) {
      }
      eventObj.removed = false;
      arr = arr.slice();
      for (var i = 0;i < l && !eventObj.immediatePropagationStopped;i++) {
        var o = arr[i];
        if (o.handleEvent) {
          o.handleEvent(eventObj);
        } else {
          o(eventObj);
        }
        if (eventObj.removed) {
          this.off(eventObj.type, o, eventPhase == 1);
          eventObj.removed = false;
        }
      }
    }
  };
  createjs.EventDispatcher = EventDispatcher;
})();
this.createjs = this.createjs || {};
(function() {
  function Event(type, bubbles, cancelable) {
    this.type = type;
    this.target = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
    this.timeStamp = (new Date).getTime();
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    this.removed = false;
  }
  var p = Event.prototype;
  p.preventDefault = function() {
    this.defaultPrevented = this.cancelable && true;
  };
  p.stopPropagation = function() {
    this.propagationStopped = true;
  };
  p.stopImmediatePropagation = function() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };
  p.remove = function() {
    this.removed = true;
  };
  p.clone = function() {
    return new Event(this.type, this.bubbles, this.cancelable);
  };
  p.set = function(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  p.toString = function() {
    return "[Event (type=" + this.type + ")]";
  };
  createjs.Event = Event;
})();
this.createjs = this.createjs || {};
(function() {
  function ErrorEvent(title, message, data) {
    this.Event_constructor("error");
    this.title = title;
    this.message = message;
    this.data = data;
  }
  var p = createjs.extend(ErrorEvent, createjs.Event);
  p.clone = function() {
    return new createjs.ErrorEvent(this.title, this.message, this.data);
  };
  createjs.ErrorEvent = createjs.promote(ErrorEvent, "Event");
})();
this.createjs = this.createjs || {};
(function(scope) {
  function ProgressEvent(loaded, total) {
    this.Event_constructor("progress");
    this.loaded = loaded;
    this.total = total == null ? 1 : total;
    this.progress = total == 0 ? 0 : this.loaded / this.total;
  }
  var p = createjs.extend(ProgressEvent, createjs.Event);
  p.clone = function() {
    return new createjs.ProgressEvent(this.loaded, this.total);
  };
  createjs.ProgressEvent = createjs.promote(ProgressEvent, "Event");
})(window);
this.createjs = this.createjs || {};
(function() {
  function LoadItem() {
    this.src = null;
    this.type = null;
    this.id = null;
    this.maintainOrder = false;
    this.callback = null;
    this.data = null;
    this.method = createjs.LoadItem.GET;
    this.values = null;
    this.headers = null;
    this.withCredentials = false;
    this.mimeType = null;
    this.crossOrigin = null;
    this.loadTimeout = s.LOAD_TIMEOUT_DEFAULT;
  }
  var p = LoadItem.prototype = {};
  var s = LoadItem;
  s.LOAD_TIMEOUT_DEFAULT = 8E3;
  s.create = function(value) {
    if (typeof value == "string") {
      var item = new LoadItem;
      item.src = value;
      return item;
    } else {
      if (value instanceof s) {
        return value;
      } else {
        if (value instanceof Object && value.src) {
          if (value.loadTimeout == null) {
            value.loadTimeout = s.LOAD_TIMEOUT_DEFAULT;
          }
          return value;
        } else {
          throw new Error("Type not recognized.");
        }
      }
    }
  };
  p.set = function(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  createjs.LoadItem = s;
})();
(function() {
  var s = {};
  s.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i;
  s.RELATIVE_PATT = /^[./]*?\//i;
  s.EXTENSION_PATT = /\/?[^/]+\.(\w{1,5})$/i;
  s.parseURI = function(path) {
    var info = {absolute:false, relative:false};
    if (path == null) {
      return info;
    }
    var queryIndex = path.indexOf("?");
    if (queryIndex > -1) {
      path = path.substr(0, queryIndex);
    }
    var match;
    if (s.ABSOLUTE_PATT.test(path)) {
      info.absolute = true;
    } else {
      if (s.RELATIVE_PATT.test(path)) {
        info.relative = true;
      }
    }
    if (match = path.match(s.EXTENSION_PATT)) {
      info.extension = match[1].toLowerCase();
    }
    return info;
  };
  s.formatQueryString = function(data, query) {
    if (data == null) {
      throw new Error("You must specify data.");
    }
    var params = [];
    for (var n in data) {
      params.push(n + "=" + escape(data[n]));
    }
    if (query) {
      params = params.concat(query);
    }
    return params.join("&");
  };
  s.buildPath = function(src, data) {
    if (data == null) {
      return src;
    }
    var query = [];
    var idx = src.indexOf("?");
    if (idx != -1) {
      var q = src.slice(idx + 1);
      query = query.concat(q.split("&"));
    }
    if (idx != -1) {
      return src.slice(0, idx) + "?" + this._formatQueryString(data, query);
    } else {
      return src + "?" + this._formatQueryString(data, query);
    }
  };
  s.isCrossDomain = function(item) {
    var target = document.createElement("a");
    target.href = item.src;
    var host = document.createElement("a");
    host.href = location.href;
    var crossdomain = target.hostname != "" && (target.port != host.port || target.protocol != host.protocol || target.hostname != host.hostname);
    return crossdomain;
  };
  s.isLocal = function(item) {
    var target = document.createElement("a");
    target.href = item.src;
    return target.hostname == "" && target.protocol == "file:";
  };
  s.isBinary = function(type) {
    switch(type) {
      case createjs.AbstractLoader.IMAGE:
      case createjs.AbstractLoader.BINARY:
        return true;
      default:
        return false;
    }
  };
  s.isImageTag = function(item) {
    return item instanceof HTMLImageElement;
  };
  s.isAudioTag = function(item) {
    if (window.HTMLAudioElement) {
      return item instanceof HTMLAudioElement;
    } else {
      return false;
    }
  };
  s.isVideoTag = function(item) {
    if (window.HTMLVideoElement) {
      return item instanceof HTMLVideoElement;
    } else {
      return false;
    }
  };
  s.isText = function(type) {
    switch(type) {
      case createjs.AbstractLoader.TEXT:
      case createjs.AbstractLoader.JSON:
      case createjs.AbstractLoader.MANIFEST:
      case createjs.AbstractLoader.XML:
      case createjs.AbstractLoader.CSS:
      case createjs.AbstractLoader.SVG:
      case createjs.AbstractLoader.JAVASCRIPT:
      case createjs.AbstractLoader.SPRITESHEET:
        return true;
      default:
        return false;
    }
  };
  s.getTypeByExtension = function(extension) {
    if (extension == null) {
      return createjs.AbstractLoader.TEXT;
    }
    switch(extension.toLowerCase()) {
      case "jpeg":
      case "jpg":
      case "gif":
      case "png":
      case "webp":
      case "bmp":
        return createjs.AbstractLoader.IMAGE;
      case "ogg":
      case "mp3":
      case "webm":
        return createjs.AbstractLoader.SOUND;
      case "mp4":
      case "webm":
      case "ts":
        return createjs.AbstractLoader.VIDEO;
      case "json":
        return createjs.AbstractLoader.JSON;
      case "xml":
        return createjs.AbstractLoader.XML;
      case "css":
        return createjs.AbstractLoader.CSS;
      case "js":
        return createjs.AbstractLoader.JAVASCRIPT;
      case "svg":
        return createjs.AbstractLoader.SVG;
      default:
        return createjs.AbstractLoader.TEXT;
    }
  };
  createjs.RequestUtils = s;
})();
this.createjs = this.createjs || {};
(function() {
  function AbstractLoader(loadItem, preferXHR, type) {
    this.EventDispatcher_constructor();
    this.loaded = false;
    this.canceled = false;
    this.progress = 0;
    this.type = type;
    this.resultFormatter = null;
    if (loadItem) {
      this._item = createjs.LoadItem.create(loadItem);
    } else {
      this._item = null;
    }
    this._preferXHR = preferXHR;
    this._result = null;
    this._rawResult = null;
    this._loadedItems = null;
    this._tagSrcAttribute = null;
    this._tag = null;
  }
  var p = createjs.extend(AbstractLoader, createjs.EventDispatcher);
  var s = AbstractLoader;
  s.POST = "POST";
  s.GET = "GET";
  s.BINARY = "binary";
  s.CSS = "css";
  s.IMAGE = "image";
  s.JAVASCRIPT = "javascript";
  s.JSON = "json";
  s.JSONP = "jsonp";
  s.MANIFEST = "manifest";
  s.SOUND = "sound";
  s.VIDEO = "video";
  s.SPRITESHEET = "spritesheet";
  s.SVG = "svg";
  s.TEXT = "text";
  s.XML = "xml";
  p.getItem = function() {
    return this._item;
  };
  p.getResult = function(raw) {
    return raw ? this._rawResult : this._result;
  };
  p.getTag = function() {
    return this._tag;
  };
  p.setTag = function(tag) {
    this._tag = tag;
  };
  p.load = function() {
    this._createRequest();
    this._request.on("complete", this, this);
    this._request.on("progress", this, this);
    this._request.on("loadStart", this, this);
    this._request.on("abort", this, this);
    this._request.on("timeout", this, this);
    this._request.on("error", this, this);
    var evt = new createjs.Event("initialize");
    evt.loader = this._request;
    this.dispatchEvent(evt);
    this._request.load();
  };
  p.cancel = function() {
    this.canceled = true;
    this.destroy();
  };
  p.destroy = function() {
    if (this._request) {
      this._request.removeAllEventListeners();
      this._request.destroy();
    }
    this._request = null;
    this._item = null;
    this._rawResult = null;
    this._result = null;
    this._loadItems = null;
    this.removeAllEventListeners();
  };
  p.getLoadedItems = function() {
    return this._loadedItems;
  };
  p._createRequest = function() {
    if (!this._preferXHR) {
      this._request = new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
    } else {
      this._request = new createjs.XHRRequest(this._item);
    }
  };
  p._createTag = function(src) {
    return null;
  };
  p._sendLoadStart = function() {
    if (this._isCanceled()) {
      return;
    }
    this.dispatchEvent("loadstart");
  };
  p._sendProgress = function(value) {
    if (this._isCanceled()) {
      return;
    }
    var event = null;
    if (typeof value == "number") {
      this.progress = value;
      event = new createjs.ProgressEvent(this.progress);
    } else {
      event = value;
      this.progress = value.loaded / value.total;
      event.progress = this.progress;
      if (isNaN(this.progress) || this.progress == Infinity) {
        this.progress = 0;
      }
    }
    this.hasEventListener("progress") && this.dispatchEvent(event);
  };
  p._sendComplete = function() {
    if (this._isCanceled()) {
      return;
    }
    this.loaded = true;
    var event = new createjs.Event("complete");
    event.rawResult = this._rawResult;
    if (this._result != null) {
      event.result = this._result;
    }
    this.dispatchEvent(event);
  };
  p._sendError = function(event) {
    if (this._isCanceled() || !this.hasEventListener("error")) {
      return;
    }
    if (event == null) {
      event = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY");
    }
    this.dispatchEvent(event);
  };
  p._isCanceled = function() {
    if (window.createjs == null || this.canceled) {
      return true;
    }
    return false;
  };
  p.resultFormatter = null;
  p.handleEvent = function(event) {
    switch(event.type) {
      case "complete":
        this._rawResult = event.target._response;
        var result = this.resultFormatter && this.resultFormatter(this);
        var _this = this;
        if (result instanceof Function) {
          result(function(result) {
            _this._result = result;
            _this._sendComplete();
          });
        } else {
          this._result = result || this._rawResult;
          this._sendComplete();
        }
        break;
      case "progress":
        this._sendProgress(event);
        break;
      case "error":
        this._sendError(event);
        break;
      case "loadstart":
        this._sendLoadStart();
        break;
      case "abort":
      case "timeout":
        if (!this._isCanceled()) {
          this.dispatchEvent(event.type);
        }
        break;
    }
  };
  p.buildPath = function(src, data) {
    return createjs.RequestUtils.buildPath(src, data);
  };
  p.toString = function() {
    return "[PreloadJS AbstractLoader]";
  };
  createjs.AbstractLoader = createjs.promote(AbstractLoader, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function AbstractMediaLoader(loadItem, preferXHR, type) {
    this.AbstractLoader_constructor(loadItem, preferXHR, type);
    this.resultFormatter = this._formatResult;
    this._tagSrcAttribute = "src";
  }
  var p = createjs.extend(AbstractMediaLoader, createjs.AbstractLoader);
  p.load = function() {
    if (!this._tag) {
      this._tag = this._createTag(this._item.src);
    }
    this._tag.preload = "auto";
    this._tag.load();
    this.AbstractLoader_load();
  };
  p._createTag = function() {
  };
  p._createRequest = function() {
    if (!this._preferXHR) {
      this._request = new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute);
    } else {
      this._request = new createjs.XHRRequest(this._item);
    }
  };
  p._formatResult = function(loader) {
    this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
    this._tag.onstalled = null;
    if (this._preferXHR) {
      loader.getTag().src = loader.getResult(true);
    }
    return loader.getTag();
  };
  createjs.AbstractMediaLoader = createjs.promote(AbstractMediaLoader, "AbstractLoader");
})();
this.createjs = this.createjs || {};
(function() {
  var AbstractRequest = function(item) {
    this._item = item;
  };
  var p = createjs.extend(AbstractRequest, createjs.EventDispatcher);
  p.load = function() {
  };
  p.destroy = function() {
  };
  p.cancel = function() {
  };
  createjs.AbstractRequest = createjs.promote(AbstractRequest, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function TagRequest(loadItem, tag, srcAttribute) {
    this.AbstractRequest_constructor(loadItem);
    this._tag = tag;
    this._tagSrcAttribute = srcAttribute;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
    this._addedToDOM = false;
    this._startTagVisibility = null;
  }
  var p = createjs.extend(TagRequest, createjs.AbstractRequest);
  p.load = function() {
    this._tag.onload = createjs.proxy(this._handleTagComplete, this);
    this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this);
    this._tag.onerror = createjs.proxy(this._handleError, this);
    var evt = new createjs.Event("initialize");
    evt.loader = this._tag;
    this.dispatchEvent(evt);
    this._hideTag();
    this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
    this._tag[this._tagSrcAttribute] = this._item.src;
    if (this._tag.parentNode == null) {
      window.document.body.appendChild(this._tag);
      this._addedToDOM = true;
    }
  };
  p.destroy = function() {
    this._clean();
    this._tag = null;
    this.AbstractRequest_destroy();
  };
  p._handleReadyStateChange = function() {
    clearTimeout(this._loadTimeout);
    var tag = this._tag;
    if (tag.readyState == "loaded" || tag.readyState == "complete") {
      this._handleTagComplete();
    }
  };
  p._handleError = function() {
    this._clean();
    this.dispatchEvent("error");
  };
  p._handleTagComplete = function() {
    this._rawResult = this._tag;
    this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult;
    this._clean();
    this._showTag();
    this.dispatchEvent("complete");
  };
  p._handleTimeout = function() {
    this._clean();
    this.dispatchEvent(new createjs.Event("timeout"));
  };
  p._clean = function() {
    this._tag.onload = null;
    this._tag.onreadystatechange = null;
    this._tag.onerror = null;
    if (this._addedToDOM && this._tag.parentNode != null) {
      this._tag.parentNode.removeChild(this._tag);
    }
    clearTimeout(this._loadTimeout);
  };
  p._hideTag = function() {
    this._startTagVisibility = this._tag.style.visibility;
    this._tag.style.visibility = "hidden";
  };
  p._showTag = function() {
    this._tag.style.visibility = this._startTagVisibility;
  };
  p._handleStalled = function() {
  };
  createjs.TagRequest = createjs.promote(TagRequest, "AbstractRequest");
})();
this.createjs = this.createjs || {};
(function() {
  function MediaTagRequest(loadItem, tag, srcAttribute) {
    this.AbstractRequest_constructor(loadItem);
    this._tag = tag;
    this._tagSrcAttribute = srcAttribute;
    this._loadedHandler = createjs.proxy(this._handleTagComplete, this);
  }
  var p = createjs.extend(MediaTagRequest, createjs.TagRequest);
  var s = MediaTagRequest;
  p.load = function() {
    var sc = createjs.proxy(this._handleStalled, this);
    this._stalledCallback = sc;
    var pc = createjs.proxy(this._handleProgress, this);
    this._handleProgress = pc;
    this._tag.addEventListener("stalled", sc);
    this._tag.addEventListener("progress", pc);
    this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, false);
    this.TagRequest_load();
  };
  p._handleReadyStateChange = function() {
    clearTimeout(this._loadTimeout);
    var tag = this._tag;
    if (tag.readyState == "loaded" || tag.readyState == "complete") {
      this._handleTagComplete();
    }
  };
  p._handleStalled = function() {
  };
  p._handleProgress = function(event) {
    if (!event || event.loaded > 0 && event.total == 0) {
      return;
    }
    var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
    this.dispatchEvent(newEvent);
  };
  p._clean = function() {
    this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler);
    this._tag.removeEventListener("stalled", this._stalledCallback);
    this._tag.removeEventListener("progress", this._progressCallback);
    this.TagRequest__clean();
  };
  createjs.MediaTagRequest = createjs.promote(MediaTagRequest, "TagRequest");
})();
this.createjs = this.createjs || {};
(function() {
  function XHRRequest(item) {
    this.AbstractRequest_constructor(item);
    this._request = null;
    this._loadTimeout = null;
    this._xhrLevel = 1;
    this._response = null;
    this._rawResponse = null;
    this._canceled = false;
    this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this);
    this._handleProgressProxy = createjs.proxy(this._handleProgress, this);
    this._handleAbortProxy = createjs.proxy(this._handleAbort, this);
    this._handleErrorProxy = createjs.proxy(this._handleError, this);
    this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this);
    this._handleLoadProxy = createjs.proxy(this._handleLoad, this);
    this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this);
    if (!this._createXHR(item)) {
    }
  }
  var p = createjs.extend(XHRRequest, createjs.AbstractRequest);
  XHRRequest.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"];
  p.getResult = function(raw) {
    if (raw && this._rawResponse) {
      return this._rawResponse;
    }
    return this._response;
  };
  p.cancel = function() {
    this.canceled = true;
    this._clean();
    this._request.abort();
  };
  p.load = function() {
    if (this._request == null) {
      this._handleError();
      return;
    }
    this._request.addEventListener("loadstart", this._handleLoadStartProxy, false);
    this._request.addEventListener("progress", this._handleProgressProxy, false);
    this._request.addEventListener("abort", this._handleAbortProxy, false);
    this._request.addEventListener("error", this._handleErrorProxy, false);
    this._request.addEventListener("timeout", this._handleTimeoutProxy, false);
    this._request.addEventListener("load", this._handleLoadProxy, false);
    this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, false);
    if (this._xhrLevel == 1) {
      this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout);
    }
    try {
      if (!this._item.values || this._item.method == createjs.AbstractLoader.GET) {
        this._request.send();
      } else {
        if (this._item.method == createjs.AbstractLoader.POST) {
          this._request.send(createjs.RequestUtils.formatQueryString(this._item.values));
        }
      }
    } catch (error) {
      this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, error));
    }
  };
  p.setResponseType = function(type) {
    this._request.responseType = type;
  };
  p.getAllResponseHeaders = function() {
    if (this._request.getAllResponseHeaders instanceof Function) {
      return this._request.getAllResponseHeaders();
    } else {
      return null;
    }
  };
  p.getResponseHeader = function(header) {
    if (this._request.getResponseHeader instanceof Function) {
      return this._request.getResponseHeader(header);
    } else {
      return null;
    }
  };
  p._handleProgress = function(event) {
    if (!event || event.loaded > 0 && event.total == 0) {
      return;
    }
    var newEvent = new createjs.ProgressEvent(event.loaded, event.total);
    this.dispatchEvent(newEvent);
  };
  p._handleLoadStart = function(event) {
    clearTimeout(this._loadTimeout);
    this.dispatchEvent("loadstart");
  };
  p._handleAbort = function(event) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, event));
  };
  p._handleError = function(event) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent(event.message));
  };
  p._handleReadyStateChange = function(event) {
    if (this._request.readyState == 4) {
      this._handleLoad();
    }
  };
  p._handleLoad = function(event) {
    if (this.loaded) {
      return;
    }
    this.loaded = true;
    var error = this._checkError();
    if (error) {
      this._handleError(error);
      return;
    }
    this._response = this._getResponse();
    this._clean();
    this.dispatchEvent(new createjs.Event("complete"));
  };
  p._handleTimeout = function(event) {
    this._clean();
    this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, event));
  };
  p._checkError = function() {
    var status = parseInt(this._request.status);
    switch(status) {
      case 404:
      case 0:
        return new Error(status);
    }
    return null;
  };
  p._getResponse = function() {
    if (this._response != null) {
      return this._response;
    }
    if (this._request.response != null) {
      return this._request.response;
    }
    try {
      if (this._request.responseText != null) {
        return this._request.responseText;
      }
    } catch (e) {
    }
    try {
      if (this._request.responseXML != null) {
        return this._request.responseXML;
      }
    } catch (e) {
    }
    return null;
  };
  p._createXHR = function(item) {
    var crossdomain = createjs.RequestUtils.isCrossDomain(item);
    var headers = {};
    var req = null;
    if (window.XMLHttpRequest) {
      req = new XMLHttpRequest;
      if (crossdomain && req.withCredentials === undefined && window.XDomainRequest) {
        req = new XDomainRequest;
      }
    } else {
      for (var i = 0, l = s.ACTIVEX_VERSIONS.length;i < l;i++) {
        var axVersion = s.ACTIVEX_VERSIONS[i];
        try {
          req = new ActiveXObject(axVersions);
          break;
        } catch (e) {
        }
      }
      if (req == null) {
        return false;
      }
    }
    if (item.mimeType == null && createjs.RequestUtils.isText(item.type)) {
      item.mimeType = "text/plain; charset=utf-8";
    }
    if (item.mimeType && req.overrideMimeType) {
      req.overrideMimeType(item.mimeType);
    }
    this._xhrLevel = typeof req.responseType === "string" ? 2 : 1;
    var src = null;
    if (item.method == createjs.AbstractLoader.GET) {
      src = createjs.RequestUtils.buildPath(item.src, item.values);
    } else {
      src = item.src;
    }
    req.open(item.method || createjs.AbstractLoader.GET, src, true);
    if (crossdomain && req instanceof XMLHttpRequest && this._xhrLevel == 1) {
      headers["Origin"] = location.origin;
    }
    if (item.values && item.method == createjs.AbstractLoader.POST) {
      headers["Content-Type"] = "application/x-www-form-urlencoded";
    }
    if (!crossdomain && !headers["X-Requested-With"]) {
      headers["X-Requested-With"] = "XMLHttpRequest";
    }
    if (item.headers) {
      for (var n in item.headers) {
        headers[n] = item.headers[n];
      }
    }
    for (n in headers) {
      req.setRequestHeader(n, headers[n]);
    }
    if (req instanceof XMLHttpRequest && item.withCredentials !== undefined) {
      req.withCredentials = item.withCredentials;
    }
    this._request = req;
    return true;
  };
  p._clean = function() {
    clearTimeout(this._loadTimeout);
    this._request.removeEventListener("loadstart", this._handleLoadStartProxy);
    this._request.removeEventListener("progress", this._handleProgressProxy);
    this._request.removeEventListener("abort", this._handleAbortProxy);
    this._request.removeEventListener("error", this._handleErrorProxy);
    this._request.removeEventListener("timeout", this._handleTimeoutProxy);
    this._request.removeEventListener("load", this._handleLoadProxy);
    this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy);
  };
  p.toString = function() {
    return "[PreloadJS XHRRequest]";
  };
  createjs.XHRRequest = createjs.promote(XHRRequest, "AbstractRequest");
})();
this.createjs = this.createjs || {};
(function() {
  function SoundLoader(loadItem, preferXHR) {
    this.AbstractMediaLoader_constructor(loadItem, preferXHR, createjs.AbstractLoader.SOUND);
    if (createjs.RequestUtils.isAudioTag(loadItem)) {
      this._tag = loadItem;
    } else {
      if (createjs.RequestUtils.isAudioTag(loadItem.src)) {
        this._tag = loadItem;
      } else {
        if (createjs.RequestUtils.isAudioTag(loadItem.tag)) {
          this._tag = createjs.RequestUtils.isAudioTag(loadItem) ? loadItem : loadItem.src;
        }
      }
    }
    if (this._tag != null) {
      this._preferXHR = false;
    }
  }
  var p = createjs.extend(SoundLoader, createjs.AbstractMediaLoader);
  var s = SoundLoader;
  s.canLoadItem = function(item) {
    return item.type == createjs.AbstractLoader.SOUND;
  };
  p._createTag = function(src) {
    var tag = document.createElement("audio");
    tag.autoplay = false;
    tag.preload = "none";
    tag.src = src;
    return tag;
  };
  createjs.SoundLoader = createjs.promote(SoundLoader, "AbstractMediaLoader");
})();
this.createjs = this.createjs || {};
(function() {
  var PlayPropsConfig = function() {
    this.interrupt = null;
    this.delay = null;
    this.offset = null;
    this.loop = null;
    this.volume = null;
    this.pan = null;
    this.startTime = null;
    this.duration = null;
  };
  var p = PlayPropsConfig.prototype = {};
  var s = PlayPropsConfig;
  s.create = function(value) {
    if (value instanceof s || value instanceof Object) {
      var ppc = new createjs.PlayPropsConfig;
      ppc.set(value);
      return ppc;
    } else {
      throw new Error("Type not recognized.");
    }
  };
  p.set = function(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  p.toString = function() {
    return "[PlayPropsConfig]";
  };
  createjs.PlayPropsConfig = s;
})();
this.createjs = this.createjs || {};
(function() {
  function Sound() {
    throw "Sound cannot be instantiated";
  }
  var s = Sound;
  s.INTERRUPT_ANY = "any";
  s.INTERRUPT_EARLY = "early";
  s.INTERRUPT_LATE = "late";
  s.INTERRUPT_NONE = "none";
  s.PLAY_INITED = "playInited";
  s.PLAY_SUCCEEDED = "playSucceeded";
  s.PLAY_INTERRUPTED = "playInterrupted";
  s.PLAY_FINISHED = "playFinished";
  s.PLAY_FAILED = "playFailed";
  s.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"];
  s.EXTENSION_MAP = {m4a:"mp4"};
  s.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([/.]*?(?:[^?]+)?\/)?((?:[^/?]+)\.(\w+))(?:\?(\S+)?)?$/;
  s.defaultInterruptBehavior = s.INTERRUPT_NONE;
  s.alternateExtensions = [];
  s.activePlugin = null;
  s._masterVolume = 1;
  Object.defineProperty(s, "volume", {get:function() {
    return this._masterVolume;
  }, set:function(value) {
    if (Number(value) == null) {
      return false;
    }
    value = Math.max(0, Math.min(1, value));
    s._masterVolume = value;
    if (!this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value)) {
      var instances = this._instances;
      for (var i = 0, l = instances.length;i < l;i++) {
        instances[i].setMasterVolume(value);
      }
    }
  }});
  s._masterMute = false;
  Object.defineProperty(s, "muted", {get:function() {
    return this._masterMute;
  }, set:function(value) {
    if (value == null) {
      return false;
    }
    this._masterMute = value;
    if (!this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value)) {
      var instances = this._instances;
      for (var i = 0, l = instances.length;i < l;i++) {
        instances[i].setMasterMute(value);
      }
    }
    return true;
  }});
  Object.defineProperty(s, "capabilities", {get:function() {
    if (s.activePlugin == null) {
      return null;
    }
    return s.activePlugin._capabilities;
  }, set:function(value) {
    return false;
  }});
  s._pluginsRegistered = false;
  s._lastID = 0;
  s._instances = [];
  s._idHash = {};
  s._preloadHash = {};
  s._defaultPlayPropsHash = {};
  s.addEventListener = null;
  s.removeEventListener = null;
  s.removeAllEventListeners = null;
  s.dispatchEvent = null;
  s.hasEventListener = null;
  s._listeners = null;
  createjs.EventDispatcher.initialize(s);
  s.getPreloadHandlers = function() {
    return {callback:createjs.proxy(s.initLoad, s), types:["sound"], extensions:s.SUPPORTED_EXTENSIONS};
  };
  s._handleLoadComplete = function(event) {
    var src = event.target.getItem().src;
    if (!s._preloadHash[src]) {
      return;
    }
    for (var i = 0, l = s._preloadHash[src].length;i < l;i++) {
      var item = s._preloadHash[src][i];
      s._preloadHash[src][i] = true;
      if (!s.hasEventListener("fileload")) {
        continue;
      }
      var event = new createjs.Event("fileload");
      event.src = item.src;
      event.id = item.id;
      event.data = item.data;
      event.sprite = item.sprite;
      s.dispatchEvent(event);
    }
  };
  s._handleLoadError = function(event) {
    var src = event.target.getItem().src;
    if (!s._preloadHash[src]) {
      return;
    }
    for (var i = 0, l = s._preloadHash[src].length;i < l;i++) {
      var item = s._preloadHash[src][i];
      s._preloadHash[src][i] = false;
      if (!s.hasEventListener("fileerror")) {
        continue;
      }
      var event = new createjs.Event("fileerror");
      event.src = item.src;
      event.id = item.id;
      event.data = item.data;
      event.sprite = item.sprite;
      s.dispatchEvent(event);
    }
  };
  s._registerPlugin = function(plugin) {
    if (plugin.isSupported()) {
      s.activePlugin = new plugin;
      return true;
    }
    return false;
  };
  s.registerPlugins = function(plugins) {
    s._pluginsRegistered = true;
    for (var i = 0, l = plugins.length;i < l;i++) {
      if (s._registerPlugin(plugins[i])) {
        return true;
      }
    }
    return false;
  };
  s.initializeDefaultPlugins = function() {
    if (s.activePlugin != null) {
      return true;
    }
    if (s._pluginsRegistered) {
      return false;
    }
    if (s.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])) {
      return true;
    }
    return false;
  };
  s.isReady = function() {
    return s.activePlugin != null;
  };
  s.getCapabilities = function() {
    if (s.activePlugin == null) {
      return null;
    }
    return s.activePlugin._capabilities;
  };
  s.getCapability = function(key) {
    if (s.activePlugin == null) {
      return null;
    }
    return s.activePlugin._capabilities[key];
  };
  s.initLoad = function(loadItem) {
    return s._registerSound(loadItem);
  };
  s._registerSound = function(loadItem) {
    if (!s.initializeDefaultPlugins()) {
      return false;
    }
    var details;
    if (loadItem.src instanceof Object) {
      details = s._parseSrc(loadItem.src);
      details.src = loadItem.path + details.src;
    } else {
      details = s._parsePath(loadItem.src);
    }
    if (details == null) {
      return false;
    }
    loadItem.src = details.src;
    loadItem.type = "sound";
    var data = loadItem.data;
    var numChannels = null;
    if (data != null) {
      if (!isNaN(data.channels)) {
        numChannels = parseInt(data.channels);
      } else {
        if (!isNaN(data)) {
          numChannels = parseInt(data);
        }
      }
      if (data.audioSprite) {
        var sp;
        for (var i = data.audioSprite.length;i--;) {
          sp = data.audioSprite[i];
          s._idHash[sp.id] = {src:loadItem.src, startTime:parseInt(sp.startTime), duration:parseInt(sp.duration)};
          if (sp.defaultPlayProps) {
            s._defaultPlayPropsHash[sp.id] = createjs.PlayPropsConfig.create(sp.defaultPlayProps);
          }
        }
      }
    }
    if (loadItem.id != null) {
      s._idHash[loadItem.id] = {src:loadItem.src};
    }
    var loader = s.activePlugin.register(loadItem);
    SoundChannel.create(loadItem.src, numChannels);
    if (data == null || !isNaN(data)) {
      loadItem.data = numChannels || SoundChannel.maxPerChannel();
    } else {
      loadItem.data.channels = numChannels || SoundChannel.maxPerChannel();
    }
    if (loader.type) {
      loadItem.type = loader.type;
    }
    if (loadItem.defaultPlayProps) {
      s._defaultPlayPropsHash[loadItem.src] = createjs.PlayPropsConfig.create(loadItem.defaultPlayProps);
    }
    return loader;
  };
  s.registerSound = function(src, id, data, basePath, defaultPlayProps) {
    var loadItem = {src:src, id:id, data:data, defaultPlayProps:defaultPlayProps};
    if (src instanceof Object && src.src) {
      basePath = id;
      loadItem = src;
    }
    loadItem = createjs.LoadItem.create(loadItem);
    loadItem.path = basePath;
    if (basePath != null && !(loadItem.src instanceof Object)) {
      loadItem.src = basePath + src;
    }
    var loader = s._registerSound(loadItem);
    if (!loader) {
      return false;
    }
    if (!s._preloadHash[loadItem.src]) {
      s._preloadHash[loadItem.src] = [];
    }
    s._preloadHash[loadItem.src].push(loadItem);
    if (s._preloadHash[loadItem.src].length == 1) {
      loader.on("complete", createjs.proxy(this._handleLoadComplete, this));
      loader.on("error", createjs.proxy(this._handleLoadError, this));
      s.activePlugin.preload(loader);
    } else {
      if (s._preloadHash[loadItem.src][0] == true) {
        return true;
      }
    }
    return loadItem;
  };
  s.registerSounds = function(sounds, basePath) {
    var returnValues = [];
    if (sounds.path) {
      if (!basePath) {
        basePath = sounds.path;
      } else {
        basePath = basePath + sounds.path;
      }
      sounds = sounds.manifest;
    }
    for (var i = 0, l = sounds.length;i < l;i++) {
      returnValues[i] = createjs.Sound.registerSound(sounds[i].src, sounds[i].id, sounds[i].data, basePath, sounds[i].defaultPlayProps);
    }
    return returnValues;
  };
  s.removeSound = function(src, basePath) {
    if (s.activePlugin == null) {
      return false;
    }
    if (src instanceof Object && src.src) {
      src = src.src;
    }
    var details;
    if (src instanceof Object) {
      details = s._parseSrc(src);
    } else {
      src = s._getSrcById(src).src;
      details = s._parsePath(src);
    }
    if (details == null) {
      return false;
    }
    src = details.src;
    if (basePath != null) {
      src = basePath + src;
    }
    for (var prop in s._idHash) {
      if (s._idHash[prop].src == src) {
        delete s._idHash[prop];
      }
    }
    SoundChannel.removeSrc(src);
    delete s._preloadHash[src];
    s.activePlugin.removeSound(src);
    return true;
  };
  s.removeSounds = function(sounds, basePath) {
    var returnValues = [];
    if (sounds.path) {
      if (!basePath) {
        basePath = sounds.path;
      } else {
        basePath = basePath + sounds.path;
      }
      sounds = sounds.manifest;
    }
    for (var i = 0, l = sounds.length;i < l;i++) {
      returnValues[i] = createjs.Sound.removeSound(sounds[i].src, basePath);
    }
    return returnValues;
  };
  s.removeAllSounds = function() {
    s._idHash = {};
    s._preloadHash = {};
    SoundChannel.removeAll();
    if (s.activePlugin) {
      s.activePlugin.removeAllSounds();
    }
  };
  s.loadComplete = function(src) {
    if (!s.isReady()) {
      return false;
    }
    var details = s._parsePath(src);
    if (details) {
      src = s._getSrcById(details.src).src;
    } else {
      src = s._getSrcById(src).src;
    }
    if (s._preloadHash[src] == undefined) {
      return false;
    }
    return s._preloadHash[src][0] == true;
  };
  s._parsePath = function(value) {
    if (typeof value != "string") {
      value = value.toString();
    }
    var match = value.match(s.FILE_PATTERN);
    if (match == null) {
      return false;
    }
    var name = match[4];
    var ext = match[5];
    var c = s.capabilities;
    var i = 0;
    while (!c[ext]) {
      ext = s.alternateExtensions[i++];
      if (i > s.alternateExtensions.length) {
        return null;
      }
    }
    value = value.replace("." + match[5], "." + ext);
    var ret = {name:name, src:value, extension:ext};
    return ret;
  };
  s._parseSrc = function(value) {
    var ret = {name:undefined, src:undefined, extension:undefined};
    var c = s.capabilities;
    for (var prop in value) {
      if (value.hasOwnProperty(prop) && c[prop]) {
        ret.src = value[prop];
        ret.extension = prop;
        break;
      }
    }
    if (!ret.src) {
      return false;
    }
    var i = ret.src.lastIndexOf("/");
    if (i != -1) {
      ret.name = ret.src.slice(i + 1);
    } else {
      ret.name = ret.src;
    }
    return ret;
  };
  s.play = function(src, interrupt, delay, offset, loop, volume, pan, startTime, duration) {
    var playProps;
    if (interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig) {
      playProps = createjs.PlayPropsConfig.create(interrupt);
    } else {
      playProps = createjs.PlayPropsConfig.create({interrupt:interrupt, delay:delay, offset:offset, loop:loop, volume:volume, pan:pan, startTime:startTime, duration:duration});
    }
    var instance = s.createInstance(src, playProps.startTime, playProps.duration);
    var ok = s._playInstance(instance, playProps);
    if (!ok) {
      instance._playFailed();
    }
    return instance;
  };
  s.createInstance = function(src, startTime, duration) {
    if (!s.initializeDefaultPlugins()) {
      return new createjs.DefaultSoundInstance(src, startTime, duration);
    }
    var defaultPlayProps = s._defaultPlayPropsHash[src];
    src = s._getSrcById(src);
    var details = s._parsePath(src.src);
    var instance = null;
    if (details != null && details.src != null) {
      SoundChannel.create(details.src);
      if (startTime == null) {
        startTime = src.startTime;
      }
      instance = s.activePlugin.create(details.src, startTime, duration || src.duration);
      defaultPlayProps = defaultPlayProps || s._defaultPlayPropsHash[details.src];
      if (defaultPlayProps) {
        instance.applyPlayProps(defaultPlayProps);
      }
    } else {
      instance = new createjs.DefaultSoundInstance(src, startTime, duration);
    }
    instance.uniqueId = s._lastID++;
    return instance;
  };
  s.stop = function() {
    var instances = this._instances;
    for (var i = instances.length;i--;) {
      instances[i].stop();
    }
  };
  s.setVolume = function(value) {
    if (Number(value) == null) {
      return false;
    }
    value = Math.max(0, Math.min(1, value));
    s._masterVolume = value;
    if (!this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(value)) {
      var instances = this._instances;
      for (var i = 0, l = instances.length;i < l;i++) {
        instances[i].setMasterVolume(value);
      }
    }
  };
  s.getVolume = function() {
    return this._masterVolume;
  };
  s.setMute = function(value) {
    if (value == null) {
      return false;
    }
    this._masterMute = value;
    if (!this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(value)) {
      var instances = this._instances;
      for (var i = 0, l = instances.length;i < l;i++) {
        instances[i].setMasterMute(value);
      }
    }
    return true;
  };
  s.getMute = function() {
    return this._masterMute;
  };
  s.setDefaultPlayProps = function(src, playProps) {
    src = s._getSrcById(src);
    s._defaultPlayPropsHash[s._parsePath(src.src).src] = createjs.PlayPropsConfig.create(playProps);
  };
  s.getDefaultPlayProps = function(src) {
    src = s._getSrcById(src);
    return s._defaultPlayPropsHash[s._parsePath(src.src).src];
  };
  s._playInstance = function(instance, playProps) {
    var defaultPlayProps = s._defaultPlayPropsHash[instance.src] || {};
    if (playProps.interrupt == null) {
      playProps.interrupt = defaultPlayProps.interrupt || s.defaultInterruptBehavior;
    }
    if (playProps.delay == null) {
      playProps.delay = defaultPlayProps.delay || 0;
    }
    if (playProps.offset == null) {
      playProps.offset = instance.getPosition();
    }
    if (playProps.loop == null) {
      playProps.loop = instance.loop;
    }
    if (playProps.volume == null) {
      playProps.volume = instance.volume;
    }
    if (playProps.pan == null) {
      playProps.pan = instance.pan;
    }
    if (playProps.delay == 0) {
      var ok = s._beginPlaying(instance, playProps);
      if (!ok) {
        return false;
      }
    } else {
      var delayTimeoutId = setTimeout(function() {
        s._beginPlaying(instance, playProps);
      }, playProps.delay);
      instance.delayTimeoutId = delayTimeoutId;
    }
    this._instances.push(instance);
    return true;
  };
  s._beginPlaying = function(instance, playProps) {
    if (!SoundChannel.add(instance, playProps.interrupt)) {
      return false;
    }
    var result = instance._beginPlaying(playProps);
    if (!result) {
      var index = createjs.indexOf(this._instances, instance);
      if (index > -1) {
        this._instances.splice(index, 1);
      }
      return false;
    }
    return true;
  };
  s._getSrcById = function(value) {
    return s._idHash[value] || {src:value};
  };
  s._playFinished = function(instance) {
    SoundChannel.remove(instance);
    var index = createjs.indexOf(this._instances, instance);
    if (index > -1) {
      this._instances.splice(index, 1);
    }
  };
  createjs.Sound = Sound;
  function SoundChannel(src, max) {
    this.init(src, max);
  }
  SoundChannel.channels = {};
  SoundChannel.create = function(src, max) {
    var channel = SoundChannel.get(src);
    if (channel == null) {
      SoundChannel.channels[src] = new SoundChannel(src, max);
      return true;
    }
    return false;
  };
  SoundChannel.removeSrc = function(src) {
    var channel = SoundChannel.get(src);
    if (channel == null) {
      return false;
    }
    channel._removeAll();
    delete SoundChannel.channels[src];
    return true;
  };
  SoundChannel.removeAll = function() {
    for (var channel in SoundChannel.channels) {
      SoundChannel.channels[channel]._removeAll();
    }
    SoundChannel.channels = {};
  };
  SoundChannel.add = function(instance, interrupt) {
    var channel = SoundChannel.get(instance.src);
    if (channel == null) {
      return false;
    }
    return channel._add(instance, interrupt);
  };
  SoundChannel.remove = function(instance) {
    var channel = SoundChannel.get(instance.src);
    if (channel == null) {
      return false;
    }
    channel._remove(instance);
    return true;
  };
  SoundChannel.maxPerChannel = function() {
    return p.maxDefault;
  };
  SoundChannel.get = function(src) {
    return SoundChannel.channels[src];
  };
  var p = SoundChannel.prototype;
  p.constructor = SoundChannel;
  p.src = null;
  p.max = null;
  p.maxDefault = 100;
  p.length = 0;
  p.init = function(src, max) {
    this.src = src;
    this.max = max || this.maxDefault;
    if (this.max == -1) {
      this.max = this.maxDefault;
    }
    this._instances = [];
  };
  p._get = function(index) {
    return this._instances[index];
  };
  p._add = function(instance, interrupt) {
    if (!this._getSlot(interrupt, instance)) {
      return false;
    }
    this._instances.push(instance);
    this.length++;
    return true;
  };
  p._remove = function(instance) {
    var index = createjs.indexOf(this._instances, instance);
    if (index == -1) {
      return false;
    }
    this._instances.splice(index, 1);
    this.length--;
    return true;
  };
  p._removeAll = function() {
    for (var i = this.length - 1;i >= 0;i--) {
      this._instances[i].stop();
    }
  };
  p._getSlot = function(interrupt, instance) {
    var target, replacement;
    if (interrupt != Sound.INTERRUPT_NONE) {
      replacement = this._get(0);
      if (replacement == null) {
        return true;
      }
    }
    for (var i = 0, l = this.max;i < l;i++) {
      target = this._get(i);
      if (target == null) {
        return true;
      }
      if (target.playState == Sound.PLAY_FINISHED || target.playState == Sound.PLAY_INTERRUPTED || target.playState == Sound.PLAY_FAILED) {
        replacement = target;
        break;
      }
      if (interrupt == Sound.INTERRUPT_NONE) {
        continue;
      }
      if (interrupt == Sound.INTERRUPT_EARLY && target.getPosition() < replacement.getPosition() || interrupt == Sound.INTERRUPT_LATE && target.getPosition() > replacement.getPosition()) {
        replacement = target;
      }
    }
    if (replacement != null) {
      replacement._interrupt();
      this._remove(replacement);
      return true;
    }
    return false;
  };
  p.toString = function() {
    return "[Sound SoundChannel]";
  };
})();
this.createjs = this.createjs || {};
(function() {
  var AbstractSoundInstance = function(src, startTime, duration, playbackResource) {
    this.EventDispatcher_constructor();
    this.src = src;
    this.uniqueId = -1;
    this.playState = null;
    this.delayTimeoutId = null;
    this._volume = 1;
    Object.defineProperty(this, "volume", {get:this.getVolume, set:this.setVolume});
    this._pan = 0;
    Object.defineProperty(this, "pan", {get:this.getPan, set:this.setPan});
    this._startTime = Math.max(0, startTime || 0);
    Object.defineProperty(this, "startTime", {get:this.getStartTime, set:this.setStartTime});
    this._duration = Math.max(0, duration || 0);
    Object.defineProperty(this, "duration", {get:this.getDuration, set:this.setDuration});
    this._playbackResource = null;
    Object.defineProperty(this, "playbackResource", {get:this.getPlaybackResource, set:this.setPlaybackResource});
    if (playbackResource !== false && playbackResource !== true) {
      this.setPlaybackResource(playbackResource);
    }
    this._position = 0;
    Object.defineProperty(this, "position", {get:this.getPosition, set:this.setPosition});
    this._loop = 0;
    Object.defineProperty(this, "loop", {get:this.getLoop, set:this.setLoop});
    this._muted = false;
    Object.defineProperty(this, "muted", {get:this.getMuted, set:this.setMuted});
    this._paused = false;
    Object.defineProperty(this, "paused", {get:this.getPaused, set:this.setPaused});
  };
  var p = createjs.extend(AbstractSoundInstance, createjs.EventDispatcher);
  p.play = function(interrupt, delay, offset, loop, volume, pan) {
    var playProps;
    if (interrupt instanceof Object || interrupt instanceof createjs.PlayPropsConfig) {
      playProps = createjs.PlayPropsConfig.create(interrupt);
    } else {
      playProps = createjs.PlayPropsConfig.create({interrupt:interrupt, delay:delay, offset:offset, loop:loop, volume:volume, pan:pan});
    }
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this.applyPlayProps(playProps);
      if (this._paused) {
        this.setPaused(false);
      }
      return;
    }
    this._cleanUp();
    createjs.Sound._playInstance(this, playProps);
    return this;
  };
  p.stop = function() {
    this._position = 0;
    this._paused = false;
    this._handleStop();
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FINISHED;
    return this;
  };
  p.destroy = function() {
    this._cleanUp();
    this.src = null;
    this.playbackResource = null;
    this.removeAllEventListeners();
  };
  p.applyPlayProps = function(playProps) {
    if (playProps.offset != null) {
      this.setPosition(playProps.offset);
    }
    if (playProps.loop != null) {
      this.setLoop(playProps.loop);
    }
    if (playProps.volume != null) {
      this.setVolume(playProps.volume);
    }
    if (playProps.pan != null) {
      this.setPan(playProps.pan);
    }
    if (playProps.startTime != null) {
      this.setStartTime(playProps.startTime);
      this.setDuration(playProps.duration);
    }
    return this;
  };
  p.toString = function() {
    return "[AbstractSoundInstance]";
  };
  p.getPaused = function() {
    return this._paused;
  };
  p.setPaused = function(value) {
    if (value !== true && value !== false || this._paused == value) {
      return;
    }
    if (value == true && this.playState != createjs.Sound.PLAY_SUCCEEDED) {
      return;
    }
    this._paused = value;
    if (value) {
      this._pause();
    } else {
      this._resume();
    }
    clearTimeout(this.delayTimeoutId);
    return this;
  };
  p.setVolume = function(value) {
    if (value == this._volume) {
      return this;
    }
    this._volume = Math.max(0, Math.min(1, value));
    if (!this._muted) {
      this._updateVolume();
    }
    return this;
  };
  p.getVolume = function() {
    return this._volume;
  };
  p.setMuted = function(value) {
    if (value !== true && value !== false) {
      return;
    }
    this._muted = value;
    this._updateVolume();
    return this;
  };
  p.getMuted = function() {
    return this._muted;
  };
  p.setPan = function(value) {
    if (value == this._pan) {
      return this;
    }
    this._pan = Math.max(-1, Math.min(1, value));
    this._updatePan();
    return this;
  };
  p.getPan = function() {
    return this._pan;
  };
  p.getPosition = function() {
    if (!this._paused && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._position = this._calculateCurrentPosition();
    }
    return this._position;
  };
  p.setPosition = function(value) {
    this._position = Math.max(0, value);
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._updatePosition();
    }
    return this;
  };
  p.getStartTime = function() {
    return this._startTime;
  };
  p.setStartTime = function(value) {
    if (value == this._startTime) {
      return this;
    }
    this._startTime = Math.max(0, value || 0);
    this._updateStartTime();
    return this;
  };
  p.getDuration = function() {
    return this._duration;
  };
  p.setDuration = function(value) {
    if (value == this._duration) {
      return this;
    }
    this._duration = Math.max(0, value || 0);
    this._updateDuration();
    return this;
  };
  p.setPlaybackResource = function(value) {
    this._playbackResource = value;
    if (this._duration == 0) {
      this._setDurationFromSource();
    }
    return this;
  };
  p.getPlaybackResource = function() {
    return this._playbackResource;
  };
  p.getLoop = function() {
    return this._loop;
  };
  p.setLoop = function(value) {
    if (this._playbackResource != null) {
      if (this._loop != 0 && value == 0) {
        this._removeLooping(value);
      } else {
        if (this._loop == 0 && value != 0) {
          this._addLooping(value);
        }
      }
    }
    this._loop = value;
  };
  p._sendEvent = function(type) {
    var event = new createjs.Event(type);
    this.dispatchEvent(event);
  };
  p._cleanUp = function() {
    clearTimeout(this.delayTimeoutId);
    this._handleCleanUp();
    this._paused = false;
    createjs.Sound._playFinished(this);
  };
  p._interrupt = function() {
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_INTERRUPTED;
    this._sendEvent("interrupted");
  };
  p._beginPlaying = function(playProps) {
    this.setPosition(playProps.offset);
    this.setLoop(playProps.loop);
    this.setVolume(playProps.volume);
    this.setPan(playProps.pan);
    if (playProps.startTime != null) {
      this.setStartTime(playProps.startTime);
      this.setDuration(playProps.duration);
    }
    if (this._playbackResource != null && this._position < this._duration) {
      this._paused = false;
      this._handleSoundReady();
      this.playState = createjs.Sound.PLAY_SUCCEEDED;
      this._sendEvent("succeeded");
      return true;
    } else {
      this._playFailed();
      return false;
    }
  };
  p._playFailed = function() {
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FAILED;
    this._sendEvent("failed");
  };
  p._handleSoundComplete = function(event) {
    this._position = 0;
    if (this._loop != 0) {
      this._loop--;
      this._handleLoop();
      this._sendEvent("loop");
      return;
    }
    this._cleanUp();
    this.playState = createjs.Sound.PLAY_FINISHED;
    this._sendEvent("complete");
  };
  p._handleSoundReady = function() {
  };
  p._updateVolume = function() {
  };
  p._updatePan = function() {
  };
  p._updateStartTime = function() {
  };
  p._updateDuration = function() {
  };
  p._setDurationFromSource = function() {
  };
  p._calculateCurrentPosition = function() {
  };
  p._updatePosition = function() {
  };
  p._removeLooping = function(value) {
  };
  p._addLooping = function(value) {
  };
  p._pause = function() {
  };
  p._resume = function() {
  };
  p._handleStop = function() {
  };
  p._handleCleanUp = function() {
  };
  p._handleLoop = function() {
  };
  createjs.AbstractSoundInstance = createjs.promote(AbstractSoundInstance, "EventDispatcher");
  createjs.DefaultSoundInstance = createjs.AbstractSoundInstance;
})();
this.createjs = this.createjs || {};
(function() {
  var AbstractPlugin = function() {
    this._capabilities = null;
    this._loaders = {};
    this._audioSources = {};
    this._soundInstances = {};
    this._volume = 1;
    this._loaderClass;
    this._soundInstanceClass;
  };
  var p = AbstractPlugin.prototype;
  AbstractPlugin._capabilities = null;
  AbstractPlugin.isSupported = function() {
    return true;
  };
  p.register = function(loadItem) {
    var loader = this._loaders[loadItem.src];
    if (loader && !loader.canceled) {
      return this._loaders[loadItem.src];
    }
    this._audioSources[loadItem.src] = true;
    this._soundInstances[loadItem.src] = [];
    loader = new this._loaderClass(loadItem);
    loader.on("complete", this._handlePreloadComplete, this);
    this._loaders[loadItem.src] = loader;
    return loader;
  };
  p.preload = function(loader) {
    loader.on("error", this._handlePreloadError, this);
    loader.load();
  };
  p.isPreloadStarted = function(src) {
    return this._audioSources[src] != null;
  };
  p.isPreloadComplete = function(src) {
    return !(this._audioSources[src] == null || this._audioSources[src] == true);
  };
  p.removeSound = function(src) {
    if (!this._soundInstances[src]) {
      return;
    }
    for (var i = this._soundInstances[src].length;i--;) {
      var item = this._soundInstances[src][i];
      item.destroy();
    }
    delete this._soundInstances[src];
    delete this._audioSources[src];
    if (this._loaders[src]) {
      this._loaders[src].destroy();
    }
    delete this._loaders[src];
  };
  p.removeAllSounds = function() {
    for (var key in this._audioSources) {
      this.removeSound(key);
    }
  };
  p.create = function(src, startTime, duration) {
    if (!this.isPreloadStarted(src)) {
      this.preload(this.register(src));
    }
    var si = new this._soundInstanceClass(src, startTime, duration, this._audioSources[src]);
    this._soundInstances[src].push(si);
    return si;
  };
  p.setVolume = function(value) {
    this._volume = value;
    this._updateVolume();
    return true;
  };
  p.getVolume = function() {
    return this._volume;
  };
  p.setMute = function(value) {
    this._updateVolume();
    return true;
  };
  p.toString = function() {
    return "[AbstractPlugin]";
  };
  p._handlePreloadComplete = function(event) {
    var src = event.target.getItem().src;
    this._audioSources[src] = event.result;
    for (var i = 0, l = this._soundInstances[src].length;i < l;i++) {
      var item = this._soundInstances[src][i];
      item.setPlaybackResource(this._audioSources[src]);
    }
  };
  p._handlePreloadError = function(event) {
  };
  p._updateVolume = function() {
  };
  createjs.AbstractPlugin = AbstractPlugin;
})();
this.createjs = this.createjs || {};
(function() {
  function Loader(loadItem) {
    this.AbstractLoader_constructor(loadItem, true, createjs.AbstractLoader.SOUND);
  }
  var p = createjs.extend(Loader, createjs.AbstractLoader);
  Loader.context = null;
  p.toString = function() {
    return "[WebAudioLoader]";
  };
  p._createRequest = function() {
    this._request = new createjs.XHRRequest(this._item, false);
    this._request.setResponseType("arraybuffer");
  };
  p._sendComplete = function(event) {
    Loader.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this));
  };
  p._handleAudioDecoded = function(decodedAudio) {
    this._result = decodedAudio;
    this.AbstractLoader__sendComplete();
  };
  createjs.WebAudioLoader = createjs.promote(Loader, "AbstractLoader");
})();
this.createjs = this.createjs || {};
(function() {
  function WebAudioSoundInstance(src, startTime, duration, playbackResource) {
    this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource);
    this.gainNode = s.context.createGain();
    this.panNode = s.context.createPanner();
    this.panNode.panningModel = s._panningModel;
    this.panNode.connect(this.gainNode);
    this._updatePan();
    this.sourceNode = null;
    this._soundCompleteTimeout = null;
    this._sourceNodeNext = null;
    this._playbackStartTime = 0;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
  }
  var p = createjs.extend(WebAudioSoundInstance, createjs.AbstractSoundInstance);
  var s = WebAudioSoundInstance;
  s.context = null;
  s._scratchBuffer = null;
  s.destinationNode = null;
  s._panningModel = "equalpower";
  p.destroy = function() {
    this.AbstractSoundInstance_destroy();
    this.panNode.disconnect(0);
    this.panNode = null;
    this.gainNode.disconnect(0);
    this.gainNode = null;
  };
  p.toString = function() {
    return "[WebAudioSoundInstance]";
  };
  p._updatePan = function() {
    this.panNode.setPosition(this._pan, 0, -.5);
  };
  p._removeLooping = function(value) {
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
  };
  p._addLooping = function(value) {
    if (this.playState != createjs.Sound.PLAY_SUCCEEDED) {
      return;
    }
    this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
  };
  p._setDurationFromSource = function() {
    this._duration = this.playbackResource.duration * 1E3;
  };
  p._handleCleanUp = function() {
    if (this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
      this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    }
    if (this.gainNode.numberOfOutputs != 0) {
      this.gainNode.disconnect(0);
    }
    clearTimeout(this._soundCompleteTimeout);
    this._playbackStartTime = 0;
  };
  p._cleanUpAudioNode = function(audioNode) {
    if (audioNode) {
      audioNode.stop(0);
      audioNode.disconnect(0);
      try {
        audioNode.buffer = s._scratchBuffer;
      } catch (e) {
      }
      audioNode = null;
    }
    return audioNode;
  };
  p._handleSoundReady = function(event) {
    this.gainNode.connect(s.destinationNode);
    var dur = this._duration * .001;
    var pos = this._position * .001;
    if (pos > dur) {
      pos = dur;
    }
    this.sourceNode = this._createAndPlayAudioNode(s.context.currentTime - dur, pos);
    this._playbackStartTime = this.sourceNode.startTime - pos;
    this._soundCompleteTimeout = setTimeout(this._endedHandler, (dur - pos) * 1E3);
    if (this._loop != 0) {
      this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    }
  };
  p._createAndPlayAudioNode = function(startTime, offset) {
    var audioNode = s.context.createBufferSource();
    audioNode.buffer = this.playbackResource;
    audioNode.connect(this.panNode);
    var dur = this._duration * .001;
    audioNode.startTime = startTime + dur;
    audioNode.start(audioNode.startTime, offset + this._startTime * .001, dur - offset);
    return audioNode;
  };
  p._pause = function() {
    this._position = (s.context.currentTime - this._playbackStartTime) * 1E3;
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    if (this.gainNode.numberOfOutputs != 0) {
      this.gainNode.disconnect(0);
    }
    clearTimeout(this._soundCompleteTimeout);
  };
  p._resume = function() {
    this._handleSoundReady();
  };
  p._updateVolume = function() {
    var newVolume = this._muted ? 0 : this._volume;
    if (newVolume != this.gainNode.gain.value) {
      this.gainNode.gain.value = newVolume;
    }
  };
  p._calculateCurrentPosition = function() {
    return (s.context.currentTime - this._playbackStartTime) * 1E3;
  };
  p._updatePosition = function() {
    this.sourceNode = this._cleanUpAudioNode(this.sourceNode);
    this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext);
    clearTimeout(this._soundCompleteTimeout);
    if (!this._paused) {
      this._handleSoundReady();
    }
  };
  p._handleLoop = function() {
    this._cleanUpAudioNode(this.sourceNode);
    this.sourceNode = this._sourceNodeNext;
    this._playbackStartTime = this.sourceNode.startTime;
    this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0);
    this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration);
  };
  p._updateDuration = function() {
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._pause();
      this._resume();
    }
  };
  createjs.WebAudioSoundInstance = createjs.promote(WebAudioSoundInstance, "AbstractSoundInstance");
})();
this.createjs = this.createjs || {};
(function() {
  function WebAudioPlugin() {
    this.AbstractPlugin_constructor();
    this._panningModel = s._panningModel;
    this.context = s.context;
    this.dynamicsCompressorNode = this.context.createDynamicsCompressor();
    this.dynamicsCompressorNode.connect(this.context.destination);
    this.gainNode = this.context.createGain();
    this.gainNode.connect(this.dynamicsCompressorNode);
    createjs.WebAudioSoundInstance.destinationNode = this.gainNode;
    this._capabilities = s._capabilities;
    this._loaderClass = createjs.WebAudioLoader;
    this._soundInstanceClass = createjs.WebAudioSoundInstance;
    this._addPropsToClasses();
  }
  var p = createjs.extend(WebAudioPlugin, createjs.AbstractPlugin);
  var s = WebAudioPlugin;
  s._capabilities = null;
  s._panningModel = "equalpower";
  s.context = null;
  s._scratchBuffer = null;
  s._unlocked = false;
  s.isSupported = function() {
    var isMobilePhoneGap = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
    if (location.protocol == "file:" && !isMobilePhoneGap && !this._isFileXHRSupported()) {
      return false;
    }
    s._generateCapabilities();
    if (s.context == null) {
      return false;
    }
    return true;
  };
  s.playEmptySound = function() {
    if (s.context == null) {
      return;
    }
    var source = s.context.createBufferSource();
    source.buffer = s._scratchBuffer;
    source.connect(s.context.destination);
    source.start(0, 0, 0);
  };
  s._isFileXHRSupported = function() {
    var supported = true;
    var xhr = new XMLHttpRequest;
    try {
      xhr.open("GET", "WebAudioPluginTest.fail", false);
    } catch (error) {
      supported = false;
      return supported;
    }
    xhr.onerror = function() {
      supported = false;
    };
    xhr.onload = function() {
      supported = this.status == 404 || (this.status == 200 || this.status == 0 && this.response != "");
    };
    try {
      xhr.send();
    } catch (error) {
      supported = false;
    }
    return supported;
  };
  s._generateCapabilities = function() {
    if (s._capabilities != null) {
      return;
    }
    var t = document.createElement("audio");
    if (t.canPlayType == null) {
      return null;
    }
    if (s.context == null) {
      if (window.AudioContext) {
        s.context = new AudioContext;
      } else {
        if (window.webkitAudioContext) {
          s.context = new webkitAudioContext;
        } else {
          return null;
        }
      }
    }
    if (s._scratchBuffer == null) {
      s._scratchBuffer = s.context.createBuffer(1, 1, 22050);
    }
    s._compatibilitySetUp();
    if ("ontouchstart" in window && s.context.state != "running") {
      s._unlock();
      document.addEventListener("mousedown", s._unlock, true);
      document.addEventListener("touchend", s._unlock, true);
    }
    s._capabilities = {panning:true, volume:true, tracks:-1};
    var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS;
    var extensionMap = createjs.Sound.EXTENSION_MAP;
    for (var i = 0, l = supportedExtensions.length;i < l;i++) {
      var ext = supportedExtensions[i];
      var playType = extensionMap[ext] || ext;
      s._capabilities[ext] = t.canPlayType("audio/" + ext) != "no" && t.canPlayType("audio/" + ext) != "" || t.canPlayType("audio/" + playType) != "no" && t.canPlayType("audio/" + playType) != "";
    }
    if (s.context.destination.numberOfChannels < 2) {
      s._capabilities.panning = false;
    }
  };
  s._compatibilitySetUp = function() {
    s._panningModel = "equalpower";
    if (s.context.createGain) {
      return;
    }
    s.context.createGain = s.context.createGainNode;
    var audioNode = s.context.createBufferSource();
    audioNode.__proto__.start = audioNode.__proto__.noteGrainOn;
    audioNode.__proto__.stop = audioNode.__proto__.noteOff;
    s._panningModel = 0;
  };
  s._unlock = function() {
    if (s._unlocked) {
      return;
    }
    s.playEmptySound();
    if (s.context.state == "running") {
      document.removeEventListener("mousedown", s._unlock, true);
      document.removeEventListener("touchend", s._unlock, true);
      s._unlocked = true;
    }
  };
  p.toString = function() {
    return "[WebAudioPlugin]";
  };
  p._addPropsToClasses = function() {
    var c = this._soundInstanceClass;
    c.context = this.context;
    c._scratchBuffer = s._scratchBuffer;
    c.destinationNode = this.gainNode;
    c._panningModel = this._panningModel;
    this._loaderClass.context = this.context;
  };
  p._updateVolume = function() {
    var newVolume = createjs.Sound._masterMute ? 0 : this._volume;
    if (newVolume != this.gainNode.gain.value) {
      this.gainNode.gain.value = newVolume;
    }
  };
  createjs.WebAudioPlugin = createjs.promote(WebAudioPlugin, "AbstractPlugin");
})();
this.createjs = this.createjs || {};
(function() {
  function HTMLAudioTagPool() {
    throw "HTMLAudioTagPool cannot be instantiated";
  }
  var s = HTMLAudioTagPool;
  s._tags = {};
  s._tagPool = new TagPool;
  s._tagUsed = {};
  s.get = function(src) {
    var t = s._tags[src];
    if (t == null) {
      t = s._tags[src] = s._tagPool.get();
      t.src = src;
    } else {
      if (s._tagUsed[src]) {
        t = s._tagPool.get();
        t.src = src;
      } else {
        s._tagUsed[src] = true;
      }
    }
    return t;
  };
  s.set = function(src, tag) {
    if (tag == s._tags[src]) {
      s._tagUsed[src] = false;
    } else {
      s._tagPool.set(tag);
    }
  };
  s.remove = function(src) {
    var tag = s._tags[src];
    if (tag == null) {
      return false;
    }
    s._tagPool.set(tag);
    delete s._tags[src];
    delete s._tagUsed[src];
    return true;
  };
  s.getDuration = function(src) {
    var t = s._tags[src];
    if (t == null || !t.duration) {
      return 0;
    }
    return t.duration * 1E3;
  };
  createjs.HTMLAudioTagPool = HTMLAudioTagPool;
  function TagPool(src) {
    this._tags = [];
  }
  var p = TagPool.prototype;
  p.constructor = TagPool;
  p.get = function() {
    var tag;
    if (this._tags.length == 0) {
      tag = this._createTag();
    } else {
      tag = this._tags.pop();
    }
    if (tag.parentNode == null) {
      document.body.appendChild(tag);
    }
    return tag;
  };
  p.set = function(tag) {
    var index = createjs.indexOf(this._tags, tag);
    if (index == -1) {
      this._tags.src = null;
      this._tags.push(tag);
    }
  };
  p.toString = function() {
    return "[TagPool]";
  };
  p._createTag = function() {
    var tag = document.createElement("audio");
    tag.autoplay = false;
    tag.preload = "none";
    return tag;
  };
})();
this.createjs = this.createjs || {};
(function() {
  function HTMLAudioSoundInstance(src, startTime, duration, playbackResource) {
    this.AbstractSoundInstance_constructor(src, startTime, duration, playbackResource);
    this._audioSpriteStopTime = null;
    this._delayTimeoutId = null;
    this._endedHandler = createjs.proxy(this._handleSoundComplete, this);
    this._readyHandler = createjs.proxy(this._handleTagReady, this);
    this._stalledHandler = createjs.proxy(this._playFailed, this);
    this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this);
    this._loopHandler = createjs.proxy(this._handleSoundComplete, this);
    if (duration) {
      this._audioSpriteStopTime = (startTime + duration) * .001;
    } else {
      this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    }
  }
  var p = createjs.extend(HTMLAudioSoundInstance, createjs.AbstractSoundInstance);
  p.setMasterVolume = function(value) {
    this._updateVolume();
  };
  p.setMasterMute = function(isMuted) {
    this._updateVolume();
  };
  p.toString = function() {
    return "[HTMLAudioSoundInstance]";
  };
  p._removeLooping = function() {
    if (this._playbackResource == null) {
      return;
    }
    this._playbackResource.loop = false;
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
  };
  p._addLooping = function() {
    if (this._playbackResource == null || this._audioSpriteStopTime) {
      return;
    }
    this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    this._playbackResource.loop = true;
  };
  p._handleCleanUp = function() {
    var tag = this._playbackResource;
    if (tag != null) {
      tag.pause();
      tag.loop = false;
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
      tag.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
      try {
        tag.currentTime = this._startTime;
      } catch (e) {
      }
      createjs.HTMLAudioTagPool.set(this.src, tag);
      this._playbackResource = null;
    }
  };
  p._beginPlaying = function(playProps) {
    this._playbackResource = createjs.HTMLAudioTagPool.get(this.src);
    return this.AbstractSoundInstance__beginPlaying(playProps);
  };
  p._handleSoundReady = function(event) {
    if (this._playbackResource.readyState !== 4) {
      var tag = this._playbackResource;
      tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
      tag.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
      tag.preload = "auto";
      tag.load();
      return;
    }
    this._updateVolume();
    this._playbackResource.currentTime = (this._startTime + this._position) * .001;
    if (this._audioSpriteStopTime) {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    } else {
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      if (this._loop != 0) {
        this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
        this._playbackResource.loop = true;
      }
    }
    this._playbackResource.play();
  };
  p._handleTagReady = function(event) {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, false);
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, false);
    this._handleSoundReady();
  };
  p._pause = function() {
    this._playbackResource.pause();
  };
  p._resume = function() {
    this._playbackResource.play();
  };
  p._updateVolume = function() {
    if (this._playbackResource != null) {
      var newVolume = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
      if (newVolume != this._playbackResource.volume) {
        this._playbackResource.volume = newVolume;
      }
    }
  };
  p._calculateCurrentPosition = function() {
    return this._playbackResource.currentTime * 1E3 - this._startTime;
  };
  p._updatePosition = function() {
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
    try {
      this._playbackResource.currentTime = (this._position + this._startTime) * .001;
    } catch (error) {
      this._handleSetPositionSeek(null);
    }
  };
  p._handleSetPositionSeek = function(event) {
    if (this._playbackResource == null) {
      return;
    }
    this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, false);
    this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
  };
  p._handleAudioSpriteLoop = function(event) {
    if (this._playbackResource.currentTime <= this._audioSpriteStopTime) {
      return;
    }
    this._playbackResource.pause();
    if (this._loop == 0) {
      this._handleSoundComplete(null);
    } else {
      this._position = 0;
      this._loop--;
      this._playbackResource.currentTime = this._startTime * .001;
      if (!this._paused) {
        this._playbackResource.play();
      }
      this._sendEvent("loop");
    }
  };
  p._handleLoop = function(event) {
    if (this._loop == 0) {
      this._playbackResource.loop = false;
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, false);
    }
  };
  p._updateStartTime = function() {
    this._audioSpriteStopTime = (this._startTime + this._duration) * .001;
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    }
  };
  p._updateDuration = function() {
    this._audioSpriteStopTime = (this._startTime + this._duration) * .001;
    if (this.playState == createjs.Sound.PLAY_SUCCEEDED) {
      this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, false);
      this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, false);
    }
  };
  p._setDurationFromSource = function() {
    this._duration = createjs.HTMLAudioTagPool.getDuration(this.src);
    this._playbackResource = null;
  };
  createjs.HTMLAudioSoundInstance = createjs.promote(HTMLAudioSoundInstance, "AbstractSoundInstance");
})();
this.createjs = this.createjs || {};
(function() {
  function HTMLAudioPlugin() {
    this.AbstractPlugin_constructor();
    this.defaultNumChannels = 2;
    this._capabilities = s._capabilities;
    this._loaderClass = createjs.SoundLoader;
    this._soundInstanceClass = createjs.HTMLAudioSoundInstance;
  }
  var p = createjs.extend(HTMLAudioPlugin, createjs.AbstractPlugin);
  var s = HTMLAudioPlugin;
  s.MAX_INSTANCES = 30;
  s._AUDIO_READY = "canplaythrough";
  s._AUDIO_ENDED = "ended";
  s._AUDIO_SEEKED = "seeked";
  s._AUDIO_STALLED = "stalled";
  s._TIME_UPDATE = "timeupdate";
  s._capabilities = null;
  s.isSupported = function() {
    s._generateCapabilities();
    return s._capabilities != null;
  };
  s._generateCapabilities = function() {
    if (s._capabilities != null) {
      return;
    }
    var t = document.createElement("audio");
    if (t.canPlayType == null) {
      return null;
    }
    s._capabilities = {panning:false, volume:true, tracks:-1};
    var supportedExtensions = createjs.Sound.SUPPORTED_EXTENSIONS;
    var extensionMap = createjs.Sound.EXTENSION_MAP;
    for (var i = 0, l = supportedExtensions.length;i < l;i++) {
      var ext = supportedExtensions[i];
      var playType = extensionMap[ext] || ext;
      s._capabilities[ext] = t.canPlayType("audio/" + ext) != "no" && t.canPlayType("audio/" + ext) != "" || t.canPlayType("audio/" + playType) != "no" && t.canPlayType("audio/" + playType) != "";
    }
  };
  p.register = function(loadItem) {
    var tag = createjs.HTMLAudioTagPool.get(loadItem.src);
    var loader = this.AbstractPlugin_register(loadItem);
    loader.setTag(tag);
    return loader;
  };
  p.removeSound = function(src) {
    this.AbstractPlugin_removeSound(src);
    createjs.HTMLAudioTagPool.remove(src);
  };
  p.create = function(src, startTime, duration) {
    var si = this.AbstractPlugin_create(src, startTime, duration);
    si.setPlaybackResource(null);
    return si;
  };
  p.toString = function() {
    return "[HTMLAudioPlugin]";
  };
  p.setVolume = p.getVolume = p.setMute = null;
  createjs.HTMLAudioPlugin = createjs.promote(HTMLAudioPlugin, "AbstractPlugin");
})();
this.createjs = this.createjs || {};
createjs.extend = function(subclass, superclass) {
  function o() {
    this.constructor = subclass;
  }
  o.prototype = superclass.prototype;
  return subclass.prototype = new o;
};
this.createjs = this.createjs || {};
createjs.promote = function(subclass, prefix) {
  var subP = subclass.prototype, supP = Object.getPrototypeOf && Object.getPrototypeOf(subP) || subP.__proto__;
  if (supP) {
    subP[(prefix += "_") + "constructor"] = supP.constructor;
    for (var n in supP) {
      if (subP.hasOwnProperty(n) && typeof supP[n] == "function") {
        subP[prefix + n] = supP[n];
      }
    }
  }
  return subclass;
};
this.createjs = this.createjs || {};
(function() {
  function Event(type, bubbles, cancelable) {
    this.type = type;
    this.target = null;
    this.currentTarget = null;
    this.eventPhase = 0;
    this.bubbles = !!bubbles;
    this.cancelable = !!cancelable;
    this.timeStamp = (new Date).getTime();
    this.defaultPrevented = false;
    this.propagationStopped = false;
    this.immediatePropagationStopped = false;
    this.removed = false;
  }
  var p = Event.prototype;
  p.preventDefault = function() {
    this.defaultPrevented = this.cancelable && true;
  };
  p.stopPropagation = function() {
    this.propagationStopped = true;
  };
  p.stopImmediatePropagation = function() {
    this.immediatePropagationStopped = this.propagationStopped = true;
  };
  p.remove = function() {
    this.removed = true;
  };
  p.clone = function() {
    return new Event(this.type, this.bubbles, this.cancelable);
  };
  p.set = function(props) {
    for (var n in props) {
      this[n] = props[n];
    }
    return this;
  };
  p.toString = function() {
    return "[Event (type=" + this.type + ")]";
  };
  createjs.Event = Event;
})();
this.createjs = this.createjs || {};
(function() {
  function EventDispatcher() {
    this._listeners = null;
    this._captureListeners = null;
  }
  var p = EventDispatcher.prototype;
  EventDispatcher.initialize = function(target) {
    target.addEventListener = p.addEventListener;
    target.on = p.on;
    target.removeEventListener = target.off = p.removeEventListener;
    target.removeAllEventListeners = p.removeAllEventListeners;
    target.hasEventListener = p.hasEventListener;
    target.dispatchEvent = p.dispatchEvent;
    target._dispatchEvent = p._dispatchEvent;
    target.willTrigger = p.willTrigger;
  };
  p.addEventListener = function(type, listener, useCapture) {
    var listeners;
    if (useCapture) {
      listeners = this._captureListeners = this._captureListeners || {};
    } else {
      listeners = this._listeners = this._listeners || {};
    }
    var arr = listeners[type];
    if (arr) {
      this.removeEventListener(type, listener, useCapture);
    }
    arr = listeners[type];
    if (!arr) {
      listeners[type] = [listener];
    } else {
      arr.push(listener);
    }
    return listener;
  };
  p.on = function(type, listener, scope, once, data, useCapture) {
    if (listener.handleEvent) {
      scope = scope || listener;
      listener = listener.handleEvent;
    }
    scope = scope || this;
    return this.addEventListener(type, function(evt) {
      listener.call(scope, evt, data);
      once && evt.remove();
    }, useCapture);
  };
  p.removeEventListener = function(type, listener, useCapture) {
    var listeners = useCapture ? this._captureListeners : this._listeners;
    if (!listeners) {
      return;
    }
    var arr = listeners[type];
    if (!arr) {
      return;
    }
    for (var i = 0, l = arr.length;i < l;i++) {
      if (arr[i] == listener) {
        if (l == 1) {
          delete listeners[type];
        } else {
          arr.splice(i, 1);
        }
        break;
      }
    }
  };
  p.off = p.removeEventListener;
  p.removeAllEventListeners = function(type) {
    if (!type) {
      this._listeners = this._captureListeners = null;
    } else {
      if (this._listeners) {
        delete this._listeners[type];
      }
      if (this._captureListeners) {
        delete this._captureListeners[type];
      }
    }
  };
  p.dispatchEvent = function(eventObj) {
    if (typeof eventObj == "string") {
      var listeners = this._listeners;
      if (!listeners || !listeners[eventObj]) {
        return false;
      }
      eventObj = new createjs.Event(eventObj);
    } else {
      if (eventObj.target && eventObj.clone) {
        eventObj = eventObj.clone();
      }
    }
    try {
      eventObj.target = this;
    } catch (e) {
    }
    if (!eventObj.bubbles || !this.parent) {
      this._dispatchEvent(eventObj, 2);
    } else {
      var top = this, list = [top];
      while (top.parent) {
        list.push(top = top.parent);
      }
      var i, l = list.length;
      for (i = l - 1;i >= 0 && !eventObj.propagationStopped;i--) {
        list[i]._dispatchEvent(eventObj, 1 + (i == 0));
      }
      for (i = 1;i < l && !eventObj.propagationStopped;i++) {
        list[i]._dispatchEvent(eventObj, 3);
      }
    }
    return eventObj.defaultPrevented;
  };
  p.hasEventListener = function(type) {
    var listeners = this._listeners, captureListeners = this._captureListeners;
    return !!(listeners && listeners[type] || captureListeners && captureListeners[type]);
  };
  p.willTrigger = function(type) {
    var o = this;
    while (o) {
      if (o.hasEventListener(type)) {
        return true;
      }
      o = o.parent;
    }
    return false;
  };
  p.toString = function() {
    return "[EventDispatcher]";
  };
  p._dispatchEvent = function(eventObj, eventPhase) {
    var l, listeners = eventPhase == 1 ? this._captureListeners : this._listeners;
    if (eventObj && listeners) {
      var arr = listeners[eventObj.type];
      if (!arr || !(l = arr.length)) {
        return;
      }
      try {
        eventObj.currentTarget = this;
      } catch (e) {
      }
      try {
        eventObj.eventPhase = eventPhase;
      } catch (e) {
      }
      eventObj.removed = false;
      arr = arr.slice();
      for (var i = 0;i < l && !eventObj.immediatePropagationStopped;i++) {
        var o = arr[i];
        if (o.handleEvent) {
          o.handleEvent(eventObj);
        } else {
          o(eventObj);
        }
        if (eventObj.removed) {
          this.off(eventObj.type, o, eventPhase == 1);
          eventObj.removed = false;
        }
      }
    }
  };
  createjs.EventDispatcher = EventDispatcher;
})();
this.createjs = this.createjs || {};
(function() {
  function Ticker() {
    throw "Ticker cannot be instantiated.";
  }
  Ticker.RAF_SYNCHED = "synched";
  Ticker.RAF = "raf";
  Ticker.TIMEOUT = "timeout";
  Ticker.useRAF = false;
  Ticker.timingMode = null;
  Ticker.maxDelta = 0;
  Ticker.paused = false;
  Ticker.removeEventListener = null;
  Ticker.removeAllEventListeners = null;
  Ticker.dispatchEvent = null;
  Ticker.hasEventListener = null;
  Ticker._listeners = null;
  createjs.EventDispatcher.initialize(Ticker);
  Ticker._addEventListener = Ticker.addEventListener;
  Ticker.addEventListener = function() {
    !Ticker._inited && Ticker.init();
    return Ticker._addEventListener.apply(Ticker, arguments);
  };
  Ticker._inited = false;
  Ticker._startTime = 0;
  Ticker._pausedTime = 0;
  Ticker._ticks = 0;
  Ticker._pausedTicks = 0;
  Ticker._interval = 50;
  Ticker._lastTime = 0;
  Ticker._times = null;
  Ticker._tickTimes = null;
  Ticker._timerId = null;
  Ticker._raf = true;
  Ticker.setInterval = function(interval) {
    Ticker._interval = interval;
    if (!Ticker._inited) {
      return;
    }
    Ticker._setupTick();
  };
  Ticker.getInterval = function() {
    return Ticker._interval;
  };
  Ticker.setFPS = function(value) {
    Ticker.setInterval(1E3 / value);
  };
  Ticker.getFPS = function() {
    return 1E3 / Ticker._interval;
  };
  try {
    Object.defineProperties(Ticker, {interval:{get:Ticker.getInterval, set:Ticker.setInterval}, framerate:{get:Ticker.getFPS, set:Ticker.setFPS}});
  } catch (e) {
    console.log(e);
  }
  Ticker.init = function() {
    if (Ticker._inited) {
      return;
    }
    Ticker._inited = true;
    Ticker._times = [];
    Ticker._tickTimes = [];
    Ticker._startTime = Ticker._getTime();
    Ticker._times.push(Ticker._lastTime = 0);
    Ticker.interval = Ticker._interval;
  };
  Ticker.reset = function() {
    if (Ticker._raf) {
      var f = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame;
      f && f(Ticker._timerId);
    } else {
      clearTimeout(Ticker._timerId);
    }
    Ticker.removeAllEventListeners("tick");
    Ticker._timerId = Ticker._times = Ticker._tickTimes = null;
    Ticker._startTime = Ticker._lastTime = Ticker._ticks = 0;
    Ticker._inited = false;
  };
  Ticker.getMeasuredTickTime = function(ticks) {
    var ttl = 0, times = Ticker._tickTimes;
    if (!times || times.length < 1) {
      return -1;
    }
    ticks = Math.min(times.length, ticks || Ticker.getFPS() | 0);
    for (var i = 0;i < ticks;i++) {
      ttl += times[i];
    }
    return ttl / ticks;
  };
  Ticker.getMeasuredFPS = function(ticks) {
    var times = Ticker._times;
    if (!times || times.length < 2) {
      return -1;
    }
    ticks = Math.min(times.length - 1, ticks || Ticker.getFPS() | 0);
    return 1E3 / ((times[0] - times[ticks]) / ticks);
  };
  Ticker.setPaused = function(value) {
    Ticker.paused = value;
  };
  Ticker.getPaused = function() {
    return Ticker.paused;
  };
  Ticker.getTime = function(runTime) {
    return Ticker._startTime ? Ticker._getTime() - (runTime ? Ticker._pausedTime : 0) : -1;
  };
  Ticker.getEventTime = function(runTime) {
    return Ticker._startTime ? (Ticker._lastTime || Ticker._startTime) - (runTime ? Ticker._pausedTime : 0) : -1;
  };
  Ticker.getTicks = function(pauseable) {
    return Ticker._ticks - (pauseable ? Ticker._pausedTicks : 0);
  };
  Ticker._handleSynch = function() {
    Ticker._timerId = null;
    Ticker._setupTick();
    if (Ticker._getTime() - Ticker._lastTime >= (Ticker._interval - 1) * .97) {
      Ticker._tick();
    }
  };
  Ticker._handleRAF = function() {
    Ticker._timerId = null;
    Ticker._setupTick();
    Ticker._tick();
  };
  Ticker._handleTimeout = function() {
    Ticker._timerId = null;
    Ticker._setupTick();
    Ticker._tick();
  };
  Ticker._setupTick = function() {
    if (Ticker._timerId != null) {
      return;
    }
    var mode = Ticker.timingMode || Ticker.useRAF && Ticker.RAF_SYNCHED;
    if (mode == Ticker.RAF_SYNCHED || mode == Ticker.RAF) {
      var f = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
      if (f) {
        Ticker._timerId = f(mode == Ticker.RAF ? Ticker._handleRAF : Ticker._handleSynch);
        Ticker._raf = true;
        return;
      }
    }
    Ticker._raf = false;
    Ticker._timerId = setTimeout(Ticker._handleTimeout, Ticker._interval);
  };
  Ticker._tick = function() {
    var paused = Ticker.paused;
    var time = Ticker._getTime();
    var elapsedTime = time - Ticker._lastTime;
    Ticker._lastTime = time;
    Ticker._ticks++;
    if (paused) {
      Ticker._pausedTicks++;
      Ticker._pausedTime += elapsedTime;
    }
    if (Ticker.hasEventListener("tick")) {
      var event = new createjs.Event("tick");
      var maxDelta = Ticker.maxDelta;
      event.delta = maxDelta && elapsedTime > maxDelta ? maxDelta : elapsedTime;
      event.paused = paused;
      event.time = time;
      event.runTime = time - Ticker._pausedTime;
      Ticker.dispatchEvent(event);
    }
    Ticker._tickTimes.unshift(Ticker._getTime() - time);
    while (Ticker._tickTimes.length > 100) {
      Ticker._tickTimes.pop();
    }
    Ticker._times.unshift(time);
    while (Ticker._times.length > 100) {
      Ticker._times.pop();
    }
  };
  var now = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
  Ticker._getTime = function() {
    return (now && now.call(performance) || (new Date).getTime()) - Ticker._startTime;
  };
  createjs.Ticker = Ticker;
})();
this.createjs = this.createjs || {};
(function() {
  function Tween(target, props, pluginData) {
    this.ignoreGlobalPause = false;
    this.loop = false;
    this.duration = 0;
    this.pluginData = pluginData || {};
    this.target = target;
    this.position = null;
    this.passive = false;
    this._paused = false;
    this._curQueueProps = {};
    this._initQueueProps = {};
    this._steps = [];
    this._actions = [];
    this._prevPosition = 0;
    this._stepPosition = 0;
    this._prevPos = -1;
    this._target = target;
    this._useTicks = false;
    this._inited = false;
    this._registered = false;
    if (props) {
      this._useTicks = props.useTicks;
      this.ignoreGlobalPause = props.ignoreGlobalPause;
      this.loop = props.loop;
      props.onChange && this.addEventListener("change", props.onChange);
      if (props.override) {
        Tween.removeTweens(target);
      }
    }
    if (props && props.paused) {
      this._paused = true;
    } else {
      createjs.Tween._register(this, true);
    }
    if (props && props.position != null) {
      this.setPosition(props.position, Tween.NONE);
    }
  }
  var p = createjs.extend(Tween, createjs.EventDispatcher);
  Tween.NONE = 0;
  Tween.LOOP = 1;
  Tween.REVERSE = 2;
  Tween.IGNORE = {};
  Tween._tweens = [];
  Tween._plugins = {};
  Tween.get = function(target, props, pluginData, override) {
    if (override) {
      Tween.removeTweens(target);
    }
    return new Tween(target, props, pluginData);
  };
  Tween.tick = function(delta, paused) {
    var tweens = Tween._tweens.slice();
    for (var i = tweens.length - 1;i >= 0;i--) {
      var tween = tweens[i];
      if (paused && !tween.ignoreGlobalPause || tween._paused) {
        continue;
      }
      tween.tick(tween._useTicks ? 1 : delta);
    }
  };
  Tween.handleEvent = function(event) {
    if (event.type == "tick") {
      this.tick(event.delta, event.paused);
    }
  };
  Tween.removeTweens = function(target) {
    if (!target.tweenjs_count) {
      return;
    }
    var tweens = Tween._tweens;
    for (var i = tweens.length - 1;i >= 0;i--) {
      var tween = tweens[i];
      if (tween._target == target) {
        tween._paused = true;
        tweens.splice(i, 1);
      }
    }
    target.tweenjs_count = 0;
  };
  Tween.removeAllTweens = function() {
    var tweens = Tween._tweens;
    for (var i = 0, l = tweens.length;i < l;i++) {
      var tween = tweens[i];
      tween._paused = true;
      tween.target && (tween.target.tweenjs_count = 0);
    }
    tweens.length = 0;
  };
  Tween.hasActiveTweens = function(target) {
    if (target) {
      return target.tweenjs_count != null && !!target.tweenjs_count;
    }
    return Tween._tweens && !!Tween._tweens.length;
  };
  Tween.installPlugin = function(plugin, properties) {
    var priority = plugin.priority;
    if (priority == null) {
      plugin.priority = priority = 0;
    }
    for (var i = 0, l = properties.length, p = Tween._plugins;i < l;i++) {
      var n = properties[i];
      if (!p[n]) {
        p[n] = [plugin];
      } else {
        var arr = p[n];
        for (var j = 0, jl = arr.length;j < jl;j++) {
          if (priority < arr[j].priority) {
            break;
          }
        }
        p[n].splice(j, 0, plugin);
      }
    }
  };
  Tween._register = function(tween, value) {
    var target = tween._target;
    var tweens = Tween._tweens;
    if (value && !tween._registered) {
      if (target) {
        target.tweenjs_count = target.tweenjs_count ? target.tweenjs_count + 1 : 1;
      }
      tweens.push(tween);
      if (!Tween._inited && createjs.Ticker) {
        createjs.Ticker.addEventListener("tick", Tween);
        Tween._inited = true;
      }
    } else {
      if (!value && tween._registered) {
        if (target) {
          target.tweenjs_count--;
        }
        var i = tweens.length;
        while (i--) {
          if (tweens[i] == tween) {
            tweens.splice(i, 1);
            break;
          }
        }
      }
    }
    tween._registered = value;
  };
  p.wait = function(duration, passive) {
    if (duration == null || duration <= 0) {
      return this;
    }
    var o = this._cloneProps(this._curQueueProps);
    return this._addStep({d:duration, p0:o, e:this._linearEase, p1:o, v:passive});
  };
  p.to = function(props, duration, ease) {
    if (isNaN(duration) || duration < 0) {
      duration = 0;
    }
    return this._addStep({d:duration || 0, p0:this._cloneProps(this._curQueueProps), e:ease, p1:this._cloneProps(this._appendQueueProps(props))});
  };
  p.call = function(callback, params, scope) {
    return this._addAction({f:callback, p:params ? params : [this], o:scope ? scope : this._target});
  };
  p.set = function(props, target) {
    return this._addAction({f:this._set, o:this, p:[props, target ? target : this._target]});
  };
  p.play = function(tween) {
    if (!tween) {
      tween = this;
    }
    return this.call(tween.setPaused, [false], tween);
  };
  p.pause = function(tween) {
    if (!tween) {
      tween = this;
    }
    return this.call(tween.setPaused, [true], tween);
  };
  p.setPosition = function(value, actionsMode) {
    if (value < 0) {
      value = 0;
    }
    if (actionsMode == null) {
      actionsMode = 1;
    }
    var t = value;
    var end = false;
    if (t >= this.duration) {
      if (this.loop) {
        t = t % this.duration;
      } else {
        t = this.duration;
        end = true;
      }
    }
    if (t == this._prevPos) {
      return end;
    }
    var prevPos = this._prevPos;
    this.position = this._prevPos = t;
    this._prevPosition = value;
    if (this._target) {
      if (end) {
        this._updateTargetProps(null, 1);
      } else {
        if (this._steps.length > 0) {
          for (var i = 0, l = this._steps.length;i < l;i++) {
            if (this._steps[i].t > t) {
              break;
            }
          }
          var step = this._steps[i - 1];
          this._updateTargetProps(step, (this._stepPosition = t - step.t) / step.d);
        }
      }
    }
    if (actionsMode != 0 && this._actions.length > 0) {
      if (this._useTicks) {
        this._runActions(t, t);
      } else {
        if (actionsMode == 1 && t < prevPos) {
          if (prevPos != this.duration) {
            this._runActions(prevPos, this.duration);
          }
          this._runActions(0, t, true);
        } else {
          this._runActions(prevPos, t);
        }
      }
    }
    if (end) {
      this.setPaused(true);
    }
    this.dispatchEvent("change");
    return end;
  };
  p.tick = function(delta) {
    if (this._paused) {
      return;
    }
    this.setPosition(this._prevPosition + delta);
  };
  p.setPaused = function(value) {
    if (this._paused === !!value) {
      return this;
    }
    this._paused = !!value;
    Tween._register(this, !value);
    return this;
  };
  p.w = p.wait;
  p.t = p.to;
  p.c = p.call;
  p.s = p.set;
  p.toString = function() {
    return "[Tween]";
  };
  p.clone = function() {
    throw "Tween can not be cloned.";
  };
  p._updateTargetProps = function(step, ratio) {
    var p0, p1, v, v0, v1, arr;
    if (!step && ratio == 1) {
      this.passive = false;
      p0 = p1 = this._curQueueProps;
    } else {
      this.passive = !!step.v;
      if (this.passive) {
        return;
      }
      if (step.e) {
        ratio = step.e(ratio, 0, 1, 1);
      }
      p0 = step.p0;
      p1 = step.p1;
    }
    for (var n in this._initQueueProps) {
      if ((v0 = p0[n]) == null) {
        p0[n] = v0 = this._initQueueProps[n];
      }
      if ((v1 = p1[n]) == null) {
        p1[n] = v1 = v0;
      }
      if (v0 == v1 || ratio == 0 || ratio == 1 || typeof v0 != "number") {
        v = ratio == 1 ? v1 : v0;
      } else {
        v = v0 + (v1 - v0) * ratio;
      }
      var ignore = false;
      if (arr = Tween._plugins[n]) {
        for (var i = 0, l = arr.length;i < l;i++) {
          var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
          if (v2 == Tween.IGNORE) {
            ignore = true;
          } else {
            v = v2;
          }
        }
      }
      if (!ignore) {
        this._target[n] = v;
      }
    }
  };
  p._runActions = function(startPos, endPos, includeStart) {
    var sPos = startPos;
    var ePos = endPos;
    var i = -1;
    var j = this._actions.length;
    var k = 1;
    if (startPos > endPos) {
      sPos = endPos;
      ePos = startPos;
      i = j;
      j = k = -1;
    }
    while ((i += k) != j) {
      var action = this._actions[i];
      var pos = action.t;
      if (pos == ePos || pos > sPos && pos < ePos || includeStart && pos == startPos) {
        action.f.apply(action.o, action.p);
      }
    }
  };
  p._appendQueueProps = function(o) {
    var arr, oldValue, i, l, injectProps;
    for (var n in o) {
      if (this._initQueueProps[n] === undefined) {
        oldValue = this._target[n];
        if (arr = Tween._plugins[n]) {
          for (i = 0, l = arr.length;i < l;i++) {
            oldValue = arr[i].init(this, n, oldValue);
          }
        }
        this._initQueueProps[n] = this._curQueueProps[n] = oldValue === undefined ? null : oldValue;
      } else {
        oldValue = this._curQueueProps[n];
      }
    }
    for (var n in o) {
      oldValue = this._curQueueProps[n];
      if (arr = Tween._plugins[n]) {
        injectProps = injectProps || {};
        for (i = 0, l = arr.length;i < l;i++) {
          if (arr[i].step) {
            arr[i].step(this, n, oldValue, o[n], injectProps);
          }
        }
      }
      this._curQueueProps[n] = o[n];
    }
    if (injectProps) {
      this._appendQueueProps(injectProps);
    }
    return this._curQueueProps;
  };
  p._cloneProps = function(props) {
    var o = {};
    for (var n in props) {
      o[n] = props[n];
    }
    return o;
  };
  p._addStep = function(o) {
    if (o.d > 0) {
      this._steps.push(o);
      o.t = this.duration;
      this.duration += o.d;
    }
    return this;
  };
  p._addAction = function(o) {
    o.t = this.duration;
    this._actions.push(o);
    return this;
  };
  p._set = function(props, o) {
    for (var n in props) {
      o[n] = props[n];
    }
  };
  createjs.Tween = createjs.promote(Tween, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function Timeline(tweens, labels, props) {
    this.EventDispatcher_constructor();
    this.ignoreGlobalPause = false;
    this.duration = 0;
    this.loop = false;
    this.position = null;
    this._paused = false;
    this._tweens = [];
    this._labels = null;
    this._labelList = null;
    this._prevPosition = 0;
    this._prevPos = -1;
    this._useTicks = false;
    this._registered = false;
    if (props) {
      this._useTicks = props.useTicks;
      this.loop = props.loop;
      this.ignoreGlobalPause = props.ignoreGlobalPause;
      props.onChange && this.addEventListener("change", props.onChange);
    }
    if (tweens) {
      this.addTween.apply(this, tweens);
    }
    this.setLabels(labels);
    if (props && props.paused) {
      this._paused = true;
    } else {
      createjs.Tween._register(this, true);
    }
    if (props && props.position != null) {
      this.setPosition(props.position, createjs.Tween.NONE);
    }
  }
  var p = createjs.extend(Timeline, createjs.EventDispatcher);
  p.addTween = function(tween) {
    var l = arguments.length;
    if (l > 1) {
      for (var i = 0;i < l;i++) {
        this.addTween(arguments[i]);
      }
      return arguments[0];
    } else {
      if (l == 0) {
        return null;
      }
    }
    this.removeTween(tween);
    this._tweens.push(tween);
    tween.setPaused(true);
    tween._paused = false;
    tween._useTicks = this._useTicks;
    if (tween.duration > this.duration) {
      this.duration = tween.duration;
    }
    if (this._prevPos >= 0) {
      tween.setPosition(this._prevPos, createjs.Tween.NONE);
    }
    return tween;
  };
  p.removeTween = function(tween) {
    var l = arguments.length;
    if (l > 1) {
      var good = true;
      for (var i = 0;i < l;i++) {
        good = good && this.removeTween(arguments[i]);
      }
      return good;
    } else {
      if (l == 0) {
        return false;
      }
    }
    var tweens = this._tweens;
    var i = tweens.length;
    while (i--) {
      if (tweens[i] == tween) {
        tweens.splice(i, 1);
        if (tween.duration >= this.duration) {
          this.updateDuration();
        }
        return true;
      }
    }
    return false;
  };
  p.addLabel = function(label, position) {
    this._labels[label] = position;
    var list = this._labelList;
    if (list) {
      for (var i = 0, l = list.length;i < l;i++) {
        if (position < list[i].position) {
          break;
        }
      }
      list.splice(i, 0, {label:label, position:position});
    }
  };
  p.setLabels = function(o) {
    this._labels = o ? o : {};
  };
  p.getLabels = function() {
    var list = this._labelList;
    if (!list) {
      list = this._labelList = [];
      var labels = this._labels;
      for (var n in labels) {
        list.push({label:n, position:labels[n]});
      }
      list.sort(function(a, b) {
        return a.position - b.position;
      });
    }
    return list;
  };
  p.getCurrentLabel = function() {
    var labels = this.getLabels();
    var pos = this.position;
    var l = labels.length;
    if (l) {
      for (var i = 0;i < l;i++) {
        if (pos < labels[i].position) {
          break;
        }
      }
      return i == 0 ? null : labels[i - 1].label;
    }
    return null;
  };
  p.gotoAndPlay = function(positionOrLabel) {
    this.setPaused(false);
    this._goto(positionOrLabel);
  };
  p.gotoAndStop = function(positionOrLabel) {
    this.setPaused(true);
    this._goto(positionOrLabel);
  };
  p.setPosition = function(value, actionsMode) {
    var t = this._calcPosition(value);
    var end = !this.loop && value >= this.duration;
    if (t == this._prevPos) {
      return end;
    }
    this._prevPosition = value;
    this.position = this._prevPos = t;
    for (var i = 0, l = this._tweens.length;i < l;i++) {
      this._tweens[i].setPosition(t, actionsMode);
      if (t != this._prevPos) {
        return false;
      }
    }
    if (end) {
      this.setPaused(true);
    }
    this.dispatchEvent("change");
    return end;
  };
  p.setPaused = function(value) {
    this._paused = !!value;
    createjs.Tween._register(this, !value);
  };
  p.updateDuration = function() {
    this.duration = 0;
    for (var i = 0, l = this._tweens.length;i < l;i++) {
      var tween = this._tweens[i];
      if (tween.duration > this.duration) {
        this.duration = tween.duration;
      }
    }
  };
  p.tick = function(delta) {
    this.setPosition(this._prevPosition + delta);
  };
  p.resolve = function(positionOrLabel) {
    var pos = Number(positionOrLabel);
    if (isNaN(pos)) {
      pos = this._labels[positionOrLabel];
    }
    return pos;
  };
  p.toString = function() {
    return "[Timeline]";
  };
  p.clone = function() {
    throw "Timeline can not be cloned.";
  };
  p._goto = function(positionOrLabel) {
    var pos = this.resolve(positionOrLabel);
    if (pos != null) {
      this.setPosition(pos);
    }
  };
  p._calcPosition = function(value) {
    if (value < 0) {
      return 0;
    }
    if (value < this.duration) {
      return value;
    }
    return this.loop ? value % this.duration : this.duration;
  };
  createjs.Timeline = createjs.promote(Timeline, "EventDispatcher");
})();
this.createjs = this.createjs || {};
(function() {
  function Ease() {
    throw "Ease cannot be instantiated.";
  }
  Ease.linear = function(t) {
    return t;
  };
  Ease.none = Ease.linear;
  Ease.get = function(amount) {
    if (amount < -1) {
      amount = -1;
    }
    if (amount > 1) {
      amount = 1;
    }
    return function(t) {
      if (amount == 0) {
        return t;
      }
      if (amount < 0) {
        return t * (t * -amount + 1 + amount);
      }
      return t * ((2 - t) * amount + (1 - amount));
    };
  };
  Ease.getPowIn = function(pow) {
    return function(t) {
      return Math.pow(t, pow);
    };
  };
  Ease.getPowOut = function(pow) {
    return function(t) {
      return 1 - Math.pow(1 - t, pow);
    };
  };
  Ease.getPowInOut = function(pow) {
    return function(t) {
      if ((t *= 2) < 1) {
        return .5 * Math.pow(t, pow);
      }
      return 1 - .5 * Math.abs(Math.pow(2 - t, pow));
    };
  };
  Ease.quadIn = Ease.getPowIn(2);
  Ease.quadOut = Ease.getPowOut(2);
  Ease.quadInOut = Ease.getPowInOut(2);
  Ease.cubicIn = Ease.getPowIn(3);
  Ease.cubicOut = Ease.getPowOut(3);
  Ease.cubicInOut = Ease.getPowInOut(3);
  Ease.quartIn = Ease.getPowIn(4);
  Ease.quartOut = Ease.getPowOut(4);
  Ease.quartInOut = Ease.getPowInOut(4);
  Ease.quintIn = Ease.getPowIn(5);
  Ease.quintOut = Ease.getPowOut(5);
  Ease.quintInOut = Ease.getPowInOut(5);
  Ease.sineIn = function(t) {
    return 1 - Math.cos(t * Math.PI / 2);
  };
  Ease.sineOut = function(t) {
    return Math.sin(t * Math.PI / 2);
  };
  Ease.sineInOut = function(t) {
    return -.5 * (Math.cos(Math.PI * t) - 1);
  };
  Ease.getBackIn = function(amount) {
    return function(t) {
      return t * t * ((amount + 1) * t - amount);
    };
  };
  Ease.backIn = Ease.getBackIn(1.7);
  Ease.getBackOut = function(amount) {
    return function(t) {
      return --t * t * ((amount + 1) * t + amount) + 1;
    };
  };
  Ease.backOut = Ease.getBackOut(1.7);
  Ease.getBackInOut = function(amount) {
    amount *= 1.525;
    return function(t) {
      if ((t *= 2) < 1) {
        return .5 * (t * t * ((amount + 1) * t - amount));
      }
      return .5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
    };
  };
  Ease.backInOut = Ease.getBackInOut(1.7);
  Ease.circIn = function(t) {
    return -(Math.sqrt(1 - t * t) - 1);
  };
  Ease.circOut = function(t) {
    return Math.sqrt(1 - --t * t);
  };
  Ease.circInOut = function(t) {
    if ((t *= 2) < 1) {
      return -.5 * (Math.sqrt(1 - t * t) - 1);
    }
    return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
  };
  Ease.bounceIn = function(t) {
    return 1 - Ease.bounceOut(1 - t);
  };
  Ease.bounceOut = function(t) {
    if (t < 1 / 2.75) {
      return 7.5625 * t * t;
    } else {
      if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + .75;
      } else {
        if (t < 2.5 / 2.75) {
          return 7.5625 * (t -= 2.25 / 2.75) * t + .9375;
        } else {
          return 7.5625 * (t -= 2.625 / 2.75) * t + .984375;
        }
      }
    }
  };
  Ease.bounceInOut = function(t) {
    if (t < .5) {
      return Ease.bounceIn(t * 2) * .5;
    }
    return Ease.bounceOut(t * 2 - 1) * .5 + .5;
  };
  Ease.getElasticIn = function(amplitude, period) {
    var pi2 = Math.PI * 2;
    return function(t) {
      if (t == 0 || t == 1) {
        return t;
      }
      var s = period / pi2 * Math.asin(1 / amplitude);
      return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
    };
  };
  Ease.elasticIn = Ease.getElasticIn(1, .3);
  Ease.getElasticOut = function(amplitude, period) {
    var pi2 = Math.PI * 2;
    return function(t) {
      if (t == 0 || t == 1) {
        return t;
      }
      var s = period / pi2 * Math.asin(1 / amplitude);
      return amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1;
    };
  };
  Ease.elasticOut = Ease.getElasticOut(1, .3);
  Ease.getElasticInOut = function(amplitude, period) {
    var pi2 = Math.PI * 2;
    return function(t) {
      var s = period / pi2 * Math.asin(1 / amplitude);
      if ((t *= 2) < 1) {
        return -.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
      }
      return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * .5 + 1;
    };
  };
  Ease.elasticInOut = Ease.getElasticInOut(1, .3 * 1.5);
  createjs.Ease = Ease;
})();
this.createjs = this.createjs || {};
(function() {
  function MotionGuidePlugin() {
    throw "MotionGuidePlugin cannot be instantiated.";
  }
  MotionGuidePlugin.priority = 0;
  MotionGuidePlugin._rotOffS;
  MotionGuidePlugin._rotOffE;
  MotionGuidePlugin._rotNormS;
  MotionGuidePlugin._rotNormE;
  MotionGuidePlugin.install = function() {
    createjs.Tween.installPlugin(MotionGuidePlugin, ["guide", "x", "y", "rotation"]);
    return createjs.Tween.IGNORE;
  };
  MotionGuidePlugin.init = function(tween, prop, value) {
    var target = tween.target;
    if (!target.hasOwnProperty("x")) {
      target.x = 0;
    }
    if (!target.hasOwnProperty("y")) {
      target.y = 0;
    }
    if (!target.hasOwnProperty("rotation")) {
      target.rotation = 0;
    }
    if (prop == "rotation") {
      tween.__needsRot = true;
    }
    return prop == "guide" ? null : value;
  };
  MotionGuidePlugin.step = function(tween, prop, startValue, endValue, injectProps) {
    if (prop == "rotation") {
      tween.__rotGlobalS = startValue;
      tween.__rotGlobalE = endValue;
      MotionGuidePlugin.testRotData(tween, injectProps);
    }
    if (prop != "guide") {
      return endValue;
    }
    var temp, data = endValue;
    if (!data.hasOwnProperty("path")) {
      data.path = [];
    }
    var path = data.path;
    if (!data.hasOwnProperty("end")) {
      data.end = 1;
    }
    if (!data.hasOwnProperty("start")) {
      data.start = startValue && startValue.hasOwnProperty("end") && startValue.path === path ? startValue.end : 0;
    }
    if (data.hasOwnProperty("_segments") && data._length) {
      return endValue;
    }
    var l = path.length;
    var accuracy = 10;
    if (l >= 6 && (l - 2) % 4 == 0) {
      data._segments = [];
      data._length = 0;
      for (var i = 2;i < l;i += 4) {
        var sx = path[i - 2], sy = path[i - 1];
        var cx = path[i + 0], cy = path[i + 1];
        var ex = path[i + 2], ey = path[i + 3];
        var oldX = sx, oldY = sy;
        var tempX, tempY, total = 0;
        var sublines = [];
        for (var j = 1;j <= accuracy;j++) {
          var t = j / accuracy;
          var inv = 1 - t;
          tempX = inv * inv * sx + 2 * inv * t * cx + t * t * ex;
          tempY = inv * inv * sy + 2 * inv * t * cy + t * t * ey;
          total += sublines[sublines.push(Math.sqrt((temp = tempX - oldX) * temp + (temp = tempY - oldY) * temp)) - 1];
          oldX = tempX;
          oldY = tempY;
        }
        data._segments.push(total);
        data._segments.push(sublines);
        data._length += total;
      }
    } else {
      throw "invalid 'path' data, please see documentation for valid paths";
    }
    temp = data.orient;
    data.orient = true;
    var o = {};
    MotionGuidePlugin.calc(data, data.start, o);
    tween.__rotPathS = Number(o.rotation.toFixed(5));
    MotionGuidePlugin.calc(data, data.end, o);
    tween.__rotPathE = Number(o.rotation.toFixed(5));
    data.orient = false;
    MotionGuidePlugin.calc(data, data.end, injectProps);
    data.orient = temp;
    if (!data.orient) {
      return endValue;
    }
    tween.__guideData = data;
    MotionGuidePlugin.testRotData(tween, injectProps);
    return endValue;
  };
  MotionGuidePlugin.testRotData = function(tween, injectProps) {
    if (tween.__rotGlobalS === undefined || tween.__rotGlobalE === undefined) {
      if (tween.__needsRot) {
        return;
      }
      if (tween._curQueueProps.rotation !== undefined) {
        tween.__rotGlobalS = tween.__rotGlobalE = tween._curQueueProps.rotation;
      } else {
        tween.__rotGlobalS = tween.__rotGlobalE = injectProps.rotation = tween.target.rotation || 0;
      }
    }
    if (tween.__guideData === undefined) {
      return;
    }
    var data = tween.__guideData;
    var rotGlobalD = tween.__rotGlobalE - tween.__rotGlobalS;
    var rotPathD = tween.__rotPathE - tween.__rotPathS;
    var rot = rotGlobalD - rotPathD;
    if (data.orient == "auto") {
      if (rot > 180) {
        rot -= 360;
      } else {
        if (rot < -180) {
          rot += 360;
        }
      }
    } else {
      if (data.orient == "cw") {
        while (rot < 0) {
          rot += 360;
        }
        if (rot == 0 && rotGlobalD > 0 && rotGlobalD != 180) {
          rot += 360;
        }
      } else {
        if (data.orient == "ccw") {
          rot = rotGlobalD - (rotPathD > 180 ? 360 - rotPathD : rotPathD);
          while (rot > 0) {
            rot -= 360;
          }
          if (rot == 0 && rotGlobalD < 0 && rotGlobalD != -180) {
            rot -= 360;
          }
        }
      }
    }
    data.rotDelta = rot;
    data.rotOffS = tween.__rotGlobalS - tween.__rotPathS;
    tween.__rotGlobalS = tween.__rotGlobalE = tween.__guideData = tween.__needsRot = undefined;
  };
  MotionGuidePlugin.tween = function(tween, prop, value, startValues, endValues, ratio, wait, end) {
    var data = endValues.guide;
    if (data == undefined || data === startValues.guide) {
      return value;
    }
    if (data.lastRatio != ratio) {
      var t = (data.end - data.start) * (wait ? data.end : ratio) + data.start;
      MotionGuidePlugin.calc(data, t, tween.target);
      switch(data.orient) {
        case "cw":
        case "ccw":
        case "auto":
          tween.target.rotation += data.rotOffS + data.rotDelta * ratio;
          break;
        case "fixed":
        default:
          tween.target.rotation += data.rotOffS;
          break;
      }
      data.lastRatio = ratio;
    }
    if (prop == "rotation" && (!data.orient || data.orient == "false")) {
      return value;
    }
    return tween.target[prop];
  };
  MotionGuidePlugin.calc = function(data, ratio, target) {
    if (data._segments == undefined) {
      throw "Missing critical pre-calculated information, please file a bug";
    }
    if (target == undefined) {
      target = {x:0, y:0, rotation:0};
    }
    var seg = data._segments;
    var path = data.path;
    var pos = data._length * ratio;
    var cap = seg.length - 2;
    var n = 0;
    while (pos > seg[n] && n < cap) {
      pos -= seg[n];
      n += 2;
    }
    var sublines = seg[n + 1];
    var i = 0;
    cap = sublines.length - 1;
    while (pos > sublines[i] && i < cap) {
      pos -= sublines[i];
      i++;
    }
    var t = i / ++cap + pos / (cap * sublines[i]);
    n = n * 2 + 2;
    var inv = 1 - t;
    target.x = inv * inv * path[n - 2] + 2 * inv * t * path[n + 0] + t * t * path[n + 2];
    target.y = inv * inv * path[n - 1] + 2 * inv * t * path[n + 1] + t * t * path[n + 3];
    if (data.orient) {
      target.rotation = 57.2957795 * Math.atan2((path[n + 1] - path[n - 1]) * inv + (path[n + 3] - path[n + 1]) * t, (path[n + 0] - path[n - 2]) * inv + (path[n + 2] - path[n + 0]) * t);
    }
    return target;
  };
  createjs.MotionGuidePlugin = MotionGuidePlugin;
})();
this.createjs = this.createjs || {};
(function() {
  var s = createjs.TweenJS = createjs.TweenJS || {};
  s.version = "NEXT";
  s.buildDate = "Wed, 25 Nov 2015 15:39:42 GMT";
})();

