"use strict"

const { greet, add } = require("./index")
const assert = require("node:assert")

assert.strictEqual(greet("world"), "Hello, world! Published via lpm multi-registry publish.")
assert.strictEqual(add(2, 3), 5)
assert.strictEqual(add(-1, 1), 0)

console.log("All tests passed")
