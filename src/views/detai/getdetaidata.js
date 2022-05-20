import { getdetailjson } from '../../network/detai.js';

class getdata{
	
	gettopimg(){
		return topimg;
	}
	settopimg(data){
		this.topimg = data;
	}
	
}

export function initdetai(iid){
	
	getdetailjson(iid).then( res =>{
		let data = res.result.data;
		const datapack = new getdata();
		return datapack;
	})
}









