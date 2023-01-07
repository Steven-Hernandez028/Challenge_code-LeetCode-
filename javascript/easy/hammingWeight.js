export const hammingWeight=(n)=>{
    let total = 0;
    const string =  n.toString(2);
    for(let i = 0; i<string.length; i++){
        total  += string[i] ==="1";
    }
    return total;
}