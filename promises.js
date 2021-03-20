


let arr = [1, 2, 3, 4, 5];

function multiplyItem(item, after) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve(item) }, after);
    })
}

async function loop(item, after) {
    let a = await multiplyItem(item, after);
    console.log(`${a} after ${after / 1000} seconds`);
}

// arr.forEach((val, index)=>{
//     loop(val, index * 1000);
// })


let promise1 = new Promise((res,rej) => {
    setTimeout(()=>{ return rej(200)},0)
});

promise1
.then(value => { return value + ' and bar'; })
.then(value => { return value + ' and bar again'; })
.then(value => { return value + ' and again'; })
.then(value => { return value + ' and again'; })
.then(value => { console.log(`${value}-dasds`) })
.catch(err => { console.log(err,"error") })
