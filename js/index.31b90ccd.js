(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],m=0,p=[];m<i.length;m++)o=i[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],r=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={index:0},s=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("router-view")],1)],1)},s=[],o={name:"App"},i=o,c=a("2877"),l=a("6544"),u=a.n(l),m=a("7496"),p=a("f6c4"),f=Object(c["a"])(i,n,s,!1,null,null,null),d=f.exports;u()(f,{VApp:m["a"],VMain:p["a"]});var v=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"background"},[a("v-app-bar",{staticClass:"pl-1",attrs:{color:"surface",app:"",fixed:""}},[a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.scrollTo("top")}}},[a("v-img",{attrs:{src:"/img/logo.png",height:"28",width:"28","max-width":"28"}})],1),a("v-toolbar-title",{staticClass:"primary--text"},[t._v("tsux.me")]),a("v-spacer"),t.xs?a("div",[a("v-menu",{attrs:{tile:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,n=e.attrs;return[a("v-btn",t._g(t._b({staticClass:"primary--text",attrs:{icon:""}},"v-btn",n,!1),r),[a("v-icon",[t._v("menu")])],1)]}}],null,!1,3214539082)},[a("v-list",{attrs:{color:"background","min-width":"160"}},t._l(t.menuItems,(function(e,r){return a("v-list-item",{key:r,on:{click:function(a){return t.scrollTo(e.ref)}}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"primary--text",domProps:{textContent:t._s(e.name)}})],1)],1)})),1)],1)],1):a("div",{staticClass:"d-flex"},t._l(t.menuItems,(function(e,r){return a("v-btn",{key:r,staticClass:"primary--text",attrs:{text:""},domProps:{textContent:t._s(e.name)},on:{click:function(a){return t.scrollTo(e.ref)}}})})),1)],1),a("div",{staticClass:"mx-auto pa-4 pt-0",staticStyle:{"max-width":"640px"}},[a("v-subheader",{ref:"top",staticClass:"primary--text pt-4"},[t._v("TOP")]),a("v-card",{staticClass:"d-flex flex-column align-center justify-center mb-4 pa-4",attrs:{color:"surface","min-height":"400"}},[a("div",[a("v-avatar",{staticClass:"mt-6",attrs:{size:"84"}},[a("v-img",{attrs:{src:t.profile.image}})],1)],1),a("v-card-title",{domProps:{textContent:t._s(t.profile.name)}}),a("v-card-text",{domProps:{innerHTML:t._s(t.profile.message)}}),a("v-card-actions",t._l(t.profile.socials,(function(e){return a("v-btn",{key:e.name,attrs:{href:e.url,icon:""}},[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)})),1)],1),a("v-subheader",{ref:"works",staticClass:"primary--text"},[t._v("WORKS")]),t._l(t.works,(function(e){return a("v-card",{key:e.name,staticClass:"mb-4 pa-4",attrs:{color:"surface"}},[a("v-list-item",{staticClass:"d-flex align-center"},[a("v-list-item-avatar",{staticClass:"white",attrs:{size:"64",tile:""}},[a("v-img",{attrs:{src:e.image}})],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-wrap",domProps:{textContent:t._s(e.title)}}),a("v-list-item-subtitle",{staticClass:"text-wrap",domProps:{textContent:t._s(e.subtitle)}})],1)],1),a("v-card-text",{domProps:{innerHTML:t._s(e.message)}}),a("v-card-actions",[a("v-spacer"),a("span",[a("v-icon",{attrs:{color:"primary",small:""}},[t._v("open_in_new")]),a("a",{attrs:{href:e.url},domProps:{textContent:t._s(e.url)}})],1)],1)],1)})),a("v-subheader",{ref:"contact",staticClass:"primary--text"},[t._v("CONTACT")]),a("v-card",{staticClass:"mb-4 pa-4",attrs:{color:"surface"}},[a("v-card-title",[t._v("お問い合わせ")]),a("v-card-text",[t._v("どんなことでも一度ご連絡ください。以下のフォームまたは SNS よりお問い合わせいただけます。")]),a("v-form",{ref:"form",staticClass:"px-4"},[a("v-text-field",{attrs:{label:"お名前",rules:t.rules.name},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),a("v-text-field",{attrs:{label:"メールアドレス（返信用）",rules:t.rules.email},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),a("v-textarea",{attrs:{label:"ご用件",rules:t.rules.message,"no-resize":""},model:{value:t.form.message,callback:function(e){t.$set(t.form,"message",e)},expression:"form.message"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",disabled:!t.form.name||!t.form.email||!t.form.message},on:{click:t.submitForm}},[t._v("送信")]),a("v-spacer")],1),a("v-card-text",[t._v("数日経過しても返答のこない場合は、お問い合わせが送信できていない可能性がございます。下記 SNS のいずれかよりご連絡ください。")]),a("v-card-actions",[a("v-spacer"),t._l(t.profile.socials,(function(e){return a("v-btn",{key:e.name,attrs:{href:e.url,icon:""}},[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1)})),a("v-spacer")],2)],1)],2),a("footer",{staticClass:"d-flex align-center py-4"},[a("div",[a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){return t.$store.commit("dark",!t.$store.getters.dark)}}},[a("v-icon",{domProps:{textContent:t._s(t.$store.getters.dark?"nights_stay":"wb_sunny")}})],1)],1),a("v-spacer"),t._m(0)],1)],1)},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"primary--text text-right px-6"},[a("small",[t._v("©️ 2020 Tsukusu Endo")])])}],h=(a("b0c0"),a("d3b7"),a("4d63"),a("ac1f"),a("25f0"),a("96cf"),a("1da1")),x={name:"Top",data:function(){var t=new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);return{menuItems:[{ref:"top",name:"TOP"},{ref:"works",name:"WORKS"},{ref:"contact",name:"CONTACT"}],profile:{image:"https://pbs.twimg.com/profile_images/1351197894381072387/Ecgwh9SR_400x400.jpg",name:"Tsukusu Endo / 遠藤 尽",message:"\n          <p>2000 年生まれ、学生です。\n          <p>フリーランスでエンジニアをやっています。\n          フルスタックな開発でプロダクトリリースをしています。\n          <p>企画や開発が好きで学生企業やベンチャー企業の企画開発に協力しています！\n          <p>起業家として成功するのが夢で、 Joicul という事業を立ち上げました。\n          <p>Python や JavaScript あたりが無難に好きです。Django や Vue, Firebase, AWS などを日々扱います。\n        ",socials:[{name:"GitHub",icon:"fab fa-github-square",url:"https://github.com/tsuxendo"},{name:"Twitter",icon:"fab fa-twitter-square",url:"https://twitter.com/tsuxendo"},{name:"FaceBook",icon:"fab fa-facebook-square",url:"https://facebook.com/tsuxendo"},{name:"Mail",icon:"fas fa-envelope-square",url:"mailto:tsux@tsux.me"}]},works:[{name:"joicul",url:"https://sites.google.com/tsux.me/joicul/",image:"https://joicul.web.app/img/icons/android-chrome-192x192.png",title:"Joicul",subtitle:"エンジニアコミュニティサービス",message:"エンジニアのコミュニティであり、サポートであり、開発チームである。そんな存在を目指して立ち上げた事業です。メンバー用の決済アプリも作成しました。 Joicul 発足以降は個人だけでなく、 Joicul Team という Joicul 事業内の開発チームとしてもサービス開発を行います。 ( 2020/11 ~ )"},{name:"comame",url:"https://commercial-and-me.com/",image:"https://commercial-and-me.com/img/ogp.png",title:"comame ホームページ",subtitle:"広告をもっと面白くする",message:"「広告をもっと面白くする」をモットーにした学生の事業、comame で企画開発を担当 ( 2020/4 ~ ) し、ホームページの制作を行いました ( 2021/1 )"},{name:"coursevalu",url:"https://app.coursevalu.com/",image:"https://app.coursevalu.com/img/icons/android-chrome-192x192.png",title:"courseVALU",subtitle:"大学用匿名コミュニティサービス（courseVALU合同会社）",message:"coursevalu 合同会社様で業務委託ながら CTO として仕事をさせていただき、サービス開発を行っています。 ( 2020/05 ~ )"},{name:"otobanana",url:"https://otobanana.com/",image:"https://otobanana.com/img/logo.png",title:"OTOBANANA",subtitle:"成人向け音声配信サービス（otonomics株式会社）",message:"otonomics 株式会社様で業務委託ながら CTO として仕事をさせていただき、サービス開発を行っています。 ( 2020/04 ~ )"},{name:"syumidia",url:"https://syumidia.com/",image:"https://syumidia-assets.s3.amazonaws.com/static/img/logo.png",title:"趣midia",subtitle:"趣味探しを応援するメディア",message:"個人からのご依頼で、趣味探しを応援するメディアサイトのデザイン・開発を行いました。 ( 2020/05 )"},{name:"kyodaibuken",url:"https://kyobuken.com/",image:"https://kyobuken.com/static/img/favicon.ico",title:"京大舞研",subtitle:"京都大学舞踏研究会 ホームページ",message:"京都大学舞踏研究会からのご依頼で、ホームページのデザイン・開発を行いました。 ( 2020/04 )"}],form:{name:"",email:"",message:""},rules:{name:[function(t){return!!t||"お名前を入力してください"}],email:[function(e){return t.test(e)||"メールアドレスが正しくありません"}],message:[function(t){return!!t||"ご用件を入力してください"}]}}},methods:{scrollTo:function(t){var e=this.$refs[t].$el;window.scrollTo({top:e.offsetTop,behavior:"smooth"})},submitForm:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.$refs.form.validate()){e.next=2;break}return e.abrupt("return");case 2:if(a=window.confirm("お問い合わせを送信しますか？"),a){e.next=5;break}return e.abrupt("return");case 5:for(n in e.prev=5,r=new FormData,t.form)r.append(n,t.form[n]);return e.next=10,t.sendToFormspree(r);case 10:alert("お問い合わせを送信しました"),t.$refs.form.reset(),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](5),alert("\n          送信に失敗しました。入力が間違っていないか確認してください。\n\n          それでも送信に失敗する場合は、時間を置いてもう一度送信していただくか、 SNS よりご連絡ください。\n        ");case 17:case"end":return e.stop()}}),e,null,[[5,14]])})))()},sendToFormspree:function(t){return new Promise((function(e,a){var r="https://formspree.io/f/xleoppvg",n=new XMLHttpRequest;n.open("POST",r),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?e(n.response):a(new Error(n.status)))},n.send(t)}))}},computed:{xs:function(){return"xs"===this.$vuetify.breakpoint.name}}},y=x,k=a("40dc"),_=a("8212"),w=a("8336"),C=a("b0af"),T=a("99d9"),O=a("4bd4"),V=a("132d"),S=a("adda"),P=a("8860"),j=a("da13"),A=a("8270"),$=a("5d23"),L=a("e449"),M=a("2fa4"),I=a("e0c7"),E=a("8654"),F=a("a844"),R=a("2a7f"),J=Object(c["a"])(y,b,g,!1,null,null,null),N=J.exports;u()(J,{VAppBar:k["a"],VAvatar:_["a"],VBtn:w["a"],VCard:C["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VForm:O["a"],VIcon:V["a"],VImg:S["a"],VList:P["a"],VListItem:j["a"],VListItemAvatar:A["a"],VListItemContent:$["a"],VListItemSubtitle:$["b"],VListItemTitle:$["c"],VMenu:L["a"],VSpacer:M["a"],VSubheader:I["a"],VTextField:E["a"],VTextarea:F["a"],VToolbarTitle:R["a"]}),r["a"].use(v["a"]);var q=[{path:"/",name:"Top",component:N}],z=new v["a"]({mode:"history",base:"/",routes:q}),H=z,B=a("2f62"),D=a("0e44");r["a"].use(B["a"]);var W=new B["a"].Store({state:{dark:!0},mutations:{dark:function(t,e){t.dark=e}},getters:{dark:function(t){return t.dark}},plugins:[Object(D["a"])({paths:["dark"]})]}),Z=a("f309");a("d1e78"),a("15f5");r["a"].use(Z["a"]);var K=new Z["a"]({icons:{iconfont:"md"},theme:{dark:W.getters.dark,themes:{light:{primary:"#00552e",secondary:"#009952",background:"#f4fff4",surface:"#fff"},dark:{primary:"#009952",secondary:"#00552e",background:"#182c39",surface:"#102531"}}}});r["a"].config.productionTip=!1,new r["a"]({router:H,store:W,vuetify:K,render:function(t){return t(d)}}).$mount("#app")}});
//# sourceMappingURL=index.31b90ccd.js.map