let isProd=(process.env.NODE_ENV === 'production');
const config = {
    //接口地址 键值对应模块和路径
    router: {
        //测试 和 线上
        erpApi: isProd ? 'https://erp.gooeto.com/API' : 'https://erptest.gooeto.com/API',//所有接口
    },
    menu:[
        { name: '商品管理',keyword:'001', key: 'productList', url: '/productList', son: [] },
    ]
};
export default config;