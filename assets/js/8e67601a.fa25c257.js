"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[1469],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4849:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"zio-s3",title:"ZIO S3"},c=void 0,l={unversionedId:"resources/ecosystem/officials/zio-s3",id:"resources/ecosystem/officials/zio-s3",title:"ZIO S3",description:"ZIO S3 is an S3 client for ZIO.",source:"@site/docs/resources/ecosystem/officials/zio-s3.md",sourceDirName:"resources/ecosystem/officials",slug:"/resources/ecosystem/officials/zio-s3",permalink:"/next/resources/ecosystem/officials/zio-s3",editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/resources/ecosystem/officials/zio-s3.md",tags:[],version:"current",frontMatter:{id:"zio-s3",title:"ZIO S3"},sidebar:"resources-sidebar",previous:{title:"ZIO RocksDB",permalink:"/next/resources/ecosystem/officials/zio-rocksdb"},next:{title:"ZIO Schema",permalink:"/next/resources/ecosystem/officials/zio-schema"}},p=[{value:"Installation",id:"installation",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],u={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zio/zio-s3"},"ZIO S3")," is an S3 client for ZIO."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("p",null,"In order to use this library, we need to add the following line in our ",(0,i.kt)("inlineCode",{parentName:"p"},"build.sbt")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies += "dev.zio" %% "zio-s3" % "0.3.5" \n')),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Let's try an example of creating a bucket and adding an object into it. To run this example, we need to run an instance of ",(0,i.kt)("em",{parentName:"p"},"Minio")," which is object storage compatible with S3:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 9000:9000 -e MINIO_ACCESS_KEY=MyKey -e MINIO_SECRET_KEY=MySecret minio/minio  server --compat /data\n")),(0,i.kt)("p",null,"In this example we create a bucket and then add a JSON object to it and then retrieve that:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-scala"},'import software.amazon.awssdk.auth.credentials.AwsBasicCredentials\nimport software.amazon.awssdk.regions.Region\nimport zio.console.putStrLn\nimport zio.s3._\nimport zio.stream.{ZStream, ZTransducer}\nimport zio.{Chunk, ExitCode, URIO}\n\nimport java.net.URI\n\nobject ZIOS3Example extends zio.App {\n\n  val myApp = for {\n    _ <- createBucket("docs")\n    json = Chunk.fromArray("""{  "id" : 1 , "name" : "A1" }""".getBytes)\n    _ <- putObject(\n      bucketName = "docs",\n      key = "doc1",\n      contentLength = json.length,\n      content = ZStream.fromChunk(json),\n      options = UploadOptions.fromContentType("application/json")\n    )\n    _ <- getObject("docs", "doc1")\n      .transduce(ZTransducer.utf8Decode)\n      .foreach(putStrLn(_))\n  } yield ()\n\n  override def run(args: List[String]): URIO[zio.ZEnv, ExitCode] =\n    myApp\n      .provideCustom(\n        live(\n          Region.CA_CENTRAL_1,\n          AwsBasicCredentials.create("MyKey", "MySecret"),\n          Some(URI.create("http://localhost:9000"))\n        )\n      )\n      .exitCode\n}\n')))}m.isMDXComponent=!0}}]);