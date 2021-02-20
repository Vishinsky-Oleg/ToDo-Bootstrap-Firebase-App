import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/Nav";

const Container = (props) => {
    return (
        <div
            className="d-flex flex-column justify-content-between"
            style={{ minHeight: "100vh" }}>
            <NavBar />
            <div style={{ flexGrow: 1, marginTop: 20 }}>{props.children}</div>
            <Footer />
        </div>
    );
};

export default Container;
