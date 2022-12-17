/*
    @param {numero[]} numeros
    @param {numero} objetivo
    @return {numero}

*/

export const searchInsert =(numero, objetivo)=>{
    if(numero.indexOf(objetivo) == -1){
        numero.push(objetivo);
        return numero.sort((a,b)=>a-b).indexOf(objetivo);
    }else{
       return numero.indexOf(objetivo);
    }


    
} 