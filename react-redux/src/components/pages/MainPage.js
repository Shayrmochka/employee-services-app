import React, { useState, useEffect, Fragment } from 'react'
import NavViewType from '../modules/NavViewType'
import SearchContainer from '../modules/SearchContainer'
import StyleContainer from './view-style/StyleContainer'

import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers, getSearchUsers } from '../../redux/reducers/rootReducer'
import ErrorBoundary from '../Error/ErrorBoundary'

const MainPage = (props) => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())

    }, [])

    const users = useSelector(state => state.getUsers.fetchedUsers)
    const loading = useSelector(state => state.app.loading)
    dispatch(getSearchUsers(users))


    const getSearch = (e) => {
        e.preventDefault();
        let search = e.target.elements.search.value;
        dispatch(getSearchUsers(users.filter(user => `${user.firstName_EN} ${user.lastName_EN} ${user.firstName_RU} ${user.lastName_RU}`
            .toLowerCase()
            .includes(search.toLowerCase()))))
    }

    const checkFetchData = () => {

        if (loading) {
            return <p>Loading...</p>
        }
        return (
            <Fragment>
                <NavViewType />
                <StyleContainer history={props.history} />
            </Fragment>
        )
    }

    return (

        <div id="wrapper">
            <section id="left">
                <ErrorBoundary>
                    <SearchContainer propsSearch={getSearch} />
                </ErrorBoundary>
            </section>

            <section id="right">
                {checkFetchData()}
            </section>
        </div>

    )
}

MainPage.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}

export default MainPage