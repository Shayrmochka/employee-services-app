import React from 'react'
import AdminPanel from './AdminPanel'
import AdminPanelTitle from './AdminPanelTitle'
import AdminPanelHeader from './AdminPanelHeader'
import { useSelector } from 'react-redux'

const AdminPanelContainer = () => {

    const users = useSelector(state => state.users.fetchedUsers)

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