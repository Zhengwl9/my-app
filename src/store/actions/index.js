import Axios from '../../common/Axios'
import {message} from "antd";
/**新增 用户登入登出**/
export const firstLogin = userInfo => {
    return {
        type: 'LOGIN',
        userInfo
    }
};

export const login=(values,history)=>{
    return (dispatch,getState)=>{
        // console.log(getState());
        Axios.post('/user/login', values).then(data=>{
            console.log(data);
            if(data){
                dispatch(firstLogin(data.data.userInfo));
                message.success('登录成功！' );
                history.push('/productList');
            }
        });
    }
};


export const loginOut = () => {
    return {
        type: 'LOGINOUT',
    }
};