import React, {useState, useEffect} from 'react'
import {fetchData} from '../api/api'
import NavViewType from '../modules/NavViewType'
import SearchContainer from '../modules/SearchContainer'
import StyleContainer from './view-style/StyleContainer'


const MainPage = (props) => {

    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState()
    const [displayStyle, setDisplayStyle] = useState('block')

    useEffect(() => {
        fetchData.get('/users')
            .then(response => { setAllUsers(response.data); setUsers(response.data); })
    }, [])

    const getSearch = (e) => {
        e.preventDefault();
        let search = e.target.elements.search.value;
        setUsers(allUsers.filter(user => `${user.firstName_EN} ${user.lastName_EN} ${user.firstName_RU} ${user.lastName_RU}`
                         .toLowerCase()
                         .includes(search.toLowerCase())))
    }

    const setDisplayStyleState = (style) => {
        setDisplayStyle(style)
        console.log('style', style);
    }

    return (

        <div id="wrapper">
            <section id="left">
                <SearchContainer propsSearch={getSearch} />
            </section>

            <section id="right">

                <NavViewType setDisplayStyleState={setDisplayStyleState} userCount = {users.length} />
                <StyleContainer users={users} displayStyle={displayStyle} history={props.history} />


            </section>
        </div>

    )
}

export default MainPage