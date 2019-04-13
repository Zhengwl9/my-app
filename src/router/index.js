import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import Component404 from '../components/404/404'
let loading = () => <div>Loading...</div>;
const App = Loadable({loader: () => import('../App'), loading,});
const Login = Loadable({loader: () => import('../components/login/login'), loading,});
const ProductList = Loadable({loader: () => import('../components/productManage/productList/productList'), loading,});
const AddProduct = Loadable({loader: () => import('../components/productManage/addProduct/addProduct'), loading,});
const RoleList = Loadable({loader: () => import('../components/role/roleList/roleList'), loading,});
let myRoute = [{
    path: "/",
    component: App,
    routes: [
        {path: "/productList", name:'商品管理',component: ProductList},
        {path: "/addProduct", name:'新增商品',component: AddProduct},
        {path: "/roleList", name:'权限角色管理',component: RoleList},
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