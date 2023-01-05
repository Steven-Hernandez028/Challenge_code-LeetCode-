
// variable = [100,200,400,600]
//[200,400]
// acum = acum  + 200;
// 0   = 0 + 200
//acum = 200


// 200 = 200+400;
// 600
const average =(salary)=>{
        let newsalaries = [];
      salary.sort((a,b)=>a-b);

        for(let i = 1; i<salary.length -1; i++){
            newsalaries.push(salary[i]);
        }
       let total =  newsalaries.reduce((a,b)=> a+b,0)
        return  total / newsalaries.length;

}   