import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'

export const HeaderNav = ({ user }) => {
    const nav = useMemo(() => {
        if (user.role === 'admin') {
            return (
                <>
                    <li><Link className="nav-link-inactive" id="create-account" to="/create">Create Account</Link></li>
                    <li><Link className="nav-link-inactive" id="open-admin" to="/admin">Settings</Link></li>
                </>
            )
        }
    })

    return (
        <ul>
            <li><Link className="nav-link-active" to="/index">Address Book</Link></li>
            {nav}
        </ul>
    )
}