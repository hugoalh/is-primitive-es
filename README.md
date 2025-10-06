# Is Primitive (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh/is-primitive-es](https://img.shields.io/github/v/release/hugoalh/is-primitive-es?label=hugoalh/is-primitive-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh/is-primitive-es")](https://github.com/hugoalh/is-primitive-es)
[![JSR: @hugoalh/is-primitive](https://img.shields.io/jsr/v/@hugoalh/is-primitive?label=@hugoalh/is-primitive&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-primitive")](https://jsr.io/@hugoalh/is-primitive)
[![NPM: @hugoalh/is-primitive](https://img.shields.io/npm/v/@hugoalh/is-primitive?label=@hugoalh/is-primitive&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-primitive")](https://www.npmjs.com/package/@hugoalh/is-primitive)

An ECMAScript module to determine whether the item is a primitive.

## 🎯 Targets

| **Runtime \\ Source** | **GitHub Raw** | **JSR** | **NPM** |
|:--|:-:|:-:|:-:|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ✔️ | ✔️ |
| **[Deno](https://deno.land/)** >= v2.1.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v20.9.0 | ❌ | ✔️ | ✔️ |

## 🛡️ Runtime Permissions

This does not request any runtime permission.

## #️⃣ Sources

- GitHub Raw
  ```
  https://raw.githubusercontent.com/hugoalh/is-primitive-es/{Tag}/mod.ts
  ```
- JSR
  ```
  jsr:@hugoalh/is-primitive[@{Tag}]
  ```
- NPM
  ```
  npm:@hugoalh/is-primitive[@{Tag}]
  ```

> [!NOTE]
> - It is recommended to include tag for immutability.
> - These are not part of the public APIs hence should not be used:
>   - Benchmark/Test file (e.g.: `example.bench.ts`, `example.test.ts`).
>   - Entrypoint name or path include any underscore prefix (e.g.: `_example.ts`, `foo/_example.ts`).
>   - Identifier/Namespace/Symbol include any underscore prefix (e.g.: `_example`, `Foo._example`).

## ⤵️ Entrypoints

| **Name** | **Path** | **Description** |
|:--|:--|:--|
| `.` | `./mod.ts` | Default. |

## 🧩 APIs

- ```ts
  function isPrimitive(item: unknown): item is Primitive;
  ```
- ```ts
  type Primitive = bigint | boolean | number | string | symbol | null | undefined;
  ```

> [!NOTE]
> - For the full or prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/doc/)
>   - [JSR](https://jsr.io/@hugoalh/is-primitive)

## ✍️ Examples

- ```ts
  isPrimitive({});
  //=> false
  ```
- ```ts
  isPrimitive(new Headers());
  //=> false
  ```
- ```ts
  isPrimitive(true);
  //=> true
  ```
- ```ts
  isPrimitive(123n);
  //=> true
  ```
