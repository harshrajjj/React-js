import { useState } from 'react'
import './App.css'
import UserContextProvider from './Context/userContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  return (
    /*yha hum usercontextprovider phly he use kie hai so humko jisko jisko v global variable ka access dena hai usko hum usercontextprovider m wrap kar k likhenge*/
    <UserContextProvider>
      <h1>React with chaii</h1>
       <Login/>
       <Profile/>
      
    </UserContextProvider>
  )
}

export default App
