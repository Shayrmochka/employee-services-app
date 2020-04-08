import React from 'react'

const AdminPanel = (props) => {

    return (
        <div>
            <div className="user-wrapper-inline alternate-color">
                <img className="user-image-inline" src={props.user.image} />
                <div className="user-name-inline">
                    <div className="data-en-inline">
                        <span className="full-name">{props.user.firstName_EN} {props.user.lastName_EN}</span>
                    </div>
                    <div className="data-ru-inline">
                        <span className="full-name">{props.user.firstName_RU} {props.user.lastName_RU}</span>
                    </div>

                </div>
                <div className="user-role-buttons">
                    <div className="address-book-role">
                        <button className="<%employee%>">Employee</button>
                        <button className="<%hr%>">HR</button>
                    </div>

                    <div className="vacation-role">
                        <button className="<%user%>" data-id="<%id%>" data-role="user">User</button>
                        <button>PO</button>
                        <button className="<%editor%>" data-id="<%id%>" data-role="editor">DD</button>
                    </div>

                    <div className="admin-role">
                        <button className="<%admin%>">Admin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel