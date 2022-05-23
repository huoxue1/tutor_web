import React, {Component} from 'react';
import {AppOutline, UserOutline,} from 'antd-mobile-icons'
import {Badge, TabBar} from 'antd-mobile'
import './App.css';
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from "./compent/home";
import User from "./compent/user";
import {createHashHistory} from 'history';
import api from "./utils/api";
import Login from "./compent/login";
import Register from "./compent/register";



class App extends Component<any, any> {
    private readonly history: any;
    private isLogin:boolean = false;


    constructor(props: any) {
        super(props);
        this.history = createHashHistory({});
    }

    componentDidMount() {

        api.checkLogin().then((result) =>{
            if (result){
                this.history.replace("/index/home")
            }else {
                this.history.replace("/login")
            }
        })
    }

    render() {

        return <>
            <HashRouter>
                <Route path={"/index"}>
                    <Switch>
                      <Route path={"/index/home"} exact>
                        <Home history={this.history}/>
                      </Route>
                      <Route path={"/index/user"} exact>
                        <User history={this.history}/>
                      </Route>
                    </Switch>
                <TabBars history={this.history}/>
                </Route>
                <Route path={"/login"}>
                    <Login history={this.history} />
                </Route>
                <Route path={"/register"}>
                    <Register history={this.history}/>
                </Route>
                <Route path={"/"} exact={true}>
                    <TabBars history={this.history}/>
                </Route>
            </HashRouter>
        </>
    }
}

class TabBars extends Component<any, any> {




    tabs = [
        {
            key: 'home',
            title: '首页',
            icon: <AppOutline/>,
            badge: Badge.dot,
            path: "/home"
        },
        {
            key: 'user',
            title: '个人中心',
            icon: <UserOutline/>,
            path: "/user"
        },
    ]

    onChange = (key: string) => {
        console.log(this.props)
        this.props.history.replace("/index/" + key)
    }

    render() {
        return <div style={{position: 'fixed', height: '50px', width: '100%', bottom: 0, zIndex: 9}}>
            <TabBar onChange={this.onChange} style={{}}>
                {this.tabs.map(item => (
                    <TabBar.Item key={item.key} icon={item.icon} title={item.title}/>
                ))}
            </TabBar>
        </div>;
    }
}

export default App;
