"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3186],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||i;return n?r.createElement(f,a(a({ref:t},m),{},{components:n})):r.createElement(f,a({ref:t},m))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},800:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s=void 0,l={unversionedId:"resources/ecosystem/community/tamer",id:"resources/ecosystem/community/tamer",title:"tamer",description:"Tamer",source:"@site/docs/resources/ecosystem/community/tamer.md",sourceDirName:"resources/ecosystem/community",slug:"/resources/ecosystem/community/tamer",permalink:"/next/resources/ecosystem/community/tamer",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/community/tamer.md",tags:[],version:"current",frontMatter:{},sidebar:"resources-sidebar",previous:{title:"Rezilience",permalink:"/next/resources/ecosystem/community/rezilience"},next:{title:"TranzactIO",permalink:"/next/resources/ecosystem/community/tranzactio"}},m=[{value:"Tamer",id:"tamer",children:[{value:"Introduction",id:"introduction",children:[],level:3},{value:"Installation",id:"installation",children:[],level:3},{value:"Example",id:"example",children:[],level:3}],level:2}],u={toc:m};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"tamer"},"Tamer"),(0,i.kt)("p",null," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/laserdisc-io/tamer"},"Tamer")," is a multi-functional Kafka connector for producing data based on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-kafka"},"ZIO Kafka"),"."),(0,i.kt)("h3",{id:"introduction"},"Introduction"),(0,i.kt)("p",null," Tamer is a completely customizable source connector that produces to Kafka. It ships with preconfigured modules for SQL, cloud storage and REST API, but you can provide your own functions and Tamer will take care of the rest."),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null," Depending on the source you have at hand you can add the correct dependency in your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "io.laserdisc" %% "tamer-db"                % "0.16.1"\nlibraryDependencies += "io.laserdisc" %% "tamer-oci-objectstorage" % "0.16.1"\nlibraryDependencies += "io.laserdisc" %% "tamer-rest"              % "0.16.1"\nlibraryDependencies += "io.laserdisc" %% "tamer-s3"                % "0.16.1"\n')),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null," Let's say you have a inventory DB that's compatible with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tpolecat/doobie"},"Doobie"),", you can get all of your items with just a few lines of code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import tamer._\nimport tamer.db._\n\nimport doobie.implicits.legacy.instant._\nimport doobie.syntax.string._\nimport zio._\nimport zio.duration._\nimport zio.json._\n\nimport java.time.Instant\n\ncase class Row(id: String, name: String, description: Option[String], modifiedAt: Instant)\n    extends tamer.db.Timestamped(modifiedAt)\n\nobject Row {\n  implicit val rowJsonCodec = DeriveJsonCodec.gen[Row]\n}\n\nobject DatabaseSimple extends zio.App {\n  // Here we\'ll go with zio-json codec, you can use avro, circe and jsoniter\n  // out-of-the box or plug yours!\n  implicit val stateKeyJsonCodec = DeriveJsonCodec.gen[tamer.Tamer.StateKey]\n  implicit val windowJsonCodec = DeriveJsonCodec.gen[tamer.db.Window]\n\n  val program: RIO[ZEnv, Unit] = tamer.db.DbSetup\n    .tumbling(window =>\n      sql"""SELECT id, name, description, modified_at \n           |FROM users \n           |WHERE modified_at > ${window.from} AND modified_at <= ${window.to}""".stripMargin\n        .query[Row]\n    )(\n      recordKey = (_, v) => v.id,\n      from = Instant.parse("2020-01-01T00:00:00.00Z"),\n      tumblingStep = 5.days\n    )\n    .runWith(dbLayerFromEnvironment ++ tamer.kafkaConfigFromEnvironment)\n\n  override final def run(args: List[String]): URIO[ZEnv, ExitCode] =\n    program.exitCode\n\n  // If you have other codecs like circe in the classpath you have to disambiguate\n  implicit lazy val stateKeyCodec: Codec[Tamer.StateKey] = Codec.optionalZioJsonCodec\n  implicit lazy val windowCodec: Codec[tamer.db.Window] = Codec.optionalZioJsonCodec\n  implicit lazy val stringCodec: Codec[String] = Codec.optionalZioJsonCodec\n}\n')),(0,i.kt)("p",null," See full example ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/laserdisc-io/tamer/blob/4e1a7646fb44041648d9aa3ba089decb81ebe487/example/src/main/scala/tamer/db/DatabaseSimple.scala"},"on the GitHub repo")))}d.isMDXComponent=!0}}]);