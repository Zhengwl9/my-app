import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

let loading=()=><div>Loading...</div>;
const Home = Loadable({loader: () => import('../components/App'), loading,});
const Test = Loadable({loader: () => import('../components/test'), loading,});
// const App = Loadable({loader: () => import('../App'), loading,});
function App({ routes }) {
    return (
        <div>
            <div>啦啦啦啦</div>
            {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
            ))}
        </div>
    );
}
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