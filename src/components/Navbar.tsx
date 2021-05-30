import PropTypes from 'prop-types';
import {DropdownButton, Navbar} from "react-bootstrap";
import Button from "react-bootstrap/Button"
import FormControl from "react-bootstrap/FormControl"
import {useState} from "react";
import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import DropdownItem from "react-bootstrap/DropdownItem";

function Navigation(props)
{
    const [isAuth, setAuth] = useState(false);

    //brb gon do snake
    //lol wtf wot
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">DormUp</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Dorms</Nav.Link>
                    <NavDropdown title="Lookup" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Dorms</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Dorm mates</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Colleges</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search Roommates" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Nav className="ml-auto">
                    <Nav.Link>
                        <DropdownButton title="Account" variant="outline-primary">
                            {isAuth ?
                                <React.Fragment>
                                    <DropdownItem>My info</DropdownItem>
                                    <DropdownItem>Profile</DropdownItem>
                                </React.Fragment>
                                :
                                <React.Fragment>
                                    <DropdownItem>Login</DropdownItem>
                                    <DropdownItem>Register</DropdownItem>
                                </React.Fragment>
                            }

                        </DropdownButton>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;
