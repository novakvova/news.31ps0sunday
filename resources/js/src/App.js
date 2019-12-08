import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Header from './Header'

class App extends Component {
  render () {
    return (
      <h1>Hello Peter</h1>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))