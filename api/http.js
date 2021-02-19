	
import CONFIG from '@/config/index.js'

export default class Http{
	constructor() {
	}
	http(param={}){
		return new Promise((succ,err)=>{
			console.log(CONFIG.BASE_URL + param.url)
			uni.request({
			    url:CONFIG.BASE_URL + param.url, //仅为示例，并非真实接口地址。
			    data: param.data,
				method:param.method || 'get',
			    header: {
			        authorization:uni.getStorageSync('token')
			    },  
			    success: (res) => {
					succ(res.data)
					if(res.data.code!==200){
						uni.showToast({
							title: res.data.msg || '接口报错',
							icon:'none'
						})
					}
					if(res.data.code===3000){ 
						uni.navigateTo({
							url:'/pages/login/login'
						})
					}
					
			    },
				fail:(error)=>{
					console.log(error)
					errr(error)
				}
			});
		})
	}
}