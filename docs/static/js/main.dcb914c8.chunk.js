(this["webpackJsonpapollo-react"]=this["webpackJsonpapollo-react"]||[]).push([[0],{117:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(79),o=t.n(l),c=(t(96),t(80)),i=t(81),u=t(119),s=t(60),m=t(121),d=t(120),p=t(16),E=t(37),g=(t(97),t(90)),h=t(83);function f(){var e=Object(c.a)(["\n  {\n    posts {\n      nodes {\n        guid\n        title\n        content\n        uri\n      }\n    }\n  }\n  "]);return f=function(){return e},e}var v=Object(g.a)({uri:"http://www.secondpage.de/blog/graphql"}),w=Object(h.a)((function(e,n){var t=n.headers;return{headers:Object(i.a)({},t)}})),b=new E.ApolloClient({link:w.concat(v),cache:new E.InMemoryCache});function y(){var e=Object(E.useQuery)(Object(E.gql)(f())),n=e.loading,t=e.error,a=e.data;return n?r.a.createElement("p",null,"Loading..."):t?r.a.createElement("p",null,"Error :( ",JSON.stringify(t)):a.posts.nodes.map((function(e){var n=e.guid,t=e.title,a=e.content;e.uri;return r.a.createElement(d.d,{key:n},r.a.createElement(d.b,null,r.a.createElement(p.a,{flex:"1",textAlign:"left"},t),r.a.createElement(d.c,null)),r.a.createElement(d.e,{pb:4},r.a.createElement("p",{dangerouslySetInnerHTML:{__html:a}})))}))}var O=function(){return r.a.createElement(s.a,null,r.a.createElement(m.a,null),r.a.createElement("div",{className:"App"},r.a.createElement(E.ApolloProvider,{client:b},r.a.createElement("div",null,r.a.createElement(u.a,{variantColor:"green"},"Button"),r.a.createElement(d.a,null,r.a.createElement(y,null))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},91:function(e,n,t){e.exports=t(117)},96:function(e,n,t){},97:function(e,n,t){}},[[91,1,2]]]);
//# sourceMappingURL=main.dcb914c8.chunk.js.map