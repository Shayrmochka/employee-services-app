import React from 'react'

const InlineStyleNav = () => {

    return (
        <div className="user-wrapper-inline wrapper-margin-bottom">
            <div className="user-photo-inline">
                <i className="fas fa-dot-circle"></i>
                <span>Photo</span>
            </div>
            <div className="user-name-inline">
                <i className="fas fa-user"></i>
                <span>Name</span>
            </div>
            <div className="user-department-inline">
                <i className="fas fa-briefcase"></i>
                <span>Department</span>
            </div>
            <div className="user-room-inline">
                <i className="fas fa-door-closed"></i>
                <span>Room</span>
            </div>
        </div>
    )
}

export default InlineStyleNav