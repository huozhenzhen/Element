<template>
<div class="app-container">
	<el-form ref="form" :model="form" label-width="120px">
		<el-form-item label="Activity name">
			<el-input v-model="form.name"></el-input>
		</el-form-item>
		<el-form-item label="Activity zone">
			<el-select v-model="form.region" placeholder="please select your zone">
				<el-option label="Zone one" value="shanghai"></el-option>
				<el-option label="Zone two" value="beijing"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="Activity time">
			<el-col :span="11">
				<el-date-picker type="date" placeholder="Pick a date" v-model="form.date1" style="width: 100%;"></el-date-picker>
			</el-col>
			<el-col class="line" :span="2">-</el-col>
			<el-col :span="11">
				<el-time-picker type="fixed-time" placeholder="Pick a time" v-model="form.date2" style="width: 100%;"></el-time-picker>
			</el-col>
		</el-form-item>
		<el-form-item label="Instant delivery">
			<el-switch v-model="form.delivery"></el-switch>
		</el-form-item>
		<el-form-item label="Activity type">
			<el-checkbox-group v-model="form.type">
				<el-checkbox label="Online activities" name="type"></el-checkbox>
				<el-checkbox label="Promotion activities" name="type"></el-checkbox>
				<el-checkbox label="Offline activities" name="type"></el-checkbox>
				<el-checkbox label="Simple brand exposure" name="type"></el-checkbox>
			</el-checkbox-group>
		</el-form-item>
		<el-form-item label="Resources">
			<el-radio-group v-model="form.resource">
				<el-radio label="Sponsor"></el-radio>
				<el-radio label="Venue"></el-radio>
			</el-radio-group>
		</el-form-item>
		<el-form-item label="Activity form">
			<el-input type="textarea" v-model="form.desc"></el-input>
		</el-form-item>
		<el-form-item label="Activity slider">
			<el-slider v-model="value3" show-input>
			</el-slider>
		</el-form-item>

		<el-form-item label="Activity switch">
			<el-switch v-model="value1" active-text="按月付费" inactive-text="按年付费">
			</el-switch>
			<el-switch style="display: block" v-model="value2" active-color="#13ce66" inactive-color="#ff4949" active-text="按月付费" inactive-text="按年付费">
			</el-switch>
		</el-form-item>
		<el-form-item>
			<div class="block">
				<span class="demonstration">默认不区分颜色</span>
				<el-rate v-model="value4"></el-rate>
			</div>
			<div class="block">
				<span class="demonstration">区分颜色</span>
				<el-rate v-model="value5" :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
				</el-rate>
			</div>

		</el-form-item>
		<el-form-item>
			<el-button type="primary" @click="onSubmit">Create</el-button>
			<el-button @click="onCancel">Cancel</el-button>
		</el-form-item>

	</el-form>
</div>
</template>

<script>
export default {
	data() {
		return {
			value1: true,
			value2: true,
			value3: 20,
            value4: null,
            value5: null,
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: '',

			}
		}
	},
	methods: {
		onSubmit() {
			this.$message('submit!')
		},
		onCancel() {
			this.$message({
				message: 'cancel!',
				type: 'warning'
			})
		}
	}
}
</script>

<style scoped>
.line {
	text-align: center;
}
</style>
