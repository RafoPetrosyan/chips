'use client'
import { Poppins } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { green } from '@mui/material/colors'

const poppins = Poppins({
   weight: ['300', '400', '500', '700'],
   subsets: ['latin'],
   display: 'swap',
})

const theme = createTheme({
   typography: {
      fontFamily: poppins.style.fontFamily,
   },
   palette: {
      primary: {
         main: '#009688',
      },
      secondary: {
         main: green[500],
      },
   },
   breakpoints: {
      values: {
         xs: 0,
         sm: 600,
         md: 900,
         lg: 1200,
         xl: 1536,
      },
   },
})

export default theme
