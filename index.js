"use strict";
module.exports = input => {
	if (typeof input !== "string") {
		throw new TypeError(`Expected \`input\` to be a \`string\`, got ${typeof input}`);
	}

	return input
		.replace(/([([])(.+)([)\]])/g, String.raw`\left$1$2\right$3`)
		.replace(/\|(.+)\|/g, String.raw`\left|$1\right|`)
		.replace(/\\lfloor(.+)\\rfloor/g, String.raw`\left\lfloor $1\right\rfloor `)
		.replace(/\\lceil(.+)\\rceil/g, String.raw`\left\lceil $1\right\rceil `)
		.replace(/\\\{(.+)\\\}/g, String.raw`\left\{$1\right\}`);
};
