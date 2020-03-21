var $ = layui.$;
var $layer = layui.layer;
var DateListArr = "";

function jiaoyan (amount,number,huichuan){
    if (amount != null && amount != "" && amount != "0") {
    var exp = /^(([1-9]\d*)|\d)(\.\d{1,2})?$/;
    if (!exp.test(amount)) {
        alert('单价最多保留两位小数');
        huichuan(false);
        return;
    }

    }
    if (isNaN(number)) {
        alert("只能输入数字！");
        huichuan(false);
        return;
    }
    huichuan(true);
}

function shuaxinBtn(){
window.location.reload()
}