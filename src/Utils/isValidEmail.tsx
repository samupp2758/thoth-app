
export const isaValidEmail = (email) =>{
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        var response = true

        if (!email.match(validRegex) ||
        (/[<//\*()~\+""''>]/.test(email))) {            
            response = false
        }
        return response
      
}