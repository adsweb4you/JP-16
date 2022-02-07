let myname, myage;

myname = "ჩემი ნივთები";
myage = 26;

const x = myage * 15;

myage = "sad";

let sm;


let str = "მე ვსწავლობ ფრონტ-ენდ პროგრამირებაზე"; //string
let num = 25; //number
let obj = {myname:"admin"}; //object
let arr = [25, 45, "saxeli"]; //array
let tru = true; //boolean
let fal = false; //boolean
let func = function(){}; //function
let undef = undefined; //undefined
let nn = NaN; // Nan
let nulls = null; //null

document.getElementById("output").innerHTML = myname;


let time = 6;
let mystring = `მე ვარ ფრონტ-ენდ პროგრამირების ${time} @ ფრონტ-ენდ სტუდენტი`;
// let img = 'img/slide1.png';

// let card = `
// <div class="card">
//   <img src="${img}" class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${mystring}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`

// // let allstr = mystring + time;

// document.getElementById("mycard").innerHTML = card;

console.log(mystring.endsWith("სტუდენტი"));

/* ------- string method
mystring.length // ითვლის სტრინგში სიმბოლოების რაოდენობას
mystring.search("ვარს") ეძებს სიმბოლოს სტრინგის შიგნით და აბრუნებს მის ინდექსს
mystring.includes("ვარ") ეძებს სიმბოლოს სტრინგის შიგნით და აბრუნებს მის boolean (true/false)
mystring.slice(7, -25) //  აკეთებს ჭრას სტრინგის შეგნით 
mystring.replaceAll("ფრონტ-ენდ", "ბექ-ენდი")  // სტრინგში სიმბოლოების ჩანაცვლება
mystring.match(/ფრონტ-ენდ/g) // ეძებს სიმბოლოს სტრინგის შიგნით და აბრუნებს მოძიებული სიტყვების მასივს
mystring.split("@") // გადაცემული პარამეტრის მიხედვით ჭრის სტრინგს და გადაყავს მასივში
mystring.toUpperCase() // სიმბოლოების გადიდება
(mystring.trim() // ჭრის სიცარიელეებს მარჯვენა და მარცხენა მხარეს
mystring.startsWith("მ") // ამოწმებს იწყება თუ არა სტრინგი რაიმე  სიტყვით
mystring.endsWith("სტუდენტი") // ამოწმებს მთავრდება თუ არა სტრინგი რაიმე  სიტყვით
---------- */

//გლობალური ცვლადი
let mineX = 55.84654;
let mineY = 4;
let sum = 55.6;

console.log(1 + Number("1"));

//ფუნქციის შექმნა
function Dog(year){
   console.log(`ჩემი ძაღლი არის ${year} წლის`)
}

//ფუნქციის გამოძახება 

let rand = (Math.random() * 10).toFixed();

 
 Dog(rand);

function $(id, id2) { 
    
    //ლოკალური ცვლადი
    let myvir = 5;
    return document.getElementById(id);

 }


//  console.log(myvir)

 $("output","sdf").innerHTML = "წარმატებული ფუნქცია";
 $("sel2").innerHTML = "წარმატებული ფუნქცია2";
 

 let gl = 15;


 changegh();
 function changegh() {

    gl = 9;

   }



   console.log(gl)


   function convert(far){
      return (5/9) * (far - 32)
   }

console.log(convert(50 ), "C")
document.getElementById("sel2").innerHTML = convert(50 );



let Global = 1;


 function chanegs(){
   Global = 8;
 }

 chanegs();

console.log(Global);

function strq(){
   let strs = "saklfdhsjkhfsjkdgk html";

   return strs.replaceAll('html', '');

}

console.log(strq());


function cards(){
   document.getElementById('output').innerHTML = `
   <div class="card">
   <img src=" " class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title"> </h5>
     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" class="btn btn-primary">Go somewhere</a>
   </div>
  </div>`
   
}

cards();


function fx(){
   let z = 45.987;
   let i = 218.64;
   let sum = z * i;
   console.log(sum.toFixed(1))
   console.log(sum.toFixed(2))
   console.log(sum.toFixed(3))
}

fx()

let User = {
   name:"სანდრო",
   email:"admin@site.ge",
   phone:585488797,
   password:"987_213",
   avatar:"img/foto.jpg",
   role:"moder",
   msg:function(){
       console.log(this.name)
   }
}

document.getElementById('sel2').innerHTML = `
<img src="${User.avatar}">
`

// ობიექტის გაყინვა , ვეღარ შევიტანთ ცვლილებებს
//Object.freeze(User)

//ობიექტის ყველა თვისება | მასივი
let Key = Object.keys(User);

//ობიექტის ყველა თვისები მნიშვნელობა | მასივი
let val = Object.values(User);

//ობიექტის ყველა თვისები და  მნიშვნელობის აღება| მასივი
let entry = Object.entries(User);

// ობიექტში თვისების მნიშვნელობის შეცვლა
//User.name = "გიორგი";

