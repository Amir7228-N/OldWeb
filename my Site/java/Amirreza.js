/*alert("Welcome To My Site Baby HaHa")
console.log("hi everybody");
console.warn('Oh my god');
console.error("Realllllly");

let reza ='amirreza';
console.log(reza);

const akbar= true;
console.log(akbar);
console.log(typeof akbar)

const sarvin='oh sheeeeeeeeet';
console.log(sarvin);

let Amir= 2009;
Amir+=213;
console.log(Amir);

const full=`hello ${reza} ${Amir} ${akbar}`;
console.log(full);

console.log(reza.length);
console.log(reza.toUpperCase());
console.log(full.split(  ));

let amirr=new Array('amirreza' , 'ali');
console.log(amirr[1]);
console.log(amirr);

const intruduce= {

    name : 'zeynb' ,
    lastName : 'vafaei' ,
    id : '21123' ,
    address : {city : 'shahroud' , street : '17 Shahrivar' },
    Location : [333 ,'fernandez'],
}
console.log(intruduce);
let free = 'id';
console.log(intruduce[free])

function explain(name , id) {
    console.log('Hi myname is'+ " " + name +" "+ id )
}
explain('Amirreza' ,'yes') 
*/

// let a = 10 , b = 5 ;
// let opt = "-"

// if (opt=="+"){
// console.log ("Afarin pesar" , a + b)
// }
// else if(opt=="-"){
//     console.log (a - b)
// }
// else{
// console.log("cancle")
// }
// let Amir = "akbar" 

// switch(Amir){
//     case "reza":
//     console.log('Amirreza hasti to');
//     break
//     case "Ali":
//         console.log('Amirali hasti u')
//     default:
//         console.log('I dont know who you are')
// }
// let Amirali = {
// name : "amirali" ,
// lastName : "Ahmadi" ,
// id : 40011110000 ,  
// password: "amirali22" ,
// personality :{
// country : "iran",
// city: "tehran" ,
// street : "london"
// } , 
// hobbies:[
//     "Game" , "Exercise" , "Running"
// ]
// }
// console.log(Amirali);

// function Eivala(number){
// return number * 2
// }
// console.log(Eivala(10)); 
// let result
// result = Eivala(40);
// console.log(result);

// function personal(id , email){
//     console.log("Ok my Id Number is " + id + " " + "and my email Address is " + email);
// }
// personal ( 2222222 , "amirali @gmail.com" );

// let age;
// age = 25
// age /= 2 
// age = Math.round(age);
// console.log(age);

// let = age;
// age= 22
//      if (age == 20) {
//          console.log("He is 20");
//    }
//     else if(age == 21){
//         console.log("He is 21");
//      }
//      else{
//          console.log("He is old");
//      };
// switch (age) {
//     case 20:
//         console.log("He is 20");
//         break;
//         case 21:
//             console.log("He is 21");
//             break;
//     default:
//         console.log('He is old');
//         break;
// };


// try {
//     let action;
//     result = 5 + 2;
//     console.log(sum); 
// }
//  catch (error) {
//     console.log(`${error}: Nooooo`);
// } 

// let alireza = 0;

// while (alireza <= 20) {
//  if ( alireza % 2 == 0) {
//     console.log(alireza);
//  }
//  alireza++;
// }

// for (let Alireza=0 ; Alireza<10 ; Alireza++ ) {
//  if (Alireza % 2 !==0) {
//     console.log("hello");
//  } 
//  else{
//     console.log("Bye");
//  }
    
// }

// let Alireza = [ 2, 10, 5, 7, 29, 12, 33];

// for ( let alireza of Alireza ) {
//     if(alireza ===33 ){
//     console.log("amir");
// }
// }

// let Alireza = [ 2, 10, 5, 7, 29, 12, 33];

// for( let a = 0; a< Alireza.length; a++ ){
// if ( Alireza[a] === 12 ) {
//     console.log("Eival");
// }
// }

// let akbar = [ "name", "lname", "age", "address"];

// for (let k = 0; k < akbar.length; k++){

// if (akbar[k] === "ages") {
//     console.log("correct!!");
// }
// else if(akbar[k] === "address"){
//     console.log("wrong");
// }
// }

// let numbers = [ 2, 10, 5, 7, 29, 12, 33];
// for ( let number of numbers ) {
//     if (number === 2) {
//         console.log(number);
//     }
// }

// let ages = [ 2, 10, 5, 7, 29, 12, 33];
// for(let age in ages){
//     console.log(`index ${age} : ${ages[age]}`);
// }

// console.log("***************************");
// console.log("***************************");


// let person = {
//     name: 'ali',
//     fcolor: 'red',
//     adress: 'usa',
//     number: 22332
// }
// for(prs in person){
// console.log( `${prs} is ${person[prs]} `);
// }

// let ali = [0,4,2,1,5,9];
// let result;

// result = ali.reduce((a , b) => a + b);
// result = ali.filter((ali) => ali > 5);
// result = ali.sort((x,y) => x-y);
// reza = ((name , lname) => name+lname) ;
// console.log(reza(1,2));

