(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22e2790f"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("fb6a"),n("d3b7"),n("b0c0"),n("a630"),n("3ca3");var r=n("6b75");function o(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"4df4":function(t,e,n){"use strict";var r=n("0366"),o=n("7b0b"),a=n("9bdd"),i=n("e95a"),c=n("50c4"),u=n("8418"),l=n("35a1");t.exports=function(t){var e,n,d,s,f,m,b=o(t),p="function"==typeof this?this:Array,v=arguments.length,g=v>1?arguments[1]:void 0,x=void 0!==g,h=l(b),w=0;if(x&&(g=r(g,v>2?arguments[2]:void 0,2)),void 0==h||p==Array&&i(h))for(e=c(b.length),n=new p(e);e>w;w++)m=x?g(b[w],w):b[w],u(n,w,m);else for(s=h.call(b),f=s.next,n=new p;!(d=f.call(s)).done;w++)m=x?a(s,g,[d.value,w],!0):d.value,u(n,w,m);return n.length=w,n}},"4f09":function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return i})),n.d(e,"c",(function(){return c}));var r=n("5530"),o=(n("99af"),n("a15b"),n("7a23"));function a(t){return Object(o["g"])((function(){var e=t.value;e.border=e.border?e.border:{};var n=Object(r["a"])(Object(r["a"])({},e),{},{filter:"blur(".concat(e.filterBlur||0,"px)"),borderRadius:(e.border.borderRadius||0)+"px",border:"".concat(e.border.borderWidth||0,"px solid transparent"),background:e.backgroundColor||"unset"});return n}))}function i(t){return Object(o["g"])((function(){var e=t.value.border||{},n={borderRadius:(e.borderRadius||0)+"px","box-shadow":"0px 0px ".concat(e.insideSize||0,"px ").concat(e.insideColor||"transparent"," inset"),background:"unset",backgroundSize:"unset",border:"unset"};return"corner"===e.type?(n.background="linear-gradient(to left, ".concat(e.borderColor,", ").concat(e.borderColor,") no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") right top no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") right top no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") left bottom no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") left bottom no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") right bottom no-repeat,\n                            linear-gradient(to left, ").concat(e.borderColor,", ").concat(e.borderColor,") right bottom no-repeat"),n.backgroundSize="".concat(e.borderWidth||0,"px ").concat((e.borderWidth||0)+(e.cornerLength||20),"px,\n                                ").concat((e.borderWidth||0)+(e.cornerLength||20),"px ").concat(e.borderWidth||0,"px,\n                                ").concat(e.borderWidth||0,"px ").concat((e.borderWidth||0)+(e.cornerLength||20),"px,\n                                ").concat((e.borderWidth||0)+(e.cornerLength||20),"px ").concat(e.borderWidth||0,"px")):n.border="".concat(e.borderWidth||0,"px ").concat(e.type||"solid"," ").concat(e.borderColor),n}))}function c(t){return Object(o["g"])((function(){var e=t.value.textStyle,n=t.value.animation,o={};if(e){for(var a=[],i=0;i<10;i++)a.push("0px 0px ".concat(e.textShadowSize,"px ").concat(e.textShadowColor));o=Object(r["a"])(Object(r["a"])(Object(r["a"])({},e),o),{},{fontSize:e.fontSize+"px",textShadow:e.textShadowSize?a.join(","):"unset"})}return n&&n.show&&(o.animation=n.type||"text-animation-left",o.animationIterationCount=n.animationIterationCount||"infinite",o.animationTimingFunction=n.animationTimingFunction||"linear",o.animationDuration=(n.animationDuration||3)+"s"),o}))}},5616:function(t,e,n){"use strict";n.r(e);var r=n("7a23"),o={key:0,style:{"font-size":"16px"}};function a(t,e,n,a,i,c){var u=Object(r["O"])("animation");return Object(r["E"])(),Object(r["i"])("div",{id:a.domId,class:"lgx-component-box"},[Object(r["m"])("div",{style:a.borderStyle,class:"lgx-component-box-border"},null,4),Object(r["eb"])(Object(r["m"])("div",{style:a.boxStyle,class:"lgx-component-box-container"},[Object(r["m"])("div",{style:a.textStyle,class:"lgx-component-box-text"},[Object(r["m"])("span",{onClick:e[1]||(e[1]=function(){return a.valueClick&&a.valueClick.apply(a,arguments)}),id:"count-to-text"+a.domId},Object(r["S"])(a.renderData.value),9,["id"]),t.option.api&&t.option.api.show&&!a.renderData.value?(Object(r["E"])(),Object(r["i"])("span",o," 暂无数据 ")):Object(r["j"])("",!0)],4)],4),[[u,t.option.animation]])],8,["id"])}var i=n("53ca");function c(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0");function u(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done);i=!0)if(a.push(r.value),e&&a.length===e)break}catch(u){c=!0,o=u}finally{try{i||null==n["return"]||n["return"]()}finally{if(c)throw o}}return a}}var l=n("06c5");function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){return c(t)||u(t,e)||Object(l["a"])(t,e)||d()}n("9911");var f=n("a53c"),m=n("ed08"),b=n("4f09"),p=n("57f2"),v=n.n(p),g={mixins:[f["a"]],name:"LgxBoxDefault",emits:["component-dom-id"],directives:{animation:{updated:function(t,e){var n=e.value||{};if(n.show){var r=t.querySelector(".lgx-component-box-text:first-child"),o=r.cloneNode(!0);if(!n.type||"text-animation-left"===n.type||"text-animation-right"===n.type){var a="text-animation-right"===n.type?"-100%":"100%";o.style.cssText="position: absolute;width: 100%;height: 100%;left: ".concat(a,";top:0;")+o.style.cssText}t.innerHTML="",t.appendChild(r),t.appendChild(o)}else{var i=t.querySelector(".lgx-component-box-text:first-child");t.innerHTML="",t.appendChild(i)}}}},setup:function(t,e){var n=e.emit,o=Object(m["g"])();n("component-dom-id",o);var a=Object(r["V"])(t),c=a.component,u=a.option,l=a.data,d=Object(r["J"])({});Object(r["bb"])(u,(function(){V()})),Object(r["B"])((function(){V()})),Object(r["C"])((function(){clearTimeout(x)}));var f=Object(b["b"])(u),p=Object(b["a"])(u),g=Object(b["c"])(u),x=null,h=Object(r["g"])((function(){var t=u.value.animation||{};return t.numberRoll}));function w(){var t=document.querySelector("#count-to-text"+o);if(t){var e=new v.a("count-to-text"+o,0,d.value.value);e.error||e.start();var n=u.value.animation||{},r=1e3*(n.numberRollTime||5);x=setTimeout((function(){w()}),r)}}function y(){g.value.link&&(window.location.href=g.value.link)}function V(){Object(r["v"])((function(){u.value.api&&u.value.api.show?d.value=c.value.$apiData:d.value=l.value,d.value&&"string"!==typeof d.value&&"number"!==typeof d.value||(d.value={value:d.value,type:Object(i["a"])(d.value)})}))}return Object(r["bb"])([h,d],(function(t){var e=s(t,1),n=e[0];n&&"number"===typeof d.value.value?Object(r["v"])((function(){w()})):clearTimeout(x)}),{immediate:!0}),{domId:o,boxStyle:f,textStyle:g,borderStyle:p,renderData:d,valueClick:y}}},x=(n("bf58"),n("d959")),h=n.n(x);const w=h()(g,[["render",a]]);e["default"]=w},"57f2":function(t,e,n){var r,o;!function(a,i){r=i,o="function"===typeof r?r.call(e,n,e,t):r,void 0===o||(t.exports=o)}(0,(function(t,e,n){var r=function(t,e,n,r,o,a){for(var i=0,c=["webkit","moz","ms","o"],u=0;u<c.length&&!window.requestAnimationFrame;++u)window.requestAnimationFrame=window[c[u]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[c[u]+"CancelAnimationFrame"]||window[c[u]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,e){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),o=window.setTimeout((function(){t(n+r)}),r);return i=n+r,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var l=this;for(var d in l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null},a)a.hasOwnProperty(d)&&(l.options[d]=a[d]);""===l.options.separator&&(l.options.useGrouping=!1),l.options.prefix||(l.options.prefix=""),l.options.suffix||(l.options.suffix=""),l.d="string"==typeof t?document.getElementById(t):t,l.startVal=Number(e),l.endVal=Number(n),l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.decimals=Math.max(0,r||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(o)||2e3,l.formatNumber=function(t){var e,n,r,o;if(t=t.toFixed(l.decimals),t+="",e=t.split("."),n=e[0],r=e.length>1?l.options.decimal+e[1]:"",o=/(\d+)(\d{3})/,l.options.useGrouping)for(;o.test(n);)n=n.replace(o,"$1"+l.options.separator+"$2");return l.options.prefix+n+r+l.options.suffix},l.easeOutExpo=function(t,e,n,r){return n*(1-Math.pow(2,-10*t/r))*1024/1023+e},l.easingFn=l.options.easingFn?l.options.easingFn:l.easeOutExpo,l.formattingFn=l.options.formattingFn?l.options.formattingFn:l.formatNumber,l.version=function(){return"1.7.1"},l.printValue=function(t){var e=l.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=e:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=e:this.d.innerHTML=e},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var e=t-l.startTime;l.remaining=l.duration-e,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easingFn(e,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easingFn(e,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(e/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(e/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),e<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.startVal=e,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},l.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},l.printValue(l.startVal)};return r}))},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"857a":function(t,e,n){var r=n("1d80"),o=/"/g;t.exports=function(t,e,n,a){var i=String(r(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),c+">"+i+"</"+e+">"}},9911:function(t,e,n){"use strict";var r=n("23e7"),o=n("857a"),a=n("af03");r({target:"String",proto:!0,forced:a("link")},{link:function(t){return o(this,"a","href",t)}})},"9bdd":function(t,e,n){var r=n("825a"),o=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(i){throw o(t),i}}},a630:function(t,e,n){var r=n("23e7"),o=n("4df4"),a=n("1c7e"),i=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:i},{from:o})},af03:function(t,e,n){var r=n("d039");t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},bf58:function(t,e,n){"use strict";n("ed45")},ed45:function(t,e,n){}}]);