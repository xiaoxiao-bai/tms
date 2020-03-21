var $ = layui.$;
var $layer = layui.layer;
var url = _url();
function qrygonggao(fanhui){
    $("#renwuRongQi").empty();
    var data = JSON.stringify({
        ServiceCode: "DFOMS",
        CUSCODE: "243",
        InterfaceCode: "get_Notice",
    }); //序列化表单数据 
    $.getJSON(url + data,
        function (json) {
        // gonggao = json.result[0].RDATA[0].content;
        // createDate_GG = json.result[0].RDATA[0].createdate;
        fanhui(json.result[0].RDATA[0]);
        })
}