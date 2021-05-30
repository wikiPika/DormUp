import React from "react";
import PropTypes from 'prop-types';
import Navigation from "./Navbar";
import Footer from "./Footer";

function Layout(props) {

<<<<<<< HEAD
=======


>>>>>>> 6efbbf60ee80010ad0d23f000b2ded136c5836f2
    return (
        <React.Fragment>
            <Navigation/>
            {props.children}
            <Footer/>
        </React.Fragment>);
}

Layout.propTypes = {
    children: PropTypes.element.isRequired,
}

export default Layout;

