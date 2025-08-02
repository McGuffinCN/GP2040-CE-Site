# GP2040-CE网站文档

这是GP2040-CE游戏手柄固件的文档库。它由[Docusaurus](https://docusaurus.io/)提供支持，可以在[这里](https://gp2040-ce.info)找到。

此为由ChatGPT-4O翻译的分支。

## 构建网站

每次推送和合并时，网站会自动使用[Github Action](https://github.com/OpenStickCommunity/Site/blob/main/.github/workflows/deploy.yml)进行构建。

注意：您需要在系统上安装Node.js (>= 16.14)才能构建此网站。Node.js可以在[这里](https://nodejs.org/en/download/package-manager)找到。

1. 克隆仓库

`git clone https://github.com/OpenStickCommunity/Site.git`

2. 进入克隆的仓库文件夹

`cd Site`

3. 安装依赖

`npm install`

4. 启动网站

`npm start`

网站将运行在<http://localhost:port>（即<http://127.0.0.1:3000/>）

您现在可以编辑docs文件夹中的文件，网站将立即反映更改，因为有实时重新加载。

## 贡献

我们欢迎对本仓库的所有贡献。请提交一个Pull Request，无论多么小，所有贡献都很有价值！
