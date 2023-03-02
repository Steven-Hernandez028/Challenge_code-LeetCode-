const combinationSUm = (candidates, target)=>{
    let results = [];

    const backtrack = (startIndex, target, currentList)=>{
        if(target === 0){
            results.push(currentList.slice())
            return;
        }

        for(let i = startIndex; i < candidates.length; i++){
            let candidate = candidates[i];
            if(candidate <= target){
                currentList.push(candidate)
                backtrack(i, target- candidate,currentList)
                currentList.pop();
            }
        }
    }
    backtrack(0,target,[]);
    return results;
}