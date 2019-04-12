import React from 'react';
import {BrowserRouter as Router,Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import RouteWithSubRoutes from './RouteWithSubRoutes';
let loading=()=><div>Loading...</div>;
const App = Loadable({loader: () => import('../App'), loading,});
const Login = Loadable({loader: () => import('../components/login/login'), loading,});
const Home = Loadable({loader: () => import('../components/App'), loading,});
const Test = Loadable({loader: () => import('../components/test'), loading,});


let myRoute=[{
    path: "/home",
    component: App,
    routes: [
        {path: "/compass", component: Home},
        {path: "/test", component: Test}
    ]
}];
const BasicRoute = () => (
    <Router>
        <Route path="/login" component={Login}/>
        {myRoute.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
        ))}
    </Router>
);


export default BasicRoute;