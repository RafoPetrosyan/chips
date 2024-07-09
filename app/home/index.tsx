import React from 'react'
import { Container } from '@mui/material'
import MainContent from './MainContent'
import './styles.scss'

const Home = () => {
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
