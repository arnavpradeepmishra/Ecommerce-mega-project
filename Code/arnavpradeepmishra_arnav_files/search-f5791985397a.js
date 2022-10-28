"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["search"],{59753(a,b,c){function d(){if(!(this instanceof d))return new d;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}c.d(b,{f:()=>B,on:()=>A});var e,f=window.document.documentElement,g=f.matches||f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector;d.prototype.matchesSelector=function(a,b){return g.call(a,b)},d.prototype.querySelectorAll=function(a,b){return b.querySelectorAll(a)},d.prototype.indexes=[];var h=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"ID",selector:function(a){var b;if(b=a.match(h))return b[0].slice(1)},element:function(a){if(a.id)return[a.id]}});var i=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"CLASS",selector:function(a){var b;if(b=a.match(i))return b[0].slice(1)},element:function(a){var b=a.className;if(b){if("string"==typeof b)return b.split(/\s/);if("object"==typeof b&&"baseVal"in b)return b.baseVal.split(/\s/)}}});var j=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;d.prototype.indexes.push({name:"TAG",selector:function(a){var b;if(b=a.match(j))return b[0].toUpperCase()},element:function(a){return[a.nodeName.toUpperCase()]}}),d.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}},e="function"==typeof window.Map?window.Map:function(){function a(){this.map={}}return a.prototype.get=function(a){return this.map[a+" "]},a.prototype.set=function(a,b){this.map[a+" "]=b},a}();var k=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function l(a,b){var c,d,e,f,g,h,i=(a=a.slice(0).concat(a.default)).length,j=b,l=[];do if(k.exec(""),(e=k.exec(j))&&(j=e[3],e[2]||!j)){for(c=0;c<i;c++)if(g=(h=a[c]).selector(e[1])){for(d=l.length,f=!1;d--;)if(l[d].index===h&&l[d].key===g){f=!0;break}f||l.push({index:h,key:g});break}}while(e)return l}function m(a,b){var c,d,e;for(c=0,d=a.length;c<d;c++)if(e=a[c],b.isPrototypeOf(e))return e}function n(a,b){return a.id-b.id}d.prototype.logDefaultIndexUsed=function(){},d.prototype.add=function(a,b){var c,d,f,g,h,i,j,k,n=this.activeIndexes,o=this.selectors,p=this.selectorObjects;if("string"==typeof a){for(d=0,p[(c={id:this.uid++,selector:a,data:b}).id]=c,j=l(this.indexes,a);d<j.length;d++)g=(k=j[d]).key,f=k.index,h=m(n,f),h||((h=Object.create(f)).map=new e,n.push(h)),f===this.indexes.default&&this.logDefaultIndexUsed(c),i=h.map.get(g),i||(i=[],h.map.set(g,i)),i.push(c);this.size++,o.push(a)}},d.prototype.remove=function(a,b){if("string"==typeof a){var c,d,e,f,g,h,i,j,k=this.activeIndexes,m=this.selectors=[],n=this.selectorObjects,o={},p=1===arguments.length;for(e=0,c=l(this.indexes,a);e<c.length;e++)for(d=c[e],f=k.length;f--;)if(h=k[f],d.index.isPrototypeOf(h)){if(i=h.map.get(d.key))for(g=i.length;g--;)(j=i[g]).selector===a&&(p||j.data===b)&&(i.splice(g,1),o[j.id]=!0);break}for(e in o)delete n[e],this.size--;for(e in n)m.push(n[e].selector)}},d.prototype.queryAll=function(a){if(!this.selectors.length)return[];var b,c,d,e,f,g,h,i,j={},k=[],l=this.querySelectorAll(this.selectors.join(", "),a);for(b=0,d=l.length;b<d;b++)for(c=0,f=l[b],e=(g=this.matches(f)).length;c<e;c++)j[(i=g[c]).id]?h=j[i.id]:(h={id:i.id,selector:i.selector,data:i.data,elements:[]},j[i.id]=h,k.push(h)),h.elements.push(f);return k.sort(n)},d.prototype.matches=function(a){if(!a)return[];var b,c,d,e,f,g,h,i,j,k,l,m=this.activeIndexes,o={},p=[];for(b=0,e=m.length;b<e;b++)if(i=(h=m[b]).element(a)){for(c=0,f=i.length;c<f;c++)if(j=h.map.get(i[c]))for(d=0,g=j.length;d<g;d++)!o[l=(k=j[d]).id]&&this.matchesSelector(a,k.selector)&&(o[l]=!0,p.push(k))}return p.sort(n)};var o={},p={},q=new WeakMap,r=new WeakMap,s=new WeakMap,t=Object.getOwnPropertyDescriptor(Event.prototype,"currentTarget");function u(a,b,c){var d=a[b];return a[b]=function(){return c.apply(a,arguments),d.apply(a,arguments)},a}function v(){q.set(this,!0)}function w(){q.set(this,!0),r.set(this,!0)}function x(){return s.get(this)||null}function y(a,b){t&&Object.defineProperty(a,"currentTarget",{configurable:!0,enumerable:!0,get:b||t.get})}function z(a){if(function(a){try{return a.eventPhase,!0}catch(b){return!1}}(a)){var b=(1===a.eventPhase?p:o)[a.type];if(b){var c=function(a,b,c){var d=[],e=b;do{if(1!==e.nodeType)break;var f=a.matches(e);if(f.length){var g={node:e,observers:f};c?d.unshift(g):d.push(g)}}while(e=e.parentElement)return d}(b,a.target,1===a.eventPhase);if(c.length){u(a,"stopPropagation",v),u(a,"stopImmediatePropagation",w),y(a,x);for(var d=0,e=c.length;d<e&&!q.get(a);d++){var f=c[d];s.set(a,f.node);for(var g=0,h=f.observers.length;g<h&&!r.get(a);g++)f.observers[g].data.call(f.node,a)}s.delete(a),y(a)}}}}function A(a,b,c){var e=arguments.length>3&& void 0!==arguments[3]?arguments[3]:{},f=!!e.capture,g=f?p:o,h=g[a];h||(h=new d,g[a]=h,document.addEventListener(a,z,f)),h.add(b,c)}function B(a,b,c){return a.dispatchEvent(new CustomEvent(b,{bubbles:!0,cancelable:!0,detail:c}))}},254(a,b,c){c.d(b,{ZG:()=>h,q6:()=>j,w4:()=>i});var d=c(8439);let e=!1,f=new d.Z;function g(a){let b=a.target;if(b instanceof HTMLElement&&b.nodeType!==Node.DOCUMENT_NODE)for(let c of f.matches(b))c.data.call(null,b)}function h(a,b){e||(e=!0,document.addEventListener("focus",g,!0)),f.add(a,b),document.activeElement instanceof HTMLElement&&document.activeElement.matches(a)&&b(document.activeElement)}function i(a,b,c){function d(b){let e=b.currentTarget;e&&(e.removeEventListener(a,c),e.removeEventListener("blur",d))}h(b,function(b){b.addEventListener(a,c),b.addEventListener("blur",d)})}function j(a,b){function c(a){let{currentTarget:d}=a;d&&(d.removeEventListener("input",b),d.removeEventListener("blur",c))}h(a,function(a){a.addEventListener("input",b),a.addEventListener("blur",c)})}},35231(a,b,c){var d=c(254),e=c(64463),f=c(59753);function g(){let a=Array.from(document.querySelectorAll("input[type=text].js-advanced-search-prefix")),b=Array.from(document.querySelectorAll("select.js-advanced-search-prefix")),c=Array.from(document.querySelectorAll(".js-advanced-search-prefix:checked")),d=[...i(a),...i(b),...i(c)],e=d.reduce((a,b)=>(b.value&&b.type&&a[b.type]++,a),{Repositories:0,Users:0,Code:0,Issues:0}),f=d.reduce((a,b)=>`${a} ${(function({prefix:a,value:b}){return""===a?"":b?`${a}${b}`:""})(b)}`.trim(),""),g=document.querySelector(".js-advanced-search-input").value;document.querySelector(".js-type-value").value=function(a){let b=new URLSearchParams(window.location.search),c=b.get("type")||"Repositories",d=0;for(let e in a)a[e]>d&&(d=a[e],c=e);return c}(e),document.querySelector(".js-search-query").value=`${g} ${f}`.trim();let h=document.querySelector(".js-advanced-query");h.innerHTML="",h.textContent=f;let j=document.createElement("span");j.textContent=g.trim(),h.prepend(j," ")}function h(a){return -1!==a.search(/\s/g)?`"${a}"`:a}function i(a){return a.map(a=>{let b=a.value.trim(),c=a.getAttribute("data-search-prefix"),d=a.getAttribute("data-search-type");return""===c?{prefix:c,value:b,type:d}:-1!==b.search(/,/g)&&"location"!==c?b.split(/,/).map(a=>({prefix:c,value:h(a.trim()),type:d})):{prefix:c,value:h(b),type:d}}).flatMap(a=>a)}(0,d.q6)(".js-advanced-search-prefix",function(){g()}),(0,f.on)("change",".js-advanced-search-prefix",g),(0,f.on)("change",".js-advanced-search-prefix",a=>{let b=a.currentTarget.getAttribute("data-search-prefix");"reason:"===b?function(){let a=document.querySelector("#search_state"),b=document.querySelector("#search_state_reason");if(a&&b){let c=a.value,d=b.value;("completed"===d||"not planned"===d)&&"closed"!==c?a.value="closed":"reopened"===d&&"open"!==c&&(a.value="open")}}():"state:"===b&&function(){let a=document.querySelector("#search_state"),b=document.querySelector("#search_state_reason");if(a&&b){let c=a.value,d=b.value;"closed"===c&&"reopened"===d?b.value="":"open"===c&&"reopened"!==d&&(b.value="")}}()}),(0,d.ZG)(".js-advanced-search-input",function(a){let b=a.closest(".js-advanced-search-label");b.classList.add("focus"),a.addEventListener("blur",()=>b.classList.remove("focus"),{once:!0})}),(0,e.N7)(".js-advanced-search-input",function(){g()})},43036(a,b,c){c(35231);var d=c(64463);(0,d.N7)(".js-codesearch-nav",function(a){let b=a.querySelector(".selected");if(!(b instanceof HTMLElement))return;let c=b.offsetLeft,d=b.offsetWidth,e=c+d,f=window.innerWidth;(e-a.scrollLeft>f||e<a.scrollLeft)&&(a.scrollLeft=c-f/2+d/2)}),(0,d.N7)(".js-codesearch-count",function(a){let b=a.getAttribute("data-search-type");for(let c of document.querySelectorAll(".js-codesearch-deferred-count"))if(b&&c.getAttribute("data-search-type")===b){let d=a.cloneNode(!0);if(!(d instanceof Element))return;d.classList.remove("js-codesearch-count"),c.replaceWith(d)}}),(0,c(59753).on)("click",".js-reveal-hidden-topics",function(a){let b=a.target,c=b.closest(".js-hidden-topics-container"),d=c.querySelector(".js-hidden-topics");d&&(d.classList.remove("d-none"),b.remove())})}},a=>{var b=b=>a(a.s=b);a.O(0,["vendors-node_modules_selector-observer_dist_index_esm_js"],()=>b(43036));var c=a.O()}])
//# sourceMappingURL=search-d4b31114b232.js.map