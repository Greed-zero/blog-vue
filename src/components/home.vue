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
<style scoped>
.home{
    display: flex;
    flex-flow: row;
}
.left{
    display: flex;
    flex-flow: column;
}
</style>