import React from 'react'

const Authentication = (props) => {

    return (
        <div id="login-wrapper">
            <div className="login-content">
                <div className="background">
                    <img src="images/background.svg" />
                </div>
                <form id="login-form" onSubmit={props.handleFormSubmit}>
                    <img src="images/pic.svg" />
                    <h2 className="title">Welcome</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                            <h5>Email</h5>
                            <input name="email" type="email" id="email" className="input" value={props.searchValue.email} onChange={props.handleChange} required />
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input name="password" type="password" id="password" className="input" value={props.searchValue.password} onChange={props.handleChange} required />
                        </div>
                    </div>
                    <input type="submit" id="butt" className="btn" value="Login" />
                </form>
            </div>
        </div>
    )
}

export default Authentication