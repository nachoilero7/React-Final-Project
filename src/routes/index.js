import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainView from './mainView/mainView';
//despues de route va el switch que intercambia las vistas

const getRoutes = function() {
    return (
        <div>
            <Route name="Main" component={MainView} />
            
        </div>
    )
};

export default getRoutes;
