import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Layout/header.css';
import {URLS} from'../constants/urls';

const NavigationBar = () => (
    <div className="header-link">
        <NavLink activeClassName="selected" className="link" to={URLS.HOMEPAGE}>Homepage</NavLink>
        <NavLink activeClassName="selected" className="link" to={URLS.PARISH_COUNCIL}>Parish Council</NavLink>
        <NavLink activeClassName="selected" className="link" to={URLS.VILLAGE_HALL}>Village Hall</NavLink>
        <NavLink activeClassName="selected" className="link" to={URLS.CHURCH}>St Leonards Church</NavLink>
        <NavLink activeClassName="selected" className="link" to={URLS.HISTORY}>History</NavLink>
        <NavLink activeClassName="selected" className="link" to={URLS.EVENTS}>Events</NavLink>
        <NavLink activeClassName="selected" className="link" to={URLS.PICTURES}>Pictures</NavLink>
    </div>
)

export default NavigationBar;
