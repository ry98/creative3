webpackJsonp([0],{IqQk:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("7+uW"),s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("label",{staticClass:"show-menu",attrs:{for:"show-menu"}},[e._v("Show Menu")]),e._v(" "),n("input",{attrs:{type:"checkbox",id:"show-menu",role:"button"}}),e._v(" "),n("h1",[e._v("Recipes")]),e._v(" "),n("ul",{attrs:{id:"menu"}},[n("li",[n("router-link",{attrs:{to:"/newr"}},[e._v("Create")])],1),e._v(" "),n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Search")])],1)])])},staticRenderFns:[]};var r={name:"App",components:{AppHeader:n("VU/8")({name:"AppHeader"},s,!1,function(e){n("t8q1")},"data-v-0b4bf01c",null).exports}},a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-header"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=n("VU/8")(r,a,!1,function(e){n("IqQk")},null,null).exports,u=n("/ocq"),c={name:"HomePage",data:function(){return{current:{},loading:!0,value:"chicken",input:""}},created:function(){this.recipe()},methods:{search:function(){this.value=this.input,this.input="",this.recipe()},get_recipe:function(){},recipe:function(){var e=this;fetch("https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=d5c259cb75343029d93022cf126bbaa4&q="+this.value).then(function(e){return e.json()}).then(function(t){return e.current=t.recipes,e.loading=!1,!0}).catch(function(e){loading=!1})}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("body",[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"}}),e._v(" "),n("div",{staticClass:"header"},[n("form",{on:{submit:function(t){t.preventDefault(),e.search(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.input,expression:"input"}],attrs:{type:"text"},domProps:{value:e.input},on:{input:function(t){t.target.composing||(e.input=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Search")])])]),e._v(" "),n("div",[e.loading?n("div",[n("p",[e._v("Loading...")])]):n("div",[n("div",{attrs:{id:"columns"}},e._l(e.current,function(t){return n("div",[n("a",{attrs:{href:t.source_url}},[n("figure",[n("img",{attrs:{src:t.image_url}}),e._v(" "),n("figcaption",[e._v(e._s(t.title))])])])])}))])]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative3"}},[this._v("My Github")])])}]};var p=n("VU/8")(c,l,!1,function(e){n("n5Qk")},"data-v-3a062a4c",null).exports,v={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"todo"},[n("link",{attrs:{href:"https://fonts.googleapis.com/css?family=Raleway",rel:"stylesheet"}}),e._v(" "),e.done?n("div",[n("h1",[e._v("Create Recipe")]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:""===e.ingredients.title,expression:"ingredients.title === ''"}]},[e._v("Add a title!")]),e._v(" "),n("p",[e._v(e._s(e.title))]),n("p"),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.changeTitle(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messagetitle,expression:"messagetitle"}],attrs:{type:"text"},domProps:{value:e.messagetitle},on:{input:function(t){t.target.composing||(e.messagetitle=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Add Title")])]),e._v(" "),n("ul",e._l(e.ingredients,function(t){return n("li",[e._v(e._s(t.text)+"\n    ")])})),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:0===e.ingredients.length,expression:"ingredients.length === 0"}]},[e._v("Add an ingredient!")]),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.addIngredient(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messageingredient,expression:"messageingredient"}],attrs:{type:"text"},domProps:{value:e.messageingredient},on:{input:function(t){t.target.composing||(e.messageingredient=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Add Ingredient")])]),e._v(" "),n("ol",e._l(e.steps,function(t){return n("li",[e._v(e._s(t.text)+"\n    ")])})),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:0===e.steps.length,expression:"steps.length === 0"}]},[e._v("Add a step!")]),e._v(" "),n("form",{on:{submit:function(t){t.preventDefault(),e.addStep(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.messagestep,expression:"messagestep"}],attrs:{type:"text"},domProps:{value:e.messagestep},on:{input:function(t){t.target.composing||(e.messagestep=t.target.value)}}}),e._v(" "),n("button",{attrs:{type:"submit"}},[e._v("Add Step")])]),e._v(" "),n("div",{staticClass:"bu"},[n("button",{staticClass:"bu",on:{click:e.finish}},[e._v("Finish")])])]):n("div",[n("h1",[e._v("Finished Recipe")]),e._v(" "),n("h2",[e._v(e._s(e.title))]),e._v(" "),n("p",[e._v("Ingredients:")]),e._v(" "),n("ul",e._l(e.ingredients,function(t){return n("li",[e._v(e._s(t.text)+"\n    ")])})),e._v(" "),n("p",[e._v("Steps:")]),e._v(" "),n("ol",e._l(e.steps,function(t){return n("li",[e._v(e._s(t.text)+"\n    ")])}))]),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"footer",staticStyle:{position:"fixed",right:"0",bottom:"0",left:"0",padding:"1rem","background-color":"white","text-align":"center",color:"gray"}},[t("a",{staticStyle:{color:"#666"},attrs:{href:"https://github.com/ry98/creative3"}},[this._v("My Github")])])}]};var d=n("VU/8")({name:"Todo",data:function(){return{title:"",ingredients:[],steps:[],messagetitle:"",messageingredient:"",messagestep:"",done:!0}},computed:{},methods:{addIngredient:function(){this.ingredients.push({text:this.messageingredient}),this.messageingredient=""},addStep:function(){this.steps.push({text:this.messagestep}),this.messagestep=""},changeTitle:function(){this.title=this.messagetitle,this.messagetitle=""},finish:function(){this.done=!1}}},v,!1,function(e){n("VRRy")},"data-v-f642771c",null).exports;i.a.use(u.a);var m=new u.a({routes:[{path:"/",name:"HomePage",component:p},{path:"/newr",name:"newr",component:d}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:m,components:{App:o},template:"<App/>"})},VRRy:function(e,t){},n5Qk:function(e,t){},t8q1:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.424814d4cf888018b275.js.map