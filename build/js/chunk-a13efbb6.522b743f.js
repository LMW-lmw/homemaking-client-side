(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-a13efbb6"],{2388:function(e,t,n){"use strict";n("7955e")},"7955e":function(e,t,n){},"7dec":function(e,t,n){"use strict";n=n("d3cb"),t.a=n.a},bf7e:function(e,t,n){"use strict";n.r(t);var o=n("7a23"),a=Object(o.withScopeId)("data-v-197b6b22");Object(o.pushScopeId)("data-v-197b6b22");var i={class:"role"},r=Object(o.createTextVNode)("添加角色");Object(o.popScopeId)();var c=a((function(e,t,n,c,l,d){var f=Object(o.resolveComponent)("page-search"),p=Object(o.resolveComponent)("el-button"),u=Object(o.resolveComponent)("page-content"),b=Object(o.resolveComponent)("el-tree"),m=Object(o.resolveComponent)("page-dialog");return Object(o.openBlock)(),Object(o.createBlock)("div",i,[Object(o.createVNode)(f,{formConfig:e.formConfig,pageName:"Role"},null,8,["formConfig"]),Object(o.createVNode)(u,{contentConfig:e.contentConfig,pageName:"Role",onEditBtnClick:e.editBtnClick},{handle:a((function(){return[Object(o.createVNode)(p,{type:"primary",onClick:e.addClick},{default:a((function(){return[r]})),_:1},8,["onClick"])]})),_:1},8,["contentConfig","onEditBtnClick"]),Object(o.createVNode)(m,{pageName:"Role",dialogConfig:e.dialogConfig,infoInit:e.infoInit,otherInfo:e.roleInfo,ref:"dialogRef"},{default:a((function(){return[Object(o.createVNode)(b,{data:e.menuList,"show-checkbox":"","node-key":"id",props:{children:"children",label:"name"},onCheck:e.roleCheck,ref:"treeRef"},null,8,["data","onCheck"])]})),_:1},8,["dialogConfig","infoInit","otherInfo"])])})),l=n("6b75");n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");var d=n("06c5");function f(e){return function(e){if(Array.isArray(e))return Object(l.a)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Object(d.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var p=n("3835"),u=(n("99af"),n("5502")),b=n("3573"),m=n("fe8c"),s=n("7dec"),g={tableItem:[{prop:"name",label:"角色名",minWidth:"100"},{prop:"intro",label:"权限",minWidth:"100"},{prop:"updateAt",label:"更新时间",minWidth:"250",slotName:"updateTime"},{label:"操作",minWidth:"110",slotName:"todo"}],showIndex:!0,pagination:!1,handleSlot:["handle"],title:"角色管理"},h={labelWidth:"90px",itemStyle:{padding:"20px 20px 0px 20px"},formItems:[{field:"name",id:1,type:"input",label:"角色名"},{field:"intro",id:2,type:"input",label:"权限名"}]},C={rules:{name:[{required:!0,message:"请输入角色名",trigger:"blur"}],intro:[{required:!0,message:"请输入角色权限",trigger:"blur"}]},formItems:[{id:1,field:"name",type:"input",label:"角色名",placeholder:"请输入角色名"},{id:2,field:"intro",type:"input",label:"角色权限",placeholder:"请输入角色权限"}],collLayout:{span:24},itemStyle:{paddingRight:"10px"}},j=n("8d9e"),O=n("5c25");s=Object(o.defineComponent)({name:"role",components:{pageContent:b.a,pageSearch:m.a,pageDialog:s.a},setup:function(){var e=Object(u.g)(),t=Object(o.ref)(),n=Object(o.computed)((function(){return e.state.menu})),a=Object(j.a)(void 0,(function(e){var n=Object(O.a)(e.menuList);l.value.menuList=n,Object(o.nextTick)((function(){var e;null!==(e=t.value)&&void 0!==e&&e.setCheckedKeys(n,!1)}))})),i=Object(p.a)(a,4),r=i[0],c=i[1],l=(a=i[2],i=i[3],Object(o.ref)({menuList:[]}));return{contentConfig:g,formConfig:h,dialogConfig:C,addClick:a,infoInit:c,editBtnClick:i,dialogRef:r,menuList:n,roleCheck:function(e,t){var n=t.checkedKeys;t=t.halfCheckedKeys,t=[].concat(f(n),f(t));l.value={menuList:t}},roleInfo:l,treeRef:t}}});n("2388"),s.render=c,s.__scopeId="data-v-197b6b22",t.default=s}}]);