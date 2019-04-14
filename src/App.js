import React, { Component } from 'react';
import RouteWithSubRoutes from './router/RouteWithSubRoutes';
import {Redirect ,Link} from 'react-router-dom';
import {Layout, Menu, Breadcrumb,Select,Icon} from 'antd';
import config from './common/config'
import Component404 from './components/404/404'
import {firstLogin, loginOut} from './store/actions'
/**containers**/
import { connect } from 'react-redux'
const { Content, Sider} = Layout;
const Option = Select.Option;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item; //antd子菜单

@connect((state)=>({userinfo: state.userinfo}))
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
            menu:config.menu,
            changeValue:'1',
        };
    }
    componentWillMount() {
        this.isLogin();
        window.myReact=this;
    }
    componentDidMount() {
        this.unlisten =this.props.history.listen(() => {
            window.myReact=this;
        })
    }
    componentWillUnmount() {
        this.unlisten();
    }
    //判断是否登陆
    isLogin=()=>{
        if(!sessionStorage.getItem('token')){
            this.props.history.push('/login')
        }else{
            if(!this.props.userinfo.token){
                this.props.dispatch(firstLogin());
            }
            //修改权限列表
            let userinfo=JSON.parse(sessionStorage.getItem('userInfo'));
            if(userinfo.isRoot==='N'){
                let keys=userinfo.roles.map(item=>item.key);
                let menu=this.state.menu.filter(item=>keys.indexOf(item.keyword)!==-1)
                this.setState({
                    menu,
                })
            }
        }
    };
    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    };
    changeSelect=(value)=>{
        //退出登录
        if(value==='3'){
            this.props.dispatch(loginOut());
            return;
        }
        this.setState({
            changeValue:value,
        })
    }
    render() {
        if(!sessionStorage.getItem('token')){
            return <Redirect to={'/login'}/>
        }
        if(this.props.location.pathname==='/'){
            return <Redirect to={'/productList'}/>
        }
        if(!this.props.routes.find(item => item.path === this.props.location.pathname)){
            return <Component404/>
        }
        let {menu,changeValue}=this.state;
        let userinfo=JSON.parse(sessionStorage.getItem('userInfo'));
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider
                        collapsible
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                    >
                        <Menu theme="dark" mode="inline">
                            {menu.map(item=>{
                                if (item.son.length){
                                    return (
                                        <SubMenu key={item.key} title={<span>{item.name}</span>}>
                                            {item.son.map(son => {
                                                return (
                                                    <MenuItem key={son.key}>
                                                        <Link to={son.url}> <Icon type={item.type} /><span>{son.name}</span></Link>
                                                    </MenuItem>
                                                )
                                            })}
                                        </SubMenu>
                                    )
                                }
                                else {
                                    return (
                                        <MenuItem key={item.key}>
                                            <Link to={item.url}><Icon type={item.type} />{item.name}</Link>
                                        </MenuItem>
                                    )
                                }
                            })}
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '0 16px' }}>
                            <div className="flex-between">
                                <Breadcrumb style={{ margin: '16px 0' }}>
                                    <Breadcrumb.Item>进销存</Breadcrumb.Item>
                                    <Breadcrumb.Item>{this.props.routes.find(item=>item.path===this.props.location.pathname).name}</Breadcrumb.Item>
                                </Breadcrumb>
                                <div>
                                    <Icon type="user"/>&nbsp;
                                    <Select
                                        style={{ width: 200 }}
                                        value={changeValue}
                                        onChange={this.changeSelect}
                                    >
                                        <Option value="1">{userinfo?userinfo.user.userName:''}</Option>
                                        <Option value="2">修改密码</Option>
                                        <Option value="3">退出账户</Option>
                                    </Select>
                                </div>
                            </div>
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

export default (App);
