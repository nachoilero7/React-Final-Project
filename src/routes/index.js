import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import ArtistsListView from './artistsListView/artistsListView';
//despues de route va el switch que intercambia las vistas

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/artistsListView" component={ArtistsListView} />
            </Switch>
        </div>
    )
};

export default getRoutes;
