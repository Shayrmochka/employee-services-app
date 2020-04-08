import React from 'react'

const CreateAccount = () => {

    return (
        <section id="left">
            <form id="create-account-form">
                <div class="profile-left">
                    <a href="./index.html" class="profile-back-arrow"><i class="fas fa-angle-left"></i></a>
                    <div class="user-image-block">
                        <i class="fas fa-cannabis photo-icon"></i>
                        <img src="images/default.jpg" class="user-face-block user-face-profile" />
                    </div>
                    <div class="edit-name-block">
                        <div>
                            <input name="gender" placeholder="Gender" />
                        </div>
                        <div>
                            <input name="firstName_EN" placeholder="First Name (EN)" />
                            <input name="lastName_EN" placeholder="Last Name (EN)" />
                    </div>
                        <div >
                            <input name="firstName_RU" placeholder="First Name (RU)" />
                            <input name="lastName_RU" placeholder="Last Name (RU)" />
                            <input name="patronym_RU" placeholder="Patronym (RU)" />
                            <input name="role" placeholder="Role" />
                            <input name="worker_type" placeholder="Worker Type" />
                            <input name="password" type="number" placeholder="Password" />
                        </div>
                    </div>
                    <div class="profile-left-buttons">
                        <input class="left-buttons" type="submit" value="Submit" />
                    </div>
                </div>
            </form>
        </section>
    )
}

export default CreateAccount