<template>
	<div class="wrapper" ref="wrapper">
		<div class="count">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'


	// bscroll.on('scroll', position =>{
	// 	console.log(position);
	// })

	export default {
		name: "Bscroll",
		props: {
			probetype: {
				type: Number,
				default: 0
			},
			pullupload: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				scroll: null,
			}
		},
		mounted() {
			this.scroll = new BScroll(this.$refs.wrapper, {
				probeType: this.probetype,
				pullUpLoad: this.pullupload,
				observeDOM: true,
				click: true,

			})

			this.scroll.on('scroll', position => {

				// console.log(position.y);
				this.$emit("scrolly", position);
			})

			this.scroll.on('pullingUp', () => {
				// console.log("上拉加载更多");
				this.$emit("scrollmore");
				this.scroll.finishPullUp();
			})

		},
		methods: {
			scrollTo(x, y, time = 300) {
				this.scroll.scrollTo(x, y, time);
			},
      scrollmore(){
				this.scroll.refresh();
				// console.log(this.scroll);
			}
		},




	}
</script>

<style>
</style>
