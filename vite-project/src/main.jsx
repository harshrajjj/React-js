import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// custom react element  by property of react thatis createElement which first take tag name and then object of properties and then inner text/html uske baad humko jo v "js" inject karna hota hai wo likhte hai  

const anotheruser = " chai aur react "

//  ye babble (transpiler ) inject karta hai andar
const reactElement = React.createElement(
  'a',
  {href: "https://google.com",target:"_blank"},
  "click Me To Visit Google",
  anotheruser
  )


  // hum yha se direct return karwa k v use kar sakte hai 
  function MyApp() {
    return (
      <div>
        <h1>Custom App | Chai</h1>
      </div>
    );
  }


  const anotherElement = (
    <a href = "https://google.com" target = "_blank">Visit Google</a>
  )


createRoot(document.getElementById('root')).render(
  // reactElement // can passed here and its work bcz at last react convert all the tags into tree form and have already givcen tree form which make one step less for react

  // <MyApp />  // asy v use kar sakte hai yhi se 

  //anotherElement  //asy v use kar sakte hai direct element daal  k jo ek tag return kar rha hai

  <App />
)
