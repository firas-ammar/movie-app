(window["webpackJsonpmovie-appli"]=window["webpackJsonpmovie-appli"]||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/wick.1bdbe889.jpg"},47:function(e,t,a){e.exports=a.p+"static/media/ninja.258c1dd3.jpg"},48:function(e,t,a){e.exports=a.p+"static/media/menblack.ed8d3abb.jpg"},52:function(e,t,a){e.exports=a(72)},57:function(e,t,a){},58:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),i=(a(57),a(21)),s=a(13),o=a(22),m=a(23),u=a(25),d=(a(58),a(6)),p=function(e){return r.a.createElement(d.h,{md:"4"},r.a.createElement(d.i,{className:" mb-4"},r.a.createElement("input",{onChange:e.searchHandler,className:"form-control mr-sm-2",type:"text",value:e.searchStr,placeholder:"Search","aria-label":"Search"}),r.a.createElement(d.a,{gradient:"aqua",rounded:!0,size:"sm",type:"submit",className:"mr-auto"},"Search")))},f=a(24),h=a.n(f),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={rating:1},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onStarClick",value:function(e,t,a){this.setState({rating:e}),this.props.RatingHandler(e)}},{key:"render",value:function(){this.state.rating;return r.a.createElement("div",{className:"etoile"},r.a.createElement(h.a,{name:"rate1",starCount:5,onStarClick:this.onStarClick.bind(this)}))}}]),t}(r.a.Component),g=function(e){var t=e.element;return r.a.createElement("section",{className:"text-center my-5"},r.a.createElement(d.j,null,r.a.createElement(d.h,{lg:"10",md:"12",className:"mb-lg-0 mb-4"},r.a.createElement(d.b,{wide:!0,ecommerce:!0},r.a.createElement(d.e,{cascade:!0,src:t.image,top:!0,alt:"sample photo"}),r.a.createElement(d.c,{cascade:!0,className:"text-center"},r.a.createElement("a",{href:"#!",className:"text-muted"},r.a.createElement("h5",null,"Action")),r.a.createElement(d.g,null,r.a.createElement("strong",null,r.a.createElement("a",{href:"#!"},t.titre))),r.a.createElement(d.f,null,"Lorem ipsum dolor sit amet, consectetur adipisicing minima veniam elit."),r.a.createElement(d.d,{className:"px-1"},r.a.createElement("span",{className:"float-left font-weight-bold"},r.a.createElement("strong",null,"Download")),r.a.createElement("span",{className:"float-right"},r.a.createElement(h.a,{name:"rate2",editing:!1,starCount:5,value:t.rating}))))))))},b=a(89),v=(a(66),a(87)),j=a(88),w=a(44),N=a.n(w),y=Object(v.a)(function(e){return{fab:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)}}});function x(){var e=y();return r.a.createElement("div",null,r.a.createElement(j.a,{color:"primary","aria-label":"add",className:e.fab},r.a.createElement(N.a,null)))}var k=function(){return r.a.createElement("div",{class:"spinner-border text-primary",role:"status"},r.a.createElement("span",{class:"sr-only"},"Loading..."))},C=function(e){return function(t){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,t),Object(s.a)(a,[{key:"render",value:function(){return this.props.loading?r.a.createElement(k,null):r.a.createElement(e,this.props)}}]),a}(n.Component)}(function(e){var t=e.x;return r.a.createElement(b.a,null,r.a.createElement("div",{className:"mx-auto",style:{display:"flex",justifyContent:"space-around"}},t.map(function(e){return r.a.createElement(g,{key:e.id,element:e})})),r.a.createElement("section",{className:"text-center my-5"},r.a.createElement(d.j,null,r.a.createElement(d.h,{lg:"4",md:"6",className:"mb-lg-0 mb-4"},r.a.createElement(d.b,{wide:!0,ecommerce:!0},r.a.createElement(d.e,{cascade:!0,src:"https://www.mearto.com/assets/no-image-83a2b680abc7af87cfff7777d0756fadb9f9aecd5ebda5d34f8139668e0fc842.png",top:!0,alt:"sample photo"}),r.a.createElement(d.c,{cascade:!0,className:"text-center"},r.a.createElement("a",{href:"#!",className:"text-muted"},r.a.createElement("h5",null,"Genre")),r.a.createElement(d.g,null,r.a.createElement("strong",null,r.a.createElement("a",{href:"#!"}))),r.a.createElement(d.f,null,r.a.createElement(x,null)),r.a.createElement(d.d,{className:"px-1"},r.a.createElement("span",{className:"float-left font-weight-bold"},r.a.createElement("strong",null)),r.a.createElement("span",{className:"float-right"},r.a.createElement(h.a,{name:"rate2",editing:!1,starCount:5,value:"0"})))))))))}),O=a(46),S=a.n(O),L=a(47),H=a.n(L),R=a(48),A=a.n(R),B=[{id:"jhone",image:S.a,titre:"John Wick: Chapter 3",rating:"4"},{id:"ninja",image:H.a,titre:"Ninja Assassin",rating:"5"},{id:"menblack",image:A.a,titre:"Men in Black",rating:"3"}],J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).changeRatingHandler=function(e){a.setState({value:e})},a.titleFilter=function(e){var t=e.target.value;a.setState({titre:t.toLowerCase()})},a.state={x:B,value:1,titre:"",isLoading:!0},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){return e.setState({isLoading:!1})},3e3)}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"container",style:{display:"flex",justifyContent:"center"}},r.a.createElement(p,{searchStr:this.state.titre,searchHandler:this.titleFilter}),r.a.createElement(E,{RatingHandler:this.changeRatingHandler})),r.a.createElement(C,{loading:this.state.isLoading,x:B.filter(function(t){return t.rating>=e.state.value&&t.titre.toLowerCase().includes(e.state.titre.toLowerCase())})})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(68),a(69),a(70),a(71);l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[52,1,2]]]);
//# sourceMappingURL=main.e8b83318.chunk.js.map