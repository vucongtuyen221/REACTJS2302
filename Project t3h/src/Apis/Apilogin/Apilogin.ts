import axios from "axios";




export interface Ilogin {
    email: string;
    password: string;
}
export interface loginRes {
    username: string;
    token: string;
}

 
export const Apilogin = (params: Ilogin) => {
console.log(params)
return axios.post(`https://64852d60a795d24810b6c0e2.mockapi.io/api/v1/login`, params).then((res) =>{
     const LoginR : loginRes= {
        username: res.data.email,
        token: res.data.token  
     }
     return LoginR
    });
}
