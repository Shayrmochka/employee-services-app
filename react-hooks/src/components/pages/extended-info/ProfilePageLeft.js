import React from 'react'

export const ProfilePageLeft = (props) => {
    console.log(props)
    return (
        <div className="profile-left">
            <a href="/index" className="profile-back-arrow"><i className="fas fa-angle-left"></i></a>
            <div className="user-image-block">
                <i className="fas fa-cannabis photo-icon"></i>
                <img src={"/" + props.user.image} className="user-face-block user-face-profile" />
            </div>
            <div className="full-name-block">
                <div className="profile-gender">
                    <span>{props.user.gender}</span>
                </div>
                <div className="data-en-block">
                    <span className="full-name">{props.user.firstName_EN} {props.user.lastName_EN}</span>
                </div>
                <div className="data-ru-block">
                    <span className="full-name">{props.user.firstName_RU} {props.user.lastName_RU}</span>
                </div>
            </div>
            <div className="profile-left-buttons">
                <a href="#" className="left-buttons left-button-id"><i className="fas fa-id-card"></i>{props.user.id}</a>
                <a href="#" className="left-buttons left-button-card"><i className="far fa-credit-card"></i>Business cars</a>
            </div>
        </div>
    )
}