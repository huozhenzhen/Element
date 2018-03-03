<template>
    <el-breadcrumb separator="/">
    	<el-breadcrumb-item v-for="(item, index) in levelList" :key="item.path" v-if="item.meta.title">
    		<router-link :to="item.redirect || item.path">{{item.meta.title}}</router-link>
    	</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
export default {
	data() {
		return {
			levelList : null
		}
	},
	created(){
		this.getBreadcrumb();
	},
	watch: {
		$route() {
			this.getBreadcrumb();
		}
	},
	methods: {
		getBreadcrumb() {
			this.levelList = this.$route.matched;
		}
	}
}
</script>

<style lang="scss" scoped>
  
</style>
