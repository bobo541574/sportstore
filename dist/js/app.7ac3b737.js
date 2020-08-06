(function(t){function e(e){for(var r,s,i=e[0],o=e[1],u=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=o;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],s=n("5530"),i=n("2f62"),o={name:"App",methods:Object(s["a"])({},Object(i["b"])(["getData"])),created:function(){this.getData()}},u=o,l=(n("034f"),n("2877")),d=Object(l["a"])(u,a,c,!1,null,null,null),p=d.exports,g=(n("ab8b"),n("1f54"),n("99af"),n("fb6a"),n("2909")),f=(n("96cf"),n("1da1")),b=n("bc3a"),v=n.n(b),h=(n("7db0"),n("c740"),n("13d5"),n("a434"),{namespaced:!0,state:{lines:[]},getters:{itemCount:function(t){return t.lines.reduce((function(t,e){return t+e.quantity}),0)},totalPrice:function(t){return t.lines.reduce((function(t,e){return t+e.quantity*e.product.price}))}},mutations:{addProduct:function(t,e){var n=t.lines.find((function(t){return t.product.id==e.id}));null!=n?n.quantity++:t.lines.push({product:e,quantity:1})},changeQuantity:function(t,e){e.line.quantity=e.quantity},removeProduct:function(t,e){var n=t.lines.findIndex((function(t){return t==e}));n>-1&&t.lines.splice(n,1)}}});r["a"].use(i["a"]);var m="http://localhost:3000",C="".concat(m,"/products"),y="".concat(m,"/categories"),_=new i["a"].Store({strict:!0,modules:{cart:h},state:{products:[],categoriesData:[],productsTotal:0,currentPage:1,pageSize:4,currentCategory:"All"},mutations:{setCurrentPage:function(t,e){t.currentPage=e},setPageSize:function(t,e){t.pageSize=e,t.currentPage=1},setCurrentCategory:function(t,e){t.currentCategory=e,t.currentPage=1},setData:function(t,e){t.products=e.pdata,t.productsTotal=e.pdata.length,t.categoriesData=e.cdata.sort()}},actions:{getData:function(t){return Object(f["a"])(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.a.get(C);case 2:return n=e.sent.data,e.next=5,v.a.get(y);case 5:r=e.sent.data,t.commit("setData",{pdata:n,cdata:r});case 7:case"end":return e.stop()}}),e)})))()}},getters:{productsFilteredByCategory:function(t){return t.products.filter((function(e){return"All"==t.currentCategory||e.category==t.currentCategory}))},processedProducts:function(t,e){var n=(t.currentPage-1)*t.pageSize;return e.productsFilteredByCategory.slice(n,n+t.pageSize)},pageCount:function(t,e){return Math.ceil(e.productsFilteredByCategory.length/t.pageSize)},categories:function(t){return["All"].concat(Object(g["a"])(t.categoriesData))}}}),O=n("8c4f"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col-3 bg-info p-2"},[n("h4",{staticClass:"text-white m-2"},[t._v(" Categories ")]),n("CategoryControls")],1),n("div",{staticClass:"col-9 bg-success p-2"},[n("h4",{staticClass:"text-white text-center m-2"},[t._v(" Products ")]),n("ProductList")],1)])])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col bg-dark text-white"},[n("a",{staticClass:"navbar-brand"},[t._v("SPORT STORE")])])])}],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"col-12"},t._l(t.products,(function(e){return n("div",{key:e.id,staticClass:"card my-1 p-2 bg-light"},[n("h4",[t._v(" "+t._s(e.name)+" "),n("span",{staticClass:"badge badge-warning h6"},[t._v(t._s(e.category))]),n("span",{staticClass:"badge badge-pill badge-primary float-right"},[t._v(" "+t._s(t._f("currency")(e.price))+" ")])]),n("div",{staticClass:"card-text bg-white p-1"},[t._v(t._s(e.description)+" "),n("button",{staticClass:"btn btn-success btn-sm float-right",on:{click:function(n){return t.handleProductAdd(e)}}},[t._v("Add To Cart")])])])})),0),n("div",{staticClass:"col-12"},[n("PageControls")],1)])},w=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col-6 form-group"},[n("select",{staticClass:"form-control",on:{change:t.changePageSize}},[n("option",{attrs:{value:"4"}},[t._v("4 per page")]),n("option",{attrs:{value:"8"}},[t._v("8 per page")]),n("option",{attrs:{value:"12"}},[t._v("12 per page")])])]),n("div",{staticClass:"col-6 text-right"},[n("div",{staticClass:"btn-group mx-2 my-1"},t._l(t.pageNumbers,(function(e){return n("button",{key:e,staticClass:"btn",class:e==t.currentPage?"btn-primary":"btn-secondary",on:{click:function(n){return t.setCurrentPage(e)}}},[t._v(" "+t._s(e)+" ")])})),0)])])},k=[],q=(n("a9e3"),n("d3b7"),n("ddb0"),{name:"PageControls",computed:Object(s["a"])(Object(s["a"])(Object(s["a"])({},Object(i["e"])(["currentPage"])),Object(i["c"])(["pageCount"])),{},{pageNumbers:function(){return Object(g["a"])(Array(this.pageCount+1).keys()).slice(1)}}),methods:Object(s["a"])(Object(s["a"])({},Object(i["d"])(["setCurrentPage","setPageSize"])),{},{changePageSize:function(t){this.setPageSize(Number(t.target.value))}})}),E=q,$=Object(l["a"])(E,S,k,!1,null,"43010b0d",null),T=$.exports,z={components:{PageControls:T},computed:Object(s["a"])({},Object(i["c"])({products:"processedProducts"})),methods:Object(s["a"])(Object(s["a"])({},Object(i["d"])({addProduct:"cart/addProduct"})),{},{handleProductAdd:function(t){this.addProduct(t),this.$router.push("/cart")}})},D=z,R=Object(l["a"])(D,x,w,!1,null,"9aa85810",null),A=R.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},t._l(t.categories,(function(e){return n("div",{key:e,staticClass:"row my-2"},[n("button",{staticClass:"btn btn-block",class:e==t.currentCategory?"btn-primary":"btn-secondary",on:{click:function(n){return t.setCurrentCategory(e)}}},[t._v(" "+t._s(e)+" ")])])})),0)},M=[],N={name:"CategoryControls",computed:Object(s["a"])(Object(s["a"])({},Object(i["e"])(["currentCategory"])),Object(i["c"])(["categories"])),methods:Object(s["a"])({},Object(i["d"])(["setCurrentCategory"]))},Q=N,F=Object(l["a"])(Q,L,M,!1,null,"9b144cf0",null),B=F.exports,I={name:"Store",components:{ProductList:A,CategoryControls:B}},J=I,U=Object(l["a"])(J,j,P,!1,null,"2bcc2828",null),Y=U.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container-fluid"},[t._m(0),n("div",{staticClass:"row"},[n("div",{staticClass:"col mt-2"},[n("h2",{staticClass:"text-center"},[t._v("Your Cart")]),n("table",{staticClass:"table table-bordered table-striped p-2"},[t._m(1),n("tbody",[0==t.lines.length?n("tr",[n("td",{staticClass:"text-center",attrs:{colspan:"4"}},[t._v(" Your cart is empty ")])]):t._e(),t._l(t.lines,(function(e){return n("ShoppingCartLine",{key:e.product.id,attrs:{line:e},on:{quantity:function(n){return t.handleQuantityChange(e,n)},remove:t.remove}})}))],2),t.lines.length>0?n("tfoot",[n("tr",[n("td",{staticClass:"text-right",attrs:{colspan:"3"}},[t._v("Total: ")]),n("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(t.totalPrice))+" ")])])]):t._e()])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"text-center"},[n("router-link",{staticClass:"btn btn-secondary m-1",attrs:{to:"/"}},[t._v(" Continue Shopping ")]),n("router-link",{staticClass:"btn btn-primary m-1",attrs:{to:"/checkout",disabled:0==t.lines.length}},[t._v(" Checkout ")])],1)])])])},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col bg-dark text-white"},[n("a",{staticClass:"navbar-brand"},[t._v(" SPORT STORE ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Quantity")]),n("th",[t._v("Product")]),n("th",{staticClass:"text-right"},[t._v("Price")]),n("th",{staticClass:"text-right"},[t._v("Subtotal")])])])}],K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[n("input",{staticClass:"form-control-sm",staticStyle:{width:"5em"},attrs:{type:"number"},domProps:{value:t.qvalue},on:{input:t.sendChangeEvent}})]),n("td",[t._v(t._s(t.line.product.name))]),n("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(t.line.product.price))+" ")]),n("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("currency")(t.line.quantity*t.line.product.price))+" ")]),n("td",{staticClass:"text-center"},[n("button",{staticClass:"btn btn-sm btn-danger",on:{click:t.sendRemoveEvent}},[t._v(" Remove ")])])])},V=[],W={name:"ShoppingCartLine",props:["line"],data:function(){return{qvalue:this.line.quantity}},methods:{sendChangeEvent:function(t){t.target.value>0?(this.$emit("quantity",Number(t.target.value)),this.qvalue=t.target.value):(this.$emit("quantity",1),this.qvalue=1,t.target.value=this.qvalue)},sendRemoveEvent:function(){this.$emit("remove",this.line)}}},X=W,Z=Object(l["a"])(X,K,V,!1,null,null,null),tt=Z.exports,et={name:"ShoppingCart",components:{ShoppingCartLine:tt},computed:Object(s["a"])(Object(s["a"])({},Object(i["e"])({lines:function(t){return t.cart.lines}})),Object(i["c"])({totalPrice:"cart/totalPrice"})),methods:Object(s["a"])(Object(s["a"])({},Object(i["d"])({change:"cart/changeQuantity",remove:"cart/removeProduct"})),{},{handleQuantityChange:function(t,e){this.change({line:t,quantity:e})}})},nt=et,rt=Object(l["a"])(nt,G,H,!1,null,"ad56459a",null),at=rt.exports;r["a"].use(O["a"]);var ct=new O["a"]({mode:"history",routes:[{path:"/",component:Y},{path:"/cart",component:at},{path:"*",redirect:"/"}]});r["a"].config.productionTip=!1,r["a"].filter("currency",(function(t){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t)})),new r["a"]({render:function(t){return t(p)},store:_,router:ct}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.7ac3b737.js.map