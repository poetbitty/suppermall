import Toast from './toast.vue';
const obj = {}


obj.install = function(Vue){
	const toast = Vue.extend(Toast);
	const t = new toast();
	t.$mount(document.createElement('div'));
	document.body.appendChild(t.$el);
	Vue.prototype.$toast = t;
}

export default obj;