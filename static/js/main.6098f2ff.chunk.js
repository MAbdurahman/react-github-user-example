(this["webpackJsonpreact-github-users-example"]=this["webpackJsonpreact-github-users-example"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(23),c=a.n(i),h=(a(36),a(37),a(24)),r=a(25),u=a(9),l=a(31),b=a(30),d=(a(38),a(26)),o=a.n(d),j=a(27),g=a.n(j),m=a(63),O=a(64),p=a(28),x=a(29),f=a(65),v=a(5),S=function(e){Object(l.a)(a,e);var t=Object(b.a)(a);function a(){var e;return Object(h.a)(this,a),(e=t.call(this)).state={data:[],searchTerm:"",isLoading:!1},e.handleChange=e.handleChange.bind(Object(u.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(u.a)(e)),e}return Object(r.a)(a,[{key:"handleChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({isLoading:!0}),this.getGitHubData(this.state.searchTerm)}},{key:"getGitHubData",value:function(e){var t=this;o.a.get("https://api.github.com/search/users?q="+e).then((function(e){t.setState({isLoading:!1,data:e.data.items}),console.log(e.data.items),t.setState({searchTerm:""})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this.state.data.map((function(e){return Object(v.jsxs)(m.a,{className:"githubMedia",children:[Object(v.jsx)("a",{href:e.html_url,children:Object(v.jsx)("img",{className:"mr-3",src:e.avatar_url,alt:"Generic placeholder",width:81,height:81})}),Object(v.jsxs)(m.a.Body,{className:"githubMediaBody",children:[Object(v.jsxs)("h5",{children:["Login:  ",e.login]}),Object(v.jsxs)("p",{children:["Id:  ",e.id]})]})]},e.id)}));return Object(v.jsxs)("div",{className:"github",children:[Object(v.jsx)(O.a,{className:"githubForm",onSubmit:this.handleSubmit,children:Object(v.jsxs)(p.a,{controlId:"formInlineName",children:[Object(v.jsx)(x.a,{className:"githubInput",type:"text",value:this.state.searchTerm,placeholder:"Enter github user",onChange:this.handleChange}),Object(v.jsx)(f.a,{className:"githubButton",type:"submit",children:"Search"})]})}),Object(v.jsxs)("section",{className:"githubSection",children:[Object(v.jsx)("h3",{className:"githubSubheading",children:"GitHub Users Results"}),this.state.isLoading&&Object(v.jsx)(g.a,{className:"githubLoader",type:"spinningBubbles",color:"#444",height:"10%",width:"10%"}),e]})]})}}]),a}(n.Component);function N(){return Object(v.jsxs)("div",{children:[Object(v.jsx)("h1",{className:"appHeading",children:"Github Users"}),Object(v.jsx)(S,{})]})}var y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),i(e),c(e)}))};c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(N,{})}),document.getElementById("root")),y()}},[[61,1,2]]]);
//# sourceMappingURL=main.6098f2ff.chunk.js.map