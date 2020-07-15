import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '40px',
    },
    paper: {
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: '0 0 10px grey',
        padding: 0,
    },
    btn: {
        color: '#fff',
        backgroundColor: '#3f51b5',
        padding: '10px 20px',
        borderRadius: '8px',
        "&:hover": {
            color: '#000',
            backgroundColor: 'aqua',
        }
    },
}));

export default function HomeCards() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <Link to="/product"><img className="card-img" src="https://cdn.shopify.com/s/files/1/0316/8249/4604/files/Woman-Tile_1_720x.jpg?v=1582116624" alt="Collection-img" /></Link>
                    </Paper>
                    <h1>Women Collection</h1>
                    <Link to="/product"><Button className={classes.btn} color="inherit">Shop Now</Button></Link>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                    <Link to="/product"><img className="card-img" src="https://cdn.shopify.com/s/files/1/0316/8249/4604/files/Men-Tile-00_1_720x.jpg?v=1582116603" alt="Collection-img2" /></Link>
                    </Paper>
                    <h1>Men Collection</h1>
                    <Link to="/product"><Button className={classes.btn} color="inherit">Shop Now</Button></Link>
                </Grid>
            </Grid>
        </div>
    );
}
