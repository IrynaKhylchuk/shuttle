import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

//pages
import Layout from './pages/Layout/Layout'
import NotFound from './pages/NotFound/NotFound'
import LogIn from './pages/LogIn/LogIn'

function App() {
   return (
      <Router>
         <Routes>
            <Route path='/home' element={<Layout />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Router>
   )
}

export default App