// console.log(result);

// function sum(...result){
// let sum = 0 ;
// for(let item of result ){
// sum += item;
// }
// return sum;
// }
// console.log(sum(1,2,3,7,8,1));
// **********مهم*********

// function Amir(colors , ages) {
//  this.color = colors ;
//  this.age = ages ;
// }
// let amirreza = new Amir("orange" ,20);
// let mamad = new Amir("white" , 18);

// console.log(amirreza);
// console.log(mamad);

// class Amir {
//     constructor(fName , lName , color) {
//         this . firstname = fName ,
//         this . lastName = lName ,
//         this . colors = color ;
//     }
//     AmirWelcome(){
//         return `Hi (: My Name is ${this.firstname} ${this.lastName} and My favorate color is ${this.colors}`
//     }
// }
// let mamad = new Amir("Mamad" , "ghasemi" , "Red");
// let behnam = new Amir ("behnam" , "sharifi" , "blue")
// let Ali = new Amir ("Ali" , "Ferosi" , "gray") ;

// console.log(mamad.AmirWelcome());
// console.log(Ali.AmirWelcome());
// console.log(behnam.AmirWelcome());

// const myDate = new Date();
// console.log(myDate);

// if (window.confirm("Are you Ok?")){
// console.log("Yes");
// }
// else(
//     console.log("No")
// )

// const header = document.createElement('h2');
// console.log(header);

// let result ;

// const Amir = document.querySelector("div");
// result = Amir.children;
// // Amir.children[2].remove();
// console.log(result);
//----------------------------
// const newheader = document.createElement('div');
// newheader.className = "new-head"
// newheader.innerHTML="من هد جدید هستم"
// console.log(newheader);

// const Amir = document.querySelector('.signup-button').addEventListener('click' , function(e){
//     console.log("SignUp successfully");
//     e.preventDefault;

//     let result;
//     result = e.target;
//     // result = e.type;
//     console.log(result);
// });

// const mamad = document.body.addEventListener('mousemove' ,
//      function(e){ console.log(` مختصات عرضی= ${e.offsetX}
//          طولی = ${e.offsetY}`);
//      e.preventDefault;
// })



// const searchinput = document.querySelector("#searchBox");
// // console.log(searchinput);
// const btnsearch = document.querySelector("#searchButton");
// // console.log(btnsearch);
// btnsearch.addEventListener('click' , function(e){
// // console.log(searchinput.value);
// searchinput.value = '';
// });
// searchinput.addEventListener('keyup' , function(e){
//     console.log(searchinput.value);
// });


// const Amirali = document.querySelector('#amirali-pp');
// // console.log(Amirali);
// const spanA = document.querySelector('.happy-span');
// // console.log(spanA);
// const checkbox = document.querySelector('#ul-checkbox input' );
// // console.log(checkbox);
// checkbox.addEventListener('click' , function(){
//     if (checkbox.checked){
//         Amirali.style.display='none'
//         spanA.style.display='none'
//     }
//     else{
//          Amirali.style.display='block' ;
//          spanA.style.display= 'inline'
//     }
// })
// 


// localStorage.setItem('Amir' , 'nademi');
// localStorage.getItem('Amir');
// localStorage.clear();
// const Amir =['eival' , 'okay'];
// localStorage.setItem('arr' , Amir);
// const arr = localStorage.getItem('arr').split(' , ');
// console.log(arr);

// const objAmir = {name:'amir' , age:20};
// localStorage.setItem('obj' , JSON.stringify(objAmir));
// const getobj = JSON.parse(localStorage.getItem('obj'));
// console.log(getobj);

// localStorage.clear();

const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", function (e) {
    console.log(searchBox.value);
    searchBox.value = "";
    e.preventDefault;
});
const hide = document.querySelector('.header-button');
const checkbox = document.querySelector('#checkbox' ); 

checkbox.addEventListener('click' , function() {
        if (checkbox.checked){
            hide.style.visibility='hidden';
        }
        else{
                 hide.style.visibility="visible"}
                });

                
document.querySelector("#form-add  input")
.addEventListener("input", function(e) {
    const text = this.value;
    if (/^[\u0600-\u06FF\s]+$/.test(text)) {
        this.style.direction = "rtl";
        this.style.textAlign = "right";
    } else {
        this.style.direction = "ltr"; 
        this.style.textAlign = "left";
    }
});

const inputtext = document.querySelector('#form-add input');
const spanname = '<span class="header-b"> Delete </span>'
const ul = document.querySelector('.header-button');
const Add = document.querySelector('#butt-add')
.addEventListener('click' , function(e){
    const spanE=document.createElement('span');
    spanE.className="header-p";
    spanE.textContent = inputtext.value;

    const li = document.createElement('li');
    li.appendChild(spanE);
    li.innerHTML += spanname;
     ul.appendChild(li);
    storeTolocalstorage(inputtext.value);
    inputtext.value='';
    e.preventDefault();

});

