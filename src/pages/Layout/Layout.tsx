import {Outlet} from 'react-router-dom'
import {Container, Box} from '@mui/material'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function Layout() {
  return (
    <Box display='flex' flexDirection='column' minHeight='100vh'>
      <Header />
      <Container maxWidth='lg' sx={{flex: '1 1 auto', display: 'flex', justifyContent: 'top', flexDirection: 'column'}}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  )
}
