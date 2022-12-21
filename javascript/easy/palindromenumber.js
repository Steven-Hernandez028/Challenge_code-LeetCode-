export const IsPalindrome=(x)=>{
    let string = x.toString();
    let newString = '';

    for(let i =string.length -1; i>=0; i--){
        newString += string[i];
    }

    const bool = newString === x? true : false;

    return bool
}