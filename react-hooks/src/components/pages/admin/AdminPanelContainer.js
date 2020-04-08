import React, { useState, useEffect } from 'react'
import { fetchData } from '../../api/api'
import AdminPanel from './AdminPanel'
import AdminPanelTitle from './AdminPanelTitle'
import AdminPanelHeader from './AdminPanelHeader'

const AdminPanelContainer = () => {

    const [users, setUsers] = useState()

    useEffect(() => {
        fetchData.get('/users')
            .then(response => setUsers(response.data))
    }, [])

    const displayUsers = () => {
        if (users) {
            return users.map(user => <AdminPanel key={user.id} user={user} />)
        }
    }

    return (
        <div id='wrapper'>
            <section id='admin-panel-wrapper'>
                <AdminPanelTitle />
                <div className="admin-panel-card">
                    <AdminPanelHeader />
                    {displayUsers()}
                </div>
            </section>
        </div>
    )
}

export default AdminPanelContainer