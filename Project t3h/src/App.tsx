
import './App.css'
import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Page/Login'
import Register from './Page/Register'
import Hompage from './Page/Hompage'
import { Children } from 'react'



// function page() {
//   return (
//   <div>
//     <ul>
//         <li><Link to={"/login"}></Link></li>
//     </ul>
//     {/* <section>
//       <Outlet/>
//     </section> */}
// </div>
//   )
// }

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
