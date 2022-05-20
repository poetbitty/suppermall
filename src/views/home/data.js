export function datato(n=1){
	var list = []
	for(let i=0;i<n*30;i++){
		list.splice(-1,0,"https://test-1310228282.cos.ap-hongkong.myqcloud.com/suppermall/home/data.jpg")
		// list.push();
		
	}
   
	return list;
	
}

export function data1to(n=1){
	var list1 = []
	for(let i=0;i<n*30;i++){
		list1.push("https://test-1310228282.cos.ap-hongkong.myqcloud.com/suppermall/home/data2.jpg");
	}
   
	return list1;
	
}

export function data2to(n=1){
	var list2 = []
	for(let i=0;i<n*30;i++){
		list2.push("https://test-1310228282.cos.ap-hongkong.myqcloud.com/suppermall/home/data1.jpg");
	}
   
	return list2;
	
}