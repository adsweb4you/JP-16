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

function myage():number{
    return 23
}

console.log(myage())