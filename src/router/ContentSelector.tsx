import React from 'react';

import {
    Redirect,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';

import {TransitionGroup, CSSTransition} from "react-transition-group";
import '../style.css';

import Main from "../view/Main";
import Start from "../view/Start";

const AnimatedSwitch = withRouter(({ location })=> (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={1000}>
            <Switch location={location}>
                <Route
                    component={Main}
                    path="/"
                    exact
                />
                <Route
                    component={Start}
                    path="/start"
                />
                <Redirect from="*" to="/" />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default AnimatedSwitch;