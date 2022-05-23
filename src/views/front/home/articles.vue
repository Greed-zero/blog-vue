<template>
  <div class="home">
    <div class="article">
    <div class="text">
      <div class="card" v-for="(data,key) in this.blog.data" :key="key">
        <el-card>
          <div class="tags" >
            <div class="tag" v-for="(tag,index) in data.tags" :key="index" :style="handleColor(key)">
              {{tag}}
            </div>
          </div>
          <div class="title" @click="gotoP(data)"><span class="titles">{{data.title}}</span></div>
          <div class="date">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <polyline points="12 7 12 12 15 15"></polyline>
            </svg>
            <span>{{handleTime(data.time)}}</span>
            </div>
        </el-card>
      </div>
      <div class="pagination">
          <div v-for="(num,key) in handlePageNum" :key="key" @click="handlePage(num)" :style="handleShadow(key)">{{num}}</div>
      </div>
    </div>
    <div class="extra">
      <div class="shadow"></div>
      <div class="title">© 2022 - 2022 {{this.$store.state.user.name}}'s Blog</div>
      <div class="bottom1">Built with Hugo(copy)</div>
      <div class="bottom2">Theme Stack copy from Jimmy</div>
    </div>
  </div>
    <other></other>
  </div>
</template>

<script>
import other from "@/views/front/home/other.vue"
export default {
  components:{
    other
  },
  data() {
    return {
      data:[],
      blog:{
        pageSize: 5,
        pageNum: 1,
        currentPage: 0,
        data:[]
      }
    }
  },
  methods: {
      getBlog(){
            this.$ajax({
                url:'http://localhost:8080/article',
                method:'get',
                }).then(
                    res => {
                        console.log("res.data:",res.data)
                        this.data = res.data.article
                        this.$store.state.blog=res.data.article
                        console.log('this.$store.state.blog:',this.$store.state.blog)
                        this.blogShow()
                        console.log("this.data:",this.data)
                        },
                    err => console.log(err.message)
                )
                
        },
        blogShow(){
         this.blog.pageNum = Math.ceil(this.data.length/this.blog.pageSize)
         this.blog.data = this.data.slice(this.blog.currentPage*this.blog.pageSize,(this.blog.currentPage+1)*this.blog.pageSize)
         return this.blog.data
        },
        handleTime(time){
          let months = 
            [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
            "Jul", "Aug", "Sep", "Oct", "Nove", "Dec"
            ];
          let year = time.slice(0,4)
          let month = time.slice(5,7)
          // console.log(month)
          month = months[parseInt(month)-1]
          let day = time.slice(8,10)
          return month+' '+day+','+year
        },
        handleColor(index){
          let color =['#8EA885','#DF7988','#0177B8','#FFB900','#6B69B6']
          return 'background:'+color[index]
        },
        handlePage(key){
          if (key === this.currentPage) return
          if (typeof key === 'string') return
          key = key-1
          this.blog.currentPage=key
          this.blogShow()
          var timer = setInterval(function(){
            let osTop = document.documentElement.scrollTop || document.body.scrollTop;
            let ispeed = Math.floor(-osTop / 5); 
            document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
            this.isTop = true;
            if(osTop === 0){
              clearInterval(timer);
            }
          },10)
        },
        generateArray (start, end) {
          return Array.from(new Array(end + 1).keys()).slice(start)
        },
        handleShadow(key){
          if(key == this.blog.currentPage)
          return 'background:#EAEAEA'
        },
        gotoP(data){
          console.log(data)
          this.$router.push({
            path:'/home/p',
            query:{
              data
            }
            }) 
        }
  },
  mounted(){
    this.getBlog()
    window.addEventListener("scroll",this.showbtn,true);
  },
  computed:{
    handlePageNum(){
      let t = this.blog.pageNum
      let c = this.blog.currentPage+1
   if (c <= 5) {
    return [1, 2, 3, 4, 5, 6, 7, '...', t] //第一种情况
   } else if (c >= t - 4) {
    return [1, '...',t-6, t-5, t-4, t-3, t-2, t-1, t] //第二种情况
   } else {
    return [1, '...', c-3, c-2, c-1, c, c+1, c+2, c+3, '...', t] //第三种情况
   } 
    }
  }

}
</script>

<style lang="scss" scoped>
.article{
  width:100%;
  margin-top: 40px;
  margin-left: 10px;
}
.el-card{
  
  
  *{
    background-color: white;
    
  }
  /deep/.el-card__body{
    background-color: white !important;
  }
  padding-left: 5px;
}
.tags{
  display: flex;
  flex-flow: row;
  .tag{
    margin-right: 15px;
    width: fit-content;
    padding: 7px 16px;
    border-radius: 4px;
    color: white;
  }
}
.title{
  font-size: 22px;
  font-weight: 600;
  margin-top: 15px;
}
.date{
  margin-top: 20px;
  color: #BABABA;
  font-size: 14px;
  display: flex;
  flex-flow: row;

  svg{
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  *{
    display: flex;
    flex-flow: row;
    align-items: center;
  }
}
.card{
  .el-card{
    margin-bottom: 40px;
    width: 600px;
    height: 167px;
    border-radius: 10px;
  }
}
.pagination{
  display: flex;
  flex-flow: row;
  background-color: white;
  width: 600px;
  height: 50.4px;
  border-radius: 10px;
  margin-bottom: 30px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    color: #747474;
    cursor: pointer;
    :active{
      background-color:#EAEAEA
    }
  }
}
.extra{
  margin-top: 40px;
  margin-bottom: 40px;
  .title{
    font-size: 14px;
    margin-top: 20px;
    color: #34495E;
  }
  .shadow{
    width: 50px;
    height: 3px;
    background-color: #a9a8a8;
    border-radius: 3px;
  }
  .bottom1 {
    font-size: 13px;
    color: #BABABA;
    margin-top: 20px;
  }
  .bottom2{
    font-size: 13px;
    color: #BABABA;
    margin-top: 10px;
  }
}
.home{
  display: flex;
  flex-flow: row;
}
.titles{
  cursor: pointer;
}
</style>