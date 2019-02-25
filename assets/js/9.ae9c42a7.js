(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{150:function(t,e,r){"use strict";r.r(e);var a=r(0),s=Object(a.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._m(1),t._m(2),r("p",[t._v("为了方便本地测试, Refunc 为 "),r("a",{attrs:{href:"https://github.com/kubernetes/minikube",target:"_blank",rel:"noopener noreferrer"}},[t._v("Minikube"),r("OutboundLink")],1),t._v(" 和 "),r("a",{attrs:{href:"https://docs.docker.com/docker-for-mac/kubernetes/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker for Mac"),r("OutboundLink")],1),t._v(" refunc 提供了 "),r("code",[t._v("play")]),t._v(" 命令, 用来生成一个本地最小环境的k8s配置文件, 在终端里执行下面的命令:")]),t._m(3),r("p",[t._v("如果一切顺利的话此时 Refunc 已经在本地的 Kubernetes 里跑起来了:")]),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),r("p",[t._v("这里我们添加 AWS 的 python3.7")]),t._m(9),r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[t._v("TIP")]),r("p",[t._v("Refunc 支持所有基于 AWS provided 的运行时, 以及一部分AWS官方语言运行时, 具体"),r("a",{attrs:{href:"https://github.com/refunc/lambda-runtimes",target:"_blank",rel:"noopener noreferrer"}},[t._v("看这里"),r("OutboundLink")],1),t._v("\n此外, 基于 Refunc 用户可以开发更多的运行时支持: "),r("a",{attrs:{href:"https://github.com/refunc/refunc/tree/master/pkg/runtime",target:"_blank",rel:"noopener noreferrer"}},[t._v("runtime"),r("OutboundLink")],1)])]),t._m(10),t._m(11),r("p",[t._v("Refunc 做了一个兼容 AWS Lambda 和 S3 的 "),r("a",{attrs:{href:"https://github.com/refunc/aws-api-gw",target:"_blank",rel:"noopener noreferrer"}},[t._v("网关"),r("OutboundLink")],1),t._v(", 让用户可以使用 "),r("a",{attrs:{href:"https://aws.amazon.com/cli/",target:"_blank",rel:"noopener noreferrer"}},[t._v("aws-cli"),r("OutboundLink")],1),t._v(" 无缝使用 Lambda 函数")]),r("p",[t._v("在此之前需要现将网关的端口转发到本地")]),t._m(12),r("p",[t._v("为了方便演示, 下载预先打包好的函数 "),r("a",{attrs:{href:"https://github.com/refunc/lambda-python3.7-example",target:"_blank",rel:"noopener noreferrer"}},[t._v("Function"),r("OutboundLink")],1)]),t._m(13),t._m(14),r("p",[t._v("创建 python3.7 的函数")]),t._m(15),r("p",[t._v("调用")]),t._m(16),t._m(17),r("p",[t._v("在团队内部我们使用 "),r("a",{attrs:{href:"https://rancher.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rancher"),r("OutboundLink")],1),t._v(" 二次开发构建了整个中台, "),r("a",{attrs:{href:"https://github.com/refunc/refunc-ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),r("OutboundLink")],1),t._v(" 是 Refunc 集成到 "),r("a",{attrs:{href:"https://github.com/rancher/ui",target:"_blank",rel:"noopener noreferrer"}},[t._v("rancher/ui"),r("OutboundLink")],1),t._v(" 的图形界面, 它用 "),r("a",{attrs:{href:"https://github.com/refunc/refunc-rancher",target:"_blank",rel:"noopener noreferrer"}},[t._v("refunc-rancher"),r("OutboundLink")],1),t._v(" 为前端提供兼容  "),r("a",{attrs:{href:"https://github.com/rancher/api-spec",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rancher API"),r("OutboundLink")],1),t._v(" 的后端服务")]),t._m(18)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"快速开始"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快速开始","aria-hidden":"true"}},[this._v("#")]),this._v(" 快速开始")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"安装-refunc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-refunc","aria-hidden":"true"}},[this._v("#")]),this._v(" 安装 Refunc")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"在-minikube-中部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在-minikube-中部署","aria-hidden":"true"}},[this._v("#")]),this._v(" 在 Minikube 中部署")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("docker run --rm -it refunc/refunc refunc play gen -n refunc-play "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("|")]),this._v(" kubectl apply -f -\n")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("$ kubectl get deployments,services -n refunc-play\nNAME                                    DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE\ndeployment.extensions/aws-api-gw        1         1         1            1           30s\ndeployment.extensions/nats-cluster      1         1         1            1           30s\ndeployment.extensions/refunc-play       1         1         1            1           30s\ndeployment.extensions/s3                1         1         1            1           30s\n\nNAME                  TYPE        CLUSTER-IP       EXTERNAL-IP   PORT"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("S"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    AGE\nservice/aws-api       ClusterIP   10.100.34.197    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        80/TCP     30s\nservice/nats          ClusterIP   10.110.36.186    "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        4222/TCP   30s\nservice/refunc-http   ClusterIP   10.102.122.191   "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        80/TCP     30s\nservice/s3            ClusterIP   10.110.184.0     "),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("none"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("        80/TCP     30s\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"一键删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一键删除","aria-hidden":"true"}},[this._v("#")]),this._v(" 一键删除")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("docker run --rm -it -e REFUNC_ENV"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("cluster refunc/refunc \\\nrefunc play gen -n refunc-play "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("|")]),this._v(" kubectl delete -f -\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("Refunc 企业版提供基于 Helm Chart 在线上的集群中部署及多租户管理")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"添加运行时"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加运行时","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加运行时")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("kubectl create -n refunc-play -f \\\nhttps://github.com/refunc/lambda-python3.7-example/releases/download/v0.0.2/xenv.yaml\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"创建云函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建云函数","aria-hidden":"true"}},[this._v("#")]),this._v(" 创建云函数")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"使用-aws-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-aws-cli","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用 AWS Cli")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("kubectl port-forward deployment/aws-api-gw 9000:80 -n refunc-play\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cd")]),this._v(" /tmp\n"),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("wget")]),this._v(" https://github.com/refunc/lambda-python3.7-example/releases/download/v0.0.1/lambda.zip\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),e("p",[this._v("函数打包可以参考各种相关文档及使用相关工具")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("aws --endpoint-url"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("http://127.0.0.1:9000 \\\nlambda create-function --function-name localtest \\\n--handler lambda_function.lambda_handler \\\n--zip-file fileb:///tmp/lambda.zip \\\n--runtime python3.7 \\\n--role arn:aws:iam::XXXXXXXXXXXXX:role/your_lambda_execution_role\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[this._v("aws --endpoint-url"),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("=")]),this._v("http://127.0.0.1:9000 \\\nlambda invoke --function-name localtest /tmp/output.json "),e("span",{pre:!0,attrs:{class:"token operator"}},[this._v("&&")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("cat")]),this._v(" /tmp/output.json\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"用户界面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户界面","aria-hidden":"true"}},[this._v("#")]),this._v(" 用户界面")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/354668/44694551-b13f3900-aaa0-11e8-8a9a-a19d562ec8d1.png",alt:"functions.png",title:"Functions page"}})])}],!1,null,null,null);e.default=s.exports}}]);