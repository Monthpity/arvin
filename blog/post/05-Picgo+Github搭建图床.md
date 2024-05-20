---
title: PicGo+Github搭建图床
date: 2024/04/15
desc: 在Github的基础上搭建图床
tags: ['#全部','#Picture-bed','#Github','#Build']
cover: https://picture.cmymoon.com/background/22.webp
---

[[toc]]

# Picgo+Github搭建图床

## 1. 前言

**图床是一种用于存储和分享图片的在线服务。**用户可以将自己的图片上传到图床，然后通过链接来分享图片。个人博客需要图床主要是因为博客需要展示大量的图片，而将图片直接上传到博客服务器会占用大量的存储空间，导致网页加载速度变慢，同时也会增加服务器的负担。

使用图床可以将图片存储在专门的图片服务器上，从而减轻博客服务器的压力，同时也能提高网页加载速度，使用户体验更好。另外，使用图床还可以方便地管理和分享图片，更加灵活和方便。虽然市面上有很多图床，但有些是付费的，不太适合白嫖党的使用，一些免费的公益图床有随时面临跑路的风险，所以自建一个个人图床尤为重要。

## 2. 准备

- Github账户（这个不多说了）
- PicGO （非必须，一款好用的图床功具）
- Vercel账户（非必须）
- 域名（非必须）

## 3. 教程

### 3.1 创建仓库

登入/创建完`Github`账户后，回到`Gtihub`首页，点击右上角的➕号，选择`New repository`创建一个新的仓库。

在`Repository name`输入图床仓库的名字，这里我输入图床的名字，我这里输入`picture`作为我图床仓库的名字，`Description`可以随便写写，然后图床的隐私选项一定要选择`Public`，不然外链无法访问，然后`README`说明文件想添加就添加，后面也可以添加。

![picture-bed-1](https://picture.cmymoon.com/Blog/picture-bed/picture-bed-1.png "创建仓库")

然后滑到最下面选择`Create Repository`，这样Github仓库就创建好了。

### 3.2 获取token

生成一个token用于PicGo操作你的仓库：

访问：[Github-token生成](https://github.com/settings/tokens?type=beta)

然后点击`Generate new token`。

![picture-bed-2](https://picture.cmymoon.com/Blog/picture-bed/picture-bed-2.png "创建Token")

紧接着点击`Only select repositories`找到你刚才创建仓库选中。`Repository permissions`仓库权限中将`contents`权限改成`Read and Write`，最后翻到页面最底部，点击`Generate token`的绿色按钮生成token。

> 这个token生成后只会显示一次！如果你怕以后不知道可以将这个token复制一下存到其他地方以备以后使用。

### 3.3 下载Picgo

**PicGo: 一个用于快速上传图片并获取图片 URL 链接的工具**

PicGo 本体支持如下图床：

- `七牛图床` v1.0
- `腾讯云 COS v4\v5 版本` v1.1 & v1.5.0
- `又拍云` v1.2.0
- `GitHub` v1.5.0
- `SM.MS V2` v2.3.0-beta.0
- `阿里云 OSS` v1.6.0
- `Imgur` v1.6.0

> [点击链接下载](https://github.com/Molunerfinn/PicGo/releases)

### 3.4 配置Picgo

下载安装好Picgo后，打开软件，点击`图床设置`--`Github`依次将上面的必填参数填写好。

![picture-bed-3](https://picture.cmymoon.com/Blog/picture-bed/picture-bed-3.png "配置Picgo")

至此配置完毕，已经可以使用了。当你上传的时候，你会发现你的仓库里也会增加新的图片了

## 4. 补充

默认的Github图片链接国内访问很慢，因此你可以试试以下方法。

**第一种方法：**

在自定义域名填入：

```
https://cdn.jsdelivr.net/gh/用户名/仓库名@分支名
```

这样从PicGo获取得到的链接就是经过jsDelivr代理得到的了，可以加快访问速度。

**第二种方法：**

> 如果你有自己的域名，你可以将图床部署到Vercel上来自定义域名，Vercel也有国内CDN，也起到加速作用。

在[Vercel官网](https://vercel.com/)登入/注册账户后，再链接`Github`，点击右侧的`Add New`选择`Project`，找到你刚刚创建的`Github`图片仓库，点击`Import`导入，`Framework Preset`默认`other`，`Root Directory`默认`./`。

![picture-bed-4](https://picture.cmymoon.com/Blog/picture-bed/picture-bed-4.png "修改Directory Listing")

然后直接点击`Deploy`（部署）就好，进入Vercel仓库，点击`Setting`再点击`Domain`即可绑定自己的域名，默认的域名被DNS污染无法打开，然后点击`Advanced`，把`Directory Listing`打勾，等待域名解析完成就可以直接访问了，进入链接后就可以直接看到你仓库内的所有文件，同时访问速度也很快。

最后此文章参考于这篇文章：[个人图床搭建之Github篇 | 秋澪的博客 ](https://blog.akimio.top/posts/1006/index.html))。
