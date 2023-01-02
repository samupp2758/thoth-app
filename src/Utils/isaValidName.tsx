
export const isaValidName = (name) =>{
    const validRegex = /^[a-zA-Z0-9]/;
    var response = true

    if (!name.match(validRegex) || 
    (/[<//\.\*()~\+""''>]/.test(name))) {            
        response = false
    }
    return response
  
}