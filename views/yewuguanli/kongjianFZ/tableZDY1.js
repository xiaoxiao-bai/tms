var $ = layui.$;
var $layer = layui.layer;


// tableID : 表格id 
// cols: 表格序列化语句
// dataList: 填充数据
// toolbar: 是否展示辅助工具
function fengzhuangTable(tableID,cols,dataList,toolbar){
    return {
        elem: tableID,
        cols: cols,
        data: dataList,
        skin: 'line' ,//表格风格
        even: true,
        page: true //是否显示分页
        ,toolbar: toolbar //开启头部工具栏，并为其绑定左侧模板
        , 
        limits: [10, 20],
        limit: 10,
        done: function (res, page, count) {
            var that = this.elem.next();
            //alert(JSON.stringify(res))
        
            console.log(that);
            res.data.forEach(function (item, index) {
                
            });
        },
        
    };
}

// dateList1: 序列化数据
// dateList: 填充数据
// caozuoBtn: 操作按钮名称
// caozuoWidth: 操作按钮宽度

function xuliehuaTable(dateList1,dateList,caozuoBtn,caozuoWidth){

    var bb=[];
    for (let i in dateList1) {
        
        bb.push({
            field:i,title: dateList1[i].title,
            width:dateList1[i].width
        });
    }
    if(caozuoWidth != 0){
        bb.push( {  field: caozuoBtn,   width: caozuoWidth,  title: '操作',  fixed: 'right',  })
    }
    
    // bb.push( { toolbar: '#barDemo', width:150});
    let cols = [];
    cols.push(bb);
    return cols;
}

// btnClick: 操作按钮点击事件
// number: 选择第几种操作按钮 
// btnTuBiao: 自定义图标
// btnName: 自定义名字
// isBtnShow: 是否展示操作按钮

function tianjaiBtn(btnClick,number,btnTuBiao,btnName,isBtnShow){
    let color = "#177ce3";
    if(isBtnShow == 1){
        btnTuBiao = "&#xe615;";
        btnName = "查看"
    }else if(isBtnShow == 2){
        btnTuBiao = "&#xe642;";
        btnName = "编辑"
    }else if(isBtnShow == 3){
        btnTuBiao = "&#xe640;";
        color = "red";
        btnName = "删除"
    }else if(isBtnShow == 4){
        btnTuBiao = "&#xe608;";
        btnName = "增加"
    }
    return "<div><div style='float: left;padding: 0px 5px;background:"+color+" ;border-radius: 2px;color: #fff;' onclick='"+btnClick+"(" +
    number + ")'><i class='layui-icon'>"+btnTuBiao+"</i>"+btnName+"</div></div>"
}




// btnClick: 操作按钮点击事件
// number: 选择第几种操作按钮 
// btnTuBiao: 自定义图标
// btnName: 自定义名字
// isBtnShow: 是否展示操作按钮
function tianjaiBtn1(btnClick,number,btnTuBiao,btnName,isBtnShow){
    let color = "#177ce3";
    if(isBtnShow == 1){
        btnTuBiao = "&#xe615;";
        btnName = "查看"
    }else if(isBtnShow == 2){
        btnTuBiao = "&#xe642;";
        btnName = "编辑"
    }else if(isBtnShow == 3){
        btnTuBiao = "&#xe640;";
        color = "red";
        btnName = "删除"
    }else if(isBtnShow == 4){
        btnTuBiao = "&#xe608;";
        btnName = "增加"
    }
    return "<div style='margin-left:15px;float: left;'><div style='float: left;padding: 0px 5px;background:"+color+" ;border-radius: 2px;color: #fff;' onclick='"+btnClick+"(" +
    number + ")'><i class='layui-icon'>"+btnTuBiao+"</i>"+btnName+"</div></div>"
}
function xuliehuaArr(dataList,isshowBJ,number,number1,number2,dataListTC,isDYXX,tabledemo) {
    for (var i = 0; i < dataList.length; i++) {
      if(isshowBJ){
        if(number == 1){
          dataList[i].BtnStyle =tianjaiBtn(number1[1],i,number1[2],number1[3],number1[0]);
        }else if(number == 2){
          dataList[i].BtnStyle =tianjaiBtn(number1[1],i,number1[2],number1[3],number1[0])+tianjaiBtn1(number2[1],i,number2[2],number2[3],number2[0]);
        }
      }
     
    }
    
    let xuliehuaData="";
    if(isshowBJ){
        if(number == 1){
            xuliehuaData = xuliehuaTable(dataListTC,dataList,"BtnStyle","80");
          }else if(number == 2){
            xuliehuaData = xuliehuaTable(dataListTC,dataList,"BtnStyle","160");
          }
        
    }else{
        xuliehuaData = xuliehuaTable(dataListTC,dataList,"BtnStyle",0);
    }
    let ceshi = fengzhuangTable(tabledemo,xuliehuaData,dataList,isDYXX);
    return ceshi;
  }


//   data: 请求数据 
//   paramr:请求地址
//   callback: 回调

  function $GetJson(data,paramr, callback){
    $layer.load();
    // var data = "ys_id=" + $("#car_name").val(); //序列化表单数据 
    $.getJSON(url + paramr +"?" + data,
      function (json) {
        RoleListWArr = json.Response.RDATA;
        
        $layer.closeAll('loading');
        callback(RoleListWArr);
        return;
      })
  }