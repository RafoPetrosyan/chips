'use client'
import * as React from 'react'
import { alpha, styled } from '@mui/material/styles'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import { Container } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import InputBase from '@mui/material/InputBase'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import useContainer from './hook'

const settings = ['Profile', 'Account', 'Dashboard', 'Logout']
const pages = ['Products', 'Pricing', 'Blog']

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(2),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
   },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}))

export default function Header() {
   const {
      isMenuOpen,
      anchorElUser,
      anchorElNav,
      anchorEl,
      handleCloseUserMenu,
      handleOpenUserMenu,
      handleOpenNavMenu,
      handleMenuClose,
      handleCloseNavMenu,
   } = useContainer()

   const menuId = 'primary-search-account-menu'
   const renderMenu = (
      <Menu
         anchorEl={anchorEl}
         anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
         id={menuId}
         keepMounted
         transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
         }}
         open={isMenuOpen}
         onClose={handleMenuClose}
      >
         <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
         <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
   )

   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Container maxWidth={'lg'}>
               <Toolbar style={{ paddingLeft: 0, paddingRight: 0 }}>
                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
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
                           display: { xs: 'block', md: 'none' },
                        }}
                     >
                        {pages.map((page) => (
                           <MenuItem key={page} onClick={handleCloseNavMenu}>
                              <Typography textAlign="center">{page}</Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
                  <Typography
                     component="a"
                     href="#app-bar-with-responsive-menu"
                     variant="h6"
                     noWrap
                     sx={{ textAlign: 'left' }}
                  >
                     Chips
                  </Typography>
                  <Box
                     sx={{ flexGrow: 1, marginLeft: '25px', display: { xs: 'none', md: 'flex' } }}
                  >
                     {pages.map((page) => (
                        <Button
                           key={page}
                           onClick={handleCloseNavMenu}
                           sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                           {page}
                        </Button>
                     ))}
                  </Box>
                  <Box sx={{ flexGrow: 1 }} />
                  <Search sx={{ display: { xs: 'none', sm: 'block' } }}>
                     <SearchIconWrapper>
                        <SearchIcon />
                     </SearchIconWrapper>
                     <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                     />
                  </Search>
                  <Box sx={{ flexGrow: 0 }}>
                     <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                           <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                     </Tooltip>
                     <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                     >
                        {settings.map((setting) => (
                           <MenuItem key={setting} onClick={handleCloseUserMenu}>
                              <Typography textAlign="center">{setting}</Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
               </Toolbar>
            </Container>
         </AppBar>
         {renderMenu}
      </Box>
   )
}
