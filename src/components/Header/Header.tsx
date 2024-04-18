import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Link from '@mui/material/Link'

import {routes, Route} from '../../routes'

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
      <AppBar
        position='static'
        sx={{
          minWidth: '100%',
          top: 0,
          backgroundColor: '#444'
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <Typography
              variant='h6'
              noWrap
              component='a'
              href='/home'
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'Arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
                alignItems: 'center',
                fontSize: 20,
                lineHeight: '20px',
              }}
            >
              <Box
                mr='5px'
                component='img'
                sx={{
                  height: 35,
                  width: 35,
                }}
                alt='Logo'
                src='../../../public/favicon.png'
              />
              SHUTTLE
            </Typography>

            {/* responsive */}
            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: {xs: 'block', md: 'none'},
                }}
              >
                {routes.map((item: Route) => (
                  <MenuItem key={item.id} onClick={handleCloseNavMenu}>
                    <Typography textAlign='center'>{item.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box
              mr='30px'
              sx={{
                flexGrow: 1,
                display: {xs: 'none', md: 'flex'},
                justifyContent: 'right',
              }}
            >
              {routes.map((item: Route) => (
                <Link
                  variant='body2'
                  key={item.name}
                  href={item.layout + item.path}
                  underline='none'
                  onClick={handleCloseNavMenu}
                  fontFamily='Arial'
                  fontWeight='700'
                  sx={{
                    margin: 2,
                    color: 'white',
                    display: 'block',
                    transition: 'color 0.3s ease',

                    '&:hover': {
                      color: '#ffa726',
                    },

                    '&:active': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: {xs: 1, md: 0},
                textAlign: 'right',
                display: {xs: 'none', sm: 'block'},
              }}
            >
              <Button
                variant='outlined'
                style={{
                  color: 'white',
                  borderColor: '#909090',
                  marginRight: 14,
                }}
              >
                Log In
              </Button>
              <Button color='warning' variant='contained'>
                Sign Up
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}