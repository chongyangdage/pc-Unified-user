(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f3cebedc","chunk-227d7cbb"],{"1b6b":function(e,t,o){},"2fda":function(e,t,o){"use strict";o.d(t,"a",(function(){return r})),o.d(t,"b",(function(){return a})),o.d(t,"e",(function(){return c})),o.d(t,"c",(function(){return i})),o.d(t,"f",(function(){return l})),o.d(t,"d",(function(){return d}));var n=o("b775");function r(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext",method:"post",data:e})}function a(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.employee.getEmployee.biz.ext",method:"post",data:e})}function c(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.organization.deleteNode.biz.ext",method:"post",data:e})}function i(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.organization.moveNode.biz.ext",method:"post",data:e})}function l(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.employee.queryEmployeeByCriteria.biz.ext",method:"post",data:e})}function d(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.employee.getEmployee.biz.ext",method:"post",data:e})}},"42e3":function(e,t,o){},5689:function(e,t,o){"use strict";o("42e3")},b29d:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"tree"},[o("div",[o("Tree",{attrs:{isCheckbox:!0,data:e.data_tree},on:{ok:e.click_choose}})],1),o("el-card",{staticClass:"box-card"},[o("el-form",{staticClass:"demo-form-inline",attrs:{size:"mini",inline:!0,model:e.formInline}},[o("el-form-item",{staticClass:"form-item",attrs:{label:"证件号:"}},[o("el-input",{attrs:{placeholder:"请输入身份证号"},model:{value:e.formInline.cardno,callback:function(t){e.$set(e.formInline,"cardno",t)},expression:"formInline.cardno"}})],1),o("el-form-item",{staticClass:"form-item",attrs:{label:"登录名称:"}},[o("el-input",{attrs:{placeholder:"请填写登录名称"},model:{value:e.formInline.empcode,callback:function(t){e.$set(e.formInline,"empcode",t)},expression:"formInline.empcode"}})],1),o("el-form-item",{staticClass:"form-item",attrs:{label:"真实姓名:"}},[o("el-input",{attrs:{placeholder:"请填写真实姓名"},model:{value:e.formInline.empname,callback:function(t){e.$set(e.formInline,"empname",t)},expression:"formInline.empname"}})],1),o("el-form-item",{staticClass:"form-item",attrs:{label:"所属部门:"}},[o("el-input",{attrs:{placeholder:"请填写所属部门"},model:{value:e.formInline.orgname,callback:function(t){e.$set(e.formInline,"orgname",t)},expression:"formInline.orgname"}})],1)],1),o("div",{staticStyle:{display:"flex","margin-left":"440px"}},[o("el-button",{staticStyle:{"margin-top":"20px"},attrs:{size:"mini",type:"primary"},on:{click:e.onSubmit}},[e._v("保存")]),o("el-button",{staticStyle:{"margin-top":"20px"},attrs:{size:"mini",type:"danger"},on:{click:e.onSubmit}},[e._v("取消")])],1)],1)],1)])},r=[],a=o("e54b"),c=o("2fda"),i={components:{Tree:a["default"]},data:function(){return{page_size:7,total:100,formInline:{post:"",user:"",alarm:""},data_tree:[]}},methods:{click_choose:function(e,t,o){var n=this;Object(c["b"])({template:{empid:e}}).then((function(e){n.formInline=e.employee}))},prev_click:function(e){},next_click:function(e){},currentChange:function(e){},onSubmit:function(){}}},l=i,d=(o("5689"),o("2877")),s=Object(d["a"])(l,n,r,!1,null,"3edbe8c2",null);t["default"]=s.exports},dd12:function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return a})),o.d(t,"a",(function(){return c})),o.d(t,"d",(function(){return i}));var n=o("b775");function r(){return Object(n["a"])({url:"org.gocom.components.coframe.auth.partyauth.ManageableRes.getManageableOrg.biz.ext",method:"post"})}function a(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.organization.queryTreeChildNodes.biz.ext",method:"post",data:e})}function c(e){return Object(n["a"])({url:"org.gocom.components.coframe.framework.SystemManager.querySystemByCriteria.biz.ext",method:"post",data:e})}function i(e){return Object(n["a"])({url:"org.gocom.components.coframe.org.organization.queryOrgTree.biz.ext",method:"post",data:e})}},e406:function(e,t,o){"use strict";o("1b6b")},e54b:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"wrap"},[o("el-tree",{ref:"tree",attrs:{lazy:"",load:e.loadNode,props:e.props,"node-key":"nodeId","show-checkbox":e.isCheckbox,"allow-drop":e.allowDrop,"allow-drag":e.allowDrag},on:{"node-click":e.node_click,check:e.check,"node-drag-start":e.handleDragStart,"node-drag-enter":e.handleDragEnter,"node-drag-leave":e.handleDragLeave,"node-drag-over":e.handleDragOver,"node-drag-end":e.handleDragEnd,"node-drop":e.handleDrop,"check-change":e.handleCheckChange}})],1)},r=[],a=(o("ac6a"),o("dd12")),c={data:function(){return{props:{label:"nodeName",children:"zones",isLeaf:"isLeaf",orgid:"orgid"}}},props:{is_dele:{default:!0,type:Boolean},isCheckbox:{default:!1,type:Boolean},data:{default:[],type:Array}},methods:{node_click:function(e){var t="",o="";e.empid?(t=e.empid,o="empid"):(t=e.orgid,o="orgid"),this.$emit("click_node",t,o)},loadNode:function(e,t){0===e.level?Object(a["b"])().then((function(e){return e.treeNodes[0].disabled=!0,t(e.treeNodes)})):setTimeout((function(){var o={nodeType:"OrgOrganization",nodeId:e.data.nodeId};Object(a["c"])(o).then((function(e){if(e.treeNodes.forEach((function(e){0==e.isLeaf&&(e.disabled=!0)})),!(e.treeNodes.length>=1))return t([]);t(e.treeNodes)}))}),200)},handleCheckChange:function(e,t){},check:function(e,t){var o=this.$refs.tree.getCheckedNodes();o.length>1&&(this.$message.error("只能选择一个部门"),this.$refs.tree.setCheckedKeys([])),1==t.checkedKeys.length&&this.$emit("ok",e.orgid,e.nodeName,e.empid)},handleDragStart:function(e,t){console.log("drag start",e)},handleDragEnter:function(e,t,o){console.log("tree drag enter: ",t.label)},handleDragLeave:function(e,t,o){console.log("tree drag leave: ",t.label)},handleDragOver:function(e,t,o){console.log("tree drag over: ",t.label)},handleDragEnd:function(e,t,o,n){console.log("tree drag end: ",t&&t.label,o)},handleDrop:function(e,t,o,n){console.log("tree drop: ",t.label,o)},allowDrop:function(e,t,o){return"二级 3-1"!==t.data.label||"inner"!==o},allowDrag:function(e){return-1===e.data.label.indexOf("三级 3-2-2")}}},i=c,l=(o("e406"),o("2877")),d=Object(l["a"])(i,n,r,!1,null,"3fd88d52",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-f3cebedc.ad192b44.js.map