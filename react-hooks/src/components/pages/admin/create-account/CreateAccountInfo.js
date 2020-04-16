import React from 'react'
import { GeneralInfo } from './GeneralInfo'
import { Contact } from './Contact'

export const CreateAccountInfo = () => {

    return (
        <section id="right">
            <div className="main-info">

                <GeneralInfo/>
                <Contact/>

                <div className="edit-link-align edit-bottom">
                    <a href="#" className="main-info-edit">Apply</a>
                </div>
            </div>
        </section>
    )
}