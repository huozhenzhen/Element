<template>
	<div class="">
			<el-table ref="multipleTable" stripe :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55">
				</el-table-column>
				<el-table-column label="日期" width="120">
					<template slot-scope="scope">{{ scope.row.date }}</template>
				</el-table-column>
				<el-table-column prop="name" label="姓名" width="120">
					<template slot-scope="scope">
					  <el-popover trigger="hover" placement="top">
						<p>姓名: {{ scope.row.name }}</p>
						<p>住址: {{ scope.row.address }}</p>
						<div slot="reference" class="name-wrapper">
						  <el-tag size="medium">{{ scope.row.name }}</el-tag>
						</div>
					  </el-popover>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="地址" show-overflow-tooltip>
				</el-table-column>
				<el-table-column label="操作">
				 <template slot-scope="scope">
				   <el-button
					 size="mini"
					 @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
				   <el-button
					 size="mini"
					 type="danger"
					 @click="handleDelete(scope.$index, scope.row)">删除</el-button>
				 </template>
			   </el-table-column>

			</el-table>
			<div style="margin-top: 20px">
				<el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
				<el-button @click="toggleSelection()">取消选择</el-button>
			</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			tableData: [{
				date: '2016-05-03',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-04',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-01',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-08',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-06',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}, {
				date: '2016-05-07',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			}],
			multipleSelection: []
		}
	},

	methods: {
		toggleSelection(rows) {
			if (rows) {
				rows.forEach(row => {
					this.$refs.multipleTable.toggleRowSelection(row);
				});
			} else {
				this.$refs.multipleTable.clearSelection();
			}
		},
		handleSelectionChange(val) {
			this.multipleSelection = val;
		},
		handleEdit(index, row) {
			console.log(index, row);
		},
		handleDelete(index, row) {
			console.log(index, row);
		}

	}
}
</script>
