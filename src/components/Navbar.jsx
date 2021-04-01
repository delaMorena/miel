import React from 'react';
import logo from '../img/iconBee.png';
import basket from '../img/cesta.png'
import { Link } from 'react-router-dom';

export function Navbar(props) {
    const { countCardItems } = props;
    return (
        <div>
            <header className="row navbar center">
                <div>
                    <a href="https://chilemiel.cl/">
                       <img src={logo} width="50" alt={logo} />
                    </a>
                    </div>
                    <Link to="/">
                    <h1>Chile Miel</h1>
                    </Link>
                <div>
                    {/* <Link to="/signin">SignIn</Link> */}
                    <Link to="/cart">
                        <img src={basket} alt={basket} width="30"></img> {''}
                    {countCardItems ? (
                        <button className="badge">{countCardItems}</button>
                    ) : ( 
                        '')}
                    </Link>
                </div>
               
            </header>
        </div>
    )
}