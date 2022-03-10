let x:string = 'myname';
let y:number | boolean  = 87;
let myarr:[string, string, number] = ["asd", "asdas", 8764];

let User:{
  name:string,
  age:number,
  role:number,
  moder:null | string,
  
} = {
    name:"admin",
    age:45,
    role:87,
    moder:'sad'
}

interface Requests {
    urls:string,
    methods:string,
    header:object,
    response:object,
    success():any,
    fail():any
}

let request:Requests =  {
  urls:'tsafdasd',
  methods:"post",
  header:{aplication:'aplication/json'},
  response:{succ:1},
  success:function(){
      return 1

  },
  fail:function(){
      return 0
  }
}

function myname():void{
  // return აქ აქვს
}

function myage<e>(g:e):e{
    return g
}

myage<string>('45')
myage<number>(1231)
myage<object>({obj:"asd"})

interface pros {
  name:string,
}

function component(myname:any){
  return myname
}

@component({
  name:"asdas"
})

class Animal implements pros{

  name:"23"

  constructor(){

  }

 public bark(){
    return "56465";
  }

}

 

class Dog extends  Animal{

  constructor(){
    super();
  }


  test(){
    return super.bark()
  }

}

let anim  = new Animal();

console.log(anim.bark())