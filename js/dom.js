let byid = document.getElementById('pid'); // გვისელექტებს  1 ელემენტს 
let buclass = document.getElementsByClassName('myp'); // გვისელექტებს ობიექტის თვისებას რომელის მნიშვნელობა არის მასივი
let baytag = document.getElementsByTagName('p'); // გვისელექტებს ობიექტის თვისებას რომელის მნიშვნელობა არის მასივი

let bayquer = document.querySelector('#pid'); // გვისელექტებს  1 ელემენტს 
let bayquerall = document.querySelectorAll('p'); // გვისელექტებს      ასივს


// bayquer.addEventListener('click', function(){
//     this.innerHTML = "<span> ახალი მნიშვნელობა </span>";
// })

let eventcounter = 0;

 

bayquerall.forEach(el=>{
    el.addEventListener('click', function(){
        if( this.innerHTML == "კონტენტი"){
            this.innerHTML = "ახალი მნიშვნელობა";
        }else{
            this.innerHTML = "კონტენტი";
        }
         
        document.querySelector('#outs').innerText = ++eventcounter;
    })
    
})


//  for (let i = 0; i < buclass.length; i++) {
//      const element = buclass[i];
//      element.innerHTML = "<span> ახალი მნიშვნელობა </span>";
//  }

//bayquer.innerHTML = "<span> ახალი მნიშვნელობა </span>";
//byid.innerText= "<span> ახალი მნიშვნელობა </span>";

// bayquerall.forEach(p=>{
//     p.innerHTML = "<span> ახალი მნიშვნელობა </span>";
// })


let mylist = document.querySelector('.mylist');
let img = document.querySelector('#myimg');
let modal = document.querySelector('.mymodals');
let closes = document.querySelector('.mymodals span');

mylist.addEventListener('click', function(){
 
      // img.classList გვიბრუნებს ელემენტის კლასებს მასივის სახით
     //  img.classList.add('p-5',  'bg-danger') ახალი კლასის/კლასების ჩამატება
    //   img.classList.remove('img-thumbnail') კლასის წაშლა 
   //    img.classList.toggle('rounded-circle') კლასების წაშლა მინიჭება
  //     img.classList.replace('shadow', 'shadow-lg') კლასის ჩანაცვლება
 //      img.classList.contains('roundedx') ამოწმებს კლასის დასახელებით
 modal.classList.add('show')
 document.body.classList.add('modalshow')

})

closes.addEventListener('click', function(){
    modal.classList.remove('show')
    document.body.classList.remove('modalshow')
})


let opens = document.querySelector('.opensidebar');
let sidebar = document.querySelector('.sidebars');
opens.addEventListener('click', function(){
    this.classList.toggle('show');
    sidebar.classList.toggle('open')
})


let butt = document.querySelector('.send');
let iputs = document.querySelector('#myinput');
butt.onclick = function(){
             // iputs.setAttribute('disabled', 'disabled'); //  ატრიბუტის მინიჭება
            //  iputs.disabled = true; //  ატრიბუტის მინიჭება (მოკლე გზა)
           //iputs.setAttribute('type', 'password') //  ატრიბუტის განახლება  
          // iputs.type = "password"
         // let type = iputs.getAttribute('type'); //  ატრიბუტის მნიშვნელობის გადამოწმება  
        // iputs.removeAttribute('required'); // ატრიბუტის წაშლა
       // iputs.toggleAttribute('disabled') // ატრიბუტის toggle
       img.src = iputs.getAttribute('data-img');

       if(iputs.type == "text"){
        iputs.type = "password"
       }else{
        iputs.type = "text"
       }
 
       iputs.style.color = "red"
       iputs.style.backgroundColor = "green"

}


let div = document.createElement('div'); // html ელემენტის შექმნა
div.textContent = "კონტენტი"; // კონტენტის მინიჭება

let p = document.createElement('p');
p.innerText = "p ტეგის კონტენტი"


p.remove();
div.appendChild(p)
document.querySelector('#myinner').prepend(div);   // html გამოტანა

console.log(div);

// document.addEventListener('click', function(e){
//     if(document.querySelector('.removed') != null){
//          document.querySelector('.removed').classList.remove('removed')
//     }
   
//     e.target.classList.toggle('removed')
// })


// window.addEventListener('keydown', function(e){
//   if(e.keyCode == 46){
//     document.querySelector('.removed').remove();
//   }
// })

let ou = document.querySelector('#tagoutp');
document.querySelector('#tags').addEventListener('keydown', function(e){
    if(e.keyCode == 13){
 
        let span = document.createElement('span')
        span.innerText = this.value;
        span.classList.add('myspantag')
        this.value = ''
        
        ou.appendChild(span);
        span.addEventListener('click', function(){
            this.remove();
        })
    }

 

})