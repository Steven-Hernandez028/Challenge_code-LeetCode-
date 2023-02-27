
const covert = (s, numRows)=>{

    if( numRows === 1) return s;

    const rows = new Array(numRows).fill('');

    let curRow = 0;
    let direction = -1;

    for (const char of s){
        rows[curRow] += char;
        if(curRow === 0 || curRow === numRows -1){

            direction *= -1;
        }
        curRow += direction;
    }
    return rows.join('')
}