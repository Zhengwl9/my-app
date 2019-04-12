import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import Component404 from '../components/404/404'

import RouteWithSubRoutes from './RouteWithSubRoutes';

let loading = () => <div>Loading...</div>;
const App = Loadable({loader: () => import('../App'), loading,});
const Login = Loadable({loader: () => import('../components/login/login'), loading,});
const Home = Loadable({loader: () => import('../components/App'), loading,});
const Test = Loadable({loader: () => import('../components/test'), loading,});
let myRoute = [{
    path: "/app",
    component: App,
    routes: [
        {path: "/app/compass", component: Home},
        {path: "/app/test", component: Test},
    ]
}];
const BasicRoute = () => (
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            {myRoute.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
            <Route component={Component404}/>
        </Switch>

    </Router>
);


export default BasicRoute;