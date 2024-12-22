import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import { Route } from 'react-router'
import User from './User/User.jsx'
import Github,{githubinfoLoader} from './components/Github.jsx'


// routing

// createBrowser m sara path likhte hai ye ek object ka array leta hia jisme phela object m main path likh hota hai then uske baad alag alag path define karte hai jaise yha phela element hai "/" uske andar home about us ye sab ka nesting ho rha hai to hum usko asy likhte hai the  uske children m object ka array bnate hai hur ek object m alag alag path define hai 
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<Route/>,
//     children:[
//       {
//         path:"",
//         element:<Home/>
//       },
//       {
//         path:"about",
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       },
//     ]
//   }
// ])

// method 2

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Layout/>} >// kon sa element yha render hoga yha hum bta die h isko
      <Route path="" element={<Home/>} />// nesting  // outlet
      <Route path="about" element={<About/>} />// nesting hai ye "/ k aandar kyu ki isko self closing dale hai if humko iske andar v routing karna hai to hum isko self closing nahi krenge then iske andar aur route likh denge"
      <Route path="contact" element={<Contact/>} />// nesting
      <Route path="user/:id" element={<User/>} />// nesting
      <Route 
      path="github" 
      element={<Github/>} 
      loader= {githubinfoLoader}
      />
      </Route>
    )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
