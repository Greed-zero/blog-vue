<template>
  <div class="ava">
      <img src="https://ipandai.club/img/avatar_hu0e99aaec2f72e77a7fcbe37d2cf4aace_148890_300x0_resize_box_3.png">
      <span class="emoji">🐼</span>
      <div class="blog">{{this.$store.state.user.name}}'s Blog</div>
      <div class="juzi">{{this.$store.state.user.name}}.</div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
*{
  background-color: #F5F5FA;
}
.ava{
position: fixed;
img{
  width: 120px;
  height: 120px;
  border-radius: 50%;
}
.emoji{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  font-size: 20px;
  position: relative;
  margin-top: -40px;
  margin-left: 80px;
  margin-bottom: 15px;
}
.blog{
color: #34495E;
font-size: 20px;
font-weight: 600;
}
.juzi{
  color:  #bababa;
  margin-top: 8px;
}
}
</style>