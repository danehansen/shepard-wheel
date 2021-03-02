(this["webpackJsonpshepard-wheel"]=this["webpackJsonpshepard-wheel"]||[]).push([[0],{1:function(e,t,a){e.exports={root:"Menu_root__3QA5H",property:"Menu_property__qoOWz",columns:"Menu_columns__3o8dK",title:"Menu_title__tE_9H",label:"Menu_label__3hKMT",labelText:"Menu_labelText__2uoMn",input:"Menu_input__17q9X"}},14:function(e,t,a){e.exports={root:"Label_root__iHLA-",button:"Label_button__opkRi",small:"Label_small__FYd4m"}},19:function(e,t,a){e.exports={root:"TouchPad_root__22wzt"}},20:function(e,t,a){e.exports={root:"Display_root__ig8ld"}},25:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),c=a(17),o=a.n(c),r=(a(25),a(18)),s=a(3),l=a(8),h=a.n(l),u=a(1),d=a.n(u),v=2e4,m="sine",b="square",f="sawtooth",p="triangle",j="equal",x=a(0);function _(e,t){var a=String(e);return 1===e?a+=" (chromatic)":e===t-1?a+=" (reverse chromatic)":12===t&&7===e&&(a+=" (circle of fifths)"),a}function g(e){var t=e.a4,a=(e.temperment,e.semitones),n=e.minFreq,i=e.maxFreq,c=e.layoutIncrement,o=e.oscillator,r=e.rootPitch,s=e.setMinFreq,l=e.setMaxFreq,h=e.setA4,u=(e.setTemperment,e.setOscillator),j=e.setSemitones,g=e.setRootPitch,O=e.setLayoutIncrement,y=e.pitchNames,M=e.incrementOptions;function w(e){var t=e.target.value;u(t)}return Object(x.jsxs)("form",{className:d.a.root,children:[Object(x.jsxs)("div",{className:d.a.property,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Oscillator"}),Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"radio",checked:o===m,value:m,onChange:w}),Object(x.jsx)("div",{className:d.a.labelText,children:m})]}),Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"radio",checked:o===b,value:b,onChange:w}),Object(x.jsx)("div",{className:d.a.labelText,children:b})]}),Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"radio",checked:o===f,value:f,onChange:w}),Object(x.jsx)("div",{className:d.a.labelText,children:f})]}),Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"radio",checked:o===p,value:p,onChange:w}),Object(x.jsx)("div",{className:d.a.labelText,children:p})]})]}),Object(x.jsxs)("div",{className:d.a.property,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Semitones"}),Object(x.jsx)("label",{className:d.a.label,children:Object(x.jsx)("input",{className:d.a.input,type:"range",min:1,max:120,value:a,step:"1",onChange:function(e){var t=e.target.value;j(parseInt(t))}})})]}),Object(x.jsxs)("div",{className:d.a.property,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Root Pitch"}),Object(x.jsx)("div",{className:d.a.columns,children:y.map((function(e,t){return Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"radio",value:t,name:"rootPitch",checked:r===t,onChange:function(e){var t=e.target.value;g(parseInt(t))}}),Object(x.jsx)("div",{className:d.a.labelText,children:e})]},e)}))})]}),Object(x.jsxs)("div",{className:d.a.property,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Layout Increment"}),M.map((function(e){return Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"radio",value:e,name:"increment",checked:c===e,onChange:function(e){var t=e.target.value;O(parseInt(t))}}),Object(x.jsx)("div",{className:d.a.labelText,children:_(e,a)})]},e)}))]}),Object(x.jsxs)("div",{className:d.a.property,children:[Object(x.jsx)("h2",{className:d.a.title,children:"Frequencies"}),Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"range",min:20,max:v,value:n,step:"1",onChange:function(e){var t=e.target.value;s(parseInt(t))}}),Object(x.jsx)("div",{className:d.a.labelText,children:"Minimum Frequency"})]}),Object(x.jsxs)("label",{className:d.a.label,children:[Object(x.jsx)("input",{className:d.a.input,type:"range",min:20,max:v,value:i,step:"1",onChange:function(e){var t=e.target.value;l(parseInt(t))}}),Object(x.jsx)("div",{className:d.a.labelText,children:"Max Frequency"})]})]}),Object(x.jsxs)("div",{className:d.a.property,children:[Object(x.jsx)("h2",{className:d.a.title,children:"A4"}),Object(x.jsx)("label",{className:d.a.label,children:Object(x.jsx)("input",{className:d.a.input,type:"number",min:20,max:v,value:t,step:"1",onChange:function(e){var t=e.target.value;h(parseInt(t))}})})]})]})}var O=a(12);function y(e,t){Object(O.a)(Array(e).keys());for(var a=[],n=0;n<e;n++){var i=n*t%e;if(void 0!==a[i])return!1;a[i]=i}return a}var M=a(4),w=["A","A\u266f/B\u266d","B","C","C\u266f/D\u266d","D","D\u266f/E\u266d","E","F","F\u266f/G\u266d","G","G\u266f/A\u266d"],P=a(6),N=a(7),T=a(13),I=a(11),k=function(e){Object(T.a)(a,e);var t=Object(I.a)(a);function a(e){var n;Object(P.a)(this,a),(n=t.call(this,e))._onResize=function(){var e=n.props.win;n.setState({innerHeight:e.innerHeight,innerWidth:e.innerWidth})};var i=e.win;return n.state={innerHeight:i.innerHeight,innerWidth:i.innerWidth},i.addEventListener("resize",n._onResize),n}return Object(N.a)(a,[{key:"componentWillUnmount",value:function(){this.props.win.removeEventListener("resize",this._onResize)}},{key:"render",value:function(){var e=this.state,t=e.innerHeight,a=e.innerWidth;return(0,this.props.children)(a,t)}}]),a}(i.a.Component);k.defaultProps={win:"undefined"!==typeof window?window:{addEventListener:function(){},innerHeight:0,innerWidth:0,removeEventListener:function(){}}};var R=a(14),C=a.n(R),S=a(10),H=a.n(S);function q(e){var t=function(e){return e*Math.PI/180}(-e),a=2*Math.PI,n=t+.5*Math.PI;return Object(M.modulo)(n,a)}function D(e,t,a,n){return q(e*n/t*360-360/t*a*n)}function A(e){var t=e.rootPitch,a=e.semitones,n=e.layoutIncrement,i=e.pitchNames;return Object(x.jsx)("div",{className:C.a.root,children:i.map((function(e,i){var c=D(i,a,t,n),o=Math.cos(c),r=-Math.sin(c);return Object(x.jsx)("div",{className:H()(C.a.button,e.length>1&&C.a.small),style:{left:"".concat(35*o+50,"%"),top:"".concat(35*r+50,"%")},children:e},e)}))})}var F=a(19),W=a.n(F);function L(e,t,a,n){for(var i=2*Math.PI,c=i/t,o=360/t,r=0;r<t;r++){var s=q(Object(M.modulo)(o*(r-a)*n,360)),l=s-c/2,h=s+c/2,u=e;if(l<=u&&h>=u)return r;if(l<0&&h>0?u-=i:l<i&&h>i&&(u+=i),l<=u&&h>=u)return r}}function z(e){e.className;var t=e.callback,a=e.semitones,i=e.diameter,c=e.layoutIncrement,o=e.rootPitch,r=Object(n.useRef)(null);function s(e){var n=e.targetTouches;n||t([]);for(var s=r.current.getBoundingClientRect(),l=[],h=0;h<n.length;h++){var u=n[h],d=u.clientX,v=u.clientY,m=d-s.x-.5*i,b=-(v-s.y-.5*i);if(Math.sqrt(Math.pow(m,2)+Math.pow(b,2))<=i/2){var f=L(Object(M.modulo)(Math.atan2(b,m),2*Math.PI),a,o,c);l.push(f)}}t(l)}return Object(x.jsx)("div",{ref:r,className:W.a.root,onTouchMove:function(e){s(e)},onTouchStart:function(e){s(e)},onTouchEnd:function(e){e.targetTouches,s(e)},onTouchCancel:function(e){s(e)}})}var E=a(20),B=a.n(E);function G(e,t,a,n,i){var c=Math.cos(e),o=Math.sin(e),r=t-c*t-o*-a,s=a-o*t-c*a;i.call(n,c,o,-o,c,r,s)}var Y=function(){function e(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.createElement("canvas"),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a.offsetWidth,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a.offsetHeight,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:window.devicePixelRatio;Object(P.a)(this,e),this.resize=function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:window.devicePixelRatio;if(!e||!a){var i=!!t._element.parentNode;e=i?t._element.offsetWidth:t._width,a=i?t._element.offsetHeight:t._height}t._devicePixelRatio=n,t._width=e,t._height=a,t._element.width=e*t._devicePixelRatio,t._element.height=a*t._devicePixelRatio,t._imageDataHandler=null,t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.arc=function(e,a,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:2*Math.PI,o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];t._context.arc(e,a,n,i,c,o)},this.beginPath=function(){t._context.beginPath()},this.bezierCurveTo=function(){var e;(e=t._context).bezierCurveTo.apply(e,arguments)},this.clearRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.clearRect(e,a,n,i),t._imageDataHandler=null},this.clip=function(){var e;(e=t._context).clip.apply(e,arguments)},this.closePath=function(){t._context.closePath()},this.drawImage=function(a,n,i,c,o,r,s,l,h){var u=a instanceof e;"number"===typeof r?u?(n*=t._devicePixelRatio,i*=t._devicePixelRatio,c*=t._devicePixelRatio,o*=t._devicePixelRatio,t._context.drawImage(a.element,n,i,c,o,r,s,l,h)):t._context.drawImage(a,n,i,c,o,r,s,l,h):u?(c=c||a.width,o=o||a.height,t._drawImageDest(a.element,n,i,c,o)):t._drawImageDest(a,n,i,c,o),t._imageDataHandler=null},this._drawImageDest=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:e.width,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:e.height;t._context.drawImage(e,a,n,i,c)},this.fill=function(){var e;(e=t._context).fill.apply(e,arguments),t._imageDataHandler=null},this.fillRect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.fillRect(e,a,n,i),t._imageDataHandler=null},this.lineTo=function(){var e;(e=t._context).lineTo.apply(e,arguments)},this.moveTo=function(){var e;(e=t._context).moveTo.apply(e,arguments)},this.quadraticCurveTo=function(){var e;(e=t._context).quadraticCurveTo.apply(e,arguments)},this.rect=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.width,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.height;t._context.rect(e,a,n,i)},this.stroke=function(){var e;(e=t._context).stroke.apply(e,arguments),t._imageDataHandler=null},this.resetTransform=function(){t._context.resetTransform(),t._context.scale(t._devicePixelRatio,t._devicePixelRatio)},this.restore=function(){t._context.restore()},this.rotate=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;e&&G(e,a,n,t._context,t._context.transform)},this.save=function(){t._context.save()},this.setRotate=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5*t.width,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5*t.height;G(e,a,n,t._context,t.setTransform)},this.setTransform=function(e,a,n,i,c,o){e*=t._devicePixelRatio,a*=t._devicePixelRatio,n*=t._devicePixelRatio,i*=t._devicePixelRatio,c*=t._devicePixelRatio,o*=t._devicePixelRatio,t._context.setTransform(e,a,n,i,c,o)},this.setTranslate=function(e,a){t.setTransform(1,0,0,1,e,a)},this.translate=function(e,a){t._context.translate(e,a)},this.createImageData=function(e,a){return t._context.createImageData(e,a)},this._element=a,this._context=this._element.getContext("2d"),this.resize(n,i,c)}return Object(N.a)(e,[{key:"element",get:function(){return this._element}},{key:"height",get:function(){return this._height}},{key:"imageDataHandler",get:function(){if(!this._imageDataHandler)this._width,this._devicePixelRatio,this._height,this._devicePixelRatio;return this._imageDataHandler}},{key:"width",get:function(){return this._width}},{key:"fillStyle",set:function(e){this._context.fillStyle=e}},{key:"globalCompositeOperation",set:function(e){this._context.globalCompositeOperation=e}},{key:"globalAlpha",set:function(e){this._context.globalAlpha=e}},{key:"lineWidth",set:function(e){this._context.lineWidth=e}},{key:"strokeStyle",set:function(e){this._context.strokeStyle=e}}],[{key:"quadraticThrough",value:function(e){for(var t,a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Path2D,i=e.length,c=0;c<i-1;c++)if(t=a||e[0],a=e[c+1],0===c)n.moveTo(t.x,t.y);else if(c<i-2){var o=(t.x+a.x)/2,r=(t.y+a.y)/2;n.quadraticCurveTo(t.x,t.y,o,r)}else n.quadraticCurveTo(t.x,t.y,a.x,a.y);return n}}]),e}(),J=function(e){Object(T.a)(a,e);var t=Object(I.a)(a);function a(e){var n;return Object(P.a)(this,a),(n=t.call(this,e)).state={},n._rootNode=i.a.createRef(),n}return Object(N.a)(a,[{key:"componentDidMount",value:function(){var e=this._rootNode.current,t=this.props.diameter;this._root=new Y(e),this._root.globalCompositeOperation="copy",this._buffer=new Y(void 0,t,t),this._drawSlices(),this._root.drawImage(this._buffer)}},{key:"componentDidUpdate",value:function(e,t){e!==this.props&&(this._buffer.clearRect(),this._drawSlices(),this._connectPitches(),this._root.drawImage(this._buffer))}},{key:"render",value:function(){var e=this.props.className;return Object(x.jsx)("canvas",{className:H()(B.a.root,e),ref:this._rootNode})}},{key:"_drawSlices",value:function(){for(var e=this.props,t=e.activePitches,a=e.layoutIncrement,n=e.semitones,i=e.rootPitch,c=e.diameter,o=function(e){for(var t=[],a=2*Math.PI/e,n=0;n<e;n++)t.push(U(n*a));return t}(n),r=0;r<i;r++)o.unshift(o.pop());for(var s=0;s<n;s++){var l=s,h=(D(l,n,i,a),o[s]),u=t.indexOf(l)>=0;K(this._buffer,h,l,n,i,a,c,u?1:.95,u?.12:.1)}}},{key:"_connectPitches",value:function(){for(var e=this.props,t=e.activePitches,a=e.semitones,n=e.rootPitch,i=e.layoutIncrement,c=e.diameter,o=0;o<t.length;o++)for(var r=t[o],s=o;s<t.length;s++){X(r,t[s],a,n,i,c,this._buffer,.4)}}}]),a}(i.a.Component);function K(e,t,a,n,i,c,o,r,s){var l=o/2,h=Math.PI/n,u=D(a,n,i,c),d=Math.cos(u-h),v=Math.sin(u-h);e.beginPath(),e.fillStyle=t,e.moveTo(l+d*l*s,l+v*-l*s),e.lineTo(l+d*l*r,l+v*-l*r),d=Math.cos(u),v=Math.sin(u);var m=Math.atan2(-v,d),b=m+h,f=m-h;e.arc(l,l,l*r,b,f,!0),d=Math.cos(u+h),v=Math.sin(u+h),e.moveTo(l+d*l*r,l+v*-l*r),e.lineTo(l+d*l*s,l+v*-l*s),d=Math.cos(u),v=Math.sin(u),b=m-h,f=m+h,e.arc(l,l,l*s,b,f,!1),e.fill()}function U(e){var t=2*Math.PI/3,a=Math.cos(e),n=(Math.sin(e),Math.cos(e-t)),i=(Math.sin(e-t),Math.cos(e+t)),c=(Math.sin(e+t),Math.round(255*a*.5+127.5)),o=Math.round(255*n*.5+127.5),r=Math.round(255*i*.5+127.5);return"rgb(".concat(c,", ").concat(o,", ").concat(r,")")}function X(e,t,a,n,i,c,o,r){var s=c/2,l=D(e,a,n,i),h=Math.cos(l),u=Math.sin(-l),d=D(t,a,n,i),v={x:s+h*s*r,y:s+u*s*r},m={x:s+Math.cos(d)*s*r,y:s+Math.sin(-d)*s*r},b=function(e,t,a){if(12===a){switch(e-t){case 1:return{a:16,b:15};case 2:return{a:9,b:8};case 3:return{a:6,b:5};case 4:return{a:5,b:4};case 5:return{a:4,b:3};case 6:return{a:7,b:5};case 7:return{a:3,b:2};case 8:return{a:8,b:5};case 9:return{a:5,b:3};case 10:return{a:16,b:9};case 11:return{a:15,b:8}}switch(t-e){case 1:return{a:15,b:16};case 2:return{a:8,b:9};case 3:return{a:5,b:6};case 4:return{a:4,b:5};case 5:return{a:3,b:4};case 6:return{a:5,b:7};case 7:return{a:2,b:3};case 8:return{a:5,b:8};case 9:return{a:3,b:5};case 10:return{a:9,b:16};case 11:return{a:8,b:15}}}}(e,t,a);if(b){o.strokeStyle="white",o.lineWidth=1,o.globalCompositeOperation="color";for(var f=m.x-v.x,p=m.y-v.y,j=Math.sqrt(Math.pow(f,2)+Math.pow(p,2)),x=j/b.a/2,_=j/b.b/2,g=0;g<b.a;g++){o.beginPath();var O=v.x+f/b.a*(g+.5),y=v.y+p/b.a*(g+.5);o.arc(O,y,x,0,2*Math.PI),o.stroke()}for(var M=0;M<b.b;M++){o.beginPath();var w=v.x+f/b.b*(M+.5),P=v.y+p/b.b*(M+.5);o.arc(w,P,_,0,2*Math.PI),o.stroke()}}o.globalCompositeOperation="source-over",o.strokeStyle="white",o.lineWidth=4,o.beginPath(),o.moveTo(v.x,v.y),o.lineTo(m.x,m.y),o.stroke()}var Q,Z,V,$,ee=a(16);function te(e,t,a,n){V&&V.close(),V=new(window.AudioContext||window.webkitAudioContext),($=V.createGain()).connect(V.destination),$.gain.value=.1,Z=[],Q=[];for(var i=0;i<e;i++)Q[i]=ae(i,t,a,n,e)}function ae(e,t,a,n,i){for(var c=t*Math.pow(Math.pow(2,1/i),e);c>=a;)c/=2;for(var o=[],r=c*=2;r<=n;r*=2)o.push(r);return o}function ne(e,t,a){t&&!Z[e]?function(e,t){var a=[];Z[e]=a;var n,i=Object(ee.a)(Q[e]);try{for(i.s();!(n=i.n()).done;){var c=n.value,o=V.createOscillator();o.frequency.value=c,o.type=t,o.connect($),o.start(),a.push(o)}}catch(r){i.e(r)}finally{i.f()}}(e,a):!t&&Z[e]&&function(e){var t,a=Object(ee.a)(Z[e]);try{for(a.s();!(t=a.n()).done;)t.value.stop()}catch(n){a.e(n)}finally{a.f()}Z[e]=null}(e)}function ie(){var e=Object(n.useState)(!1),t=Object(s.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(440),o=Object(s.a)(c,2),l=o[0],u=o[1],d=Object(n.useState)(j),b=Object(s.a)(d,2),f=b[0],p=b[1],_=Object(n.useState)(m),P=Object(s.a)(_,2),N=P[0],T=P[1],I=Object(n.useState)(3),R=Object(s.a)(I,2),C=R[0],S=R[1],H=Object(n.useState)(20),q=Object(s.a)(H,2),D=q[0],F=q[1],W=Object(n.useState)(v),L=Object(s.a)(W,2),E=L[0],B=L[1];var G=Object(n.useState)(12),Y=Object(s.a)(G,2),K=Y[0],U=Y[1];var X=Object(n.useState)(1),Q=Object(s.a)(X,2),Z=Q[0],V=Q[1];var $=Object(n.useState)(function(e){return Object(O.a)(Array(e).keys()).map((function(t){var a=t/e*w.length,n=Math.floor(a),i=w[n],c=a%1;return c?"".concat(i).concat(String(Object(M.round)(c,.001)).slice(1,5)):i}))}(K)),ee=Object(s.a)($,2),ae=ee[0],ie=(ee[1],Object(n.useState)(function(e){for(var t=[],a=1;a<e;a++)y(e,a)&&t.push(a);return t}(K))),ce=Object(s.a)(ie,2),oe=ce[0],re=(ce[1],Object(n.useState)(!1)),se=Object(s.a)(re,2),le=se[0],he=se[1];var ue=Object(n.useState)([]),de=Object(s.a)(ue,2),ve=de[0],me=de[1];function be(e){for(var t=0;t<K;t++)e.indexOf(t)>=0?ne(t,!0,N):ne(t,!1,N);me(e)}return Object(x.jsxs)("div",{className:h.a.root,onClick:le?null:function(){te(K,l,D,E),he(!0)},children:[Object(x.jsx)("div",{className:h.a.contentHolder}),Object(x.jsx)(k,{children:function(e,t){var a=Math.min(e,t);return Object(x.jsxs)("div",{className:h.a.wheelHolder,style:{width:"".concat(a,"px"),height:"".concat(a,"px")},children:[Object(x.jsx)(J,Object(r.a)({diameter:a,semitones:K,layoutIncrement:Z,activePitches:ve,rootPitch:C},"diameter",a)),Object(x.jsx)(A,{layoutIncrement:Z,rootPitch:C,semitones:K,pitchNames:ae}),le&&Object(x.jsx)(z,{callback:be,semitones:K,diameter:a,layoutIncrement:Z,rootPitch:C})]})}}),a&&Object(x.jsx)("div",{className:h.a.menuHolder,children:Object(x.jsx)(g,{minFreq:D,maxFreq:E,setMinFreq:function(e){e>=E&&B(e+1),F(e)},setMaxFreq:function(e){e<=D&&F(e-1),B(e)},a4:l,setA4:u,temperment:f,setTemperment:p,oscillator:N,setOscillator:T,semitones:K,setSemitones:function(e){oe.indexOf(Z)>=0&&V(1),f!==j&&p(j),U(e)},rootPitch:C,setRootPitch:S,pitchNames:ae,layoutIncrement:Z,setLayoutIncrement:function(e){V(e)},incrementOptions:oe})}),Object(x.jsx)("button",{className:h.a.menuButton,onClick:function(){a&&te(K,l,D,E),i(!a)},children:a?"close menu":"open menu"})]})}var ce=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,28)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(ie,{})}),document.getElementById("root")),ce()},8:function(e,t,a){e.exports={root:"App_root__nWMuC",menuHolder:"App_menuHolder__243kY",menuButton:"App_menuButton__3IBp4",contentHolder:"App_contentHolder__3Zpi7",wheelHolder:"App_wheelHolder__1I76D"}}},[[27,1,2]]]);
//# sourceMappingURL=main.787257cc.chunk.js.map