(function(t){function e(e){for(var s,i,o=e[0],l=e[1],c=e[2],m=0,d=[];m<o.length;m++)i=o[m],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&d.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);u&&u(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],s=!0,o=1;o<a.length;o++){var l=a[o];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={app:0},r=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4689:function(t,e,a){t.exports=a.p+"img/vpnimages.37bf0379.jpeg"},"4d6e":function(t,e,a){"use strict";var s=a("8ee5"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"inspire"}},[a("v-navigation-drawer",{attrs:{app:"",clipped:"",right:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),a("v-list",{attrs:{dense:""}},t._l(t.menuItems,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1),t.userLogedIn?a("v-list",{attrs:{dense:""}},[a("v-list-item",{attrs:{to:"/"},on:{click:t.logout}},[a("v-list-item-action",[a("v-icon",[t._v("person")])],1),a("v-list-item-content",[a("v-list-item-title",[t._v("logout")])],1)],1)],1):t._e(),t.userLogedIn?t._e():a("v-list",{attrs:{dense:""}},t._l(t.authItems,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link}},[a("v-list-item-action",[a("v-icon",[t._v(t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-app-bar",{attrs:{app:"","clipped-left":""}},[a("v-toolbar-title",{staticClass:"ml-8"},[a("a",{attrs:{href:"/"}},[t._v("LinkToWorld")])]),a("v-spacer"),a("v-toolbar-items",{staticClass:"hidden-md-and-down"},[t._l(t.menuItems,(function(e){return a("v-btn",{key:e.title,attrs:{flat:"",to:e.link,large:""}},[a("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)})),t._l(t.authItems,(function(e){return a("v-btn",{key:e.title,attrs:{flat:"",to:e.link,large:""}},[t.userLogedIn?t._e():a("div",[a("v-icon",{attrs:{left:"",dark:""}},[t._v(t._s(e.icon))]),t._v(" "+t._s(e.title)+" ")],1)])})),a("v-btn",{attrs:{flat:"",large:""},on:{click:t.logout}},[t.userLogedIn?a("div",[a("v-icon",{attrs:{left:"",dark:""}},[t._v("person")]),t._v(" logout ")],1):t._e()])],2),a("v-spacer"),a("v-spacer"),a("v-app-bar-nav-icon",{staticClass:"hidden-md-and-up",on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}})],1),a("v-content",[a("router-view")],1),a("v-footer",{staticClass:"justify-center",attrs:{app:""}},[a("span",[t._v("© 2020 LinkToWorld project")])])],1)},r=[],i={name:"App",data:function(){return{drawer:null,menuItems:[{icon:"home",title:"Home  主頁",link:"/"},{icon:"local_offer",title:"Product 產品",link:"/product"},{icon:"person",title:"Contact聯絡我們",link:"/contact"}],authItems:[{icon:"arrow_upward",title:"Sign up   註冊",link:"/signup"},{icon:"lock_open",title:"login 登入",link:"/login"}]}},computed:{userLogedIn:function(){return this.$store.getters.user}},methods:{drawerfalse:function(){this.drawer=!1},logout:function(){this.$store.dispatch("signOutAction"),this.$router.push("/")}},created:function(){this.$vuetify.theme.dark=!0,this.drawerfalse()}},o=i,l=(a("4d6e"),a("2877")),c=a("6544"),u=a.n(c),m=a("7496"),d=a("40dc"),v=a("5bc1"),p=a("8336"),f=a("a75b"),h=a("553a"),b=a("132d"),g=a("8860"),x=a("da13"),w=a("1800"),_=a("5d23"),V=a("f774"),y=a("2fa4"),k=a("2a7f"),I=Object(l["a"])(o,n,r,!1,null,"2d495aa5",null),C=I.exports;u()(I,{VApp:m["a"],VAppBar:d["a"],VAppBarNavIcon:v["a"],VBtn:p["a"],VContent:f["a"],VFooter:h["a"],VIcon:b["a"],VList:g["a"],VListItem:x["a"],VListItemAction:w["a"],VListItemContent:_["a"],VListItemTitle:_["c"],VNavigationDrawer:V["a"],VSpacer:y["a"],VToolbarItems:k["a"],VToolbarTitle:k["b"]});var j=a("8c4f"),S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"mx-auto",attrs:{elevation:"24","max-width":"444"}},[a("v-system-bar",{attrs:{"lights-out":""}}),a("v-carousel",{attrs:{interval:"3000",continuous:!0,cycle:t.cycle,"show-arrows":!1,"hide-delimiter-background":"","delimiter-icon":"mdi-minus",height:"170"}},t._l(t.slides,(function(t,e){return a("v-carousel-item",{key:e,attrs:{src:t}})})),1),a("v-list",{attrs:{"two-line":""}},[a("v-list-item",[a("v-list-item-avatar",[a("v-img",{attrs:{src:"https://cdn.unwire.hk/wp-content/uploads/2019/10/Best-Free-VPN-3-920x613.jpg"}})],1),a("v-list-item-content",[a("v-list-item-title",[t._v("LinkToWorld.tech")]),a("v-list-item-subtitle",[t._v("Creator")]),a("v-list-item-title",[t._v("Providing a stable service")])],1)],1)],1)],1)],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-card",{staticClass:"mt-6",attrs:{rounded:"",outlined:""}},[a("v-card-title",{staticClass:"mb-2"},[a("div",{staticClass:"questrial body-2 font-weight-bold"},[t._v("Announcements 公告區")]),a("v-spacer"),a("v-btn",{attrs:{to:"/product",small:""}},[a("v-icon",{attrs:{small:""}},[t._v("open_in_new")])],1)],1),a("v-divider"),a("v-expansion-panels",{attrs:{popout:""}},t._l(t.news,(function(e,s){return a("v-expansion-panel",{key:s},[a("v-expansion-panel-header",[t._v(t._s(e.title))]),a("v-expansion-panel-content",[t._v(" "+t._s(e.content)+" ")])],1)})),1)],1)],1)],1)],1)},E=[],A={data:function(){return{show:!1,news:[{title:"We are now testing features and will release soon!",content:"vpn news test"},{title:"news2",content:"vpn news test2"}],cycle:!0,slides:["https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg","https://affnotes.com/wp-content/uploads/2018/05/vpn-guide.jpg","https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg","https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg","https://i.epochtimes.com/assets/uploads/2018/01/7f680532e307b97a065e73919e4454c6-600x400.jpg"]}},created:function(){}},L=A,P=a("b0af"),T=a("99d9"),O=a("5e66"),$=a("3e35"),q=a("a523"),R=a("ce7e"),B=a("cd55"),F=a("49e2"),W=a("c865"),N=a("0393"),U=a("0e8f"),D=a("adda"),M=a("a722"),z=a("8270"),H=a("afd9"),G=Object(l["a"])(L,S,E,!1,null,null,null),J=G.exports;u()(G,{VBtn:p["a"],VCard:P["a"],VCardTitle:T["b"],VCarousel:O["a"],VCarouselItem:$["a"],VContainer:q["a"],VDivider:R["a"],VExpansionPanel:B["a"],VExpansionPanelContent:F["a"],VExpansionPanelHeader:W["a"],VExpansionPanels:N["a"],VFlex:U["a"],VIcon:b["a"],VImg:D["a"],VLayout:M["a"],VList:g["a"],VListItem:x["a"],VListItemAvatar:z["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:y["a"],VSystemBar:H["a"]});var K=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"mx-auto my-4 pa-0",attrs:{"max-width":"450"}},[s("v-img",{staticClass:"align-end",attrs:{src:a("4689"),"aspect-ratio":16/9,height:"150px"}},[s("v-card-title",[t._v("LinkToWorld VPN Service")])],1),s("v-card-title",[s("div",{staticClass:"display-5"},[t._v("LinkToWorld VPN 跨域服務")]),s("div",{staticClass:"title font-weight-regular grey--text mb-0"},[t._v("Ability to search and sending messages without location restrictions!")])]),s("v-row",{staticClass:"px-4 grey--text mb-0",attrs:{align:"center"}},[s("v-avatar",{staticClass:"mr-4",attrs:{size:"70"}},[s("v-img",{attrs:{src:"https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/rocket-512.png",contain:""}})],1),s("span",[t._v("我們的VPN有速度保證,價格也只要市場價的一半！")])],1),s("v-card-title",{staticClass:"justify-center display-5 mt-0"},[s("v-btn",[t._v(" 即將開放試營運")])],1),s("v-divider",{staticClass:"my-0 mx-4"}),s("v-card-text",{attrs:{align:"center"}},[s("v-chip",{staticClass:"ma-0"},[s("v-icon",{attrs:{left:""}},[t._v("vpn_key")]),t._v(" Choose plan ")],1)],1)],1)},Q=[],Y={},X=Y,Z=a("8212"),tt=a("cc20"),et=a("0fd9"),at=Object(l["a"])(X,K,Q,!1,null,null,null),st=at.exports;u()(at,{VAvatar:Z["a"],VBtn:p["a"],VCard:P["a"],VCardText:T["a"],VCardTitle:T["b"],VChip:tt["a"],VDivider:R["a"],VIcon:b["a"],VImg:D["a"],VRow:et["a"]});var nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("div",[t.error?a("div",{staticClass:"error"},[t._v(t._s(t.error.message))]):t._e(),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{attrs:{wrap:"",row:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"mx-7",attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"mx-7",attrs:{counter:10,rules:t.nameRules,label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-layout",{attrs:{wrap:"",row:"","justify-center":""}},[a("v-flex",{attrs:{xs2:"",sm1:""}},[a("v-btn",{staticClass:"body-2",attrs:{small:"",color:"success"},on:{click:t.submit}},[t._v("Submit")])],1)],1)],1)],1)])},rt=[],it=(a("ac1f"),a("5319"),{data:function(){return{drawer:null,password:"",error:"",valid:!0,nameRules:[function(t){return!!t||"password is required"},function(t){return t&&t.length>=10||"password must be more than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},methods:{submit:function(){var t={email:this.email,password:this.password};this.$store.dispatch("signUpAction",t).then(this.$router.replace("/"))}}}),ot=it,lt=(a("c390"),a("4bd4")),ct=a("8654"),ut=Object(l["a"])(ot,nt,rt,!1,null,"21bb38d0",null),mt=ut.exports;u()(ut,{VBtn:p["a"],VContainer:q["a"],VFlex:U["a"],VForm:lt["a"],VLayout:M["a"],VTextField:ct["a"]});var dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[t.error?a("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),a("v-form",{ref:"form",staticClass:"my-10",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-layout",{attrs:{wrap:"",row:""}},[a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"mx-2",attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("v-flex",{attrs:{xs12:"",sm6:""}},[a("v-text-field",{staticClass:"mx-2",attrs:{counter:10,rules:t.nameRules,label:"Password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("v-layout",{attrs:{wrap:"",row:""}},[a("v-flex",{attrs:{xs2:"",sm4:""}},[a("v-select",{staticClass:"mx-2",attrs:{items:t.items,rules:[function(t){return!!t||"Item is required"}],label:"Item",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}})],1),a("v-flex",{attrs:{xs3:"",sm3:""}},[a("v-checkbox",{attrs:{id:"agree",rules:[function(t){return!!t||"You must agree to continue!"}],label:"Do you agree?",required:""},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),a("v-flex",{attrs:{xs3:"",sm2:""}},[a("v-btn",{staticClass:"mt-3 mr-3",attrs:{color:"success",small:""},on:{click:function(e){return t.pressed()}}},[t._v("Submit")])],1),a("v-flex",{attrs:{xs4:"",sm3:""}},[a("v-btn",{staticClass:"mt-3",attrs:{color:"success",small:""},on:{click:function(e){return t.google()}}},[t._v("Google login")])],1)],1),a("v-layout",{attrs:{wrap:"",row:"","justify-center":""}},[a("v-flex",{attrs:{sm6:"",xs0:""}}),a("v-flex",{attrs:{sm2:"",xs3:""}},[a("v-btn",{staticClass:"mr-3 ml-1",attrs:{disabled:!t.valid,color:"success",small:""},on:{click:t.validate}},[t._v(" Validate ")])],1),a("v-flex",{attrs:{sm2:"",xs4:""}},[a("v-btn",{staticClass:"body-2 ml-2",attrs:{color:"error",small:""},on:{click:t.reset}},[t._v(" Reset Form ")])],1),a("v-flex",{attrs:{sm2:"",xs5:""}},[a("v-btn",{staticClass:"mr-0",attrs:{color:"warning",small:""},on:{click:t.resetValidation}},[t._v(" Reset Validation ")])],1)],1)],1)],1)},vt=[],pt={data:function(){return{password:"",error:"",valid:!0,nameRules:[function(t){return!!t||"password is required"},function(t){return t&&t.length>=10||"password must be more than 10 characters"}],email:"",emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],select:null,items:["Item 1","Item 2","Item 3","Item 4"],checkbox:!1}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()},pressed:function(){var t={email:this.email,password:this.password};this.$store.dispatch("signInAction",t).then(this.$router.replace("/"))},google:function(){this.$store.dispatch("googleSignInAction").then(this.$router.replace("/"))}}},ft=pt,ht=(a("f489"),a("ac7c")),bt=a("b974"),gt=Object(l["a"])(ft,dt,vt,!1,null,"7e77d0b0",null),xt=gt.exports;u()(gt,{VBtn:p["a"],VCheckbox:ht["a"],VContainer:q["a"],VFlex:U["a"],VForm:lt["a"],VLayout:M["a"],VSelect:bt["a"],VTextField:ct["a"]});var wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("bitcoin")])},_t=[],Vt={name:"",components:{}},yt=Vt,kt=Object(l["a"])(yt,wt,_t,!1,null,null,null),It=kt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{wrap:"",color:"grey"}},[a("v-form",{ref:"form",staticClass:"mt-10",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[t._v(" We will respond to your email ASAP. 我們將會盡快由電子信箱和您聯絡 "),a("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Name 姓名",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail 電子信箱",required:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),a("v-select",{attrs:{items:t.items,rules:[function(t){return!!t||"This selection is required 請輸入此項"}],label:"Option 項目",required:""},model:{value:t.select,callback:function(e){t.select=e},expression:"select"}}),a("v-textarea",{attrs:{rules:t.messageRules,"auto-grow":"",filled:"",label:"Message",rows:"1",required:""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),a("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"success"},on:{click:t.validate}},[t._v(" Send 發出 ")])],1)],1)},jt=[],St={data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Name is required 請輸入姓名"},function(t){return t&&t.length<=10||"Name must be less than 10 characters 姓名需小於10個字"}],email:"",emailRules:[function(t){return!!t||"E-mail is required 請輸入電子信箱"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid 請輸入有效電子信箱"}],select:null,items:["Qusetions 問題","Apply 申請","Others 其他"],checkbox:!1,message:"",messageRules:[function(t){return!!t||"Message is required 請輸入訊息"}]}},methods:{validate:function(){this.$refs.form.validate()&&(this.snackbar=!0)}}},Et=St,At=a("a844"),Lt=Object(l["a"])(Et,Ct,jt,!1,null,null,null),Pt=Lt.exports;u()(Lt,{VBtn:p["a"],VContainer:q["a"],VForm:lt["a"],VSelect:bt["a"],VTextField:ct["a"],VTextarea:At["a"]});var Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto my-3",attrs:{"max-width":"450"}},[a("v-toolbar",{attrs:{color:"cyan",dark:""}},[a("v-app-bar-nav-icon"),a("v-toolbar-title",[t._v("Inbox")]),a("v-spacer")],1),a("v-list",{attrs:{"three-line":""}},[t._l(t.items,(function(e,s){return[e.header?a("v-subheader",{key:e.header,domProps:{textContent:t._s(e.header)}}):e.divider?a("v-divider",{key:s,attrs:{inset:e.inset}}):a("v-list-item",{key:e.title,attrs:{to:"/chatbox",target:"_blank"},on:{click:function(e){return t.messageShow()}}},[a("v-list-item-avatar",[a("v-img",{attrs:{src:e.avatar}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.name)}}),a("v-list-item-subtitle",[a("span",{},[t._v(t._s(e.content))])])],1)],1)]}))],2)],1)},Ot=[],$t={data:function(){return{items:[{header:"Today"},{name:"1",avatar:"https://cdn.vuetifyjs.com/images/lists/1.jpg",title:"Brunch this weekend?",subtitle:"",content:"I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"},{divider:!0,inset:!0},{name:"2",avatar:"https://cdn.vuetifyjs.com/images/lists/2.jpg",title:"Summer BBQ ",subtitle:"to Alex, Scott, Jennifer  ",content:"Wish I could come, but I'm out of town this weekend."},{divider:!0,inset:!0},{name:"3",avatar:"https://cdn.vuetifyjs.com/images/lists/3.jpg",title:"Oui oui",subtitle:"Sandra Adams  ",content:"Do you have Paris recommendations? Have you ever been?"},{divider:!0,inset:!0},{name:"4",avatar:"https://cdn.vuetifyjs.com/images/lists/4.jpg",title:"Birthday gift",subtitle:"Trevor Hansen  ",content:"Have any ideas about what we should get Heidi for her birthday?"},{divider:!0,inset:!0},{name:"5",avatar:"https://cdn.vuetifyjs.com/images/lists/5.jpg",title:"Recipe to try",subtitle:"Britta Holt  ",content:"We should eat this: Grate, Squash, Corn, and tomatillo Tacos."}],tempUsername:"",tempMessage:""}},methods:{messageShow:function(){}}},qt=$t,Rt=a("e0c7"),Bt=a("71d9"),Ft=Object(l["a"])(qt,Tt,Ot,!1,null,null,null),Wt=Ft.exports;u()(Ft,{VAppBarNavIcon:v["a"],VCard:P["a"],VDivider:R["a"],VImg:D["a"],VList:g["a"],VListItem:x["a"],VListItemAvatar:z["a"],VListItemContent:_["a"],VListItemSubtitle:_["b"],VListItemTitle:_["c"],VSpacer:y["a"],VSubheader:Rt["a"],VToolbar:Bt["a"],VToolbarTitle:k["b"]});var Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("chatbox")])},Ut=[],Dt={name:"",components:{}},Mt=Dt,zt=Object(l["a"])(Mt,Nt,Ut,!1,null,null,null),Ht=zt.exports,Gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h1",[t._v("profile")])},Jt=[],Kt={components:{},data:function(){},created:function(){}},Qt=Kt,Yt=Object(l["a"])(Qt,Gt,Jt,!1,null,null,null),Xt=Yt.exports;s["a"].use(j["a"]);var Zt=[{path:"/",name:"home",component:J},{path:"/product",name:"product",component:st},{path:"/signup",name:"signup",component:mt},{path:"/login",name:"login",component:xt},{path:"/bitcoin",name:"bicoin",component:It},{path:"/contact",name:"contact",component:Pt},{path:"/chat",name:"chat",component:Wt},{path:"/chatbox",name:"chatbox",component:Ht},{path:"/profile",name:"profile",component:Xt,meta:{requiresAuth:!0}}],te=new j["a"]({mode:"history",base:"/",routes:Zt}),ee=te,ae=a("f309");s["a"].use(ae["a"]);var se=new ae["a"]({}),ne=a("bc3a"),re=a.n(ne),ie=a("59ca"),oe=a.n(ie),le=a("2f62");a("ea7b");s["a"].use(le["a"]);var ce=new le["a"].Store({state:{user:null,status:null,error:null},mutations:{setUser:function(t,e){t.user=e},removeUser:function(t){t.user=null},setStatus:function(t,e){t.status=e},setError:function(t,e){t.error=e}},actions:{signUpAction:function(t,e){var a=t.commit;a("setStatus","loading"),oe.a.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){a("setUser",t.user.uid),a("setStatus","success"),a("setError",null)})).catch((function(t){a("setStatus","failure"),a("setError",t.message)}))},signInAction:function(t,e){var a=t.commit;oe.a.auth().signInWithEmailAndPassword(e.email,e.password).then((function(t){a("setUser",t.user.uid),a("setStatus","success"),a("setError",null)})).catch((function(t){a("setStatus","failure"),a("setError",t.message)}))},googleSignInAction:function(t){var e=t.commit,a=new oe.a.auth.GoogleAuthProvider;oe.a.auth().signInWithPopup(a).then((function(t){e("setUser",t.user.uid)})).catch((function(t){return alert(t)}))},signOutAction:function(t){var e=t.commit;oe.a.auth().signOut().then((function(){e("setUser",null),e("setStatus","success"),e("setError",null)})).catch((function(t){e("setStatus","failure"),e("setError",t.message)}))}},getters:{status:function(t){return t.status},user:function(t){return t.user},error:function(t){return t.error},show:function(t){return t.show},news:function(t){return t.news}}});s["a"].config.productionTip=!1,s["a"].prototype.$axios=re.a;var ue={apiKey:"AIzaSyDxIld6mN-AuzPMl_ktgKgtiGlSxarBF00",authDomain:"linkchattest.firebaseapp.com",databaseURL:"https://linkchattest.firebaseio.com",projectId:"linkchattest",storageBucket:"linkchattest.appspot.com",messagingSenderId:"798585863063",appId:"1:798585863063:web:080699a1f00cca2b4c22d2"};oe.a.initializeApp(ue),new s["a"]({store:ce,router:ee,vuetify:se,render:function(t){return t(C)}}).$mount("#app")},"8ee5":function(t,e,a){},"96dc":function(t,e,a){},ab22:function(t,e,a){},c390:function(t,e,a){"use strict";var s=a("96dc"),n=a.n(s);n.a},f489:function(t,e,a){"use strict";var s=a("ab22"),n=a.n(s);n.a}});
//# sourceMappingURL=app.7b7134cf.js.map