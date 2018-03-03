import {login, logout, getInfo} from '@/api/login'
import {setToken, getToken, removeToken} from '@/utils/auth'

const user = {
	state: {
		token: getToken(),
		roles: [],
		name: ''
	},
	mutations:{
		SET_TOKEN:(state, token) =>{
			state.token = token;
		},
		SET_ROLES:(state, roles) => {
			state.roles = roles;
		},
		SET_NAME:(state, name) =>{
			state.name = name;
		}
	},
	actions:{
		Login({commit}, userInfo) {
			return new Promise((resolve, reject)=>{
				login(userInfo.username, userInfo.password)
				.then(res=>{
					const token = res.data.token;
					setToken(token);
					commit('SET_TOKEN', token)
					resolve()
				}).catch(err=>{
						reject()
					}
				)
			})
		},
		LogOut({comit, state}) {
			return new Promise((resolve, reject)=>{
				logout(state.token)
				.then(res =>{
					commit('SET_TOKEN', '')
					removeToken();
					resolve();
				}).catch(err => {
					reject()
				})
			})
		},
		GetInfo({commit, state}){
			return new Promise((resolve, reject) => {
				getInfo(state.token)
				.then(res =>{
					let data = res.data;
					commit('SET_ROLES', data.role);
					commit('SET_NAME', data.name);
					resolve()
				}).catch((err) => {
					reject();
				})
			})
		},
			// 前端 登出
	  FedLogOut({ commit }) {
		return new Promise(resolve => {
		  commit('SET_TOKEN', '')
		  removeToken()
		  resolve()
		})
	  }
	}
}

export default user
