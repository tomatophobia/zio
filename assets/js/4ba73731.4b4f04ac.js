"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[8337],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,a(a({ref:n},s),{},{components:t})):r.createElement(f,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},894:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],l={id:"overview_running_effects",title:"Running Effects"},u=void 0,p={unversionedId:"overview/overview_running_effects",id:"overview/overview_running_effects",title:"Running Effects",description:"ZIO provides several different ways of running effects in your application.",source:"@site/docs/overview/running_effects.md",sourceDirName:"overview",slug:"/overview/overview_running_effects",permalink:"/next/overview/overview_running_effects",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/overview/running_effects.md",tags:[],version:"current",frontMatter:{id:"overview_running_effects",title:"Running Effects"},sidebar:"overview_sidebar",previous:{title:"Testing Effects",permalink:"/next/overview/overview_testing_effects"},next:{title:"Background",permalink:"/next/overview/overview_background"}},s=[{value:"App",id:"app",children:[],level:2},{value:"Default Runtime",id:"default-runtime",children:[],level:2},{value:"Custom Runtime",id:"custom-runtime",children:[],level:2},{value:"Error Reporting",id:"error-reporting",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],c={toc:s};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"ZIO provides several different ways of running effects in your application."),(0,i.kt)("h2",{id:"app"},"App"),(0,i.kt)("p",null,"If you construct a single effect for your whole program, then the most natural way to run the effect is to extend ",(0,i.kt)("inlineCode",{parentName:"p"},"zio.App"),". "),(0,i.kt)("p",null,"This class provides Scala with a main function, so it can be called from IDEs and launched from the command-line. All you have to do is implement the ",(0,i.kt)("inlineCode",{parentName:"p"},"run")," method, which will be passed all command-line arguments in a ",(0,i.kt)("inlineCode",{parentName:"p"},"List"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console._\n\nobject MyApp extends zio.ZIOAppDefault {\n\n  def run =\n    for {\n      _    <- printLine("Hello! What is your name?")\n      name <- readLine\n      _    <- printLine(s"Hello, ${name}, welcome to ZIO!")\n    } yield ()\n}\n')),(0,i.kt)("p",null,"If you are using a custom environment for your application, you will have to supply your environment to the effect (using ",(0,i.kt)("inlineCode",{parentName:"p"},"ZIO#provide"),") before you return it from ",(0,i.kt)("inlineCode",{parentName:"p"},"run"),", because ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," does not know how to supply custom environments."),(0,i.kt)("h2",{id:"default-runtime"},"Default Runtime"),(0,i.kt)("p",null,"Most applications are not greenfield, and must integrate with legacy code, and procedural libraries and frameworks."),(0,i.kt)("p",null,"In these cases, a better solution for running effects is to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime"),", which can be passed around and used to run effects wherever required."),(0,i.kt)("p",null,"ZIO contains a default runtime called ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime.default"),". This ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," bundles together production implementations of all ZIO modules (including ",(0,i.kt)("inlineCode",{parentName:"p"},"Console"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"System"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Clock"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Random"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Scheduler"),", and on the JVM, ",(0,i.kt)("inlineCode",{parentName:"p"},"Blocking"),"), and it can run effects that require any combination of these modules."),(0,i.kt)("p",null,"To access it, merely use"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val runtime = Runtime.default\n")),(0,i.kt)("p",null,"Once you have a runtime, you can use it to execute effects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'runtime.unsafeRun(ZIO(println("Hello World!")))\n')),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"unsafeRun")," method, there are other methods that allow executing effects asynchronously or into ",(0,i.kt)("inlineCode",{parentName:"p"},"Future")," values."),(0,i.kt)("h2",{id:"custom-runtime"},"Custom Runtime"),(0,i.kt)("p",null,"If you are using a custom environment for your application, then you may find it useful to create a ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," specifically tailored for that environment."),(0,i.kt)("p",null,"A custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime[R]")," can be created with two values:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"R")," Environment"),". This is the environment that will be provided to effects when they are executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"RuntimeConfig")),". This is a runtime configuration that is required by ZIO in order to bootstrap the runtime system.")),(0,i.kt)("p",null,"For example, the following creates a ",(0,i.kt)("inlineCode",{parentName:"p"},"Runtime")," that can provide an ",(0,i.kt)("inlineCode",{parentName:"p"},"Int")," to effects, using the default ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," provided by ZIO:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},"val myRuntime: Runtime[Int] = Runtime(ZEnvironment[Int](42), RuntimeConfig.default)\n")),(0,i.kt)("h2",{id:"error-reporting"},"Error Reporting"),(0,i.kt)("p",null,"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"RuntimeConfig")," that is a part of every runtime, there is an error reporter that will be called by ZIO to report every unhandled error. It is a good idea to supply your own error reporter, which can log unhandled errors to a file."),(0,i.kt)("p",null,"The default unhandled error reporter merely logs the error to standard error."),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"If you are comfortable with running effects, then congratulations!"),(0,i.kt)("p",null,"You are now ready to dive into other sections on the ZIO website, covering data types, use cases, and interop with other systems. "),(0,i.kt)("p",null,"Refer to the Scaladoc for detailed documentation on all the core ZIO types and methods."))}d.isMDXComponent=!0}}]);