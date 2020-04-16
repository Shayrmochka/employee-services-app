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
                        <button>Employee</button>
                        <button>HR</button>
                    </div>

                    <div className="vacation-role">
                        <button>User</button>
                        <button>PO</button>
                        <button>DD</button>
                    </div>

                    <div className="admin-role">
                        <button>Admin</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminPanel