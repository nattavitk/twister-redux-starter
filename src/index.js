import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import rootReducer from './reducers'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import routes from './routes'
import { loadState, saveState } from './utils/LocalStorage'

const preloadedState = loadState()

const store = createStore(
  rootReducer,
  preloadedState,
  compose(
    applyMiddleware(thunk),
    reduxReactRouter({ routes, createHistory })
  )
)

store.subscribe(throttle(() => {
  saveState({
    auth: store.getState().auth,
  })
}, 1000))

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers').default

    store.replaceReducer(nextRootReducer)
  })
}

const App = (
  <Provider store={store}>
    <ReduxRouter>
      {routes}
    </ReduxRouter>
  </Provider>
)
ReactDOM.render(App, document.getElementById('react-root'))
