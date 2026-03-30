"use strict"

function greet(name) {
	return `Hello, ${name}! Published via lpm multi-registry publish.`
}

function add(a, b) {
	return a + b
}

module.exports = { greet, add }
