<!--
    当向下传播 根据当前值向下传递
    当向上传播时  只改变父级的值  不向下传递
    currentLevel:存放当前层级
    sendCheckStatus：用于Checkbox向下传播的参数
     v-on:transmitParentChecked：用于Checkbox向上传播
     sonIndex：当前儿子的索引位置，向于改变父级儿子Model集合的位置

-->
<template >
    <li class="slideModel">
        <div  class="slideItem" >
            <!--:class="{'tree-act':getModelName.indexOf(model.treeModelName)>=0}"-->
            <div class="slideName ellipsis"
                 :class="{'currentTree':actTreeLevel==model[treeOption.translate.treeModelId]}"
                 :title="model[treeOption.translate.treeModelName]">
                <span class="slide-tree-editBox" v-if="treeOption.hasCheckBox.show">
                    <a class="slide-tree-checkbox checkBoxBg" :class="'checkBoxBg_'+checkBoxStatus"  @click.stop="checkBoxStatusFn"></a>
                </span>
<!--                <i v-if="!isFolder" class="iconfont color-primary">&#xe64f;</i>
                <i v-if="isFolder&&open" class=" iconfont color-primary"  >&#xe64e;</i>
                <i v-if="isFolder&&!open" class=" iconfont color-primary" >&#xe64e;</i>-->
                <i @click="branchToggle()" :class="{'icon-all':model.special=='all','icon-file':!isFolder,'icon-open':isFolder&&open,'icon-folder':isFolder&&!open}"></i>
               <span @click="transmitMenuInfo" class="treeModelName">{{ model[treeOption.translate.treeModelName] }}</span>
            </div>
        </div>
        <ul v-show="open" v-if="isFolder" class="slide-tree" v-for="(item,index) in modelChild"  :class="{'tree-all':model.special=='all'}">
            <tree-menu
                    :model="item"
                    :treeLevel="currentLevel"
                    :actTreeLevel="actTreeLevel"
                    :sendCheckStatus="toSonCheckBoxStatus"
                    v-on:transmitParentChecked="changeChildChecked"
                    :sonIndex="index"
                    :treeOption="treeOption"
            ></tree-menu>
        </ul>
        <!--
            :treeLevel="currentLevel" ：传递当前的层级结构
            :sonIndex="index" ：子组件对应的index，对应的子组件发生了变化之后，再把index传回来，方便获取改变的是哪个儿子
        -->

    </li>
</template>
<script>
    import Bus from '../../config/global/bus.js'
    export default {
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
                var currentArr=this.treeLevel?this.$deepCopyArr(this.treeLevel):this.$deepCopyArr([])
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
                this.$httpPost(this.treeOption.api,argument,function (res) {
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
                }.bind(this))
              /* this.modelChild=this.getRandomProject()*/
            },
            /*当选中当前层级时，向根tree传弟当前信息*/
            transmitMenuInfo:function () {
                //  传递的参数: 当前名,当前ID,是否有儿子,层级图
                var menuArgs={
                    currentModel:this.model,
                    treeLevel:this.currentLevel,
                }
                Bus.$emit(this.treeOption.callbackFn, menuArgs)
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
                Bus.$emit(this.treeOption.checkCallbackFn, menuArgs)
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
            Bus.$on('reloadTree', function (id) {
                if(id==this.model[this.treeOption.translate.treeModelId]){
                    this.model[this.treeOption.translate.hasChild]=1
                    this.branchToggle(true)
                }
            }.bind(this))
            /*如果不要求异步加载儿 ，把儿子全部加载出来*/
            if(this.treeOption.loadAll){
                this.getSonData()
                this.initCheck()
            }

        },

    }
</script>
<style scoped>
    @import "./com-style/slide.css";

</style>
