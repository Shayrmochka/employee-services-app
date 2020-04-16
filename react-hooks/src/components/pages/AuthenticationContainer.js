import React, { useEffect, useState } from 'react'
import { fetchData } from '../api/api'
import Authentication from './Authentication'



const AuthenticationContainer = (props) => {

    const [searchValue, setSearchValue] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (localStorage.getItem('user')) {
            props.history.push("/index")
        }
    }, [])

    const handleChange = (event) => {
        event.persist()
        setSearchValue(prev => ({...prev, ...{
            [ event.target.name ]: event.target.value
        }}));
    }
    

    const gettingLoging = (e) => {
        e.preventDefault();
        let email = searchValue.email
        let password = searchValue.password


        if (!email.length || !password.length) {
            console.log('Please enter correct data again')
        } else {

            fetchData.get('/users')
                .then(response => {
                    const findUser = response.data.filter(el => email === el.email && password === el.password)
                    console.log(findUser)
                    if (findUser.length) {
                        localStorage.setItem('user', JSON.stringify({ password, email, role: findUser[0].role }))
                        props.history.push("/index")
                    } else {
                        console.log('This account does not exist')
                    }
                })



        }
    }
    return <Authentication handleFormSubmit={gettingLoging} handleChange={handleChange} searchValue={searchValue}/>
}

export default AuthenticationContainer