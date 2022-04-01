//OBJECTS
// key : value ----it is known as key value pair or property
//key should of string type (without any quotes it is a string)
//value can be of anytype



// let user = {
//     name :'rahul',
//     age:25,
//     isadmin:false
// }

// console.log(user.name)   //rahul
// console.log(user['age']); //25

// let user = {} //object literal syntax
// user.name = 'agni';  //or
// user['name'] = 'agni';
// console.log(user); //{name = 'agni'}

// let user = new Object()   //object constructor syntax
// user.name = 'rahul'
// console.log(user); //{name : 'rahul'}

// delete user.name;
// console.log(user); //{}

// let fruit = 'apple'
// let user = {
//     [fruit]:true
// }
// console.log(user); //{'apple':true}

//question
// let fruit = 'apple'
// let user = {
//     [fruit + 'computers']:true  -----computed properties
// }
// console.log(user);  // {'applecomputers':true}

// let user = {
//     name :'rahul',
//     age:25
// }

// console.log("age" in user)   //boolean value :true

// looping in Object
//for in loop

// let user = {
//     name :'rahul',
//     age : 25,
//     isadmin : true
// }
// for(let key in user){
//     //print keys
//     console.log(key); // name
//                      //age
//                       //isadmin
//     console.log(user[key]);//name rahul
//                            //age 25
//                            //isadmin true
// }

//question for practice---to calculate the sum of values
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Peter: 130
// }
// let sum = 0;
// for(let key in salaries){
//     sum+=salaries[key];
// }
// console.log(sum);  //390

//Multiply ONLY the numeric values with 2

// let menu = {
//     width : 200,
//     height : 300,
//     title :'My menu'
// }
// for(let key in menu){
//     if(typeof menu[key] === 'number'){
//         menu[key]*=2;
//     }
// }
// console.log(menu); // width:400   height:600 title:'My menu'


//objects referencing and copying
// let message = "hello";
// phrase = message +"world"
// console.log(message); //hello
// console.log(phrase);  //helloworld

// let user = {  //user got the reference from the objects memory location
//     name : 'rahul'
// }
// admin = user  //admin got the reference of the user object
// console.log(user); //rahul
// console.log(admin);//rahul

// admin.name = 'pooja' //it reassigns to pooja from rahul
// console.log(user); //pooja
// console.log(admin);//pooja

// let user = {}
// let admin = {}
// console.log(admin === user); //false ----becoz 2 different objects in different memory location
