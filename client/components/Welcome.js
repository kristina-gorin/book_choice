import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router";


function Welcome(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/choice")
    
    }
    return <div>
        <Container>
            <h1>Welcome!</h1>
            <h3>Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
                mollit anim id est laborum.</h3>
            <Button onClick={handleClick}>Let's Go!</Button>
        </Container>
    </div>
}

export default Welcome;