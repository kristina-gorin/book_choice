import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

function ThankYou(){
    return <div>
        <Container>
            <h1>Thank you for your selection!</h1>
            <h3>We can't wait to see you in book club next month</h3>
            <h6>Questions? Concerns? <a href="mailto:your@email.com">Email us</a></h6>
        </Container>
    </div>
}

export default ThankYou;