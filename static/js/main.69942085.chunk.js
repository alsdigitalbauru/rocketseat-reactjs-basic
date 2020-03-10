(this.webpackJsonpmodulo05=this.webpackJsonpmodulo05||[]).push([[0],{44:function(n,e,t){n.exports=t(72)},49:function(n,e,t){},72:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(35),i=t.n(o),c=(t(49),t(10)),l=t(8),s=t(11),u=t.n(s),p=t(41),m=t(15),d=t(16),f=t(17),b=t(19),g=t(18),x=t(20),h=t(3),v=t(4);function y(){var n=Object(h.a)(["\n  margin-top: 35px;\n\n  li {\n    display: flex;\n    justify-content: space-between;\n    padding: 15px 0;\n\n    & + li {\n      border-top: solid 1px #eee;\n    }\n\n    a {\n      text-decoration: none;\n    }\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(h.a)(["\n  padding: 10px 15px;\n  background-color: #7159c1;\n  color: #fff;\n  border: 0;\n  border-radius: 4px;\n  margin-left: 15px;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.6;\n  }\n"]);return E=function(){return n},n}function j(){var n=Object(h.a)(["\n  margin-top: 35px;\n  display: flex;\n\n  input {\n    flex-direction: row;\n    flex: 1;\n    font-size: 16px;\n    padding: 10px 15px;\n    border: solid 1px #eee;\n    border-radius: 4px;\n  }\n\n"]);return j=function(){return n},n}var w=v.b.form.attrs((function(n){return{type:"submit",loading:n.loading}}))(j()),O=v.b.button.attrs((function(n){return{type:"submit"}}))(E()),k=v.b.ul(y());function S(){var n=Object(h.a)(["\n  max-width: 700px;\n  background-color: #fff;\n  margin: 80px auto;\n  border-radius: 10px;\n  padding: 35px;\n  box-shadow: 0 0 14px black;\n\n  h1 {\n    display: flex;\n    align-items: center;\n\n    svg {\n      margin-right: 15px;\n    }\n  }\n"]);return S=function(){return n},n}var R=v.b.div(S()),C=t(24),B=t(39),z=t.n(B).a.create({baseURL:"https://api.github.com"}),D=function(n){function e(){var n,t;Object(d.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(b.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={newRepo:"",respositories:[],disableButton:!1},t.onFormSubmit=function(){var n=Object(m.a)(u.a.mark((function n(e){var r,a,o,i,c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.preventDefault(),t.setState({disableButton:!0}),r=t.state,a=r.newRepo,o=r.respositories,n.next=5,z.get("/repos/".concat(a));case 5:i=n.sent,c={name:i.data.full_name},t.setState({respositories:[].concat(Object(p.a)(o),[c]),newRepo:"",disableButton:!1});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),t.onChange=function(n){t.setState({newRepo:n.target.value})},t}return Object(x.a)(e,n),Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("repositories");n&&this.setState({respositories:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n,e){var t=this.state.respositories;e.respositories!==t&&localStorage.setItem("repositories",JSON.stringify(t))}},{key:"render",value:function(){var n=this.state,e=n.newRepo,t=n.respositories,r=n.disableButton;return a.a.createElement(R,null,a.a.createElement("h1",null,a.a.createElement(C.a,null)," Reposit\xf3rios"),a.a.createElement(w,{onSubmit:this.onFormSubmit},a.a.createElement("input",{type:"text",placeholder:"Adicionar Repositorios",value:e,onChange:this.onChange}),a.a.createElement(O,{disabled:r},a.a.createElement(C.b,null))),a.a.createElement(k,null,t.map((function(n){return a.a.createElement("li",{key:n.name},a.a.createElement("span",null,n.name),a.a.createElement(c.b,{to:"/repository/".concat(encodeURIComponent(n.name))},"Detalhes"))}))))}}]),e}(r.Component),I=t(42);function _(){var n=Object(h.a)(["\n  max-width: 360px;\n  background: #fff;\n  border-radius: 10px;\n  padding: 35px;\n  margin: 25% auto;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return _=function(){return n},n}var J=v.b.div(_());function P(){var n=Object(h.a)(["\n  list-style: none;\n  margin-top: 35px;\n\n  li {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    padding: 15px 0;\n\n    & + li {\n      border-top: solid 1px #eee;\n    }\n\n    img {\n      max-height: 80px;\n      margin-right: 25px;\n      border-radius: 50%;\n    }\n\n    span {\n      p {\n        font-size: 14px;\n        color: #8c8c8c;\n      }\n    }\n\n  }\n\n\n"]);return P=function(){return n},n}function U(){var n=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  a {\n    text-decoration: none;\n    margin-bottom: 30px;\n  }\n\n  img {\n    max-height: 160px;\n    border-radius: 50%;\n  }\n\n  h1 {\n    font-size: 26px;\n  }\n\n  p {\n    font-size: 14px;\n    margin-top: 10px;\n    color: #8c8c8c;\n  }\n"]);return U=function(){return n},n}var A=v.b.header(U()),F=v.b.ul(P()),M=function(n){function e(){var n,t;Object(d.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(b.a)(this,(n=Object(g.a)(e)).call.apply(n,[this].concat(a)))).state={repository:{},issues:[],loadingPage:!0},t}return Object(x.a)(e,n),Object(f.a)(e,[{key:"componentDidMount",value:function(){var n=Object(m.a)(u.a.mark((function n(){var e,t,r,a,o,i;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=this.props.match,t=decodeURIComponent(e.params.repository),n.next=4,Promise.all([z.get("/repos/".concat(t)),z.get("/repos/".concat(t,"/issues"))]);case 4:r=n.sent,a=Object(I.a)(r,2),o=a[0],i=a[1],this.setState({repository:o.data,issues:i.data,loadingPage:!1});case 9:case"end":return n.stop()}}),n,this)})));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var n=this.state,e=n.loadingPage,t=n.repository,r=n.issues;return e?a.a.createElement(J,null,"Carregando..."):a.a.createElement(R,null,a.a.createElement(A,null,a.a.createElement(c.b,{to:"/"},"Voltar aos repositorios"),a.a.createElement("img",{src:t.owner.avatar_url,title:t.full_name,alt:t.full_name}),a.a.createElement("h1",null,t.name),a.a.createElement("p",null,t.description)),a.a.createElement(F,null,r.map((function(n){return a.a.createElement("li",{key:n.url},a.a.createElement("img",{src:n.user.avatar_url}),a.a.createElement("span",null,n.title,a.a.createElement("p",null,n.user.login)))}))))}}]),e}(r.Component);function N(){return a.a.createElement(c.a,null,a.a.createElement(l.c,null,a.a.createElement(l.a,{path:"/",exact:!0,component:D}),a.a.createElement(l.a,{path:"/repository/:repository",exact:!0,component:M})))}function W(){var n=Object(h.a)(["\n\n  * {\n    margin: 0;\n    padding: 0;\n    outline: 0;\n    box-sizing: border-box;\n    min-height: 100%;\n  }\n\n  body, html, #root {\n    background-color: #7159c1;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return W=function(){return n},n}var L=Object(v.a)(W());var V=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(N,null),a.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.69942085.chunk.js.map