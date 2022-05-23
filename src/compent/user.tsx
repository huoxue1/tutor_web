import {Component} from "react";
import {AutoCenter, Avatar, Button} from "antd-mobile";

class User extends Component<any, any>{
    render() {
        return <>
            <div style={{padding:20}}>
                <AutoCenter style={{marginTop:20}}>
                    <Avatar src={""} style={{borderRadius:"100px","--size":"100px"}} fit={"cover"} />
                </AutoCenter>
                <br/><br/><br/>
                <Button block={true} style={{marginBottom:30}} color={"primary"}>个人资料</Button>
                <Button block={true} style={{marginBottom:30}} color={"primary"}>订单查询</Button>
                <Button block={true} style={{marginBottom:30}} color={"primary"}>关于我们</Button>
                <Button block={true} onClick={this.logout} style={{marginBottom:30}} color={"primary"}>退出登录</Button>
            </div>
        </>
    }

    private logout = ()=>{
        sessionStorage.removeItem("auth_token")
        this.props.history.replace("/login")
    }
}

export default User
