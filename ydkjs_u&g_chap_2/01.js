var a;
// console.log(typeof a);  //undefined


a = undefined;
// console.log(typeof a)  //undefined

a= null;
// console.log(typeof a);  //object is null type


function foo() {
    return 'i am returing string'
}

foo.bar = 'I am bar' 

// console.log('typeof foo: ',typeof foo);  //function
// console.log('typeof foo(): ',typeof foo()); //string
// console.log('typeof foo.bar: ',typeof foo.bar) //string


// Truthy and Falsy

//falsy
//based on primitive data types (numbers, strings, boolean, null and undefined, object) 
// they are
if(!(0 || -0  || NaN || "" || null || undefined || false)){
    console.log("This are falsy values")
} 

if(!{}){
    console.log('This is empty object')
}

console.log(typeof NaN);

{
    console.log("hello from body")
}