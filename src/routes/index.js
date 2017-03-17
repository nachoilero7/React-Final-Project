import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
import ArtistsListView from './artistsListView/artistsListView';
import Artist from './artist/artist';
//despues de route va el switch que intercambia las vistas

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact path="/artistsListView" component={ArtistsListView} />
                <Route exact path="/artist" component={Artist} />
            </Switch>
        </div>
    )
};

export default getRoutes;
