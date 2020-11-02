import React from 'react'
import theme from './theme'
import global from './global'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Proxima from 'proxima'

import Home from './pages/home'
import Layout from './pages/layout'
import Artboards from './pages/artboards'

const App = () => {
  return (
    <Router>
      <Proxima theme={theme} global={global}>
        <Switch>
        <Route path="/Artboards">
            <Artboards />
          </Route>
          <Route path="/Layout">
            <Layout />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Proxima>
    </Router>
  )
}

export default App
