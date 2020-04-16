import React, { useState, useEffect } from 'react'
import { HeaderNav } from './HeaderNav'

export const Header = () => {

    const [user, setUser] = useState('')

    useEffect(() => {
        if (localStorage.getItem('user')) {
            setUser(JSON.parse(localStorage.getItem('user')))
        }
    }, [])

    return (
        <header id="header-root">
            <div className="logo-wrapper">
                <div className="logo">Leverx Group</div>
                <div className="page-name">Employee Services</div>
            </div>
            <nav>  
                <HeaderNav user={user} />
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