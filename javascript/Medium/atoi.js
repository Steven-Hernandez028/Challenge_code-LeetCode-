




const myAtoi = (s)=>{

  let i = 0, sign = 1, num = 0;

  while (s[i] === ' '){
    i++
  }

  if (s[i] === '+' || s[i] === '-'){

    sign = s[i] === '-' ? -1 : 1;

    i++
  }

  while (i <s.length && /\d/.test(s[i])){

    num = num * 10 + (s[i] - '0');
    i++
  }

  num *= sign;
  num = Math.max(Math.min(num, 2**31 - 1), -(2**31));

  return num;
}