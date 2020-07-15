import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import '../App.css';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: '60px',
    },
    title: {
        flexGrow: 1,
        textAlign: 'left',
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
          },
    },
    link: {
        color: '#fff',
        "&:hover": {
            color: 'black',
            backgroundColor: 'white',
            bordorRadius: '50px',
        },
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className="header">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Zubair Shoe Store
                    </Typography>
                        <Link to="/"><Button className={classes.link} color="inherit">Home</Button></Link>
                        <Link to="/product"><Button className={classes.link} color="inherit">Product</Button></Link>
                        <Link to="/about"><Button className={classes.link} color="inherit">About</Button></Link>
                    </Toolbar>
                </AppBar>
            </div>
        </div>
    );
}
