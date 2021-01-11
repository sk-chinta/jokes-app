import { all, takeEvery, put, call } from 'redux-saga/effects'
import resources from '../../services/apiCaller'

import actions from './actions'

const getJokes = () => {
  return resources.privateGet(`jokes`).then(response => {    
    return response.data.body
  })
}

export function* GET_JOKES() {
  try {
    const jokes = yield call(getJokes)
    yield put({
      type: actions.GET_JOKES_SUCCESS,
      payload: { jokes },
    })
  } catch (err) {
    yield put({
      type: actions.GET_JOKES_FAILURE,
      payload: err,
    })
  }
}

const loadJokes = (jokes) => {
  return resources.privatePost(`jokes`, jokes).then(response => {    
    return response.data.body
  })
}

export function* LOAD_JOKES(payload) {
  const { jokes } = payload
  try {
    const jokesData = yield call(loadJokes, jokes)
    yield put({
      type: actions.LOAD_JOKES_SUCCESS,
      payload: { jokes: jokesData },
    })
  } catch (err) {
    yield put({
      type: actions.LOAD_JOKES_FAILURE,
      payload: err,
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_JOKES, GET_JOKES),
    takeEvery(actions.LOAD_JOKES, LOAD_JOKES)
  ])
}
