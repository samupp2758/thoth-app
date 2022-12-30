import axios from 'axios';
import { Errors, Info } from '../Utils/Codes';
import { isaValidEmail } from '../Utils/isValidEmail';
import { isValidpassword } from '../Utils/isValidpassword';

export const login = (username,password) => {
    var response = Info[0]
    
    if(!isaValidEmail(username)){
        response = Errors[0]
    }

    if(!isValidpassword(password) && response.go){
        response = Errors[1]
    }


    return response
}
