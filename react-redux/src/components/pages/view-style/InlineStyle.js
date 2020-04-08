import React from 'react'
import PropTypes from 'prop-types'

const InlineStyle = (props) => {

    return (
        <div className="user-wrapper-inline wrapper-margin-top" onClick = {() => { props.handleClick(props.user)}}>
            <img className="user-image-inline" src={props.user.image} />
            <div className="user-name-inline" data-btn="profile">
                <div className="data-en-inline">
                    <span className="full-name">{props.user.firstName_EN} {props.user.lastName_EN}</span>
                </div>
                <div className="data-ru-inline">
                    <span className="full-name">{props.user.firstName_RU} {props.user.lastName_RU}</span>
                </div>
            </div>
            <div className="user-department-inline">
                <span>{props.user.department}</span>
            </div>
            <div className="user-room-inline">
                <span>{props.user.room}</span>
            </div>
        </div>
    )
}

InlineStyle.propTypes = {
    user: PropTypes.object.isRequired,
    handleClick: PropTypes.func.isRequired
}

export default InlineStyle