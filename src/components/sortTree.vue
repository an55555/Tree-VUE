<!--
    当向下传播 根据当前值向下传递
    当向上传播时  只改变父级的值  不向下传递
    currentLevel:存放当前层级
    getModelName：当前选择中的层级集合
    sendCheckStatus：用于Checkbox向下传播的参数
     v-on:transmitParentChecked：用于Checkbox向上传播
     sonIndex：当前儿子的索引位置，向于改变父级儿子Model集合的位置

-->
<template >
    <li class="slideModel" >

     <div @click="branchToggle(model.projectId,model.projectName)" class="slideItem"  @dragenter.prevent.stop="targetOndragenter($event)"  @drop.prevent.stop="ondrop($event)" @dragover.prevent.stop="targetOndragover($event)"  @dragleave.prevent.stop="targetOndragleave($event)">
            <span class="slideName ellipsis" @click="transmitMenuInfo"  :class="{'tree-act':getModelName.indexOf(model.projectName)>=0}" :title="currentLevel">
                  <i v-if="!isFolder" class="icon-file"></i>
                         <i v-if="isFolder" class="icon-folder"  :class="[open ? 'icon-open': 'icon']"></i>
                {{ model.projectName }}{{Drop.successFlag}}
            </span>
             <span class="slide-tree-editBox">
                <a class="slide-tree-checkbox" @click.stop="checkBoxStatusFn">{{checkBoxStatus}}</a>
            </span>
     </div>
        <!--<transition name="slideHeight">-->
        <div v-for="(item,index) in modelChild">
            <div @dragenter.prevent.stop="targetOndragenter($event)" @drop.prevent.stop="targetOndrop($event,index)" @dragleave.prevent.stop="targetOndragleave($event)"  @dragover.prevent.stop="targetOndragover($event,index)"
                 class="targetDefault"></div>
            <ul v-show="open" v-if="isFolder" class="slide-tree"  draggable="true" @dragstart.stop="ondragstart(item,index,$event)" @drag="ondrag(item,index)"  @dragend="ondragend(item,index)">
                <tree-menu
                        :model="item"
                        :menuLevelId="currentLevel"
                        :getModelName="getModelName"
                        :sendCheckStatus="toSonCheckBoxStatus"
                        v-on:transmitParentChecked="changeChildChecked"
                        :sonIndex="index"
                ></tree-menu>
            </ul>
            <div v-if="index==modelChild.length-1" @dragenter.prevent.stop="targetOndragenter($event)" @drop.prevent.stop="targetOndrop($event,index+1)" @dragleave.prevent.stop="targetOndragleave($event)"  @dragover.prevent.stop="targetOndragover($event,index)"
                 class="targetDefault"></div>
        </div>

        <!--</transition>-->

    </li>
</template>
<script>
    import Bus from '../../config/global/bus.js'
    export default {
        name: 'treeMenu',
        props: ['model','menuLevelId','getModelName','sendCheckStatus','sonIndex'],
        data() {
            return {
                open: false,//分去展开控制
                modelChild:[],   //存放儿子的地方
                checkBoxStatus:this.model.isChecked,
                toSonCheckBoxStatus:this.model.isChecked, //用于向儿子传播
                Drop:{
                    copyData:{},  //当前组件被拖动的元素
                    DropIndex:'',//当前组件被拖动的元素索引
                    targetIndex:'',//当前组件被影响索引
                    successFlag:false,
                    isSibling:false,
                    dropEl:{},//所有组件保存被拖动的元素
                    index:''//所有组件保存被拖动的元素的索引
                },
            }
        },
        computed: {
            //监测分项的变换刷新icon
            isFolder: function() {
                return this.model.hasChild==1
            },
//            当前的层级
            currentLevel:function () {
                var currentArr=this.$deepCopyArr(this.menuLevelId)
                currentArr.push(this.model.projectName )
                return currentArr
            },

        },
        watch:{
//            向下传递的标志改变了
            sendCheckStatus:function () {
//                console.log("我收到了父级的变换，我现在要改变我自己了,然后继续告诉我儿子"+this.sendCheckStatus)
                if(this.sendCheckStatus==0){
                    this.checkBoxStatus=0
                    this.toSonCheckBoxStatus=0
                }else if(this.sendCheckStatus==2){
                    this.checkBoxStatus=2
                    this.toSonCheckBoxStatus=2
//                    console.log( this.checkBoxStatus)
                }
            },
//            自己当前改变了
            checkBoxStatus:function () {
                this.model.isChecked=this.checkBoxStatus
                this.$emit('transmitParentChecked',this.model,this.sonIndex)  //向上传播
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
                        projectName:s,
                        hasChild:this.$GetRandomNum(0,1),
                        isChecked:0
                    }
                    josnT.push(createJson)
                }
                return josnT

            },
//            展开分项
            branchToggle: function(projectId,projectName) {
                if(this.model.hasChild==0) return   //如果没儿子  就不用找了
                if(this.modelChild==''||this.modelChild.length==0) {//如果儿子没加载出来
                    //获取项目
//                    this.$httpPost('/pms/projectApi/load',{'projectId':this.model.projectId},function (res) {
                        this.modelChild=this.getRandomProject()
//                    }.bind(this))
                }
                if (this.isFolder) {
                    this.open = !this.open
                }
            },
