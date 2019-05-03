'use strict'

const createEngine = () => {
  const events = {}
  let seq = 0

  /**
   * Load entity events.
   *
   * @param {String|Number} id
   * @return {Promise}
   * @public
   */

  const load = id => {
    events[id] = events[id] || []
    return Promise.resolve(events[id])
  }

  /**
   * Save events.
   *
   * @param {Array} events
   * @return {Promise}
   * @public
   */

  const save = data => {
    if (!Array.isArray(data) || data.length === 0) {
      return Promise.resolve([])
    }

    return Promise.resolve(
      data.filter(event => {
        event.entity = event.entity || {}
        const id = event.entity.id || event.id
        if (!id) return false
        events[id] = events[id] || []
        event.version = seq++
        events[id] = [...events[id], event]
        return true
      })
    )
  }

  return { load, save }
}

module.exports = createEngine
