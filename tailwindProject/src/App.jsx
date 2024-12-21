import { useState } from 'react'
import './App.css'
import Card from "./component/Card"

function App() {
  const [count, setCount] = useState(0)
   let myobject = {
    username:"harsh",
    age:21
   }

   let newArr = [1,2,3]
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card   someObject={myobject} />
      <br/>
      <Card/>
    </>
  )
}

export default App
