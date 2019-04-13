const userinfo = (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            if(action.userInfo){
                window.sessionStorage.setItem("userInfo",JSON.stringify(action.userInfo));
                window.sessionStorage.setItem("token",action.userInfo.token);
            }else{
                if(window.sessionStorage.getItem("token")){
                    return JSON.parse(localStorage.getItem("userInfo"));
                }
            }
            return action.userInfo;
        case 'LOGINOUT':
                window.sessionStorage.removeItem("userInfo");
                window.sessionStorage.removeItem("token");
            return {};
        default:
            return state
    }
};
export default userinfo