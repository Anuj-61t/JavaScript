// var a;
// // console.log(typeof a);  //undefined


// a = undefined;
// // console.log(typeof a)  //undefined

// a= null;
// // console.log(typeof a);  //object is null type


// function foo() {
//     return 'i am returing string'
// }

// foo.bar = 'I am bar' 

// console.log('typeof foo: ',typeof foo);  //function
// console.log('typeof foo(): ',typeof foo()); //string
// console.log('typeof foo.bar: ',typeof foo.bar) //string


// Truthy and Falsy

//falsy
//based on primitive data types (numbers, strings, boolean, null and undefined, object) 
// they are
// if(!(0 || -0  || NaN || "" || null || undefined || false)){
//     console.log("This are falsy values")
// } 

// if(!{}){
//     console.log('This is empty object')
// }

// console.log(typeof NaN);

// {
//     console.log("hello from body")
// }

/* Immediately Invoked Function Expression */
(function testing(){
    console.log('this is immediately invoked function body')
})

var a = ()=>{
    console.log('Print string')
}
(
   a
)
// ITs like invoking a funtion but like writing it on the go 
// so why do we need i 


// Example from mdn docs 
// const makeWithdraw = (balance) =>
//   ((copyBalance) => {
//     let balance = copyBalance; // This variable is private
//     const doBadThings = () => {
//       console.log("I will do bad things with your money");
//     };
//     doBadThings();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Insufficient money";
//       },
//     };
//   })(balance);

// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20)); // 0


const n = (foo)=>((bar)=>{
    console.log(foo)
    console.log(bar);
})(foo)

n('hello')