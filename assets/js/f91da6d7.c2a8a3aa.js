"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[3110],{3905:function(e,n,a){a.d(n,{Zo:function(){return p},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),c=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(f,i(i({ref:n},p),{},{components:a})):t.createElement(f,i({ref:n},p))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5317:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var t=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],l={id:"index",title:"Introduction"},s=void 0,c={unversionedId:"datatypes/resource/index",id:"version-1.x/datatypes/resource/index",title:"Introduction",description:"When we are writing a long-lived application, resource management is very important. Proper resource management is vital to any large-scale application. We need to make sure that our application is resource-safe, and it doesn't leak any resource.",source:"@site/versioned_docs/version-1.x/datatypes/resource/index.md",sourceDirName:"datatypes/resource",slug:"/datatypes/resource/",permalink:"/version-1.x/datatypes/resource/",editUrl:"https://github.com/zio/zio/edit/series/2.x/versioned_docs/version-1.x/datatypes/resource/index.md",tags:[],version:"1.x",frontMatter:{id:"index",title:"Introduction"},sidebar:"datatypes-sidebar",previous:{title:"TSemaphore",permalink:"/version-1.x/datatypes/stm/tsemaphore"},next:{title:"ZManaged",permalink:"/version-1.x/datatypes/resource/zmanaged"}},p=[{value:"Try / Finally",id:"try--finally",children:[],level:2},{value:"ZIO Solution",id:"zio-solution",children:[{value:"bracket",id:"bracket",children:[],level:3},{value:"ZManaged",id:"zmanaged",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When we are writing a long-lived application, resource management is very important. Proper resource management is vital to any large-scale application. We need to make sure that our application is resource-safe, and it doesn't leak any resource."),(0,o.kt)("p",null,"Leaking socket connections, database connections or file descriptors is not acceptable in a web application. ZIO provides some good construct to make sure about this concern."),(0,o.kt)("p",null,"To write a resource-safe application, we need to make sure whenever we are opening a resource, we have a mechanism to close that resource whether we use that resource completely or not, for example, an exception occurred during resource usage."),(0,o.kt)("h2",{id:"try--finally"},"Try / Finally"),(0,o.kt)("p",null,"Before we dive into the ZIO solution, it's better to review the ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," which is the standard approach in the Scala language to manage resources."),(0,o.kt)("p",null,"Scala has a ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," construct which helps us to make sure we don't leak resources because no matter what happens in the try, the ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," block will be executed. So we can open files in the try block, and then we can close them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," block, and that gives us the guarantee that we will not leak resources."),(0,o.kt)("p",null,"Assume we want to read a file and return the number of its lines:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def lines(file: String): Task[Long] = Task.effect {\n  def countLines(br: BufferedReader): Long = br.lines().count()\n  val bufferedReader = new BufferedReader(\n    new InputStreamReader(new FileInputStream("file.txt")),\n    2048\n  )\n  val count = countLines(bufferedReader)\n  bufferedReader.close()\n  count\n}\n')),(0,o.kt)("p",null,"What happens if after opening the file and before closing the file, an exception occurs? So, the ",(0,o.kt)("inlineCode",{parentName:"p"},"bufferedReader.close()")," line, doesn't have a chance to close the resource. This creates a resource leakage. The Scala language has ",(0,o.kt)("inlineCode",{parentName:"p"},"try...finally")," construct, which helps up to prevent these situations."),(0,o.kt)("p",null,"Let's rewrite the above example with ",(0,o.kt)("inlineCode",{parentName:"p"},"try..finally"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'def lines(file: String): Task[Long] = Task.effect {\n  def countLines(br: BufferedReader): Long = br.lines().count()\n  val bufferedReader = new BufferedReader(\n    new InputStreamReader(new FileInputStream("file.txt")),\n    2048\n  )\n  try countLines(bufferedReader)\n  finally bufferedReader.close()\n}\n')),(0,o.kt)("p",null,"Now, we are sure that if our program is interrupted during the process of a file, the ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," block will be executed."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," solve simple problems, but it has some drawbacks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's not composable; We can't compose multiple resources together.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"When we have multiple resources, we end up with messy and ugly code, hard to reason about, and refactoring.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"We don't have any control over the order of resource clean-up")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It only helps us to handle resources sequentially. It can't compose multiple resources, concurrently.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It doesn't support asynchronous workflows.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"It's a manual way of resource management, not automatic. To have a resource-safe application we need to manually check that all resources are managed correctly. This way of resource management is error-prone in case of forgetting to manage resources, correctly."))),(0,o.kt)("h2",{id:"zio-solution"},"ZIO Solution"),(0,o.kt)("p",null,"ZIO's resource management features work across synchronous, asynchronous, concurrent, and other effect types, and provide strong guarantees even in the presence of failure, interruption, or defects in the application."),(0,o.kt)("p",null,"ZIO has two major mechanisms to manage resources."),(0,o.kt)("h3",{id:"bracket"},"bracket"),(0,o.kt)("p",null,"ZIO generalized the pattern of ",(0,o.kt)("inlineCode",{parentName:"p"},"try")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"finally")," and encoded it in ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO.bracket")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#bracket")," operations. "),(0,o.kt)("p",null,"Every bracket requires three actions:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Acquiring Resource"),"\u2014 An effect describing the acquisition of resource. For example, opening a file."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Using Resource"),"\u2014 An effect describing the actual process to produce a result. For example, counting the number of lines in a file."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Releasing Resource"),"\u2014 An effect describing the final step of releasing or cleaning up the resource. For example, closing a file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def use(resource: Resource): Task[Any] = Task.effect(???)\ndef release(resource: Resource): UIO[Unit] = Task.effectTotal(???)\ndef acquire: Task[Resource]                = Task.effect(???)\n\nval result1: Task[Any] = acquire.bracket(release, use)\nval result2: Task[Any] = acquire.bracket(release)(use) // More ergonomic API\n\nval result3: Task[Any] = Task.bracket(acquire, release, use)\nval result4: Task[Any] = Task.bracket(acquire)(release)(use) // More ergonomic API\n")),(0,o.kt)("p",null,"The bracket guarantees us that the ",(0,o.kt)("inlineCode",{parentName:"p"},"acquiring")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"releasing")," of a resource will not be interrupted. These two guarantees ensure us that the resource will always be released."),(0,o.kt)("p",null,"Let's try a real example. We are going to write a function which count line number of given file. As we are working with file resource, we should separate our logic into three part. At the first part, we create a ",(0,o.kt)("inlineCode",{parentName:"p"},"BufferedReader"),". At the second, we count the file lines with given ",(0,o.kt)("inlineCode",{parentName:"p"},"BufferedReader")," resource, and at the end we close that resource:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala:mdoc:silent"},"def lines(file: String): Task[Long] = {\n  def countLines(reader: BufferedReader): Task[Long]    = Task.effect(reader.lines().count())\n  def releaseReader(reader: BufferedReader): UIO[Unit]  = Task.effectTotal(reader.close())\n  def acquireReader(file: String): Task[BufferedReader] = Task.effect(new BufferedReader(new FileReader(file), 2048))\n\n  Task.bracket(acquireReader(file), releaseReader, countLines)\n}\n")),(0,o.kt)("p",null,"Let's write another function which copy a file from source to destination file. We can do that by nesting two brackets one for the ",(0,o.kt)("inlineCode",{parentName:"p"},"FileInputStream")," and the other for ",(0,o.kt)("inlineCode",{parentName:"p"},"FileOutputStream"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def is(file: String): Task[FileInputStream]  = Task.effect(???)\ndef os(file: String): Task[FileOutputStream] = Task.effect(???)\n\ndef close(resource: Closeable): UIO[Unit] = Task.effectTotal(???)\ndef copy(from: FileInputStream, to: FileOutputStream): Task[Unit] = ???\n\ndef transfer(src: String, dst: String): ZIO[Any, Throwable, Unit] = {\n  Task.bracket(is(src))(close) { in =>\n    Task.bracket(os(dst))(close) { out =>\n      copy(in, out)\n    }\n  }\n}\n")),(0,o.kt)("p",null,"As there isn't any dependency between our two resources (",(0,o.kt)("inlineCode",{parentName:"p"},"is")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"os"),"), it doesn't make sense to use nested brackets, so let's ",(0,o.kt)("inlineCode",{parentName:"p"},"zip")," these two acquisition into one effect, and the use one bracket on them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def transfer(src: String, dst: String): ZIO[Any, Throwable, Unit] = {\n  is(src)\n    .zipPar(os(dst))\n    .bracket { case (in, out) =>\n      Task\n        .effectTotal(in.close())\n        .zipPar(Task.effectTotal(out.close()))\n    } { case (in, out) =>\n      copy(in, out)\n    }\n}\n")),(0,o.kt)("p",null,"While using bracket is a nice and simple way of managing resources, but there are some cases where a bracket is not the best choice:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Bracket is not composable\u2014 When we have multiple resources, composing them with a bracket is not straightforward.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Messy nested brackets\u2014 In the case of multiple resources, nested brackets remind us of callback hell awkwardness. The bracket is designed with nested resource acquisition. In the case of multiple resources, we encounter inefficient nested bracket calls, and it causes refactoring a complicated process."))),(0,o.kt)("p",null,"Using brackets is simple and straightforward, but in the case of multiple resources, it isn't a good player. This is where we need another abstraction to cover these issues."),(0,o.kt)("h3",{id:"zmanaged"},"ZManaged"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZManage")," is a composable data type for resource management, which wraps the acquisition and release action of a resource. We can think of ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManage")," as a handle with build-in acquisition and release logic."),(0,o.kt)("p",null,"To create a managed resource, we need to provide ",(0,o.kt)("inlineCode",{parentName:"p"},"acquire")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"release")," action of that resource to the ",(0,o.kt)("inlineCode",{parentName:"p"},"make")," constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"val managed = ZManaged.make(acquire)(release)\n")),(0,o.kt)("p",null,"We can use managed resources by calling ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," on that. A managed resource is meant to be used only inside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," block. So that resource is not available outside of the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," block. "),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," is a separate world like ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO"),"; In this world, we have a lot of combinators to combine ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," and create another ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged"),". At the end of the day, when our composed ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," prepared, we can run any effect on this resource and convert that into a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," world."),(0,o.kt)("p",null,"Let's try to rewrite a ",(0,o.kt)("inlineCode",{parentName:"p"},"transfer")," example with ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def transfer(from: String, to: String): ZIO[Any, Throwable, Unit] = {\n  val resource = for {\n    from <- ZManaged.make(is(from))(close)\n    to   <- ZManaged.make(os(to))(close)\n  } yield (from, to)\n\n  resource.use { case (in, out) =>\n    copy(in, out)\n  }\n}\n")),(0,o.kt)("p",null,"Also, we can get rid of this ceremony and treat the ",(0,o.kt)("inlineCode",{parentName:"p"},"Managed")," like a ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"def transfer(from: String, to: String): ZIO[Any, Throwable, Unit] = {\n  val resource: ZManaged[Any, Throwable, Unit] = for {\n    from <- ZManaged.make(is(from))(close)\n    to   <- ZManaged.make(os(to))(close)\n    _    <- copy(from, to).toManaged_\n  } yield ()\n  resource.useNow\n}\n")),(0,o.kt)("p",null,"This is where the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," provides us a composable and flexible way of allocating resources.  They can be composed with any ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO")," effect by converting them using the ",(0,o.kt)("inlineCode",{parentName:"p"},"ZIO#toManaged_")," operator."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"ZManaged")," has several type aliases, each of which is useful for a specific workflow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/resource/managed"},"Managed")),"\u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"Managed[E, A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"Managed[Any, E, A]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/resource/task-managed"},"TaskManaged")),"\u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"TaskManaged[A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged[Any, Throwable, A]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/resource/rmanaged"},"RManaged")),"\u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"RManaged[R, A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged[R, Throwable, A]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/resource/umanaged"},"UManaged")),"\u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"UManaged[A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged[Any, Nothing, A]"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("a",{parentName:"strong",href:"/version-1.x/datatypes/resource/urmanaged"},"URManaged")),"\u2014 ",(0,o.kt)("inlineCode",{parentName:"li"},"URManaged[R, A]")," is a type alias for ",(0,o.kt)("inlineCode",{parentName:"li"},"ZManaged[R, Nothing, A]"),".")))}d.isMDXComponent=!0}}]);