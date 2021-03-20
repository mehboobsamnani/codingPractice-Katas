
class CacheItem{

    constructor(){
        this.cache = {};
    }

    getItem = (key) => {
        return this.cache[key].val;
    }

    setItem = (key , val , time = 3600) => {
        
        let timeRef = setTimeout(()=> {
            debugger;
            delete this.cache[key];
        },time)

        this.cache[key] = {
            val,
            timeRef
        };
  
    }

    deleteItem = (key) => {
        if(this.cache[key]) { 
            debugger;
            clearTimeout(this.cache[key].timeRef);
            delete this.cache[key];

        }
    }
}

let cacheLib = new CacheItem();

cacheLib.setItem('name' , 'mehboob' ,8000);
console.log(cacheLib.getItem('name'));
cacheLib.deleteItem('name');