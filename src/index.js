import React from 'react'
import {render} from 'react-dom'
import App from './App.jsx'
import {Provider} from 'react-redux'
import store from './data/store'
import {BrowserRouter} from 'react-router-dom'

require('dotenv').config({path: '../.env'})

render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
  ,
  document.getElementById('root')
)