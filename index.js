const Neural = require("./neural.js");

const test = new Neural(["x", "y", "z"]);

neuron.config(
	 [["x", "y"], "q", "+"],
	 [["q", "z"], "f", "*"]
);

neuron.run({
	"x": -2,
	"y": 5,
	"z": -4
});
