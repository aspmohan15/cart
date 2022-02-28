import { Navbar, Container, FormControl, Badge, Dropdown } from 'react-bootstrap'
import { BsFillCartCheckFill } from 'react-icons/bs'
import React, { useContext } from 'react';
import "./components.css"
import { Link } from 'react-router-dom';
import { CartContext } from '../context/Context';

export const Header = () => {


    const { cart } = useContext(CartContext)

    return <div>
        <Navbar bg='dark'>
            <Container>

                <Navbar.Brand>
                    <Link to="/" style={{ color: "white" }}>Home</Link>
                </Navbar.Brand>

                <Navbar.Brand>
                    <Link to="/cart" style={{ color: "white" }}>Cart</Link>
                </Navbar.Brand>


                <nav>
                    <Dropdown>
                        <BsFillCartCheckFill style={{ color: "white" }} />
                        <Badge style={{ color: "white" }}>{cart.length}</Badge>

                    </Dropdown>
                </nav>
            </Container>
        </Navbar>
    </div>;
};
