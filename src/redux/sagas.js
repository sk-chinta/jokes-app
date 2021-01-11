import { all } from 'redux-saga/effects'
import images from './images/saga'
import jokes from './jokes/saga'

export default function* rootSaga() {
    yield all([
        images(),
        jokes()
    ])
}
