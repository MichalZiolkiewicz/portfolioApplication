import React from 'react';

import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Main from "../view/Main";
import Start from "../view/Start";

const ContentSelector = () => {
    return(
        <Switch>
            <Route
                component={Main}
                path="/"
                exact
            />
            <Route
                component={Start}
                path="/start"
                exact
            />
            <Redirect from="*" to="/" />
        </Switch>
    );
}

export default ContentSelector;