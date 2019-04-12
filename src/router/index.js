import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

let loading=()=><div>Loading...</div>;
const Home = Loadable({loader: () => import('../components/App'), loading,});
const App = Loadable({loader: () => import('../App'), loading,});

function RouteWithSubRoutes(route) {
    return (
        <Route
            path={route.path}
            render={props => (
                <route.component {...props} routes={route.routes} />
            )}
        />
    );
}
let myRoute=[{
    path: "/",
    component: App,
    routes: [
        {path: "/home", component: Home}
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