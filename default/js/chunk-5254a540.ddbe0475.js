(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5254a540"],{"6fa1":function(e,t,r){"use strict";r("afe5")},"8e28":function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var o=r("b775");function a(e){return Object(o["a"])({url:"org.gocom.components.coframe.dict.DictManager.queryDictByDictType.biz.ext",method:"post",data:e})}},afe5:function(e,t,r){},bd9f:function(e,t,r){"use strict";r.r(t);var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"nav_wrap"},[e._m(0),r("div",{staticClass:"fun"},[r("el-button",{attrs:{round:"",type:"primary"}},[e._v("申请账号")]),r("el-button",{attrs:{round:"",type:"primary"}},[e._v("查询账号")]),r("el-button",{attrs:{round:"",type:"primary"}},[e._v("重置密码")]),r("el-button",{attrs:{round:"",type:"primary"}},[e._v("系统登陆")])],1)]),r("div",{staticClass:"wrap"},[r("el-card",{staticClass:"box-card"},[r("div",{staticClass:"wrap_lr"},[r("div",{staticClass:"block"},[r("el-timeline",e._l(e.activities,(function(t,o){return r("el-timeline-item",{key:o,staticStyle:{"font-weight":"300"},attrs:{icon:t.icon,type:t.type,color:t.color,size:t.size,timestamp:t.timestamp}},[e._v("\n              "+e._s(t.content)+"\n            ")])})),1)],1),r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"密码",prop:"pass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pass,callback:function(t){e.$set(e.ruleForm,"pass",t)},expression:"ruleForm.pass"}})],1),r("el-form-item",{attrs:{label:"确认密码",prop:"password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(t){e.$set(e.ruleForm,"password",t)},expression:"ruleForm.password"}})],1),r("el-form-item",{attrs:{rules:[{required:!0,message:"请选择密保问题",trigger:"change"}],label:"密保问题",prop:"hzipcode"}},[r("el-select",{attrs:{placeholder:"请选择密保问题"},model:{value:e.ruleForm.hzipcode,callback:function(t){e.$set(e.ruleForm,"hzipcode",t)},expression:"ruleForm.hzipcode"}},e._l(e.dic_data4,(function(e,t){return r("el-option",{key:t,attrs:{label:e.dictname,value:e.dictid}})})),1)],1),r("el-form-item",{attrs:{label:"答案",prop:"htel",rules:[{required:!0,message:"请输入答案",trigger:"blur"}]}},[r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:e.ruleForm.htel,callback:function(t){e.$set(e.ruleForm,"htel",t)},expression:"ruleForm.htel"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm()}}},[e._v("上一步")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.apply_zh("ruleForm")}}},[e._v("下一步")]),r("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("取消")])],1)],1)],1)])],1)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticStyle:{display:"flex","align-items":"center","padding-left":"30px"}},[o("img",{attrs:{src:r("cf05"),alt:"",srcset:""}}),o("div",{staticClass:"nav_wrap_text"},[e._v("\n        包头市公安局交通警察支队统一用户管理系统\n      ")])])}],s=(r("a481"),r("c5f6"),r("b775"));function i(e){return Object(s["a"])({url:"org.gocom.components.coframe.org.employee.addEmployee.biz.ext",method:"post",data:e})}var n=r("8e28"),l={name:"register4",data:function(){var e=this,t=function(t,r,o){""===r?o(new Error("请输入密码")):(""!==e.ruleForm.checkPass&&e.$refs.ruleForm.validateField("checkPass"),o())},r=function(t,r,o){""===r?o(new Error("请再次输入密码")):r!==e.ruleForm.pass?o(new Error("两次输入密码不一致!")):o()};return{dic_data4:"",ruleForm:{pass:"",password:"",hzipcode:"",htel:"",ozipcode:"1"},rules:{password:[{validator:t,trigger:"blur"}],checkPass:[{validator:r,trigger:"blur"}]},radio:"1",activities:[{content:"基础信息录入第一部分",color:"#0bbd87",size:"large",type:"success",icon:"el-icon-s-comment"},{content:"基础信息录入第二部分",size:"large",icon:"el-icon-s-comment",color:"#0bbd87"},{content:"账号安全设置",color:"#0bbd87",icon:"el-icon-s-home",size:"large"},{size:"large",color:"#ccc",content:"账号申请完成",icon:"el-icon-success"}]}},created:function(){var e=this;Object(n["a"])({dicttypeid:"WENTI"}).then((function(t){e.dic_data4=t.data}))},activated:function(){this.data=JSON.parse(this.$route.query.from)},methods:{apply_zh:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return!1;for(var r in t.ruleForm)t.data[r]=t.ruleForm[r];delete t.data.pass;var o={orgid:Number(t.data.orgid)},a={password:t.data.password,status:parseInt(1)};delete t.data.orgid,delete t.data.password;var s={employee:t.data};s.org=o,s.user=a,i(s).then((function(e){e.response.flag?t.$router.push({path:"/register5"}):t.$message.warning("保存失败")}))}))},submitForm:function(){window.history.back()},resetForm:function(e){this.$router.replace({path:"/"})}}},c=l,u=(r("6fa1"),r("2877")),p=Object(u["a"])(c,o,a,!1,null,"5f3a9845",null);t["default"]=p.exports},cf05:function(e,t,r){e.exports=r.p+"img/logo.dbf9efc0.png"}}]);
//# sourceMappingURL=chunk-5254a540.ddbe0475.js.map