import React, { useState, useEffect } from "react";

import './App.css';
import { Header } from "./header/header";
import AuthenticationContainer from "./pages/AuthenticationContainer";
import { BrowserRouter, Route } from "react-router-dom";
import AdminPanelContainer from "./pages/admin/AdminPanelContainer";
import MainPage from "./pages/MainPage";
import CreateAccount from "./pages/admin/create-account/CreateAccount";
import { CreateAccountInfo } from "./pages/admin/create-account/CreateAccountInfo";
import ProfilePage from "./pages/extended-info/ProfilePage";

const App = () => {

    

    return (
        <BrowserRouter>
            <div>
                <Header />

                <Route path="/admin" component={AdminPanelContainer} />
                <Route path="/index" component={MainPage} />
                <div id="wrapper">
                <Route path="/create" component={CreateAccount}/>
                <Route path="/create" component={CreateAccountInfo}/>
                <Route path="/profile/:id" component={ProfilePage}/>
                </div>

                <Route exact path="/" component={AuthenticationContainer}/>

            </div>
        </BrowserRouter>
    );
}


export default App;