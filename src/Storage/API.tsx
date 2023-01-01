import axios from 'axios';
import { Errors, Info } from '../Utils/Codes';
import { isaValidEmail } from '../Utils/isValidEmail';
import { isValidpassword } from '../Utils/isValidpassword';

const instance = axios.create({
    baseURL: "localhost:1234",
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export const login = (username,password,CALLBACK) => {
    var response = Info[0]
    
    if(!isaValidEmail(username)){
        response = Errors[0]
    }

    if(!isValidpassword(password) && response.go){
        response = Errors[1]
    }

    if(response.go){
        axios({
            method: 'get',
            url: 'login',
            params: {
                username: username,
                password: password
            },
        })
            .then(function (response_API) {
                response.message = response_API.data
                CALLBACK(response)
            }).catch(function (response_API) {
                response.message = response_API
                response.code = -1
                response.go = false
                CALLBACK(response)
            })
    }else{
        CALLBACK(response)
    }

}
