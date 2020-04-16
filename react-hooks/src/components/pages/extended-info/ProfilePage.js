import React, { useState, useEffect } from 'react'
import { fetchData } from '../../api/api'
import { ProfilePageLeft } from './ProfilePageLeft'
import { ProfilePageRight } from './ProfilePageRight'
import { useParams } from 'react-router-dom'

const ProfilePage = () => {

    const [user, setUser] = useState()
    const id = useParams().id

    useEffect(() => {
        fetchData.get('/users')
            .then(response => { setUser(response.data.filter(el => el.id === +id)[0]) })

        // { setUser(response.data.filter(el => el.id === useParams().id)[0]) }
    }, [])

    const renderProfile = () => {
        if (user) {
            return (
                <div>
                    <ProfilePageLeft user={user} />
                    <ProfilePageRight user={user} />
                </div>
            )
        }
    }

    return (
        <div>
            {renderProfile()}
        </div>
    )
}


export default ProfilePage