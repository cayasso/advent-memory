'use strict';

import 'babel-polyfill'

/**
 * Module dependencies.
 */

import Promise from 'any-promise'

export default options => {
  let seq = 0
  const data = {}

  /**
   * Load entity events.
   *
   * @param {String|Number} id
   * @return {Promise}
   * @api public
   */

  function load(id) {
    data[id] = data[id] || []
    return new Promise((resolve, reject) => {
      setImmediate(() => resolve(data[id]))
    })
  }

  /**
   * Save events.
   *
   * @param {Array} events
   * @return {Promise}
   * @api public
   */

  function save(events) {
    return new Promise((resolve, reject) => {
      setImmediate(() => resolve(events.filter(event => {
        event.entity = event.entity || {}
        const id = event.entity.id || event.id
        if (!id) return false
        data[id] = data[id] || []
        event.version = seq++
        return data[id] = [...data[id], event]
      }, [])))
    })
  }

  return { load, save }
}
