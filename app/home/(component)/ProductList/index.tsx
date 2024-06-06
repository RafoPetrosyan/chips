import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'

const products = [
   { id: 1, name: 'Chip A', description: 'Tasty Chip A', image: '/path/to/imageA.jpg' },
   { id: 2, name: 'Chip B', description: 'Tasty Chip B', image: '/path/to/imageB.jpg' },
   // Add more products as needed
]

function ProductList() {
   return (
      <Grid container spacing={3}>
         {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
               <Card>
                  <CardMedia
                     component="img"
                     alt={product.name}
                     height="140"
                     image={product.image}
                     title={product.name}
                  />
                  <CardContent>
                     <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                     </Typography>
                     <Typography variant="body2" color="textSecondary" component="p">
                        {product.description}
                     </Typography>
                  </CardContent>
               </Card>
            </Grid>
         ))}
      </Grid>
   )
}

export default ProductList