//delete User.password ;
//delete User.role ;

User.msg();

 


let ClassArray = ["ირაკლი", "ზურა", "ზურა",   "ლილიანა", "მარიამი", "მათე", "ანა",  "ცოტნზე"];
let numArr = [1, 33, 15,   7800, 96, 78, 23,  5];

ClassArray.unshift('მიხეილი'); // ამატებს ახალ ელემენტს მასივის დასაწყისში
ClassArray.push('ნიკოლოზ'); // ამატებს ახალ ელემენტს მასივის ბოლოს

ClassArray.pop(); // მასივის ბოლო ელემენტის წაშლა
ClassArray.shift(); // მასივის პირველი ელემენტის წაშლა


ClassArray.splice(2, 2, "ახალი ელემენტი", "სადსდას") // ახალი ელემენტის წაშლა ჩამატება

console.log(ClassArray)

let fillarray = ClassArray.filter( function(element){
   return  element == "ზურა";
} ); // ეძებს და აბრუნებს ახალ მასივს გადაცემული პირობის მიხედვით


let findarr = ClassArray.find( function(element){
   return  element == "ზურა";
} ); // ეძებს და აბრუნებს სტრინგს გადაცემული პირობის მიხედვით


// ClassArray.sort(); // სორტირება ა_ბ
// ClassArray.sort().reverse(); // სორტირება ბ_ა



numArr.sort((a, b)=>{
   return a - b;
}); // რიცხვების სორტირება


let finded = ClassArray.some(elem =>{
   return elem == "ლილიანა5"
}) // ამოწმებს თუ მასივის ერთ-ერთი წევრი მაინც აკლაყოფილებს პირობას აბრუნებს ბულეანს


let findedever = ClassArray.every(elem =>{
   return elem.length > 4
}) // ამოწმებს თუ მასივის ყველა წევრი   აკლაყოფილებს პირობას აბრუნებს ბულეანს


ClassArray.forEach(cl=>{
   cl = "15"
   console.log(cl)
}) // ბეჭდავს თითეულ ელემენტს არ ანაცვლებს ორიგინალ მასივს

let changedarray =  ClassArray.map(ss=>{
  return ss + " ახალი მნიშნელობა"
}) // ბეჭდავს თითეულ ელემენტს  ახალ მასივს ქმნის

 
console.log(numArr[0])

// for (let l = 0; l < ClassArray.length; l++) {
//   const el = ClassArray[l];
//   console.log(el)
// }
 

let Products = [
   {
    name:"Google Pixel 3 XL G013C 4/64GB Clearly White",
    create:"2022/25/03",
    price:999,
    img:"https://img.zoommer.ge/zoommer-images/thumbs/0159567_google-pixel-3-xl-g013c-464gb-just-black_550.jpeg",
    descr:"ზუმერი 12 წელია ოპერირებს ციფრული ტექნიკის ბაზარზე, ამ წლების განმალობაში კომპანიამ წარმატებით დაიმკვიდრა ადგილი საცალო გაყიდვებში და სტაბილურად",

   },

   {
      name:"Google Pixel 3 XL G013C 4/64GB Clearly White",
      create:"2022/25/02",
      price:999,
      img:"https://img.zoommer.ge/zoommer-images/thumbs/0159567_google-pixel-3-xl-g013c-464gb-just-black_550.jpeg",
      descr:"ზუმერი 12 წელია ოპერირებს ციფრული ტექნიკის ბაზარზე, ამ წლების განმალობაში კომპანიამ წარმატებით დაიმკვიდრა ადგილი საცალო გაყიდვებში და სტაბილურად",
  
     },

     {
      name:"Google Pixel 3 XL G013C 4/64GB Clearly White იაფი",
      create:"2022/25/02",
      price:78,
      img:"https://img.zoommer.ge/zoommer-images/thumbs/0159567_google-pixel-3-xl-g013c-464gb-just-black_550.jpeg",
      descr:"ზუმერი 12 წელია ოპერირებს ციფრული ტექნიკის ბაზარზე, ამ წლების განმალობაში კომპანიამ წარმატებით დაიმკვიდრა ადგილი საცალო გაყიდვებში და სტაბილურად",
  
     },

     {
      name:"Google Pixel 3 XL G013C 4/64GB Clearly White 12",
      create:"2022/25/02",
      price:6698,
      img:"https://img.zoommer.ge/zoommer-images/thumbs/0159567_google-pixel-3-xl-g013c-464gb-just-black_550.jpeg",
      descr:"ზუმერი 12 წელია ოპერირებს ციფრული ტექნიკის ბაზარზე, ამ წლების განმალობაში კომპანიამ წარმატებით დაიმკვიდრა ადგილი საცალო გაყიდვებში და სტაბილურად",
  
     },

     {
      name:"Google Pixel 3 XL G013C 4/64GB Clearly White  ",
      create:"2022/25/02",
      price:85,
      img:"https://img.zoommer.ge/zoommer-images/thumbs/0159567_google-pixel-3-xl-g013c-464gb-just-black_550.jpeg",
      descr:"ზუმერი 12 წელია ოპერირებს ციფრული ტექნიკის ბაზარზე, ამ წლების განმალობაში კომპანიამ წარმატებით დაიმკვიდრა ადგილი საცალო გაყიდვებში და სტაბილურად",
  
     },
 
]

