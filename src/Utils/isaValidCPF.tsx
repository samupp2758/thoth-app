export const isaValidCPF = (cpf) =>{
    var sum;
    var remain;
    sum = 0;
  if (cpf == "00000000000") return false;

  for (var i=1; i<=9; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (11 - i);
  remain = (sum * 10) % 11;

    if ((remain == 10) || (remain == 11))  remain = 0;
    if (remain != parseInt(cpf.substring(9, 10)) ) return false;

  sum = 0;
    for (var i = 1; i <= 10; i++) sum = sum + parseInt(cpf.substring(i-1, i)) * (12 - i);
    remain = (sum * 10) % 11;

    if ((remain == 10) || (remain == 11))  remain = 0;
    if (remain != parseInt(cpf.substring(10, 11) ) ) return false;
    return true;
  
}