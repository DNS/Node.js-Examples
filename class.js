

class myclass {
	constructor(data) {
		this.data = data;
	}
	
	method () {
		console.log("hello world: " + this.data);
	}
	
}




h = new myclass(123);
h.method();



