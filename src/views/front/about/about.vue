<template>
  <div class="card">
    <div class="title">About</div>
    <div class="juzi">今日长缨在手，何时缚住苍龙。</div>
    <div class="date">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-clock" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <circle cx="12" cy="12" r="9"></circle>
        <polyline points="12 7 12 12 15 15"></polyline>
      </svg>
      <span>Mar 13, 2021</span>
    </div>
    <div class="introduce">A student major in Software Engineering.</div>
    <div class="introduce">Programing Languages: JavaScript</div>
    <div class="footer">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-copyright" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" style="">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <circle cx="12" cy="12" r="9" style=""></circle>
        <path d="M14.5 9a3.5 4 0 1 0 0 6" style=""></path>
      </svg>
        <span style="">CC BY-NC-ND</span>
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
export default {

}
</script>

<style lang="scss" scoped>
.card{
  margin-left: 10px;
  margin-top: 40px;
  background-color: white !important;
  width: 918px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  padding-left: 25px;
  padding-top: 40px;
  .title{
    font-size: 22px;
    font-weight: 900;
  }
  .juzi{
    font-size: 17.5px;
    color: #747474;
    margin-top: 10px;
  }
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
.introduce{
  margin-top: 30px;
  font-size: 17px;
}
.footer{
  margin-top: 40px;
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
.extra{
  margin-top: 80px;
  margin-bottom: 40px;
  margin-left: -20px;
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