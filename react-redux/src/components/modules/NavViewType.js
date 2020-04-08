import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStyle } from '../../redux/reducers/rootReducer'

const NavViewType = () => {

    const dispatch = useDispatch()
    const countUsers = useSelector(state => state.getUsers.searchUsers.length)

    return (
        <div className="article-navigation">
            <p id="employees-count">Employees count: {countUsers}</p>
            <div className="view-type">
                <a onClick={() => dispatch(getStyle(true))} href="#" id="display_block" className="view-type-active-block"><i className="fas fa-th-large"></i></a>
                <a onClick={() => dispatch(getStyle(false))} href="#" id="display_inline"><i className="fas fa-th-list"></i></a>
            </div>
        </div>
    )
}

export default NavViewType