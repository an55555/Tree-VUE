webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_demoTree_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e2f8b25_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_demoTree_vue__ = __webpack_require__(21);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(16)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-0e2f8b25"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_selector_type_script_index_0_demoTree_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0e2f8b25_hasScoped_true_node_modules_vue_loader_lib_selector_type_template_index_0_demoTree_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\demoTree.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] demoTree.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0e2f8b25", Component.options)
  } else {
    hotAPI.reload("data-v-0e2f8b25", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("45ab14c5", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e2f8b25\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demoTree.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-0e2f8b25\",\"scoped\":true,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./demoTree.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports
exports.i(__webpack_require__(18), "");

// module
exports.push([module.i, "\n\n", ""]);

// exports


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(undefined);
// imports


// module
exports.push([module.i, ".slide-tree, .slide-tree li,  .slide-tree ul{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n.slide-tree{  font-size: 17px;  margin: 10px 0 10px 0;  }\r\n.slide-tree ul{  margin-left: 22px;  position: relative;  }\r\n.slide-tree ul.tree-all{  margin-left: 0px;margin-top: 5px }\r\n.slide-tree li{  position: relative;  cursor: pointer;  }\r\n.slide-tree .slideItem{  padding: 4px  10px;  position: relative;  }\r\n.slide-tree .slideEditBtn{float: right;cursor: pointer;font-size: 16px}\r\n.slideName{\r\n    /*display: block;*/\r\n    display: inline-block;\r\n    margin-right: 0;\r\n    position: relative;\r\n    cursor: pointer;\r\n}\r\n.slide-tree .currentTree .treeModelName{\r\n    display: inline-block;padding: 0 2px;\r\n}\r\n.slide-tree .currentTree .treeModelName{\r\n    background: #6cb1ea;\r\n    color: #fff;\r\n}\r\n/*有编辑按钮*/\r\n.slide-tree-edit .slideName{  padding-right: 120px;  }\r\n.slide-tree-edit .slide-tree-editBox{\r\n    display: inline-block;\r\n    float: right;\r\n    width: 120px;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    height: 100%;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n.slide-tree-edit .slide-tree-editBox a.slide-tree-btn:last-child{  margin-left: 10px;  }\r\n.slide-tree-edit .slide-tree-editBox a.slide-tree-checkbox{  position: relative;  top: -2px;  }\r\n/*竖线*/\r\n/*.slide-tree ul li:before{\r\n    content: '';\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 100%;\r\n    border-left: solid 1px #666;\r\n    left: -5px;\r\n    top: -6px;\r\n}*/\r\n/*最后一条LI的竖线固定高度*/\r\n/*.slide-tree li ul:last-child >li:before{\r\n    content: '';\r\n    position: absolute;\r\n    width: 10px;\r\n    height: 22px;\r\n    border-left: solid 1px #666;\r\n    left: -5px;\r\n    top: -6px;;\r\n}*/\r\n/*横线*/\r\n/*.slide-tree ul li:after{\r\n    content: '';\r\n    width: 13px;\r\n    height: 1px;\r\n    border-top: solid 1px #666;\r\n    position: absolute;\r\n    top: 15px;\r\n    left: -5px;\r\n}*/\r\n.noFolder,\r\n.icon-folder,\r\n.icon-open,\r\n.icon-file{\r\n    display: inline-block;\r\n    width: 18px;\r\n    height: 18px;\r\n    top: 2px;\r\n    position: relative;\r\n    background-image:url(" + __webpack_require__(19) + ");\r\n}\r\n.slideModel .iconfont{font-size: 17px;}\r\n/*没有子文件也要有个格子占下位置好对齐*/\r\n/*.noFolder{\r\n    display: inline-block;\r\n    width: 17px;\r\n    height: 17px;\r\n}*/\r\n/*  有儿子没展开*/\r\n.icon-folder{\r\n    background-position: 0 0;\r\n}\r\n/*.icon-folder:before{\r\n    content: '';\r\n    width: 13px;\r\n    height: 1px;\r\n    background: #666;\r\n    left: 2px;\r\n    top: 8px;\r\n    position: absolute;\r\n}\r\n.icon-folder:after{\r\n    content: '';\r\n    width: 1px;\r\n    height: 13px;\r\n    background: #666;\r\n    left: 8px;\r\n    top: 2px;\r\n    position: absolute;\r\n}*/\r\n/*有儿子并展开*/\r\n.icon-open{\r\n    background-position: 0px 0px;\r\n}\r\n/*.icon-open:after{\r\n    content: '';\r\n    width: 13px;\r\n    height: 1px;\r\n    background: #000;\r\n    left: 2px;\r\n    top: 8px;\r\n    position: absolute;\r\n}*/\r\n/*没有儿子*/\r\n.icon-file{\r\n    background-position: -18px 0px;\r\n    /*background-size: 68px 51px;*/\r\n}\r\n.icon-all{\r\n    background-position: -54px -36px;\r\n}\r\n/*\r\n.icon-file:before{\r\n    content: '';\r\n    right: 0;\r\n    top: 0;\r\n    width: 7px;\r\n    height: 4px;\r\n    background: #666;\r\n    left: auto;\r\n    position: absolute;\r\n}\r\n*/\r\n\r\n.tree-act{\r\n    color: #3c98e6;\r\n}\r\n.tree-act .icon-file{\r\n    display: inline-block;\r\n    width: 17px;\r\n    height: 17px;\r\n    border: solid 1px #3c98e6;\r\n    position: relative;\r\n    border-radius: 1px;\r\n}\r\n.tree-act .icon-file:before{\r\n    content: '';\r\n    right: 0;\r\n    top: 0;\r\n    width: 7px;\r\n    height: 4px;\r\n    background: #3c98e6;\r\n    left: auto;\r\n    position: absolute;\r\n}", ""]);

// exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1f60bf9f4fe307fec9166ec251fac3f8.png";

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_global_bus_js__ = __webpack_require__(5);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

    
    /* harmony default export */ __webpack_exports__["a"] = ({
        name: 'treeMenu',
        props: ['model','treeLevel','sendCheckStatus','sonIndex','treeOption','actTreeLevel'],
        data() {
            return {
                open: this.model.special=='all'?true:false,//分页展开控制
                modelChild:[],   //存放儿子的地方
                checkBoxStatus:0,
                toSonCheckBoxStatus:{
                    status:0,
                    time:Date.parse(new Date())
                }, //用于向儿子传播
                modelChildCheck:[]//存放儿子对应的checkBox的值
            }
        },
        computed: {
            //监测分项的变换刷新icon
            isFolder: function() {
                return this.model.hasChild==1
            },
//            当前的层级
            currentLevel:function () {
                var currentArr=this.treeLevel?this.treeLevel.concat([]):[]
                currentArr.push(this.model)
                return currentArr
            },
/*            act:function () {
                if(!this.actTreeLevel||this.actTreeLevel.length==0){
                    return ''
                }else{
                    return this.actTreeLevel[this.actTreeLevel.length-1][this.treeOption.translate.treeModelId]
                }
            }*/

        },
        watch:{
//            向下传递的标志改变了
            sendCheckStatus:function () {
//                console.log("我收到了父级的变换，我现在要改变我自己了,然后继续告诉我儿子"+this.sendCheckStatus.status)
                if(this.toSonCheckBoxStatus.time){
                    var getStatus=this.sendCheckStatus.status
                    this.checkBoxStatus=getStatus
                    this.toSonCheckBoxStatus={
                        status:getStatus,
                        time:Date.parse(new Date())
                    }
                    this.submitStatus()
                }
            },
//            自己当前改变了
            checkBoxStatus:function () {
                this.model.isChecked=this.checkBoxStatus
                this.$emit('transmitParentChecked',this.checkBoxStatus,this.sonIndex)  //向上传播
            },
            modelChild:{
                handler(newVal, oldVal) {
//                    console.log('asnyc改变的')
//                    console.log(JSON.stringify(this.modelChild))
                },
                deep:true
            }
        },
        methods: {
            getRandomProject:function () {
//                随机生成1到3条JSON
                var josnT=[];
                var jsonLime=this.$GetRandomNum(1,3);
                for(var i=0;i<=jsonLime;i++){
                    // 随机生成4到8位的汉字
                    var getRandomNum=this.$GetRandomNum(4,8)
                    var a=new Array();
                    for(var g=0;g<getRandomNum;g++){
                        a[g]=Math.round(Math.random()*20927) + 19968;
                    }
                    var b=new Array();
                    for(var j in a){
                        b.push(String.fromCharCode(a[j]));
                    }
                    var s=b.join("");
                    //   汉字生成完毕
                    var createJson={
                        treeModelName:s,
                        hasChild:this.$GetRandomNum(0,1),
                        isChecked:0
                    }
                    josnT.push(createJson)
                }
                return josnT

            },
//            展开分项
            branchToggle: function(reload) {
                if(this.model.special=='all') return
                if(this.model[this.treeOption.translate.hasChild]==0) return   //如果没儿子  就不用找了
                if(reload||this.modelChild.length==0) {//如果儿子没加载出来

                    this.getSonData()
                }
                if (this.isFolder) {
                    this.open = reload||(!this.open)

                }
            },
            /*获取子级数据*/
            getSonData:function () {
                var argument={}
                argument[this.treeOption.translate.parentId]=this.model[this.treeOption.translate.treeModelId];
                for(var i in this.treeOption.arg){
                    argument[i]=this.treeOption.arg[i]
                }
                var res={}
                 res[this.treeOption.resName]=this.$getTreeList(this.model[this.treeOption.translate.treeModelId])
                for(var i in res[this.treeOption.resName]){
                    /*保证每条数据都有一个hasChild属性*/
                    res[this.treeOption.resName][i][this.treeOption.translate.hasChild]=res[this.treeOption.resName][i][this.treeOption.translate.hasChild]=='undefined'?0:res[this.treeOption.resName][i][this.treeOption.translate.hasChild]

                }
                this.modelChild=res[this.treeOption.resName];
                if(this.treeOption.hasCheckBox.show){
                    for(var i in  this.modelChild){
                        this.modelChildCheck[i]=0
                    }
                }

/*                this.$httpPost(this.treeOption.api,argument,function (res) {
                    for(var i in res[this.treeOption.resName]){
                      /!*保证每条数据都有一个hasChild属性*!/
                        res[this.treeOption.resName][i][this.treeOption.translate.hasChild]=res[this.treeOption.resName][i][this.treeOption.translate.hasChild]=='undefined'?0:res[this.treeOption.resName][i][this.treeOption.translate.hasChild]

                    }
                    this.modelChild=res[this.treeOption.resName];
                    if(this.treeOption.hasCheckBox.show){
                        for(var i in  this.modelChild){
                            this.modelChildCheck[i]=0
                        }
                    }
                }.bind(this))*/
              /* this.modelChild=this.getRandomProject()*/
            },
            /*当选中当前层级时，向根tree传弟当前信息*/
            transmitMenuInfo:function () {
                //  传递的参数: 当前名,当前ID,是否有儿子,层级图
                var menuArgs={
                    currentModel:this.model,
                    treeLevel:this.currentLevel,
                }
                __WEBPACK_IMPORTED_MODULE_0__config_global_bus_js__["a" /* default */].$emit(this.treeOption.callbackFn, menuArgs)
            },
            /*点击改变checkBox*/
            checkBoxStatusFn:function () {
                /*         if(this.model.hasChild==1){
                 this.checkBoxStatus=++this.checkBoxStatus>=3?0:this.checkBoxStatus
                 }else{
                 this.checkBoxStatus=this.checkBoxStatus==0?2:0
                 }*/
                this.checkBoxStatus=this.checkBoxStatus==2?0:2
                this.toSonCheckBoxStatus={
                    status:this.checkBoxStatus,
                    time:Date.parse(new Date())
                }

                this.submitStatus()
            },
            /*传递选择情况*/
            submitStatus:function () {
                if(this.model.special=='all') return
                var menuArgs={
                    id:this.model[[this.treeOption.translate.treeModelId]],
                    checkBoxStatus:this.checkBoxStatus
                }
                __WEBPACK_IMPORTED_MODULE_0__config_global_bus_js__["a" /* default */].$emit(this.treeOption.checkCallbackFn, menuArgs)
            },
            /*儿子变了，我得更新一下*/
            changeChildChecked:function (val,index) {
                this.modelChildCheck[index]=val
                var nowBoll=this.modelChildCheck.reduce(function (a,b) {
                    return a+b
                })
                if(nowBoll==0){
                    this.checkBoxStatus=0
                }else if(nowBoll==this.modelChild.length*2){
                    this.checkBoxStatus=2
                }else{
                    this.checkBoxStatus=1
                }
            },
            /*设置当前Checkbox的值*/
            initCheck:function () {

                var _status=this.treeOption.hasCheckBox.hasCheck.indexOf(this.model[this.treeOption.translate.treeModelId].toString())>-1?2:0

                this.checkBoxStatus=_status
                this.toSonCheckBoxStatus={
                    status:_status,
                    time:Date.parse(new Date())
                }
                this.submitStatus()
            }
        },
        mounted:function () {
            __WEBPACK_IMPORTED_MODULE_0__config_global_bus_js__["a" /* default */].$on('reloadTree', function (id) {
                if(id==this.model[this.treeOption.translate.treeModelId]){
                    this.model[this.treeOption.translate.hasChild]=1
                    this.branchToggle(true)
                }
            }.bind(this))
            /*如果不要求异步加载儿 ，把儿子全部加载出来*/
            if(this.treeOption.loadAll){
                console.log(11)
                this.getSonData()
                this.initCheck()
            }

        },

    });


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('li', {
    staticClass: "slideModel"
  }, [_c('div', {
    staticClass: "slideItem"
  }, [_c('div', {
    staticClass: "slideName ellipsis",
    class: {
      'currentTree': _vm.actTreeLevel == _vm.model[_vm.treeOption.translate.treeModelId]
    },
    attrs: {
      "title": _vm.model[_vm.treeOption.translate.treeModelName]
    }
  }, [(_vm.treeOption.hasCheckBox.show) ? _c('span', {
    staticClass: "slide-tree-editBox"
  }, [_c('a', {
    staticClass: "slide-tree-checkbox checkBoxBg",
    class: 'checkBoxBg_' + _vm.checkBoxStatus,
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.checkBoxStatusFn($event)
      }
    }
  })]) : _vm._e(), _vm._v(" "), _c('i', {
    class: {
      'icon-all': _vm.model.special == 'all', 'icon-file': !_vm.isFolder, 'icon-open': _vm.isFolder && _vm.open, 'icon-folder': _vm.isFolder && !_vm.open
    },
    on: {
      "click": function($event) {
        _vm.branchToggle()
      }
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "treeModelName",
    on: {
      "click": _vm.transmitMenuInfo
    }
  }, [_vm._v(_vm._s(_vm.model[_vm.treeOption.translate.treeModelName]))])])]), _vm._v(" "), _vm._l((_vm.modelChild), function(item, index) {
    return (_vm.isFolder) ? _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.open),
        expression: "open"
      }],
      staticClass: "slide-tree",
      class: {
        'tree-all': _vm.model.special == 'all'
      }
    }, [_c('tree-menu', {
      attrs: {
        "model": item,
        "treeLevel": _vm.currentLevel,
        "actTreeLevel": _vm.actTreeLevel,
        "sendCheckStatus": _vm.toSonCheckBoxStatus,
        "sonIndex": index,
        "treeOption": _vm.treeOption
      },
      on: {
        "transmitParentChecked": _vm.changeChildChecked
      }
    })], 1) : _vm._e()
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0e2f8b25", esExports)
  }
}

/***/ })
]);