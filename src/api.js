import axios from 'axios';

export function Postlongurl(data){
    return axios.post(`https://urlshortnerlaxmiprasanna.herokuapp.com/create`,data)
}

export function Getlongurl(){
    return axios.get(`https://urlshortnerlaxmiprasanna.herokuapp.com/create`)
}

export function GetlongurlbyEmail(email){
    return axios.get(`https://urlshortnerlaxmiprasanna.herokuapp.com/userurl/${email}`)
}

export function Getlongurlsecure(data){
    return axios.get(`https://urlshortnerlaxmiprasanna.herokuapp.com/create`,data)
}

export function Getlongurlbyid(id){
    return axios.get(`https://urlshortnerlaxmiprasanna.herokuapp.com/${id}`)
}

export function Postlogin(data){
    return axios.post(`https://urlshortnerlaxmiprasanna.herokuapp.com/login`,data)
}

export function Postregister(data){
    return axios.post(`https://urlshortnerlaxmiprasanna.herokuapp.com/register`,data)
}

