/**
 * Created by 兰江州 on 2017/9/16.
 */
function $getTreeData() {
    var num=0
    return function (pId) {
        if(pId==0){
            num=0
        }
        num++
        //                随机生成1到3条JSON
        var josnT=[];
        var jsonLime=this.$GetRandomNum(1,3);
        for(var i=0;i<=jsonLime;i++){
            // 随机生成4到8位的汉字
            var $GetRandomNum=this.$GetRandomNum(4,8)
            var a=new Array();
            for(var g=0;g<$GetRandomNum;g++){
                a[g]=Math.round(Math.random()*20927) + 19968;
            }
            var b=new Array();
            for(var j in a){
                b.push(String.fromCharCode(a[j]));
            }
            var s=b.join("");
            //   汉字生成完毕
            var createJson={
                projectName:s,
                parentId:pId,
                projectId:this.$GenNonDuplicateID(),
                hasChild:num<5?this.$GetRandomNum(0,1):0,
            }
            josnT.push(createJson)

        }
        return josnT
    }

}
module.exports={
    install(Vue,options){
        // Vue.prototype.$onePageLine=10;
        Vue.prototype.$jsonToParams=function (arg) {
            var arr=[]
            for(var i in arg){
                arr.push(i+'='+arg[i])
            }
            if(arr.length){
                return "?"+arr.join("&")
            }else{
                return
            }

        }
        Vue.prototype.$httpGet=function (dataAPI,arg,fn) {
            var xhr=new XMLHttpRequest()
            xhr.onreadystatechange=function () {
                if(xhr.readyState==0){

                }
                if(xhr.readyState==1){

                }
                if(xhr.readyState==2){

                }
                if(xhr.readyState==3){

                }
                if(xhr.readyState==4){
                    if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                        if(Object.prototype.toString.call(xhr.responseText)!="[object Object]"){
                            fn(JSON.parse(xhr.responseText))
                        }else{
                            fn(xhr.responseText)
                        }
                    }else{
                        console.log("request was unsuccessful"+xhr.status)
                    }
                }

            }
            xhr.open("get",dataAPI+this.$jsonToParams(arg),true)
            xhr.send(null)
        };
        Vue.prototype.$httpPost=function (dataAPI,arg,fn) {
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function () {
                if(xhr.readyState==0){

                }
                if(xhr.readyState==1){

                }
                if(xhr.readyState==2){

                }
                if(xhr.readyState==3){

                }
                if(xhr.readyState==4){
                    if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
                        if(Object.prototype.toString.call(xhr.responseText)!="[object Object]"){
                            fn(JSON.parse(xhr.responseText))
                        }else{
                            fn(xhr.responseText)
                        }

                    }else{
                        console.log("request was unsuccessful"+xhr.status)
                    }
                }

            }
            var argData=new FormData()
            for(var i in arg){
                argData.append(i,arg[i])
            }
            xhr.open("post",dataAPI,true)
            xhr.send(argData)
        };


        Vue.prototype.$getTreeList=$getTreeData()
        Vue.prototype.$GetRandomNum=function(Min,Max){
            var Range = Max - Min;
            var Rand = Math.random();
            return(Min + Math.round(Rand * Range));
        }
    /* 生成一个用不重复的ID   */
        Vue.prototype.$GenNonDuplicateID=function(){
            var randomLength=8
            return Number(Math.random().toString().substr(3,randomLength) + Date.now()).toString(36)
        }
        // 数组深拷贝
        Vue.prototype.deepCopyArr=function (source) {
            var result=[];
            for (var key in source) {
                result[key] =source[key];
            }
            return result;
        }


    }
}