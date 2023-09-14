import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:8000',
	headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'},
	credentials: 'include',
})

// module.exports = {
//     instance
// }
export default instance