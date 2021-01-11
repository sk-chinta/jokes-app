const actions = {
  GET_JOKES: 'GET_JOKES',
  GET_JOKES_SUCCESS: 'GET_JOKES_SUCCESS',
  GET_JOKES_FAILURE: 'GET_JOKES_FAILURE',

  LOAD_JOKES: 'LOAD_JOKES',
  LOAD_JOKES_SUCCESS: 'LOAD_JOKES_SUCCESS',
  LOAD_JOKES_FAILURE: 'LOAD_JOKES_FAILURE',
}

export default actions

export const getJokes = () => {
  return {
    type: actions.GET_JOKES
  }
}

export const loadJokes = () => {
  return {
    type: actions.LOAD_JOKES    
  }
}
