import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    const checkRole = () => {
        if (JSON.parse(localStorage.getItem('user')).role === 'admin') {
            
            return (
                <ul>
                    <li><Link className="nav-link-active" to="/index">Address Book</Link></li>
                    <li><Link className="nav-link-inactive" id="create-account" to="/create">Create Account</Link></li>
                    <li><Link className="nav-link-inactive" id="open-admin" to="/admin">Settings</Link></li>
                </ul>
            )
        } else {
            return (
                <ul>
                    <li><Link className="nav-link-active" to="/index">Address Book</Link></li>
                </ul>
            )
        }
    }

    return (
        <header id="header-root">
            <div className="logo-wrapper">
                <div className="logo">Leverx Group</div>
                <div className="page-name">Employee Services</div>
            </div>
            <nav>
                {checkRole()}
            </nav>
            <div className="user-account">
                <a href="#"><i className="fab fa-github"></i></a>
                <img src="" id="user-photo" className="account-image" />
                <a className="user-account-link" id="user-link" href="#">%fullNameEN%</a>
                <a className="logout" id="log-out" href="#"><i className="fas fa-sign-out-alt"></i></a>
            </div>
        </header>
    )
}

export default Header