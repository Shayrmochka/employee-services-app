import React from 'react'

const EditProfileLeft = () => {

    return (
        <div className = "profile-left">
            <div className = "edit-warning-block">
            <a href = "./index.html" className = "profile-back-arrow"><i className="fas fa-angle-left"></i></a>
            <div className = "user-image-block">
                <i className="fas fa-cannabis photo-icon"></i>
                <img src = "" className = "user-face-block user-face-profile"/>
            </div>
                
                <p className = "edit-warning">
                    Welcome to the page for editing user information, be careful.
                </p>
                <p className = "edit-warning">
                    Сhanges will be sent to the database and will immediately appear on the site. 
                </p>
                <p className = "edit-warning">
                    Do not edit user information unnecessarily.
                </p>
                
            <div className = "profile-left-buttons">
                <a href = "#" className = "left-buttons left-button-id"><i className="fas fa-id-card"></i>ID</a>
                <a href = "#" className = "left-buttons left-button-card"><i className="far fa-credit-card"></i>Business cars</a>
            </div>
        </div>
        </div>
    )
}

export default EditProfileLeft