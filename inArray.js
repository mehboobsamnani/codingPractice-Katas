const a2 = ['lively', 'armstrong', 'kidman', 'alive', 'sharp', 'harp'];
const a1 = ['live', 'xyz', 'strong'];

function inArray(array1, array2) {
    return array1.filter(word => {
        return array2.find(ending => word.endsWith(ending))
    });
}
function inArray(array1, array2) { 
    const results = [];
    array1.forEach(word => {
        for(let i = 0; i < array2.length-1;i++) {
            const ending = array2[i];
            if(word.endsWith(ending)){
                results.push(ending);
                array2.splice(i,1);
                break;
            }
        }
    });
}

function inArray(array1, array2) {
    
    return array1.filter(word => {
        return array2.some(ending => word.endsWith(ending))
    }).sort();
}
