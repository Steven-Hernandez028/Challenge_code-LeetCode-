
const substractProductAndSum =(n)=>{
        let totalSum = 0, totalProdct  = 1;
         const num = String(n);
    for(let i =0; i<num.length;i++){
        totalProdct  *= Number(num[i]);
        totalSum += Number(num[i]);
    }
 
    return totalProdct - totalSum;
}