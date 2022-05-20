import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		goods: [],

	},
	getters: {},
	mutations: {
		add_goods(state, goods) {
			let isat = true;
			if (state.goods.length == 0) {
				state.goods.push(goods);
			} else {
				state.goods.map(item => {
					if (item.iid == goods.iid) {
						item.num++;
						isat = false;
						return;
					}
				})
				if (isat) {
					state.goods.push(goods);
					isat = true;
				}

			}

		},

		sub_card(state, goods) {
			state.goods.map((item, index) => {
				if (item.num > 1) {
					item.num--;
				} else {
					state.goods.splice(index, 1);
				}

			})
		},
		
		check(state,item){
			
			item.ischeck=true;
			console.log(item);
		},
		cancelcheck(state,item){
			item.ischeck=false;
		}

	},
	actions: {},
	modules: {}
})
