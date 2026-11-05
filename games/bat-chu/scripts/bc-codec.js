/**
 * Mã hóa/giải mã tên file ảnh Bắt Chữ.
 * Escape chuỗi Telex literal (vd: "ix" trong "remix") trước khi map dấu (vd: ix → ĩ).
 */
var bc = window.bc || {};

(function () {
    bc.alphabet = bc.alphabet || "abcdeghiklmnopqrstuvxy";

    var TONE_CODES = [
        "aas", "aaf", "aar", "aax", "aaj", "aws", "awf", "awr", "awx", "awj",
        "ees", "eef", "eer", "eex", "eej", "oos", "oof", "oor", "oox", "ooj",
        "ows", "owf", "owr", "owx", "owj", "uws", "uwf", "uwr", "uwx", "uwj",
        "aa", "aw", "ee", "oo", "ow", "uw",
        "as", "af", "ar", "ax", "aj", "es", "ef", "er", "ex", "ej",
        "is", "if", "ir", "ix", "ij", "os", "of", "or", "ox", "oj",
        "us", "uf", "ur", "ux", "uj", "ys", "yf", "yr", "yx", "yj", "dd"
    ];

    var TONE_CHARS = {
        aas: "\u1ea5", aaf: "\u1ea7", aar: "\u1ea9", aax: "\u1eab", aaj: "\u1ead", aa: "\u00e2",
        as: "\u00e1", af: "\u00e0", ar: "\u1ea3", ax: "\u00e3", aj: "\u1ea1",
        aws: "\u1eaf", awf: "\u1eb1", awr: "\u1eb3", awx: "\u1eb5", awj: "\u1eb7", aw: "\u0103",
        ees: "\u1ebf", eef: "\u1ec1", eer: "\u1ec3", eex: "\u1ec5", eej: "\u1ec7", ee: "\u00ea",
        es: "\u00e9", ef: "\u00e8", er: "\u1ebb", ex: "\u1ebd", ej: "\u1eb9",
        oos: "\u1ed1", oof: "\u1ed3", oor: "\u1ed5", oox: "\u1ed7", ooj: "\u1ed9", oo: "\u00f4",
        os: "\u00f3", of: "\u00f2", or: "\u1ecf", ox: "\u00f5", oj: "\u1ecd",
        is: "\u00ed", if: "\u00ec", ir: "\u1ec9", ix: "\u0129", ij: "\u1ecb",
        ows: "\u1edb", owf: "\u1edd", owr: "\u1edf", owx: "\u1ee1", owj: "\u1ee3", ow: "\u01a1",
        ys: "\u00fd", yf: "\u1ef3", yr: "\u1ef7", yx: "\u1ef9", yj: "\u1ef5",
        us: "\u00fa", uf: "\u00f9", ur: "\u1ee7", ux: "\u0169", uj: "\u1ee5",
        uws: "\u1ee9", uwf: "\u1eeb", uwr: "\u1eed", uwx: "\u1eef", uwj: "\u1ef1", uw: "\u01b0",
        dd: "\u0111"
    };

    function escapeLiteralDigraphs(s) {
        var i, c, esc, parts;
        for (i = 0; i < TONE_CODES.length; i++) {
            c = TONE_CODES[i];
            esc = c + c.charAt(c.length - 1);
            if (s.indexOf(c) === -1) continue;
            parts = s.split(c);
            s = parts.join(esc);
        }
        return s;
    }

    bc.unescapeLiteralDigraphs = function (s) {
        var i, c, esc, re;
        for (i = 0; i < TONE_CODES.length; i++) {
            c = TONE_CODES[i];
            esc = c + c.charAt(c.length - 1);
            re = new RegExp(esc, "ig");
            s = s.replace(re, c);
        }
        return s;
    };

    bc.escapeLiteralDigraphs = escapeLiteralDigraphs;

    /** Map Telex → dấu; bỏ qua mã đã escape (vd ix trong remixx). */
    bc.decodeToneString = function (s) {
        var i, c, last, re, ch;
        for (i = 0; i < TONE_CODES.length; i++) {
            c = TONE_CODES[i];
            ch = TONE_CHARS[c];
            if (!ch) continue;
            last = c.charAt(c.length - 1);
            re = new RegExp(c + "(?!" + last + ")", "ig");
            s = s.replace(re, ch);
        }
        s = bc.unescapeLiteralDigraphs(s);
        return s.replace(/-+/g, " ").toLowerCase();
    };

    bc.decrypt = function (s) {
        var result = "", reverse = bc.alphabet.split("").reverse().join(""), i, idx;
        for (i = 0; i < s.length; i++) {
            idx = bc.alphabet.indexOf(s.charAt(i));
            result += idx >= 0 ? reverse.charAt(idx) : s.charAt(i);
        }
        return bc.decodeToneString(result);
    };

    bc.encrypt = function (s) {
        s = s.toLowerCase();
        s = escapeLiteralDigraphs(s);
        s = s
            .replace(/\u00e1/ig, "as").replace(/\u00e0/ig, "af").replace(/\u1ea3/ig, "ar").replace(/\u00e3/ig, "ax").replace(/\u1ea1/ig, "aj")
            .replace(/\u1eaf/ig, "aws").replace(/\u1eb1/ig, "awf").replace(/\u1eb3/ig, "awr").replace(/\u1eb5/ig, "awx").replace(/\u1eb7/ig, "awj").replace(/\u0103/ig, "aw")
            .replace(/\u1ea5/ig, "aas").replace(/\u1ea7/ig, "aaf").replace(/\u1ea9/ig, "aar").replace(/\u1eab/ig, "aax").replace(/\u1ead/ig, "aaj").replace(/\u00e2/ig, "aa")
            .replace(/\u00e9/ig, "es").replace(/\u00e8/ig, "ef").replace(/\u1ebb/ig, "er").replace(/\u1ebd/ig, "ex").replace(/\u1eb9/ig, "ej")
            .replace(/\u1ebf/ig, "ees").replace(/\u1ec1/ig, "eef").replace(/\u1ec3/ig, "eer").replace(/\u1ec5/ig, "eex").replace(/\u1ec7/ig, "eej").replace(/\u00ea/ig, "ee")
            .replace(/\u00f3/ig, "os").replace(/\u00f2/ig, "of").replace(/\u1ecf/ig, "or").replace(/\u00f5/ig, "ox").replace(/\u1ecd/ig, "oj")
            .replace(/\u1ed1/ig, "oos").replace(/\u1ed3/ig, "oof").replace(/\u1ed5/ig, "oor").replace(/\u1ed7/ig, "oox").replace(/\u1ed9/ig, "ooj").replace(/\u00f4/ig, "oo")
            .replace(/\u00ed/ig, "is").replace(/\u00ec/ig, "if").replace(/\u1ec9/ig, "ir").replace(/\u0129/ig, "ix").replace(/\u1ecb/ig, "ij")
            .replace(/\u1edb/ig, "ows").replace(/\u1edd/ig, "owf").replace(/\u1edf/ig, "owr").replace(/\u1ee1/ig, "owx").replace(/\u1ee3/ig, "owj").replace(/\u01a1/ig, "ow")
            .replace(/\u00fd/ig, "ys").replace(/\u1ef3/ig, "yf").replace(/\u1ef7/ig, "yr").replace(/\u1ef9/ig, "yx").replace(/\u1ef5/ig, "yj")
            .replace(/\u00fa/ig, "us").replace(/\u00f9/ig, "uf").replace(/\u1ee7/ig, "ur").replace(/\u0169/ig, "ux").replace(/\u1ee5/ig, "uj")
            .replace(/\u1ee9/ig, "uws").replace(/\u1eeb/ig, "uwf").replace(/\u1eed/ig, "uwr").replace(/\u1eef/ig, "uwx").replace(/\u1ef1/ig, "uwj").replace(/\u01b0/ig, "uw")
            .replace(/\u0111/ig, "dd").replace(/\s+/ig, "-");
        var reverse = bc.alphabet.split("").reverse().join(""), result = "", i, idx;
        for (i = 0; i < s.length; i++) {
            idx = reverse.indexOf(s.charAt(i));
            result += idx >= 0 ? bc.alphabet.charAt(idx) : s.charAt(i);
        }
        return result;
    };
}());
