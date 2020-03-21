var $ = layui.$;
var $layer = layui.layer;
var DateListArr = "";

// 生产购物车id 和 单据编号
function randomFrom(lowerValue, upperValue) {
    return Math.floor(Math.random() * (upperValue - lowerValue + 1) + lowerValue);
  }

  function numdataTime() {
    let number = "";
    for (let i = 0; i < 4; i++) {
      number = number + this.randomFrom(0, 9);
    }
    return (new Date()).getTime() + number;
  }

  function timeDate() {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth();
    this.date = date.getDate();
    this.hour = date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    return this.year + "-" + this.month + "-" + this.date + " " + this.hour + ":" + this.minute + ":" + this.second;
  }

  

  function timeDate1(value) {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() < 10 ? "0" + (date.getMonth()*10+10)/10 : date.getMonth()+1;
    this.month1 = date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()+1;
    this.date = date.getDate();
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if(value == 1){
      return this.year + "-" + this.month + "-" + this.date;
    }else{
      return this.year + "-" + this.month1 + "-" + this.date;
    }
  }

  function timeDate_(value) {
    var date = new Date();
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.month1 = date.getMonth();
    if (this.month1 < 10) {
      this.month1 = "0" + this.month1;
    }
    if (this.month < 10) {
      this.month = "0" + this.month;
    }
    this.date = date.getDate();
    if (this.date < 10) {
      this.date = "0" + this.date;
    }
    this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    if (value == 1) {
      return this.year + "-" + this.month + "-" + this.date;
    } else {
      return this.year + "-" + this.month1 + "-" + this.date;
    }
  }