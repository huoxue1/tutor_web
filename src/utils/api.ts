// import Http from "./request";

// let http = new Http({
//     baseURL: "/",
//     timeout: 30000
// });

let base = process.env.REACT_APP_BASE_URL

class API {
    checkLogin = async ():Promise<boolean>=>{
        return true
    }
}





export default new API();
