
function isValidWalk(walk) {
    if(walk.length != 10) return false;
    let ns = 0, we = 0; 
      for (let dir of walk) { 
        if (dir == 'n') ns += 1; 
        if (dir == 's') ns -= 1; 
        if (dir == 'w') we += 1; 
        if (dir == 'e') we -= 1; 
      } 
 
     return ns === 0 && we === 0; 

 }

console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']), 'should return true');
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']), 'should return false');
console.log(isValidWalk(['w']), 'should return false');
console.log(isValidWalk(['w','n','w','s','e','n','e','s','n','s']), 'should return true');


