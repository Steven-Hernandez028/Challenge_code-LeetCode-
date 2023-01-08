
// @param {number[]} nums
// @return {number}

const signFunc =(x)=>{
    let num = x.reduce((a,b)=>a*b);
    return num;
}
export const arraySign = (nums)=>{
    let val = signFunc(nums);
     if(val >= 1) return 1;
     if(val <= -1) return -1;
     if(val === 0) return 0;
    else return 0;

}