
import Axios from 'axios'

let instance = Axios.create({
    baseURL: 'http://api.tvmaze.com/',
    timeout: 3000
});

export default instance;