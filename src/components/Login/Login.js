import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@material-ui/core';
import React, { useContext } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import { handleGoogleSignIn, initializeLogInFramework } from './LoginManager';
import './Login.css';

const Login = () => {
    initializeLogInFramework();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const googleSignIn = () => {
        handleGoogleSignIn()
            .then(res => {
                setLoggedInUser(res);
                history.replace(from);
            });
    };

    return (
        <div className="login-body">

            <div className="form">
                <h2>Login</h2>
                <div className="input">
                    <div className="inputBox">
                        <Button className="btn" onClick={googleSignIn} variant="contained">
                            <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> Continue With Google
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;