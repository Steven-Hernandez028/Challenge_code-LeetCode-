// @param {number[]} arr
// @return {bolean}
export const canMakeArithmeticProgression =(arr)=>{

        let val = 0,  order = arr.sort((a,b)=>a-b);
        const diff = order[1] - arr[0];
        
        if(order.length == 2) return true;

        for(let i = 0;i<order.length;i++){
            if(order[i] -  order[i - 1] === diff){
                ++val;
            }

        }
        return val === order.length-1;

}