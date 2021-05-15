import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashBoard from './pages/dashboard'
import Home from './pages/home'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={DashBoard} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
