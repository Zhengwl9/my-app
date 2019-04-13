import React from 'react'
import {Form, Input, Button, Modal} from 'antd';
import Authority from './authority'

class AddRole extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.roleSave(values);
            }
        });
    };
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 19} };
        let {checkedKeys,onCheck,visible,isAdd}=this.props;
        return (
            <Modal
                title={isAdd ? '添加' : '编辑'}
                visible={visible}
                onCancel={this.props.cancelSave}
                footer={null}
            >
                <Form onSubmit={this.handleSubmit}>
                    <Form.Item label="角色名称" {...formItemLayout}>
                        {getFieldDecorator('roleName', {
                            rules: [{ required: true, message: '请输入角色名称' }],
                        })(
                            <Input   placeholder="角色名称" />
                        )}
                    </Form.Item>
                    <Form.Item label="备注" {...formItemLayout}>
                        {getFieldDecorator('remark', {
                            rules: [],
                        })(
                            <Input  placeholder="备注" />
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Authority checkedKeys={checkedKeys} onCheck={onCheck}/>
                    </Form.Item>
                    <div className="add-btns">
                        <Button onClick={this.props.cancelSave}>取消</Button>
                        <Button type="primary" htmlType="submit">保存</Button>
                    </div>
                </Form>
            </Modal>
        );
    }
}

let AddRoleForm = Form.create()(AddRole);
export default AddRoleForm

