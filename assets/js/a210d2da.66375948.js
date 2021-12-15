"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2465],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"access-system-information",title:"How to Access System Information?"},c=void 0,l={unversionedId:"howto/access-system-information",id:"version-1.x/howto/access-system-information",title:"How to Access System Information?",description:"Sometimes, environment variables are relevant information to an application. ZIO provides a system package to interface with this functionality.",source:"@site/versioned_docs/version-1.x/howto/access-system-information.md",sourceDirName:"howto",slug:"/howto/access-system-information",permalink:"/version-1.x/howto/access-system-information",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/howto/access-system-information.md",tags:[],version:"1.x",frontMatter:{id:"access-system-information",title:"How to Access System Information?"},sidebar:"howto-sidebar",previous:{title:"How to Handle Errors?",permalink:"/version-1.x/howto/handle-errors"},next:{title:"How to use ZIO Macros?",permalink:"/version-1.x/howto/use-zio-macros"}},p=[{value:"Environment Variables",id:"environment-variables",children:[],level:2},{value:"Properties",id:"properties",children:[],level:2},{value:"Miscellaneous",id:"miscellaneous",children:[],level:2}],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sometimes, environment variables are relevant information to an application. ZIO provides a ",(0,a.kt)("inlineCode",{parentName:"p"},"system")," package to interface with this functionality."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio.system\n")),(0,a.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"env")," method, you can safely read an environment variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Read an environment variable\nsystem.env("JAVA_HOME")\n// res0: zio.ZIO[system.package.System, SecurityException, Option[String]] = zio.ZIO$Read@3e9bcc09\n')),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"property")," method, you can safely access Java properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'// Read a system property\nsystem.property("java.version")\n// res1: zio.ZIO[system.package.System, Throwable, Option[String]] = zio.ZIO$Read@50ae9d8f\n')),(0,a.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,a.kt)("p",null,"With the ",(0,a.kt)("inlineCode",{parentName:"p"},"lineSeparator")," method, you can determine the line separator for the underlying platform:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"system.lineSeparator\n// res2: zio.package.URIO[system.package.System, String] = zio.ZIO$Read@1cde9048\n")))}u.isMDXComponent=!0}}]);