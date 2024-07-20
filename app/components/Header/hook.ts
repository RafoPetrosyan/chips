import * as React from 'react'
import { useSession } from 'next-auth/react'

interface ReturnType {
   isMenuOpen: boolean
   anchorElUser: HTMLElement | null
   anchorElNav: HTMLElement | null
   anchorEl: HTMLElement | null
   handleCloseNavMenu: () => void
   handleCloseUserMenu: () => void
   handleMenuClose: () => void
   handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
   handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
}

function useContainer(): ReturnType {
   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null)
   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
   const { data: session } = useSession()
   console.log(session, 'session ')

   const handleMenuClose = () => {
      setAnchorEl(null)
   }

   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElUser(event.currentTarget)
   }

   const handleCloseUserMenu = () => {
      setAnchorElUser(null)
   }

   const handleCloseNavMenu = () => {
      setAnchorElNav(null)
   }

   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorElNav(event.currentTarget)
   }

   return {
      isMenuOpen: Boolean(anchorEl),
      anchorElUser,
      anchorElNav,
      anchorEl,
      handleCloseUserMenu,
      handleOpenUserMenu,
      handleOpenNavMenu,
      handleMenuClose,
      handleCloseNavMenu,
   }
}

export default useContainer
