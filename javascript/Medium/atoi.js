
export const atoi = (str) => {

    const Round = (n) => {
        if (n > 0) {
          return n << 0;
        }
        return (n - 1) << 0;
      };
      
  let initial = 0,
    res = 0,
    sign = 1;
 
  while (str[initial] == ' ' && initial < str.length) {
    initial++;
  }

  if (str[initial] == '+' || str[initial] == '-' && initial < str.length) {
    sign = str[initial] == '-'? -1 : 1;
    initial++;
  }
  const MAX_INT = Math.pow(2,31) - 1;
  const MIN_INT =  -Math.pow(2,31);
  while ( str[initial] > 0 && str[initial].match(/[0-9]/) != null) {
    const num = str[initial] - "0";
    if (
      res > Math.floor(MAX_INT / 10) ||
      (res === Math.floor(MAX_INT / 10) && num > MAX_INT % 10)
    ){
      return (sign === 1) ? MAX_INT : MIN_INT ;
    }
    res = res * 10 + num;
    initial++;
  }

  return res * sign;
};
