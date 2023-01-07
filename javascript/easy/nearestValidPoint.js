    // @param {number} x
    // @param {number} y
    // @param {number[][]} points

    // @return {number}

const nearestValidPoint =(x,y,points)=>{

        const min = Infinity;
        let manhattan;

        for(let i=0; i<points.length; i++){
            if( manhattan === 0 ) return 0;
            let [cx,cy] = points[i];
            if(cx === x  || cy === y){
                let dist = ((x-cx) + (y-cy)) * 1;
                if(dist < min){
                        min = dist;
                        manhattan = i;
                }

            }
            
        }
            return manhattan ? manhattan : -1;
     
}   