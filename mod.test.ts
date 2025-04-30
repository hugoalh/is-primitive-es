import { deepStrictEqual } from "node:assert";
import { isPrimitive } from "./mod.ts";
Deno.test("Array", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive([]), false);
});
Deno.test("Big Integer", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(123n), true);
});
Deno.test("Boolean", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(true), true);
});
Deno.test("Headers", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(new Headers()), false);
});
Deno.test("Map", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(new Map()), false);
});
Deno.test("Number", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(123.456), true);
});
Deno.test("Plain Object", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive({}), false);
});
Deno.test("Set", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(new Set()), false);
});
Deno.test("String", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive("qwerty"), true);
});
Deno.test("Symbol", { permissions: "none" }, () => {
	deepStrictEqual(isPrimitive(Symbol("test")), true);
});
