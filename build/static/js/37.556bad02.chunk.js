(window["webpackJsonpnine-mens-morris"]=window["webpackJsonpnine-mens-morris"]||[]).push([[37],{133:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return s});var n=i(2),o=function(t,e){return null!==e.closest(t)},r=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},c=/^[a-z][a-z0-9+\-.]*:/,s=function(t,e,i){return n.a(void 0,void 0,void 0,function(){var o;return n.c(this,function(n){return null!=t&&"#"!==t[0]&&!c.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,i)]):[2,!1]})})}},134:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s}),i.d(e,"c",function(){return c}),i.d(e,"d",function(){return h}),i.d(e,"e",function(){return p}),i.d(e,"f",function(){return r}),i.d(e,"g",function(){return o}),i.d(e,"h",function(){return l}),i.d(e,"i",function(){return d}),i.d(e,"j",function(){return u}),i.d(e,"k",function(){return a});var n=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},r=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=function(t,e,i,n,r){if(t||o(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=r,a.name=i,a.value=n||""}},c=function(t,e,i){return Math.max(t,Math.min(e,i))},s=function(t,e){if(!t){var i="ASSERT: "+e;throw console.error(i),new Error(i)}},d=function(t){return t.timeStamp||Date.now()},u=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var i=e[0];return{x:i.clientX,y:i.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},l=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},h=function(t,e){var i=t._original||t;return{_original:t,emit:p(i.emit.bind(i),e)}},p=function(t,e){var i;return void 0===e&&(e=0),function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(i),i=setTimeout.apply(void 0,[t,e].concat(n))}}},95:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_radio",function(){return a}),i.d(e,"ion_radio_group",function(){return s});var n=i(13),o=(i(1),i(133)),r=i(134),a=function(){function t(t){var e=this;Object(n.m)(this,t),this.inputId="ion-rb-"+c++,this.name=this.inputId,this.disabled=!1,this.checked=!1,this.onFocus=function(){e.ionFocus.emit()},this.onBlur=function(){e.ionBlur.emit()},this.onClick=function(){e.checked?e.ionDeselect.emit():e.checked=!0},this.ionRadioDidLoad=Object(n.d)(this,"ionRadioDidLoad",7),this.ionRadioDidUnload=Object(n.d)(this,"ionRadioDidUnload",7),this.ionStyle=Object(n.d)(this,"ionStyle",7),this.ionSelect=Object(n.d)(this,"ionSelect",7),this.ionDeselect=Object(n.d)(this,"ionDeselect",7),this.ionFocus=Object(n.d)(this,"ionFocus",7),this.ionBlur=Object(n.d)(this,"ionBlur",7)}return t.prototype.colorChanged=function(){this.emitStyle()},t.prototype.checkedChanged=function(t){t&&this.ionSelect.emit({checked:!0,value:this.value}),this.emitStyle()},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.componentWillLoad=function(){void 0===this.value&&(this.value=this.inputId),this.emitStyle()},t.prototype.componentDidLoad=function(){this.ionRadioDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionRadioDidUnload.emit()},t.prototype.emitStyle=function(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})},t.prototype.render=function(){var t,e=this,i=e.inputId,a=e.disabled,c=e.checked,s=e.color,d=e.el,u=Object(n.e)(this),l=i+"-lbl",h=Object(r.f)(d);return h&&(h.id=l),Object(n.i)(n.a,{onClick:this.onClick,role:"radio","aria-disabled":a?"true":null,"aria-checked":""+c,"aria-labelledby":l,class:Object.assign({},Object(o.a)(s),(t={},t[u]=!0,t["in-item"]=Object(o.c)("ion-item",d),t.interactive=!0,t["radio-checked"]=c,t["radio-disabled"]=a,t))},Object(n.i)("div",{class:"radio-icon"},Object(n.i)("div",{class:"radio-inner"})),Object(n.i)("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:a}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{color:["colorChanged"],checked:["checkedChanged"],disabled:["disabledChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return':host{display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:layout size style}.radio-icon,button{width:100%;height:100%}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host{--color-checked:var(--ion-color-primary,#3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:.3}:host(.ion-focused) .radio-icon:after{border-radius:50%;left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint,#4c8dff);content:"";opacity:.2}:host-context([dir=rtl]).ion-focused .radio-icon:after,:host-context([dir=rtl]):host(.ion-focused) .radio-icon:after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:8px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}'},enumerable:!0,configurable:!0}),t}(),c=0,s=function(){function t(t){Object(n.m)(this,t),this.inputId="ion-rg-"+d++,this.labelId=this.inputId+"-lbl",this.radios=[],this.allowEmptySelection=!1,this.name=this.inputId,this.ionChange=Object(n.d)(this,"ionChange",7)}return t.prototype.valueChanged=function(t){this.updateRadios(),this.ionChange.emit({value:t})},t.prototype.onRadioDidLoad=function(t){var e=t.target;e.name=this.name,this.radios.push(e),null==this.value&&e.checked?this.value=e.value:this.updateRadios()},t.prototype.onRadioDidUnload=function(t){var e=this.radios.indexOf(t.target);e>-1&&this.radios.splice(e,1)},t.prototype.onRadioSelect=function(t){var e=t.target;e&&(this.value=e.value)},t.prototype.onRadioDeselect=function(t){if(this.allowEmptySelection){var e=t.target;e&&(e.checked=!1,this.value=void 0)}},t.prototype.componentDidLoad=function(){var t=this.el.querySelector("ion-list-header");if(t||(t=this.el.querySelector("ion-item-divider")),t){var e=t.querySelector("ion-label");e&&(this.labelId=e.id=this.name+"-lbl")}this.updateRadios()},t.prototype.updateRadios=function(){for(var t=this.value,e=!1,i=0,n=this.radios;i<n.length;i++){var o=n[i];e||o.value!==t?o.checked=!1:(e=!0,o.checked=!0)}},t.prototype.render=function(){return Object(n.i)(n.a,{role:"radiogroup","aria-labelledby":this.labelId,class:Object(n.e)(this)})},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:!0,configurable:!0}),t}(),d=0}}]);
//# sourceMappingURL=37.556bad02.chunk.js.map