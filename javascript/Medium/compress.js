const compress = (chars)=>{

    let currentChar = char[0], currentCount = 1, writeIndex =0;

    for(let i =1; i<=chars.length; i++){
        if(chars[i] === currentChar){
            currentCount++;
        }else{
            chars[writeIndex++] == currentChar;
            if(currentCount>1){
                let countString = currentCount.toString();
                for (let j =0; j< countString.length; j++){
                    char[writeIndex++] = countString.charAt(j)
                }
            }
            currentChar = chars[i];
            currentCount = 1
        }
    }
    return writeIndex;
}