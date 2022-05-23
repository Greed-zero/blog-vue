<template>
  <div class="home">
      <search></search>
    <div class="archives">
      <div class="svg1">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-infinity" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="">
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M9.828 9.172a4 4 0 1 0 0 5.656 a10 10 0 0 0 2.172 -2.828a10 10 0 0 1 2.172 -2.828 a4 4 0 1 1 0 5.656a10 10 0 0 1 -2.172 -2.828a10 10 0 0 0 -2.172 -2.828"></path>
        </svg>
      </div>
      <div class="title">ARCHIVES</div>
      <div class="card1" >
        <div class="small" v-for="(year,key) in this.years" :key="key" :style="handlebottom(year)">
          <div ><span class="year" >{{year}}</span><span class="num">{{blogNum(year)}}</span></div>
          </div>
      </div>
    </div>
    <div class="tags">
      <div class="shadow"></div>
      <div class="svg2">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-tag" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <path d="M11 3L20 12a1.5 1.5 0 0 1 0 2L14 20a1.5 1.5 0 0 1 -2 0L3 11v-4a4 4 0 0 1 4 -4h4"></path>
          <circle cx="9" cy="9" r="2"></circle>
        </svg>
      </div>
      <div class="title2">
        TAGS
      </div>
      <div class="tag" >
        <div class="icon" v-for="(tag,key) in this.tags" :key="key">{{tag.tag}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import search from "@/views/front/home/search.vue"

export default {
components:{
  search
},
data() {
  return {
    tags:[],
    years:['2022','2021','2020','2019']
  }
},
mounted(){
  this.getTags()
},
methods:{
  handlebottom(key){
    if(key == 3) return
      else return 'border-bottom: 2px  #e7e2e2 solid'
  },
  getTags(){
        this.$ajax({
        url:'http://localhost:8080/tags',
        method:'get',
      }).then(
        res => {
          this.tags = res.data.tags
          console.log(this.tags)
        },
        err =>[
          console.log(err.message)
        ]
      )
      },
  
},
computed:{
  blogNum(){
    return function(key){
        if(Array.isArray(this.$store.state.blog)){
        var a =0
        this.$store.state.blog.forEach( el=> {
        if(el.time.slice(0,4)==key){a = a+1 }
          });
        }
        return a  
      }
    },
    
}

}
</script>

<style lang="scss" scoped>
.home{
  width: 300px;
  display: flex;
  flex-flow: column !important;
  margin-left: 8%;
  .archives{
    font-size: 16px;
    margin-top: 40px;
    color: #bababa;
    .svg1{
      svg{
        width: 32px;
        height: 32px;
      }
    }
    .title{
      font-weight: 900;
    }
    .card1{
      margin-top: 10px;
      width: 270px;
      background-color: white;
      border-radius: 10px;
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
      display: flex;
      flex-flow:column;
      .small{
        height: 50px;
        width: 270px;
        display: flex;
        align-items: center;
      }
    }
  }
}
.year{
  margin-left: 30px;
  // color: #d2cdcd;
  color: black;
}
.num{
  float: right !important;;
  margin: auto;
  position:absolute;
  right:0px;

}
.tags{
  margin-top: 40px;
  .shadow{
    width: 120px;
    height: 3px;
    background-color: #b8b7b7;
    border-radius: 3px;
  }
  .svg2{
    margin-top: 40px;
    color: #bababa;
    svg{
      width: 32px;
      height: 32px;
    }
  }
  .title2{
    color: #bababa;
    font-weight: 700;
    }
    .tag{
      width: 270px;
      display: flex;
      flex-flow: row wrap;
      margin-top: 10px;
      .icon{
        padding: 8px 15px;
        background-color: white;
        margin-left: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        font-size: 14px;
      }
    }
}
</style>