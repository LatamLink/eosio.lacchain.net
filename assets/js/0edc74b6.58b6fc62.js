(self.webpackChunkes_latamkink_io=self.webpackChunkes_latamkink_io||[]).push([[252],{3905:function(e,n,a){"use strict";a.d(n,{Zo:function(){return d},kt:function(){return p}});var o=a(67294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),c=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},d=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},A=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),A=c(a),p=t,I=A["".concat(l,".").concat(p)]||A[p]||u[p]||r;return a?o.createElement(I,i(i({ref:n},d),{},{components:a})):o.createElement(I,i({ref:n},d))}));function p(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=A;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}A.displayName="MDXCreateElement"},10990:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var o=a(22122),t=a(19756),r=(a(67294),a(3905)),i={id:"instalacion-nodos",title:"Instalaci\xf3n de Nodos en LACChain EOSIO",sidebar_label:"Instalaci\xf3n de Nodos"},s={unversionedId:"guias/instalacion-nodos",id:"guias/instalacion-nodos",isDocsHomePage:!1,title:"Instalaci\xf3n de Nodos en LACChain EOSIO",description:"Nodeos es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronizaci\xf3n con otros nodos a trav\xe9s del protocolo p2p, proporciona una API HTTP para el software del cliente y, opcionalmente, firma bloques si se configura con la cuenta de un validador.",source:"@site/docs/guias/instalacion-nodos.md",sourceDirName:"guias",slug:"/guias/instalacion-nodos",permalink:"/docs/guias/instalacion-nodos",editUrl:"https://github.com/LatamLink/es.latamlink.io/tree/master/docs/guias/instalacion-nodos.md",version:"current",lastUpdatedAt:1621283248,formattedLastUpdatedAt:"17/5/2021",sidebar_label:"Instalaci\xf3n de Nodos",frontMatter:{id:"instalacion-nodos",title:"Instalaci\xf3n de Nodos en LACChain EOSIO",sidebar_label:"Instalaci\xf3n de Nodos"},sidebar:"docs",previous:{title:"Ambiente de desarrollo",permalink:"/docs/guias/ambiente-desarrollo"},next:{title:"Consideraciones Infraestructura",permalink:"/docs/guias/nodos-eosio"}},l=[{value:"Testnet LACChain EOSIO",id:"testnet-lacchain-eosio",children:[]},{value:"1. Crear una cuenta",id:"1-crear-una-cuenta",children:[]},{value:"2. Autenticarse en el Dashboard",id:"2-autenticarse-en-el-dashboard",children:[]},{value:"3. Desplegar un nodo",id:"3-desplegar-un-nodo",children:[{value:"Ejemplos de configuraci\xf3n",id:"ejemplos-de-configuraci\xf3n",children:[]}]},{value:"4. Eliminar un nodo",id:"4-eliminar-un-nodo",children:[]}],c={toc:l};function d(e){var n=e.components,i=(0,t.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,o.Z)({},c,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nodeos")," es el software central de una cadena de bloques EOSIO. Es un deamon que realiza todas las funciones de un nodo de blockchain, tales como sincronizaci\xf3n con otros nodos a trav\xe9s del ",(0,r.kt)("inlineCode",{parentName:"p"},"protocolo p2p"),", proporciona una ",(0,r.kt)("inlineCode",{parentName:"p"},"API HTTP")," para el software del cliente y, opcionalmente, ",(0,r.kt)("inlineCode",{parentName:"p"},"firma bloques")," si se configura con la cuenta de un validador."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Nodeos")," est\xe1 disponible en c\xf3digo fuente y paquetes binarios en el ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/EOSIO/eos/releases"},"repositorio GitHub"),".  Las plataformas compatibles son Ubuntu 16.04 y 18.04, RHEL7 y MacOS. "),(0,r.kt)("p",null,"Cuando planifique la instalaci\xf3n de un servidor, tiene varias opciones para seleccionar. A menudo, la selecci\xf3n est\xe1 determinada por los h\xe1bitos y preferencias existentes del administrador del sistema."),(0,r.kt)("p",null,"Consulte nuestra gu\xcda sobre como configurar el ",(0,r.kt)("a",{parentName:"p",href:"./ambiente-desarrollo"},"ambiente de desarrollo")," para poder trabajar sobre la red de LACChain EOSIO. En casos de necesitar mayor informacion sobre la configuracion de nodos en redes EOSIO en general, informese ",(0,r.kt)("a",{parentName:"p",href:"https://guias.eoscostarica.io/docs/tutoriales/instalacion-de-nodos/"},"aqu\xed")),(0,r.kt)("h2",{id:"testnet-lacchain-eosio"},"Testnet LACChain EOSIO"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"Versi\xf3n EOSIO"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://github.com/lacchain/eosio-network",target:"_blank",rel:"noopener noreferrer"},(0,r.kt)("code",null,"LACChain EOSIO")))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Chain ID"),(0,r.kt)("td",null,(0,r.kt)("code",null,"2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Archivo G\xe9nesis"),(0,r.kt)("td",null,(0,r.kt)("a",{href:"https://raw.githubusercontent.com/LatamLink/eosio-testnet/master/genesis.json",target:"_blank",rel:"noopener noreferrer"},(0,r.kt)("code",null,"genesis.json"))))),(0,r.kt)("p",null,"Consulte nuestro ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lacchain/eosio-network"},"repositorio en GitHub")," para obtener mas informaci\xf3n sobre los nodos en LACChain EOSIO. Si desea realizar la instalacion y configuraci\xf3n de nodos desde linea de comandos consulte el ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lacchain/eosio-network/blob/master/README.md"},"README.md")," de nuestro repositorio en GitHub, antes de esto asegurse de haber instalado el ",(0,r.kt)("a",{parentName:"p",href:"./ambiente-desarrollo"},"ambiente de desarrollo")," para EOSIO."),(0,r.kt)("p",null,"Antes de iniciar es importante que conozca algunas ",(0,r.kt)("a",{parentName:"p",href:"./nodos-eosio"},"consideraciones en infraestrutura")," sobre los nodos en EOSIO que pueden serle util para amplir el conocimiento sobre el funcionamiento de la red."),(0,r.kt)("h2",{id:"1-crear-una-cuenta"},"1. Crear una cuenta"),(0,r.kt)("p",null,"Para poder desplegar nodos en la red de LACChain EOSIO, es importante tener una cuenta registrada como ",(0,r.kt)("inlineCode",{parentName:"p"},"Partner")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"Non-Partner"),". "),(0,r.kt)("p",null,"Consulte la gu\xeda para crear una cuenta seg\xfan su rol de usuario: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./crear-cuenta-entidad"},"Non-partner")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./crear-cuenta-entidad"},"Partner"))),(0,r.kt)("h2",{id:"2-autenticarse-en-el-dashboard"},"2. Autenticarse en el Dashboard"),(0,r.kt)("p",null,"La red de LACChain EOSIO cuenta con un ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.latamlink.io/"},"dashboard"),", el cual permite a los usuarios realizar gestiones dentro de la red, incluida la opci\xf3n de desplegar varios tipos de nodos.  "),(0,r.kt)("p",null,"Accede con su cuenta de tipo ",(0,r.kt)("inlineCode",{parentName:"p"},"Partner")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"Non-Partner"),". Consulte nuestro tutorial de como administrar las ",(0,r.kt)("a",{parentName:"p",href:"./llaves-privadas#31-autenticadores-externos-wallets"},"llaves privadas")),(0,r.kt)("h2",{id:"3-desplegar-un-nodo"},"3. Desplegar un nodo"),(0,r.kt)("p",null,"Una vez autenticados con nuestra cuenta, seleccione la opci\xf3n de ",(0,r.kt)("inlineCode",{parentName:"p"},"administraci\xf3n")," dentro de las herramientas del dashboard. En esta secci\xf3n se le mostrara los tipos de nodos que puede desplegar seg\xfan sea su tipo de cuenta. "),(0,r.kt)("p",null,"Para poder crear el nodo, simplemente completamos los datos solicitados en el formulario y ejecutamos la transacci\xf3n. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Secci\xf3n de administraci\xf3n",src:a(9222).Z})),(0,r.kt)("h3",{id:"ejemplos-de-configuraci\xf3n"},"Ejemplos de configuraci\xf3n"),(0,r.kt)("p",null,"El dashboard tambi\xe9n cuenta con una secci\xf3n en la cual podemos descargar un ejemplo de la configuraci\xf3n de los diferentes tipos de nodo, solamente tenemos que acceder a la opci\xf3n de ",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.latamlink.io/node-config"},(0,r.kt)("inlineCode",{parentName:"a"},"configuraci\xf3n de nodo"))," dentro de las herramientas. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Secci\xf3n de configuraci\xf3n",src:a(31227).Z})),(0,r.kt)("h2",{id:"4-eliminar-un-nodo"},"4. Eliminar un nodo"),(0,r.kt)("p",null,"Dentro del dashboard, tambi\xe9n existe una opci\xf3n para poder eliminar los nodos, simplemente escribiendo el nombre del nodo que deseamos eliminar. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Eliminaci\xf3n de nodos",src:a(22005).Z})))}d.isMDXComponent=!0},31227:function(e,n,a){"use strict";n.Z=a.p+"assets/images/dashboard_01-e5b6eebc0bb5db5b3ee122b6d1b9061e.png"},9222:function(e,n,a){"use strict";n.Z=a.p+"assets/images/dashboard_02-338921cd9cd38b9138328ce10584fafe.png"},22005:function(e,n){"use strict";n.Z="data:image/png;base64,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"}}]);