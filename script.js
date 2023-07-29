// var name = "academy";//string
// var age = 21;
// var x = true; // boolean true = 1 ; false=0;
// var y = null; // null ;
// var z ; // undefinded;


// console.log(typeof age);



// operatori

// var x = 10 ;
// var y = 5 ;
// var z = x + y ;

// console.log(z);

// var names = ["girogi","levan",'beqa','mariami','maia',];
            //  0        1       2       3    

            // console.log(names[names.length - 1]);


// 

//object 

// var user = {
//     firstName: 'giorgi',
//     lastName:'gvari',
//     userAge: 23,
//     phone: {
//         code:558,
//         phoneNumber:484900

//     },
//     Comments:[
//         {id:1, comment:'hello1'}, //0
//         {id:2, comment:'hello2'} //1
//     ]
// }
// console.log(user.Comments[0].comment);

// console.log(user.phone.phoneNumber); varianti 1 
// console.log(user['phone']['code']); varianti 2 

// console.log(user.lastName); 1 varianti   
// console.log(user['firstName']); 2vrianti

// var user = {
//      names:'beqa',
//      age:12

// };

// user.age = 19;
// user.status = 'active';

// console.log(user);

//for

// let numbers = [ 100, 20 , 24, 3]
 
// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// };


//while

// let item = 0 ;
// while(item < numbers.length){
//     console.log(numbers[item]);
//     item++;
// }

// let names = ['giorgi','anu','mari','ele'];

// for (let items of names ){
//     console.log(items);
// } 


// hs
// let user = {
//     firstname:'giorgi',
//     lastname:'smith',
//     age:25,
//     studentstatus:'active'

// };
// console.log(user.studentstatus);

// let list = ['mari','nini','misha'];

// for (let items of list){
//     console.log(items);
// }

// let numbers =[14,16,11,2,19,5,3,2,2,1,7,7,5,4];

// for (let i = 0; i > 5; i++);{
//     console.log(numbers[i]);
// }
// for ( let i = 0 ; i < numbers.length ; i++){
//     if(numbers[i] < 5 )
//     console.log(numbers[i]);
// }

// let user = {
//     name:'girogi',
//     age : 20,
//     studentstatus:'active'
// }
// if(user.age < 18 && user.studentstatus == 'active'){
//     console.log('hello');
// }
// else if (user.name == 'girogi '){
//     console.log('hello girgi');

// }
// else if (user.age < 25 || user.studentstatus == 'active') { 
//     console.log('hollo big boy');
    
// }
// else{
//     console.log('error')
// }

// && and
// || or 
// = give value
// != not equal 


// let users = [
//     {username : 'test1', status: false },
//     {username : 'test2', status: false },
//     {username : 'test3', status: true },
// ];
// for (let i = 0 ; i< users.length ;i++ ){
//     if(users[i].status === true){
//         console.log(users[i]);
//     }
// }

// let array = [ 'watermelon','paper',12,22,44,'gape',44,'ananas'];

// for( let i of array){
//     if(typeof i == 'number'){
//         console.log(i);
//     }
// }

// let array = [ [23,12,-5],[22,-22,-15],[120,-20,-14]];

// for (let i = 0; i < array.length; i++) {
//     let numbers = array[i];

//     for (let x = 0; x < array.length; x++) {
//         let positive = numbers[x];
//         if(positive > 0 ){
//             console.log(positive);
//         }
        
//     }
    
// }


// let numbers = [24,5,2,7,12,33,12,9];

// for( let items of numbers){
//     if(items % 2 !== 0){
//         console.log(items);
//     }
// }


// let array = [23,10,'hello1',15,22,20,'hello2']

// for( let items of array){
//     if( items % 5 == 0)[
//         console.log(items)
//     ]
// }

// for ( let i = 0 ; i < array.length; i++){
//     let items = array[i];
//     if (typeof items =='number' && items % 5 == 0){
//         console.log(items);
//     }
// }

//function

// function item ( ){
//     console.log('hello');
// }

// item()

// let test1 = function(){
//     console.log('hello2');
// }

// test1()

// let test1 = () => console.log('hello3');

// test1()

// function test2( ...args){
//     let numberssum = 0 ;
//     for( let item of args ){
//         numberssum = numberssum + item ;
        
//     }
//     return numberssum;
// }

// let result = test2 ( 12 ,11,16,23,66,4)

// console.log(result);

// let result = test2 ( 12 , 19)

// console.log(result);



// scope 


// function outside ( x ){
   
//      function inside ( ){
//           return x * x + y; 

//      }
     
//       return inside;
      
// }


// let i = outside ( 3 );
// let i2 = outside ( 10 );

// let result = i2 ( );

// console.log( result  );


 let array = [ 12 ,1, 125,51,55];

//  array.forEach(function(item){
//      console.log(item);
//  })

// array.forEach((item )=> console.log(item));

array.forEach((item) => {
    if ( item > 15 ){
        console.log(item);
    }
});