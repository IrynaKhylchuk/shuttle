import { Outlet } from 'react-router-dom'

import Box from '@mui/material/Box'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Layout() {
  return (
    <Box>
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
      <Footer />
    </Box>
  )
}
