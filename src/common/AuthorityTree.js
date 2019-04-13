import React from 'react'
import {Tree} from 'antd';
const TreeNode = Tree.TreeNode;
const loop = data =>
    data.map((item) => {
        if (item.son.length) {
            return (
                <TreeNode key={item.keyword} title={item.name}>
                    {loop(item.son)}
                </TreeNode>
            );
        }
        return <TreeNode key={item.keyword} title={item.name} className='finalNode' />;
    });
export default loop;