//            当选中当前层级时，向根tree传弟当前信息
            transmitMenuInfo:function () {
                //  传递的参数: 当前名,当前ID,是否有儿子,层级图
                var menuArgs={
                    menuName:this.model.projectName,
                    menuId:this.model.projectId,
                    menuHasChild:this.model.hasChild,
                    menuLevel:this.currentLevel,
                    menuLevelId:'id',
                }
                Bus.$emit('id-selected', menuArgs)
            },
            /*点击改变checkBox*/
            checkBoxStatusFn:function () {
                if(this.model.hasChild==1){
                    this.checkBoxStatus=++this.checkBoxStatus>=3?0:this.checkBoxStatus
                }else{
                    this.checkBoxStatus=this.checkBoxStatus==0?2:0
                }

                this.toSonCheckBoxStatus=this.checkBoxStatus
            },

            //儿子变了，我得更新一下
            changeChildChecked:function (changeChild,sonIndex) {
                this.modelChild[sonIndex]=changeChild
                //判断子节点有没选中的然后决定自己是否选中
                var nowBoll=0*1
                for(var x in this.modelChild){
                    nowBoll=nowBoll+this.modelChild[x].isChecked
                }
                if(nowBoll==0){
                    this.checkBoxStatus=0
                }else if(nowBoll==this.modelChild.length*2){
                    this.checkBoxStatus=2
                }else{
                    this.checkBoxStatus=1
                }
            },
            /*开始拖动元素*/
            ondragstart:function (item,index,ev) {
                this.Drop={
                    copyData:item,  //当前组件被拖动的元素
                    DropIndex:index,//当前组件被拖动的元素索引
                    targetIndex:'',//当前组件被影响索引
                    successFlag:false,
                    isSibling:false,
                    dropEl:{},//所有组件保存被拖动的元素
                    index:''//所有组件保存被拖动的元素的索引
                },
                Bus.$emit('getDrop', item,index)
/*
                ev.dataTransfer.setData("Text",JSON.stringify(item));
                ev.dataTransfer.setData("index",index);
*/
            },
            /*元素拖动中*/
            ondrag:function () {
//                console.log("拖动中")
            },
            /*拖动结束*/
            ondragend:function () {
                if(this.Drop.successFlag){
                    /*根据元素ID是否等model的ID来判断被拖动元素是插入到其它级下还是只是同级排序*/
                    if(this.Drop.isSibling){
                        var sertIndex=(this.Drop.DropIndex-this.Drop.targetIndex)>=0?this.Drop.DropIndex+1:this.Drop.DropIndex
                        this.modelChild.splice(sertIndex,1)
                        console.log(this.Drop.DropIndex)
                        console.log(this.Drop.targetIndex)
                    }else{
                        /*插入到其它级里去了，所以直接删除之前元素*/
                        console.log(JSON.stringify(this.modelChild))
                        console.log(this.Drop.DropIndex)
//                        this.modelChild.splice(this.Drop.DropIndex,1)
                    }
                }
                Bus.$emit('callBackSuccess', false,false)
            },
            /*进入目标区域*/
            targetOndragenter:function (ev) {
                ev.target.classList.toggle("targetDrop")
            },
            /*移动结束或者离开目标区域*/
            targetOndragleave:function (ev) {
                ev.target.classList.toggle("targetDrop")
            },
            /*在目标区域内移动*/
            targetOndragover:function (ev) {},
            /*以儿子身份进入目标区域完成*/
            ondrop:function (ev) {
                console.log("在目标区域放下了")
                this.modelChild.push(this.Drop.dropEl)
                Bus.$emit('callBackSuccess', true)
            },

            /*以兄弟身份进入目标区域完成*/
            targetOndrop:function (ev,targetIndex) {
                console.log("目标："+targetIndex)
                this.Drop.targetIndex=targetIndex
                ev.target.classList.toggle("targetDrop")
                this.modelChild.splice(targetIndex,0,this.Drop.dropEl)
                /*判断原来的兄弟节点还是其它的兄弟结点*/
                var isSiblings
//                if(this.Drop.dropEl.parentId==this.model.id){
                if(false){
                     isSiblings=true
                }else{
                     isSiblings=false
                }
                Bus.$emit('callBackSuccess', true,isSiblings)
            },

        },
        mounted:function () {
            Bus.$on("callBackSuccess", function (flag,isSibling) {
                this.Drop.successFlag=flag
                this.Drop.isSibling=isSibling
            }.bind(this))

            Bus.$on("getDrop",function (data,index) {
                this.Drop.dropEl=data
                this.Drop.index=index
            }.bind(this))
        }
    }
</script>
<style scoped>
    @import "./com-style/slide.css";
    .targetDefault{min-height: 5px}
    .targetDrop{border:dotted 1px #00b76f;min-height: 34px}

</style>
