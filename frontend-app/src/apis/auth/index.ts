import axios from "axios"
import { Url } from ".."

interface ILoginParam {
    usernames: string,
    password: string
}
interface ILoginResponse {
    usernames: string,
    token: string
}

const login = (param: ILoginParam) =>{
 return axios.post(`${Url}/api/v1/login`, param).then((res) => {
 const loginRes: ILoginResponse = {
    usernames: res.data.usernames,
    token: res.data.token
 }
 return loginRes;
 });

}

export {login} 
export type {ILoginParam}