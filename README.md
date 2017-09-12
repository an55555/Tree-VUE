# treeData

使用组件

```html
<ul v-for="(menuItem,index2) in demoTree.treeList"  class="slide-tree">
 <slide-tree  :treeOption="demoTree.menu_option" :model="menuItem"  ></slide-tree>
</ul>
```

参数：

```javascript
  demoTree:{
        treeList:[],//第一级的数据集合
        modelAll:[{  //如果需要一个全部按钮第一级直接全这个数据
            comId:"0",
            organizationName:"全部",
            special:'all',
            hasChild:1
        }],
        treeLevel:[],//用于将来保存点击子节点的层级结构
        checkEditJson:{},//获取将来选择checkBox时保存选中的数据
        menu_option:{
            api:'/organization/query',   //获取tree子项的接口
            resName:'companys',   // 接口返回的数据名称
            arg:{       //额外接口参数配置
                groupId:24
            },

            translate:{  //字段名转换
                treeModelName:'organizationName',
                treeModelId:'comId',
                parentId:'parentId',
                hasChild:'hasChild'
            },
            //复选框相关配置
            hasCheckBox:{
                show:true,    //如果需要复选框，则设为true
                hasCheck:[],  //当前已经有权限
                checkAll:[],//所有权限列表
            },
            callbackFn:'organizationSelected', //点击树之后的回调
            checkCallbackFn:'',  //复选框选择之后的回调
        }
    },
```