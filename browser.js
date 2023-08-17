// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).accessors=r()}(this,(function(){"use strict";var e="function";var r={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function t(e){var t=r[e];return"function"==typeof t?t:r.default}var n={float64:function(e,r,t){e[r]=t},float32:function(e,r,t){e[r]=t},int32:function(e,r,t){e[r]=t},int16:function(e,r,t){e[r]=t},int8:function(e,r,t){e[r]=t},uint32:function(e,r,t){e[r]=t},uint16:function(e,r,t){e[r]=t},uint8:function(e,r,t){e[r]=t},uint8c:function(e,r,t){e[r]=t},generic:function(e,r,t){e[r]=t},default:function(e,r,t){e[r]=t}};function o(e){var r=n[e];return"function"==typeof r?r:n.default}var i={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function a(e){var r=i[e];return"function"==typeof r?r:i.default}var u={complex128:function(e,r,t){e.set(t,r)},complex64:function(e,r,t){e.set(t,r)},default:function(e,r,t){e.set(t,r)}};function f(e){var r=u[e];return"function"==typeof r?r:u.default}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var c,y=Object.defineProperty,s=Object.prototype,h=s.toString,p=s.__defineGetter__,m=s.__defineSetter__,g=s.__lookupGetter__,b=s.__lookupSetter__;c=function(){try{return l({},"x",{}),!0}catch(e){return!1}}()?y:function(e,r,t){var n,o,i,a;if("object"!=typeof e||null===e||"[object Array]"===h.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===h.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(g.call(e,r)||b.call(e,r)?(n=e.__proto__,e.__proto__=s,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),i="get"in t,a="set"in t,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&p&&p.call(e,r,t.get),a&&m&&m.call(e,r,t.set),e};var w=c;function v(e,r,t){w(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var d="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function E(){return d&&"symbol"==typeof Symbol.toStringTag}var A=Object.prototype.toString;var _=Object.prototype.hasOwnProperty;function T(e,r){return null!=e&&_.call(e,r)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var x=E()?function(e){var r,t,n;if(null==e)return A.call(e);t=e[j],r=T(e,j);try{e[j]=void 0}catch(r){return A.call(e)}return n=A.call(e),r?e[j]=t:delete e[j],n}:function(e){return A.call(e)};var B=Array.isArray?Array.isArray:function(e){return"[object Array]"===x(e)};function L(e){return null!==e&&"object"==typeof e}function S(e){return L(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function V(){return/^\s*function\s*([^(]*)/i}v(L,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!B(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(L));var R=/^\s*function\s*([^(]*)/i;function k(e){var r,t,n;if(("Object"===(t=x(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=R.exec(n.toString()))return r[1]}return S(e)?"Buffer":t}v(V,"REGEXP",R);var I={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},O="function"==typeof Float64Array;var C="function"==typeof Float64Array?Float64Array:null;var M="function"==typeof Float64Array?Float64Array:void 0;var U=function(){var e,r,t;if("function"!=typeof C)return!1;try{r=new C([1,3.14,-3.14,NaN]),t=r,e=(O&&t instanceof Float64Array||"[object Float64Array]"===x(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?M:function(){throw new Error("not implemented")},N="function"==typeof Float32Array;var P=Number.POSITIVE_INFINITY,F="function"==typeof Float32Array?Float32Array:null;var Y="function"==typeof Float32Array?Float32Array:void 0;var W=function(){var e,r,t;if("function"!=typeof F)return!1;try{r=new F([1,3.14,-3.14,5e40]),t=r,e=(N&&t instanceof Float32Array||"[object Float32Array]"===x(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===P}catch(r){e=!1}return e}()?Y:function(){throw new Error("not implemented")},G="function"==typeof Uint32Array;var J="function"==typeof Uint32Array?Uint32Array:null;var X="function"==typeof Uint32Array?Uint32Array:void 0;var q=function(){var e,r,t;if("function"!=typeof J)return!1;try{r=new J(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(G&&t instanceof Uint32Array||"[object Uint32Array]"===x(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?X:function(){throw new Error("not implemented")},z="function"==typeof Int32Array;var D="function"==typeof Int32Array?Int32Array:null;var H="function"==typeof Int32Array?Int32Array:void 0;var K=function(){var e,r,t;if("function"!=typeof D)return!1;try{r=new D([1,3.14,-3.14,2147483648]),t=r,e=(z&&t instanceof Int32Array||"[object Int32Array]"===x(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?H:function(){throw new Error("not implemented")},Q="function"==typeof Uint16Array;var Z="function"==typeof Uint16Array?Uint16Array:null;var $="function"==typeof Uint16Array?Uint16Array:void 0;var ee=function(){var e,r,t;if("function"!=typeof Z)return!1;try{r=new Z(r=[1,3.14,-3.14,65536,65537]),t=r,e=(Q&&t instanceof Uint16Array||"[object Uint16Array]"===x(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?$:function(){throw new Error("not implemented")},re="function"==typeof Int16Array;var te="function"==typeof Int16Array?Int16Array:null;var ne="function"==typeof Int16Array?Int16Array:void 0;var oe=function(){var e,r,t;if("function"!=typeof te)return!1;try{r=new te([1,3.14,-3.14,32768]),t=r,e=(re&&t instanceof Int16Array||"[object Int16Array]"===x(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?ne:function(){throw new Error("not implemented")},ie="function"==typeof Uint8Array;var ae="function"==typeof Uint8Array?Uint8Array:null;var ue="function"==typeof Uint8Array?Uint8Array:void 0;var fe=function(){var e,r,t;if("function"!=typeof ae)return!1;try{r=new ae(r=[1,3.14,-3.14,256,257]),t=r,e=(ie&&t instanceof Uint8Array||"[object Uint8Array]"===x(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?ue:function(){throw new Error("not implemented")},le="function"==typeof Uint8ClampedArray;var ce="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var ye="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var se=function(){var e,r,t;if("function"!=typeof ce)return!1;try{r=new ce([-1,0,1,3.14,4.99,255,256]),t=r,e=(le&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===x(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?ye:function(){throw new Error("not implemented")},he="function"==typeof Int8Array;var pe="function"==typeof Int8Array?Int8Array:null;var me="function"==typeof Int8Array?Int8Array:void 0;var ge=function(){var e,r,t;if("function"!=typeof pe)return!1;try{r=new pe([1,3.14,-3.14,128]),t=r,e=(he&&t instanceof Int8Array||"[object Int8Array]"===x(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?me:function(){throw new Error("not implemented")};function be(e){return"number"==typeof e}var we=Number,ve=we.prototype.toString;var de=E();function Ee(e){return"object"==typeof e&&(e instanceof we||(de?function(e){try{return ve.call(e),!0}catch(e){return!1}}(e):"[object Number]"===x(e)))}function Ae(e){return be(e)||Ee(e)}v(Ae,"isPrimitive",be),v(Ae,"isObject",Ee);var _e=we.NEGATIVE_INFINITY,Te=Math.floor;function je(e){return Te(e)===e}function xe(e){return e<P&&e>_e&&je(e)}function Be(e){return be(e)&&xe(e)}function Le(e){return Ee(e)&&xe(e.valueOf())}function Se(e){return Be(e)||Le(e)}function Ve(e){return Be(e)&&e>=0}function Re(e){return Le(e)&&e.valueOf()>=0}function ke(e){return Ve(e)||Re(e)}v(Se,"isPrimitive",Be),v(Se,"isObject",Le),v(ke,"isPrimitive",Ve),v(ke,"isObject",Re);function Ie(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&je(e.length)&&e.length>=0&&e.length<=4294967295}function Oe(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&je(e.length)&&e.length>=0&&e.length<=9007199254740991}var Ce="function"==typeof ArrayBuffer;function Me(e){return Ce&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===x(e)}function Ue(e){return"object"==typeof e&&null!==e&&!B(e)}var Ne=/./;function Pe(e){return"boolean"==typeof e}var Fe=Boolean.prototype.toString;var Ye=E();function We(e){return"object"==typeof e&&(e instanceof Boolean||(Ye?function(e){try{return Fe.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===x(e)))}function Ge(e){return Pe(e)||We(e)}function Je(){return new Function("return this;")()}v(Ge,"isPrimitive",Pe),v(Ge,"isObject",We);var Xe="object"==typeof self?self:null,qe="object"==typeof window?window:null,ze="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},De="object"==typeof ze?ze:null;var He=function(e){if(arguments.length){if(!Pe(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return Je()}if(Xe)return Xe;if(qe)return qe;if(De)return De;throw new Error("unexpected error. Unable to resolve global object.")}(),Ke=He.document&&He.document.childNodes,Qe=Int8Array;var Ze="function"==typeof Ne||"object"==typeof Qe||"function"==typeof Ke?function(e){return k(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?k(e).toLowerCase():r};function $e(e){return"function"===Ze(e)}function er(e,r){if(!(this instanceof er))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!be(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!be(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return w(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),w(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}v(er,"BYTES_PER_ELEMENT",8),v(er.prototype,"BYTES_PER_ELEMENT",8),v(er.prototype,"byteLength",16),v(er.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),v(er.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var rr="function"==typeof Math.fround?Math.fround:null,tr=new W(1);var nr="function"==typeof rr?rr:function(e){return tr[0]=e,tr[0]};function or(e,r){if(!(this instanceof or))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!be(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!be(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return w(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:nr(e)}),w(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:nr(r)}),this}function ir(e){return e instanceof er||e instanceof or||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function ar(e){return je(e/2)}function ur(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&T(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}v(or,"BYTES_PER_ELEMENT",4),v(or.prototype,"BYTES_PER_ELEMENT",4),v(or.prototype,"byteLength",8),v(or.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),v(or.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var fr=ur()?Symbol.iterator:null;function lr(e,r,t){w(e,r,{configurable:!1,enumerable:!1,get:t})}function cr(e){return e.re}function yr(e){return e.im}function sr(e,r){return new W(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function hr(e,r){return new U(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function pr(e,r){return e[r]}function mr(e,r){return e.get(r)}function gr(e,r,t){e[r]=t}function br(e,r,t){e.set(t,r)}function wr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?mr:pr,setter:r?br:gr}}function vr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ie(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!ir(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(cr(n),yr(n))}return r}function dr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,Ie(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!ir(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(cr(i),yr(i))}return n}function Er(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!ir(n=r[o]))return null;e[i]=cr(n),e[i+1]=yr(n),i+=2}return e}var Ar=2*W.BYTES_PER_ELEMENT,_r=ur();function Tr(e){return e instanceof Lr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function jr(e){return e===Lr||"Complex128Array"===e.name}function xr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Ar}function Br(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*Ar}function Lr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Lr))return 0===r?new Lr:1===r?new Lr(arguments[0]):2===r?new Lr(arguments[0],arguments[1]):new Lr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new W(0);else if(1===r)if(Ve(arguments[0]))t=new W(2*arguments[0]);else if(Oe(arguments[0]))if((n=(t=arguments[0]).length)&&B(t)&&ir(t[0])){if(null===(t=Er(new W(2*n),t))){if(!ar(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new W(arguments[0])}}else{if(xr(t))t=sr(t,0);else if(Br(t))t=hr(t,0);else if(!ar(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new W(t)}else if(Me(arguments[0])){if(!je((t=arguments[0]).byteLength/Ar))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Ar+". Byte length: `"+t.byteLength+"`.");t=new W(t)}else{if(!Ue(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===_r)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!$e(t[fr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!$e((t=t[fr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=vr(t))instanceof Error)throw t;t=new W(t)}else{if(!Me(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ve(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!je(e/Ar))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Ar+". Value: `"+e+"`.");if(2===r){if(!je((n=t.byteLength-e)/Ar))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Ar+". View byte length: `"+n+"`.");t=new W(t,e)}else{if(!Ve(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Ar>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Ar+"`.");t=new W(t,e,2*n)}}return v(this,"_buffer",t),v(this,"_length",t.length/2),this}function Sr(e){return e.re}function Vr(e){return e.im}function Rr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(Ie(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!ir(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(Sr(n),Vr(n))}return r}function kr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,Ie(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!ir(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(Sr(i),Vr(i))}return n}function Ir(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!ir(n=r[o]))return null;e[i]=Sr(n),e[i+1]=Vr(n),i+=2}return e}v(Lr,"BYTES_PER_ELEMENT",Ar),v(Lr,"name","Complex64Array"),v(Lr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!$e(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!$e(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Tr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ir(l=n.call(r,e.get(c),c)))i[y]=cr(l),i[y+1]=yr(l);else{if(!(Ie(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Oe(e)){if(n){for(u=e.length,a=wr(e),c=0;c<u;c++)if(!ir(a.getter(e,c))){f=!0;break}if(f){if(!ar(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ir(l=n.call(r,a.getter(e,c),c)))i[y]=cr(l),i[y+1]=yr(l);else{if(!(Ie(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ue(e)&&_r&&$e(e[fr])){if(!$e((i=e[fr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?dr(i,n,r):vr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),v(Lr,"of",(function(){var e,r;if(!$e(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!jr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),lr(Lr.prototype,"buffer",(function(){return this._buffer.buffer})),lr(Lr.prototype,"byteLength",(function(){return this._buffer.byteLength})),lr(Lr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),v(Lr.prototype,"BYTES_PER_ELEMENT",Lr.BYTES_PER_ELEMENT),v(Lr.prototype,"copyWithin",(function(e,r){if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),v(Lr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,v(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new or(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),v(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),fr&&v(t,fr,(function(){return r.entries()})),t})),v(Lr.prototype,"get",(function(e){var r;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ve(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new or((r=this._buffer)[e*=2],r[e+1])})),lr(Lr.prototype,"length",(function(){return this._length})),v(Lr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Tr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ve(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ir(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=cr(e),void(n[t+1]=yr(e))}if(Tr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Ar,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new W(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Oe(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!ir(e[f])){i=!0;break}if(i){if(!ar(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Ar,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new W(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=cr(u),n[t+1]=yr(u),t+=2}}));var Or=2*U.BYTES_PER_ELEMENT,Cr=ur();function Mr(e){return e instanceof Fr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ur(e){return e===Fr||"Complex64Array"===e.name}function Nr(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Or/2}function Pr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Or}function Fr(){var e,r,t,n;if(r=arguments.length,!(this instanceof Fr))return 0===r?new Fr:1===r?new Fr(arguments[0]):2===r?new Fr(arguments[0],arguments[1]):new Fr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new U(0);else if(1===r)if(Ve(arguments[0]))t=new U(2*arguments[0]);else if(Oe(arguments[0]))if((n=(t=arguments[0]).length)&&B(t)&&ir(t[0])){if(null===(t=Ir(new U(2*n),t))){if(!ar(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(arguments[0])}}else{if(Nr(t))t=sr(t,0);else if(Pr(t))t=hr(t,0);else if(!ar(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new U(t)}else if(Me(arguments[0])){if(!je((t=arguments[0]).byteLength/Or))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Or+". Byte length: `"+t.byteLength+"`.");t=new U(t)}else{if(!Ue(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===Cr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!$e(t[fr]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!$e((t=t[fr]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Rr(t))instanceof Error)throw t;t=new U(t)}else{if(!Me(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!Ve(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!je(e/Or))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Or+". Value: `"+e+"`.");if(2===r){if(!je((n=t.byteLength-e)/Or))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Or+". View byte length: `"+n+"`.");t=new U(t,e)}else{if(!Ve(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Or>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Or+"`.");t=new U(t,e,2*n)}}return v(this,"_buffer",t),v(this,"_length",t.length/2),this}v(Fr,"BYTES_PER_ELEMENT",Or),v(Fr,"name","Complex128Array"),v(Fr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!$e(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ur(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!$e(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Mr(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ir(l=n.call(r,e.get(c),c)))i[y]=Sr(l),i[y+1]=Vr(l);else{if(!(Ie(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Oe(e)){if(n){for(u=e.length,a=wr(e),c=0;c<u;c++)if(!ir(a.getter(e,c))){f=!0;break}if(f){if(!ar(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(ir(l=n.call(r,a.getter(e,c),c)))i[y]=Sr(l),i[y+1]=Vr(l);else{if(!(Ie(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ue(e)&&Cr&&$e(e[fr])){if(!$e((i=e[fr]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?kr(i,n,r):Rr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),v(Fr,"of",(function(){var e,r;if(!$e(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ur(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),lr(Fr.prototype,"buffer",(function(){return this._buffer.buffer})),lr(Fr.prototype,"byteLength",(function(){return this._buffer.byteLength})),lr(Fr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),v(Fr.prototype,"BYTES_PER_ELEMENT",Fr.BYTES_PER_ELEMENT),v(Fr.prototype,"copyWithin",(function(e,r){if(!Mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),v(Fr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,v(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new er(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),v(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),fr&&v(t,fr,(function(){return r.entries()})),t})),v(Fr.prototype,"get",(function(e){var r;if(!Mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!Ve(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new er((r=this._buffer)[e*=2],r[e+1])})),lr(Fr.prototype,"length",(function(){return this._length})),v(Fr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Mr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!Ve(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(ir(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=Sr(e),void(n[t+1]=Vr(e))}if(Mr(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Or,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new U(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!Oe(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!ir(e[f])){i=!0;break}if(i){if(!ar(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Or,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new U(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=Sr(u),n[t+1]=Vr(u),t+=2}}));var Yr=[U,W,K,q,oe,ee,ge,fe,se,Lr,Fr],Wr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Gr=Wr.length;return function(r){var n,i=function(e){var r;if(B(e))return"generic";if(S(e))return null;for(r=0;r<Gr;r++)if(e instanceof Yr[r])return Wr[r];return I[k(e)]||null}(r);return typeof(n=r).get===e&&typeof n.set===e?{accessorProtocol:!0,accessors:[a(i),f(i)]}:{accessorProtocol:!1,accessors:[t(i),o(i)]}}}));
//# sourceMappingURL=browser.js.map
