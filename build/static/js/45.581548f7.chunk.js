(window["webpackJsonpnine-mens-morris"]=window["webpackJsonpnine-mens-morris"]||[]).push([[45],{121:function(t,e,i){"use strict";i.r(e),i.d(e,"ion_textarea",function(){return l});var n=i(2),o=i(13),r=(i(1),i(133)),a=i(134),l=function(){function t(t){var e=this;Object(o.m)(this,t),this.inputId="ion-input-"+d++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.autoGrow=!1,this.value="",this.onInput=function(t){e.nativeInput&&(e.value=e.nativeInput.value),e.emitStyle(),e.ionInput.emit(t)},this.onFocus=function(){e.hasFocus=!0,e.focusChange(),e.ionFocus.emit()},this.onBlur=function(){e.hasFocus=!1,e.focusChange(),e.ionBlur.emit()},this.onKeyDown=function(){e.checkClearOnEdit()},this.ionChange=Object(o.d)(this,"ionChange",7),this.ionInput=Object(o.d)(this,"ionInput",7),this.ionStyle=Object(o.d)(this,"ionStyle",7),this.ionBlur=Object(o.d)(this,"ionBlur",7),this.ionFocus=Object(o.d)(this,"ionFocus",7),this.ionInputDidLoad=Object(o.d)(this,"ionInputDidLoad",7),this.ionInputDidUnload=Object(o.d)(this,"ionInputDidUnload",7)}return t.prototype.debounceChanged=function(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var t=this.nativeInput,e=this.getValue();t&&t.value!==e&&(t.value=e),this.runAutoGrow(),this.emitStyle(),this.ionChange.emit({value:e})},t.prototype.componentWillLoad=function(){this.emitStyle()},t.prototype.componentDidLoad=function(){this.debounceChanged(),this.runAutoGrow(),this.ionInputDidLoad.emit()},t.prototype.runAutoGrow=function(){var t=this.nativeInput;t&&this.autoGrow&&Object(o.g)(function(){t.style.height="inherit",t.style.height=t.scrollHeight+"px"})},t.prototype.componentDidUnload=function(){this.ionInputDidUnload.emit()},t.prototype.setFocus=function(){return n.a(this,void 0,void 0,function(){return n.c(this,function(t){return this.nativeInput&&this.nativeInput.focus(),[2]})})},t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus})},t.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)},t.prototype.focusChange=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()},t.prototype.hasValue=function(){return""!==this.getValue()},t.prototype.getValue=function(){return this.value||""},t.prototype.render=function(){var t,e=this,i=Object(o.e)(this),n=this.getValue(),l=this.inputId+"-lbl",d=Object(a.f)(this.el);return d&&(d.id=l),Object(o.i)(o.a,{"aria-disabled":this.disabled?"true":null,class:Object.assign({},Object(r.a)(this.color),(t={},t[i]=!0,t))},Object(o.i)("textarea",{class:"native-textarea",ref:function(t){return e.nativeInput=t},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeyDown},n))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-textarea-md-h{--background:initial;--color:initial;--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);white-space:pre-wrap;z-index:2}.ion-color.sc-ion-textarea-md-h{background:initial;color:var(--ion-color-base)}ion-item.sc-ion-textarea-md-h, ion-item .sc-ion-textarea-md-h{-ms-flex-item-align:baseline;align-self:baseline}ion-item.sc-ion-textarea-md-h:not(.item-label), ion-item:not(.item-label) .sc-ion-textarea-md-h{--padding-start:0}.native-textarea.sc-ion-textarea-md{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-textarea.sc-ion-textarea-md{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-textarea.sc-ion-textarea-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-md{opacity:.4}.cloned-input.sc-ion-textarea-md{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md, [dir=rtl] .sc-ion-textarea-md-h .cloned-input.sc-ion-textarea-md, [dir=rtl].sc-ion-textarea-md .cloned-input.sc-ion-textarea-md{left:unset;right:unset;right:0}.sc-ion-textarea-md-h{--padding-top:10px;--padding-end:0;--padding-bottom:11px;--padding-start:8px;margin-left:0;margin-right:0;margin-top:8px;margin-bottom:0;font-size:inherit}.item-label-floating.sc-ion-textarea-md-h, .item-label-floating .sc-ion-textarea-md-h, .item-label-stacked.sc-ion-textarea-md-h, .item-label-stacked .sc-ion-textarea-md-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0}"},enumerable:!0,configurable:!0}),t}(),d=0},133:function(t,e,i){"use strict";i.d(e,"a",function(){return r}),i.d(e,"b",function(){return a}),i.d(e,"c",function(){return o}),i.d(e,"d",function(){return d});var n=i(2),o=function(t,e){return null!==e.closest(t)},r=function(t){var e;return"string"===typeof t&&t.length>0?((e={"ion-color":!0})["ion-color-"+t]=!0,e):void 0},a=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return e[t]=!0}),e},l=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,i){return n.a(void 0,void 0,void 0,function(){var o;return n.c(this,function(n){return null!=t&&"#"!==t[0]&&!l.test(t)&&(o=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,o.push(t,i)]):[2,!1]})})}},134:function(t,e,i){"use strict";i.d(e,"a",function(){return n}),i.d(e,"b",function(){return d}),i.d(e,"c",function(){return l}),i.d(e,"d",function(){return h}),i.d(e,"e",function(){return p}),i.d(e,"f",function(){return r}),i.d(e,"g",function(){return o}),i.d(e,"h",function(){return u}),i.d(e,"i",function(){return s}),i.d(e,"j",function(){return c}),i.d(e,"k",function(){return a});var n=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},r=function(t){var e=t.closest("ion-item");return e?e.querySelector("ion-label"):null},a=function(t,e,i,n,r){if(t||o(e)){var a=e.querySelector("input.aux-input");a||((a=e.ownerDocument.createElement("input")).type="hidden",a.classList.add("aux-input"),e.appendChild(a)),a.disabled=r,a.name=i,a.value=n||""}},l=function(t,e,i){return Math.max(t,Math.min(e,i))},d=function(t,e){if(!t){var i="ASSERT: "+e;throw console.error(i),new Error(i)}},s=function(t){return t.timeStamp||Date.now()},c=function(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var i=e[0];return{x:i.clientX,y:i.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},u=function(t){var e="rtl"===document.dir;switch(t){case"start":return e;case"end":return!e;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},h=function(t,e){var i=t._original||t;return{_original:t,emit:p(i.emit.bind(i),e)}},p=function(t,e){var i;return void 0===e&&(e=0),function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];clearTimeout(i),i=setTimeout.apply(void 0,[t,e].concat(n))}}}}]);
//# sourceMappingURL=45.581548f7.chunk.js.map