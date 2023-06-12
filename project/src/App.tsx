import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {publicRoutes} from './routes/Router'
import Defaulayout from './Component/Layout/Defaulayout/Defaulayout'
import { Fragment } from 'react'


function App() {
  
  return (
 
 <Router>
 <div className='App'>
    <Routes>
       {publicRoutes.map((r, index) =>{
          const Page = r.component;
          
        let Layout = Defaulayout
          if (r.layout ) {
            Layout = r.layout
          } else if (r.layout === null){
            Layout === Fragment
          }
       return <Route key={index}
                      path ={r.path}
                      element ={
                      <Layout>
                          <Page/>
                      </Layout>} />
       })}
    </Routes>
    </div>
    </Router>
    
  )
}

export default App
