<template>
  <div class="main">
    <div class="p">
    <div class="tags" >
      <div class="tag" v-for="(tag,key) in data.tags" :key="key" :style="handleColor(key)">
        {{tag}}
      </div>
    </div>
    <div class="title">
        {{data.title}}
      </div>
     <div class="date">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z"></path>
              <circle cx="12" cy="12" r="9"></circle>
              <polyline points="12 7 12 12 15 15"></polyline>
            </svg>
            <span>{{handleTime(data.time)}}</span>
            </div>
    <mavon-editor
      class="md"
      :value="data.text"
      :subfield="prop.subfield" 
      :defaultOpen="prop.defaultOpen"
      :toolbarsFlag="prop.toolbarsFlag"
      :toolbarsBackground="'#f9f9f9'"
      :editable="prop.editable"
      :scrollStyle="prop.scrollStyle"
      :boxShadow="false"
      :previewBackground="'white'"
      :ishljs="false"
          />
      <div class="tags" >
      <div class="tag" v-for="(tag,key) in data.tags" :key="key" :style="handleColor(key)">
        {{tag}}
      </div>
    </div>  
  </div>
  <div class="extra">
      <div class="shadow"></div>
      <div class="title">© 2022 - 2022 {{this.$store.state.user.name}}'s Blog</div>
      <div class="bottom1">Built with Hugo(copy)</div>
      <div class="bottom2">Theme Stack copy from Jimmy</div>
    </div>
  </div>
</template>

<script>
import 'mavon-editor/dist/markdown/github-markdown.min.css'
export default {
  data() {
    return {
      data:{}
    }
  },
  methods:{
    handleColor(index){
          let color =['#8EA885','#DF7988','#0177B8','#FFB900','#6B69B6']
          return 'background:'+color[index]
        },
    handleTime(time){
      if(time === undefined) return
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
  },
  mounted(){
    this.data = this.$route.query.data
    console.log('this.data:',this.data)
  },
  computed: {
  // 解析器配置
    prop () {
      let data = {
        subfield: false,// 单双栏模式
        defaultOpen: 'preview',//edit： 默认展示编辑区域 ， preview： 默认展示预览区域 
        editable: false,    // 是否允许编辑
        toolbarsFlag: false,
        scrollStyle: true
      }
      return data
    }
  },
  

}
</script>

<style lang="scss" scoped>
.p{
  *{
    border: none !important;
  }
  background-color: white ;
  width: 918px;
  margin-top: 40px;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  display: flex;
  flex-flow: column !important;
  .tags{
  display: flex;
  flex-flow: row;
  padding-left: 20px;
  .tag{
    margin-right: 15px;
    margin-bottom: 20px;
    width: fit-content;
    padding: 7px 16px;
    border-radius: 4px;
    color: white;
      }
  }
  .title{
    font-size: 22px;
    font-weight: 600;
    padding-left: 30px;
  }
  .date{
  margin-top: 20px;
  color: #BABABA;
  font-size: 14px;
  display: flex;
  flex-flow: row;
  padding-left: 30px;
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
}
.main{
  margin-bottom: 40px;
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


</style>