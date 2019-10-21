<template>
    <div>
      <button @click="$router.go(-1)">返回上一页面</button>
      <audio :src=srcUrl controls></audio>
    </div>
</template>

<script>
    export default {
        name: "Play",
        data(){
          return{
            mid:'',
            srcUrl:""
          }
        },
      mounted() {
        this.mid=this.$route.query.myId;
        console.log(this.mid);
        // this.$route
          this.$http({
            url:'http://localhost:3000/song/url',
            method:'post',

            params:{
              id:this.mid
            }
          }).then((res)=>{
            console.log(res);
            this.srcUrl=res.data.data[0].url
             console.log(this.srcUrl);

          })
      }
    }
</script>

<style scoped>

</style>
