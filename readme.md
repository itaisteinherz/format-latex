# format-latex [![Build Status](https://travis-ci.org/itaisteinherz/format-latex.svg?branch=master)](https://travis-ci.org/itaisteinherz/format-latex)

> Format [LaTeX](https://en.wikipedia.org/wiki/LaTeX)


## Install

```
$ npm install https://github.com/itaisteinherz/format-latex
```


## Usage

```js
const formatLatex = require("format-latex");

formatLatex("\lfloor1/x\rfloor");
//=> "\left\lfloor 1/x\right\rfloor"
```


## API

### formatLatex(input)

#### input

Type: `string`

The LaTeX string to format.


## CLI

```
$ npm install --global https://github.com/itaisteinherz/format-latex
```

```
$ format-latex --help

  Usage
    format-latex <input>

  Examples
    $ format-latex "\lfloor1/x\rfloor"
    \left\lfloor 1/x\right\rfloor
```


## License

MIT © [Itai Steinherz](https://github.com/itaisteinherz)
