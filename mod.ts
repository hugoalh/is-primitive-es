/**
 * Type of the primitive.
 */
export type Primitive = bigint | boolean | number | string | symbol | null | undefined;
/**
 * Determine whether the item is a primitive.
 * @param {unknown} item Item that need to determine.
 * @returns {item is Primitive} Determine result.
 * @example
 * ```ts
 * isPrimitive({});
 * //=> false
 * ```
 * @example
 * ```ts
 * isPrimitive(new Headers());
 * //=> false
 * ```
 * @example
 * ```ts
 * isPrimitive(true);
 * //=> true
 * ```
 * @example
 * ```ts
 * isPrimitive(123n);
 * //=> true
 * ```
 */
export function isPrimitive(item: unknown): item is Primitive {
	switch (typeof item) {
		case "bigint":
		case "boolean":
		case "number":
		case "string":
		case "symbol":
		case "undefined":
			return true;
		case "object":
			return (item === null);
		default:
			return false;
	}
}
export default isPrimitive;
