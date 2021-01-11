import { all, takeEvery, put, call } from 'redux-saga/effects'
import resources from '../../services/apiCaller'

import actions from './actions'

const getImages = () => {
  return resources.privateGet(`images`).then(response => {
    return response.data.body
  })
}

export function* GET_IMAGES() {
  try {
    const images = yield call(getImages)
    yield put({
      type: actions.GET_IMAGES_SUCCESS,
      payload: { images },
    })
  } catch (err) {
    yield put({
      type: actions.GET_IMAGES_FAILURE,
      payload: err,
    })
  }
}

const loadImages = (images) => {
  return resources.privatePost(`images`, images).then(response => {
    return response.data.body
  })
}

export function* LOAD_IMAGES(payload) {
  const {images} = payload
  try {
    const imagesData = yield call(loadImages, images)
    yield put({
      type: actions.LOAD_IMAGES_SUCCESS,
      payload: { images: imagesData },
    })
  } catch (err) {
    yield put({
      type: actions.LOAD_IMAGES_FAILURE,
      payload: err,
    })
  }
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_IMAGES, GET_IMAGES),
    takeEvery(actions.LOAD_IMAGES, LOAD_IMAGES)
  ])
}
