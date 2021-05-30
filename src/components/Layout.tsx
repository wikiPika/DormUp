import React from "react";
import PropTypes from "prop-types";
import Navigation from "./Navbar";
import Footer from "./Footer";

function Layout(props) {
    return (
        <React.Fragment>
            <Navigation />
            {props.children}
            <Footer />
        </React.Fragment>
    );
}

Layout.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element.isRequired),
};

export default Layout;
