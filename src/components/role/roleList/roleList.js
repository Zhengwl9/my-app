import React from 'react';
import './roleList.less';
import { Button, Table, message} from 'antd';
import AddRole from '../addRole/addRole'
import Axios from '../../../common/Axios'
export default class RoleManage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAdd:true,
            checkedKeys:[],
            visible: false, //新增角色对话框
            rolesList: [],// 会员列表
        }
    }
    componentDidMount() {
        this.getRolesList();
    }
    //获取角色列表
    getRolesList() {
        Axios.get('/roles/roleList').then(data=>{
            if(data){
                this.setState({
                    rolesList:data.data.rows,
                });
            }
        });
    }
    //添加角色
    addRole=() =>{
        this.setState({
            visible: true,
            isAdd:true,
        },);
    };
    //权限变化
    onCheck=(checkedKeys)=>{
        console.log(checkedKeys);
        this.setState({
            checkedKeys
        })
    };
    roleSave=(data)=>{
        console.log(data);
        let sendData={...data,...{rightList:this.state.checkedKeys,parentroleId:0}}
        Axios.post('/roles/role', sendData).then(data=>{
            if(data){
                message.success('新增成功！')
                this.cancelSave();
            }
        });
    };
    cancelSave=()=>{
        this.inputElement.resetFields();
        this.setState({
            visible:false,
            checkedKeys:[],
        })
    };
    handleEdit=(record)=>{

    };
    handleDelete=(id)=>{

    };
    render() {
        const columns = [
            {
                title: '序号',
                dataIndex: 'index',
                render:(text,record,i)=>i+1
            },{
                title: '角色名称',
                dataIndex: 'roleName',
            },{
                title: '菜单权限',
                dataIndex: 'a',
            }, {
                title: '操作',
                dataIndex: 'roleId',
                render: (text, record) => (
                    <>
                        <Button onClick={this.handleEdit.bind(this,record)}>编辑</Button> <Button type="danger" onClick={this.handleDelete.bind(this,text)}>删除</Button>
                    </>
                )
            }
        ];
        let {rolesList,isAdd,checkedKeys,visible}=this.state;
        return (
            <div className='container'>
                <div className='role-manage-box' >
                    {/*添加按钮*/}
                    <div className="btns">
                        <Button onClick={this.addRole} type="primary">添加</Button>
                    </div>
                    {/* 角色列表 */}
                    <Table
                        rowKey="roleId"
                        columns={columns}
                        dataSource={rolesList}
                        pagination={false}
                        bordered
                    />
                    {/* 新增角色对话框 */}
                    <AddRole
                        ref={el => this.inputElement = el}
                        checkedKeys={checkedKeys}
                        onCheck={this.onCheck}
                        roleSave={this.roleSave}
                        cancelSave={this.cancelSave}
                        visible={visible}
                        isAdd={isAdd}
                    />
                </div>
            </div>
        )
    }
}
