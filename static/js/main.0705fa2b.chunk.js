(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(4),s=n(5),o=n(9),b=n(8),l=n(1),r=n.n(l),d=n(7),u=n.n(d),j=(n(14),n(0)),p=function(t){var e=t.tabs,n=t.selectedTab,c=t.onClick;return Object(j.jsx)("div",{className:"tabs__buttons",children:e.map((function(t){return Object(j.jsx)("button",{className:u()("tabs__button",{"tabs__button--active":t.id===n}),type:"button",onClick:t.id!==n?function(){return c(t.title,t.id,t.content)}:function(){return 0},children:t.title},t.id)}))})},h=(n(16),[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}]),_=function(t){Object(o.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={title:"Selected tab is ".concat(h[0].title),selectedTab:h[0].id,content:h[0].content},t.onTabSelected=function(e,n,c){t.setState({title:"Selected tab is ".concat(e),selectedTab:n,content:c})},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this.state,e=t.title,n=t.selectedTab,c=t.content;return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"App__tabs",children:[Object(j.jsx)("h1",{className:"App__title",children:e}),Object(j.jsx)(p,{tabs:h,selectedTab:n,onClick:this.onTabSelected}),Object(j.jsx)("p",{className:"App__tab-content",children:c})]})})}}]),n}(r.a.Component),m=_;a.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.0705fa2b.chunk.js.map