<template>
  <div class="topic">
    <ul>
      <li v-for="(item,m) in dataList">
        <div class="liDiv">
          <a href="javascript:void(0)">
            <img :src=item.img alt="">
          </a>
          <div class="liRight">
            <div class="con">
              <h3>{{item.name}}</h3>
              <p v-for="(key,n) in dataArr[m]">{{n+1}}<span @click="play(key.id)">{{key.name}}</span><span>{{key.ar[0].name}}</span></p>

              <span class="skip"> </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      play(d) {
        this.myId = d;
        console.log(d);
        this.$router.push({
          path: "/Play?myId=" + this.myId + ""
        })
      }
    },
    data() {
      return {
        myId: '',
        dataList: [],
        dataArr:[]
      }
    },
    mounted() {
      for (let i = 0; i < 14; i++) {
        this.$http({
          url: `http://localhost:3000/top/list?idx=${i}`

        }).then((res) => {
          console.log(res);
          this.dataList.push({
            // img:res.data.playlists.creator.avatarUrl
            img: res.data.playlist.coverImgUrl,
            name: res.data.playlist.name,
            singName: res.data.playlist.tracks[i].name,//歌名
            singer: res.data.playlist.tracks[i].ar[0].name,//歌手
            singId: res.data.playlist.tracks[i].al.id,//歌曲Id
            arr: res.data.playlist.tracks.splice(0, 3),

          });
          console.log(this.dataList);
          this.dataArr.push(res.data.playlist.tracks.splice(0, 3))
          console.log(this.dataArr);
          // console.log(res.data.playlist.tracks[i].ar[0].name);
        })
      }

    }
  }
</script>

<style scoped>
  @import "../assets/home.css";
</style>