// let maxarr = Products.sort((a,b)=>{
//    return   b.price - a.price;
// })

// console.log(maxarr[0].name, "დავალება")
// console.log(maxarr.reverse()[0].name, "დავალება1")



// Products = Products.filter(arr=>{
//    return arr.price == 85;
// })

Products.forEach(product=>{

   let time;

   if(product.create == "2022/25/03"){
   time = "დამატებულია დღეს"
   }else{
      time = product.create
   }

   let cards =   `
   <div class="col-lg-3 mb-3">
   <div class="card">
   <img src="${product.img}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${product.name} </h5>
     <p class="card-text">${product.descr}</p>
     <p class="btn btn-primary">${product.price} ₾ | ${time}</p>
   </div>
   </div>
  </div>`

  document.getElementById('app').innerHTML += cards;
})

let A = 4;

if(A != 4){
   console.log("A ცვლადის მნიშვნელობა არ არის  5 ტოლი ")
}else if(A <= 5){
   console.log("A ცვლადის მნიშვნელობა ტოლია 5")
}
else{
   console.log("A ცვლადის მნიშვნელობა არ ემთხვევა")
}

let R = "irakli";

switch (R) {
   case "irakli":
      console.log("R ცვლადის მნიშვნელობა  " + R )
      break;

      case 1:
         console.log("R ცვლადის მნიშვნელობა  == 1")
         break;

         case 2:
            console.log("R ცვლადის მნიშვნელობა  == 2")
            break;

            case 3:
               console.log("R ცვლადის მნიშვნელობა  == 3")
               break;

   default:
      console.log("R ცვლადის მნიშვნელობა  არ უდრი არაფერს")
      break;
}

let imgs = R == "irakli" ? 'img/foto.jpg' : 'img/logo.png'


console.log(imgs);

/* ==== ლოგიკური ოპერატორები

= // მინიჭების ოპერატორი
== // შედარების ოპერატორი (ადარებს მხოლოდ მნიშვნელობებს)
=== // შედარების ოპერატორი (ადარებს ტიპებს და მნიშვნელობებს)
> // მეტობა
< // ნაკლებობა
>= // მეტია ან ტოლია
<= // ნაკლებია ან ტოლია

A === "5" || A > 0 // ან ოპერატორი
A === "5" &&  A > 0 // და ოპერატორი
!= // შებრუნების ოპერატორი
=== */

let d = new Date();

let year = d.getFullYear(); //გვიბრუნებს წელს
let month = d.getMonth() + 1; //გვიბრუნებს თვეს
let dey = d.getDate(); //გვიბრუნებს რიცხვს
let dey2 = d.getUTCDay(); //გვიბრუნებს დღეს

let hour = d.getHours(); // გვიბრუნებს საათს
let min = d.getMinutes(); // გვიბრუნებს წუთს
let sec = d.getSeconds(); // გვიბრუნებს წამს

let datastr = d.toLocaleDateString();
let tims = d.toLocaleTimeString();

let submont = 0;

if((d.getDate() + 14 ) > 31){
   submont = 1;
}

d.setDate(d.getDate() + 14);
d.setMonth(d.getMonth() + submont);

console.log( d.getMonth() , d.getDate());
//console.log(`${year}/0${month}/${dey} ${hour}:${min}:${sec}`);

let cuccdy;

switch (dey2) {
   case 0:
      cuccdy = "კვირა"
      break;

      case 1:
         cuccdy = "ორშაბათი"
         break;

         case 2:
            cuccdy = "სამშაბათი"
            break;

            case 3:
               cuccdy = "ოთხშაბათი"
               break;

               case 4:
                  cuccdy = "ხუთშაბათი"
                  break;

                  case 5:
                     cuccdy = "პარასკევი"
                     break;

                     case 6:
                        cuccdy = "შაბათი"
                        break;

 
}


let blogarr = [
   {
      title:"sadasd",
      descr:"asdasdasdasd",
      creat:  '01/20/2022',
      img:''
   },

   {
      title:"sadasd",
      descr:"asdasdasdasd",
      creat:  '01/15/2022',
      img:''
   },
   {
      title:"sadasd",
      descr:"asdasdasdasd",
      creat: '12/24/2021',
      img:''
   }
]


 

blogarr.forEach(blog=>{
   let current =   Date.parse(new Date());
   let objdate = Date.parse(blog.creat);

   let diff = current - objdate;
   let min = diff / (1000 * 60);
   let hour = diff / (1000 * 60 * 60);
   let day = diff / (1000 * 60 * 60 * 24);
   console.log(Math.floor(day));
})