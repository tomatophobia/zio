"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7778],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=l(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4840:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={id:"zref",title:"ZRef"},c=void 0,l={unversionedId:"datatypes/concurrency/zref",id:"datatypes/concurrency/zref",title:"ZRef",description:"A ZRef[EA, EB, A, B] is a polymorphic, purely functional description of a mutable reference. The fundamental operations of a ZRef are set and get.",source:"@site/docs/datatypes/concurrency/zref.md",sourceDirName:"datatypes/concurrency",slug:"/datatypes/concurrency/zref",permalink:"/next/datatypes/concurrency/zref",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/concurrency/zref.md",tags:[],version:"current",frontMatter:{id:"zref",title:"ZRef"},sidebar:"datatypes-sidebar",previous:{title:"Introduction",permalink:"/next/datatypes/concurrency/"},next:{title:"ZRef.Synchronized",permalink:"/next/datatypes/concurrency/zrefsynchronized"}},u=[],s={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef[EA, EB, A, B]")," is a polymorphic, purely functional description of a mutable reference. The fundamental operations of a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef")," are ",(0,o.kt)("inlineCode",{parentName:"p"},"set")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"get"),". "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"set"))," takes a value of type ",(0,o.kt)("inlineCode",{parentName:"li"},"A")," and sets the reference to a new value, potentially failing with an error of type ",(0,o.kt)("inlineCode",{parentName:"li"},"EA"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"get"))," gets the current value of the reference and returns a value of type ",(0,o.kt)("inlineCode",{parentName:"li"},"B"),", potentially\nfailing with an error of type ",(0,o.kt)("inlineCode",{parentName:"li"},"EB"),".")),(0,o.kt)("p",null,"When the error and value types of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef")," are unified, that is, it is a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef[E, E, A, A]"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef")," also supports atomic ",(0,o.kt)("inlineCode",{parentName:"p"},"modify")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," operations. All operations are guaranteed to be safe for concurrent access."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},(0,o.kt)("strong",{parentName:"em"},"Note:"))),(0,o.kt)("p",{parentName:"blockquote"},"While ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef")," provides the functional equivalent of a mutable reference, the value inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef")," should be immutable. For performance reasons ",(0,o.kt)("inlineCode",{parentName:"p"},"ZRef")," is implemented in terms of compare and swap operations rather than synchronization. ",(0,o.kt)("strong",{parentName:"p"},"These operations are not safe for mutable values that do not support concurrent access"),".")))}f.isMDXComponent=!0}}]);