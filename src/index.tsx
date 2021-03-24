import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zh_CN from 'antd/lib/locale/zh_CN'
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'lib-flexible';
import "./assets/css/common.less";
import history from "@/history";
import store from '@/store';
import Home from '@/views/Home';
import Profile from '@/views/Profile';
import Mine from '@/views/Mine';
import Login from '@/views/Login';
import Register from '@/views/Register';
import Tabs from '@/components/Tabs';

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ConfigProvider locale={zh_CN}>
                <main className="main-container">
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/mine' component={Mine} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/login' component={Login} />
                        <Route path='/register' component={Register} />
                        <Redirect to="/" />
                    </Switch>
                </main>
                <Tabs />
            </ConfigProvider>
        </ConnectedRouter>
    </Provider>
), document.getElementById("root"));