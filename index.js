#!/usr/bin/env node
'use strict'

const minimist = require('minimist')
const Speaker = require('speaker')

const pkg = require('./package.json')

const argv = minimist(process.argv.slice(2))

if (argv.help || argv.h) {
	process.stdout.write(`
Usage:
    speaker

Examples:
    cat some-audio.pcm | speaker
\n`)
	process.exit()
}

if (argv.version || argv.v) {
	process.stdout.write(pkg.name + ' ' + pkg.version + '\n')
	process.exit(0)
}

process.stdin
.pipe(new Speaker())
.on('error', (err) => {
	console.error(err)
	process.exit(1)
})
