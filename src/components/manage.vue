<template>
  <el-container style="height: 100vh">
    <!-- 左侧菜单部分 -->
    <el-aside width="200px">
      <el-menu
        @close="handleClose"
        :default-openeds="['1']"
        background-color="#304156"
        text-color="#ddd"
        router
        ref="menus"
      >
        <!-- 左侧子菜单 -->
        <el-submenu index="1">
          <template slot="title"
            ><i class="el-icon-user"></i>个人博客后台</template
          >
          <el-menu-item-group>
            <el-menu-item index="/manage/manageHome">首页</el-menu-item>
            <el-menu-item index="/manage/blogTable">博客总览</el-menu-item>
            <el-menu-item index="/manage/createBlog">新增博客</el-menu-item>
            <!-- <el-menu-item index="/manage/createBlog">新增博客</el-menu-item> -->
            <!-- <el-menu-item index="1-2">选项2</el-menu-item> -->
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>
    <!-- 右侧内容区域 -->
    <el-container>
      <!-- 顶部内容区域 -->
      <el-header style="text-align: right; font-size: 12px">
        <span>Admin</span>
      </el-header>
      <!-- 中间主要内容区域 -->
      <el-main> 
          <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
    methods:{
        handleClose(key, keyPath) {
            this.$refs.menus.open(keyPath);
        },
        getBlog(){
            this.$ajax({
                url:'http://localhost:8080/article',
                method:'get',
                }).then(
                    res => {
                        console.log(res.data)
                        },
                    err => console.log(err.message)
                )
        }
    },
    mounted(){
        this.getBlog()
    }
}
</script>

<style  scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
  background-color: #304156;
  .el-menu{
      border-right: none;
  }
} 

</style>
