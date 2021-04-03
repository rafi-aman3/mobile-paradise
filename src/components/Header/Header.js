import React, { useContext } from 'react';
import { AppBar, Button, CssBaseline, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#32a3b1'
  }
}));

const Header = () => {
  const classes = useStyles();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (

    <div className={classes.root}>
      <CssBaseline></CssBaseline>
      <AppBar className={classes.appBar} color="transparent" position="static">
        <Toolbar>
          <Typography style={{ color: '#32a3b1' }} variant="h6" className={classes.title}>
            Mobile Paradise
          </Typography>
          <Button>
            <Link className={classes.link} to="/">Home</Link>
          </Button>
          <Button>
            <Link className={classes.link} to="/order">Order</Link>
          </Button>
          <Button>
            <Link className={classes.link} to="/admin">Admin</Link>
          </Button>
          <Button>
            <Link className={classes.link} to="/deals">Deals</Link>
          </Button>
          {
            loggedInUser.name ?
                <h5 className={classes.link}>{(loggedInUser.name)}</h5>              
              :
              <Button variant="contained" color="primary">
                <Link style={{ textDecoration: 'none', color: 'whitesmoke' }} to="/login">Login</Link>
              </Button>
          }
        </Toolbar>
      </AppBar>
    </div>

  );
};

export default Header;