import React from 'react'

export const AdminPanelHeader = () => {

    return (
        <div className="user-wrapper-inline alternate-color">
            <form className="admin-search-wrapper">
                <i className="search-icon fas fa-search"></i>
                <input id="people-search-input" type="search" className="search-input admin-search" placeholder="John Smith / Джон Смит" />
            </form>
            <div className="column-names">
                <span>Address book role</span>
                <span>Vacation Role</span>
                <span>Admin</span>
            </div>
        </div>
    )
}