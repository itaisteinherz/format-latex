#!/usr/bin/env node
"use strict";
const meow = require("meow");
const formatLatex = require(".");

const cli = meow(String.raw`
	Usage
	  $ format-latex [input]

	Examples
	  $ format-latex "\lfloor1/x\rfloor"
	  \left\lfloor 1/x\right\rfloor
`);

console.log(formatLatex(cli.input[0]));
