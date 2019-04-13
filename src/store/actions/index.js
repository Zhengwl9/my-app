let nextTodoId = 0;
export const addTodo = text => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};

export const toggleTodo = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};


/**新增 用户登入登出**/
export const firstLogin = userInfo => {
    return {
        type: 'LOGIN',
        userInfo
    }
};
export const loginOut = () => {
    return {
        type: 'LOGINOUT',
    }
};