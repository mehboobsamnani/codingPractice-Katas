const printName = (name) => console.log(name);

let person  = { 
    name : "mehboob ali"
}

function getName(person , callback){

    setTimeout(()=> {
        callback(person.name)
    },1000);
}

getName(person,printName);