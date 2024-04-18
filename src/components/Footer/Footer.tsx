import {Box, Container, Grid, Paper} from '@mui/material'
import {footerRoutes, Route} from '../../routes'
import {Link} from 'react-router-dom'
import AppStoreImg from '../../assets/imgs/footer/app_store_download.png'
import GooglePlayImg from '../../assets/imgs/footer/google_play_download.png'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

export default function Footer() {
  return (
    <Paper
      sx={{
        minWidth: '100%',
        position: 'relative',
        padding: '2.5rem 0',
        bottom: 0,
        left: 0,
        backgroundColor: '#444',
        borderTop: 1,
        borderColor: '#555',
      }}
      component='footer'
      square
    >
      <Container maxWidth='lg'>
        <Grid container justifyContent='center' spacing={1}>
          <Grid item>
            <Link to='/app-store'>
              <Box component='img' alt='app_store' src={AppStoreImg} />
            </Link>
          </Grid>
          <Grid item>
            <Link to='/google-play'>
              <Box component='img' alt='google_play' src={GooglePlayImg} />
            </Link>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          {footerRoutes.map((item: Route) => (
            <Link key={item.id} to={item.layout + item.path} style={{textDecoration: 'none', color: 'inherit'}}>
              <ListItemButton
                sx={{
                  margin: '10px 15px 0',
                  borderRadius: '4px',
                  padding: '8px 24px',
                  color: 'white',

                  '&:focus': {backgroundColor: '#00acc1'},
                  '&:active': {backgroundColor: '#00acc1'},
                }}
              >
                <ListItemText primary={item.name} primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}} />
              </ListItemButton>
            </Link>
          ))}
        </Grid>
      </Container>
    </Paper>
  )
}
