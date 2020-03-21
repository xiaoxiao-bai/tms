var $ = layui.$;
var $layer = layui.layer;

function ShopListXR(dataList) {
  return {
    elem: '#demo',
    cols: [
      [ //标题栏
        {
          field: 'djbh',
          title: '单据编号',
          width: 180
        }, {
          field: 'bm',
          title: '部门',
          width: 80
        }, {
          field: 'ywy',
          title: '业务员',
          width: 80
        }, {
          field: 'dwmch',
          title: '公司名称',
          minWidth: 180
        }, {
          field: 'dzhdh',
          title: '公司地址',
          minWidth: 180
        }, {
          field: 'djstate',
          width: 80,
          title: '状态',
        }, {
          field: 'ywy_df',
          title: '对方业务员',
          width: 80
        }, {
          field: 'dzyname',
          title: '操作员',
          minWidth: 80
        }, {
          field: 'je',
          title: '金额',
          minWidth: 120
        }, {
          field: 'rq',
          width: 120,
          title: '下单日期',
        }, {
          field: 'rq',
          width: 120,
          title: '下单时间',
        }, {
          field: 'beizhu',
          width: 120,
          title: '备注',
        }, {
          field: 'BtnStyle',
          width: 80,
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

function ShopListXH(dataList) {
  for (var i = 0; i < dataList.length; i++) {
    dataList[i].BtnStyle = "<button class='layui-btn-xs' lay-event='del' onclick='shopListCKClick(" + i +
      ")'> <i class='fa fa-minus'>查看</i> </button>"
  }
  return ShopListXR(dataList);
}

function qryShopListDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: S_Date,
    E_Date: E_Date,
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ShopListXH(ShopListWArr), ShopListWArr);
      return;
    })
}

function ShopListXRCGdetails(dataList) {
  return {
    elem: '#demo1',
    cols: [
      [ //标题栏
        {
          field: 'djbh',
          title: '单据编号',
          width: 180
        }, {
          field: 'spmch',
          title: '商品名称',
          width: 180
        }, {
          field: 'leibie',
          title: '类别',
          width: 120
        }, {
          field: 'shpgg',
          title: '规格',
          minWidth: 120
        }, {
          field: 'dw',
          title: '单位',
          minWidth: 60
        }, {
          field: 'shl',
          title: '数量',
          minWidth: 100
        }, {
          field: 'dj',
          title: '单价',
          minWidth: 100
        }, {
          field: 'je',
          title: '金额',
          minWidth: 100
        }, {
          field: 'shpchd',
          title: '产址',
          minWidth: 200
        }, {
          field: 'beizhu',
          title: '备注',
          minWidth: 160
        },
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

function ShopListXHcgdetails(dataList) {
  return ShopListXRCGdetails(dataList);
}

function qryShopListDateils(dzyid, Type, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: "",
    E_Date: "",
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ShopListXHcgdetails(ShopListWArr), ShopListWArr);
      return;
    })
}

function ShopList_fpXQ_details(dataList) {
  return {
    elem: '#demo1',
    cols: [
      [ //标题栏
        {
          field: 'spmch',
          title: '商品名称',
          width: 180
        }, {
          field: 'shpchd',
          title: '生产厂商',
          width: 180
        }, {
          field: 'shpgg',
          title: '包装规格',
          width: 120
        }, {
          field: 'shl',
          title: '数量',
          minWidth: 100
        }, {
          field: 'dj',
          title: '单价',
          minWidth: 100
        }, {
          field: 'je',
          title: '金额',
          minWidth: 100
        }, {
          field: 'she',
          title: '税额',
          minWidth: 100
        }, {
          field: 'hsje',
          title: '含税金额',
          minWidth: 100
        }, {
          field: 'shlv',
          title: '说率',
          minWidth: 100
        }, {
          field: 'sxrq',
          title: '失效日期',
          minWidth: 120
        }, {
          field: 'pihao',
          title: '批号',
          minWidth: 120
        },
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

function ShopList_fpxq_details(dataList) {
  return ShopList_fpXQ_details(dataList);
}

function fpxq_ShopListDateils(dzyid, Type, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: "",
    E_Date: "",
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ShopList_fpxq_details(ShopListWArr), ShopListWArr);
      return;
    })
}


function fpShopListXR(dataList) {
  return {
    elem: '#demo',
    cols: [
      [ //标题栏
        {
          field: 'fapiaoh',
          title: '发票号',
          width: 120
        }, {
          field: 'guihao',
          title: '轨号',
          width: 120
        }, {
          field: 'djbh',
          title: '单据编号',
          width: 120
        }, {
          field: 'rq',
          title: '日期',
          minWidth: 120
        }, {
          field: 'ontime',
          title: '时间',
          minWidth: 120
        }, {
          field: 'dwmch',
          title: '公司名称',
          width: 180
        }, {
          field: 'hsje',
          title: '含税金额',
          minWidth: 100
        }, {
          field: 'kaipze',
          title: '开票金额',
          minWidth: 100
        }, {
          field: 'je',
          width: 100,
          title: '金额',
        }, {
          field: 'she',
          width: 100,
          title: '税额',
        }, {
          field: 'username',
          width: 120,
          title: '用户名称',
        }, {
          field: 'lxr',
          width: 80,
          title: '联系人',
        }, {
          field: 'BtnStyle',
          width: 80,
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

function fpShopListXH(dataList) {
  for (var i = 0; i < dataList.length; i++) {
    dataList[i].BtnStyle = "<button class='layui-btn-xs' lay-event='del' onclick='shopList_fpClick(" + i +
      ")'> <i class='fa fa-minus'>查看</i> </button>"
  }
  return fpShopListXR(dataList);
}

function qryfapiaoHZDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: S_Date,
    E_Date: E_Date,
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(fpShopListXH(ShopListWArr), ShopListWArr);
      return;
    })
}




function FKShopListXR(dataList) {
  return {
    elem: '#demo',
    cols: [
      [ //标题栏
        {
          field: 'djbh',
          title: '单据编号',
          width: 120
        }, {
          field: 'rq',
          title: '日期',
          width: 120
        }, {
          field: 'dwmch',
          title: '商品名称',
          width: 180
        }, {
          field: 'bm',
          title: '部门',
          minWidth: 120
        }, {
          field: 'ywy',
          title: '业务员',
          minWidth: 120
        }, {
          field: 'ywy_df',
          title: '对方业务员',
          width: 120
        }, {
          field: 'jsje',
          title: '结算金额',
          minWidth: 120
        }, {
          field: 'zhy',
          title: '摘要',
          minWidth: 200
        },

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

function FKShopListXH(dataList) {
  for (var i = 0; i < dataList.length; i++) {
    dataList[i].BtnStyle = "<button class='layui-btn-xs' lay-event='del' onclick='shopList_FKClick(" + i +
      ")'> <i class='fa fa-minus'>查看</i> </button>"
  }
  return FKShopListXR(dataList);
}

function qryFKDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: S_Date,
    E_Date: E_Date,
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(FKShopListXH(ShopListWArr), ShopListWArr);
      return;
    })
}


function ZJShopListXR(dataList) {
  return {
    elem: '#demo',
    cols: [
      [ //标题栏
        {
          field: 'danwbh',
          title: '单位编码',
          width: 120
        }, {
          field: 'dwmch',
          title: '单位名称',
          width: 220
        }, {
          field: 'kehufl',
          title: '客商类别',
          width: 120
        }, {
          field: 'isjh',
          title: '是否进货',
          width: 100
        }, {
          field: 'isxs',
          title: '是否销售',
          minWidth: 80
        }, {
          field: 'dzhdh',
          title: '单位地址',
          minWidth: 180
        }, {
          field: 'jingyfw',
          title: '经营范围',
          minWidth: 320
        }, {
          field: 'BtnStyle',
          width: 80,
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
    ,done: function (res, page, count) {
      var that = this.elem.next();
      console.log(that);
      res.data.forEach(function (item, index) {
        console.log(item)
          if (item.ordertype == 2) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "yellow");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#000");
          } else if (item.ordertype == 3) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "red");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#fff");
          }
      });
    }
  };
}

function ZJShopListXH(dataList) {
  for (var i = 0; i < dataList.length; i++) {
    dataList[i].BtnStyle = "<button class='layui-btn-xs' lay-event='del' onclick='shopList_ZJClick(" + i +
      ")'> <i class='fa fa-minus'>查看</i> </button>"
  }
  return ZJShopListXR(dataList);
}

function qryZJDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: S_Date,
    E_Date: E_Date,
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ZJShopListXH(ShopListWArr), ShopListWArr);
      return;
    })
}


function ShopList_fkXQ_details(dataList) {
  return {
    elem: '#demo1',
    cols: [
      [ //标题栏
        {
          field: 'spmch',
          title: '商品名称',
          width: 180
        }, {
          field: 'shpchd',
          title: '生产厂商',
          width: 180
        }, {
          field: 'shpgg',
          title: '包装规格',
          width: 120
        }, {
          field: 'shl',
          title: '数量',
          minWidth: 100
        }, {
          field: 'hshj',
          title: '价格',
          minWidth: 100
        }, {
          field: 'hsje',
          title: '含税金额',
          minWidth: 100
        }, {
          field: 'yisfje',
          title: '已付金额',
          minWidth: 100
        }, {
          field: 'wjsje',
          title: '未付金额',
          minWidth: 100
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

function ShopList_fkxq_details(dataList) {
  return ShopList_fkXQ_details(dataList);
}

function fkxq_ShopListDateils(dzyid, Type, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: "",
    E_Date: "",
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ShopList_fkxq_details(ShopListWArr), ShopListWArr);
      return;
    })
}


function ShopList_zjxr_details(dataList) {
  return {
    elem: '#demo1',
    cols: [
      [ //标题栏
        {
          field: 'zjmch',
          title: '证件名称',
          width: 120
        }, {
          field: 'zjhm',
          title: '证件编码',
          width: 180
        }, {
          field: 'zjxq',
          title: '证件效期',
          width: 120
        }, {
          field: 'zjdqts',
          title: '到期时间',
          minWidth: 100
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
    ,done: function (res, page, count) {
      var that = this.elem.next();
      console.log(that);
      res.data.forEach(function (item, index) {
        console.log(item)
          if (item.ordertype == 2) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "yellow");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#000");
          } else if (item.ordertype == 3) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "red");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#fff");
          }
      });
    }
  };
}

function ShopList_zjxq_details(dataList) {
  return ShopList_zjxr_details(dataList);
}

function zjxq_ShopListDateils(dzyid, Type, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: "",
    E_Date: "",
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ShopList_zjxq_details(ShopListWArr), ShopListWArr);
      return;
    })
}




