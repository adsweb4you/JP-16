import  {body, test} from './animate.js'
import  {HTTP} from './http.js'
class User {

static names = "ადმინ";
role = "admin";

constructor(names, role, selector, style){
 this.names = names;
 this.role = role;
 this.selector = selector;
 this.style = style;
}

isAdmin(){
    if(this.role == "admin"){
        return true;
    }

    return false;
}

aler(){
    return  5 + 5;
}

css(){
  let sty = Object.keys(this.style)[0];
  document.querySelector(this.selector).style[sty] = Object.values(this.style)[0];
}

}

class Admin extends User {

constructor(names, role, selector, style){
  super(names, role, selector, style)
} 


 checkparent(){
     return this.names
 }

 childalert(){
     return super.aler();
 }

}
 

let user = new User("ადმინ1", "admin");
let user2 = new User("ადმინ2", "admin2");

let css = new User("ადმინ2", "admin2", 'body', {color:'red'});

css.css();

let adm = new Admin("ჩემი ადმინი", "s admin")

console.log(adm.childalert())

body;

console.log(test)

HTTP('https://jsonplaceholder.typicode.com/todos/1', {

})
.then(response  => response.json())
.then(data =>{
    console.log(data);
})