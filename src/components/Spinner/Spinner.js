import { CircularProgress, Grid } from '@material-ui/core';
import React from 'react';

const Spinner = () => {
    return (

        <Grid container spacing={5}>
            <Grid item container />
            <Grid item sm={4} />
            <Grid item sm={4}>
            <CircularProgress></CircularProgress>
            </Grid>
            <Grid item sm={4} />
        </Grid>
        
        
    );
};

export default Spinner;