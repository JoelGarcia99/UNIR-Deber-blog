(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4fQV":function(e,t,a){},zqPQ:function(e,t,a){"use strict";a.r(t);var n=a("IujW"),l=a.n(n),r=a("q1tI"),c=a.n(r),o=a("rY4l"),i=a("PJ7m");a("4fQV");t.default=function(e){var t=e.location,a=Object(r.useState)({title:"Título",content:"Tú puedes ingresar texto markdown en este campo, por ejemplo, si usas la siguiente estructura **negrita** se imprimirá un texto en negritas."}),n=a[0],u=a[1],s=Object(r.useState)(!1),m=s[0],p=s[1],d=function(e){var t,a=e.target;u(Object.assign({},n,((t={})[a.name]=a.value,t)))};return c.a.createElement(c.a.Fragment,null,c.a.createElement(o.a,{location:t}),c.a.createElement("div",{className:"container"},c.a.createElement("h1",{className:"hr"},"Crear un nuevo tema"),m?c.a.createElement(l.a,{className:"text-area",children:"# "+n.title+"\n"+n.content}):c.a.createElement("form",null,c.a.createElement("input",{placeholder:"Título",className:"title",name:"title",onChange:d,value:n.title}),c.a.createElement("textarea",{className:"text-area",name:"content",onChange:d,defaultValue:n.content})),c.a.createElement("div",{className:"options"},c.a.createElement("button",{onClick:function(e){e.preventDefault(),Object(i.d)(n),window.location="https://joelgarcia99.github.io/UNIR-Deber-blog/"}},"Guardar"),c.a.createElement("button",{onClick:function(){p(!m)},className:"button"},m?"Editar":"Previsualizar"))))}}}]);
//# sourceMappingURL=component---src-pages-create-js-23fe07938c6c14b1d4d4.js.map