(window["webpackJsonpnine-mens-morris"]=window["webpackJsonpnine-mens-morris"]||[]).push([[88],{75:function(t,i,o){"use strict";o.r(i),o.d(i,"ion_img",function(){return e});var n=o(13),e=(o(1),function(){function t(t){var i=this;Object(n.m)(this,t),this.onLoad=function(){i.ionImgDidLoad.emit()},this.onError=function(){i.ionError.emit()},this.ionImgWillLoad=Object(n.d)(this,"ionImgWillLoad",7),this.ionImgDidLoad=Object(n.d)(this,"ionImgDidLoad",7),this.ionError=Object(n.d)(this,"ionError",7)}return t.prototype.srcChanged=function(){this.addIO()},t.prototype.componentDidLoad=function(){this.addIO()},t.prototype.addIO=function(){var t=this;void 0!==this.src&&("IntersectionObserver"in window?(this.removeIO(),this.io=new IntersectionObserver(function(i){i[0].isIntersecting&&(t.load(),t.removeIO())}),this.io.observe(this.el)):setTimeout(function(){return t.load()},200))},t.prototype.load=function(){this.loadError=this.onError,this.loadSrc=this.src,this.ionImgWillLoad.emit()},t.prototype.removeIO=function(){this.io&&(this.io.disconnect(),this.io=void 0)},t.prototype.render=function(){return Object(n.i)(n.a,{class:Object(n.e)(this)},Object(n.i)("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.f)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-o-object-fit:contain;object-fit:contain}:host,img{display:block}img{width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}"},enumerable:!0,configurable:!0}),t}())}}]);
//# sourceMappingURL=88.8d285cee.chunk.js.map