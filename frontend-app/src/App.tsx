import {createBrowserRouter, Outlet, Link, RouterProvider} from 'react-router-dom';
import Page404 from './pages/result/Page404';
import DefaultLayout from './layout/DefaultLayout';
import LoginPage from './pages/login/LoginPage';
import AccountProfile from './app-components/account-profile/AccountProfile';
import browserRouters from './router/router';




const router = createBrowserRouter(browserRouters)
//   { path: '/login',
//   element: <LoginPage/>,
//   errorElement: 'LoginPage!'   
// },
// {
//   path: '/',
//   element: <DefaultLayout />,
//   errorElement: <Page404 />,
//   children: [
//     { path: '/contact',
//     element: <h3>Contact</h3>
//   },
//   { path: '/about',
//   element: <h3>About</h3>
// },
// {
//   path: '/',
//   element: <AccountProfile/>
// },
    
//   ]
// },
// ])
function App() {
 
  return (
    
    <RouterProvider router={router}/>
  )
}

export default App
