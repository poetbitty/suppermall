import axios from 'axios'

export function requesttest(config){
	axios.default.timeout=5000;
	// axios.default.baseurl="https://test-1310228282.cos.ap-hongkong.myqcloud.com/suppermall"
	return axios(config);
}

     