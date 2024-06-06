import React from 'react';
import { Card, CardContent, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

function FilterPanel() {
   return (
      <Card>
         <CardContent>
            <Typography variant="h6">Filters</Typography>
            <FormGroup>
               <FormControlLabel control={<Checkbox />} label="Brand A" />
               <FormControlLabel control={<Checkbox />} label="Brand B" />
               <FormControlLabel control={<Checkbox />} label="Brand C" />
            </FormGroup>
         </CardContent>
      </Card>
   );
}

export default FilterPanel;