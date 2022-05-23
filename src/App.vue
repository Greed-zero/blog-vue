<template>
  <div id="app">
    <router-view></router-view>
    <!-- <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
      <path stroke="none" d="M0 0h24v24H0z"></path>
      <polyline points="5 12 3 12 12 3 21 12 19 12"></polyline>
      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
      <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"></path>
    </svg> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style >
@font-face {
     font-family: 'Lato';
    src: url('./assets/fontface/Lato-Medium-8.ttf');
}
*{
  margin: 0;
  padding: 0;
}
body {
    margin: 0;
    font-family: 'Lato';
    width: 100%;
    height: 100%;
    background-color: #F5F5FA;
}
</style>
