"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7628],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"with-javascript",title:"How to Interop with JavaScript?"},p=void 0,l={unversionedId:"howto/interop/with-javascript",id:"howto/interop/with-javascript",title:"How to Interop with JavaScript?",description:"Include ZIO in your Scala.js project by adding the following to your build.sbt:",source:"@site/docs/howto/interop/with-javascript.md",sourceDirName:"howto/interop",slug:"/howto/interop/with-javascript",permalink:"/next/howto/interop/with-javascript",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/howto/interop/with-javascript.md",tags:[],version:"current",frontMatter:{id:"with-javascript",title:"How to Interop with JavaScript?"},sidebar:"howto-sidebar",previous:{title:"How to Interop with Java?",permalink:"/next/howto/interop/with-java"},next:{title:"How to Interop with Monix?",permalink:"/next/howto/interop/with-monix"}},s=[{value:"Example",id:"example",children:[],level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Include ZIO in your Scala.js project by adding the following to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'scalaJSUseMainModuleInitializer := true\nlibraryDependencies += "dev.zio" %%% "zio" % "2.0.0-RC1"\n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Your main function can extend ",(0,i.kt)("inlineCode",{parentName:"p"},"App")," as follows.\nThis example uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/scala-js/scala-js-dom"},"scala-js-dom")," to access the DOM; to run the example you\nwill need to add that library as a dependency to your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import org.scalajs.dom.{document, raw}\nimport zio._\nimport zio.Clock._\n\nobject Main extends App {\n\n  def run(args: List[String]) = {\n    for {\n      _      <- Console.printLine("Starting progress bar demo.")  // Outputs on browser console log.\n      target <- IO.succeed(document.createElement("pre"))\n      _      <- update(target).repeat(Schedule.spaced(1.seconds))\n      _      <- IO.succeed(node.appendChild(target)) // "node" is provided in this page by mdoc.\n    } yield ExitCode.success\n  }\n\n  def update(target: raw.Element) = {\n      for {\n        time   <- currentTime(TimeUnit.SECONDS)\n        output <- UIO.succeed(progress((time % 11).toInt, 10))\n        _      <- UIO.succeed(target.innerHTML = output)\n      } yield ()\n  }\n\n  def progress(tick: Int, size: Int) = {\n      val bar_length = tick\n      val empty_length = size - tick\n      val bar = "#" * bar_length + " " * empty_length\n      s"$bar $bar_length%"\n  }\n\n}\n')))}d.isMDXComponent=!0}}]);