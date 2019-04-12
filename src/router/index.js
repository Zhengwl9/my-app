import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import RouteWithSubRoutes from './RouteWithSubRoutes';
let loading=()=><div>Loading...</div>;
const Home = Loadable({loader: () => import('../components/App'), loading,});
const Test = Loadable({loader: () => import('../components/test'), loading,});
const App = Loadable({loader: () => import('../App'), loading,});

let myRoute=[{
    path: "/",
    component: App,
    routes: [
        {path: "/home", component: Home},
        {path: "/test", component: Test}
    ]
}];
const BasicRoute = () => (
    <Router>
        {myRoute.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </Router>
);


export default BasicRoute;