import React, { Component } from 'react';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import {Redirect ,Link} from 'react-router-dom';
import {Layout, Menu, Breadcrumb,} from 'antd';
import config from './common/config'
import Component404 from './components/404/404'
const { Content, Sider} = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item; //antd子菜单
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
    }
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };
    render() {
        if(this.props.location.pathname==='/'){
            return <Redirect to={'/productList'}></Redirect>
        }
        if(!this.props.routes.find(item => item.path === this.props.location.pathname)){
            return <Component404/>
        }
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <Menu theme="dark" mode="inline">
                            {config.menu.map(item=>{
                                if (item.son.length){
                                    return (
                                        <SubMenu key={item.key} title={<span>{item.name}</span>}>
                                            {item.son.map(son => {
                                                return (
                                                    <MenuItem key={son.key}>
                                                        <Link to={son.url}> <span>{son.name}</span></Link>
                                                    </MenuItem>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                }
                                else {
                                    return (
                                        <MenuItem key={item.key}>
                                            <Link to={item.url}>{item.name}</Link>
                                        </MenuItem>
                                    )
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}>
                                <Breadcrumb.Item>进销存</Breadcrumb.Item>
                                <Breadcrumb.Item>{this.props.routes.find(item=>item.path===this.props.location.pathname).name}</Breadcrumb.Item>
                            </Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 'calc(100vh - 53px)' }}>
                                {this.props.routes.map((route, i) => (
                                    <RouteWithSubRoutes key={i} {...route} />
                                ))}
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>
        );
    }
}

export default App;
