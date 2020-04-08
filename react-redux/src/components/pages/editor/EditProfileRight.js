import React from 'react'

const EditProfileRight = () => {

    return (
        <form id="edit-profile-form">
            <div className="main-info">
                <div className="main-info-section">
                    <div className="main-info-title">
                        <div className="edit-link-align">
                            <span><h4>Passport Info</h4></span>
                            <a href="#" className="main-info-edit">Apply</a>
                        </div>
                        <hr />
                    </div>
                    <div className="main-info-body">
                        <div>
                            <i className="fas fa-user"></i>
                            <span className="line-title">First Name (EN)</span>
                        </div>
                        <div>
                            <input name="firstName_EN" placeholder="First Name (EN)" value="<%firstName_EN%>" />
                        </div>
                        <div>
                            <i className="fas fa-user"></i>
                            <span className="line-title">Last Name (EN)</span>
                        </div>
                        <div>
                            <input name="lastName_EN" placeholder="Last Name (EN)" value="<%lastName_EN%>" />
                        </div>
                        <div>
                            <i className="fas fa-user"></i>
                            <span className="line-title">First Name (RU)</span>
                        </div>
                        <div>
                            <input name="firstName_RU" placeholder="First Name (RU)" value="<%firstName_RU%>" />
                        </div>
                        <div>
                            <i className="fas fa-user"></i>
                            <span className="line-title">Last Name (RU)</span>
                        </div>
                        <div>
                            <input name="lastName_RU" placeholder="Last Name (RU)" value="<%lastName_RU%>" />
                        </div>

                        <div>
                            <i className="fas fa-user"></i>
                            <span className="line-title">Patronym (RU)</span>
                        </div>
                        <div>
                            <input name="patronym_RU" placeholder="Patronym (RU)" value="<%patronym_RU%>" />
                        </div>
                        <div>
                            <i className="fas fa-user"></i>
                            <span className="line-title">Gender</span>
                        </div>
                        <div>
                            <input name="gender" placeholder="Gender" value="<%gender%>" />
                        </div>
                        <div>
                            <i className="fas fa-user-tie"></i>
                            <span className="line-title">Worker Type</span>
                        </div>
                        <div>
                            <input name="worker_type" placeholder="Worker Type" value="<%worker_type%>" />
                        </div>
                    </div>
                </div>

                <div className="main-info-section">
                    <div className="main-info-title title-without-buttons">
                        <span><h4>Profile Info</h4></span>
                        <hr />
                    </div>
                    <div className="main-info-body">
                        <div>
                            <i className="fas fa-user-tag"></i>
                            <span className="line-title">Role</span>
                        </div>
                        <div>
                            <input name="role" placeholder="Role" value="<%role%>" />
                        </div>
                        <div>
                            <i className="fas fa-user-shield"></i>
                            <span className="line-title">Password</span>
                        </div>
                        <div>
                            <input name="password" placeholder="Password" value="<%password%>" />
                        </div>
                    </div>
                </div>

                <div className="main-info-section">
                    <div className="main-info-title title-without-buttons">
                        <span><h4>General Info</h4></span>
                        <hr />
                    </div>
                    <div className="main-info-body">
                        <div>
                            <i className="fas fa-briefcase"></i>
                            <span className="line-title">Department</span>
                        </div>
                        <div>
                            <input name="department" placeholder="Department" value="<%department%>" />
                        </div>
                        <div>
                            <i className="fas fa-door-closed"></i>
                            <span className="line-title">Room</span>
                        </div>
                        <div>
                            <input name="room" placeholder="Room" value="<%room%>" />
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
                            <input name="internal_phone" placeholder="Internal phone" value="<%internal_phone%>" />
                        </div>
                        <div>
                            <i className="fas fa-mobile-alt"></i>
                            <span className="line-title">Mobile phone</span>
                        </div>
                        <div>
                            <input name="mobile_phone" placeholder="Mobile phone" value="<%mobile_phone%>" />
                        </div>
                        <div>
                            <i className="fas fa-at"></i>
                            <span className="line-title">Email</span>
                        </div>
                        <div>
                            <input name="email" placeholder="Email" value="<%email%>" />
                        </div>
                        <div>
                            <i className="fab fa-skype"></i>
                            <span className="line-title">Skype ID</span>
                        </div>
                        <div>
                            <input name="skype" placeholder="Skype" value="<%skype%>" />
                        </div>
                        <div>
                            <i className="fab fa-keycdn"></i>
                            <span className="line-title">C-number</span>
                        </div>
                        <div>
                            <input name="c_number" placeholder="C-Number" value="<%c_number%>" />
                        </div>
                    </div>
                </div>

                <div className="edit-link-align edit-bottom">
                    <a href="#" className="main-info-edit">Apply</a>
                </div>
                <input className="left-buttons" type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default EditProfileRight