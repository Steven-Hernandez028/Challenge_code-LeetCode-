const arraySortedOrNot = (arr,n)=>{
        if(n===1 || n==0) return 1;
        if(arr[n-1] <arr[n-2]) return 0;
        return arraySortedOrNot(arr, n-1);
}

export const minDeletionSize=()=>{


    let arr = [ "abc","dea" ];
    let n = arr.length;
     
    if (arraySortedOrNot(arr, n) != 0)
        return 1
    else
       return 0
     
           
}