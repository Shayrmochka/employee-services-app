import React, { useEffect } from 'react'
import { fetchData } from '../api/api'
import Authentication from './Authentication'



const AuthenticationContainer = (props) => {

    useEffect(() => {
        if(localStorage.getItem('user')){
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

export default AuthenticationContainer