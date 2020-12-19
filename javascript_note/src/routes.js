import React, { Fragment } from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HomeScreen from './screens/home'


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomeScreen} />
        </Switch>
    </BrowserRouter>
)

export default Routes