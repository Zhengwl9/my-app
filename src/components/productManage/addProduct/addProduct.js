import React from 'react'
import Title from './title'
import {Form,Input,Button} from 'antd'
import './addProduct.less'
const FormItem = Form.Item;
class AddProduct extends React.Component{
    constructor(props){
        super(props);
        this.state={};
    }
    render(){
        const formItemLayout = { labelCol: { span: 8 }, wrapperCol: { span: 16} };
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="add-product">
                <Form {...formItemLayout} >
                    <Title title="基础信息"/>
                    <div className="form-style">
                        <FormItem label="商品名称">
                            {getFieldDecorator('email')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="通用名称">
                            {getFieldDecorator('email1', )(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="品牌">
                            {getFieldDecorator('email2', )(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <div className="form-style">
                        <FormItem label="生产厂家">
                            {getFieldDecorator('a')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="商品编码">
                            {getFieldDecorator('b', )(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="条码">
                            {getFieldDecorator('c', )(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <div className="form-style">
                        <FormItem label="简称">
                            {getFieldDecorator('d')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="助记码">
                            {getFieldDecorator('e', )(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="备注">
                            {getFieldDecorator('f', )(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <Title title="价格信息"/>
                    <div className="form-style">
                        <FormItem label="税率">
                            {getFieldDecorator('aa')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="建议售价">
                            {getFieldDecorator('bb', )(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <Title title="规格信息"/>
                    <div className="form-style">
                        <FormItem label="规格">
                            {getFieldDecorator('cc')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="单位">
                            {getFieldDecorator('dd', )(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="剂型">
                            {getFieldDecorator('ee', )(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <div className="form-style">
                        <FormItem label="类别">
                            {getFieldDecorator('ff')(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <Title title="合规信息"/>
                    <div className="form-style">
                        <FormItem label="批准文号">
                            {getFieldDecorator('gg')(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="文号有效期">
                            {getFieldDecorator('hh', )(
                                <Input />
                            )}
                        </FormItem>
                        <FormItem label="供货商">
                            {getFieldDecorator('i', )(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                    <div className="form-style">
                        <FormItem label="保质期">
                            {getFieldDecorator('j')(
                                <Input />
                            )}
                        </FormItem>
                    </div>
                </Form>
                <div className="add-btns">
                    <Button onClick={()=>{this.props.history.goBack();}}>取消</Button>
                    <Button type="primary">保存</Button>
                </div>
            </div>
        )
    }
}
const AddProductForm = Form.create()(AddProduct);
export default AddProductForm;
