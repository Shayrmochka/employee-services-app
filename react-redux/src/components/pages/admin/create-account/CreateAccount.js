import React from 'react'

const CreateAccount = () => {

    return (
        <section id="left">
            <form id="create-account-form">
                <div className="profile-left">
                    <a href="./index.html" className="profile-back-arrow"><i className="fas fa-angle-left"></i></a>
                    <div className="user-image-block">
                        <i className="fas fa-cannabis photo-icon"></i>
                        <img src="images/default.jpg" className="user-face-block user-face-profile" />
                    </div>
                    <div className="edit-name-block">
                        <div>
                            <input name="gender" placeholder="Gender" />
                        </div>
                        <div>
                            <input name="firstName_EN" placeholder="First Name (EN)" />
                            <input name="lastName_EN" placeholder="Last Name (EN)" />
                    </div>
                        <div >
                            <input name="firstName_RU" placeholder="First Name (RU)" />
                            <input name="lastName_RU" placeholder="Last Name (RU)" />
                            <input name="patronym_RU" placeholder="Patronym (RU)" />
                            <input name="role" placeholder="Role" />
                            <input name="worker_type" placeholder="Worker Type" />
                            <input name="password" type="number" placeholder="Password" />
                        </div>
                    </div>
                    <div className="profile-left-buttons">
                        <input className="left-buttons" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CreateAccount