(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-id-pages-pages-userinfo-userinfo"],{"00cf":function(e,t,n){"use strict";(function(e){n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("c7eb")),o=i(n("1da1")),u={name:"cloud-image",emits:["click"],props:{mode:{type:String,default:function(){return"widthFix"}},src:{default:function(){return""}},width:{type:String,default:function(){return"100rpx"}},height:{type:String,default:function(){return"100rpx"}}},watch:{src:{handler:function(t){var n=this;t&&"cloud://"==t.substring(0,8)?e.getTempFileURL({fileList:[t]}).then((function(e){n.cSrc=e.fileList[0].tempFileURL})):this.cSrc=t},immediate:!0}},mounted:function(){return(0,o.default)((0,a.default)().mark((function e(){return(0,a.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},methods:{onClick:function(){this.$emit("click")}},data:function(){return{cSrc:!1}}};t.default=u}).call(this,n("a9ff")["default"])},"0159":function(e,t,n){"use strict";var i=n("f280"),a=n.n(i);a.a},"0494":function(e,t,n){"use strict";n.r(t);var i=n("3a2d"),a=n("3179");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("a114");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"241de9ca",null,!1,i["a"],void 0);t["default"]=r.exports},"103c":function(e,t,n){"use strict";n.r(t);var i=n("a5c1"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"128d":function(e,t,n){var i=n("bd81");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("68cf4c84",i,!0,{sourceMap:!1,shadowMode:!1})},"14d94":function(e,t,n){"use strict";n.r(t);var i=n("00cf"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},1554:function(e,t,n){"use strict";n.r(t);var i=n("bbbf"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"1ceb":function(e,t,n){var i=n("4052");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("286b00f3",i,!0,{sourceMap:!1,shadowMode:!1})},2187:function(e,t,n){"use strict";n.r(t);var i=n("3c1b"),a=n("1554");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("f60c");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"23a0245a",null,!1,i["a"],void 0);t["default"]=r.exports},"23f3":function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"確定","uni-popup.placeholder":"請輸入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},"2a25":function(e,t,n){"use strict";(function(e,i){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7");var o=a(n("c7eb")),u=a(n("1da1")),r=n("74f6"),d=e.database(),s=(d.collection("uni-id-users"),e.importObject("uni-id-co")),c={computed:{userInfo:function(){return r.store.userInfo}},data:function(){return{univerifyStyle:{authButton:{title:"本机号码一键绑定"},otherLoginButton:{title:"其他号码绑定"}},hasPwd:!1,showLoginManage:!1}},onShow:function(){var e=this;return(0,u.default)((0,o.default)().mark((function t(){return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.univerifyStyle.authButton.title="本机号码一键绑定",e.univerifyStyle.otherLoginButton.title="其他号码绑定";case 2:case"end":return t.stop()}}),t)})))()},onLoad:function(e){var t=this;return(0,u.default)((0,o.default)().mark((function n(){var i;return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.showLoginManage&&(t.showLoginManage=!0),n.next=3,s.getAccountInfo();case 3:i=n.sent,t.hasPwd=i.isPasswordSet;case 5:case"end":return n.stop()}}),n)})))()},methods:{login:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd",complete:function(e){i("log",e," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:80")}})},logout:function(){r.mutations.logout()},bindMobileSuccess:function(){r.mutations.updateUserInfo()},changePassword:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/change_pwd/change_pwd",complete:function(e){i("log",e," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:94")}})},bindMobile:function(){this.bindMobileBySmsCode()},univerify:function(){var e=this;uni.login({provider:"univerify",univerifyStyle:this.univerifyStyle,success:function(){var e=(0,u.default)((0,o.default)().mark((function e(t){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i("log",t.authResult," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:125"),s.bindMobileByUniverify(t.authResult).then((function(e){i("log",e," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:127"),r.mutations.updateUserInfo()})).catch((function(e){i("log",e," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:130")})).finally((function(e){i("log",e," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:132"),uni.closeAuthView()}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fail:function(t){i("log",t," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:137"),"30002"!=t.code&&"30001"!=t.code||e.bindMobileBySmsCode()}})},bindMobileBySmsCode:function(){uni.navigateTo({url:"./bind-mobile/bind-mobile"})},setNickname:function(e){i("log",e," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:150"),e?(r.mutations.updateUserInfo({nickname:e}),this.$refs.dialog.close()):this.$refs.dialog.open()},deactivate:function(){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/deactivate/deactivate"})},bindThirdAccount:function(t){var n=this;return(0,u.default)((0,o.default)().mark((function a(){var d,s;return(0,o.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(d=e.importObject("uni-id-co"),s={weixin:"wx_openid",alipay:"ali_openid",apple:"apple_openid",qq:"qq_openid"}[t.toLowerCase()],!n.userInfo[s]){a.next=9;break}return a.next=5,d["unbind"+t]();case 5:return a.next=7,r.mutations.updateUserInfo();case 7:a.next=10;break;case 9:uni.login({provider:t.toLowerCase(),onlyAuthorize:!0,success:function(){var e=(0,u.default)((0,o.default)().mark((function e(n){var i;return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["bind"+t]({code:n.code});case 2:return i=e.sent,i.errCode&&uni.showToast({title:i.errMsg||"绑定失败"}),e.next=6,r.mutations.updateUserInfo();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fail:function(){var e=(0,u.default)((0,o.default)().mark((function e(t){return(0,o.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:i("log",t," at uni_modules/uni-id-pages/pages/userinfo/userinfo.vue:191"),uni.hideLoading();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()});case 10:case"end":return a.stop()}}),a)})))()}}};t.default=c}).call(this,n("a9ff")["default"],n("0de9")["log"])},3179:function(e,t,n){"use strict";n.r(t);var i=n("2a25"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"345f":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{}},created:function(){this.popup=this.getParent()},methods:{getParent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"uniPopup",t=this.$parent,n=t.$options.name;while(n!==e){if(t=t.$parent,!t)return!1;n=t.$options.name}return t}}};t.default=i},3771:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 引入uview的scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-241de9ca]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-241de9ca]{padding:0 %?60?%}.login-logo[data-v-241de9ca]{display:none}@media screen and (min-width:690px){.uni-content[data-v-241de9ca]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-241de9ca]{display:flex;justify-content:center}.login-logo uni-image[data-v-241de9ca]{width:60px;height:60px}.register-back[data-v-241de9ca]{display:none}uni-button[data-v-241de9ca]{padding-bottom:1px}}.uni-content uni-view[data-v-241de9ca]{box-sizing:border-box}.title[data-v-241de9ca]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-241de9ca]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-241de9ca]  .uni-easyinput__content,\r\n.input-box[data-v-241de9ca]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-241de9ca]{color:#04498c;cursor:pointer}.uni-content[data-v-241de9ca]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-241de9ca]{text-align:center;height:40px;line-height:40px;margin:15px 0 0 0;color:#fff!important;border-radius:5px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-241de9ca]{height:auto!important}.uni-content[data-v-241de9ca]{padding:0}uni-view[data-v-241de9ca]{display:flex;box-sizing:border-box;flex-direction:column}@media screen and (min-width:690px){.uni-content[data-v-241de9ca]{padding:0;max-width:690px;margin-left:calc(50% - 345px);border:none;max-height:none;border-radius:0;box-shadow:none}}.avatar[data-v-241de9ca]{align-items:center;justify-content:center;margin:22px 0;width:100%}.item[data-v-241de9ca]{flex:1;flex-direction:row;justify-content:space-between;align-items:center}uni-button[data-v-241de9ca]{margin:10%;margin-top:40px;border-radius:0;background-color:#fff;width:80%}.mt10[data-v-241de9ca]{margin-top:10px}',""]),e.exports=t},"3a2d":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniIdPagesAvatar:n("2187").default,uniList:n("9db33").default,uniListItem:n("730e").default,uniPopup:n("06d2").default,uniPopupDialog:n("8968").default,uniIdPagesBindMobile:n("9f4c").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-content"},[n("v-uni-view",{staticClass:"avatar"},[n("uni-id-pages-avatar",{attrs:{width:"260rpx",height:"260rpx"}})],1),n("uni-list",[n("uni-list-item",{staticClass:"item",attrs:{title:"昵称",rightText:e.userInfo.nickname||"未设置",link:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.setNickname("")}}}),n("uni-list-item",{staticClass:"item",attrs:{title:"手机号",rightText:e.userInfo.mobile||"未绑定",link:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobile.apply(void 0,arguments)}}}),e.userInfo.email?n("uni-list-item",{staticClass:"item",attrs:{title:"电子邮箱",rightText:e.userInfo.email}}):e._e(),e.hasPwd?n("uni-list-item",{staticClass:"item",attrs:{title:"修改密码",link:!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.changePassword.apply(void 0,arguments)}}}):e._e()],1),n("uni-list",{staticClass:"mt10"},[n("uni-list-item",{attrs:{title:"注销账号",link:"navigateTo"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.deactivate.apply(void 0,arguments)}}})],1),n("uni-popup",{ref:"dialog",attrs:{type:"dialog"}},[n("uni-popup-dialog",{attrs:{mode:"input",value:e.userInfo.nickname,title:"设置昵称",placeholder:"请输入要设置的昵称"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.setNickname.apply(void 0,arguments)}}})],1),n("uni-id-pages-bind-mobile",{ref:"bind-mobile-by-sms",on:{success:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobileSuccess.apply(void 0,arguments)}}}),e.showLoginManage?[e.userInfo._id?n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.logout.apply(void 0,arguments)}}},[e._v("退出登录")]):n("v-uni-button",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v("去登录")])]:e._e()],2)},o=[]},"3c1b":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={cloudImage:n("60e7").default,uniIcons:n("a218").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"box",class:{showBorder:e.border},style:{width:e.width,height:e.height,lineHeight:e.height},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadAvatarImg.apply(void 0,arguments)}}},[e.avatar_file?n("cloud-image",{attrs:{src:e.avatar_file.url,width:e.width,height:e.height}}):n("uni-icons",{staticClass:"chooseAvatar",style:{width:e.width,height:e.height,lineHeight:e.height},attrs:{type:"plusempty",size:"30",color:"#dddddd"}})],1)},o=[]},4052:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,"\n.box[data-v-23a0245a]{overflow:hidden}\n.chooseAvatar[data-v-23a0245a]{\ndisplay:inline-block;box-sizing:border-box;\nborder:dotted 1px #ddd;border-radius:10px;text-align:center;padding:1px}.showBorder[data-v-23a0245a]{border:solid 1px #ddd}",""]),e.exports=t},"60e7":function(e,t,n){"use strict";n.r(t);var i=n("a201"),a=n("14d94");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);t["default"]=r.exports},6883:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"uni-popup-dialog"},[n("v-uni-view",{staticClass:"uni-dialog-title"},[n("v-uni-text",{staticClass:"uni-dialog-title-text",class:["uni-popup__"+e.dialogType]},[e._v(e._s(e.titleText))])],1),"base"===e.mode?n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-text",{staticClass:"uni-dialog-content-text"},[e._v(e._s(e.content))])])],2):n("v-uni-view",{staticClass:"uni-dialog-content"},[e._t("default",[n("v-uni-input",{staticClass:"uni-dialog-input",attrs:{type:"text",placeholder:e.placeholderText,focus:e.focus},model:{value:e.val,callback:function(t){e.val=t},expression:"val"}})])],2),n("v-uni-view",{staticClass:"uni-dialog-button-group"},[n("v-uni-view",{staticClass:"uni-dialog-button",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeDialog.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text"},[e._v(e._s(e.closeText))])],1),n("v-uni-view",{staticClass:"uni-dialog-button uni-border-left",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onOk.apply(void 0,arguments)}}},[n("v-uni-text",{staticClass:"uni-dialog-button-text uni-button-color"},[e._v(e._s(e.okText))])],1)],1)],1)},a=[]},7358:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uniPopup:n("06d2").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uni-popup",{ref:"popup",attrs:{type:"bottom"}},[n("v-uni-view",{staticClass:"box"},[n("v-uni-text",{staticClass:"headBox"},[e._v("绑定资料")]),n("v-uni-text",{staticClass:"tip"},[e._v("将一键获取你的手机号码绑定你的个人资料")]),n("v-uni-view",{staticClass:"btnBox"},[n("v-uni-text",{staticClass:"close",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.closeMe.apply(void 0,arguments)}}},[e._v("关闭")]),n("v-uni-button",{staticClass:"agree uni-btn",attrs:{type:"primary","open-type":"getPhoneNumber"},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.bindMobileByMpWeixin.apply(void 0,arguments)}}},[e._v("获取")])],1)],1)],1)},o=[]},7501:function(e,t,n){var i=n("3771");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("17d28751",i,!0,{sourceMap:!1,shadowMode:!1})},7920:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a=i(n("345f")),o=n("37dc"),u=i(n("a49d")),r=(0,o.initVueI18n)(u.default),d=r.t,s={name:"uniPopupDialog",mixins:[a.default],emits:["confirm","close"],props:{value:{type:[String,Number],default:""},placeholder:{type:[String,Number],default:""},type:{type:String,default:"error"},mode:{type:String,default:"base"},title:{type:String,default:""},content:{type:String,default:""},beforeClose:{type:Boolean,default:!1},cancelText:{type:String,default:""},confirmText:{type:String,default:""}},data:function(){return{dialogType:"error",focus:!1,val:""}},computed:{okText:function(){return this.confirmText||d("uni-popup.ok")},closeText:function(){return this.cancelText||d("uni-popup.cancel")},placeholderText:function(){return this.placeholder||d("uni-popup.placeholder")},titleText:function(){return this.title||d("uni-popup.title")}},watch:{type:function(e){this.dialogType=e},mode:function(e){"input"===e&&(this.dialogType="info")},value:function(e){this.val=e}},created:function(){this.popup.disableMask(),"input"===this.mode?(this.dialogType="info",this.val=this.value):this.dialogType=this.type},mounted:function(){this.focus=!0},methods:{onOk:function(){"input"===this.mode?this.$emit("confirm",this.val):this.$emit("confirm"),this.beforeClose||this.popup.close()},closeDialog:function(){this.$emit("close"),this.beforeClose||this.popup.close()},close:function(){this.popup.close()}}};t.default=s},8968:function(e,t,n){"use strict";n.r(t);var i=n("6883"),a=n("8d85");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("e42d");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"99b3946c",null,!1,i["a"],void 0);t["default"]=r.exports},"8d85":function(e,t,n){"use strict";n.r(t);var i=n("7920"),a=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=a.a},"9f4c":function(e,t,n){"use strict";n.r(t);var i=n("7358"),a=n("103c");for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);n("0159");var u=n("f0c5"),r=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"1681dfa6",null,!1,i["a"],void 0);t["default"]=r.exports},a114:function(e,t,n){"use strict";var i=n("7501"),a=n.n(i);a.a},a201:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{style:{width:e.width,height:e.height},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[e.cSrc?n("v-uni-image",{style:{width:e.width,height:e.height},attrs:{src:e.cSrc,mode:e.mode}}):e._e()],1)},a=[]},a49d:function(e,t,n){"use strict";n("7a82");var i=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n("dacf")),o=i(n("d074")),u=i(n("23f3")),r={en:a.default,"zh-Hans":o.default,"zh-Hant":u.default};t.default=r},a5c1:function(e,t,n){"use strict";(function(e,i){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7");var o=a(n("c7eb")),u=a(n("1da1")),r=e.database(),d=(r.collection("uni-id-users"),e.importObject("uni-id-co")),s={emits:["success"],computed:{},data:function(){return{}},methods:{beforeGetphonenumber:function(){return(0,u.default)((0,o.default)().mark((function t(){return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,new Promise((function(t,n){uni.showLoading({mask:!0}),wx.checkSession({success:function(){i("log","session_key 未过期"," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:31"),t(),uni.hideLoading()},fail:function(){i("log","session_key 已经失效，正在执行更新"," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:36"),wx.login({success:function(a){var o=a.code;e.importObject("uni-id-co",{customUI:!0}).loginByWeixin({code:o}).then((function(e){i("log",e," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:44"),t()})).catch((function(e){i("log",e," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:47"),n()})).finally((function(e){i("log",e," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:50"),uni.hideLoading()}))},fail:function(e){i("error",e," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:55"),n()}})}})}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()},bindMobileByMpWeixin:function(e){var t=this;return(0,u.default)((0,o.default)().mark((function n(){return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i("log",e," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:64"),"getPhoneNumber:ok"!=e.detail.errMsg){n.next=8;break}return i("log",e.detail," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:66"),n.next=5,t.beforeGetphonenumber();case 5:d.bindMobileByMpWeixin(e.detail).then((function(e){i("log",e," at uni_modules/uni-id-pages/components/uni-id-pages-bind-mobile/uni-id-pages-bind-mobile.vue:70"),t.$emit("success")})).finally((function(e){t.closeMe()})),n.next=9;break;case 8:t.closeMe();case 9:case"end":return n.stop()}}),n)})))()},open:function(){var e=this;return(0,u.default)((0,o.default)().mark((function t(){return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.$refs.popup.open();case 1:case"end":return t.stop()}}),t)})))()},closeMe:function(e){this.$refs.popup.close()}}};t.default=s}).call(this,n("a9ff")["default"],n("0de9")["log"])},bbbf:function(e,t,n){"use strict";(function(e,i){n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("caad"),n("d3b7"),n("e9c4");var o=a(n("c7eb")),u=a(n("1da1")),r=n("74f6"),d={data:function(){return{isPC:!1}},props:{width:{type:String,default:function(){return"50px"}},height:{type:String,default:function(){return"50px"}},border:{type:Boolean,default:function(){return!1}}},mounted:function(){var t=this;return(0,u.default)((0,o.default)().mark((function n(){return(0,o.default)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.isPC=!["ios","android"].includes(uni.getSystemInfoSync().platform),e("log"," this.isPC",t.isPC,uni.getSystemInfoSync().platform," at uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue:51");case 2:case"end":return n.stop()}}),n)})))()},computed:{hasLogin:function(){return r.store.hasLogin},userInfo:function(){return r.store.userInfo},avatar_file:function(){return r.store.userInfo.avatar_file}},methods:{setAvatarFile:function(e){r.mutations.updateUserInfo({avatar_file:e})},uploadAvatarImg:function(t){var n=this;if(e("log",this.hasLogin," at uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue:71"),!this.hasLogin)return uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/login/login-withoutpwd"});var a={quality:100,width:600,height:600,resize:!0};uni.chooseImage({count:1,crop:a,success:function(){var t=(0,u.default)((0,o.default)().mark((function t(u){var r,d,s,c,l,f;return(0,o.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e("log",u," at uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue:87"),r=u.tempFiles[0],d={extname:r.name.split(".")[r.name.split(".").length-1]},s=u.tempFilePaths[0],n.isPC){t.next=6;break}return t.next=5,new Promise((function(t){uni.navigateTo({url:"/uni_modules/uni-id-pages/pages/userinfo/cropImage/cropImage?path="+s+"&options=".concat(JSON.stringify(a)),animationType:"fade-in",events:{success:function(e){t(e)}},complete:function(t){e("log",t," at uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue:112")}})}));case 5:s=t.sent;case 6:return e("log",n.userInfo," at uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue:118"),c=n.userInfo._id+""+Date.now(),d.name=c,uni.showLoading({title:"更新中",mask:!0}),t.next=12,i.uploadFile({filePath:s,cloudPath:c,fileType:"image"});case 12:l=t.sent,f=l.fileID,d.url=f,e("log",{avatar_file:d}," at uni_modules/uni-id-pages/components/uni-id-pages-avatar/uni-id-pages-avatar.vue:134"),uni.hideLoading(),n.setAvatarFile(d);case 18:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}}};t.default=d}).call(this,n("0de9")["log"],n("a9ff")["default"])},bd81:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 引入uview的scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-popup-dialog[data-v-99b3946c]{width:300px;border-radius:11px;background-color:#fff}.uni-dialog-title[data-v-99b3946c]{display:flex;flex-direction:row;justify-content:center;padding-top:25px}.uni-dialog-title-text[data-v-99b3946c]{font-size:16px;font-weight:500}.uni-dialog-content[data-v-99b3946c]{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:20px}.uni-dialog-content-text[data-v-99b3946c]{font-size:14px;color:#6c6c6c}.uni-dialog-button-group[data-v-99b3946c]{display:flex;flex-direction:row;border-top-color:#f5f5f5;border-top-style:solid;border-top-width:1px}.uni-dialog-button[data-v-99b3946c]{display:flex;flex:1;flex-direction:row;justify-content:center;align-items:center;height:45px}.uni-border-left[data-v-99b3946c]{border-left-color:#f0f0f0;border-left-style:solid;border-left-width:1px}.uni-dialog-button-text[data-v-99b3946c]{font-size:16px;color:#333}.uni-button-color[data-v-99b3946c]{color:#007aff}.uni-dialog-input[data-v-99b3946c]{flex:1;font-size:14px;border:1px #eee solid;height:40px;padding:0 10px;border-radius:5px;color:#555}.uni-popup__success[data-v-99b3946c]{color:#4cd964}.uni-popup__warn[data-v-99b3946c]{color:#f0ad4e}.uni-popup__error[data-v-99b3946c]{color:#dd524d}.uni-popup__info[data-v-99b3946c]{color:#909399}',""]),e.exports=t},ccf7:function(e,t,n){var i=n("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 引入uview的scss */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.input-box[data-v-1681dfa6]  .uni-input-input[type="password"]::-ms-reveal{display:none}.uni-content[data-v-1681dfa6]{padding:0 %?60?%}.login-logo[data-v-1681dfa6]{display:none}@media screen and (min-width:690px){.uni-content[data-v-1681dfa6]{margin:0 auto;position:relative;top:100px;padding:30px 40px 80px 40px;max-width:450px;max-height:450px;border-radius:10px;box-shadow:0 0 20px #efefef;background-color:#fff}.login-logo[data-v-1681dfa6]{display:flex;justify-content:center}.login-logo uni-image[data-v-1681dfa6]{width:60px;height:60px}.register-back[data-v-1681dfa6]{display:none}uni-button[data-v-1681dfa6]{padding-bottom:1px}}.uni-content uni-view[data-v-1681dfa6]{box-sizing:border-box}.title[data-v-1681dfa6]{display:flex;padding:18px 0;font-weight:800;flex-direction:column}.tip[data-v-1681dfa6]{display:flex;color:#bdbdc0;font-size:11px;margin:6px 0}.uni-content[data-v-1681dfa6]  .uni-easyinput__content,\r\n.input-box[data-v-1681dfa6]{height:44px;background-color:#f8f8f8!important;border-radius:0;font-size:14px;display:flex;flex:1}.link[data-v-1681dfa6]{color:#04498c;cursor:pointer}.uni-content[data-v-1681dfa6]  .uni-forms-item__inner{padding-bottom:8px}.uni-btn[data-v-1681dfa6]{text-align:center;height:40px;line-height:40px;margin:15px 0 0 0;color:#fff!important;border-radius:5px}.uni-body.uni_modules-uni-id-pages-pages-login-login-withoutpwd[data-v-1681dfa6]{height:auto!important}uni-view[data-v-1681dfa6]{display:flex}.box[data-v-1681dfa6]{background-color:#fff;height:200px;width:%?750?%;flex-direction:column;border-top-left-radius:15px;border-top-right-radius:15px}.headBox[data-v-1681dfa6]{padding:%?20?%;height:%?80?%;line-height:%?80?%;text-align:left;font-size:16px;color:#333;margin-left:%?15?%}.tip[data-v-1681dfa6]{color:#666;text-align:left;justify-content:center;margin:%?10?% %?30?%;font-size:18px}.btnBox[data-v-1681dfa6]{margin-top:%?45?%;justify-content:center;flex-direction:row}.close[data-v-1681dfa6],\r\n.agree[data-v-1681dfa6]{text-align:center;width:%?200?%;height:%?80?%;line-height:%?80?%;border-radius:5px;margin:0 %?20?%;font-size:14px}.close[data-v-1681dfa6]{color:#999;border-color:#eee;border-style:solid;border-width:1px;background-color:#fff}.close[data-v-1681dfa6]:active{color:#989898;background-color:#e2e2e2}.agree[data-v-1681dfa6]{color:#fff}.agree[data-v-1681dfa6]:active{background-color:#f5f5f6}',""]),e.exports=t},d074:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"取消","uni-popup.ok":"确定","uni-popup.placeholder":"请输入","uni-popup.title":"提示","uni-popup.shareTitle":"分享到"}')},dacf:function(e){e.exports=JSON.parse('{"uni-popup.cancel":"cancel","uni-popup.ok":"ok","uni-popup.placeholder":"pleace enter","uni-popup.title":"Hint","uni-popup.shareTitle":"Share to"}')},e42d:function(e,t,n){"use strict";var i=n("128d"),a=n.n(i);a.a},f280:function(e,t,n){var i=n("ccf7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("a4939ce8",i,!0,{sourceMap:!1,shadowMode:!1})},f60c:function(e,t,n){"use strict";var i=n("1ceb"),a=n.n(i);a.a}}]);