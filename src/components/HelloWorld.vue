<template>
  <div class="hello">

  <div class="topBanner" >
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in bannerUrl"><img :src=item.imageUrl alt=""></div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination"></div>

    </div>
  </div>
    <div class="radio">
      <h3>电台</h3>
      <ul>
        <li v-for="item in hotRadio"><img :src=item.picUrl alt="">
        <h4>{{item.name}}</h4>
        </li>

      </ul>
    </div>
    <div class="radio">
      <h3>热门歌单</h3>
      <ul>
        <li v-for="item in hotList"><img :src=item.coverImgUrl alt="">
          <h4>{{item.name}}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Swiper from "swiper";
  import '../../node_modules/swiper/css/swiper.min.css'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '推荐',
      bannerUrl:[],
      hotRadio:[],
      hotList:[]
    }
  },
  mounted() {
    //请求banner
    this.$http({
      url:"http://localhost:3000/banner",
    }).then((res)=>{
      this.bannerUrl=res.data.banners.splice(0,5);
      setTimeout(function () {
        var swiper = new Swiper('.swiper-container', {
          slidesPerView: 1,
          spaceBetween: 30,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      },0)
      // console.log(this.bannerUrl);
    })

  //  请求radio
    this.$http({
      url:'http://localhost:3000/personalized/djprogram'
    }).then((res)=>{
      this.hotRadio=res.data.result.splice(0,2)
    })

  //  请求热门歌单
    this.$http({
      url:'http://localhost:3000/top/playlist'
    }).then((res)=>{
      this.hotList=res.data.playlists.splice(6,6);
      console.log(this.hotList);
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../assets/helloworld.css";

</style>
