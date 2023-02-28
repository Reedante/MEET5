var number1 = 10;
let number2 = 20;
const number3 = 30;

number1 = 40;
number2 = 50;


//printf(number1)
//system.prnt.out(number1)
console.log(number1);
console.log(number2);
console.log(number3);


//tipe data

const number = 10;
console.log(typeof number);

let x;
console.log(typeof x);

const text = "hello world";
console.log(typeof text);

const islogin = true;
console.log(typeof islogin);

let somelaterdata = null;
console.log(somelaterdata);

let array = ["Nama", 2,4,6,7]
console.log(array[0]);

for(let i = 0; i < array.length; i++){
    console.log(array[i]);
}

//sensitive case key : value ,
const user = {
    email : "haha@gmail.com", 
    password : "1234567",};

    console.log(user.email);
    console.log(user.password);


//operasi komparasi

let a = 10;
let b = 20;

console.log(a == b);
console.log(a != b);
console.log(a === b);
console.log(a !== b);
console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);

//logical operator

console.log(number2 > number3 && number2 >= number3);
console.log(number2 > number3 || number2 < number3);
console.log(!islogin);

//Perulangan(Looping)
//Parameter 1 -> mulai -> 0
//parameter 2 -> berakhir -> kurang dari 5
//parameter 3 -> increment (j++) -> setiap perulangan j ditambah 1

for(let j = 0; j < 5; j++){
    console.log(j);
}


//Parameter 1 -> mulai -> 5
//parameter 2 -> berakhir -> lebih dari 0
//parameter 3 -> decrement (j--) -> setiap perulangan j dikurangi 1

for(let j = 5; j > 0; j--){
    console.log(j);
}

const language = "Deutsch";

/*if (language === "english") {
    console.log("Good morning");
}*/
if (language === "english"){
    console.log("Good morning");
} 

if (language === "english"){
    console.log("Good morning");
} else{
    console.log("Selamat pagi");
}

if (language === "english"){
    console.log("Good morning");
} else if (language === "Deutsch"){
     console.log("Guten morgen");
} else{
    console.log("Selamat pagi");
}

