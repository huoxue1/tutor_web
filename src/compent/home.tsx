import {Component} from "react";

class Home extends Component<any, any>{

    componentDidMount() {
        this.deleteQuery()
    }

    private deleteQuery = ()=>{
        let url = window.location.href;
        if (url.indexOf("?") !== -1) {
            url = url.replace(/(\?)[^'"]*/, '');
            window.history.pushState({}, '0', url);
        }
    }

    render() {
        return <>
            <h1>这里是首页</h1></>;
    }
}

export default Home
