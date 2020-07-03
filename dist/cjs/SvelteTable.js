"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function l(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,e,n,o){if(t){const l=s(t,e,n,o);return t[0](l)}}function s(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function i(t,e,n,o,l,r,c){const i=function(t,e,n,o){if(t[2]&&o){const l=t[2](o(n));if(void 0===e.dirty)return l;if("object"==typeof l){const t=[],n=Math.max(e.dirty.length,l.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|l[o];return t}return e.dirty|l}return e.dirty}(e,o,l,r);if(i){const l=s(e,n,o,c);t.p(l,i)}}function u(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function d(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function g(){return p(" ")}function y(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.data!==e&&(t.data=e)}function w(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}let b;function k(t){b=t}function _(){const t=function(){if(!b)throw new Error("Function called outside component initialization");return b}();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const l=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach(e=>{e.call(t,l)})}}}const N=[],O=[],x=[],E=[],T=Promise.resolve();let C=!1;function A(t){x.push(t)}let S=!1;const B=new Set;function V(){if(!S){S=!0;do{for(let t=0;t<N.length;t+=1){const e=N[t];k(e),j(e.$$)}for(N.length=0;O.length;)O.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];B.has(e)||(B.add(e),e())}x.length=0}while(N.length);for(;E.length;)E.pop()();C=!1,S=!1,B.clear()}}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const R=new Set;let D;function L(t,e){t&&t.i&&(R.delete(t),t.i(e))}function M(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),D.c.push(()=>{R.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}function q(t,e){-1===t.$$.dirty[0]&&(N.push(t),C||(C=!0,T.then(V)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(r,c,s,i,u,a,f=[-1]){const m=b;k(r);const h=c.props||{},p=r.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:n(),dirty:f};let g=!1;if(p.ctx=s?s(r,h,(t,e,...n)=>{const o=n.length?n[0]:e;return p.ctx&&u(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),g&&q(r,t)),e}):[],p.update(),g=!0,o(p.before_update),p.fragment=!!i&&i(p.ctx),c.target){if(c.hydrate){const t=function(t){return Array.from(t.childNodes)}(c.target);p.fragment&&p.fragment.l(t),t.forEach(d)}else p.fragment&&p.fragment.c();c.intro&&L(r.$$.fragment),function(t,n,r){const{fragment:c,on_mount:s,on_destroy:i,after_update:u}=t.$$;c&&c.m(n,r),A(()=>{const n=s.map(e).filter(l);i?i.push(...n):o(n),t.$$.on_mount=[]}),u.forEach(A)}(r,c.target,c.anchor),V()}k(m)}function z(t,e,n){const o=t.slice();return o[34]=e[n],o}const F=t=>({row:8192&t[0]}),I=t=>({row:t[31],n:t[33]});function P(t,e,n){const o=t.slice();return o[31]=e[n],o[33]=n,o}function G(t,e,n){const o=t.slice();return o[34]=e[n],o}const J=t=>({sortOrder:2&t[0],sortBy:1&t[0]}),K=t=>({sortOrder:t[1],sortBy:t[0]});function Q(t,e,n){const o=t.slice();return o[41]=e[n],o}function U(t,e,n){const o=t.slice();return o[34]=e[n],o}function W(t){let e,n,o,l,r,c=t[11][t[34].key],s=[];for(let e=0;e<c.length;e+=1)s[e]=X(Q(t,c,e));function i(){t[22].call(e,t[34])}return{c(){e=h("select"),n=h("option");for(let t=0;t<s.length;t+=1)s[t].c();n.__value=void 0,n.value=n.__value,v(e,"class",o=u(t[15](t[8]))+" svelte-w7dofd"),void 0===t[12][t[34].key]&&A(i)},m(o,c){f(o,e,c),a(e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);w(e,t[12][t[34].key]),l||(r=y(e,"change",i),l=!0)},p(n,l){if(t=n,2052&l[0]){let n;for(c=t[11][t[34].key],n=0;n<c.length;n+=1){const o=Q(t,c,n);s[n]?s[n].p(o,l):(s[n]=X(o),s[n].c(),s[n].m(e,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=c.length}256&l[0]&&o!==(o=u(t[15](t[8]))+" svelte-w7dofd")&&v(e,"class",o),6148&l[0]&&w(e,t[12][t[34].key])},d(t){t&&d(e),m(s,t),l=!1,r()}}}function X(t){let e,n,o,l=t[41].name+"";return{c(){e=h("option"),n=p(l),e.__value=o=t[41].value,e.value=e.__value},m(t,o){f(t,e,o),a(e,n)},p(t,r){2052&r[0]&&l!==(l=t[41].name+"")&&$(n,l),2052&r[0]&&o!==(o=t[41].value)&&(e.__value=o),e.value=e.__value},d(t){t&&d(e)}}}function Y(t){let e,n,o=void 0!==t[11][t[34].key]&&W(t);return{c(){e=h("th"),o&&o.c(),n=g()},m(t,l){f(t,e,l),o&&o.m(e,null),a(e,n)},p(t,l){void 0!==t[11][t[34].key]?o?o.p(t,l):(o=W(t),o.c(),o.m(e,n)):o&&(o.d(1),o=null)},d(t){t&&d(e),o&&o.d()}}}function Z(t){let e,n=(1===t[1]?t[3]:t[4])+"";return{c(){e=p(n)},m(t,n){f(t,e,n)},p(t,o){26&o[0]&&n!==(n=(1===t[1]?t[3]:t[4])+"")&&$(e,n)},d(t){t&&d(e)}}}function tt(t){let e,n,o,l,r,c,s,i=t[34].title+"",m=t[0]===t[34].key&&Z(t);function w(...e){return t[23](t[34],...e)}return{c(){e=h("th"),n=p(i),o=g(),m&&m.c(),l=g(),v(e,"class",r=u(t[15]([t[34].sortable?"isSortable":null,t[34].headerClass]))+" svelte-w7dofd")},m(t,r){f(t,e,r),a(e,n),a(e,o),m&&m.m(e,null),a(e,l),c||(s=y(e,"click",w),c=!0)},p(o,c){t=o,4&c[0]&&i!==(i=t[34].title+"")&&$(n,i),t[0]===t[34].key?m?m.p(t,c):(m=Z(t),m.c(),m.m(e,l)):m&&(m.d(1),m=null),4&c[0]&&r!==(r=u(t[15]([t[34].sortable?"isSortable":null,t[34].headerClass]))+" svelte-w7dofd")&&v(e,"class",r)},d(t){t&&d(e),m&&m.d(),c=!1,s()}}}function et(t){let e,n,o,l,r=(t[34].renderValue?t[34].renderValue(t[31]):t[34].value(t[31]))+"";function c(...e){return t[24](t[31],t[34],...e)}return{c(){e=h("td"),v(e,"class",n=u(t[15]([t[34].class,t[10]]))+" svelte-w7dofd")},m(t,n){f(t,e,n),e.innerHTML=r,o||(l=y(e,"click",c),o=!0)},p(o,l){t=o,8196&l[0]&&r!==(r=(t[34].renderValue?t[34].renderValue(t[31]):t[34].value(t[31]))+"")&&(e.innerHTML=r),1028&l[0]&&n!==(n=u(t[15]([t[34].class,t[10]]))+" svelte-w7dofd")&&v(e,"class",n)},d(t){t&&d(e),o=!1,l()}}}function nt(t){let e;const n=t[21].row,o=c(n,t,t[20],I),l=o||function(t){let e,n,o,l,r,c=t[2],s=[];for(let e=0;e<c.length;e+=1)s[e]=et(z(t,c,e));function i(...e){return t[25](t[31],...e)}return{c(){e=h("tr");for(let t=0;t<s.length;t+=1)s[t].c();o=g(),v(e,"class",n=u(t[15](t[9]))+" svelte-w7dofd")},m(t,n){f(t,e,n);for(let t=0;t<s.length;t+=1)s[t].m(e,null);f(t,o,n),l||(r=y(e,"click",i),l=!0)},p(o,l){if(t=o,304132&l[0]){let n;for(c=t[2],n=0;n<c.length;n+=1){const o=z(t,c,n);s[n]?s[n].p(o,l):(s[n]=et(o),s[n].c(),s[n].m(e,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=c.length}512&l[0]&&n!==(n=u(t[15](t[9]))+" svelte-w7dofd")&&v(e,"class",n)},d(t){t&&d(e),m(s,t),t&&d(o),l=!1,r()}}}(t);return{c(){l&&l.c()},m(t,n){l&&l.m(t,n),e=!0},p(t,e){o?o.p&&1056768&e[0]&&i(o,n,t,t[20],e,F,I):l&&l.p&&9732&e[0]&&l.p(t,e)},i(t){e||(L(l,t),e=!0)},o(t){M(l,t),e=!1},d(t){l&&l.d(t)}}}function ot(t){let e,n,l,r,s,p,y,$,w,b=t[14]&&function(t){let e,n=t[2],o=[];for(let e=0;e<n.length;e+=1)o[e]=Y(U(t,n,e));return{c(){e=h("tr");for(let t=0;t<o.length;t+=1)o[t].c();v(e,"class","svelte-w7dofd")},m(t,n){f(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,l){if(39172&l[0]){let r;for(n=t[2],r=0;r<n.length;r+=1){const c=U(t,n,r);o[r]?o[r].p(c,l):(o[r]=Y(c),o[r].c(),o[r].m(e,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){t&&d(e),m(o,t)}}}(t);const k=t[21].header,_=c(k,t,t[20],K),N=_||function(t){let e,n=t[2],o=[];for(let e=0;e<n.length;e+=1)o[e]=tt(G(t,n,e));return{c(){e=h("tr");for(let t=0;t<o.length;t+=1)o[t].c()},m(t,n){f(t,e,n);for(let t=0;t<o.length;t+=1)o[t].m(e,null)},p(t,l){if(98335&l[0]){let r;for(n=t[2],r=0;r<n.length;r+=1){const c=G(t,n,r);o[r]?o[r].p(c,l):(o[r]=tt(c),o[r].c(),o[r].m(e,null))}for(;r<o.length;r+=1)o[r].d(1);o.length=n.length}},d(t){t&&d(e),m(o,t)}}}(t);let O=t[13],x=[];for(let e=0;e<O.length;e+=1)x[e]=nt(P(t,O,e));const E=t=>M(x[t],1,1,()=>{x[t]=null});return{c(){e=h("table"),n=h("thead"),b&&b.c(),l=g(),N&&N.c(),s=g(),p=h("tbody");for(let t=0;t<x.length;t+=1)x[t].c();v(n,"class",r=u(t[15](t[6]))+" svelte-w7dofd"),v(p,"class",y=u(t[15](t[7]))+" svelte-w7dofd"),v(e,"class",$=u(t[15](t[5]))+" svelte-w7dofd")},m(t,o){f(t,e,o),a(e,n),b&&b.m(n,null),a(n,l),N&&N.m(n,null),a(e,s),a(e,p);for(let t=0;t<x.length;t+=1)x[t].m(p,null);w=!0},p(t,l){if(t[14]&&b.p(t,l),_?_.p&&1048579&l[0]&&i(_,k,t,t[20],l,J,K):N&&N.p&&31&l[0]&&N.p(t,l),(!w||64&l[0]&&r!==(r=u(t[15](t[6]))+" svelte-w7dofd"))&&v(n,"class",r),1484292&l[0]){let e;for(O=t[13],e=0;e<O.length;e+=1){const n=P(t,O,e);x[e]?(x[e].p(n,l),L(x[e],1)):(x[e]=nt(n),x[e].c(),L(x[e],1),x[e].m(p,null))}for(D={r:0,c:[],p:D},e=O.length;e<x.length;e+=1)E(e);D.r||o(D.c),D=D.p}(!w||128&l[0]&&y!==(y=u(t[15](t[7]))+" svelte-w7dofd"))&&v(p,"class",y),(!w||32&l[0]&&$!==($=u(t[15](t[5]))+" svelte-w7dofd"))&&v(e,"class",$)},i(t){if(!w){L(N,t);for(let t=0;t<O.length;t+=1)L(x[t]);w=!0}},o(t){M(N,t),x=x.filter(Boolean);for(let t=0;t<x.length;t+=1)M(x[t]);w=!1},d(t){t&&d(e),b&&b.d(),N&&N.d(t),m(x,t)}}}function lt(t,e,n){const o=_();let{columns:l}=e,{rows:r}=e,{sortBy:c=""}=e,{sortOrder:s=1}=e,{iconAsc:i="▲"}=e,{iconDesc:u="▼"}=e,{classNameTable:a=""}=e,{classNameThead:f=""}=e,{classNameTbody:d=""}=e,{classNameSelect:m=""}=e,{classNameRow:h=""}=e,{classNameCell:p=""}=e,g=()=>"",y=l.some(t=>void 0!==t.filterOptions),v={},$={},w={};l.forEach(t=>{n(27,w[t.key]=t,w)});const b=(t,e)=>{var l;l=e.key,n(1,s=l===c&&1===s?-1:1),n(0,c=e.key),o("clickCol",{event:t,col:e,key:e.key})},k=(t,e)=>{o("clickRow",{event:t,row:e})},N=(t,e,n)=>{o("clickCell",{event:t,row:e,key:n})};y&&(n(11,v={}),l.forEach(t=>{"function"==typeof t.filterOptions?n(11,v[t.key]=t.filterOptions(r),v):Array.isArray(t.filterOptions)&&n(11,v[t.key]=t.filterOptions.map(t=>({name:t,value:t})),v)}));let{$$slots:O={},$$scope:x}=e;let E;return t.$set=t=>{"columns"in t&&n(2,l=t.columns),"rows"in t&&n(19,r=t.rows),"sortBy"in t&&n(0,c=t.sortBy),"sortOrder"in t&&n(1,s=t.sortOrder),"iconAsc"in t&&n(3,i=t.iconAsc),"iconDesc"in t&&n(4,u=t.iconDesc),"classNameTable"in t&&n(5,a=t.classNameTable),"classNameThead"in t&&n(6,f=t.classNameThead),"classNameTbody"in t&&n(7,d=t.classNameTbody),"classNameSelect"in t&&n(8,m=t.classNameSelect),"classNameRow"in t&&n(9,h=t.classNameRow),"classNameCell"in t&&n(10,p=t.classNameCell),"$$scope"in t&&n(20,x=t.$$scope)},t.$$.update=()=>{if(134217729&t.$$.dirty[0]){let t=w[c];void 0!==t&&!0===t.sortable&&"function"==typeof t.value&&("function"==typeof t.sortValue?n(26,g=e=>t.sortValue(e)):n(26,g=e=>t.value(e)))}201854978&t.$$.dirty[0]&&n(13,E=r.filter(t=>Object.keys($).every(e=>void 0===$[e]||$[e]===("function"==typeof w[e].filterValue?w[e].filterValue(t):w[e].value(t)))).map(t=>Object.assign({},t,{$sortOn:g(t)})).sort((t,e)=>t.$sortOn>e.$sortOn?s:t.$sortOn<e.$sortOn?-s:0))},[c,s,l,i,u,a,f,d,m,h,p,v,$,E,y,t=>[].concat(t).filter(t=>"string"==typeof t&&""!==t).join(" "),b,k,N,r,x,O,function(t){$[t.key]=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(12,$),n(2,l),n(11,v)},(t,e)=>b(e,t),(t,e,n)=>{N(n,t,e.key)},(t,e)=>{k(e,t)}]}module.exports=class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}{constructor(t){var e;super(),document.getElementById("svelte-w7dofd-style")||((e=h("style")).id="svelte-w7dofd-style",e.textContent="table.svelte-w7dofd.svelte-w7dofd{width:100%}.isSortable.svelte-w7dofd.svelte-w7dofd{cursor:pointer}tr.svelte-w7dofd th select.svelte-w7dofd{width:100%}",a(document.head,e)),H(this,t,lt,ot,r,{columns:2,rows:19,sortBy:0,sortOrder:1,iconAsc:3,iconDesc:4,classNameTable:5,classNameThead:6,classNameTbody:7,classNameSelect:8,classNameRow:9,classNameCell:10},[-1,-1])}};
//# sourceMappingURL=SvelteTable.js.map
