<template>
  <div>
      <el-menu
        @open="handleOpen"
        @close="handleClose"
        mode="vertical"
        unique-opened
        :default-active="$route.path"
        background-color="#304156"
        text-color="#fff"
        :collapse="isCollapse"
        active-text-color="#409EFF"
        >
          <side-bar-item :routes="routes"></side-bar-item>
      </el-menu>
  </div>
</template>
<script>
  import sideBarItem from './sideBarItem'
  export default {
    name:"SideBar",
    data() {
        return {
            isCollapse : false
        }
    },
    components: {sideBarItem},
    computed: {
        routes() {
          return this.$router.options.routes
        },
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss" scoped>
    h5 {
      text-align: center;
      color: #fff;
    }
    .el-menu {
      border-right: none;
      height: 100%;
    }
</style>
