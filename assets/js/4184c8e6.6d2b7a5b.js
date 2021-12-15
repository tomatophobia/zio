"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[2080],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=i.createContext({}),c=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},u=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(t),d=o,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return t?i.createElement(f,r(r({ref:n},u),{},{components:t})):i.createElement(f,r({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,r=new Array(a);r[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,r[1]=p;for(var c=2;c<a;c++)r[c]=t[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7410:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var i=t(7462),o=t(3366),a=(t(7294),t(3905)),r=["components"],p={id:"zioapp",title:"ZIOApp"},l=void 0,c={unversionedId:"datatypes/core/zioapp",id:"datatypes/core/zioapp",title:"ZIOApp",description:"The ZIOApp trait is an entry point for a ZIO application that allows sharing layers between applications. It also",source:"@site/docs/datatypes/core/zioapp.md",sourceDirName:"datatypes/core",slug:"/datatypes/core/zioapp",permalink:"/next/datatypes/core/zioapp",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/datatypes/core/zioapp.md",tags:[],version:"current",frontMatter:{id:"zioapp",title:"ZIOApp"},sidebar:"datatypes-sidebar",previous:{title:"IO",permalink:"/next/datatypes/core/zio/io"},next:{title:"Runtime",permalink:"/next/datatypes/core/runtime"}},u=[{value:"Running a ZIO effect",id:"running-a-zio-effect",children:[],level:2},{value:"Accessing Command-line Arguments",id:"accessing-command-line-arguments",children:[],level:2},{value:"Customized Runtime",id:"customized-runtime",children:[],level:2},{value:"Installing Low-level Functionalities",id:"installing-low-level-functionalities",children:[],level:2},{value:"Composing ZIO Applications",id:"composing-zio-applications",children:[],level:2}],s={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,r);return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOApp")," trait is an entry point for a ZIO application that allows sharing layers between applications. It also\nprovides us the ability to compose multiple ZIO applications."),(0,a.kt)("p",null,"There is another simpler version of ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOApp")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault"),". We usually use ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault")," which uses the default ZIO environment (",(0,a.kt)("inlineCode",{parentName:"p"},"ZEnv"),")."),(0,a.kt)("h2",{id:"running-a-zio-effect"},"Running a ZIO effect"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOAppDefault")," has a ",(0,a.kt)("inlineCode",{parentName:"p"},"run")," function, which is the main entry point for running a ZIO application on the JVM:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.Console\n\nobject MyApp extends ZIOAppDefault {\n  def run = for {\n    _ <- Console.printLine("Hello! What is your name?")\n    n <- Console.readLine\n    _ <- Console.printLine("Hello, " + n + ", good to meet you!")\n  } yield ()\n}\n')),(0,a.kt)("h2",{id:"accessing-command-line-arguments"},"Accessing Command-line Arguments"),(0,a.kt)("p",null,"ZIO has a service that contains command-line arguments of an application called ",(0,a.kt)("inlineCode",{parentName:"p"},"ZIOAppArgs"),". We can access command-line arguments using built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"getArgs")," method, which is a helper method:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nobject HelloApp extends ZIOAppDefault {\n  def run = for {\n    args <- getArgs\n    _ <-\n      if (args.isEmpty)\n        Console.printLine("Please provide your name as an argument")\n      else\n        Console.printLine(s"Hello, ${args.head}!")\n  } yield ()\n}\n')),(0,a.kt)("h2",{id:"customized-runtime"},"Customized Runtime"),(0,a.kt)("p",null,"In the ZIO app, by overriding the ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," we can map the current runtime to a newly customized one. Let's try customizing it by introducing our own executor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.Executor\nimport java.util.concurrent.{LinkedBlockingQueue, ThreadPoolExecutor, TimeUnit}\n\nobject CustomizedRuntimeZIOApp extends ZIOAppDefault {\n  override val runtime = Runtime.default.mapRuntimeConfig(\n    _.copy(\n      executor =\n        Executor.fromThreadPoolExecutor(_ => 1024)(\n          new ThreadPoolExecutor(\n            5,\n            10,\n            5000,\n            TimeUnit.MILLISECONDS,\n            new LinkedBlockingQueue[Runnable]()\n          )\n        )\n    )\n  )\n\n  def run = myAppLogic\n}\n")),(0,a.kt)("p",null,"A detailed explanation of the ZIO runtime system can be found on the ",(0,a.kt)("a",{parentName:"p",href:"/next/datatypes/core/runtime"},"runtime")," page."),(0,a.kt)("h2",{id:"installing-low-level-functionalities"},"Installing Low-level Functionalities"),(0,a.kt)("p",null,"We can hook into the ZIO runtime configuration to install low-level functionalities into the ZIO application, such as ",(0,a.kt)("em",{parentName:"p"},"logging"),", ",(0,a.kt)("em",{parentName:"p"},"profiling"),", and other similar foundational pieces of infrastructure."),(0,a.kt)("p",null,"A detailed explanation of the ",(0,a.kt)("inlineCode",{parentName:"p"},"RuntimeConfigAspect")," can be found on the ",(0,a.kt)("a",{parentName:"p",href:"/next/datatypes/core/runtime#runtimeconfig-aspect"},"runtime")," page."),(0,a.kt)("h2",{id:"composing-zio-applications"},"Composing ZIO Applications"),(0,a.kt)("p",null,"To compose ZIO application, we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," operator:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nobject MyApp1 extends ZIOAppDefault {    \n  def run = ZIO.succeed(???)\n}\n\nobject MyApp2 extends ZIOAppDefault {\n  override def hook: RuntimeConfigAspect =\n    asyncProfiler >>> slf4j >>> loggly >>> newRelic\n\n  def run = ZIO.succeed(???)\n}\n\nobject Main extends ZIOApp.Proxy(MyApp1 <> MyApp2)\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," operator combines the layers of the two applications, composes their hooks, and then runs the two applications in parallel."))}m.isMDXComponent=!0}}]);