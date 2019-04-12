import React, { Component } from 'react';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import {Redirect } from 'react-router-dom';
import {Layout, Menu, Breadcrumb, Icon,} from 'antd';
const { Content, Sider,Header} = Layout;
const SubMenu = Menu.SubMenu;
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
            return <Redirect to={'/home/compass'}></Redirect>
        }
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Icon type="pie-chart" />
                                <span>Option 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" />
                                <span>Option 2</span>
                            </Menu.Item>
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="user" /><span>User</span></span>}
                            >
                                <Menu.Item key="3">Tom</Menu.Item>
                                <Menu.Item key="4">Bill</Menu.Item>
                                <Menu.Item key="5">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="team" /><span>Team</span></span>}
                            >
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9">
                                <Icon type="file" />
                                <span>File</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }} />
                        <Content style={{ margin: '0 16px' }}>
                            <Breadcrumb style={{ margin: '16px 0' }}><Breadcrumb.Item>User</Breadcrumb.Item><Breadcrumb.Item>Bill</Breadcrumb.Item></Breadcrumb>
                            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
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
