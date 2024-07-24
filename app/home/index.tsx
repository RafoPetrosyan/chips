import React from 'react'
import { Container } from '@mui/material'
import MainContent from './MainContent'
import { getCurrentUser } from '@/libs/session'
import './styles.scss'

const Home = async () => {
   // const session = await getCurrentUser()
   // console.log(session, 444444)
   return (
      <div className="home-page">
         <Container maxWidth={'lg'} className="container-style">
            <MainContent />
            {/*<CssBaseline />*/}
            {/*<Grid container spacing={3}>*/}
            {/*   <Grid item xs={12} sm={4} md={3}>*/}
            {/*      <FilterPanel />*/}
            {/*   </Grid>*/}
            {/*   <Grid item xs={12} sm={8} md={9}>*/}
            {/*      <ProductList />*/}
            {/*   </Grid>*/}
            {/*</Grid>*/}
         </Container>
      </div>
   )
}

export default Home
