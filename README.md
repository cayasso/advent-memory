# advent-memory

[![Build Status](https://travis-ci.org/cayasso/advent-memory.png?branch=master)](https://travis-ci.org/cayasso/advent-memory)
[![NPM version](https://badge.fury.io/js/advent-memory.png)](http://badge.fury.io/js/advent-memory)

This is the dedault an simple in-memory engine that comes with
[advent](https://github.com/cayasso/advent)

## Installation

```bash
$ npm install advent-memory
```

## Usage

Pass as third parameter in options objects when creating an advent store.

```js
import { createStore } from 'advent'
import createEngine from 'advent-memory'
import decider from './decider'
import reducer from './reducer'

const engine = createEngine()
const store = createStore(decider, reducer, { engine })
All calls to store(..) will be saved or loaded by our engine
```

## Run tests

```bash
$ make test
```
