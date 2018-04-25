# Simple Cli for `gh-badges` library

I find that built-in command line tool for `gh-badges` ([shield.io](https://github.com/badges/shields)) have strange behaviour. So I rebuild a simple command line tool on top of `gh-badges` library.

## Installation

```bash
yarn
yarn link
```

## Usage:

```
badges-cli <first> <second> <colorscheme>

Print SVG image for the badge

Positionals:
  first        first text                                               [string]
  second       second text                                              [string]
  colorscheme  color
   [string] [choices: "brightgreen", "green", "yellow", "yellowgreen", "orange",
                        "red", "blue", "grey", "gray", "lightgrey", "lightgray"]

Options:
  --version   Show version number                                      [boolean]
  -h, --help  Show help                                                [boolean]

Examples:
  badges-cli build passed green > mybadge.svg
  badges-cli build failed red > mybadge.svg
```
