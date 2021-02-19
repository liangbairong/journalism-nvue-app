import Http from './http.js'

const BASE_URL= CONFIG.BASE_URL
export default {
		
	book:{
		list(data){
			return new Http({
				url:`${BASE_URL}/book/list`,
				data,
			})
		},
		details(data){
			return new Http({
				url:`${BASE_URL}/book/details`,
				data,
			})
		},
		directory(){
			return new Http({
				url:`${BASE_URL}/book/directory`,
				data,
			})
		}
	},
	
	getBookDet(data){
		return new Http({
			url:`${BASE_URL}book/${data.id}`,
		})
	},
	getBookChapter(data){
		return new Http({
			url:`${BASE_URL}chapter`,
			data
		})
	},
}