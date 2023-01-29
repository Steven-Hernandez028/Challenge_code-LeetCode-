



export const repeatedSubstringPattern =(s)=>{
      return  s.length  === 1 || s.length === 0? false s.repeat(2).subString(1,-1).includes(s);
      

}