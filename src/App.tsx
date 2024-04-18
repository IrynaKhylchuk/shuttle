import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Layout from './pages/Layout/Layout'
import NotFound from './pages/NotFound/NotFound'
import LogIn from './pages/LogIn/LogIn'
import SignUp from './pages/SignUp/SignUp'

import { routes } from './routes'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<NotFound />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Layout />}>
         {
            routes
               .filter(route => route.layout === '/home')
               .map(route => (
                  <Route 
                     key={route.id}
                     path={route.layout + route.path}
                     element={route.component}
                  />
               ))
         }
        </Route>
      </Routes>
    </Router>
  )
}

export default App
