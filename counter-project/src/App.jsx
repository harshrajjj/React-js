import { useState } from 'react'
import './App.css'

function App() {
 // hook
  let [counter,setCounter] = useState(5)  // counter ka value hum initial 5 rakhe hai and usko useState m dale hai jo ki hum import kie hai react se so humko jo use karna hai variable hum usko asy he likhenge taki wo browser pe real time p update ho jai nd setCounter se hum hum uss value jo ki counter hai usko update krenge 


  //let counter = 5;

  const addValue = () => {
    console.log("clicked",counter);
    if(counter!=20) counter++;
    setCounter(counter) 
  }
  const removevalue = () => {
    console.log("clicked",counter);
    if(counter!=0){counter--;}
    setCounter(counter) 
  }

  return (
    <>
      <h1>chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br/>
      <button onClick={removevalue}>Remove value</button>
    </>
  )
}

export default App
