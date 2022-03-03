let store = document.querySelector('.addstore');
let removestor = document.querySelector('.removestore');
let clear = document.querySelector('.clear');


store.addEventListener('click', function(){
 localStorage.setItem('mode', 'dark2') // set method
 localStorage.setItem('mode12', 'dark2') // set method
 localStorage.setItem('mode23', 'dark2') // set method
})

removestor.addEventListener('click', function(){
    localStorage.removeItem('mode') // remove method
})

clear.addEventListener('click', function(){
    localStorage.clear() // clear  method
})

let mode = localStorage.getItem('mode');

var myModal = new bootstrap.Modal(document.getElementById('exampleModalToggle'), {
   
  })

  if (mode == null) {
      myModal.show()
  }

 

  localStorage.setItem('mode', 'dark')

  let User = {
      name:"admin",
      email:"info@admin.ge",
      pass:"123123",
      token:'',
  }

 

 

  function subm(e){
      e.preventDefault();

      let email  = floatingInput.value;
      let pass = floatingPassword.value;
      let save  = rememberPasswordCheck.checked;
      let token = "2389esjhfd(*02413)sDSJWSSHD+q3";
      if (save) {
           
        if (email == User.email && User.pass == pass) {
            User.token  = token;
            localStorage.setItem('token', token);
              window.location.href = 'home.html'
        }else{
            userss.innerText = "მომხმარებელი ვერ მოიძებნა"
        }
     
      }else{
        
        if (email == User.email && User.pass == pass) {
            User.token  = token;
            sessionStorage.setItem('token', token);
              window.location.href = 'home.html'
        }else{
            userss.innerText = "მომხმარებელი ვერ მოიძებნა"
        }
        
      }
 
  }

  fetch('https://jsonplaceholder.typicode.com/posts', {

  })
  .then(response=> response.json())
  .then(resp => {
    resp.forEach(element => {
      //console.log(element.body);
  });
  })


  let obj  = {
      age:25,
      name:"test"
  }

  let convert  = JSON.stringify(obj)

  let decode = JSON.parse(convert)

localStorage.setItem('obj', convert);
