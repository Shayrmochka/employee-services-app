import React from 'react'

export const GeneralInfo = () => {

    return (
        <div className="main-info-section">
            <div className="main-info-title">
                <div className="edit-link-align">
                    <span><h4>General Info</h4></span>
                    <a href="#" className="main-info-edit">Apply</a>
                </div>
                <hr />
            </div>
            <div className="main-info-body">
                <div>
                    <i className="fas fa-briefcase"></i>
                    <span className="line-title">Department</span>
                </div>
                <div>
                    <input placeholder="Department" />
                </div>
                <div>
                    <i className="fas fa-door-closed"></i>
                    <span className="line-title">Room</span>
                </div>
                <div>
                    <input placeholder="Room" />
                </div>
            </div>
        </div>
    )
}