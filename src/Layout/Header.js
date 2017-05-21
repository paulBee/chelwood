import React from 'react';
import NavigationBar from '../components/NavigationBar';
import './header.css';
import { NavLink } from 'react-router-dom';
import {URLS} from'../constants/urls'

const Header = () => (
        <header className="header-picture">
            <NavLink to={URLS.HOMEPAGE} className="banner-link">
                <h1 className="site-title">Chelwood Village</h1>
                <h2 className="site-tagline">a thankful village</h2>
            </NavLink>
            <NavigationBar/>
        </header>
    )

export default Header;
