import createEngine from '../src/index'

let engine = createEngine()
let testEvents = [
  { entity: { id: '1' }, type: 'created', payload: { a: 1 } },
  { entity: { id: '1' }, type: 'updated', payload: { a: 2 } },
  { entity: { id: '1' }, type: 'tested', payload: { a: 3 } },
  { entity: { id: '2' }, type: 'created', payload: { a: 1 } },
  { entity: { id: '3' }, type: 'created', payload: { a: 2 } },
  { entity: { id: '3' }, type: 'created', payload: { a: 3 } }
]

describe('advent-memory', () => {

  it('should be a function', () => {
    createEngine.should.be.a.Function
  })

  it('should return an object', () => {
    engine.should.be.an.Object
  })

  it('should export the right methods', () => {
    engine.save.should.be.a.Function
    engine.load.should.be.a.Function
  })

  describe('save', () => {

    it('should return a promise', () => {
      engine.save([]).then.should.be.a.Function
    })

    it('should save events', (done) => {
      engine.save(testEvents).then(events => {
        events.length.should.eql(testEvents.length)
        events.should.eql(testEvents)
        done()
      }).catch(done)
    })

    it('should not save events with missing entity', (done) => {
      const wrongEvents = [
        { type: 'updated', payload: { a: 2 } },
        { type: 'updated', payload: { a: 2 } }
      ]
      engine.save(wrongEvents).then(events => {
        events.length.should.eql(0)
        events.should.eql([])
        done()
      }).catch(done)
    })
  })

  describe('load', () => {

    it('should return a promise', () => {
      engine.load([]).then.should.be.a.Function
    })

    it('should load events by id', (done) => {
      let id = '1'
      engine.load(id).then(events => {
        events.length.should.eql(3)
        events.should.eql(testEvents.filter(e => e.entity.id === id))
        done()
      }).catch(done)
    })

  })

})
