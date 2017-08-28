import test from "ava";
import m from ".";

test("format brackets", t => {
	t.is(m("(x)"), String.raw`\left(x\right)`);
	t.is(m("[x]"), String.raw`\left[x\right]`);
	t.is(m("(x]"), String.raw`\left(x\right]`);
	t.is(m("[x)"), String.raw`\left[x\right)`);
});

test("format absolute value", t => {
	t.is(m("|x|"), String.raw`\left|x\right|`);
});

test("format floor and ceil", t => {
	t.is(m(String.raw`\lfloor x\rfloor`), String.raw`\left\lfloor  x\right\rfloor `);
	t.is(m(String.raw`\lceil x\rceil`), String.raw`\left\lceil  x\right\rceil `);
});

test("format set builder notation", t => {
	t.is(m(String.raw`\{x|x\in\mathbb{N}\}`), String.raw`\left\{x|x\in\mathbb{N}\right\}`);
});
