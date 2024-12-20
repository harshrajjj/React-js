import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
    // react m style add karne ka tareeka hai ye ki hum tag k andar style likhte hai and uske undar jo v value lihha hai usko humko double curly braces m likhna hota hai and humko bahar ka kux v "js" ka vlue dalna hai isme ko humko usko curly braces m likne ka jaroorat nahi hai bcz yha already do curly braces lge hue hai  
      <div className='w-screen h-screen duration-200' style = {{backgroundColor: color}}>
        
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 '>
          <button  className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => {setColor("red")}} style = {{backgroundColor:"red"}}>Red</button>
          <button  className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => {setColor("green")}} style = {{backgroundColor:"green"}}>Green</button>
          <button  className='outline-none px-4 py-1 rounded-full text-white shadow-sm' onClick={() => {setColor("blue")}} style = {{backgroundColor:"Blue"}}>Blue</button>
          <button  className='outline-none px-4 py-1 rounded-full text-grey-500 shadow-sm' onClick={() => {setColor("#B57EDC")}} style = {{backgroundColor:"#B57EDC"}}>lavender</button>
        </div> 
      </div>

      </div>
  )
}

export default App
