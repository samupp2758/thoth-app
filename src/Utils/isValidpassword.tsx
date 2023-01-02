//Contains Uppercase
//Contains Lowercase

//Contains Special Characters
//Contains more than 10 charcaters
//Container up to 16 characters
//Contains Numbers

import { Errors, Info } from "./Codes"

export const isValidpassword = (password) => {
    var response = true

    if(!(/[A-Z]/.test(password)) ||
    !(/[a-z]/.test(password)) ||
    !(/[0-9]/.test(password)) ||
    !(/[!#$%&]/.test(password)) ||
    password.length < 10 ||
    password.length > 16 ||
    (/[<//\.\*()~\+""''>]/.test(password))){

        response = false
    }


    return response
}