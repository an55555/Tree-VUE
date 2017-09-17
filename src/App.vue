<template>

    <div id="example">

        <div>
            <span class="checkBoxBg "
                  @click="changeShowCheckBox" :class="demoTree.menu_option.hasCheckBox.show?'checkBoxBg_2':'checkBoxBg_0'"></span>显示CheckBox
        </div>
        <div v-show="demoTree.menu_option.hasCheckBox.show">
            <span class="checkBoxBg " @click="showAll=!showAll;getData()" :class="showAll?'checkBoxBg_2':'checkBoxBg_0'"></span>显示全部按钮
        </div>
        <div class="leftBox">
            <ul v-for="(menuItem,index2) in demoTree.modelAll"  class="slide-tree" v-if="showAll">
                <slide-tree  :treeOption="demoTree.menu_option" :model="menuItem"  :actTreeLevel="demoTree.treeLevel.currentModel?demoTree.treeLevel.currentModel.projectId:''"></slide-tree>
            </ul>
            <ul v-for="(menuItem,index2) in demoTree.treeList"  class="slide-tree"  v-if="!showAll">
                <slide-tree  :treeOption="demoTree.menu_option" :model="menuItem"  :actTreeLevel="demoTree.treeLevel.currentModel?demoTree.treeLevel.currentModel.projectId:''"></slide-tree>
            </ul>
            <div style="color: orangered ">这些数据是随机生成的，如果一开始的值都是子节点的话，可以刷新页面重新生成一次</div>
        </div>
        <div class="rightBox">
            <div class="borCon">
                <b>当前选中的值</b>
                <div style="margin-bottom: 20px">{{demoTree.treeLevel.currentModel}}</div>
                <b>当前选中值所在层级</b>
                <div v-for="item in demoTree.treeLevel.treeLevel">{{item}}</div>
            </div>
            <div v-show="demoTree.menu_option.hasCheckBox.show" class="borCon" style="margin-top: 20px;max-height: 300px;overflow: auto">
                <b>CheckBox变化情况</b>
                <div v-for="(item, index) in demoTree.checkEditJson">{{item}}</div>
            </div>
        </div>


    </div>
</template>

<script>
    import Bus from './config/global/bus.js';
    export default {
        components:{
            'slide-tree':r=>require.ensure([], () => r(require('./components/demoTree.vue')), 'demoTree'),
        },
        data () {
            return {
                showAll:false,
                demoTree:{
                    treeList:[],//第一级的数据集合
                    modelAll:[{  //如果需要一个全部按钮第一级直接全这个数据
                        projectId:"0",
                        projectName:"全部",
                        special:'all',
                        hasChild:1
                    }],

                    treeLevel:[],//用于将来保存点击子节点的层级结构
                    checkEditJson:[],//获取将来选择checkBox时保存选中的数据
                    menu_option:{
                        api:'/organization/query',   //获取tree子项的接口
                        resName:'companys',   // 接口返回的数据名称
                        arg:{       //额外接口参数配置
                            groupId:24
                        },

                        translate:{  //字段名转换
                            treeModelName:'projectName',
                            treeModelId:'projectId',
                            parentId:'parentId',
                            hasChild:'hasChild'
                        },
                        //复选框相关配置
                        hasCheckBox:{
                            show:false,    //如果需要复选框，则设为true
                            hasCheck:[],  //当前已经有权限
                            checkAll:[],//所有权限列表
                        },
                        loadAll:true,
                        callbackFn:'treeSelected', //点击树之后的回调
                        checkCallbackFn:'checkTreeSelected',  //复选框选择之后的回调
                    }
                },
            }
        },
        methods:{
            getData:function () {
                this.demoTree.treeLevel={}
                this.demoTree.checkEditJson.data=[]
                this.demoTree.treeList=this.$getTreeList(0)
            },
            changeShowCheckBox:function () {
                this.demoTree.menu_option.hasCheckBox.show=!this.demoTree.menu_option.hasCheckBox.show;
                if(!this.demoTree.menu_option.hasCheckBox.show){
                    this.showAll=false;
                }
                this.getData()
            }

        },
        mounted(){
            Bus.$on('treeSelected', function (arg) {
                console.log(JSON.stringify(arg))
                this.demoTree.treeLevel=arg
            }.bind(this))
            Bus.$on('checkTreeSelected', function (arg) {
                console.log(arg)
                this.demoTree.checkEditJson.unshift(arg)
            }.bind(this))
            this.getData()
        }
    }
</script>

<style>
    @import "https://an55555.github.io/CSS-Layout/style-l.css";

    h1.sayHello{
        padding: 0 40px;
    }
    #example{
        padding: 0 40px;

    }
    .leftBox{
        width: 270px;
        background: #f7f7f7;
        float: left;
        position: relative;
        padding: 10px;
        height: 100%;
        left: 0;
        z-index: 1;
        overflow-y: auto;
        border-right: solid 1px #e6e6e6;
        border-bottom: solid 1px #e6e6e6;
        transition: .5s;
        text-align: left;
    }
    .rightBox{
        margin-left: 0300px;

    }
    .borCon{
        border: solid 1px #e6e4e4;
        padding: 15px;
    }
    div:after{display: none}

    .loadAni{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border:solid 3px #3c98e6;
        position: absolute;
        animation: rote 2s infinite;
        left: 50%;
        margin-left: -30px;
        top: 50px;
    }
    .loadAni:after{
        content: '';
        width: 10px;
        height: 10px;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin-left: -5px;
        top: -6px;
    }
    @keyframes rote {
        from{
            transform: rotate(0);
        }
        to{
            transform: rotate(360deg);
        }
    }
</style>