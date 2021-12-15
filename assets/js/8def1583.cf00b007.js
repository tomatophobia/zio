"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9853],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,c=u["".concat(d,".").concat(h)]||u[h]||s[h]||i;return n?r.createElement(c,l(l({ref:t},m),{},{components:n})):r.createElement(c,l({ref:t},m))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7241:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"handle-errors",title:"How to Handle Errors?"},d=void 0,p={unversionedId:"howto/handle-errors",id:"version-1.x/howto/handle-errors",title:"How to Handle Errors?",description:"Declared Errors vs Unforeseen Defects",source:"@site/versioned_docs/version-1.x/howto/handle-errors.md",sourceDirName:"howto",slug:"/howto/handle-errors",permalink:"/version-1.x/howto/handle-errors",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/howto/handle-errors.md",tags:[],version:"1.x",frontMatter:{id:"handle-errors",title:"How to Handle Errors?"},sidebar:"howto-sidebar",previous:{title:"How to Mock Services?",permalink:"/version-1.x/howto/mock-services"},next:{title:"How to Access System Information?",permalink:"/version-1.x/howto/access-system-information"}},m=[{value:"Declared Errors vs Unforeseen Defects",id:"declared-errors-vs-unforeseen-defects",children:[],level:2},{value:"Lossless Error Model",id:"lossless-error-model",children:[],level:2},{value:"Transform <code>Option</code> and <code>Either</code> values",id:"transform-option-and-either-values",children:[{value:"Either",id:"either",children:[],level:3},{value:"Option",id:"option",children:[],level:3}],level:2}],s={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"declared-errors-vs-unforeseen-defects"},"Declared Errors vs Unforeseen Defects"),(0,i.kt)("p",null,"A ZIO value has a type parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," which is the type of declared errors it can fail with. ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," only covers the errors which were specified at the outset. The same ZIO value could still throw exceptions in unforeseen ways. These unforeseen situations are called ",(0,i.kt)("em",{parentName:"p"},"defects")," in a ZIO program, and they lie outside E."),(0,i.kt)("p",null,"Bringing abnormal situations from the domain of defects into that of ",(0,i.kt)("inlineCode",{parentName:"p"},"E")," enables the compiler to help us keep a tab on error conditions throughout the application, at compile time. This helps ensure the handling of domain errors in domain specific ways. Defects, on the other hand, can creep silently to higher levels in our application, and, if they get triggered at all, their handling might eventually be in more general ways."),(0,i.kt)("h2",{id:"lossless-error-model"},"Lossless Error Model"),(0,i.kt)("p",null,"ZIO holds onto errors, that would otherwise be lost, using ",(0,i.kt)("inlineCode",{parentName:"p"},"try finally"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"try")," block throws an exception, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"finally")," block throws an exception as well, then, if these are caught at a higher level, only the finalizer's exception will be caught normally, not the exception from the try block."),(0,i.kt)("p",null,"Whereas, ZIO guarantees that no errors are lost. This guarantee is provided via a hierarchy of supervisors and information made available via datatypes such as ",(0,i.kt)("inlineCode",{parentName:"p"},"Exit")," & ",(0,i.kt)("inlineCode",{parentName:"p"},"Cause"),". All errors will be reported. If there's a bug in the code, zio enables us to find about it."),(0,i.kt)("h2",{id:"transform-option-and-either-values"},"Transform ",(0,i.kt)("inlineCode",{parentName:"h2"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"Either")," values"),(0,i.kt)("p",null,"It's typical that you work with ",(0,i.kt)("inlineCode",{parentName:"p"},"Option")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Either")," values inside your application. You either fetch a record from the database which might be there or not (",(0,i.kt)("inlineCode",{parentName:"p"},"Option"),") or parse a file which might return decode errors ",(0,i.kt)("inlineCode",{parentName:"p"},"Either"),". ZIO has already functions built-in to transform these values into ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO")," values."),(0,i.kt)("h3",{id:"either"},"Either"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"from"),(0,i.kt)("th",{parentName:"tr",align:null},"to"),(0,i.kt)("th",{parentName:"tr",align:null},"transform"),(0,i.kt)("th",{parentName:"tr",align:null},"code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Either[B, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[Any, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ifLeft: B => E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO.fromEither(from).mapError(ifLeft)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, Either[B, A]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ifLeft: B => E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.flatMap(ZIO.fromEither(_).mapError(ifLeft))"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, Either[E, A]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.rightOrFail"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, Either[B, A]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f: B => E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.rightOrFailWith(f)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, Either[A, E]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.leftOrFail"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, Either[A, B]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"f: B => E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.leftOrFailWith(f)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, Throwable, Either[Throwable, A]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, Throwable, A]")),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.absolve"))))),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"from"),(0,i.kt)("th",{parentName:"tr",align:null},"to"),(0,i.kt)("th",{parentName:"tr",align:null},"transform"),(0,i.kt)("th",{parentName:"tr",align:null},"code"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Option[A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[Any, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ifEmpty: E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO.fromOption(from).orElseFail(ifEmpty)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, Option[A]]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ZIO[R, E, A]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ifEmpty: E")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"from.someOrFail(ifEmpty)"))))))}u.isMDXComponent=!0}}]);