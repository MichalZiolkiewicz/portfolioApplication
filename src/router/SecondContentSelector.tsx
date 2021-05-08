import React from 'react';

import {
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import { AnimatePresence } from "framer";

import Main from "../view/Main";
import Mail from "../view/Mail";
import Bored from "../view/Bored";
import Collab from "../view/Collab";
import Inspiration from "../view/Inspiration";
import Meet from "../view/Meet";
import Projects from "../view/Projects";
import Start from "../view/Start";

const SecondContentSelector = () => (
    <Route render={({location}) => (
        <AnimatePresence exitBeforeEnter initial={false}>
            <Switch location={location} key={location.pathname}>
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
                <Route
                    component={Collab}
                    path="/wannacollab"
                    exact
                />
                <Route
                    component={Meet}
                    path="/nicetomeetyou"
                    exact
                />
                <Route
                    component={Bored}
                    path="/imboreeeeed"
                    exact
                />
                <Route
                    component={Inspiration}
                    path="/lookingforinspiration"
                    exact
                />
                <Route
                    component={Mail}
                    path="/contact"
                    exact
                />
                <Route
                component={Projects}
                path="/projects"
                exact
            />
                <Redirect from="*" to="/" />
            </Switch>
        </AnimatePresence>
        )}
    />
);

export default SecondContentSelector ;