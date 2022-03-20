<template>
    <div class="index">
      <h1>{{ msg }}</h1>
      <h2>私！Kyomotoiちゃんです！</h2>
      <p>
        学生，梦想成为 Developer，并为之努力着。活跃于 <a class="github-link" href="https://github.com/Kyomotoi">GitHub</a>
      </p>

      
      <p class="skills-title">
        使用语言 (Program languages)
      </p>
      <p>主要接触：
        <img src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white">
      </p>
      <p>
        能上手写的：
        <img src="https://img.shields.io/badge/-Golang-00ADD8?logo=go&logoColor=white">
        <img src="https://img.shields.io/badge/-Java-007396?logo=java&logoColor=white">
      </p>
      <p>
        正在学习：
        <img src="https://img.shields.io/badge/-TypeScript-3178C6?logo=typescript&logoColor=white">
        <img src="https://img.shields.io/badge/-Vue.js-4FC08D?logo=vue.js&logoColor=white">
      </p>

      <p class="active-repo">
        活跃项目 (Active Repos)
      </p>
      <p>
        <a class="atri" href="https://github.com/Kyomotoi/ATRI">ATRI</a> 
        —— 一只可爱的群聊 (Tencent QQ) bot <img src="https://img.shields.io/github/stars/kyomotoi/ATRI?style=social">
      </p>
      <p>
        <a class="go-atri" href="https://github.com/Kyomotoi/go-ATRI">go-ATRI</a> 
        —— ATRI bot 的 Golang 实现 <img src="https://img.shields.io/github/stars/kyomotoi/go-ATRI?style=social">
      </p>
      <p>
        <a class="rog" href="https://github.com/Kyomotoi/RouterForGuild">RouterForGuild</a> 
        —— 一个高效的，为Tencent Guild（腾讯官方频道机器人）而生的Router <img src="https://img.shields.io/github/stars/kyomotoi/RouterForGuild?style=social">
      </p>

      <p class="services">
        个人服务 (Services)
      </p>
      <p>
        <a class="serv-hibi" href="https://api.kyomotoi.moe/">API (HibiAPI) </a>
        | 
        <a class="serv-drive" href="https://drive.kyomotoi.moe/">File Sharing (Onedrive) </a>
        | 
        <a class="serv-pximg" href="https://pximg.kyomotoi.moe/">Pixiv Proxy </a>
      </p>
      <p>
        <a class="service-status" href="https://stat.kyomotoi.moe/">服务状态查询 (Status)</a>
      </p>
    </div>
</template>

<script>
export default {
  name: 'IndexHome',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.github-link {
  color: rgb(39, 45, 48);
  font-weight: 840;
}

.skills-title {
  font-size: 120%;
  font-weight: 900;
}

.active-repo {
  font-size: 120%;
  font-weight: 900;
}

.atri {
  color: rgb(39, 45, 48);
  font-weight: 840;
}

.go-atri {
  color: rgb(39, 45, 48);
  font-weight: 840;
}

.rog {
  color: rgb(39, 45, 48);
  font-weight: 840;
}

.services {
  font-size: 120%;
  font-weight: 900;
}

.service-status {
  color: rgb(39, 45, 48);
}

.serv-hibi {
  color: rgb(39, 45, 48);
}

.serv-drive {
  color: rgb(39, 45, 48);
}

.serv-pximg {
  color: rgb(39, 45, 48);
}
</style>
