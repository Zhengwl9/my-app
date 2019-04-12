import React, { Component } from 'react';
import { Input, Icon } from 'antd';
class Login extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="login">
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore={<Icon type="setting" />} addonAfter=".com" defaultValue="mysite" />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <Input addonBefore={<Icon type="setting" />} defaultValue="mysite" />
                </div>
            </div>
        )
    }
}
export default Login;
