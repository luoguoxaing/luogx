(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ba10b462"],{"3c56":function(e,t,a){"use strict";a.r(t);var o=a("7a23"),c={class:"js-object-to-json"},l={class:"display-flex"},n={class:"flex-row"},r=Object(o["m"])("p",null,"JavaScript Object",-1),d={class:"code-edit-textarea"},u={class:"flex-row"},i=Object(o["m"])("p",null,"Json",-1),f={class:"code-edit-textarea"},b={class:"bottom-bt"},s=Object(o["l"])("转化");function m(e,t,a,m,j,p){var O=Object(o["N"])("lgx-code-edit"),v=Object(o["N"])("el-button");return Object(o["E"])(),Object(o["i"])("div",c,[Object(o["m"])("div",l,[Object(o["m"])("div",n,[r,Object(o["m"])("div",d,[Object(o["m"])(O,{ref:"lgxCodeEditTemplateRef1",modelValue:m.formData.before,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.formData.before=e})},null,8,["modelValue"])])]),Object(o["m"])("div",u,[i,Object(o["m"])("div",f,[Object(o["m"])(O,{ref:"lgxCodeEditTemplateRef2",modelValue:m.formData.after,"onUpdate:modelValue":t[2]||(t[2]=function(e){return m.formData.after=e})},null,8,["modelValue"])])])]),Object(o["m"])("div",b,[Object(o["m"])(v,{type:"primary",style:{width:"100px"},onClick:m.changeToJson},{default:Object(o["db"])((function(){return[s]})),_:1},8,["onClick"])])])}var j=a("e4ac"),p={components:{lgxCodeEdit:j["a"]},setup:function(){var e=Object(o["J"])({before:"",after:""}),t=Object(o["p"])(),a=t.proxy;function c(){a.$refs.lgxCodeEditTemplateRef1.autoFormat();var t=new Function("return"+e.value.before)();e.value.after=JSON.stringify(t||{},null,2),a.$refs.lgxCodeEditTemplateRef2.setValue(e.value.after)}return{formData:e,changeToJson:c}}},O=(a("90b8"),a("d959")),v=a.n(O);const x=v()(p,[["render",m]]);t["default"]=x},5421:function(e,t,a){},"90b8":function(e,t,a){"use strict";a("5421")}}]);