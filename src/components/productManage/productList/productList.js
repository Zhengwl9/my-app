import React from 'react'
import {Input,Button,Table,Pagination } from 'antd';
import './productList.less';
export default class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
     onChange=(pageNumber)=>{
        console.log('Page: ', pageNumber);
    };
    goToAdd=()=>{
        this.props.history.push('/addProduct')
    };
    render(){
        const columns = [
            {
                title: '序号',
                dataIndex: 'name',
            }, {
                title: '名称',
                dataIndex: 'age',
            }, {
                title: '规格',
                dataIndex: 'address',
            },{
                title: '单位',
                dataIndex: 'a',
            },{
                title: '生产厂家',
                dataIndex: 'b',
            },{
                title: '批准文号',
                dataIndex: 'c',
            },{
                title: '文号有效期',
                dataIndex: 'd',
            },{
                title: '条码',
                dataIndex: 'e',
            },{
                title: '增值税率',
                dataIndex: 'f',
            },{
                title: '品牌',
                dataIndex: 'g',
            },{
                title: '类别',
                dataIndex: 'h',
            },{
                title: '剂型',
                dataIndex: 'x',
            },{
                title: '供货商',
                dataIndex: 'j',
            },{
                title: '简称',
                dataIndex: 'k',
            },{
                title: '商品编码',
                dataIndex: 'l',
            },{
                title: '商品编码',
                dataIndex: 'z',
            },{
                title: '助记码',
                dataIndex: 'i',
            },{
                title: '零售价',
                dataIndex: 'm',
            },{
                title: '添加人',
                dataIndex: 'n',
            },{
                title: '添加日期',
                dataIndex: 'o',
            },{
                title: '备注',
                dataIndex: 'p',
               
            },
        ];
        return (
            <div className="product-list">
                <div className="filter-condition">
                    商品名称:<Input placeholder="请输入"/>
                    &nbsp;通用名:<Input placeholder="请输入"/>
                    &nbsp;生产厂家:<Input placeholder="请输入"/>
                    &nbsp;类型:<Input placeholder="请输入"/>
                    &nbsp;<Button type="primary">查询</Button>
                    &nbsp;<Button>重置</Button>
                    &nbsp;<Button type="primary">批量导入</Button>
                </div>
                <div className="btns">
                    <Button type="primary" onClick={this.goToAdd}>新增</Button>
                </div>
                <Table rowKey="index" columns={columns} dataSource={[]} bordered/>
                <div className="fen-ye">
                    <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} />
                </div>
            </div>
        )
    }
}
