<template>
  <div>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1','2']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user-solid"></i>用户管理</template>
            <el-menu-item index="1-1">
              <router-link :to="{name:'user-info',params:{id:2}}">
                个人信息
              </router-link>

            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{name:'user-list'}">
                用户管理
              </router-link>
            </el-menu-item>
            <el-menu-item index="1-2">
              <router-link :to="{name:'GoMain',params: {username:this.username}}">
                回到首页
              </router-link>
            </el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-user-solid"></i>内容管理</template>
            <el-menu-item index="2-1">
              <router-link :to="{name:'content-type'}">
                内容分类
              </router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link :to="{name:'content-table'}">
                内容列表
              </router-link>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>{{$store.getters.getUser.username}}</span>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  export default {
    props: ['username'],
    name: "Main",
    mounted() {
      // alert(this.username);
      // this.uname = this.username;
    }

  }
</script>

<style scoped lang="scss">
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }
</style>
