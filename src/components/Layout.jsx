import React, { useState } from "react"
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap"
import Container from "reactstrap/es/Container"
import logo from "../logo.svg"

export default ( { children } ) => {
    const [isOpen, setIsOpen] = useState( false )
    const toggle = () => setIsOpen( !isOpen )

    return (
        <Container fluid>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">
                    <img src={ logo } width="50" height="50" alt="logo"/>
                    MERN-Stack Todo App
                </NavbarBrand>
                <NavbarToggler onClick={ toggle }/>
                <Collapse isOpen={ isOpen } navbar>
                    { getNav() }
                    <NavbarText>Simple Text</NavbarText>
                </Collapse>
            </Navbar>
            { children }
        </Container>
    )
}

const getNav = () => (
    <Nav className="mr-auto" navbar>
        <NavItem>
            <NavLink href="/">Todos</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="/create/">Create Todo</NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Options
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    Option 1
                </DropdownItem>
                <DropdownItem>
                    Option 2
                </DropdownItem>
                <DropdownItem divider/>
                <DropdownItem>
                    Reset
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    </Nav>
)
