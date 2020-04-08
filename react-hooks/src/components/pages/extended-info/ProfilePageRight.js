import React from 'react'

const ProfilePageRight = (props) => {

    return (
        <div className="main-info">
            <div className="main-info-section">
                <div className="main-info-title">
                    <div id="edit-details-top" className="edit-link-align">
                        <span><h4>General Info</h4></span>
                        <a href="#" className="main-info-edit">Edit Details</a>
                    </div>
                    <hr />
                </div>
                <div className="main-info-body">
                    <div>
                        <i className="fas fa-briefcase"></i>
                        <span className="line-title">Department</span>
                    </div>
                    <div>
                        <span >{props.user.department}</span>
                    </div>
                    <div>
                        <i className="fas fa-door-closed"></i>
                        <span className="line-title">Room</span>
                    </div>
                    <div>
                        <span>{props.user.room}</span>
                    </div>
                </div>
            </div>

            <div className="main-info-section">
                <div className="main-info-title title-without-buttons">
                    <span><h4>Contact</h4></span>
                    <hr />
                </div>
                <div className="main-info-body">
                    <div>
                        <i className="fas fa-mobile"></i>
                        <span className="line-title">Internal phone</span>
                    </div>
                    <div>
                        <span >{props.user.internal_phone}</span>
                    </div>
                    <div>
                        <i className="fas fa-mobile-alt"></i>
                        <span className="line-title">Mobile phone</span>
                    </div>
                    <div>
                        <span >{props.user.mobile_phone}</span>
                    </div>
                    <div>
                        <i className="fas fa-at"></i>
                        <span className="line-title">Email</span>
                    </div>
                    <div>
                        <span>{props.user.email}</span>
                    </div>
                    <div>
                        <i className="fab fa-skype"></i>
                        <span className="line-title">Skype ID</span>
                    </div>
                    <div>
                        <span >{props.user.skype}</span>
                    </div>
                    <div>
                        <i className="fab fa-keycdn"></i>

                        <span className="line-title">C-number</span>
                    </div>
                    <div>
                        <span >{props.user.c_number}</span>
                    </div>
                </div>
            </div>
            <div id="edit-details-bottom" className="edit-link-align edit-bottom">
                <a href="#" className="main-info-edit">Edit Details</a>
            </div>
        </div>
    )
}


export default ProfilePageRight