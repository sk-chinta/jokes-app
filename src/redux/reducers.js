import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { createHashHistory } from 'history';
import images from "./images/reducer";
import jokes from "./jokes/reducer";

const history = createHashHistory()

const appReducer = combineReducers({
  router: connectRouter(history),
  images,
  jokes
})

const rootReducer = (state, action) => {  
  return appReducer(state, action)
}

export default rootReducer
