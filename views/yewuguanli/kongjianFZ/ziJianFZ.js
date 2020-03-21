var $ = layui.$;
var $layer = layui.layer;
var DateListArr = "";


function inputStyle(zuJianName, zuJianId,zuJianTS) {
// zuJianName: 输入框名称   zuJianId:输入框ID  zuJianTS: 输入框提示语
   let str ='<div class="layui-col-xs3" style="width: auto">'+
            '<div class="layui-form-mid" style="margin-right:0;float: left; background: #e8e8e8;width:90px;text-align: center;">'+zuJianName+'</div>'+
            '<div class="layui-input-inline" style="width: 160px;margin-right: 20px">'+
            '<input type="text" autocomplete="off" class="layui-input" placeholder="'+zuJianTS+'" id="'+zuJianId+'">'+
            '</div>'+
            '</div>';
   return str;
}


function inputStyle1(zuJianName, zuJianId,zuJianTS,value) {
// zuJianName: 输入框名称   zuJianId:输入框ID  zuJianTS: 输入框提示语
   let str ='<div class="layui-col-xs3" style="width: 50%;float:left;margin-bottom: 15px;">'+
            '<div class="layui-form-mid" style="float: left;">'+zuJianName+':</div>'+
            '<div class="layui-input-inline" style="width: 160px;">'+
              '<input type="text" autocomplete="off" class="layui-input" value="'+value+'" placeholder="'+zuJianTS+'" id="'+zuJianId+'">'+
              '</div>'+
            '</div>';
   return str;
}

// zuJianName: 输入框名称   zuJianId:输入框ID  zuJianTS: 输入框提示语
function zezhaochengBox(zezhaoceng, kanjianBox,tableId) {
  let str ='<div class="'+zezhaoceng+'" id="'+zezhaoceng+'" onclick="'+zezhaoceng+'()">'+
  '<div class="beijingCeng2" onclick="beijingCeng2()">'+
  '<div onclick="'+zezhaoceng+'()" style="position: absolute;z-index: 88;right: 13px;top: 10px;color:red;width: 20px;height: 20px;">'+
  '<i class="layui-icon" style="font-size: 30px;">&#x1007;</i>'+
  '</div>'+
  '<div class="layui-row">'+
  '<div class="layui-card">'+
  '<div class="layui-card-body">'+
  '<div class="form-box">'+
  '<div class="layui-form layui-form-item" style="margin-bottom:-15px">'+
  '<div class="layui-inline" style="width: 100%; ">'+
  '<div class="layui-form layui-form-item" id="'+kanjianBox+'"></div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '<div style="width: 96%;margin-left: 2%;"><table id="'+tableId+'"></table></div>'+
  '</div>'+
  '</div>'+
  '</div>';
  return str;
}

// zuJianName: 输入框名称   zuJianId:输入框ID  zuJianTS: 输入框提示语
function zezhaochengBox1(zezhaoceng, kanjianBox,tableId) {
  let str ='<div class="'+zezhaoceng+'" id="'+zezhaoceng+'" onclick="'+zezhaoceng+'()">'+
  '<div class="beijingCeng2" onclick="beijingCeng2()">'+
  '<div onclick="'+zezhaoceng+'()" style="position: absolute;z-index: 88;right: 13px;top: 10px;color:red;width: 20px;height: 20px;">'+
  '<i class="layui-icon" style="font-size: 30px;">&#x1007;</i>'+
  '</div>'+
  '<div class="layui-row">'+
  '<div class="layui-card">'+
  '<div class="layui-card-body">'+
  '<div class="form-box">'+
  '<div class="layui-form layui-form-item" style="margin-bottom:-15px">'+
  '<div class="layui-inline" style="width: 100%; ">'+
  '<div class="layui-form layui-form-item" style="font-size: 18px;font-weight: 600;padding-left: 3%;">'+kanjianBox+'</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '</div>'+
  '<div style="width: 90%;margin-left: 5%;"><div id="'+tableId+'"></div></div>'+
  '</div>'+
  '</div>'+
  '</div>';
  return str;
}

// 0: 百搭按钮  1: 警告按钮  2:默认按钮  3:禁止按钮
// btnName: 按钮名称 iconfont:按钮图标  btnId:按钮点击事件
function ButtonStyle(btnName,number,iconfont,btnId){
  if(iconfont == ""){
    iconfont = "&#xe615;";
  }
  let str = "";
  if(number == 0){
    str = '<button class="layui-btn layui-btn-blue" onclick="'+btnId+'()"><i class="layui-icon">'+iconfont+'</i>'+btnName+'</button>';
  }else if(number == 1){
    str = '<button class="layui-btn layui-btn-danger" onclick="'+btnId+'()"><i class="layui-icon">'+iconfont+'</i>'+btnName+'</button>';
  }else if(number == 2){
    str = '<button class="layui-btn" onclick="'+btnId+'()"><i class="layui-icon">'+iconfont+'</i>'+btnName+'</button>';
  }else if(number == 3){
    str = '<button class="layui-btn layui-btn-disabled" onclick="'+btnId+'()"><i class="layui-icon">'+iconfont+'</i>'+btnName+'</button>';
  }
  return str;
}