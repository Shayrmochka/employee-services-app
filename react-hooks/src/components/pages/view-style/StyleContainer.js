import React, {useState, useEffect} from 'react'
import BlockStyle from './BlockStyle'
import InlineStyle from './InlineStyle'
import ProfilePage from '../extended-info/ProfilePage'

const StyleContainer = (props) => {

    const [user, setUser] = useState()
    // useEffect(() => {
    //     setUsers(props.users)
    // })

    const handleClick = (value) => {
        setUser(value)
        props.history.push(`profile/${value.id}`);
    }

    const displayUsers = () => {
        if(props.users) {
                return props.displayStyle === 'block'
                    ? props.users.map((user => <BlockStyle key={user.id} user={user} handleClick={handleClick}/>))
                    : props.users.map((user => <InlineStyle key={user.id} user={user} handleClick={handleClick}/>))
        }
    }

    return (
        <div id = 'employees-pages-id' className = "employees-pages">
            {displayUsers()}
        </div>
    )
}

export default StyleContainer