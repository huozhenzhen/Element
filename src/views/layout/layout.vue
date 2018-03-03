<template>
<div class="app-wrapper">
	<side-bar class="sidebar-container"></side-bar>
	<el-container class="main-container">
        <navbar></navbar>
		<el-main class='main-container'>
			<transition name="fade" mode="out-in">
				<!-- <router-view :key="key"></router-view> -->
				<router-view></router-view>
			</transition>
		</el-main>
	</el-container>
</div>
</template>

<script>
import {
	sideBar,
    Navbar
} from "@/views/layout/components";

export default {
	data() {
		return {
			navigation: ""
		}
	},
	components: {
		sideBar,
		Navbar
	},
	computed: {

	}
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
          @include clearfix;
          position: relative;
          height: 100%;
          width: 100%;
    }
    .main-container {
        flex-direction:column;
    }
</style>
