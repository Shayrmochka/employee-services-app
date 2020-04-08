import React, {useState} from 'react'
import PropTypes from 'prop-types'
import BlockStyle from './BlockStyle'
import InlineStyle from './InlineStyle'
import { useSelector } from 'react-redux'

const StyleContainer = (props) => {

    const users = useSelector(state => state.getUsers.searchUsers)
    const style = useSelector(state => state.getUsers.style)
    
    const [user, setUser] = useState()

    const handleClick = (value) => {
        setUser(value)
        props.history.push(`profile/${value.id}`);
    }

    const displayUsers = () => {
        if(users) {
                return style === true
                    ? users.map((user => <BlockStyle key={user.id} user={user} handleClick={handleClick}/>))
                    : users.map((user => <InlineStyle key={user.id} user={user} handleClick={handleClick}/>))
        }
    }


    return (
        <div id = 'employees-pages-id' className = "employees-pages">
            {displayUsers()}
        </div>
    )
}

StyleContainer.propTypes = {
    history: PropTypes.object
}

export default StyleContainer