# advent-memory

[![Build Status](https://travis-ci.org/cayasso/advent-memory.png?branch=master)](https://travis-ci.org/cayasso/advent-memory)
[![NPM version](https://badge.fury.io/js/advent-memory.png)](http://badge.fury.io/js/advent-memory)

This is the dedault an simple in-memory engine that comes with [advent](https://github.com/cayasso/advent)
## Installation

```bash
$ npm install advent-memory
```

## Usage
Pass as third parameter in options objects when creating an advent store.

```js
import createEngine from 'advent-memory'
import { createStore } from 'advent'
import eventsReducer from './events'
import commandsReducer from './commands'

const engine = createEngine()
const store = createStore(comandsReducer, eventsReducer, { engine })
All calls to store(..) will be saved or loaded by our engine
```
## Run tests

``` bash
$ make test
```

## License
The MIT License (MIT)

Copyright (c) 2016 Jonathan Brumley &lt;cayasso@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
