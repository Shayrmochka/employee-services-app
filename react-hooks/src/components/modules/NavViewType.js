import React from 'react'

const NavViewType = (props) => {

    return (
        <div className="article-navigation">
            <p id="employees-count">Employees count: {props.userCount}</p>
            <div className="view-type">
                <a onClick={() => props.setDisplayStyleState('block')} href="#" id="display_block" className="view-type-active-block"><i className="fas fa-th-large"></i></a>
                <a onClick={() => props.setDisplayStyleState('inline')} href="#" id="display_inline"><i className="fas fa-th-list"></i></a>
            </div>
        </div>
    )
}

export default NavViewType