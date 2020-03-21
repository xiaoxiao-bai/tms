var $ = layui.$;
var $layer = layui.layer;
var DateListArr = "";


// 点击遮罩层隐藏弹出成
$(".beijingCeng").click(function () {
    isshow = false;
  })

  $(".zezhaoceng").click(function () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng");
      $input.style.display = "none";
    }
    isshow = true;
  })

  $(".beijingCeng1").click(function () {
    isshow = false;
  })

  $(".zezhaoceng1").click(function () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng1");
      $input.style.display = "none";
    }
    isshow = true;
  })

  $(".beijingCeng2").click(function () {
    isshow = false;
  })

  $(".zezhaoceng2").click(function () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng2");
      $input.style.display = "none";
    }
    isshow = true;
  })

  function beijingCeng2 () {
    isshow = false;
  }

  function zezhaoceng4 () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng4");
        $input.style.display = "none";
    }
    isshow = true;
  }

  $(".beijingCeng3").click(function () {
    isshow = false;
  })
  
  $(".beijingCeng_t").click(function () {
    isshow = false;
  })
  $(".zezhaoceng_t").click(function () {
    isshow = false;
  })

  $(".zezhaoceng3").click(function () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng3");
      $input.style.display = "none";
    }
    isshow = true;
  })

  $(".beijingCeng4").click(function () {
    isshow = false;
  })

  $(".zezhaoceng4").click(function () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng4");
      $input.style.display = "none";
    }
    isshow = true;
  })

  $(".beijingCeng6").click(function () {
    isshow = false;
  })

  $(".zezhaoceng6").click(function () {
    if (isshow) {
      var $input = document.getElementById("zezhaoceng6");
      $input.style.display = "none";
    }
    isshow = true;
  })

  $("#beijingCengBtn").click(function () {
    var $input = document.getElementById("zezhaoceng");
    $input.style.display = "none";
  })

  $("#beijingCengBtn1").click(function () {
    var $input = document.getElementById("zezhaoceng1");
    $input.style.display = "none";
  })

  $("#beijingCengBtn2").click(function () {
    var $input = document.getElementById("zezhaoceng2");
    $input.style.display = "none";
  })

  $("#beijingCengBtn3").click(function () {
    var $input = document.getElementById("zezhaoceng3");
    $input.style.display = "none";
  })

  $("#beijingCengBtn4").click(function () {
    var $input = document.getElementById("zezhaoceng4");
    $input.style.display = "none";
  })
  $("#beijingCengBtn5").click(function () {
    var $input = document.getElementById("zezhaoceng6");
    $input.style.display = "none";
  })
  $("#beijingCengBtn6").click(function () {
    var $input = document.getElementById("zezhaoceng6");
    $input.style.display = "none";
  })