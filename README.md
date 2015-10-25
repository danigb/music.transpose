# music.transpose

[![Build Status](https://travis-ci.org/danigb/music.transpose.svg?branch=master)](https://travis-ci.org/danigb/music.transpose)
[![Code Climate](https://codeclimate.com/github/danigb/music.transpose/badges/gpa.svg)](https://codeclimate.com/github/danigb/music.transpose)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm version](https://img.shields.io/npm/v/music.transpose.svg)](https://www.npmjs.com/package/music.transpose)
[![license](https://img.shields.io/npm/l/music.transpose.svg)](https://www.npmjs.com/package/music.transpose)
[![music.kit](https://img.shields.io/badge/music-kit-yellow.svg)](https://github.com/danigb/music.kit)

Simple and fast pitch transposition:

```js
transpose('E2', '2M') // => 'F#2'
transpose('F4', '3m') // => 'Ab4'
```

This is part of [music.kit](https://github.com/danigb/music.kit)

## Installation

Install the npm module: `npm i --save music.transpose` and use it:

```js
var transpose = require('music.transpose')
transpose('3m', 'G') // => 'Bb'
```

## Usage

#### note transposition

The simplest usage is with a note name (pitch) and interval (the order doesn't matter):

```js
transpose('C2', '4A') // => 'F#2'
transpose('4A', 'C2') // => 'F#2'
```

#### Pitch class transposition

You can transpose pitch classes (note names without octaves), and the returned value will be a pitch class:

```js
tranpose('A', '3M') // => 'C#'
tranpose('A5', '3M') // => 'C#5'
```

#### Transposers

Also, you can partially apply the function to get a transposer:

```js
var major3th = transpose('3M')
major3th('D') // => 'F#'
```

#### Work with pitch or interval arrays

Partially applied transposers allows to work with arrays seamlessly:

```
['C', 'D', 'E', 'F', 'G'].map(transpose('3M')) // => ['E', 'F#', 'G#', 'A', 'B']
['1P', '3m', '5P'].map(transpose('C')) // => ['C', 'Eb', 'G']
```

#### Using different interval or pitch representations

This library can work with [pitches or intervals expressed as arrays](https://github.com/danigb/a-pitch):

```js
transpose([0, 1, 3], [2, 0, 0]) // => [3, 1, 3]
// is the same as: transpose('C#3', '3M') => 'E#3'
```

## License

MIT License
