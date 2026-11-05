var isMute = true;
var music_pick = new Audio("audio/chon-ky-tu.mp3");
var music_out = new Audio("audio/dat-ky-tu.mp3");
var music_play_agian = new Audio("audio/choi-lai.mp3");
var music_timeup = new Audio("audio/het-gio.mp3");
var music_completelever = new Audio("audio/hoan-thanh-level.mp3");
var music_complete = new Audio("audio/hoan-thanh-game.mp3.mp3");
var audio_backgound = new Audio("audio/nhac-nen-background.mp3");

$(document).ready(function () {
  var n_wordList = wordList.sort(() => Math.random() - 0.5);
  var wordRoot = n_wordList.slice(0, number_word);
  var wordstore = [];
  $.each(wordRoot, function (i, item) {
    var rd = randomWordStore(item);
    wordstore.push(rd.join(""));
  });
  var type = 0;
  var w_index = 0;
  const $canvas = $("#canvas");
  const canvas = document.getElementById("canvas");
  const context = canvas.getContext("2d");
  var numberUp = 0;
  var elements = [];
  var current_index = null;
  var renember_element = {};
  var is_dragging = false;
  let begin_x;
  let begin_y;
  var elapsedTime = 0;
  var seconds_win = 0;
  var minutes_win = 0;
  var time_win = [];
  let offset_x;
  let offset_y;
  var zoomElement;
  var cornerRadius = 10;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  var canvas_width = canvas.width;
  var canvas_height = canvas.height;
  var menu_position = {
    x: 10,
    y: canvas_height - 60,
    width: 50,
    height: 50,
    isTrue: true,
    isOpenMenuDetail: false,
  };
  var block = {
    x: 15,
    y: canvas_height / 4,
    width: canvas_width - 40,
    height: canvas_height / 3,
    color: "black",
    isTrue: false,
  };
  var clock_position = {
    x: 10,
    y: 0,
    width: 100,
    height: 50,
    isTrue: false,
  };
  var remindButton = {
    x: canvas_width - 200,
    y: 10,
    width: 130,
    height: 40,
    isTrue: false,
  };
  var remindButtonReponsive = {
    x: 10,
    y: 90,
    width: 130,
    height: 40,
    isTrue: false,
  };
  var typeButton1 = {
    x: canvas_width / 2 - 125,
    y: canvas_height / 4,
    width: 250,
    height: 40,
    isTrue: false,
  };
  var typeButton2 = {
    x: canvas_width / 2 - 125,
    y: canvas_height / 2,
    width: 250,
    height: 40,
    isTrue: false,
  };
  var pause_game = {
    x: menu_position.x + 85,
    y: menu_position.y - 10,
    width: 80,
    height: 15,
    isTrue: true,
  };
  var pause_game_re = {
    x: menu_position.x + 15,
    y: menu_position.y - 80,
    width: 80,
    height: 15,
    isTrue: true,
  };
  var continute_game = {
    x: canvas_width / 2 - 127.5,
    y: canvas_height / 2 - 127.5,
    width: 255,
    height: 255,
    isTrue: true,
  };
  var start_game = {
    x: menu_position.x + 85,
    y: menu_position.y + 20,
    width: 75,
    height: 15,
    isTrue: true,
  };
  var start_game_re = {
    x: menu_position.x + 15,
    y: menu_position.y - 50,
    width: 75,
    height: 15,
    isTrue: true,
  };

  var close_button = {
    x: menu_position.x + 188,
    y: menu_position.y - 88,
    width: 20,
    height: 20,
    isTrue: true,
  };
  var close_button_re = {
    x: menu_position.x + 118,
    y: menu_position.y - 158,
    width: 20,
    height: 20,
    isTrue: true,
  };
  var back_menu = {
    x: canvas_width / 2.4 + 20,
    y: canvas_height / 10 + 155,
    width: 220,
    height: 30,
    isTrue: true,
  };
  var back_menu_re = {
    x: canvas_width / 5 + 20,
    y: canvas_height / 10 + 155,
    width: 220,
    height: 30,
    isTrue: true,
  };

  var send_point = {
    x: canvas_width / 2.4 + 80,
    y: canvas_height / 10 + 235,
    width: 95,
    height: 30,
    isTrue: true,
  };
  var send_point_re = {
    x: canvas_width / 5 + 20,
    y: canvas_height / 10 + 235,
    width: 95,
    height: 30,
    isTrue: true,
  };
  var play_again = {
    x: canvas_width / 2.4 + 20,
    y: canvas_height / 10 + 200,
    width: 90,
    height: 25,
    isTrue: true,
  };
  var play_again_re = {
    x: canvas_width / 5 + 20,
    y: canvas_height / 10 + 206,
    width: 100,
    height: 24,
    isTrue: true,
  };
  var loud_speaker = {
    x: canvas_width - 55,
    y: canvas_height - 60,
    width: 30,
    height: 40,
    isTrue: false,
  };

  var point = 0;
  var spacing = 25;
  var isEnd = false;
  var timeNew;
  var startTime = 0;
  var timeCount = 0;
  var isPause = false;
  var endTime;
  var isOk = false;
  var t = 1000;
  var n_t;
  var background = new Image();
  background.src = "theme/back-ground.jpg";
  background.onload = function () {
    drawBackGround();
    createElement();
    drawtypeButton_type1();
    drawtypeButton_type2();
  };
  function drawBackGround() {
    context.drawImage(background, 0, 0, canvas_width, canvas_height);
  }

  function get_offset() {
    let canvas_offsets = canvas.getBoundingClientRect();
    offset_x = canvas_offsets.left;
    offset_y = canvas_offsets.top;
  }
  get_offset();
  window.onscroll = function () {
    get_offset();
  };
  window.onresize = function () {
    get_offset();
  };
  canvas.onresize = function () {
    get_offset();
  };

  function drawRoundRect(context, x, y, width, height, radius) {
    context.beginPath();
    context.moveTo(x + radius, y);
    context.lineTo(x + width - radius, y);
    context.arcTo(x + width, y, x + width, y + radius, radius);
    context.lineTo(x + width, y + height - radius);
    context.arcTo(
      x + width,
      y + height,
      x + width - radius,
      y + height,
      radius
    );
    context.lineTo(x + radius, y + height);
    context.arcTo(x, y + height, x, y + height - radius, radius);
    context.lineTo(x, y + radius);
    context.arcTo(x, y, x + radius, y, radius);
    context.closePath();
  }

  function drawtypeButton_type1() {
    context.beginPath();
    drawRoundRect(
      context,
      typeButton1.x,
      typeButton1.y,
      typeButton1.width,
      typeButton1.height,
      cornerRadius
    );
    context.strokeStyle = "purple";
    context.lineWidth = 7;
    context.stroke();
    context.fillStyle = "#ffe599";
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "purple";
    context.font = "Bold 30px Arial";
    context.fillText("Luyện tập", typeButton1.x + 53, typeButton1.y + 28);
    context.closePath();
  }
  function drawtypeButton_type2() {
    context.beginPath();
    drawRoundRect(
      context,
      typeButton2.x,
      typeButton2.y,
      typeButton2.width,
      typeButton2.height,
      cornerRadius
    );
    context.strokeStyle = "purple";
    context.lineWidth = 7;
    context.stroke();
    context.fillStyle = "#ffe599";
    context.fill();
    context.closePath();

    context.beginPath();
    context.fillStyle = "purple";
    context.font = "Bold 30px Arial";
    context.fillText("Tính điểm", typeButton2.x + 53, typeButton2.y + 31);
    context.closePath();
  }

  var updateInterval;

  function zoomText() {
    isOk = true;
    setTimeout(function () {
      updateInterval = setInterval(updateText, 10);
      checkCongraculation();
    }, 1000);
  }

  var text;
  var textWidth = context.measureText(text).width;
  if (canvas_width < 600) {
    var x = (block.width - textWidth) / 2 - 60  ;
  } else {
    var x = (block.width - textWidth) / 2 - 80;
  }
  var y = block.y + block.height + 20;
  function updateText() {
    if (y > block.y + block.height / 2) {
      // Hiển thị văn bản
      context.clearRect(block.x, block.y, block.width, block.height);
      drawElement();
      if(canvas_width<600){
        context.beginPath();
        context.fillStyle = "black";
        context.font = "bold 71px Arial";
        context.globalAlpha = 1;
        if (type == 2) {
          context.fillText(text, x - 70, y);
        } else if (type == 1) {
          context.fillText(text, x - 40, y);
        }
        context.closePath();
  
        context.beginPath();
        context.fillStyle = "#ffd966";
        context.font = "bold 70px Arial";
        context.globalAlpha = 1;
        if (type == 2) {
          context.fillText(text, x - 70, y);
        } else if (type == 1) {
          context.fillText(text, x - 40, y);
        }
        context.closePath();
      }else{
        context.beginPath();
        context.fillStyle = "black";
        context.font = "bold 92px Arial";
        context.globalAlpha = 1;
        if (type == 2) {
          context.fillText(text, x - 70, y);
        } else if (type == 1) {
          context.fillText(text, x - 40, y);
        }
        context.closePath();
  
        context.beginPath();
        context.fillStyle = "#ffd966";
        context.font = "bold 90px Arial";
        context.globalAlpha = 1;
        if (type == 2) {
          context.fillText(text, x - 70, y);
        } else if (type == 1) {
          context.fillText(text, x - 40, y);
        }
        context.closePath();
      }


    } else if (y < block.y + block.height / 2 + 10) {
      // Ẩn văn bản
      context.clearRect(block.x, block.y, block.width, block.height);
      drawElement();
      clearInterval(updateInterval);
      y = block.y + block.height;
    }
    y -= 1.7;
  }

  //--------------------------------------------------------\\

  function zoom() {
    animateTick();
  }

  function drawTick(x, y, width, element) {
    var element = zoomElement;
    if (!isNone) {
      context.beginPath();
      context.moveTo(x, y + 5);
      context.lineTo(x + width / 3, y + width / 3);
      context.lineTo(x + width, y - width / 3);
      context.strokeStyle = "white";
      context.lineWidth = 5;
      context.stroke();
      context.closePath();
    } else if (isNone) {
      context.clearRect(element.x, element.y, element.width, element.height);
      drwElement(element);
      isNone = false;
    }
  }

  var tickWidth = 0; // Độ dài ban đầu của dấu tích
  var maxTickWidth; // Độ dài tối đa của dấu tích
  var tickSpeed = 1.5; // Tốc độ vẽ dấu tích
  var isNone = false;
  function animateTick() {
    if (canvas_width > 600) {
      maxTickWidth = 50;
    } else {
      maxTickWidth = 30;
    }
    var element = zoomElement;
    context.clearRect(element.x, element.y, element.width, element.height);
    drwElement(element);
    drawTick(
      element.x + element.width / 2 - 20,
      element.y + 30,
      tickWidth,
      element
    );
    // Vẽ dấu tích với độ dài hiện tại

    if (tickWidth < maxTickWidth) {
      // Tăng độ dài của dấu tích
      tickWidth += tickSpeed;
    } else {
      isNone = true;
      tickWidth = 0;
      drawTick(element.x + element.width / 2 - 10, element.y + 30, tickWidth);

      // Nếu đã đạt tối đa độ dài, bắt đầu biến mất dấu tích
    }

    if (tickWidth > 0) {
      // Tiếp tục vẽ dấu tích trong khung hình tiếp theo
      requestAnimationFrame(animateTick);
    }
  }

  function createElement() {
    elements = [];
    if (0 <= w_index <= 30) {
      var letter = wordstore[w_index];
    } else {
      var letter = wordstore[0];
    }
    if (letter === undefined) {
      var letter = wordstore[0];
    }
    for (
      i = spacing;
      i <=
      canvas_width - spacing - (canvas_width - 2 * spacing) / letter.length;
      i += (canvas_width - 2 * spacing - 10) / letter.length
    ) {
      var obj = { x: i };
      elements.push(obj);
    }
    for (let j = 0; j < letter.length; j++) {
      elements[j].y = canvas_height / 3;
      elements[j].text = letter[j];
      elements[j].width = (canvas_width - 2 * spacing - 10) / letter.length;
      if (canvas_width < 600) {
        elements[j].height = canvas_height / 9;
      } else {
        elements[j].height = canvas_height / 7;
      }
      elements[j].color = "#800080";
      elements[j].z_index = 0;
      elements[j].isTrue = false;
      elements[j].isDone = false;
      elements[j].colorText = colors[j];
    }
    current_index = null;
    renember_element = {};
  }
  function randomWordStore(word) {
    var randomWord = word;
    var arrayletter = randomWord.split("");
    for (let a = 0; a < arrayletter.length; a++) {
      var b = Math.floor(Math.random() * arrayletter.length);
      var temp = arrayletter[a];
      arrayletter[a] = arrayletter[b];
      arrayletter[b] = temp;
    }
    var suffledString = arrayletter.join("");
    var arrayNewLetter = suffledString.split("");
    return arrayNewLetter;
  }

  function drwElement(element) {
    context.beginPath();
    context.lineWidth = 3;
    if (element.isDone == true) {
      for (i = 0; i < colors.length; i++) {
        switch (element.colorText) {
          case colors[i]:
            context.fillStyle = colors[i];
        }
      }
    } else {
      context.fillStyle = element.color;
    }
    context.fillRect(element.x, element.y, element.width, element.height);
    context.beginPath();
    context.strokeStyle = "#ffe599";
    context.strokeRect(element.x, element.y, element.width, element.height);
    context.fillStyle = "white";
    if (canvas_width < 600) {
      context.font = "Bold 30px Arial";
    } else {
      context.font = "Bold 40px Arial";
    }
    context.fillAlign = "center";
    if (element.text == "i") {
      context.fillText(
        element.text,
        element.x + element.width / 2 - 5,
        element.y + element.height / 2 + 10
      );
    } else {
      context.fillText(
        element.text,
        element.x + element.width / 2 - 10,
        element.y + element.height / 2 + 10
      );
    }
    context.fill();
  }
  function drawElement() {
    context.clearRect(0, 0, canvas_width, canvas_height);
    drawBackGround();
    if (!menu_position.isTrue) {
      drawMenu();
    } else {
      drawMenuDetail();
    }
    drawClock();
    drawNextNumber();
    if (type == 2) {
      drawPoint();
    }
    drawMusic();
    drawRemind();

    var list = [];
    for (let element of elements) {
      if (element.z_index > 0) {
        list.push(element);
      } else {
        drwElement(element);
      }
    }
    if (list.length > 0) {
      for (let element of list) {
        drwElement(element);
      }
    }
  }

  function setZindex(current_index, type) {
    if (current_index != null) {
      elements[current_index].z_index = type == "up" ? 0 : 1;
      drawElement();
    }
  }

  function is_mouse_in_element(begin_x, begin_y, element) {
    if (
      begin_x >= element.x &&
      begin_x <= element.x + element.width &&
      begin_y >= element.y &&
      begin_y <= element.y + element.height
    ) {
      if (element.isTrue == false) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }
  function pauseGame() {
    context.clearRect(0, 0, canvas_width, canvas_height);
    context.beginPath();
    context.fillStyle = "white";
    context.fillRect(0, 0, canvas_width, canvas_height);
    context.closePath();
    var image = new Image();
    image.src = "theme/icon/forward.png";
    image.onload = function () {
      context.drawImage(image, continute_game.x, continute_game.y);
    };
  }

  audio_backgound.addEventListener("ended", function () {
    audio_backgound.currentTime = 0;
    audio_backgound.play();
  });
  //------------------------MOUSEDOWN---------------------\\

  function _handleDown(e) {
    begin_x = parseInt(e.clientX - offset_x);
    begin_y = parseInt(e.clientY - offset_y);

    if (type > 0) {
      if (continute_game.isTrue) {
        let index = 0;
        for (let element of elements) {
          if (is_mouse_in_element(begin_x, begin_y, element)) {
            if (!element.isDone) {
              if (music_pick != null) {
                music_pick.play();
              }
              current_index = index;
              is_dragging = true;
              renember_element.x = element.x;
              renember_element.y = element.y;
              return;
            }
          }
          index++;
        }
      }
    }
    if (is_mouse_in_element(begin_x, begin_y, typeButton1)) {
      if (music_pick != null) {
        music_pick.play();
      }
      if (audio_backgound != null) {
        audio_backgound.currentTime = 0;
        audio_backgound.volume = 0.1;
        audio_backgound.play();
      }
      type = 1;
      startStopwatch();
      context.clearRect(
        typeButton1.x - 5,
        typeButton1.y - 5,
        typeButton1.width + 10,
        typeButton1.height + 10
      );
      menu_position.isTrue = false;
      createElement();
      drawElement();
      typeButton1.isTrue = true;
      typeButton2.isTrue = true;
      loud_speaker.isTrue = false;
      if (canvas_width < 600) {
        remindButtonReponsive.isTrue = false;
      } else {
        remindButton.isTrue = false;
      }
    }
    if (is_mouse_in_element(begin_x, begin_y, typeButton2)) {
      if (music_pick != null) {
        music_pick.play();
      }
      if (audio_backgound != null) {
        audio_backgound.currentTime = 0;
        audio_backgound.volume = 0.1;
        audio_backgound.play();
      }
      type = 2;
      endTime = new Date().getTime() + gameTime * 1000;
      startStopwatch();
      context.clearRect(
        typeButton2.x - 5,
        typeButton2.y - 5,
        typeButton2.width + 10,
        typeButton2.height + 10
      );
      menu_position.isTrue = false;
      createElement();
      drawElement();
      typeButton1.isTrue = true;
      typeButton2.isTrue = true;
      loud_speaker.isTrue = false;
      remindButton.isTrue = false;
      if (canvas_width < 600) {
        remindButtonReponsive.isTrue = false;
      } else {
        remindButton.isTrue = false;
      }
    }
    if (isEnd) {
      if (canvas_width > 600) {
        play_again.isTrue = false;
        back_menu.isTrue = false;
        send_point.isTrue = false;
        if (is_mouse_in_element(begin_x, begin_y, send_point)) {
          if (music_play_agian != null) {
            music_play_agian.play();
          }
          new GV().saveScore(point);
          //1234 là số điểm trong game/;
        }
        if (is_mouse_in_element(begin_x, begin_y, play_again)) {
          if (music_play_agian != null) {
            music_play_agian.play();
          }
          typeButton1.isTrue = true;
          typeButton2.isTrue = true;
          loud_speaker.isTrue = false;
          if (canvas_width < 600) {
            remindButtonReponsive.isTrue = false;
          } else {
            remindButton.isTrue = false;
          }
          timeNew = 0;
          elapsedTime = 0;
          timeLeft = 0;
          point = 0;
          isEnd = false;
          isPause = false;
          time_win = [];
          current_index = null;
          renember_element = {};
          n_wordList = wordList.sort(() => Math.random() - 0.5);
          wordRoot = n_wordList.slice(0, number_word);
          wordstore = [];
          $.each(wordRoot, function (i, item) {
            var rd = randomWordStore(item);
            wordstore.push(rd.join(""));
          });
          w_index = 0;
          counter = 0;
          context.clearRect(0, 0, canvas_width, canvas_height);
          endTime = new Date().getTime() + (gameTime + 3) * 1000;
          drawLoading();
        }
        if (is_mouse_in_element(begin_x, begin_y, back_menu)) {
          if (music_play_agian != null) {
            music_play_agian.play();
          }
          audio_backgound.pause();
          back_menu.isTrue = true;
          send_point.isTrue = true;
          menu_position.isTrue = true;
          menu_position.isOpenMenuDetail = false;
          pause_game_re.isTrue = true;
          start_game_re.isTrue = true;
          close_button_re.isTrue = true;
          loud_speaker.isTrue = true;
          remindButton.isTrue = true;
          remindButtonReponsive.isTrue = true;
          typeButton1.isTrue = false;
          typeButton2.isTrue = false;
          timeNew = 0;
          elapsedTime = 0;
          timeLeft = 0;
          point = 0;
          isEnd = false;
          isPause = false;
          type = 0;
          time_win = [];
          current_index = null;
          renember_element = {};
          n_wordList = wordList.sort(() => Math.random() - 0.5);
          wordRoot = n_wordList.slice(0, number_word);
          wordstore = [];
          $.each(wordRoot, function (i, item) {
            var rd = randomWordStore(item);
            wordstore.push(rd.join(""));
          });
          w_index = 0;
          drawBackGround();
          drawtypeButton_type1();
          drawtypeButton_type2();
          stopStopwatch();
        }
      } else {
        play_again_re.isTrue = false;
        back_menu_re.isTrue = false;
        send_point_re.isTrue = false;
        if (is_mouse_in_element(begin_x, begin_y, send_point_re)) {
          if (music_play_agian != null) {
            music_play_agian.play();
          }
          new GV().saveScore(point);
          //1234 là số điểm trong game/;
        }
        if (is_mouse_in_element(begin_x, begin_y, play_again_re)) {
          if (music_play_agian != null) {
            music_play_agian.play();
          }
          typeButton1.isTrue = true;
          typeButton2.isTrue = true;
          loud_speaker.isTrue = false;
          if (canvas_width < 600) {
            remindButtonReponsive.isTrue = false;
          } else {
            remindButton.isTrue = false;
          }
          timeNew = 0;
          elapsedTime = 0;
          timeLeft = 0;
          point = 0;
          isEnd = false;
          isPause = false;
          time_win = [];
          current_index = null;
          renember_element = {};
          n_wordList = wordList.sort(() => Math.random() - 0.5);
          wordRoot = n_wordList.slice(0, number_word);
          wordstore = [];
          $.each(wordRoot, function (i, item) {
            var rd = randomWordStore(item);
            wordstore.push(rd.join(""));
          });
          w_index = 0;
          counter = 0;
          context.clearRect(0, 0, canvas_width, canvas_height);
          endTime = new Date().getTime() + (gameTime + 3) * 1000;
          drawLoading();
        }
        if (is_mouse_in_element(begin_x, begin_y, back_menu_re)) {
          if (music_play_agian != null) {
            music_play_agian.play();
          }
          back_menu_re.isTrue = true;
          send_point_re.isTrue = true;
          audio_backgound.pause();
          menu_position.isTrue = true;
          menu_position.isOpenMenuDetail = false;
          pause_game_re.isTrue = true;
          start_game_re.isTrue = true;
          close_button_re.isTrue = true;
          loud_speaker.isTrue = true;
          remindButton.isTrue = true;
          remindButtonReponsive.isTrue = true;
          typeButton1.isTrue = false;
          typeButton2.isTrue = false;
          timeNew = 0;
          elapsedTime = 0;
          timeLeft = 0;
          point = 0;
          isEnd = false;
          isPause = false;
          type = 0;
          time_win = [];
          current_index = null;
          renember_element = {};
          n_wordList = wordList.sort(() => Math.random() - 0.5);
          wordRoot = n_wordList.slice(0, number_word);
          wordstore = [];
          $.each(wordRoot, function (i, item) {
            var rd = randomWordStore(item);
            wordstore.push(rd.join(""));
          });
          w_index = 0;
          drawBackGround();
          drawtypeButton_type1();
          drawtypeButton_type2();
          stopStopwatch();
        }
      }
    }
    if (canvas_width < 600) {
      if (is_mouse_in_element(begin_x, begin_y, remindButtonReponsive)) {
        if (music_pick != null) {
          music_pick.play();
        }
        if (type == 2) {
          stopStopwatch();
          timeNew = timeLeft;
          isPause = true;
          GVAdBreak(function () {
            endTime = new Date().getTime() + timeNew * 1000;
            suggestWord();
            startStopwatch();
          });
        } else if (type == 1) {
          GVAdBreak(function () {
            suggestWord();
          });
        }
      }
    }
    if (is_mouse_in_element(begin_x, begin_y, remindButton)) {
      if (music_pick != null) {
        music_pick.play();
      }
      if (type == 2) {
        //--------------
        timeNew = t;
        n_t = timeLeft;
        endTime = new Date().getTime() + timeNew * 1000;
        stopStopwatch();
        timeNew = n_t;
        GVAdBreak(function () {
          endTime = new Date().getTime() + timeNew * 1000;
          suggestWord();
          startStopwatch();
        });
      } else if (type == 1) {
        GVAdBreak(function () {
          suggestWord();
        });
      }
    }
    if (is_mouse_in_element(begin_x, begin_y, menu_position)) {
      if (music_pick != null) {
        music_pick.play();
      }
      menu_position.isTrue = true;
      menu_position.isOpenMenuDetail = true;
      drawMenuDetail();
    }
    //------------------------------ Menu when < 600 -------------------------//
    if (canvas_width < 600) {
      if (menu_position.isOpenMenuDetail) {
        pause_game_re.isTrue = false;
        start_game_re.isTrue = false;
        close_button_re.isTrue = false;
        if (is_mouse_in_element(begin_x, begin_y, continute_game)) {
          music_play_agian.play();
          drawElement();

          if (type == 2) {
            stopStopwatch();
            timeNew = n_t;
            endTime = new Date().getTime() + timeNew * 1000;
            startStopwatch();
          } else {
            startStopwatch();
          }
          loud_speaker.isTrue = false;
          remindButton.isTrue = false;
          continute_game.isTrue = true;
        }
        if (is_mouse_in_element(begin_x, begin_y, pause_game_re)) {
          music_play_agian.play();
          if (type == 2) {
            pauseGame();
            isPause = true;
            timeNew = t;
            n_t = timeLeft;
            endTime = new Date().getTime() + timeNew * 1000;
            stopStopwatch();
          } else if (type == 1) {
            isPause = true;
            timeCount = elapsedTime;
            stopStopwatch();
            pauseGame();
          }
          loud_speaker.isTrue = true;
          remindButton.isTrue = true;
          continute_game.isTrue = false;
        }
        if (is_mouse_in_element(begin_x, begin_y, start_game_re)) {
          audio_backgound.pause();
          menu_position.isTrue = true;
          menu_position.isOpenMenuDetail = false;
          pause_game_re.isTrue = true;
          start_game_re.isTrue = true;
          close_button_re.isTrue = true;
          loud_speaker.isTrue = true;
          remindButton.isTrue = true;
          remindButtonReponsive.isTrue = true;
          typeButton1.isTrue = false;
          typeButton2.isTrue = false;
          timeNew = 0;
          elapsedTime = 0;
          timeLeft = 0;
          point = 0;
          isEnd = false;
          isPause = false;
          type = 0;
          time_win = [];
          current_index = null;
          renember_element = {};
          n_wordList = wordList.sort(() => Math.random() - 0.5);
          wordRoot = n_wordList.slice(0, number_word);
          wordstore = [];
          $.each(wordRoot, function (i, item) {
            var rd = randomWordStore(item);
            wordstore.push(rd.join(""));
          });
          w_index = 0;
          drawBackGround();
          drawtypeButton_type1();
          drawtypeButton_type2();
          stopStopwatch();
        }
        if (is_mouse_in_element(begin_x, begin_y, close_button_re)) {
          if (music_pick != null) {
            music_pick.play();
          }
          close_button_re.isTrue = true;
          pause_game_re.isTrue = true;
          continute_game.isTrue = true;
          start_game_re.isTrue = true;
          menu_position.isTrue = false;
          drawBackGround();
          drawElement();
          drawMenu();
        }
      }
    } else {
      //---------------------------- Menu when > 600--------------------------//
      if (menu_position.isOpenMenuDetail) {
        pause_game.isTrue = false;
        start_game.isTrue = false;
        close_button.isTrue = false;
        if (is_mouse_in_element(begin_x, begin_y, continute_game)) {
          music_play_agian.play();
          drawElement();
          if (type == 2) {
            endTime = new Date().getTime() + timeNew * 1000;
            startStopwatch();
          } else {
            startStopwatch();
          }
          loud_speaker.isTrue = false;
          remindButton.isTrue = false;
          continute_game.isTrue = true;
        }
        if (is_mouse_in_element(begin_x, begin_y, pause_game)) {
          music_play_agian.play();
          if (type == 2) {
            pauseGame();
            isPause = true;
            timeNew = t;
            n_t = timeLeft;
            endTime = new Date().getTime() + timeNew * 1000;
            stopStopwatch();
          } else if (type == 1) {
            stopStopwatch();
            isPause = true;
            timeCount = elapsedTime;
            pauseGame();
          }
          loud_speaker.isTrue = true;
          remindButton.isTrue = true;
          continute_game.isTrue = false;
        }
        if (is_mouse_in_element(begin_x, begin_y, start_game)) {
          audio_backgound.pause();
          menu_position.isTrue = true;
          menu_position.isOpenMenuDetail = false;
          pause_game.isTrue = true;
          start_game.isTrue = true;
          close_button.isTrue = true;
          loud_speaker.isTrue = true;
          remindButton.isTrue = true;
          typeButton1.isTrue = false;
          typeButton2.isTrue = false;
          timeNew = 0;
          elapsedTime = 0;
          timeLeft = 0;
          point = 0;
          isEnd = false;
          isPause = false;
          type = 0;
          time_win = [];
          current_index = null;
          renember_element = {};
          n_wordList = wordList.sort(() => Math.random() - 0.5);
          wordRoot = n_wordList.slice(0, number_word);
          wordstore = [];
          $.each(wordRoot, function (i, item) {
            var rd = randomWordStore(item);
            wordstore.push(rd.join(""));
          });
          w_index = 0;
          drawBackGround();
          drawtypeButton_type1();
          drawtypeButton_type2();
          stopStopwatch();
        }
        if (is_mouse_in_element(begin_x, begin_y, close_button)) {
          if (music_pick != null) {
            music_pick.play();
          }

          close_button.isTrue = true;
          pause_game.isTrue = true;
          continute_game.isTrue = true;
          start_game.isTrue = true;
          menu_position.isTrue = false;
          drawBackGround();
          drawElement();
          drawMenu();
        }
      }
    }
    //-----------------------------------------------------------------------//

    if (is_mouse_in_element(begin_x, begin_y, loud_speaker)) {
      if (music_pick != null) {
        music_pick.play();
      }
      isMute = !isMute;
      if (audio_backgound != null) {
        if (isMute) {
          audio_backgound.play();
        } else {
          audio_backgound.pause();
        }
        drawMusic();
      }
    }
  }

  $canvas.on("mousedown", function (e) {
    e.preventDefault();
    _handleDown(e);
  });

  $canvas.on("touchstart", function (e) {
    e.preventDefault();
    var touch = e.touches[0];
    _handleDown(touch);
  });
  //--------------------------MOUSEDOWN---------------------\\

  //--------------------------MOUSEMOVE----------------------\\
  function _handleMove(e) {
    if (type == 0) {
      return;
    }
    if (!is_dragging) {
      return;
    } else {
      let mouse_x = parseInt(e.clientX - offset_x);
      let mouse_y = parseInt(e.clientY - offset_y);

      let current_element = elements[current_index];
      if (current_element != null) {
        let dx = mouse_x - begin_x;
        let dy = mouse_y - begin_y;
        current_element.x += dx;
        current_element.y += dy;
        begin_x = mouse_x;
        begin_y = mouse_y;
        setZindex(current_index, "move");
      }
    }
  }
  $canvas.on("mousemove", function (e) {
    e.preventDefault();
    _handleMove(e);
  });
  $canvas.on("touchmove", function (e) {
    e.preventDefault();
    var touch = e.touches[0];
    _handleMove(touch);
  });
  //-------------------------------------------------------\\

  //--------------------------MOUSEUP----------------------\\
  function _handleUp(e) {
    if (!is_dragging) {
      return;
    }
    is_dragging = false;
    let current_element = elements[current_index];
    is_element_in_element(current_element);
    is_outside_zone(current_element);
    setZindex(current_index, "up");
    checkSolution(current_element);
  }
  $canvas.on("touchend", function (e) {
    var touch = e.touches[0];
    _handleUp(touch);
  });
  $canvas.on("mouseup", function (e) {
    _handleUp(e);
  });

  //-------------------------------------------------------\\

  $canvas.on("mouseout", function (e) {
    if (!is_dragging) {
      return;
    }
    e.preventDefault();
    is_dragging = false;

    let current_element = elements[current_index];
    is_outside_zone(current_element);
  });

  function checkSolution(current_element) {
    //Sắp xếp thứ tự mảng theo x từ nhỏ ->  lớn
    if (current_element == null) {
      return;
    }
    elements.sort((a, b) => parseFloat(a.x) - parseFloat(b.x));
    var dt = elements
      .map(function (obj) {
        return obj.text;
      })
      .join("");
    wordstore[w_index] = dt;
    if (current_element !== undefined) {
      var isSS = current_element.isDone;
      var arrRoot = wordRoot[w_index].split("");
      if (arrRoot != null) {
        for (var i = 0; i < arrRoot.length; i++) {
          if (elements[i].text == arrRoot[i]) {
            elements[i].color = colors[i].color;
            elements[i].isDone = true;
          }
        }
      }
      drawElement();
      //Thay đôi vị trí đúng hiện dấu tick
      if (
        elements.find(
          (e) =>
            e.x == current_element.x && e.y == current_element.y && e.isDone
        )
      ) {
        zoomElement = current_element;
        if (zoomElement != null && !isSS) {
          zoom();
        }
        if (elements.find((e) => !e.isDone) == null) {
          if (type == 2) {
            for (var p of pointList) {
              if (elements.length >= p.num) {
                if (numberUp > p.count + 2) {
                  point += 10;
                  text = "+10 Tốt lắm";
                } else if (numberUp >= p.count) {
                  point += 20;
                  text = "+20 Tuyệt vời";
                } else {
                  point += 30;
                  text = "+30 Hoàn hảo";
                }
                break;
              }
            }
          }
          if (type == 1) {
            text = "Hoàn hảo!";
          }
          zoomText();
          numberUp = 0;
          music_complete.play();
        }
      }
    }
  }
  function checkCongraculation() {
    if (elements.find((e) => !e.isDone) == null) {
      let isEqual = wordstore.join() === wordRoot.join();
      let isCon = w_index + 1 == number_word;
      if (isEqual || isCon) {
        if (music_completelever != null) {
          music_completelever.play();
        }

        setTimeout(function (e) {
          if (minutes_win != null) {
            time_win.push(minutes_win);
          }
          if (seconds_win != null) {
            time_win.push(seconds_win);
          }
          context.clearRect(0, 0, canvas_width, canvas_height);
          stopStopwatch();
          drawPlayAgain();
        }, 1000);
      } else {
        if (type == 2) {
          setTimeout(function (e) {
            numberUp = 0;
            w_index++;
            stopStopwatch();
            endTime = new Date().getTime() + (gameTime + 3) * 1000;
            counter = 0;
            elements.forEach((e) => {
              e.isTrue = true;
            });
            drawLoading();
            drawRemind();
            isOk = false;
          }, 1000);
        } else {
          numberUp = 0;

          setTimeout(function (e) {
            w_index++;
            drawRemind();
            createElement();
            drawElement();
          }, 1000);
        }
      }
    }
  }
  function drawPlayAgain() {
    music_completelever.play();
    drawBackGround();
    isEnd = true;
    let arr = [];
    let a = [];
    arr.push(minutes_win);
    arr.push("phút");
    arr.push(seconds_win);
    arr.push("giây");
    a.push("đạt");
    a.push(point);
    a.push("điểm");
    let s = a.join(" ");
    let string = arr.join(" ");

    if (canvas_width < 600) {
      play_again_re.isTrue = false;

      context.beginPath();
      context.fillStyle = "#ffe599";
      drawRoundRect(context, canvas_width / 5, canvas_height / 10, 275, 290, 5);
      context.strokeStyle = "purple";
      context.lineWidth = 4;
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = "purple";
      context.font = "Bold 25px Arial";
      context.fillText(
        "Kết Thúc",
        canvas_width / 5 + 85,
        canvas_height / 10 + 30
      );
      context.fillText(
        "Bạn hoàn thành trong ",
        canvas_width / 5 + 11,
        canvas_height / 10 + 60
      );
      if (type == 1) {
        context.fillText(
          string,
          canvas_width / 5 + 65,
          canvas_height / 10 + 90
        );
      } else if (type == 2) {
        context.fillText(s, canvas_width / 5 + 76, canvas_height / 10 + 90);
      }
      context.beginPath();
      context.fillStyle = "purple";
      context.fillText(
        "Trang chủ",
        canvas_width / 5 + 20,
        canvas_height / 10 + 180
      );
      if (type == 2) {
        context.fillText(
          "Gửi điểm",
          canvas_width / 5 + 20,
          canvas_height / 10 + 260
        );
      }
      context.fillText(
        "Chơi Lại",
        canvas_width / 5 + 20,
        canvas_height / 10 + 225
      );
      context.closePath();
      stopStopwatch();
    } else {
      play_again.isTrue = false;

      context.beginPath();
      context.fillStyle = "#ffe599";
      drawRoundRect(
        context,
        canvas_width / 2.4 + 10,
        canvas_height / 10,
        275,
        290,
        5
      );
      context.strokeStyle = "black";
      context.lineWidth = 4;
      context.stroke();
      context.fill();
      context.beginPath();
      context.fillStyle = "purple";
      context.font = "Bold 25px Arial";
      context.fillText(
        "Kết Thúc",
        canvas_width / 2.4 + 85,
        canvas_height / 10 + 30
      );
      context.fillText(
        "Bạn hoàn thành trong ",
        canvas_width / 2.4 + 20,
        canvas_height / 10 + 60
      );
      if (type == 1) {
        context.fillText(
          string,
          canvas_width / 2.4 + 65,
          canvas_height / 10 + 90
        );
      } else if (type == 2) {
        context.fillText(s, canvas_width / 2.4 + 76, canvas_height / 10 + 90);
      }
      context.beginPath();
      context.fillStyle = "purple";
      context.fillText(
        "Trang chủ",
        canvas_width / 2.4 + 20,
        canvas_height / 10 + 180
      );
      if (type == 2) {
        context.fillText(
          "Gửi điểm",
          canvas_width / 2.4 + 20,
          canvas_height / 10 + 260
        );
      }
      context.fillText(
        "Chơi Lại",
        canvas_width / 2.4 + 20,
        canvas_height / 10 + 220
      );
      context.closePath();
      stopStopwatch();
    }
  }

  function is_element_in_element(current_element) {
    if (music_out != null) {
      music_out.play();
    }
    if (current_element === undefined || renember_element == null) {
      return;
    }
    numberUp++;
    var els = elements.filter(function (o) {
      if (
        o.x + o.width >= current_element.x + 15 &&
        o.y + o.height >= current_element.y + 15 &&
        o.x <= current_element.x + 15 &&
        o.y <= current_element.y + 15
      ) {
        return o;
      }
    });
    if (els != null && els.length > 0) {
      var el = els[0];
      if (renember_element.x < el.x && els.length > 1) {
        el = els[1];
      }
      if (!el.isDone) {
        current_element.x = el.x;
        current_element.y = el.y;
        el.x = renember_element.x;
        el.y = renember_element.y;
      } else {
        current_element.x = renember_element.x;
        current_element.y = renember_element.y;
      }
    }
  }

  function is_outside_zone(current_element) {
    if (current_element === undefined) {
      return;
    } else {
      if (
        current_element.x < 1 ||
        current_element.x + current_element.width > canvas_width ||
        current_element.y < 1 ||
        current_element.y + current_element.height > canvas_height
      ) {
        current_element.x = renember_element.x;
        current_element.y = renember_element.y;
        drawElement();
        return;
      }
      if (
        current_element.x <= block.x ||
        current_element.x >= block.x + block.width ||
        current_element.y <= block.y ||
        current_element.y >= block.y + block.height
      ) {
        current_element.x = renember_element.x;
        current_element.y = renember_element.y;
      }
    }
  }

  function drawClock() {
    if (type == 1) {
      var now = new Date().getTime();
      if (!isPause) {
        elapsedTime = now - startTime;
      } else if (isPause) {
        elapsedTime = now - startTime + timeCount;
      }
      var minutes = Math.floor(elapsedTime / (1000 * 60));
      var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
      seconds_win = seconds;
      minutes_win = minutes;
      context.clearRect(
        clock_position.x,
        clock_position.y + 10,
        clock_position.width + 5,
        clock_position.height + 5
      );
      context.beginPath();
      context.lineWidth = 7;
      context.fillStyle = "#ffe599";
      drawRoundRect(
        context,
        clock_position.x,
        clock_position.y + 10,
        clock_position.width + 5,
        clock_position.height + 5,
        5
      );
      context.strokeStyle = "purple";
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.font = "Bold 28px Arial";
      context.fillStyle = "purple";

      context.fillText(
        minutes.toString().padStart(2, "0"),
        clock_position.x + 15,
        clock_position.height - 5
      );
      context.fillText(":", clock_position.x + 47, clock_position.height - 7);

      context.fillText(
        seconds.toString().padStart(2, "0"),
        clock_position.x + 57,
        clock_position.height - 5
      );
      context.closePath();
    } else if (type == 2) {
      //--------------------------------------------------\\
      var now = new Date().getTime();
      timeLeft = Math.floor((endTime - now) / 1000);
      let arr = [];
      if (timeLeft < 10) {
        arr.push("00 : 0");
        arr.push(timeLeft);
      } else {
        arr.push("00 : ");
        arr.push(timeLeft);
      }
      let s = arr.join("");
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      context.clearRect(
        clock_position.x,
        clock_position.y + 10,
        clock_position.width + 5,
        clock_position.height + 5
      );

      context.beginPath();
      context.lineWidth = 7;
      context.fillStyle = "#ffe599";
      drawRoundRect(
        context,
        clock_position.x,
        clock_position.y + 10,
        clock_position.width + 5,
        clock_position.height + 5,
        5
      );
      context.strokeStyle = "purple";
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.font = "Bold 28px Arial";
      context.fillStyle = "purple";
      context.fillText(s, clock_position.x + 11, clock_position.height - 5);
      context.closePath();
      //--------------------------------------------------\\

      if (timeLeft <= 0) {
        let isCon = w_index + 1 == number_word;
        if (isCon) {
          if (music_completelever != null) {
            music_completelever.play();
          }
          current_element = null;
          current_index = null;
          renember_element = {};
          if (minutes_win != null) {
            time_win.push(minutes_win);
          }
          if (seconds_win != null) {
            time_win.push(seconds_win);
          }
          context.clearRect(0, 0, canvas_width, canvas_height);
          stopStopwatch();
          drawPlayAgain();
        } else if (!isCon) {
          if (isOk) {
            return;
          } else {
            text = "Đã hết giờ!";
            zoomText();
            isCon = false;
            scale = 0;
            isPause = false;
            current_element = null;
            current_index = null;
            renember_element = {};
            w_index++;
            stopStopwatch();
            endTime = new Date().getTime() + gameTime * 1000 + 2000;
            counter = 0;
            elements.forEach((e) => {
              e.isTrue = true;
            });
            drawLoading();
            isOk = false;
            if (music_timeup != null) {
              music_timeup.play();
            }
          }
        }
      }
    }
  }
  var runClock;
  function startStopwatch() {
    startTime = new Date().getTime();
    runClock = setInterval(drawClock, 100);
  }
  function stopStopwatch() {
    clearInterval(runClock);
  }

  function drawMenu() {
    context.strokeStyle = "#ffe599";
    context.lineWidth = 4.5;
    context.strokeRect(
      menu_position.x,
      menu_position.y,
      menu_position.width,
      menu_position.height
    );
    context.moveTo(
      menu_position.x + menu_position.width / 4,
      menu_position.y + menu_position.height / 2
    );
    context.lineTo(
      menu_position.x + (3 * menu_position.width) / 4,
      menu_position.y + menu_position.height / 2
    );
    context.moveTo(
      menu_position.x + menu_position.width / 4,
      menu_position.y + menu_position.height / 3
    );
    context.lineTo(
      menu_position.x + (3 * menu_position.width) / 4,
      menu_position.y + menu_position.height / 3
    );
    context.moveTo(
      menu_position.x + menu_position.width / 4,
      menu_position.y + (2 * menu_position.height) / 3
    );
    context.lineTo(
      menu_position.x + (3 * menu_position.width) / 4,
      menu_position.y + (2 * menu_position.height) / 3
    );
    context.stroke();
  }
  function drawMenuDetail() {
    if (canvas_width < 600) {
      context.beginPath();
      context.lineWidth = 4.5;
      context.fillStyle = "#ffe599";
      context.strokeStyle = "purple";
      drawRoundRect(
        context,
        menu_position.x,
        menu_position.y - 170,
        150,
        150,
        5
      );
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.fillStyle = "purple";
      context.font = "Bold 22px Arial";
      context.fillText(
        "Cài Đặt :",
        menu_position.x + 15,
        menu_position.y - 140
      );
      context.beginPath();
      context.fillStyle = "purple";
      context.font = "Bold 22px Arial";
      context.fillText("Tạm dừng", menu_position.x + 15, menu_position.y - 67);
      context.fillText("Trang chủ", menu_position.x + 15, menu_position.y - 35);
      context.closePath();

      context.beginPath();
      context.fillStyle = "purple";
      context.fillRect(menu_position.x + 117.5, menu_position.y - 157, 20, 20);
      context.fill();

      context.fillStyle = "#ffe599";
      context.font = "Bold 22px Arial";
      context.fillText("X", menu_position.x + 120.5, menu_position.y - 140);
      context.fill();

      context.closePath();
    } else {

      context.beginPath();
      context.fillStyle = "#ffe599";
      context.lineWidth = 6.5;
      context.strokeStyle = "purple";
      drawRoundRect(
        context,
        menu_position.x + 70, 
        menu_position.y - 100, 
        150, 
        150,
        5
      );
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.lineWidth = 5;
      context.fillStyle = "purple";
      context.font = "20px Arial";
      context.fillText("Cài Đặt :", menu_position.x + 85, menu_position.y - 70);
      context.fill()
      context.closePath();

      context.beginPath();
      context.lineWidth = 5;
      context.fillStyle = "purple";
      context.font = "20px Arial";
      context.fillText("Tạm dừng", menu_position.x + 85, menu_position.y + 3);
      context.fillText("Trang chủ", menu_position.x + 85, menu_position.y + 35);
      context.fill()
      context.closePath();

      context.beginPath();
      context.fillStyle = "purple";
      context.fillRect(menu_position.x + 187.5, menu_position.y - 87, 20, 20);
      context.fill();

      context.fillStyle = "#ffe599";
      context.font = "Bold 20px Arial";
      context.fillText("X", menu_position.x + 190, menu_position.y - 70);
      context.fill();

      context.closePath();
    }
  }

  function drawNextNumber() {
    let array = [];
    string = " / ";
    if (w_index >= 30) {
      w_index = 29;
    } else if (w_index < 0) {
      w_index = 0;
    }
    array.push(w_index + 1);
    array.push(string);
    array.push(number_word);
    let n_string = array.join("");

    if (canvas_width < 600) {
      context.clearRect(
        (0.9 * canvas_width) / 2 - 60,
        canvas_height - 60,
        150,
        40
      );

      context.beginPath();
      context.lineWidth = 7;
      context.fillStyle = "#ffe599";
      drawRoundRect(
        context,
        (0.9 * canvas_width) / 2 - 60,
        canvas_height - 60,
        150,
        40,
        5
      );
      context.strokeStyle = "purple";
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.font = "Bold 30px Arial";
      context.fillStyle = "purple";
      if (w_index >= 10) {
        context.fillText(
          n_string,
          (1.55 * canvas_width) / 3 - 20 - 40,
          canvas_height - 30
        );
      } else {
        context.fillText(
          n_string,
          (1.43 * canvas_width) / 3 - 40,
          canvas_height - 30
        );
      }
      context.fill();
      context.closePath();
    } else {
      context.clearRect((0.9 * canvas_width) / 2, canvas_height - 60, 160, 40);

      context.beginPath();
      context.lineWidth = 7;
      context.fillStyle = "#ffe599";
      drawRoundRect(
        context,
        (0.9 * canvas_width) / 2,
        canvas_height - 60,
        160,
        40,
        5
      );
      context.strokeStyle = "purple";
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.font = "Bold 30px Arial";
      context.fillStyle = "purple";
      if (w_index >= 10) {
        context.fillText(
          n_string,
          (1.55 * canvas_width) / 3 - 35,
          canvas_height - 30
        );
      } else {
        context.fillText(
          n_string,
          (1.43 * canvas_width) / 3,
          canvas_height - 30
        );
      }
      context.fill();
      context.closePath();
    }
  }
  function suggestWord() {
    var root = wordRoot[w_index].split("");
    for (var i = 0; i < elements.length; i++) {
      if (root[i] != elements[i].text) {
        var elOld = elements[i];
        var charSuccess = root[i];
        var elUpdate = elements
          .filter((k) => k.x > elOld.x)
          .find((o) => o.text == charSuccess);
        var textOld = elOld.text;
        elOld.text = elUpdate.text;
        elUpdate.text = textOld;
        checkSolution(elOld);
        return;
      }
    }
  }
  function drawRemind() {
    if (canvas_width < 600) {
      context.beginPath();
      context.lineWidth = 5;
      context.fillStyle = "#ffe599";
      drawRoundRect(context, 10, 90, 130, 40, 5);
      context.strokeStyle = "#454343";
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.font = "Bold 20px Arial";
      context.fillStyle = "purple";
      context.fillText("Gợi ý ", 75, 117);
      context.fill();
      context.closePath();

      context.beginPath();
      context.lineWidth = 3;
      context.strokeStyle = "purple";
      context.strokeRect(23, 97.5, 39, 26);
      context.fillStyle = "purple";
      context.font = "Bold 20px Arial";
      context.fillText("AD", 27, 117);
      context.stroke();
      context.closePath();
    } else {
      context.beginPath();
      context.lineWidth = 7;
      context.fillStyle = "#ffe599";
      drawRoundRect(context, canvas_width - 200, 10, 130, 40, 5);
      context.strokeStyle = "purple";
      context.stroke();
      context.fill();
      context.closePath();

      context.beginPath();
      context.lineWidth = 3;
      context.font = "Bold 20px Arial";
      context.fillStyle = "purple";
      context.fillText("Gợi ý ", canvas_width - 150 + 13, 35);
      context.fill();
      context.closePath();

      context.beginPath();
      context.lineWidth = 2;
      context.strokeStyle = "purple";
      context.strokeRect(canvas_width - 190, 17, 39, 26);
      context.fillStyle = "purple";
      context.font = "Bold 20px Arial";
      context.fillText("AD", canvas_width - 184, 36);
      context.stroke();
      context.closePath();
    }
  }

  function drawPoint() {
    context.clearRect(canvas_width / 2 - 57, 10, 160, 55);
    let r = [];
    r.push("Điểm :");
    r.push(point);
    let s = r.join(" ");

    context.beginPath();
    context.lineWidth = 7;
    context.fillStyle = "#ffe599";
    drawRoundRect(context, canvas_width / 2 - 76, 10, 180, 55, 5);
    context.strokeStyle = "purple";
    context.stroke();
    context.fill();
    context.closePath();

    context.beginPath();
    context.font = "Bold 30px Arial";
    context.fillStyle = "purple";
    if (point > 99) {
      context.fillText(s, canvas_width / 2 - 60, 48);
    } else {
      context.fillText(s, canvas_width / 2 - 50, 48);
    }
    context.fill();
    context.closePath();
  }

  function drawMusic() {
    context.clearRect(canvas_width - 70, canvas_height - 70, 60, 60);
    context.beginPath();
    context.lineWidth = 7;
    context.fillStyle = "#ffe599";
    drawRoundRect(context, canvas_width - 70, canvas_height - 70, 60, 60, 5);
    context.strokeStyle = "purple";
    context.stroke();
    context.fill();
    context.closePath();

    context.beginPath();
    context.lineWidth = 4;
    context.strokeStyle = "purple";
    context.moveTo(canvas_width - 30, canvas_height - 20);
    context.lineTo(canvas_width - 30, canvas_height - 60);
    context.lineTo(canvas_width - 55, canvas_height - 45);
    context.lineTo(canvas_width - 55, canvas_height - 35);
    context.lineTo(canvas_width - 30, canvas_height - 20);
    context.stroke();
    context.closePath();
    context.moveTo(canvas_width - 30, canvas_height - 20);
    context.lineTo(canvas_width - 30, canvas_height - 60);
    if (!isMute) {
      context.beginPath();
      context.moveTo(canvas_width - 20, canvas_height - 11);
      context.lineTo(canvas_width - 60, canvas_height - 60);
      context.strokeStyle = "purple";
      context.lineWidth = 3;
      context.stroke();
      context.closePath();
    }
  }

  var radius = 50;
  var startAngle = 0;
  var endAngle = 0;
  var counter = 0;

  function drawLoading() {
    // Xóa canvas
    if (counter == -1) {
      return;
    }
    drawBackGround();
    // context.clearRect(canvas_width / 2 - 25, (5 * canvas_height) / 7, 50, 50);

    // Vẽ hiệu ứng loading
    context.beginPath();
    context.arc(
      canvas_width / 2,
      (5 * canvas_height) / 7 + 25,
      radius,
      startAngle,
      endAngle
    );
    context.lineWidth = 10;
    context.strokeStyle = "#ffe599";
    context.stroke();
    context.closePath();

    // Cập nhật góc bắt đầu và kết thúc
    startAngle = 0;
    endAngle = (counter / 20) * Math.PI;

    // Tăng giá trị đếm
    counter += 0.4;

    // Kiểm tra nếu đã đi qua một vòng đầy đủ
    if (counter > 50) {
      counter = -1;
      drawBackGround();
      startStopwatch();
      createElement();
      drawElement();
      elements.forEach((e) => {
        e.isTrue = false;
      });
      // context.clearRect(canvas_width / 2 - 25, (5 * canvas_height) / 7, 50, 50);
    }
    requestAnimationFrame(drawLoading);
  }
});
