/**
 * Created by Administrator on 2017/9/15.
 */
import Vue from 'vue'
import App from '../src/App.vue'
import {cube} from '../src/main.js'
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV !== 'production') {
      console.log('Looks like we are in development mode!');
    }else{
    console.log("Looks like we are 开发环境")
}

/*动态导入print.js*/
/*import(/!*webpackChunkName:"hello"*!/ './src/Hello.js').then(hello=>{
    hello.default("hello")
})*/
/*
function sayHello() {
    return import(/!*webpackChunkName:"hello"*!/ './src/Hello.js').then(hello=>{
        return  hello.default
    }).catch(error=>'Error')
}
*/

async function sayHello() {
    return import(/*webpackChunkName:"hello"*/ './src/Hello.js')
}

sayHello().then(component=>{
    component.default("Hello")
})

new Vue({
    el:'#app',
    render:h=>h(App)
})