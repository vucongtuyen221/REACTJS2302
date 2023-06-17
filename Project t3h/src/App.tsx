
import './App.css'

import { RouterProvider, createBrowserRouter  } from 'react-router-dom'
import Login from './Page/Layout/Login/Login'
import Register from './Page/Layout/Resgiter/Register'
import Hompage from './Page/Layout/Homepage/Hompage'
import Search from './Page/Layout/Components/Search/Search/Search'






const login  = createBrowserRouter([
 {
  path: '/',
  element: <Hompage/>,
  children: [
    {
    path: '/login',
    element: <Login/>
    },
    {
      path: '/register',
      element: <Register/>
    }
  ]
 },
 
])



function App() {
  
 return(
  <>
 <RouterProvider router ={login}/>
 
 
 
 </>
 )
}




export default  App
