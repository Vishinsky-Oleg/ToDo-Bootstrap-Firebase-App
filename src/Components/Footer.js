import React from "react";
import { Jumbotron } from "react-bootstrap";

const Footer = () => {
    return (
        <Jumbotron
            sticky="bottom"
            fluid
            className="mt-3 mb-0 p-3 bg-dark text-white-50">
            <h3>Developed by Vishinsky Oleg</h3>
        </Jumbotron>
    );
};

export default Footer;
