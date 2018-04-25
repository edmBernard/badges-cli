#!/usr/bin/env node

const badge = require('gh-badges')
var argv = require('yargs')
    .command('$0 <first> <second> <colorscheme>', 'start the server', (yargs) => {
        yargs
            .positional("first", {describe: 'first text', type: 'string', required: true})
            .positional("second", {describe: 'second text', type: 'string', required: true})
            .positional("colorscheme", {describe: 'left color', type: 'string', required: true})
            .choices("colorscheme", ["brightgreen", "green", "yellow", "yellowgreen", "orange", "red", "blue", "grey", "gray", "lightgrey", "lightgray"])
    })
    .alias("h", "help")
    .version("0.0.1")
    .argv;

// Optional step, to have accurate text width computation.
const format = {
  text: [argv.first, argv.second],
  colorscheme: argv.colorscheme,
  template: 'flat',
}

badge.loadFont('Verdana.ttf', err => {
  badge(format, (svg, err) => {
    console.log(svg);
  })})
