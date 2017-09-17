webpackJsonp([1],{

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Created by Administrator on 2017/9/15.
 */
/* harmony default export */ __webpack_exports__["default"] = (function(txt) {
    var cH1=document.createElement("H1");
    cH1.innerHTML=txt
    cH1.className="sayHello"
    var firstDOM=document.body.firstChild
    console.log(firstDOM)
    if(firstDOM){
        document.body.insertBefore(cH1,firstDOM)
    }else{
        document.body.appendChild(cH1)
    }

});

/***/ })

});