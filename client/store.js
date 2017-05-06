const { createStore, combineReducers } = require('redux')

const initialState = []

function notes(state = initialState, action) {
  return state
}

const reducer = combineReducers({
  // reducers
})

const store = createStore(reducer)

module.exports = store
