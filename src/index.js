import React from 'react'
import { render } from 'react-dom'
import './index.less';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './store/reducers'
import Router from './router';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import {BrowserRouter } from 'react-router-dom';
let store = createStore(todoApp);
render(
    <LocaleProvider locale={zh_CN}>
        <Provider store={store}>
            <Router history={BrowserRouter}/>
        </Provider>
    </LocaleProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
