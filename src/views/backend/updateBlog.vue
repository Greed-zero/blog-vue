<template>
  <div>
    <el-card>
      <el-form  status-icon   label-width="80px" class="Form" >
        <el-form-item label="博客标题" >
          <el-input  v-model="article.title" size="small" :style="{'width':'400px'}"> </el-input>
        </el-form-item>
        <el-form-item label="文章描述" >
          <el-input  v-model="article.description" size="small" :style="{'width':'600px'}"></el-input>
        </el-form-item>
        <el-form-item label="博客标签">
          <el-checkbox-group v-model="article.tags" >
            <el-checkbox 
            v-for="(tag,key) in tags" 
            :key="key" 
            :label="tag.tag" ></el-checkbox>
          </el-checkbox-group>   
        </el-form-item>
        <el-form-item class="add">
          <el-input 
          :inline="true" 
          :style="{'width':'200px'}" 
          size="small"
          v-model="tag">
          </el-input> 
          <el-button size="small" @click="addTag()">增加tag</el-button>
          </el-form-item>    
        <mavon-editor 
        v-model="article.text"
        ref=md 
        @imgAdd="$imgAdd"
        @imgDel="$imgDel"
        ></mavon-editor>
        <el-form-item class="bottom">
          <el-button type="primary" @click="update()">更新</el-button>
          <el-button >重置</el-button>
        </el-form-item>
      </el-form>     
    </el-card>
    
  </div>
</template>

<script>
export default {
    data() {
      return {
        article:{
          "time":'',
          "title":'',
          "description":'',
          "tags": [],
          "updatetime":'',
           "text": '',
        },
        img_file: {},//存放图片
        tags:[],
        tag:'',
      }
    },
    watch:{

    },
    methods:{
      getTags(){
        this.$ajax({
        url:'http://localhost:8080/tags',
        method:'get',
      }).then(
        res => {
          this.tags = res.data.tags
        },
        err =>[
          console.log(err.message)
        ]
      )
      },
      getTime(){
        let myDate = new Date();
        let year   = myDate.getFullYear()
        let month  = myDate.getMonth()+1
        if(month<10) month = '0'+month
        let date   = myDate.getDate()
        if(date<10) date = '0'+date
        return year+'-'+month+'-'+date
      },
      update(){
        console.log(this.article)
        // this.article.time = this.getTime()
        this.article.updatetime = this.getTime()
        this.$ajax.post('http://localhost:8080/article/update',{
          article:this.article
        }).then( response=>{
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          })
      },
      addTag(){
        console.log(this.tag)
        this.$ajax.post('http://localhost:8080/tags/add',{
          tag:this.tag
        }).then( response=>{
            console.log(response);
            this.getTags()
            this.$forceUpdate();
          })
          .catch(error=> {
            console.log(error);
          })
      },
     $imgAdd(pos, $file) {
        console.log("添加了图片")
          // 第一步.将图片上传到服务器.
          var formdata = new FormData();
          formdata.append('image', $file);
          console.log('formdata.get("image"):',formdata.get("image"))
          this.img_file[pos] = $file;
          this.$ajax({
              url: 'http://localhost:8080/article/uploadimg',
              method: 'post',
              data: formdata,
              headers: { 'Content-Type': 'multipart/form-data' },
              // headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
          }).then(res => {
              let _res = res.data;
              // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
              this.$refs.md.$img2Url(pos, _res.url);
          },
          err=>{
            console.log(err)
          })
      },
      $imgDel(pos) {
          delete this.img_file[pos];
          console.log("删除了图片")
      }
      
    },
    mounted(){
      this.getTags()
      this.article = this.$route.query.article
    }
}
</script>

<style lang="scss" scoped>
.el-card{
  margin-top: 20px;
}
.Form{
  .el-input{
    caret-color: auto
  }
}
.bottom{
  margin-top: 20px;
}
.add{
  >*{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .el-button{
    margin-left: 20px;
  }
}
</style>