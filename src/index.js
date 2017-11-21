'use strict'

const createEntity = () => {
  const stream = {}
  let seq = 0

  /**
   * Load entity events.
   *
   * @param {String|Number} id
   * @return {Promise}
   * @api public
   */

  function load(id) {
    stream[id] = stream[id] || []
    return Promise.resolve(stream[id])
  }

  /**
   * Save events.
   *
   * @param {Array} events
   * @return {Promise}
   * @api public
   */

  async function save(data) {
    if (!Array.isArray(data) || data.length === 0) {
      return []
    }

    return data.filter(event => {
      event.entity = event.entity || {}
      const id = event.entity.id || event.id
      if (!id) return false
      stream[id] = stream[id] || []
      event.version = seq++
      stream[id] = [...stream[id], event]
      return true
    })
  }

  return { load, save }
}

module.exports = createEntity
