(this["webpackJsonpubaid-movies"]=this["webpackJsonpubaid-movies"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(7),r=c.n(s),i=c(9),l=c(6),o=c.n(l),j=c(8),u=c(4),d=(c(15),c(16),c(0)),m=function(e){var t=e.favComponent;return Object(d.jsx)(d.Fragment,{children:e.movies.map((function(c,n){return Object(d.jsxs)("div",{className:"image-container d-flex justify-content-start m-4",children:[Object(d.jsx)("img",{src:c.Poster,alt:c.Tiltle}),Object(d.jsx)("div",{onClick:function(){return e.handleFavClick(c)},className:"overlay d-flex align-items-center justify-content-center",children:Object(d.jsx)(t,{})})]})}))})},b=function(e){return Object(d.jsx)("div",{className:"col",children:Object(d.jsx)("h1",{children:e.heading})})},h=function(e){return Object(d.jsx)("div",{className:"col col-sm-4",children:Object(d.jsx)("input",{value:e.value,className:"form-control",onChange:function(t){return e.setSearchValue(t.target.value)},placeholder:"Type the movie name..."})})},v=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"mr-2",children:"Add to favourites "}),Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"red",class:"bi bi-heart-fill",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"})})]})},f=function(e){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{className:"mr-2",children:"Remove from favourites"}),Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-circle",viewBox:"0 0 16 16",children:[Object(d.jsx)("path",{d:"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}),Object(d.jsx)("path",{d:"M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"})]})]})},x=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(u.a)(s,2),l=r[0],x=r[1],O=Object(n.useState)(""),p=Object(u.a)(O,2),g=p[0],w=p[1],N=function(){var e=Object(j.a)(o.a.mark((function e(t){var c,n,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="http://www.omdbapi.com/?s=".concat(t,"&apikey=28c258db"),e.next=3,fetch(c);case 3:return n=e.sent,e.next=6,n.json();case 6:(s=e.sent).Search&&a(s.Search);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){N(g)}),[g]),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("react-movie-app-fav"));x(e)}),[]);var S=function(e){localStorage.setItem("react-movie-app-fav",JSON.stringify(e))};return Object(d.jsxs)("div",{className:"container-fluid movie-app",children:[Object(d.jsxs)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:[Object(d.jsx)(b,{heading:"Movies"}),Object(d.jsx)(h,{searchValue:g,setSearchValue:w})]}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{movies:c,handleFavClick:function(e){var t=[].concat(Object(i.a)(l),[e]);x(t),S(t)},favComponent:v})}),Object(d.jsx)("div",{className:"row d-flex align-items-center mt-4 mb-4",children:Object(d.jsx)(b,{heading:"Favourites"})}),Object(d.jsx)("div",{className:"row",children:Object(d.jsx)(m,{movies:l,handleFavClick:function(e){var t=l.filter((function(t){return t.imdbID!==e.imdbID}));x(t),S(t)},favComponent:f})})]})};r.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.259c7499.chunk.js.map