var $ = layui.$;
var $layer = layui.layer;
var DateListArr = "";

function ZJspShopListXR(dataList) {
    return {
      elem: '#demo',
      cols: [
        [ //标题栏
          {
            field: 'shopId',
            title: '商品ID',
            width: 120
          }, {
            field: 'shopName',
            title: '商品名称',
            width: 220
          }, {
            field: 'shopAddress',
            title: '生产厂商',
            width: 220
          }, {
            field: 'shopNum',
            title: '库存',
            width: 100
          }, {
            field: 'shopAmount',
            title: '单价',
            minWidth: 100
          }, {
            field: 'shopTitle',
            title: '简介',
            minWidth: 180
          }, {
            field: 'shopBeizu',
            title: '备注',
            minWidth: 180
          }, {
            field: 'BtnStyle',
            width: 100,
            title: '操作',
            fixed: 'right',
          }
  
        ]
      ],
      data: dataList,
      skin: 'line' //表格风格
        ,
      even: true,
      page: true //是否显示分页
        ,
      limits: [5, 7, 10, 20],
      limit: 5 //每页默认显示的数量
    };
  }
  
  function ZJspShopListXH(dataList) {
    for (var i = 0; i < dataList.length; i++) {
      dataList[i].BtnStyle = "<div>"+
      "<div style='float: left;padding: 0px 5px;background: #177ce3;border-radius: 2px;color: #fff;' onclick='shopListWClick("+i+")'><i class='layui-icon'>&#xe642;</i></div>"+
      "<div style='margin-left:10px;float: left;padding: 0px 5px;background: red;border-radius: 2px;color: #fff;' onclick='shopListWDClick("+i+")'><i class='layui-icon'>&#xe640;</i></div>"+
      "</div>"
    }
    return ZJspShopListXR(dataList);
  }
  
  function qryZJspDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
    $layer.load();
    $("#renwuRongQi").empty();
    var data = "Type=0"; //序列化表单数据 
    $.getJSON(url+"selectShop?" + data,
      function (json) {
        ShopListWArr = json.Response.RDATA;
        $layer.closeAll('loading');
        callback(ZJspShopListXH(ShopListWArr), ShopListWArr);
        return;
      })
  }


  function HuodongListXR(dataList) {
    return {
      elem: '#demo',
      cols: [
        [ //标题栏
          {
            field: 'typeid',
            title: '类型ID',
            width: 120
          }, {
            field: 'typename',
            title: '类型名称',
            width: 220
          }, {
            field: 'BtnStyle',
            width: 100,
            title: '操作',
            fixed: 'right',
          }
  
        ]
      ],
      data: dataList,
      skin: 'line' //表格风格
        ,
      even: true,
      page: true //是否显示分页
        ,
      limits: [5, 7, 10, 20],
      limit: 5 //每页默认显示的数量
    };
  }
  
  function huodongListXH(dataList) {
    for (var i = 0; i < dataList.length; i++) {
      dataList[i].BtnStyle = "<div>"+
      "<div style='float: left;padding: 0px 5px;background: #177ce3;border-radius: 2px;color: #fff;' onclick='shopListWClick("+i+")'><i class='layui-icon'>&#xe642;</i></div>"+
      "<div style='margin-left:10px;float: left;padding: 0px 5px;background: red;border-radius: 2px;color: #fff;' onclick='shopListWDClick("+i+")'><i class='layui-icon'>&#xe640;</i></div>"+
      "</div>"
    }
    return HuodongListXR(dataList);
  }
  
  function huodongDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
    $layer.load();
    $("#renwuRongQi").empty();
    var data = ""; //序列化表单数据 
    $.getJSON(url+"shoptypeselect?" + data,
      function (json) {
        ShopListWArr = json.Response.RDATA;
        $layer.closeAll('loading');
        callback(huodongListXH(ShopListWArr), ShopListWArr);
        return;
      })
  }