document.addEventListener('DOMContentLoaded' ,function(e){
let Amir;
if (localStorage.getItem('Amir') === null){
Amir = [];
}
else{
Amir = localStorage.getItem('Amir').split(',');
}
for(let item of Amir){
    const spanE=document.createElement('span');
    spanE.className="header-p";
    spanE.textContent = item;
    const li = document.createElement('li');
    li.appendChild(spanE);
    li.innerHTML += spanname;
    ul.appendChild(li);
}
})

function storeTolocalstorage(okay){
let Amir;
if (localStorage.getItem('Amir') === null){
Amir = [];
}
else{
Amir = localStorage.getItem('Amir').split(',');
}
Amir.push(okay);

localStorage.setItem('Amir' , Amir);
};

searchBox.addEventListener('keyup' , function(e){
for( let App of ul.children){
if (App.firstElementChild.textContent.indexOf(searchBox.value)
     !==-1 ){
App.style.display = 'grid';
}else{
    App.style.display='none';
}
}
});

ul.addEventListener('click' , function(e){
if(e.target.className ==='header-b'){
e.target.parentElement.remove();

removeFromLocalStorage(e.target.parentElement.children[0].textContent);
}
});

function removeFromLocalStorage(okay){
    let Amir;
    if (localStorage.getItem('Amir') === null){
    Amir = [];
    }
    else{
    Amir = localStorage.getItem('Amir').split(',');
    }

    for(let i=0; i< Amir.length; i++){
        if(Amir[i] === okay){
            Amir.splice(i, 1);
        }
    }
    if(Amir.length === 0){
        localStorage.clear();
    }else{
         localStorage.setItem('Amir' , Amir);
    }
       
}

// const request = new XMLHttpRequest;
// request.open('GET', 'data.txt');
// request.send();
// request.onload = function(){
//     console.log(request);
// }

// const Amir = new XMLHttpRequest;
// Amir.open('GET' , 'amir.json');
// Amir.send();
// Amir.onload = function(){
//     if(Amir.status === 200){
//     const data = JSON.parse(Amir.responseText);
//     for(let d of data){
//     console.log(d);
//     }
//     }else{
//         console.log("NotFound..");
//     }
// }

// const url =  'https://jsonplaceholder.typicode.com/todos/'

// const hakim = function(url){
// return new Promise(function(resolve , reject){
// const request = new XMLHttpRequest();
// request.open('GET' , url);
// request.send();

// request.onload =function(){
//     if(request.status === 200){
//         const data = JSON.parse(request.responseText);
//       resolve(data);
//     }else{
//        reject('not found..')
//     }
// };
// });
// }
// const url1 = 'https://jsonplaceholder.typicode.com/todos/2';
// const url2 = 'https://jsonplaceholder.typicode.com/todos/3';
// const url3 = 'https://jsonplaceholder.typicode.com/todos/4';

// hakim(url1).then(function(data){
//     console.log(data);
//     return hakim(url2);})
//     .then(function(data){
//         console.log(data);
//         return hakim(url3);
//     }).then(function(data){
//             console.log(data);
//         }).catch(function(error){
//             console.log(error);
//         })
  
const url =  'https://jsonplaceholder.typicode.com/todos/5'

// const Amiroo = function(url){
// return new Promise(function(resolve , reject){
//     const request = new XMLHttpRequest();
//     request.open('GET' , url);
//     request.send();
//     request.onload = function(){
//         if(request.status === 200){
//             const data = JSON.parse(request.responseText);
//             resolve(data);
//         }else{
//             reject('NOT found..')
//         }
//     }
// });
// }
// const url1 =  'https://jsonplaceholder.typicode.com/todos/1';
// const url2 =  'https://jsonplaceholder.typicode.com/todos/2';
// const url3 =  'https://jsonplaceholder.typicode.com/todos/3';

// Amiroo(url1).then(function(data){
//     console.log(data);
// return Amiroo(url2);
// })
// .then(function(data){
//     console.log(data);
//     return Amiroo(url3);
// }).then(function(data){
// console.log(data);
// }).catch(function(error){
// console.log(error);
// });


// fetch(url)
// .then(function(response){
//     if(response.status === 200){
//         return response.json();
//     }else{
//         throw new Error('NotFound..');
//     }
// }).then(function(data){
//     console.log(data);
// }
// ).catch(function(error){
// console.log(error.massage);
// });

// const Amir = async (url) => {
//     const response =  await fetch(url);
//     if(response.status === 200){
//         const data = await response.json();
//         return data;
//     }else{
//        throw new Error('NOT found..');
//     }
    
// }
// Amir(url)
// .then((data) => console.log(data)
// ).catch((error) => console.log(error))


const site = async (url) =>{
    const pasokh = await fetch(url);
    if(pasokh.status === 200){
        const data = pasokh.json();
        return data;
    }else{
        throw new Error('NOT Found ...')
    }
} 
site(url)
.then((data)=>console.log(data))
.catch((error) => console.log(error));
    


const panels = document.querySelectorAll('.panel');
panels.forEach(panel =>{
    panel.addEventListener('click' , () => {
        removeActiveClasses();
        panel.classList.add('active')
    })
} )
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    })
}