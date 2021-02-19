/**
 * 利用缓存的方式 如果用户登录成功后，将信息缓存下来
 * @createTime 2019-04-05
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		hasLogin:  false, // 登录状态
		loginProvider: "",
		
	},
	mutations: {
		getUIStyle(state,uistyle) {
			state.uistyle =  false
		},
	},
	actions: {

	}
})

export default store
