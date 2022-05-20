//npm安装
// npm install better-scroll --save

//导入
import BScroll from 'better-scroll'

//导出配置
export function bscrollDeploy(obj,probetype,pullupload){
	
	//
	//使用
	const bscroll = new BScroll(obj,{
		probeType:probetype,
		pullUpLoad:pullupload,

		
	})

	
	return bscroll;
}

export function onprobetype(bscroll){
	bscroll.on('scroll', position =>{
		console.log(position);
	})
	
}

export function onpullupload(bscroll){
	// bscroll.on('pullUpLoad', () =>{
	// 	console.log(加载完毕);
	// })
	
}