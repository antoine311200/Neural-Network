const Neutral = require("./neutral.js");

const neuron = new Neutral(["x", "y", "z"]);

neuron.config(
	 [["x", "y"], "q", "+"],
	 [["q", "z"], "f", "*"]
);

neuron.run({
	"x": -2,
	"y": 5,
	"z": -4
});
