import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const Login = () => 
{
    return (
        <div>
            <h1>Sign in CSIE@CGU</h1><br/>
            <TextField label = "Email Address" variant = "outlined" required></TextField><br/><br/>
            <TextField label = "Password" type = "password" variant = "outlined" required></TextField><br/><br/>
            <Button variant = "contained">sign in</Button>
        </div>
    );
}
 
export default Login;
