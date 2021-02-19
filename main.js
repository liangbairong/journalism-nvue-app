import Vue from 'vue'
import App from './App'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// https://blog.csdn.net/weixin_44143975/article/details/90550225?utm_medium=distribute.pc_relevant.none-task-blog-title-6&spm=1001.2101.3001.4242