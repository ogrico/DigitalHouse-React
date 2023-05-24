import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Categories from './components/categories/categories'

function App() {

  return (
    <Router>

      <Routes path="/categories" component={Categories} />

    </Router>
  )
}

export default App
