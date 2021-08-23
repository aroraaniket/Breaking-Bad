import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import CharacterDetail from './components/characterDetail/CharacterDetail'
import {  HashRouter,Route, Switch ,Redirect} from 'react-router-dom';
import './App.css'

const App = () => {
  

  return (
    <HashRouter >
    <div className='container'>
   <Route exact path="/" component={Header}/>
  
    <Route exact path="/" component={CharacterGrid}  />
   <Route path="/charcterdetail/:name/:id" component={CharacterDetail}  />
    </div>
    </HashRouter>
  )
}

export default App
