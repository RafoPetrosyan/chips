import * as React from 'react'

interface ReturnType {
   anchorElUser: HTMLElement | null
   anchorElNav: HTMLElement | null
   handleCloseNavMenu: () => void
   handleCloseUserMenu: () => void
   handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void
   handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void
}

function useContainer(): ReturnType {
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

   return {
      anchorElUser,
      anchorElNav,
      handleCloseNavMenu,
      handleCloseUserMenu,
      handleOpenUserMenu,
      handleOpenNavMenu,
   }
}

export default useContainer
