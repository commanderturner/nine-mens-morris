(window["webpackJsonpnine-mens-morris"]=window["webpackJsonpnine-mens-morris"]||[]).push([[31],{147:function(t,i,n){"use strict";n.r(i),n.d(i,"ion_input",function(){return s});var e=n(7),o=n(22),a=(n(5),n(202)),r=n(203),s=function(){function t(t){var i=this;Object(o.m)(this,t),this.inputId="ion-input-"+u++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="off",this.autocomplete="off",this.autocorrect="off",this.autofocus=!1,this.clearInput=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.type="text",this.value="",this.onInput=function(t){var n=t.target;n&&(i.value=n.value||""),i.ionInput.emit(t)},this.onBlur=function(){i.hasFocus=!1,i.focusChanged(),i.emitStyle(),i.ionBlur.emit()},this.onFocus=function(){i.hasFocus=!0,i.focusChanged(),i.emitStyle(),i.ionFocus.emit()},this.onKeydown=function(){i.clearOnEdit&&(i.didBlurAfterEdit&&i.hasValue()&&i.clearTextInput(),i.didBlurAfterEdit=!1)},this.clearTextInput=function(t){i.clearInput&&!i.readonly&&!i.disabled&&t&&(t.preventDefault(),t.stopPropagation()),i.value="",i.nativeInput&&(i.nativeInput.value="")},this.ionInput=Object(o.d)(this,"ionInput",7),this.ionChange=Object(o.d)(this,"ionChange",7),this.ionBlur=Object(o.d)(this,"ionBlur",7),this.ionFocus=Object(o.d)(this,"ionFocus",7),this.ionInputDidLoad=Object(o.d)(this,"ionInputDidLoad",7),this.ionInputDidUnload=Object(o.d)(this,"ionInputDidUnload",7),this.ionStyle=Object(o.d)(this,"ionStyle",7)}return t.prototype.debounceChanged=function(){this.ionChange=Object(r.d)(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){this.emitStyle(),this.ionChange.emit({value:this.value})},t.prototype.componentWillLoad=function(){void 0===this.clearOnEdit&&"password"===this.type&&(this.clearOnEdit=!0),this.emitStyle()},t.prototype.componentDidLoad=function(){this.debounceChanged(),this.ionInputDidLoad.emit()},t.prototype.componentDidUnload=function(){this.ionInputDidUnload.emit()},t.prototype.setFocus=function(){return e.a(this,void 0,void 0,function(){return e.c(this,function(t){return this.nativeInput&&this.nativeInput.focus(),[2]})})},t.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)},t.prototype.getValue=function(){return this.value||""},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,input:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"has-focus":this.hasFocus,"interactive-disabled":this.disabled})},t.prototype.focusChanged=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0)},t.prototype.hasValue=function(){return this.getValue().length>0},t.prototype.render=function(){var t,i=this,n=Object(o.e)(this),e=this.getValue(),s=this.inputId+"-lbl",u=Object(r.f)(this.el);return u&&(u.id=s),Object(o.i)(o.a,{"aria-disabled":this.disabled?"true":null,class:Object.assign({},Object(a.a)(this.color),(t={},t[n]=!0,t["has-value"]=this.hasValue(),t["has-focus"]=this.hasFocus,t))},Object(o.i)("input",{class:"native-input",ref:function(t){return i.nativeInput=t},"aria-labelledby":s,disabled:this.disabled,accept:this.accept,autoCapitalize:this.autocapitalize,autoComplete:this.autocomplete,autoCorrect:this.autocorrect,autoFocus:this.autofocus,inputMode:this.inputmode,min:this.min,max:this.max,minLength:this.minlength,maxLength:this.maxlength,multiple:this.multiple,name:this.name,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,step:this.step,size:this.size,type:this.type,value:e,onInput:this.onInput,onBlur:this.onBlur,onFocus:this.onFocus,onKeyDown:this.onKeydown}),this.clearInput&&!this.readonly&&!this.disabled&&Object(o.i)("button",{type:"button",class:"input-clear-icon",tabindex:"-1",onTouchStart:this.clearTextInput,onMouseDown:this.clearTextInput}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(o.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{debounce:["debounceChanged"],disabled:["disabledChanged"],value:["valueChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-input-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--background:transparent;--color:initial;display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;width:100%;padding:0!important;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);z-index:2}ion-item.sc-ion-input-ios-h:not(.item-label), ion-item:not(.item-label) .sc-ion-input-ios-h{--padding-start:0}.ion-color.sc-ion-input-ios-h{color:var(--ion-color-base)}.native-input.sc-ion-input-ios{border-radius:var(--border-radius);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:inline-block;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;border:0;outline:none;background:transparent;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.native-input.sc-ion-input-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.native-input.sc-ion-input-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-input.sc-ion-input-ios:-webkit-autofill{background-color:transparent}.native-input.sc-ion-input-ios:invalid{-webkit-box-shadow:none;box-shadow:none}.native-input.sc-ion-input-ios::-ms-clear{display:none}.native-input[disabled].sc-ion-input-ios{opacity:.4}.cloned-input.sc-ion-input-ios{left:0;top:0;position:absolute;pointer-events:none}[dir=rtl].sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl] .sc-ion-input-ios-h .cloned-input.sc-ion-input-ios, [dir=rtl].sc-ion-input-ios .cloned-input.sc-ion-input-ios{left:unset;right:unset;right:0}.input-clear-icon.sc-ion-input-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;background-position:50%;border:0;outline:none;background-color:transparent;background-repeat:no-repeat;visibility:hidden;-webkit-appearance:none;-moz-appearance:none;appearance:none}.has-focus.has-value.sc-ion-input-ios-h .input-clear-icon.sc-ion-input-ios{visibility:visible}.has-focus.sc-ion-input-ios-h{pointer-events:none}.has-focus.sc-ion-input-ios-h a.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h button.sc-ion-input-ios, .has-focus.sc-ion-input-ios-h input.sc-ion-input-ios{pointer-events:auto}.sc-ion-input-ios-h{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.item-label-floating.sc-ion-input-ios-h, .item-label-floating .sc-ion-input-ios-h, .item-label-stacked.sc-ion-input-ios-h, .item-label-stacked .sc-ion-input-ios-h{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}.input-clear-icon.sc-ion-input-ios{background-image:url(\"data:image/svg+xml;charset=utf-8,<svg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20512%20512'><path%20fill='var(--ion-color-step-600,%20%23666666)'%20d='M403.1,108.9c-81.2-81.2-212.9-81.2-294.2,0s-81.2,212.9,0,294.2c81.2,81.2,212.9,81.2,294.2,0S484.3,190.1,403.1,108.9z%20M352,340.2L340.2,352l-84.4-84.2l-84,83.8L160,339.8l84-83.8l-84-83.8l11.8-11.8l84,83.8l84.4-84.2l11.8,11.8L267.6,256L352,340.2z'/></svg>\");width:30px;height:30px;background-size:18px}"},enumerable:!0,configurable:!0}),t}(),u=0},202:function(t,i,n){"use strict";n.d(i,"a",function(){return a}),n.d(i,"b",function(){return r}),n.d(i,"c",function(){return o}),n.d(i,"d",function(){return u});var e=n(7),o=function(t,i){return null!==i.closest(t)},a=function(t){var i;return"string"===typeof t&&t.length>0?((i={"ion-color":!0})["ion-color-"+t]=!0,i):void 0},r=function(t){var i={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}(t).forEach(function(t){return i[t]=!0}),i},s=/^[a-z][a-z0-9+\-.]*:/,u=function(t,i,n){return e.a(void 0,void 0,void 0,function(){var o;return e.c(this,function(e){return null!=t&&"#"!==t[0]&&!s.test(t)&&(o=document.querySelector("ion-router"))?(null!=i&&i.preventDefault(),[2,o.push(t,n)]):[2,!1]})})}},203:function(t,i,n){"use strict";n.d(i,"a",function(){return e}),n.d(i,"b",function(){return u}),n.d(i,"c",function(){return s}),n.d(i,"d",function(){return p}),n.d(i,"e",function(){return h}),n.d(i,"f",function(){return a}),n.d(i,"g",function(){return o}),n.d(i,"h",function(){return d}),n.d(i,"i",function(){return l}),n.d(i,"j",function(){return c}),n.d(i,"k",function(){return r});var e=function(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)},o=function(t){return!!t.shadowRoot&&!!t.attachShadow},a=function(t){var i=t.closest("ion-item");return i?i.querySelector("ion-label"):null},r=function(t,i,n,e,a){if(t||o(i)){var r=i.querySelector("input.aux-input");r||((r=i.ownerDocument.createElement("input")).type="hidden",r.classList.add("aux-input"),i.appendChild(r)),r.disabled=a,r.name=n,r.value=e||""}},s=function(t,i,n){return Math.max(t,Math.min(i,n))},u=function(t,i){if(!t){var n="ASSERT: "+i;throw console.error(n),new Error(n)}},l=function(t){return t.timeStamp||Date.now()},c=function(t){if(t){var i=t.changedTouches;if(i&&i.length>0){var n=i[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}},d=function(t){var i="rtl"===document.dir;switch(t){case"start":return i;case"end":return!i;default:throw new Error('"'+t+'" is not a valid value for [side]. Use "start" or "end" instead.')}},p=function(t,i){var n=t._original||t;return{_original:t,emit:h(n.emit.bind(n),i)}},h=function(t,i){var n;return void 0===i&&(i=0),function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];clearTimeout(n),n=setTimeout.apply(void 0,[t,i].concat(e))}}}}]);
//# sourceMappingURL=31.275f315e.chunk.js.map