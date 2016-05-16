'use strict';

import 'babel-polyfill'

/**
 * Module dependencies.
 */

import Promise from 'any-promise'

export default options => {
  let data = {}

  /**
   * Load entity events.
   *
   * @param {String|Number} id
   * @param {Function} fn
   * @api public
   */

  function load(id) {
    data[id] = data[id] || []
    return new Promise((accept, reject) => {
      setImmediate(() => accept(data[id]))
    })
  }

  /**
   * Save events.
   *
   * @param {Object} event
   * @param {Function} fn
   * @api public
   */

  function save(events) {
    return new Promise((accept, reject) => {
      setImmediate(() => accept(events.filter(event => {
        let id = event.id
        if (!id) return false
        data[id] = data[id] || []
        return data[id] = [...data[id], event]
      }, [])))
    })
  }

  return { load, save }
}
