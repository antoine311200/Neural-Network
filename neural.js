class Neural {
	
	constructor(...steps) {
		console.log("[Neural] Initializing...");
		
		this.steps = [];
		this.variables = {};
		this.configs = [];
		
		for(let step in steps) {
			console.log("[Neural] Step "+step+" : variables { "+steps[step].join(", ")+" }");
			this.steps = steps;
			this.variables[step] = null;
		}
	}
	
	config(...args) {
		const push = args => {
			this.configs.push(args);
			const values = this.configs[this.configs.length-1][0];
			const method = this.configs[this.configs.length-1][this.configs[this.configs.length-1].length-1].trim();
			console.log("[Neural] Set link : { "+values.join(", ")+" } with method \""+method+"\"")
		}
		
		if(typeof args[0][0] === "number") push(args);
		else for(let i = 0; i < args.length; i++) push(args[i]);
	}
	
	run(variables) {
		for(let name in variables) {
			this.variables[name] = variables[name];
			console.log("[Neural] "+name+" = "+variables[name]);
		}
		for(let i = 0; i < this.configs.length; i++) {
			const values = this.configs[i][0];
			const variable = this.configs[i][1];
			const method = this.configs[i][this.configs[i].length-1].trim();
			console.log(values, variable, method);
			switch(method) {
				case "*": this.variables[variable] = this.multiply(values); break;
				case "/": this.variables[variable] = this.divide(values); break;
				case "%": this.variables[variable] = this.modulo(values); break;
				case "+": this.variables[variable] = this.addition(values); break;
				case "-": this.variables[variable] = this.subtraction(values); break;
			}
			console.log(this.variables);
			console.log("[Debug] Result : "+variable+" = "+this.variables[variable]);
		}
	}
	
	check(value) {
		if(typeof value != "number") return this.variables[value];
		return value;
	}
	
	multiply(v) {
		let res = 1;
		for(let i = 0; i < v.length; i++) {
			res *= this.check(v[i]);
		}
		return res;
	}
	
	divide(v) {
		let res = 1;
		for(let i = 0; i < v.length; i++) {
			res /= this.check(v[i]);
		}
		return res;
	}
	
	modulo(v) {
		let res = 1;
		for(let i = 0; i < v.length; i++) {
			res %= this.check(v[i]);
		}
		return res;
	}
	
	addition(v) {
		let res = 0;
		for(let i = 0; i < v.length; i++) {
			res += this.check(v[i]);
		}
		return res;
	}
	
	subtraction(v) {
		let res = 0;
		for(let i = 0; i < v.length; i++) {
			res -= this.check(v[i]);
		}
		return res;
	}
}

module.exports = Neural;