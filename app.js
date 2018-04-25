#!/usr/bin/env nodejs

const badge = require('gh-badges')
var argv = require('yargs')
  .command('$0 <first> <second> <colorscheme>', 'Print SVG image for the badge', (yargs) => {
    yargs
    .positional("first", {describe: 'first text', type: 'string', required: true})
    .positional("second", {describe: 'second text', type: 'string', required: true})
    .positional("colorscheme", {describe: 'color', type: 'string', required: true})
    .choices("colorscheme", ["brightgreen", "green", "yellow", "yellowgreen", "orange", "red", "blue", "grey", "gray", "lightgrey", "lightgray"])
    .example("$0 build passed green > mybadge.svg")
    .example("$0 build failed red > mybadge.svg")
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
