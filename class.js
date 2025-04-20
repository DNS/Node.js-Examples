

class myclass {
	constructor (data) {
		this.data = data;
	}
	
	destroy () {
		this.data = null;
	}
	
	method () {
		console.log("hello world: " + this.data);
	}
	
}




h = new myclass(123);
h.method();



