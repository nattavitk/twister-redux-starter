import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { ReduxRouter, reduxReactRouter } from 'redux-router'
import { createHistory } from 'history'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import customStyle from './styles/custom.scss'
import mainStyle from './styles/main.scss'
import routes from './routes'

const store = createStore(rootReducer, compose(applyMiddleware(thunk), reduxReactRouter({ routes, createHistory })))

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
