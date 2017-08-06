export class App {
  constructor() {
    this.user = {};
  }

  getUserInfo(username) {
  	let endpoint = 'https://api.github.com/users/';

	fetch(endpoint + username, {
	  method: 'get',
	}).then(resp => {
		return resp.json();
	}).then(obj => {
		this.user = obj;
	})
  }
}
