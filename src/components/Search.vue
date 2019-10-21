<template>
  <div class="search">


<!--        <span></span>-->
        <mt-search v-model="val" class="spe" @input="search">
          <mt-cell v-for="(item,index) in result" class="searchRe"  :key="index">
            <p>{{item.name}}</p>
          </mt-cell>

        </mt-search>


    <div class="area">
      <h5>热门搜索</h5>
      <a href="javascript:void(0)" style="border-color:red">Gai见面吧电台</a>
      <a href="javascript:void(0)">MOVE YOUR BODY </a>
      <a href="javascript:void(0)">NEVER BE ALONE </a>
      <a href="javascript:void(0)">红尘来去一场梦 </a>
      <a href="javascript:void(0)">不能说的秘密 </a>
    </div>
  </div>
</template>

<script>
  import "../../jquery-2.0.0.min"

  export default {
    name: "search",
    data(){
      return{
        result:[],
        val:""
      }
    },
    methods:{

      search(){
        this.$http({
          url:`http://49.232.129.237:3000/search?keywords=${this.val}`,
          method:'post'
        }).then((res)=>{
          // console.log(res.data.result.songs);
        this.result=res.data.result.songs.splice(0,5)
        })
      }
    }
   ,
    mounted() {
      console.log($(".spe"));
    }
  }
</script>

<style scoped>
  @import "../assets/search.css";
  .spe{
    height: 60px;

  }
  .searchRe{
    background: red;

    float: left;
    margin-top: 2px;
  z-index: 100;
  margin-right: 200px;
    width: 98%;
    text-align: left;

  }

  p{
    position: absolute;left: 5px;
  }

</style>
