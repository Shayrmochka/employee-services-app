import React from 'react'

const CreateAccountInfo = () => {

    return (
        <section id="right">
            <div className="main-info">
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
                            <input placeholder="Internal phone" />
                        </div>
                        <div>
                            <i className="fas fa-mobile-alt"></i>
                            <span className="line-title">Mobile phone</span>
                        </div>
                        <div>
                            <input placeholder="Mobile phone" />
                        </div>
                        <div>
                            <i className="fas fa-at"></i>
                            <span className="line-title">Email</span>
                        </div>
                        <div>
                            <input type="email" placeholder="Email" />
                        </div>
                        <div>
                            <i className="fab fa-skype"></i>
                            <span className="line-title">Skype ID</span>
                        </div>
                        <div>
                            <input placeholder="Skype" />
                        </div>
                        <div>
                            <i className="fab fa-keycdn"></i>
                            <span className="line-title">C-number</span>
                        </div>
                        <div>
                            <input placeholder="C-Number" />
                        </div>
                    </div>
                </div>
                <div className="edit-link-align edit-bottom">
                    <a href="#" className="main-info-edit">Apply</a>
                </div>
            </div>
        </section>
    )
}

export default CreateAccountInfo