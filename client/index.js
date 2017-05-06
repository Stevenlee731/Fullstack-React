const React = require('react')
const ReactDOM = require('react-dom')
const store = require('./store')
window.store = store

const render = () => {
  const state = store.getState()
  console.log('state', state)
//   ReactDOM.render(
//   element,
//   container,
//   [callback]
// )
}

store.subscribe(render)
render()
