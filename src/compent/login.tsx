import {Button, Form, Input, Tabs} from "antd-mobile";
import {Component} from "react";
import {Link} from 'react-router-dom'
import api from "../utils/api";
class Login extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        const data = new URL(window.location.toString()).searchParams.get("code");

        const name = this.props.history.location.pathname.replace("/login/","")
        console.log(name)
        if (data !== null){
            api.authLogin(name,data).then((result => {
                if (result){
                    console.log("1")
                    this.props.history.push("/index")
                }
            }))
        }
    }

    render() {
        return <>
            <Tabs>
                <Tabs.Tab title={"手机登录"} key={"phone_login"}>
                    <Form
                        footer={
                            <Button block type='submit' color='primary' size='large'>
                                提交
                            </Button>
                        }
                    >
                        <Form.Item style={{height: "60px"}} name={"phone"}>
                            <Input placeholder='请输入手机号'/>
                        </Form.Item>

                        <Form.Item style={{height: "60px"}} name={"code"}
                                   extra={<Button style={{color: "#000", background: "#909ca9"}}>发送验证码</Button>}>
                            <div>
                                <Input placeholder='请输入验证码'/>
                            </div>

                        </Form.Item>
                    </Form>
                </Tabs.Tab>
                <Tabs.Tab title={"邮箱登录"} key={"email_login"}>
                    <Form
                        footer={
                            <Button block type='submit' color='primary' size='large'>
                                提交
                            </Button>
                        }
                    >
                        <Form.Item style={{height: "60px"}} name={"phone"}>
                            <Input placeholder='请输入你的邮箱'/>
                        </Form.Item>

                        <Form.Item style={{height: "60px"}} name={"code"}
                                   extra={<Button style={{color: "#000", background: "#909ca9"}}>发送验证码</Button>}>
                            <div>
                                <Input placeholder='请输入验证码'/>
                            </div>

                        </Form.Item>

                    </Form>
                </Tabs.Tab>
            </Tabs>
            <span style={{textAlign: "right"}}><h1 style={{paddingRight: "60px", fontSize: 30}}><Link to={"/register"}>注  册</Link></h1></span>
            <div style={{left: "25%", display: "inline", position: "relative"}}>
                <span>
                    <svg style={{marginRight: "50px"}} d="1653051412317" className="icon" viewBox="0 0 1024 1024"
                         version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="2986" width="35" height="35"><path
                        d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                        p-id="2987" fill="#1296db"/></svg>
                    <svg style={{marginRight: "50px"}} d="1653051626811" className="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4108" width="35" height="35"><path
                        d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                        p-id="4109" fill="#59b92f"/></svg>
                    <span  onClick={this.login}><svg d="1653109726021" className="icon" viewBox="0 0 1024 1024" version="1.1"
                              xmlns="http://www.w3.org/2000/svg" p-id="2370" width="35" height="35"><path
                        d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                        fill="#C71D23" p-id="2371"/></svg>
                    </span>

            </span>
            </div>

        </>;
    }

    login = ()=>{
        const client_id = "68fdb90e2d14944449d35842623878848dafd8f8b43430d70a409e23114a676b"
        const redirect_url = "http://localhost:3000/tutor_web#/login/gitee"
        console.log("跳转")
        window.location.replace(`https://gitee.com/oauth/authorize?client_id=${client_id}&redirect_uri=${encodeURIComponent(redirect_url)}&response_type=code&scope=user_info`)
    }
}

export default Login
