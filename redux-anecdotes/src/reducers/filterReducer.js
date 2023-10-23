const initialState = ''

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FILTER':
      return action.payload.searchString
    default:
      return state
  }
}

export const setFilter = (searchString) => {
  return {
    type: 'SET_FILTER',
    payload: { searchString }
  }
}

export default reducer