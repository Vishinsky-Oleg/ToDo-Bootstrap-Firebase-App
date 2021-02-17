import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingSpinner = (props) => (
    <>
        <Spinner animation="border" variant={props.priority} />
        <span className={`text-${props.priority}`}>Loading...</span>
    </>
);

export default LoadingSpinner;
