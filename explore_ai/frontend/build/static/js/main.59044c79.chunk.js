(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(t,e,a){},30:function(t,e,a){},51:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(23),s=a.n(r),o=(a(29),a(6)),i=(a(30),a(24)),l=a.n(i),u=a(13),b=(a(49),a(1)),j=function(){var t=Object(n.useState)({}),e=Object(o.a)(t,2),c=(e[0],e[1]),r=Object(n.useState)(!1),s=Object(o.a)(r,2),i=(s[0],s[1]),j=Object(n.useState)({}),d=Object(o.a)(j,2),h=(d[0],d[1],Object(n.useState)("")),O=Object(o.a)(h,2),m=O[0],f=O[1],N=Object(n.useState)("Enter a Name to Determine Your Nationality..."),p=Object(o.a)(N,2),y=p[0],v=p[1],x=Object(n.useState)([]),g=Object(o.a)(x,2),S=g[0],_=g[1],C=Object(n.useState)([]),F=Object(o.a)(C,2),k=F[0],I=F[1],Y=function(t){var e=a(22),n=[];return t.forEach((function(t){n.push(e.byIso(t).country)})),n};return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("div",{className:"header",children:Object(b.jsx)("h2",{className:"header_title",children:"Find Your Nationality From Your Name?"})}),Object(b.jsxs)("span",{className:"main_span",children:[Object(b.jsx)("label",{className:"name_lbl",children:"Enter your name:"}),Object(b.jsx)("input",{className:"in_field",value:m,onInput:function(t){return f(t.target.value)}}),Object(b.jsx)("button",{className:"btn_nat",onClick:function(){!function(t){var e=[],n=[],r=0,s="";l.a.get("http://127.0.0.1:8000/api/".concat(t)).then((function(t){c(t.data),e=t.data.country_ids,n=t.data.country_probs;var o=a(22);s=o.byIso(e[0]).country,r=100*n[0];var i=Math.round(10*r)/10;v("You are most likely from "+s+" with a probability of "+i+"%"),_(e),I(n)}),(function(t){v("Sorry, Your Name Could Not Be Found.")}))}(m),i(!0)},children:"Check Nationality"})]}),Object(b.jsx)("div",{className:"pie_chart",children:Object(b.jsx)(u.a,{data:{labels:Y(S),datasets:[{label:"Country Nationality",data:k,backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)"],hoverOffset:4}]},width:"30%"})}),Object(b.jsx)("div",{className:"lbl_div",children:Object(b.jsx)("label",{className:"lbl_statement",children:y})})]})},d=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,s=e.getTTFB;a(t),n(t),c(t),r(t),s(t)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(j,{})}),document.getElementById("root")),d()}},[[51,1,2]]]);
//# sourceMappingURL=main.59044c79.chunk.js.map