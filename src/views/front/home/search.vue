<template>
  <div class="card">
    <div class="left">
      <div class="title">Search</div>
    <input type="text" placeholder="Type something..." v-model="text">
    </div>
    <div class="right">
      <svg @click="search()" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <circle cx="10" cy="10" r="7" style=""></circle>
        <line x1="21" y1="21" x2="15" y2="15"></line>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text:''
    }
  },
  methods:{
    search(){
      console.log(this.text)
      if(this.text =='1311325183'){
         this.$router.push({
            path:'/manage'
            }) 
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.card{
  width: 270px;
  height: 62.25px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  margin-top: 40px;
  display: flex;
  flex-flow: row;
  .left{
    width: 210px;
     .title{
       margin-top: 10px;
      font-size: 13px;
      color: #bababa;
      margin-left: 20px;
      height: 20px;
      display: flex;
      font-weight: 600;
      align-items: center;
    }
      input{
        margin-left: 20px;
        border: 0px;
        outline:none;
        font-size: 15px;
      }
    }
    .right{
      width: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg{
        color: #747474;
        width: 20px;
        height: 20px;
        font-size: 16px;
        cursor: pointer;
      }
    }
}
</style>