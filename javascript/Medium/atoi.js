/**
 * @param {string} s
 * @return {number}
 */

export const atoi = (str) => {
  const MAX_NUM = Math.pow(2, 31);
  const MIN_NUM = Math.pow(-2, 31);
  let num = [];

  const newArray = Array.from(str);

  for (const [index, element] of newArray.entries()) {
    if (element != " ") {
      num.push(element);
    }

    // if (isNaN(element)) {
    //   if (element == "-") num.push("-");
    //   let i = newArray.indexOf(index);
    //   num.splice(i, 1);
    // }
  }

  // const total = Number(num.join(''));
  // if(total >= MAX_NUM) return MAX_NUM;
  // if(total <= MIN_NUM) return MIN_NUM;
  if(num[0]=='f')
  { return 0
  }
  return num;

}

console.log(atoi("f 0021"));
