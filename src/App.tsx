import React, {Component} from 'react';
import {Button, Tabbar, TabbarItem} from "@nutui/nutui-react";
import './App.css';
import '@nutui/nutui-react/dist/style.css'

class App extends Component<any, any>{

  render() {
    return <>
      <Button type="primary">我要教人</Button>
      <Button type="info">我要被教</Button>
      <Tabbar bottom>
        <TabbarItem tabTitle="首页" href="" icon="home" />
        <TabbarItem tabTitle="我的" href="######" icon="my" />
      </Tabbar>
    </>
  }
}

export default App;
