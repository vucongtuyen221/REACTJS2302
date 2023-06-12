
import axios from "axios";
import { useNavigate } from "react-router";



export interface IRes {
    email: string;
    password: string;
    callphone : string;
    rempasswword: string;
}


 
export const ApiRes = (params: IRes) => {
console.log(params)
return axios.post(`https://64852d60a795d24810b6c0e2.mockapi.io/api/v1/acc`, params).then((res) =>{
   
   

})

}
