import { requesttest } from "./requesttest.js"

export function gethomedata(){
	const homeurl ="https://test-1310228282.cos.ap-hongkong.myqcloud.com/suppermall/home/test.json";
	return requesttest(homeurl);
}

export function gethomejson(){
	const homeurl ="http://152.136.185.210:7878/api/hy66/home/multidata";
	return requesttest(homeurl);
}

export function getlistjson(type,page){
	return requesttest({
		url:"http://152.136.185.210:7878/api/hy66/home/data",
		params:{
			type,
			page
		}
	});
	
}