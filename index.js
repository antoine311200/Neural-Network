const Neural = require("./neural.js");

const test = new Neural(["x", "y", "z"]);

// test.config(["x", "y"], "q", "+");
// test.config(["q", "z"], "f", "*");

 test.config(
	 [["x", "y"], "q", "+"],
	 [["q", "z"], "f", "*"]
);

test.run({
	"x": -2,
	"y": 5,
	"z": -4
});