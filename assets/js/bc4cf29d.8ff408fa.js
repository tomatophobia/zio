"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[9787],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(h,i(i({ref:n},c),{},{components:a})):t.createElement(h,i({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6710:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"zlayer",title:"ZLayer"},s=void 0,p={unversionedId:"datatypes/contextual/zlayer",id:"version-1.x/datatypes/contextual/zlayer",title:"ZLayer",description:"A ZLayer[-RIn, +E, +ROut] describes a layer of an application: every layer in an application requires some services as input RIn and produces some services as the output ROut.",source:"@site/versioned_docs/version-1.x/datatypes/contextual/zlayer.md",sourceDirName:"datatypes/contextual",slug:"/datatypes/contextual/zlayer",permalink:"/version-1.x/datatypes/contextual/zlayer",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/contextual/zlayer.md",tags:[],version:"1.x",frontMatter:{id:"zlayer",title:"ZLayer"},sidebar:"datatypes-sidebar",previous:{title:"Has",permalink:"/version-1.x/datatypes/contextual/has"},next:{title:"RLayer",permalink:"/version-1.x/datatypes/contextual/rlayer"}},c=[{value:"Creation",id:"creation",children:[{value:"From Simple Values",id:"from-simple-values",children:[],level:3},{value:"From Managed Resources",id:"from-managed-resources",children:[],level:3},{value:"From ZIO Effects",id:"from-zio-effects",children:[],level:3},{value:"From another Service",id:"from-another-service",children:[],level:3}],level:2},{value:"Vertical and Horizontal Composition",id:"vertical-and-horizontal-composition",children:[],level:2},{value:"Layer Memoization",id:"layer-memoization",children:[],level:2},{value:"Updating Local Dependencies",id:"updating-local-dependencies",children:[],level:2},{value:"Hidden Versus Passed Through Dependencies",id:"hidden-versus-passed-through-dependencies",children:[],level:2},{value:"Cyclic Dependencies",id:"cyclic-dependencies",children:[],level:2},{value:"Asynchronous Service Construction",id:"asynchronous-service-construction",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"The simplest ZLayer application",id:"the-simplest-zlayer-application",children:[],level:3},{value:"ZLayer application with dependencies",id:"zlayer-application-with-dependencies",children:[],level:3},{value:"ZLayer example with complex dependencies",id:"zlayer-example-with-complex-dependencies",children:[],level:3}],level:2}],d={toc:c};function u(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer[-RIn, +E, +ROut]")," describes a layer of an application: every layer in an application requires some services as input ",(0,o.kt)("inlineCode",{parentName:"p"},"RIn")," and produces some services as the output ",(0,o.kt)("inlineCode",{parentName:"p"},"ROut"),". "),(0,o.kt)("p",null,"ZLayers are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Recipes for Creating Services")," \u2014 They describe how a given dependencies produces another services. For example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer[Logging with Database, Throwable, UserRepo]")," is a recipe for building a service that requires ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," service, and it produces a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepo")," service.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"An Alternative to Constructors")," \u2014 We can think of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," as a more powerful version of a constructor, it is an alternative way to represent a constructor. Like a constructor, it allows us to build the ",(0,o.kt)("inlineCode",{parentName:"p"},"ROut")," service in terms of its dependencies (",(0,o.kt)("inlineCode",{parentName:"p"},"RIn"),").")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Composable")," \u2014 Because of their excellent ",(0,o.kt)("strong",{parentName:"p"},"composition properties"),", layers are the idiomatic way in ZIO to create services that depend on other services. We can define layers that are relying on each other. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Effectful and Resourceful")," \u2014 The construction of ZIO layers can be effectful and resourceful, they can be acquired and safely released when the services are done being utilized.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Asynchronous")," \u2014 Unlike class constructors which are blocking, ZLayer is fully asynchronous and non-blocking."))),(0,o.kt)("p",null,"For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer[Blocking with Logging, Throwable, Database]")," can be thought of as a function that map ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocking")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," services into ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," service: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"(Blocking, Logging) => Database\n")),(0,o.kt)("p",null,"So we can say that the ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," service has two dependencies: ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocking")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," services."),(0,o.kt)("p",null,"Let's see how we can create a layer:"),(0,o.kt)("h2",{id:"creation"},"Creation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," is an ",(0,o.kt)("strong",{parentName:"p"},"alternative to a class constructor"),", a recipe to create a service. This recipe may contain the following information:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dependencies")," \u2014 To create a service, we need to indicate what other service we are depending on. For example, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," service might need ",(0,o.kt)("inlineCode",{parentName:"p"},"Socket")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Blocking")," services to perform its operations.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Acquisition/Release Action")," \u2014 It may contain how to initialize a service. For example, if we are creating a recipe for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," service, we should provide how the ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," will be initialized, via acquisition action. Also, it may contain how to release a service. For example, how the ",(0,o.kt)("inlineCode",{parentName:"p"},"Database")," releases its connection pools."))),(0,o.kt)("p",null,"In some cases, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," may not have any dependencies or requirements from the environment. In this case, we can specify ",(0,o.kt)("inlineCode",{parentName:"p"},"Any")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"RIn")," type parameter. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Layer")," type alias provided by ZIO is a convenient way to define a layer without requirements."),(0,o.kt)("p",null,"There are many ways to create a ZLayer. Here's an incomplete list:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.succeed")," to create a layer from an existing service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.succeedMany")," to create a layer from a value that's one or more services"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.fromFunction")," to create a layer from a function from the requirement to the service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.fromEffect")," to lift a ",(0,o.kt)("inlineCode",{parentName:"li"},"ZIO")," effect to a layer requiring the effect environment"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.fromAcquireRelease")," for a layer based on resource acquisition/release. The idea is the same as ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.fromService")," to build a layer from a service"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.fromServices")," to build a layer from a number of required services"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZLayer.identity")," to express the requirement for a layer"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ZIO#toLayer")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged#toLayer")," to construct a layer from an effect")),(0,o.kt)("p",null,"Where it makes sense, these methods have also variants to build a service effectfully (suffixed by ",(0,o.kt)("inlineCode",{parentName:"p"},"M"),"), resourcefully (suffixed by ",(0,o.kt)("inlineCode",{parentName:"p"},"Managed"),"), or to create a combination of services (suffixed by ",(0,o.kt)("inlineCode",{parentName:"p"},"Many"),")."),(0,o.kt)("p",null,"Let's review some of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer"),"'s most useful constructors:"),(0,o.kt)("h3",{id:"from-simple-values"},"From Simple Values"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer.succeed")," we can construct a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," from a value. It returns a ",(0,o.kt)("inlineCode",{parentName:"p"},"ULayer[Has[A]]")," value, which represents a layer of application that ",(0,o.kt)("em",{parentName:"p"},"has")," a service of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def succeed[A: Tag](a: A): ULayer[Has[A]]\n")),(0,o.kt)("p",null,"In the following example, we are going to create a ",(0,o.kt)("inlineCode",{parentName:"p"},"nameLayer")," that provides us the name of ",(0,o.kt)("inlineCode",{parentName:"p"},"Adam"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val nameLayer: ULayer[Has[String]] = ZLayer.succeed("Adam")\n')),(0,o.kt)("p",null,"In most cases, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer.succeed")," to provide a layer of service of type ",(0,o.kt)("inlineCode",{parentName:"p"},"A"),"."),(0,o.kt)("p",null,"For example, assume we have written the following service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object terminal {\n  type Terminal = Has[Terminal.Service]\n\n  object Terminal {\n    trait Service {\n      def putStrLn(line: String): UIO[Unit]\n    }\n\n    object Service {\n      val live: Service = new Service {\n        override def putStrLn(line: String): UIO[Unit] =\n          ZIO.effectTotal(println(line))\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"Now we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," from the ",(0,o.kt)("inlineCode",{parentName:"p"},"live")," version of this service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import terminal._\nval live: ZLayer[Any, Nothing, Terminal] = ZLayer.succeed(Terminal.Service.live)\n")),(0,o.kt)("h3",{id:"from-managed-resources"},"From Managed Resources"),(0,o.kt)("p",null,"Some components of our applications need to be managed, meaning they undergo a resource acquisition phase before usage, and a resource release phase after usage (e.g. when the application shuts down). "),(0,o.kt)("p",null,"Fortunately, the construction of ZIO layers can be effectful and resourceful, this means they can be acquired and safely released when the services are done being utilized."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," relies on the powerful ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," data type and this makes this process extremely simple."),(0,o.kt)("p",null,"We can lift any ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," by providing a managed resource to the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.fromManaged")," constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val managedFile = ZManaged.fromAutoCloseable(\n  ZIO.effect(scala.io.Source.fromFile("file.txt"))\n)\nval fileLayer: ZLayer[Any, Throwable, Has[BufferedSource]] = \n  ZLayer.fromManaged(managedFile)\n')),(0,o.kt)("p",null,"Also, every ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," can be converted to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer#toLayer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val fileLayer: ZLayer[Any, Throwable, Has[BufferedSource]] = managedFile.toLayer\n")),(0,o.kt)("p",null,"Let's see another real-world example of creating a layer from managed resources. Assume we have written a managed ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepository"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def userRepository: ZManaged[Blocking with Console, Throwable, UserRepository] = for {\n  cfg <- dbConfig.toManaged_\n  _ <- initializeDb(cfg).toManaged_\n  xa <- makeTransactor(cfg)\n} yield new UserRepository(xa)\n")),(0,o.kt)("p",null,"We can convert that to ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer.fromManaged")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged#toLayer"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val usersLayer  = userRepository.toLayer\n// usersLayer: ZLayer[Blocking with Console, Throwable, Has[UserRepository]] = Managed(\n//   self = zio.ZManaged$$anon$2@23b3755d\n// )\nval usersLayer_ = ZLayer.fromManaged(userRepository)\n// usersLayer_: ZLayer[Blocking with Console, Throwable, Has[UserRepository]] = Managed(\n//   self = zio.ZManaged$$anon$2@6f931c3b\n// )\n")),(0,o.kt)("p",null,"Also, we can create a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," directly from ",(0,o.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," actions of a managed resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def acquire = ZIO.effect(new FileInputStream("file.txt"))\ndef release(resource: Closeable) = ZIO.effectTotal(resource.close())\n\nval inputStreamLayer = ZLayer.fromAcquireRelease(acquire)(release)\n// inputStreamLayer: ZLayer[Any, Throwable, Has[FileInputStream]] = Managed(\n//   self = zio.ZManaged$$anon$2@7f45125b\n// )\n')),(0,o.kt)("h3",{id:"from-zio-effects"},"From ZIO Effects"),(0,o.kt)("p",null,"We can create ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," from any ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect by using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer.fromEffect")," constructor, or calling ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#toLayer")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'val layer = ZLayer.fromEffect(ZIO.succeed("Hello, World!"))\n// layer: ZLayer[Any, Nothing, Has[String]] = Managed(\n//   self = zio.ZManaged$$anon$2@2500424c\n// )\nval layer_ = ZIO.succeed("Hello, World!").toLayer\n// layer_: ZLayer[Any, Nothing, Has[String]] = Managed(\n//   self = zio.ZManaged$$anon$2@9ee9d0c\n// )\n')),(0,o.kt)("p",null,"Assume we have a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect that read the application config from a file, we can create a layer from that:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def loadConfig: Task[AppConfig] = Task.effect(???)\nval configLayer = ZLayer.fromEffect(loadConfig)\n// configLayer: ZLayer[Any, Throwable, Has[AppConfig]] = Managed(\n//   self = zio.ZManaged$$anon$2@7f0e196d\n// )\n")),(0,o.kt)("h3",{id:"from-another-service"},"From another Service"),(0,o.kt)("p",null,"Every ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," describes an application that requires some services as input and produces some services as output. Sometimes when we are writing a new layer, we may need to access and depend on one or several services."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer.fromService")," construct a layer that purely depends on the specified service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def fromService[A: Tag, B: Tag](f: A => B): ZLayer[Has[A], Nothing, Has[B]]\n")),(0,o.kt)("p",null,"Assume we want to write a ",(0,o.kt)("inlineCode",{parentName:"p"},"live")," version of the following logging service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"object logging {\n  type Logging = Has[Logging.Service]\n\n  object Logging {\n    trait Service {\n      def log(msg: String): UIO[Unit]\n    }\n  }\n}\n")),(0,o.kt)("p",null,"We can create that by using ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer.fromService")," constructor, which depends on ",(0,o.kt)("inlineCode",{parentName:"p"},"Console")," service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val live: ZLayer[Console, Nothing, Logging] = ZLayer.fromService(console =>\n  new Service {\n    override def log(msg: String): UIO[Unit] = console.putStrLn(msg).orDie\n  }\n)\n")),(0,o.kt)("h2",{id:"vertical-and-horizontal-composition"},"Vertical and Horizontal Composition"),(0,o.kt)("p",null,"We said that we can think of the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," as a more powerful ",(0,o.kt)("em",{parentName:"p"},"constructor"),". Constructors are not composable, because they are not values. While a constructor is not composable, ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," has a nice facility to compose with other ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer"),"s. So we can say that a ",(0,o.kt)("inlineCode",{parentName:"p"},"Zlayer")," turns a constructor into values."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer"),"s can be composed together horizontally or vertically:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Horizontal Composition")," \u2014 They can be composed together horizontally with the ",(0,o.kt)("inlineCode",{parentName:"p"},"++")," operator. When we compose two layers horizontally, the new layer that this layer requires all the services that both of them require, also this layer produces all services that both of them produces. Horizontal composition is a way of composing two layers side-by-side. It is useful when we combine two layers that they don't have any relationship with each other. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Vertical Composition")," \u2014 If we have a layer that requires ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and produces ",(0,o.kt)("inlineCode",{parentName:"p"},"B"),", we can compose this layer with another layer that requires ",(0,o.kt)("inlineCode",{parentName:"p"},"B")," and produces ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),"; this composition produces a layer that requires ",(0,o.kt)("inlineCode",{parentName:"p"},"A")," and produces ",(0,o.kt)("inlineCode",{parentName:"p"},"C"),". The feed operator, ",(0,o.kt)("inlineCode",{parentName:"p"},">>>"),", stack them on top of each other by using vertical composition. This sort of composition is like ",(0,o.kt)("em",{parentName:"p"},"function composition"),", feeding an output of one layer to an input of another."))),(0,o.kt)("p",null,"Let's get into an example, assume we have these services with their implementations:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Logging { }\ntrait Database { }\ntrait BlobStorage { }\ntrait UserRepo { }\ntrait DocRepo { }\n\ncase class LoggerImpl(console: Console.Service) extends Logging { }\ncase class DatabaseImp(blocking: Blocking.Service) extends Database { }\ncase class UserRepoImpl(logging: Logging, database: Database) extends UserRepo { } \ncase class BlobStorageImpl(logging: Logging) extends BlobStorage { }\ncase class DocRepoImpl(logging: Logging, database: Database, blobStorage: BlobStorage) extends DocRepo { }\n")),(0,o.kt)("p",null,"We can't compose these services together, because their constructors are not value. ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," can convert these services into values, then we can compose them together."),(0,o.kt)("p",null,"Let's assume we have lifted these services into ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer"),"s:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val logging: URLayer[Has[Console.Service], Has[Logging]] = \n  (LoggerImpl.apply _).toLayer\nval database: URLayer[Has[Blocking.Service], Has[Database]] = \n  (DatabaseImp(_)).toLayer\nval userRepo: URLayer[Has[Logging] with Has[Database], Has[UserRepo]] = \n  (UserRepoImpl(_, _)).toLayer\nval blobStorage: URLayer[Has[Logging], Has[BlobStorage]] = \n  (BlobStorageImpl(_)).toLayer\nval docRepo: URLayer[Has[Logging] with Has[Database] with Has[BlobStorage], Has[DocRepo]] = \n  (DocRepoImpl(_, _, _)).toLayer\n")),(0,o.kt)("p",null,"Now, we can compose logging and database horizontally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val newLayer: ZLayer[Has[Console.Service] with Has[Blocking.Service], Throwable, Has[Logging] with Has[Database]] = logging ++ database\n")),(0,o.kt)("p",null,"And then we can compose the ",(0,o.kt)("inlineCode",{parentName:"p"},"newLayer")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"userRepo")," vertically:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val myLayer: ZLayer[Has[Console.Service] with Has[Blocking.Service], Throwable, Has[UserRepo]] = newLayer >>> userRepo\n")),(0,o.kt)("h2",{id:"layer-memoization"},"Layer Memoization"),(0,o.kt)("p",null,"One important feature of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," layers is that ",(0,o.kt)("strong",{parentName:"p"},"they are shared by default"),", meaning that if the same layer is used twice, the layer will only be allocated a single time. "),(0,o.kt)("p",null,"For every layer in our dependency graph, there is only one instance of it that is shared between all the layers that depend on it. "),(0,o.kt)("p",null,"If we don't want to share a module, we should create a fresh, non-shared version of it through ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer#fresh"),"."),(0,o.kt)("h2",{id:"updating-local-dependencies"},"Updating Local Dependencies"),(0,o.kt)("p",null,"Given a layer, it is possible to update one or more components it provides. We update a dependency in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Using the ",(0,o.kt)("inlineCode",{parentName:"strong"},"update")," Method")," \u2014 This method allows us to replace one requirement with a different implementation:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val withPostgresService = horizontal.update[UserRepo.Service]{ oldRepo  => new UserRepo.Service {\n      override def getUser(userId: UserId): IO[DBError, Option[User]] = UIO(???)\n      override def createUser(user: User): IO[DBError, Unit] = UIO(???)\n    }\n  }\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Using Horizontal Composition")," \u2014 Another way to update a requirement is to horizontally compose in a layer that provides the updated service. The resulting composition will replace the old layer with the new one:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val dbLayer: Layer[Nothing, UserRepo] = ZLayer.succeed(new UserRepo.Service {\n    override def getUser(userId: UserId): IO[DBError, Option[User]] = ???\n    override def createUser(user: User): IO[DBError, Unit] = ???\n  })\n\nval updatedHorizontal2 = horizontal ++ dbLayer\n")),(0,o.kt)("h2",{id:"hidden-versus-passed-through-dependencies"},"Hidden Versus Passed Through Dependencies"),(0,o.kt)("p",null,"One design decision regarding building dependency graphs is whether to hide or pass through the upstream dependencies of a service. ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," defaults to hidden dependencies but makes it easy to pass through dependencies as well."),(0,o.kt)("p",null,"To illustrate this, consider the Postgres-based repository discussed above:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val connection: ZLayer[Any, Nothing, Has[Connection]] = connectionLayer\nval userRepo: ZLayer[Has[Connection], Nothing, UserRepo] = postgresLayer\nval layer: ZLayer[Any, Nothing, UserRepo] = connection >>> userRepo\n")),(0,o.kt)("p",null,"Notice that in ",(0,o.kt)("inlineCode",{parentName:"p"},"layer"),", the dependency ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepo")," has on ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection"),' has been "hidden", and is no longer expressed in the type signature. From the perspective of a caller, ',(0,o.kt)("inlineCode",{parentName:"p"},"layer")," just outputs a ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepo")," and requires no inputs. The caller does not need to be concerned with the internal implementation details of how the ",(0,o.kt)("inlineCode",{parentName:"p"},"UserRepo")," is constructed."),(0,o.kt)("p",null,"To provide only some inputs, we need to explicitly define what inputs still need to be provided:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"trait Configuration\n\nval userRepoWithConfig: ZLayer[Has[Configuration] with Has[Connection], Nothing, UserRepo] = \n  ZLayer.succeed(new Configuration{}) ++ postgresLayer\nval partialLayer: ZLayer[Has[Configuration], Nothing, UserRepo] = \n  (ZLayer.identity[Has[Configuration]] ++ connection) >>> userRepoWithConfig\n")),(0,o.kt)("p",null,"In this example the requirement for a ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," has been satisfied, but ",(0,o.kt)("inlineCode",{parentName:"p"},"Configuration")," is still required by ",(0,o.kt)("inlineCode",{parentName:"p"},"partialLayer"),"."),(0,o.kt)("p",null,"This achieves an encapsulation of services and can make it easier to refactor code. For example, say we want to refactor our application to use an in-memory database:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val updatedLayer: ZLayer[Any, Nothing, UserRepo] = dbLayer\n")),(0,o.kt)("p",null,"No other code will need to be changed, because the previous implementation's dependency upon a ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," was hidden from users, and so they were not able to rely on it."),(0,o.kt)("p",null,'However, if an upstream dependency is used by many other services, it can be convenient to "pass through" that dependency, and include it in the output of a layer. This can be done with the ',(0,o.kt)("inlineCode",{parentName:"p"},">+>")," operator, which provides the output of one layer to another layer, returning a new layer that outputs the services of ",(0,o.kt)("em",{parentName:"p"},"both")," layers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val layer: ZLayer[Any, Nothing, Has[Connection] with UserRepo] = connection >+> userRepo\n")),(0,o.kt)("p",null,"Here, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Connection")," dependency has been passed through, and is available to all downstream services. This allows a style of composition where the ",(0,o.kt)("inlineCode",{parentName:"p"},">+>")," operator is used to build a progressively larger set of services, with each new service able to depend on all the services before it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"lazy val baker: ZLayer[Any, Nothing, Baker] = ???\nlazy val ingredients: ZLayer[Any, Nothing, Ingredients] = ???\nlazy val oven: ZLayer[Any, Nothing, Oven] = ???\nlazy val dough: ZLayer[Baker with Ingredients, Nothing, Dough] = ???\nlazy val cake: ZLayer[Baker with Oven with Dough, Nothing, Cake] = ???\n\nlazy val all: ZLayer[Any, Nothing, Baker with Ingredients with Oven with Dough with Cake] =\n  baker >+>       // Baker\n  ingredients >+> // Baker with Ingredients\n  oven >+>        // Baker with Ingredients with Oven\n  dough >+>       // Baker with Ingredients with Oven with Dough\n  cake            // Baker with Ingredients with Oven with Dough with Cake\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," makes it easy to mix and match these styles. If you pass through dependencies and later want to hide them you can do so through a simple type ascription:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"lazy val hidden: ZLayer[Any, Nothing, Cake] = all\n")),(0,o.kt)("p",null,"And if you do build your dependency graph more explicitly, you can be confident that layers used in multiple parts of the dependency graph will only be created once due to memoization and sharing."),(0,o.kt)("h2",{id:"cyclic-dependencies"},"Cyclic Dependencies"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," mechanism makes it impossible to build cyclic dependencies, making the initialization process very linear, by construction."),(0,o.kt)("h2",{id:"asynchronous-service-construction"},"Asynchronous Service Construction"),(0,o.kt)("p",null,"Another important note about ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," is that, unlike constructors which are synchronous, ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," is ",(0,o.kt)("em",{parentName:"p"},"asynchronous"),". Constructors in classes are always synchronous. This is a drawback for non-blocking applications. Because sometimes we might want to use something that is blocking the inside constructor."),(0,o.kt)("p",null,"For example, when we are constructing some sort of Kafka streaming service, we might want to connect to the Kafka cluster in the constructor of our service, which takes some time. So that wouldn't be a good idea to blocking inside a constructor. There are some workarounds for fixing this issue, but they are not perfect as the ZIO solution."),(0,o.kt)("p",null,"Well, with ZIO ZLayer, our constructor could be asynchronous, and they also can block definitely. And that is because ",(0,o.kt)("inlineCode",{parentName:"p"},"ZLayer")," has the full power of ZIO. And as a result, we have strictly more power on our constructors with ZLayer. "),(0,o.kt)("p",null,"We can acquire resources asynchronously or in a blocking fashion, and spend some time doing that, and we don't need to worry about it. That is not an anti-pattern. This is the best practice with ZIO."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"the-simplest-zlayer-application"},"The simplest ZLayer application"),(0,o.kt)("p",null,"This application demonstrates a ZIO program with a single dependency on a simple string value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject Example extends zio.App {\n\n  // Define our simple ZIO program\n  val zio: ZIO[Has[String], Nothing, Unit] = for {\n    name <- ZIO.access[Has[String]](_.get)\n    _    <- UIO(println(s"Hello, $name!"))\n  } yield ()\n\n  // Create a ZLayer that produces a string and can be used to satisfy a string\n  // dependency that the program has\n  val nameLayer: ULayer[Has[String]] = ZLayer.succeed("Adam")\n\n  // Run the program, providing the `nameLayer`\n  def run(args: List[String]): URIO[ZEnv, ExitCode] =\n    zio.provideLayer(nameLayer).as(ExitCode.success)\n}\n\n')),(0,o.kt)("h3",{id:"zlayer-application-with-dependencies"},"ZLayer application with dependencies"),(0,o.kt)("p",null,"In the following example, our ZIO application has several dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zio.clock.Clock")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"zio.console.Console")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ModuleB"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ModuleB")," in turn depends upon ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleA"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\nimport zio.clock._\nimport zio.console._\nimport zio.duration.Duration._\nimport java.io.IOException\n\nobject moduleA {\n  type ModuleA = Has[ModuleA.Service]\n\n  object ModuleA {\n    trait Service {\n      def letsGoA(v: Int): UIO[String]\n    }\n\n    val any: ZLayer[ModuleA, Nothing, ModuleA] =\n      ZLayer.requires[ModuleA]\n\n    val live: Layer[Nothing, Has[Service]] = ZLayer.succeed {\n      new Service {\n        def letsGoA(v: Int): UIO[String] = UIO(s"done: v = $v ")\n      }\n    }\n  }\n\n  def letsGoA(v: Int): URIO[ModuleA, String] =\n    ZIO.accessM(_.get.letsGoA(v))\n}\n\nimport moduleA._\n\nobject moduleB {\n  type ModuleB = Has[ModuleB.Service]\n\n  object ModuleB {\n    trait Service {\n      def letsGoB(v: Int): UIO[String]\n    }\n\n    val any: ZLayer[ModuleB, Nothing, ModuleB] =\n      ZLayer.requires[ModuleB]\n\n    val live: ZLayer[ModuleA, Nothing, ModuleB] = ZLayer.fromService { (moduleA: ModuleA.Service) =>\n      new Service {\n        def letsGoB(v: Int): UIO[String] =\n          moduleA.letsGoA(v)\n      }\n    }\n  }\n\n  def letsGoB(v: Int): URIO[ModuleB, String] =\n    ZIO.accessM(_.get.letsGoB(v))\n}\n\nobject ZLayerApp0 extends zio.App {\n\n  import moduleB._\n\n  val env = Console.live ++ Clock.live ++ (ModuleA.live >>> ModuleB.live)\n  val program: ZIO[Console with Clock with moduleB.ModuleB, IOException, Unit] =\n    for {\n      _ <- putStrLn(s"Welcome to ZIO!")\n      _ <- sleep(Finite(1000))\n      r <- letsGoB(10)\n      _ <- putStrLn(r)\n    } yield ()\n\n  def run(args: List[String]) =\n    program.provideLayer(env).exitCode\n\n}\n\n// output: \n// [info] running ZLayersApp \n// Welcome to ZIO!\n// done: v = 10 \n')),(0,o.kt)("h3",{id:"zlayer-example-with-complex-dependencies"},"ZLayer example with complex dependencies"),(0,o.kt)("p",null,"In this example, we can see that ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleC")," depends upon ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleA"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ModuleB"),", and ",(0,o.kt)("inlineCode",{parentName:"p"},"Clock"),". The layer provided to the runnable application shows how dependency layers can be combined using ",(0,o.kt)("inlineCode",{parentName:"p"},"++")," into a single combined layer. The combined layer will then be able to produce both of the outputs of the original layers as a single layer:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\nimport zio.clock._\n\nobject ZLayerApp1 extends scala.App {\n  val rt = Runtime.default\n\n  type ModuleA = Has[ModuleA.Service]\n\n  object ModuleA {\n\n    trait Service {}\n\n    val any: ZLayer[ModuleA, Nothing, ModuleA] =\n      ZLayer.requires[ModuleA]\n\n    val live: ZLayer[Any, Nothing, ModuleA] =\n      ZLayer.succeed(new Service {})\n  }\n\n  type ModuleB = Has[ModuleB.Service]\n\n  object ModuleB {\n\n    trait Service {}\n\n    val any: ZLayer[ModuleB, Nothing, ModuleB] =\n      ZLayer.requires[ModuleB]\n\n    val live: ZLayer[Any, Nothing, ModuleB] =\n      ZLayer.succeed(new Service {})\n  }\n\n  type ModuleC = Has[ModuleC.Service]\n\n  object ModuleC {\n\n    trait Service {\n      def foo: UIO[Int]\n    }\n\n    val any: ZLayer[ModuleC, Nothing, ModuleC] =\n      ZLayer.requires[ModuleC]\n\n    val live: ZLayer[ModuleA with ModuleB with Clock, Nothing, ModuleC] =\n      ZLayer.succeed {\n        new Service {\n          val foo: UIO[Int] = UIO.succeed(42)\n        }\n      }\n\n    val foo: URIO[ModuleC, Int] =\n      ZIO.accessM(_.get.foo)\n  }\n\n  val env = (ModuleA.live ++ ModuleB.live ++ ZLayer.identity[Clock]) >>> ModuleC.live\n\n  val res = ModuleC.foo.provideCustomLayer(env)\n\n  val out = rt.unsafeRun(res)\n  println(out)\n  // 42\n}\n")))}u.isMDXComponent=!0}}]);