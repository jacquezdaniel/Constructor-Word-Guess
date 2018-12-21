var word = require(".word.js");

var inquirer = require("inquirer");

var clc = require("cli-color");

var wordBank = ["The Dark Knight", "Pulp Fiction", "The Matrix", "Gladiator", "The Departed", "The GodFather", "Prometheus"];

var incorrect = clc.red.bold;

var correct = clc.green.bold;

var gameTextColor = clc.blueBright;

