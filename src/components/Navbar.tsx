// import PropTypes from 'prop-types';
import {DropdownButton, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import {useState} from "react";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import DropdownItem from "react-bootstrap/DropdownItem";
import "../css/navbar.css";
import "@fortawesome/fontawesome-free/css/all.min.css"
import { auth } from "../firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';

function Navigation(props)
{
    const [isAuth, setAuth] = useState(false);

    return (

        <Navbar bg="light" expand="md">
            <div className={"container-fluid"}>
                <Navbar.Brand href=""><Link to="/"><i className="fas fa-university"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto d-flex">
                        <Nav.Link><Link to="/" style={{color: 'inherit', textDecoration : 'inherit'}}>Home</Link></Nav.Link>
                        <NavDropdown title="Find" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/dorms">Dorms</NavDropdown.Item>
                            <NavDropdown.Item href="/search">Dorm-mates</NavDropdown.Item>
                            <NavDropdown.Item href="/colleges">Colleges</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search Roommates" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link>
                            <DropdownButton className="mr-5" title="Account" variant="outline-primary">
                                {isAuth ?
                                    <React.Fragment>
                                        <DropdownItem>Profile</DropdownItem>
                                        <DropdownItem onClick={() => {
                                            auth.signOut().then(() => {
                                                setAuth(!isAuth);
                                            });
                                        }}>Logout</DropdownItem>
                                    </React.Fragment>
                                    :
                                    <React.Fragment>
                                        <DropdownItem href="/login" onClick={() => {
                                            window.location.href = "/login"
                                        }}>Login</DropdownItem>
                                        <DropdownItem href="/register">Register</DropdownItem>
                                    </React.Fragment>
                                }

                            </DropdownButton>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default Navigation;
