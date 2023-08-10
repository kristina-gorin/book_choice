import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from "react-bootstrap/Container";
import { useNavigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';



function Welcome(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/choice")
    
    }
    return <div>
        <Container>
            <h1>Welcome!</h1>
            <Carousel style={{ maxHeight: '700px' }}>
                <Carousel.Item style={{ maxHeight: '600px' }}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ maxHeight: '600px' }}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1520467795206-62e33627e6ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item style={{ maxHeight: '600px' }}>
                    <img
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1596890187042-5240d0a9bb6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <Container>
            <h4>Get ready to embark on another exciting literary journey with our book club!
                 It's that time again when we come together to choose our next month's reading selection.
                  Your input is invaluable in shaping our reading list, and we invite you to prepare for our upcoming
                   discussion by considering a book that has piqued your interest. Turn to the next page to find more
                    details on how you can be a part of the decision-making process. Your choice could lead us to discover
                     a captivating story we might have otherwise missed. We can't wait to hear your suggestions and embark
                     on yet another wonderful reading adventure together!</h4></Container>
            <Button onClick={handleClick}>Let's Go!</Button>
        </Container>
    </div>
}

export default Welcome;