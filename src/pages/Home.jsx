import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Logo from '../img/iconBee.png';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <img src= { Logo } alt= { Logo }/>
            <h1>Bienvenid@ a nuestro panal</h1>
            <Link to="/signin">
            <button className="addToCart"> Regístrate </button>
            </Link>
            
            </div>

        </div>
    );
};

export default Home;