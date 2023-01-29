// @param {number} x
// @return {number}
 const ArrayToString = (arr,str)=>{
    for(let i = arr.length -1; i >=0; i--){
      str += arr[i];
    }

  return str;
 }



export const reverseInteger = (n) => {
  const MAX_NUM = Math.pow(2, 31);
  const MIN_NUM = Math.pow(-2, 31);

  const newArray = Array.from(n.toString());
  let string = "";
  let newString= "";

  if (n > 0) {
    newString = ArrayToString(newArray, string);
  } else {
    newArray.shift();
    newArray.push("-");
    newString = ArrayToString(newArray,string);
  }

  
  Number(newString);

  if (newString >= MAX_NUM || newString <= MIN_NUM ) return 0;

  return newString;
};

