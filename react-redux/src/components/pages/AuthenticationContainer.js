import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { fetchData } from '../api/api'
import Authentication from './Authentication'
import { useDispatch } from 'react-redux'
import { currentUser } from '../../redux/reducers/rootReducer'


const AuthenticationContainer = (props) => {

    console.log(props)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if(localStorage.getItem('user')){
            dispatch(currentUser(JSON.parse(localStorage.getItem('user'))))
            props.history.push("/index")
        }
    }, [])

    const gettingLoging = (e) => {
        e.preventDefault();
        let email = e.target.elements.email.value;
        let password = e.target.elements.password.value;


        if (!email.length || !password.length) {
            console.log('Please enter correct data again')
        } else {

            fetchData.get('/users')
                .then(response => {
                    const findUser = response.data.filter(el => email === el.email && password === el.password)
                    console.log(findUser)
                    if (findUser.length) {
                        dispatch(currentUser(findUser))
                        localStorage.setItem('user', JSON.stringify({password, email, role: findUser[0].role}))
                        props.history.push("/index") 
                    } else {
                        console.log('This account does not exist')
                    }
                })



        }
    }
    return <Authentication handleFormSubmit={gettingLoging} />
}

AuthenticationContainer.propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object
}

export default AuthenticationContainer