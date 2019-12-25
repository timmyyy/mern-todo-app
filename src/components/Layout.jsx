import React, { useState } from "react"
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from "reactstrap"
import Container from "reactstrap/es/Container"
import logo from "../logo.svg"

export default ( { children } ) => {
    const [collapsed, setCollapsed] = useState( true )
    const toggleNavbar = () => setCollapsed( !collapsed )

    return <Container>
        <NavbarBrand href="/"><img src={ logo } width="30" height="30" alt="logo"/>MERN-Stack Todo App</NavbarBrand>
        <NavbarToggler onClick={ toggleNavbar } className="mr-2"/>
        <Collapse isOpen={ !collapsed } navbar>
            <Navbar color="faded" dark>
                <NavItem>
                    <NavLink href="/">Todos</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/create">Create Todo</NavLink>
                </NavItem>
            </Navbar>
        </Collapse>
        { children }
    </Container>
}