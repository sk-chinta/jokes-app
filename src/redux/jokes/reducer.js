import actions from './actions'

const initialState = {
  jokes: [],
  loading: false
}

export default function imagesReducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_JOKES:
      return {
        ...state,
        loading: true
      }
    case actions.GET_JOKES_SUCCESS: {
      const { jokes } = action.payload
      return {
        ...state,
        jokes,
        loading: false
      }
    }
    case actions.GET_JOKES_FAILURE:
      return {
        ...state,
        loading: false
      }

    case actions.LOAD_JOKES:
      return {
        ...state,
        loading: true
      }
    case actions.LOAD_JOKES_SUCCESS: {
      const { jokes } = action.payload
      return {
        ...state,
        jokes,
        loading: false
      }
    }
    case actions.LOAD_JOKES_FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
