import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const Products = () => {
  const { productList } = useContext(ProductContext);

  return (
    <Grid container spacing={2} sx={{ padding: 4 }}>
      {productList.map(item => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Card>
            <CardContent>
              <Typography variant="h6">{item.title}</Typography>
              <Typography>${item.price}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