function ShopList_zjspxr_details(dataList) {
  return {
    elem: '#demo1',
    cols: [
      [ //标题栏
        {
          field: 'zjmch',
          title: '证件名称',
          width: 120
        }, {
          field: 'zjhm',
          title: '证件编码',
          width: 180
        }, {
          field: 'zjxq',
          title: '证件效期',
          width: 120
        }, {
          field: 'zjdqts',
          title: '到期时间',
          minWidth: 100
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
    ,done: function (res, page, count) {
      var that = this.elem.next();
      console.log(that);
      res.data.forEach(function (item, index) {
        console.log(item)
          if (item.ordertype == 2) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "yellow");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#000");
          } else if (item.ordertype == 3) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "red");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#fff");
          }
      });
    }
  };
}

function ShopList_zjspxq_details(dataList) {
  return ShopList_zjspxr_details(dataList);
}

function zjspxq_ShopListDateils(dzyid, Type, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: "",
    E_Date: "",
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ShopList_zjspxq_details(ShopListWArr), ShopListWArr);
      return;
    })
}


function ZJspShopListXR(dataList) {
  return {
    elem: '#demo',
    cols: [
      [ //标题栏
        {
          field: 'spbh',
          title: '商品编码',
          width: 120
        }, {
          field: 'spmch',
          title: '商品名称',
          width: 220
        }, {
          field: 'shpchd',
          title: '生产厂商',
          width: 220
        }, {
          field: 'shpgg',
          title: '包装规格',
          width: 160
        }, {
          field: 'dw',
          title: '包装单位',
          minWidth: 80
        }, {
          field: 'beactive',
          title: '是否活动',
          minWidth: 180
        }, {
          field: 'BtnStyle',
          width: 80,
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
    ,done: function (res, page, count) {
      var that = this.elem.next();
      console.log(that);
      res.data.forEach(function (item, index) {
        console.log(item)
          if (item.ordertype == 2) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "yellow");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#000");
          } else if (item.ordertype == 3) {
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("background-color", "red");
              var tr = that.find(".layui-table-box tbody tr[data-index='" + index + "']").css("color", "#fff");
          }
      });
    }
  };
}

function ZJspShopListXH(dataList) {
  for (var i = 0; i < dataList.length; i++) {
    dataList[i].BtnStyle = "<button class='layui-btn-xs' lay-event='del' onclick='shopList_ZJspClick(" + i +
      ")'> <i class='fa fa-minus'>查看</i> </button>"
  }
  return ZJspShopListXR(dataList);
}

function qryZJspDate(dzyid, Type, S_Date, E_Date, Value1, url,serverCode, callback) {
  $layer.load();
  $("#renwuRongQi").empty();
  var data = JSON.stringify({
    ServiceCode: "DFOMS",
    CUSCODE: serverCode,
    InterfaceCode: "QryData",
    Type: Type,
    dzyid: dzyid,
    S_Date: S_Date,
    E_Date: E_Date,
    Value1: Value1,
    Value2: "",
    Value3: "",
    Value4: "",
    Value5: ""
  }); //序列化表单数据 
  $.getJSON(url + data,
    function (json) {
      ShopListWArr = json.result[0].RDATA;
      $layer.closeAll('loading');
      callback(ZJspShopListXH(ShopListWArr), ShopListWArr);
      return;
    })
}