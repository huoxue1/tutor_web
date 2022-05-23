import Http from "./request";

let http = new Http({
    baseURL: "/",
    timeout: 30000
});

// let base = process.env.REACT_APP_BASE_URL

class API {
    // 验证登录状态 /check_login
    checkLogin = async ():Promise<boolean>=>{
        let token = sessionStorage.getItem("auth_token")
        console.log(token)
        return token !== null;

    }

    // 三方授权登录 /auth/login
    authLogin = async (name:string,code:string):Promise<boolean> =>{
        console.log("/auth/login   "+name+code)

        sessionStorage.setItem("auth_token",code)
        return true
    }
}





export default new API();
