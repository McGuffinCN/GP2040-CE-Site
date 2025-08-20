# GP2040-CE 网站文档

这是 GP2040-CE 游戏控制器固件的文档库。它由 [Docusaurus](https://docusaurus.io/) 提供支持，可以在 [这里](https://gp2040-ce.info) 找到。

此仓库为由 ChatGPT-4O 翻译的 fork，其中 main 分支为 [中文镜像站](https://gp2040.guff.in/) 的源码；i18n-zh-CN 分支为（准备）推送到 [OpenStickCommunity 官方仓库](https://github.com/OpenStickCommunity/Site) 的分支。区别在于 main 分支默认语言为中文，且默认按键标签为 XInput。

## 构建网站

每次推送和合并时，网站会自动使用 [Github Action](https://github.com/OpenStickCommunity/Site/blob/main/.github/workflows/deploy.yml) 进行构建。

注意：您需要在系统上安装 Node.js (>= 16.14)才能构建此网站。Node.js 可以在 [这里](https://nodejs.org/en/download/package-manager) 找到。

1. 克隆仓库

`git clone https://github.com/OpenStickCommunity/Site.git`

2. 进入克隆的仓库文件夹

`cd Site`

3. 安装依赖

`npm install`

4. 启动网站

`npm start`

网站将运行在 <http://localhost:port>（即<http://127.0.0.1:3000/>）

您现在可以编辑 docs 文件夹中的文件，网站将立即反映更改，因为有实时重新加载。

## 贡献

我们欢迎对本仓库的所有贡献。请提交一个 Pull Request，无论多么小，所有贡献都很有价值！
