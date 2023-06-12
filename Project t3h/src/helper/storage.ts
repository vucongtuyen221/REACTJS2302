

const Token = 'token';
const userInFo = 'user'

interface Acc {
   
    username: string;
}

export const saveToken =(token:string) => {
    localStorage.setItem('token', JSON.stringify(token))

};
export const getToken =() => {
    return localStorage.getItem(Token);
}



export const saveUser = (userIn: Acc ) => {
    localStorage.setItem(userInFo, JSON.stringify(userIn))
}

export const getUserIn = ():Acc | null =>{
const User = localStorage.getItem(userInFo);
if (typeof User === "string") {
   const Userkey = JSON.parse(User) as Acc;
   return Userkey
}
return null;
}

export const IsLoginSS = (): boolean =>{
    const token = getToken();
    return token != null && "" != token;
}