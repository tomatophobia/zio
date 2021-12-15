"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2158],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,v=u["".concat(l,".").concat(m)]||u[m]||s[m]||i;return t?n.createElement(v,a(a({ref:r},f),{},{components:t})):n.createElement(v,a({ref:r},f))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},9227:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return f},default:function(){return u}});var n=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"overview_performance",title:"Performance"},l=void 0,p={unversionedId:"overview/overview_performance",id:"overview/overview_performance",title:"Performance",description:"zio has excellent performance, featuring a hand-optimized, low-level interpreter that achieves zero allocations for right-associated binds, and minimal allocations for left-associated binds.",source:"@site/docs/overview/performance.md",sourceDirName:"overview",slug:"/overview/overview_performance",permalink:"/next/overview/overview_performance",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/performance.md",tags:[],version:"current",frontMatter:{id:"overview_performance",title:"Performance"},sidebar:"overview_sidebar",previous:{title:"Background",permalink:"/next/overview/overview_background"},next:{title:"Platforms",permalink:"/next/overview/overview_platforms"}},f=[],s={toc:f};function u(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"zio")," has excellent performance, featuring a hand-optimized, low-level interpreter that achieves zero allocations for right-associated binds, and minimal allocations for left-associated binds."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"benchmarks")," project may be used to compare ",(0,i.kt)("inlineCode",{parentName:"p"},"IO")," with other effect monads, including ",(0,i.kt)("inlineCode",{parentName:"p"},"Future")," (which is not an effect monad but is included for reference), Monix ",(0,i.kt)("inlineCode",{parentName:"p"},"Task"),", and Cats ",(0,i.kt)("inlineCode",{parentName:"p"},"IO"),"."),(0,i.kt)("p",null,"As of the time of this writing, ",(0,i.kt)("inlineCode",{parentName:"p"},"IO")," is significantly faster than or at least comparable to all other purely functional solutions."))}u.isMDXComponent=!0}}]);