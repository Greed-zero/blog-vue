<template>
  <el-container style="height: 100vh">
      <el-header >
        <div class="left">
                <span @click="collapseMenu"><i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i></span>
                博客后台管理系统
        </div>
        <div class="right">
            <i class="el-icon-rank"></i>
            <i class="el-icon-bell"></i>
            <span class="name">admin</span>
        </div>
      </el-header>
    <el-container>
      <el-aside :width="isCollapse?'64px':'200px'">
      <el-menu
        :collapse-transition="false"
        :collapse="isCollapse"
        @close="handleClose"
        background-color="#304156"
        text-color="#ddd"
        router
        ref="menus"
        :default-active="activeIndex"
      >
          <el-menu-item-group>
            <el-menu-item index="/manage/manageHome"><i class="el-icon-s-help"></i><span v-if="!isCollapse">首页</span></el-menu-item>
            <el-menu-item index="/manage/blogTable"><i class="el-icon-reading"></i><span v-if="!isCollapse">博客总览</span></el-menu-item>
            <el-menu-item index="/manage/createBlog"><i class="el-icon-edit-outline"></i><span v-if="!isCollapse">新增博客</span></el-menu-item>
          </el-menu-item-group>
      </el-menu>
    </el-aside>
      <el-main> 
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    data() {
        return {
            isCollapse: false, // 表示折叠还是展开
            activeIndex: '/device_new/',
            data:''
        };
    },
    methods:{
        collapseMenu() {
            this.isCollapse = !this.isCollapse // 布尔值取反
        },
        handleClose(key, keyPath) {
            this.$refs.menus.open(keyPath);
        },
       
    },
    mounted(){
        this.activeIndex = this.$route.path
       
    }
}
</script>

<style  scoped lang="scss">
.el-header {
  background-color: #242f42;
  line-height: 60px;
  position: relative;
  height: 70px!important;
}
.el-aside {
  color: #333;
  background-color: #304156;
  transition: width 0.3s;
  .el-menu{
      border-right: none;
  }
} 
.left{
    height: 70px;
    display: flex;
    flex-flow: row;
    color: #fff;
    width: 500px;
    font-size: 22px;
    align-items: center;
    margin-right: 20px;
    i{
        margin-right: 20px;
        cursor: pointer;
    }
}
.right{
    float: right; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 70px;
    width: 500px;
    margin-left: auto;
    color: #fff;
    font-size: 25px;
    >*{
        margin-left: 20px;
    }
}
.name{
    font-size: 15px!important;
}
.el-header{
    display: flex;
    flex-flow: row;
}
.el-icon-rank{
    transform: rotate(45deg);
}
</style>
