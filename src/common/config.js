let isProd=(process.env.NODE_ENV === 'production');
const config = {
    //接口地址 键值对应模块和路径
    router: {
        //测试 和 线上
        // erpApi: isProd ? 'https://erp.gooeto.com/API' : 'https://erptest.gooeto.com/API',//所有接口
        erpApi: isProd ? 'https://erp.gooeto.com/API' : 'http://10.10.10.6:8001',//所有接口
    },
    menu:[
        { name: '商品管理',keyword:'01', key: 'productList', url: '/productList', type:'shop',son: [] },
        { name: '权限角色管理',keyword:'02', key: 'roleList', url: '/roleList', type:'usergroup-add',son: [] },
    ]
};
export default config;