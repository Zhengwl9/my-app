import React from 'react'
import {Form, Icon, Input, Button,Select,message} from 'antd';
import './login.less'
import Axios from '../../common/Axios'
import { connect } from 'react-redux'
import { firstLogin} from '../../store/actions'
const Option = Select.Option;
class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                Axios.post('/user/login', values).then(data=>{
                    if(data){
                        this.props.dispatch(firstLogin(data.data.userInfo));
                        message.success('登录成功！' );
                        console.log(1);
                        this.props.history.push('/productList');
                    }
                });
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{border:'1px solid transparent'}}>
                <div className="login-form">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item>
                            {getFieldDecorator('loginName', {
                                rules: [{ required: true, message: '请输入用户名' }],
                            })(
                                <Input size="large" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' }],
                            })(
                                <Input size="large" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('source', {
                                initialValue:'yiguan',
                                rules: [{ required: true, message: '请选择来源' }],
                            })(
                                <Select placeholder="请选择来源" size="large">
                                    <Option value="yiguan">中医馆</Option>
                                </Select>
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button size="large" type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>

        );
    }
}

let WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
WrappedNormalLoginForm = connect()(WrappedNormalLoginForm);
export default WrappedNormalLoginForm

