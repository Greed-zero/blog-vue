<template>
  <div class="home">
      <div class="left">
        <avatar></avatar>
        <navigation></navigation>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import avatar from "@/views/front/home/avatar.vue"
import navigation from "@/views/front/home/navigation.vue"
export default {
    components:{
       navigation,
       avatar
    }

}
</script>
<style scoped lang='scss'>
body{
  background-color: #F5F5FA!important;
}
*{
    background-color: #F5F5FA!important;
}
.home{
    display: flex;
    flex-flow: row;
    height: 100%;
    background-color: #F5F5FA;
    *{
    background-color: #F5F5FA;
}
}
.left{
    display: flex;
    flex-flow: column;
    width: 240px;
    height: 100%;
    overflow: scroll;
    float: left;
    margin-top: 0;
    position:fixed;
    margin-left: 11%;
    margin-top: 40px;
    background-color: #F5F5FA;
}
.right{
  display: flex;
  position: relative;
  margin-left: calc(11% + 240px);
}
</style>