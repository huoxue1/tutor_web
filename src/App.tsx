import React, {Component} from 'react';
import {AppOutline, UserOutline,} from 'antd-mobile-icons'
import {Badge, TabBar} from 'antd-mobile'
import './App.css';
import '@nutui/nutui-react/dist/style.css'
import {HashRouter, Route, Switch} from 'react-router-dom'
import Home from "./compent/home";
import User from "./compent/user";
import {createHashHistory} from 'history';


class App extends Component<any, any> {
    private readonly history: any;


    constructor(props: any) {
        super(props);
        this.history = createHashHistory({});
        this.history.replace("/home")
    }

    render() {

        return <>
            <HashRouter>
                    <Switch>
                      <Route path={"/home"} component={Home}/>
                      <Route path={"/user"} component={User}/>
                    </Switch>




                <Routers history={this.history}/>
            </HashRouter>
        </>
    }
}

class Routers extends Component<any, any> {




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
        this.props.history.replace("/" + key)
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
