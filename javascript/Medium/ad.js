// var letterCombinations = function(digits) {
//     if (!digits) return []
    
//     let map = {
//         2: ['a', 'b', 'c'],
//         3: ['d', 'e', 'f'],
//         4: ['g', 'h', 'i'],
//         5: ['j', 'k', 'l'],
//         6: ['m', 'n', 'o'],
//         7: ['p', 'q', 'r', 's'],
//         8: ['t', 'u', 'v'],
//         9: ['w', 'x', 'y', 'z']
//     };
    
//     let res = [];
    
//     function generateCombinations(currStr, idx) {
//         if (currStr.length === digits.length) {
//             res.push(currStr);
//             return;
//         }
        
//         let currDigit = digits[idx];
        
//         for (let char of map[currDigit]) {
//             generateCombinations(currStr + char, idx + 1);
//         }
//     }
    
//     generateCombinations('', 0);
    
//     return res;
// };


// var letterCombinations = function(digits) {
//     let nums={
//         2:['a','b','c'],
//         3:['d','e','f'],
//         4:['g','h','i'],
//         5:['j','k','l'],
//         6:['m','n','o'],
//         7:['p','q','r','s'],
//         8:['t','u','v'],
//         9:['w','x','y','z'],
        
//     };
    
//     let num=digits.split('');
//     let objNums = Object.keys(nums);
//     let res=[];
//     let first=[];
//     let second=[];
    
//     if(num.length==0) return []
//     if(num.length==1)  return nums[num[0]];
    
//    var groups = function(n1,n2){
//        let g=[]
//         for(let i=0; i< n1.length; i++){
//             for(let j=0; j<n2.length; j++){
           
//              g.push(n1[i].concat(n2[j]))
             
//             }
//          }
//        return g;
//    }

   
//    res= groups(nums[num[0]],nums[num[1]]);
    
//     for(let i=2; i< num.length; i++){
//         res = groups(res,nums[num[i]]);
//     }
       
      
//     return res;
// };