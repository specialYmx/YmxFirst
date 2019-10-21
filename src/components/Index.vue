<template>
  <div>
  <div class="logo"><img src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt=""><span>下载APP</span></div>
  <div class="nav">
    <router-link to="/HelloWorld" active-class="active">推荐</router-link>
    <router-link to="/Home" active-class="active">排行榜</router-link>
    <router-link to="/Search" active-class="active">搜索</router-link>
  </div>
  <router-view/>
  </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
