# @lpm.dev/neo.multiple

Multi-registry publish test package for LPM Phase 21.

## Install

```bash
lpm add @lpm.dev/neo.multiple
```

Or from npm:

```bash
npm install @lpm-registry/multiple
```

## Usage

```javascript
const { greet, add } = require("@lpm-registry/multiple")

console.log(greet("world"))
// => "Hello, world! Published via lpm multi-registry publish."

console.log(add(2, 3))
// => 5
```

ESM:

```javascript
import { greet, add } from "@lpm-registry/multiple"
```

## API

### `greet(name: string): string`

Returns a greeting message.

### `add(a: number, b: number): number`

Adds two numbers and returns the sum.

## License

MIT
