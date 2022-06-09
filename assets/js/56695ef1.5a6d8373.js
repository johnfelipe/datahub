"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5763],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=c(a),p=o,m=h["".concat(d,".").concat(p)]||h[p]||s[p]||r;return a?n.createElement(m,l(l({ref:t},u),{},{components:a})):n.createElement(m,l({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=h;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87259:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return d},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var n=a(87462),o=a(63366),r=(a(67294),a(3905)),l=["components"],i={title:"How to Extract Logs from DataHub Containers",sidebar_label:"How to Extract Logs from DataHub Containers",slug:"/how/extract-container-logs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/extract-container-logs.md"},d="How to Extract Logs from DataHub Containers",c={unversionedId:"docs/how/extract-container-logs",id:"docs/how/extract-container-logs",isDocsHomePage:!1,title:"How to Extract Logs from DataHub Containers",description:"DataHub containers, datahub GMS (backend server) and datahub frontend (UI server), write log files to the local container filesystem. To extract these logs, you'll need to get them from inside the container where the services are running.",source:"@site/genDocs/docs/how/extract-container-logs.md",sourceDirName:"docs/how",slug:"/how/extract-container-logs",permalink:"/docs/how/extract-container-logs",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/extract-container-logs.md",tags:[],version:"current",frontMatter:{title:"How to Extract Logs from DataHub Containers",sidebar_label:"How to Extract Logs from DataHub Containers",slug:"/how/extract-container-logs",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/extract-container-logs.md"},sidebar:"overviewSidebar",previous:{title:"Timeline API",permalink:"/docs/dev-guides/timeline"},next:{title:"Removing Metadata from DataHub",permalink:"/docs/how/delete-metadata"}},u=[{value:"Step 1: Find the id of the container you&#39;re interested in",id:"step-1-find-the-id-of-the-container-youre-interested-in",children:[{value:"Docker &amp; Docker Compose",id:"docker--docker-compose",children:[],level:3},{value:"Kubernetes &amp; Helm",id:"kubernetes--helm",children:[],level:3}],level:2},{value:"Step 2: Find the log files",id:"step-2-find-the-log-files",children:[{value:"Docker &amp; Docker Compose",id:"docker--docker-compose-1",children:[],level:3},{value:"Kubernetes &amp; Helm",id:"kubernetes--helm-1",children:[],level:3}],level:2},{value:"Step 3: Save Container Log File to Local",id:"step-3-save-container-log-file-to-local",children:[{value:"Docker &amp; Docker Compose",id:"docker--docker-compose-2",children:[],level:3},{value:"Kubernetes &amp; Helm",id:"kubernetes--helm-2",children:[],level:3}],level:2}],s={toc:u};function h(e){var t=e.components,a=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-extract-logs-from-datahub-containers"},"How to Extract Logs from DataHub Containers"),(0,r.kt)("p",null,"DataHub containers, datahub GMS (backend server) and datahub frontend (UI server), write log files to the local container filesystem. To extract these logs, you'll need to get them from inside the container where the services are running."),(0,r.kt)("p",null,"You can do so easily using the Docker CLI if you're deploying with vanilla docker or compose, and kubectl if you're on K8s. "),(0,r.kt)("h2",{id:"step-1-find-the-id-of-the-container-youre-interested-in"},"Step 1: Find the id of the container you're interested in"),(0,r.kt)("p",null,"You'll first need to get the id of the container that you'd like to extract logs for. For example, datahub-gms."),(0,r.kt)("h3",{id:"docker--docker-compose"},"Docker & Docker Compose"),(0,r.kt)("p",null,"To do so, you can view all containers that Docker knows about by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'johnjoyce@Johns-MBP datahub-fork % docker container ls\nCONTAINER ID   IMAGE                                   COMMAND                  CREATED      STATUS                  PORTS                                                      NAMES\n6c4a280bc457   linkedin/datahub-frontend-react   "datahub-frontend/bi\u2026"   5 days ago   Up 46 hours (healthy)   0.0.0.0:9002->9002/tcp                                     datahub-frontend-react\n122a2488ab63   linkedin/datahub-gms              "/bin/sh -c /datahub\u2026"   5 days ago   Up 5 days (healthy)     0.0.0.0:8080->8080/tcp                                     datahub-gms\n7682dcc64afa   confluentinc/cp-schema-registry:5.4.0   "/etc/confluent/dock\u2026"   5 days ago   Up 5 days               0.0.0.0:8081->8081/tcp                                     schema-registry\n3680fcaef3ed   confluentinc/cp-kafka:5.4.0             "/etc/confluent/dock\u2026"   5 days ago   Up 5 days               0.0.0.0:9092->9092/tcp, 0.0.0.0:29092->29092/tcp           broker\n9d6730ddd4c4   neo4j:4.0.6                             "/sbin/tini -g -- /d\u2026"   5 days ago   Up 5 days               0.0.0.0:7474->7474/tcp, 7473/tcp, 0.0.0.0:7687->7687/tcp   neo4j\nc97edec663af   confluentinc/cp-zookeeper:5.4.0         "/etc/confluent/dock\u2026"   5 days ago   Up 5 days               2888/tcp, 0.0.0.0:2181->2181/tcp, 3888/tcp                 zookeeper\n150ba161cf26   mysql:5.7                               "docker-entrypoint.s\u2026"   5 days ago   Up 5 days               0.0.0.0:3306->3306/tcp, 33060/tcp                          mysql\n4b72a3eab73f   elasticsearch:7.9.3                     "/tini -- /usr/local\u2026"   5 days ago   Up 5 days (healthy)     0.0.0.0:9200->9200/tcp, 9300/tcp                           elasticsearch\n')),(0,r.kt)("p",null,"In this case, the container id we'd like to note is ",(0,r.kt)("inlineCode",{parentName:"p"},"122a2488ab63"),", which corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms")," service."),(0,r.kt)("h3",{id:"kubernetes--helm"},"Kubernetes & Helm"),(0,r.kt)("p",null,"Find the name of the pod you're interested in using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl get pods\n\n...\ndefault   datahub-frontend-1231ead-6767                        1/1     Running     0          42h\ndefault   datahub-gms-c578b47cd-7676                              1/1     Running     0          13d\n...\n")),(0,r.kt)("p",null,"In this case the pod name we'd like to note is ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub-gms-c578b47cd-7676")," , which contains the GMS backend service."),(0,r.kt)("h2",{id:"step-2-find-the-log-files"},"Step 2: Find the log files"),(0,r.kt)("p",null,"The second step is to view all log files. Log files will live inside the container under the following directories for each service:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"datahub-gms:")," ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/datahub/logs/gms")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"datahub-frontend"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"/tmp/datahub/logs/datahub-frontend"))),(0,r.kt)("p",null,"There are 2 types of logs that are collected:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Info Logs"),": These include info, warn, error log lines. They are what print to stdout when the container runs."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Debug Logs"),": These files have shorter retention (past 1 day) but include more granular debug information from the DataHub code specifically. We ignore debug logs from external libraries that DataHub depends on.")),(0,r.kt)("h3",{id:"docker--docker-compose-1"},"Docker & Docker Compose"),(0,r.kt)("p",null,'Since log files are named based on the current date, you\'ll need to use "ls" to see which files currently exist. To do so, you can use the ',(0,r.kt)("inlineCode",{parentName:"p"},"docker exec")," command, using the container id recorded in step one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec --privileged <container-id> <shell-command> \n")),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"johnjoyce@Johns-MBP datahub-fork % docker exec --privileged 122a2488ab63 ls -la /tmp/datahub/logs/gms \ntotal 4664\ndrwxr-xr-x    2 datahub  datahub       4096 Jul 28 05:14 .\ndrwxr-xr-x    3 datahub  datahub       4096 Jul 23 08:37 ..\n-rw-r--r--    1 datahub  datahub    2001112 Jul 23 23:33 gms.2021-23-07-0.log\n-rw-r--r--    1 datahub  datahub      74343 Jul 24 20:29 gms.2021-24-07-0.log\n-rw-r--r--    1 datahub  datahub      70252 Jul 25 17:56 gms.2021-25-07-0.log\n-rw-r--r--    1 datahub  datahub     626985 Jul 26 23:36 gms.2021-26-07-0.log\n-rw-r--r--    1 datahub  datahub     712270 Jul 27 23:59 gms.2021-27-07-0.log\n-rw-r--r--    1 datahub  datahub     867707 Jul 27 23:59 gms.debug.2021-27-07-0.log\n-rw-r--r--    1 datahub  datahub       3563 Jul 28 05:26 gms.debug.log\n-rw-r--r--    1 datahub  datahub     382443 Jul 28 16:16 gms.log\n")),(0,r.kt)("p",null,"Depending on your issue, you may be interested to view both debug and normal info logs."),(0,r.kt)("h3",{id:"kubernetes--helm-1"},"Kubernetes & Helm"),(0,r.kt)("p",null,'Since log files are named based on the current date, you\'ll need to use "ls" to see which files currently exist. To do so, you can use the ',(0,r.kt)("inlineCode",{parentName:"p"},"kubectl exec")," command, using the pod name recorded in step one:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl exec datahub-frontend-1231ead-6767 -n default -- ls -la /tmp/datahub/logs/gms\n\ntotal 36388\ndrwxr-xr-x    2 datahub  datahub       4096 Jul 29 07:45 .\ndrwxr-xr-x    3 datahub  datahub         17 Jul 15 08:47 ..\n-rw-r--r--    1 datahub  datahub     104548 Jul 15 22:24 gms.2021-15-07-0.log\n-rw-r--r--    1 datahub  datahub      12684 Jul 16 14:55 gms.2021-16-07-0.log\n-rw-r--r--    1 datahub  datahub    2482571 Jul 17 14:40 gms.2021-17-07-0.log\n-rw-r--r--    1 datahub  datahub      49120 Jul 18 14:31 gms.2021-18-07-0.log\n-rw-r--r--    1 datahub  datahub      14167 Jul 19 23:47 gms.2021-19-07-0.log\n-rw-r--r--    1 datahub  datahub      13255 Jul 20 22:22 gms.2021-20-07-0.log\n-rw-r--r--    1 datahub  datahub     668485 Jul 21 19:52 gms.2021-21-07-0.log\n-rw-r--r--    1 datahub  datahub    1448589 Jul 22 20:18 gms.2021-22-07-0.log\n-rw-r--r--    1 datahub  datahub      44187 Jul 23 13:51 gms.2021-23-07-0.log\n-rw-r--r--    1 datahub  datahub      14173 Jul 24 22:59 gms.2021-24-07-0.log\n-rw-r--r--    1 datahub  datahub      13263 Jul 25 21:11 gms.2021-25-07-0.log\n-rw-r--r--    1 datahub  datahub      13261 Jul 26 19:02 gms.2021-26-07-0.log\n-rw-r--r--    1 datahub  datahub    1118105 Jul 27 21:10 gms.2021-27-07-0.log\n-rw-r--r--    1 datahub  datahub     678423 Jul 28 23:57 gms.2021-28-07-0.log\n-rw-r--r--    1 datahub  datahub    1776274 Jul 28 07:19 gms.debug.2021-28-07-0.log\n-rw-r--r--    1 datahub  datahub   27576533 Jul 29 09:55 gms.debug.log\n-rw-r--r--    1 datahub  datahub    1195940 Jul 29 14:54 gms.log\n")),(0,r.kt)("p",null,"In the next step, we'll save specific log files to our local filesystem."),(0,r.kt)("h2",{id:"step-3-save-container-log-file-to-local"},"Step 3: Save Container Log File to Local"),(0,r.kt)("p",null,"This step involves saving a copy of the container log files to your local filesystem for further investigation."),(0,r.kt)("h3",{id:"docker--docker-compose-2"},"Docker & Docker Compose"),(0,r.kt)("p",null,"Simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker exec"),' command to "cat" the log file(s) of interest and route them to a new file.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker exec --privileged 122a2488ab63 cat /tmp/datahub/logs/gms/gms.debug.log > my-local-log-file.log\n")),(0,r.kt)("p",null,"Now you should be able to view the logs locally."),(0,r.kt)("h3",{id:"kubernetes--helm-2"},"Kubernetes & Helm"),(0,r.kt)("p",null,"There are a few ways to get files out of the pod and into a local file. You can either use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl cp")," or simply ",(0,r.kt)("inlineCode",{parentName:"p"},"cat")," and pipe the file of interest. We'll show an example using the latter approach:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"kubectl exec datahub-frontend-1231ead-6767 -n default -- cat /tmp/datahub/logs/gms/gms.log > my-local-gms.log\n")))}h.isMDXComponent=!0}}]);