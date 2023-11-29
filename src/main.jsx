import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignUp from './components/SignUp.jsx'
import Login from './components/Login.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div>
    <Router>
      <Route exact path='/' component={App}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/login' component={Login}/>
    </Router>
  </div>,
)
