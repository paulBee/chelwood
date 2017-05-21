import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Church from '../pages/Church';
import Events from '../pages/Events';
import History from '../pages/History';
import ParishCouncil from '../pages/ParishCouncil';
import Pictures from '../pages/Pictures';
import VillageHall from '../pages/VillageHall';
import {URLS} from '../constants/urls'

const Main = () => (
<Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path={URLS.HOMEPAGE} component={HomePage}/>
    <Route path={URLS.CHURCH} component={Church}/>
    <Route path={URLS.EVENTS} component={Events}/>
    <Route path={URLS.HISTORY} component={History}/>
    <Route path={URLS.PARISH_COUNCIL} component={ParishCouncil}/>
    <Route path={URLS.PICTURES} component={Pictures}/>
    <Route path={URLS.VILLAGE_HALL} component={VillageHall}/>
</Switch>
)
export default Main;
