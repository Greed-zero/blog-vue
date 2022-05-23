<template>
  <div class="nav">
      <router-link to="/home/articles">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
      </svg>
      <span>Home</span>
      </router-link>
      <router-link to="/home/about">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <circle cx="12" cy="7" r="4"></circle>
        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
      </svg>
      <span>About</span>        
      </router-link>
      <router-link to="/home/archives">
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-archive" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <rect x="3" y="4" width="18" height="4" rx="2"></rect>
        <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"></path>
        <line x1="10" y1="12" x2="14" y2="12"></line>
      </svg>
      <span>Archives</span>        
      </div>
      </router-link>
      <router-link to="/home/search">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-search" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z"></path>
        <circle cx="10" cy="10" r="7"></circle>
        <line x1="21" y1="21" x2="15" y2="15"></line>
      </svg>
      <span>Search</span>
      </router-link>
      <div @click="handletheme()" class="themes">
        <svg xmlns="http://www.w3.org/2000/svg" 
        class="icon icon-tabler icon-tabler-toggle-left" 
        width="24" height="24" 
        viewBox="0 0 24 24" 
        stroke-width="2" 
        stroke="currentColor" 
        fill="none" 
        stroke-linecap="round" 
        stroke-linejoin="round"
        v-show="isShow"
        >
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <circle cx="8" cy="12" r="2"></circle>
          <rect x="2" y="6" width="20" height="12" rx="6"></rect>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" 
        v-show="!isShow"
        class="icon icon-tabler icon-tabler-toggle-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z"></path>
          <circle cx="16" cy="12" r="2"></circle>
          <rect x="2" y="6" width="20" height="12" rx="6"></rect>
        </svg>
        <span v-show="isShow">Dark Mode</span>
        <span v-show="!isShow">Default  Mode</span>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    handletheme(){
      this.isShow = !this.isShow
      console.log('1')
    }
  },
}
</script>

<style lang="scss" scoped>
.nav{
  height: 100%;
 margin-top: 230px;
 display: flex;
 flex-flow: column;
 *{
   text-decoration: none;
   color:  #bababa;
   font-size: 15px
 }


 a{
   margin-bottom: 35px;
   display: flex;
   flex-flow: row;
   align-items: center;
   *{
     display: flex;
    //  justify-content: center;
     align-items: center;
     font-size: 14px
   }
 }
}
svg{
  font-size: 14px;
  width:20px;
  height: 20px;
  margin-right: 38px;
}
.router-link-active{
    *{
      color: #34495E;
    }
}
.themes{
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-flow: row;
  position: fixed;
  bottom: 15%; 
  left: 11%;
}
</style>