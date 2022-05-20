import { requesttest } from "./requesttest.js"

export function getdetailjson(iid){
	return requesttest({
		url:"http://152.136.185.210:7878/api/hy66/detail",
		params:{ 
			iid:iid,
		}
	});
}

export function getdetailcoatlist(){
	const coatlisturl ="http://152.136.185.210:7878/api/hy66/recommend";
	return requesttest(coatlisturl);
	// return requesttest({
	// 	url:"http://152.136.185.210:7878/api/hy66/recommend",
	// });
	
}