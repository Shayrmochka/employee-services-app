import React from 'react'

const BlockStyle = (props) => {
    return (
            <div className = "user-card-block" onClick = {() => { props.handleClick(props.user) }}>
                <div className = "user-image-block">
                    <img src = {props.user.image} id = "img-id" className = "user-face-block"/>
                </div>
                <div className = "data-en-block">
                    <span id = "full-name-en" className="full-name">{props.user.firstName_EN} {props.user.lastName_EN}</span>
                </div>
                <div className = "data-ru-block">
                    <span id = "full-name-ru" className="full-name">{props.user.firstName_RU} {props.user.lastName_RU}</span>
                </div>
                <hr/>
                <div className = "user-footer-block">
                    <div className="department">
                        <i className="fas fa-briefcase"></i>
                        <span id = "department-id">{props.user.department}</span>
                    </div>
                    <div className="room">
                        <i className="fas fa-door-closed"></i>
                        <span id = "room-id">{props.user.room}</span>
                    </div>
                </div>
            </div>
    )
}

export default BlockStyle