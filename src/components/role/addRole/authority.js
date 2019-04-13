import React from 'react'
import {Tree} from 'antd';
import AuthorityTree from '../../../common/AuthorityTree'
import config from '../../../common/config'
const TreeNode = Tree.TreeNode;
class Authority extends React.Component {
    handleCheck=(checkedKeys)=>{
        this.props.onCheck(checkedKeys)
    };
    render() {
        let {checkedKeys}=this.props;
        return (
            <div >
                <Tree
                    checkable
                    defaultExpandAll
                    onCheck={this.handleCheck}
                    checkedKeys={checkedKeys}
                    className='privilegeTree'
                >
                    <TreeNode key='00' title='全部'>
                        {AuthorityTree(config.menu)}
                    </TreeNode>
                </Tree>
            </div>

        );
    }
}
export default Authority

