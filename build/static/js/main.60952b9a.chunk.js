(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(43)},31:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(20),o=a.n(r),s=(a(31),a(4)),l=a(5),m=a(7),i=a(6),d=a(8),u=a(45),p=a(47),h=a(46),b=a(10),E=(a(36),a(44)),_=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.count>0?c.a.createElement("div",{className:"select-box select-box-red"},"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 ",c.a.createElement("span",{className:"count-in-cart"},this.props.count)," ",this.props.count>1?"\u0442\u043e\u0432\u0430\u0440\u0430":"\u0442\u043e\u0432\u0430\u0440",c.a.createElement(E.a,{className:"cart-link",to:"/shopping_cart"},"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")):c.a.createElement("div",{className:"select-box"},"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0442\u043c\u0435\u0442\u044c\u0442\u0435 \u0433\u0430\u043b\u043e\u0447\u043a\u0430\u043c\u0438 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432")}}]),t}(n.Component),g=(a(37),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return c.a.createElement("label",{className:"checkbox",htmlFor:"box-"+this.props.id},c.a.createElement("input",{type:"checkbox",onChange:function(){return e.props.onChange(e.props.id)},checked:this.props.checked,id:"box-"+this.props.id}),c.a.createElement("span",{className:"checkbox__rect"},c.a.createElement("span",{className:"checkbox__cross"})))}}]),t}(n.Component)),v=(a(38),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"comments",value:function(e){if(e>0)return c.a.createElement("span",null,c.a.createElement("span",{className:"comment"}),e)}},{key:"trend",value:function(e){return c.a.createElement("span",{className:e>=0?"color-green":"color-red"},e)}},{key:"cost",value:function(e){return c.a.createElement("span",{className:"goods-cost"},String.fromCharCode(8381).repeat(e))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"goods"},c.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),c.a.createElement("table",{className:"goods-table"},c.a.createElement("thead",{className:"goods-table__header"},c.a.createElement("tr",{className:"goods-table__row"},c.a.createElement("th",{className:"goods-table__cell-id"},"#"),c.a.createElement("th",{className:"goods-table__cell-name"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement("th",{className:"goods-table__cell-rate"},"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"),c.a.createElement("th",{className:"goods-table__cell-trend"},"\u0422\u0440\u0435\u043d\u0434"),c.a.createElement("th",{className:"goods-table__cell-cost"},"\u0426\u0435\u043d\u043e\u0432\u043e\u0439 \u0441\u0435\u0433\u043c\u0435\u043d\u0442"),c.a.createElement("th",{className:"goods-table__cell-comment"},"\u041e\u0442\u0437\u044b\u0432\u044b \u043f\u043e\u043a\u0443\u043f\u0430\u0442\u0435\u043b\u0435\u0439"),c.a.createElement("th",{className:"goods-table__cell-cart"},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))),c.a.createElement("tbody",{className:"goods-table__body"},this.props.goods.map(function(t){return c.a.createElement("tr",{className:"goods-table__row",key:"row-"+t.id},c.a.createElement("td",{className:"goods-table__cell-id"},t.id),c.a.createElement("td",{className:"goods-table__cell-name"},t.title),c.a.createElement("td",{className:"goods-table__cell-rate"},t.rate),c.a.createElement("td",{className:"goods-table__cell-trend"},e.trend(t.trend)),c.a.createElement("td",{className:"goods-table__cell-cost"},e.cost(t.cost)),c.a.createElement("td",{className:"goods-table__cell-comment"},e.comments(t.comment)),c.a.createElement("td",{className:"goods-table__cell-cart"},c.a.createElement(g,{onChange:e.props.changeItemInCart,checked:-1!==e.props.cart.indexOf(t.id),id:t.id})))}))),c.a.createElement(_,{count:this.props.cart.length}))}}]),t}(n.Component));function f(e){return{type:"CHANGE_ITEM_IN_CART",id:e}}var N=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(v,{goods:this.props.goods,cart:this.props.cart,changeItemInCart:this.props.changeItemInCart})}}]),t}(n.Component),O={changeItemInCart:f},j=Object(b.b)(function(e){return{goods:e.goods,cart:e.cart}},O)(N),y=(a(39),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"advantage"},c.a.createElement("h2",{className:"advantage__header"},"\u041f\u0440\u0435\u0438\u043c\u0443\u0449\u0435\u0441\u0442\u0432\u0430 \u043f\u043e\u043a\u0443\u043f\u043e\u043a \u0443 \u043d\u0430\u0441"),c.a.createElement("div",{className:"advantage_container"},c.a.createElement("div",{className:"advantage__item"},c.a.createElement("span",{className:"advantage__num"},"1"),c.a.createElement("div",{className:"advantage__text"},"\u041c\u044b \u043a\u043b\u0430\u0441\u0441\u043d\u044b\u0435.")),c.a.createElement("div",{className:"advantage__item"},c.a.createElement("span",{className:"advantage__num"},"2"),c.a.createElement("div",{className:"advantage__text"},"\u041c\u044b \u043a\u043b\u0430\u0441\u0441\u043d\u044b\u0435 \u0438 \u043e\u0447\u0435\u043d\u044c-\u043e\u0447\u0435\u043d\u044c \u043a\u0440\u0443\u0442\u044b\u0435")),c.a.createElement("div",{className:"advantage__item"},c.a.createElement("span",{className:"advantage__num"},"3"),c.a.createElement("div",{className:"advantage__text"},"\u0414\u0430\u0436\u0435 \u0441\u043b\u043e\u0436\u043d\u043e \u043d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432\u0441\u044e \u043d\u0430\u0448\u0443 \u043a\u0440\u0443\u0442\u043e\u0441\u0442\u044c :)"))),c.a.createElement("div",{className:"advantage__arrow"}),c.a.createElement("div",{className:"advantage__footer"},"\u0418 \u0432\u0441\u0451 \u044d\u0442\u043e - \u0434\u043b\u044f \u0432\u0430\u0441!"))}}]),t}(n.Component)),k=(a(40),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"cartEmpty",value:function(){return c.a.createElement("div",{className:"cart"},c.a.createElement("h1",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"),c.a.createElement(y,null))}},{key:"cartNoEmpty",value:function(){var e=this,t=this.props.cart.length,a=this.props.cart.map(function(t){return e.props.goods.find(function(e){return e.id===t}).title}).join(", ");return c.a.createElement("div",{className:"cart"},c.a.createElement("h1",null,"\u0412\u0430\u0448\u0438 \u0442\u043e\u0432\u0430\u0440\u044b"),c.a.createElement("div",{className:"cart__content"},"\u0412\u044b \u0432\u044b\u0431\u0440\u0430\u043b\u0438 ",t," ",t>1?"\u0442\u043e\u0432\u0430\u0440\u0430":"\u0442\u043e\u0432\u0430\u0440",": ",c.a.createElement("span",{className:"cart__goods"},a)),c.a.createElement(y,null))}},{key:"render",value:function(){return 0===this.props.cart.length?this.cartEmpty():this.cartNoEmpty()}}]),t}(n.Component)),C=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement(k,{goods:this.props.goods,cart:this.props.cart})}}]),t}(n.Component),w={changeItemInCart:f},x=Object(b.b)(function(e){return{goods:e.goods,cart:e.cart}},w)(C),I=a(12),A=a(23),T=a(24);var B=Object(I.b)(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_ITEM_IN_CART":return Object(T.a)({},e,{cart:-1===e.cart.indexOf(t.id)?[].concat(Object(A.a)(e.cart),[t.id]):e.cart.filter(function(e){return t.id!==e})});default:return e}},{goods:[{id:1,title:"\u0421\u0443\u043f\u0435\u0440-\u0442\u043e\u0432\u0430\u0440",rate:2.87,trend:"-",cost:4,comment:5},{id:2,title:"\u0422\u043e\u0436\u0435 \u0445\u043e\u0440\u043e\u0448\u0438\u0439 \u0442\u043e\u0432\u0430\u0440",rate:1.94,trend:"+14",cost:4,comment:0},{id:3,title:"\u041d\u0435\u043f\u043b\u043e\u0445\u043e\u0439 \u0442\u043e\u0432\u0430\u0440",rate:1.69,trend:"+4",cost:3,comment:0},{id:4,title:"\u041f\u043b\u043e\u0445\u043e\u0439 \u0442\u043e\u0432\u0430\u0440",rate:18.69,trend:"-4",cost:5,comment:0},{id:5,title:"\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u044b\u0439 \u0442\u043e\u0432\u0430\u0440",rate:8.69,trend:"-14",cost:1,comment:20}],cart:[]}),G=(a(41),function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b.a,{store:B},c.a.createElement(u.a,null,c.a.createElement("main",{className:"container"},c.a.createElement(p.a,null,c.a.createElement(h.a,{exact:!0,path:"/",component:j}),c.a.createElement(h.a,{path:"/goods",component:j}),c.a.createElement(h.a,{path:"/shopping_cart",component:x}))))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.60952b9a.chunk.js.map