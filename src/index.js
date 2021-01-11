import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import reportWebVitals from './reportWebVitals';

import { createHashHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { logger } from 'redux-logger'

import { persistStore, persistReducer, createMigrate } from 'redux-persist'
import { PersistGate } from 'redux-persist/es/integration/react'
import reducers from './redux/reducers'

import createSagaMiddleware from 'redux-saga'
import { routerMiddleware } from 'connected-react-router'
import storage from 'redux-persist/es/storage'
import sagas from './redux/sagas'
// import Localization from './localization'

import Router from './router'
import * as serviceWorker from './serviceWorker'
// import Jokes from './pages/jokes';

// middlewared
const history = createHashHistory()
const sagaMiddleware = createSagaMiddleware()
const routeMiddleware = routerMiddleware(history)
const middlewares = [sagaMiddleware, routeMiddleware]
// const middlewares = [sagaMiddleware]

if (
  process.env.REACT_APP_ENVIRONMENT === 'development'
) {
  middlewares.push(logger)
}

const migrations = {
  0: state => {
    // migration clear out device state
    return {
      ...state,
      device: undefined,
    }
  },
  1: state => {
    // migration to keep only device state
    return {
      device: state.device,
    }
  },
}

const persistConfig = {
  key: 'primary',
  version: 0,
  storage,
  migrate: createMigrate(migrations, { debug: true }),
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = createStore(persistedReducer, compose(applyMiddleware(...middlewares)))
sagaMiddleware.run(sagas)

const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>      
      <Router history={history} />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
export { store, history }
