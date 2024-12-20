import { useState } from 'react'
import './App.css'

function App() {
 // hook
  let [counter,setCounter] = useState(5)  // counter ka value hum initial 5 rakhe hai and usko useState m dale hai jo ki hum import kie hai react se so humko jo use karna hai variable hum usko asy he likhenge taki wo browser pe real time p update ho jai nd setCounter se hum hum uss value jo ki counter hai usko update krenge 


  //let counter = 5;

  const addValue = () => {
    // console.log("clicked",counter);
    // if(counter!=20) counter++;
    // setCounter(counter+1) 
    // setCounter(counter+1) 
    // setCounter(counter+1) // inn sab ko mila k ui m bss counter +1 he hoga bcz ye pura ek batch bnn jaiga nd java script dekhega are yha to ek he kaam ho rha hai
    // setCounter(counter+1) 
    // setCounter(counter+1) 
    // setCounter(counter+1) 

    // setCounter((prevCounter) => prevCounter+1) 
    // setCounter((prevCounter) => prevCounter+1) // yha call back hua h to yha counter ek saath jitna call back h utna badhega kyu ki yha previous state le rhe h to ek se prevCount badhega then dusre k pas jaiga yha ek bunch nhi ho rha 
    // setCounter((prevCounter) => prevCounter+1) 
    // setCounter((prevCounter) => prevCounter+1) 

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
