let obj = {

    a : true ,
    b : 1,
    c : {
        ca : false,
        cb : 1 ,
        cc : "mehboob",
        cd : { 
            cda : 0,
            cdb : null,
            cdc : "anusha",
        } 

    },
    d : 0,
    e : null
}



function getDeepValues(obj){
    Object.keys(obj).forEach( elm => {
  
        const val = obj[elm];
        
        if(val) {
            debugger;
            if(typeof val === 'object' && Object.keys(val).length > 1 ) {
                getDeepValues(val);
            } else
                truthyValues.push(val); 
        }
    })
}
let truthyValues = [];

getDeepValues(obj);

console.log(truthyValues);