 $(function(){








$("p").click(function(){
   $(this).html('შეცვლილი მნიშვნელობა'); 
})



$(".show").click(function (e) { 
    e.preventDefault();
    $('.box').slideDown("fast", function(){
        //$('.box').hide(1000);
    } );
});

let count = 0;
$(".hide").click(function (e) { 
    e.preventDefault();
     //$('.box').slideUp(1000);
    // $('.box').addClass('bg-danger') // კლასის მინიჭება
   //  $('.box').removeClass('bg-danger') // კლასის წაშლა
  //  $('.box').toggleClass('bg-danger') // კლასის თოგლი
 // $('.box').hasClass('bg-danger') კლასის გადამოწმება

 let inp = `<div class="mb-3">
 <label for="exampleInputPassword1" class="form-label">ველი ${count}</label>
 <input type="text" class="form-control" id="exampleInputPassword1">
</div>`
// $('.box').before(inp); // ელემენტის შექმნა დამატება  (სელექტორის შემდეგ)
// $('.box').after(inp); // ელემენტის შექმნა დამატება  (სელექტორამდე)
// $('.box').append(inp); // ელემენტის შექმნა დამატება (ბოლოს)
 //$('.box').prepend(inp);  // ელემენტის შექმნა დამატება (თავში)
count++;

let width = $('.box').width(); // აბრუნებს კონტენტის ზომას
let innerwidth = $('.box').innerWidth(); // აბრუნებს კონტენტის ზომას + padding
let outterwidth = $('.box').outerWidth(); // აბრუნებს კონტენტის ზომას + padding + border
console.log(outterwidth);

$('.mb-3').click(function (e) { 
    e.preventDefault();
    $(this).remove(); // ელემენტის წაშლა

});

$(".empty").click(function (e) { 
    e.preventDefault();
    $('.box').empty();  // ელემენტის  კონტენტის გასუფთავება
});

});


$(".showhide").click(function (e) { 
    e.preventDefault();
    $('.box').slideToggle(1000);
    
});

$(".send").click(function (e) { 
    e.preventDefault();
    

    // $("#myinput").css({
    //     'border':'1px solid red',
    //     'border-radius':'25px',
    //     'padding':"20px",
    //     "transition":"all .5s"
    // });

        $("#myinput").animate({
        'border':'1px solid red',
        'border-radius':'25px',
        'padding':"20px",
        // "transition":"all .5s"
        }, 2000,  function(){
            $("#myinput").animate({
                'padding':"2px",
                'margin-top':"20px",
                'height':"202px",
 
            }, 1000, function(){
                $("#myinput").val('შეყვანილი მნიშნელობა')
            })
        });


//     $(".send").html(`<div class="spinner-border text-primary" role="status">
//     <span class="visually-hidden">Loading...</span>
//   </div>`);


//   setTimeout( ()=>{
//     $("#myinput").val('მინიჭებული მნიშვნელობა');

//     $(".send").html(`<i class="bi me-3 bi-check-all"></i> შესრულდა`);
    
//   }, 3000 )

});

$(".circl").click(function (e) { 
    e.preventDefault();
    $(this).animate({
        "height":"100vh",
        "width":"100%",
        "border-radius":"0px"
    }, 300, function(){
        $('.circl .search').animate({
            "opacity":1,
            "top":0,
        }, 1000, function(){
            $('.circl .search').animate({
                "height":"10%",
               
            }, 500, function(){
                $('.circl .search').animate({   "width": "50%", }, 100)
            })
        })
    })
});


$(".butt").click(function (e) { 
    e.preventDefault();
 
    if(e.target.classList[0] == "js"){
         $(this).animate({
        "width":"100%",
        "top":"0",
        "height":"100vh",
    }, 500)   
    }


});

$(".go").click(function (e) { 
    e.preventDefault();
    $(".butt").animate({
        "width":"151px",
        "top":"90vh",
        "height":"40px",
    }, 500)
});

$('.head').click(function (e) { 
    e.preventDefault();
    $(this).toggleClass('show');
    $('.option').toggleClass('d-block');
});

$(".option li").click(function (e) { 
    e.preventDefault();
    let text = $(this).text();
    $('.option').toggleClass('d-block');
    $('.head').text(text)
});
// აბრუნებს უშუალო მშობელს $('.child').parent()
// აბრუნებს ყველა წინაპარს $('.child').parents('.col-lg-4')
// აბრუნებს ყველა შვილობილ ტეგს  $('.parent').children()
// აბრუნებს  მშობლებს კონკრეტულ ელემენტამდე  $('.child').parentsUntil('.col-lg-4') 
// აბრუნებს ქვედა მეზობელს $('.child').next()
// აბრუნებს ყველა ქვედა მეზობელს $('.child').nextAll()
// აბრუნებს ზედა მეზობელს  $('.child').prev()  
// აბრუნებს ყველა ზედა მეზობელს $('.child').prevAll()
// ეძებს ელემენტს $('.parent').find( '.col').css('color', 'red')
// აბრუნებს პირველ ელემენტს  $('.col').first().css('color', 'red')
// აბრუნებს ბოლო ელემენტს  $('.col').last().css('color', 'green')
 //$('.col').eq(5).css('color', 'green') //აბრუნებს   ელემენტს  ინდექსის მიხედვით


 $('.parent .col').filter(function(index, element){
   if ($(element).text().length > 4) {
     $(element).css('font-weight',"bold")
   }else{
    $(element).css('color',"red")
   }
 })

console.log( $('.child').prevUntil('h1')   )




$('.next').click(function (e) { 
    e.preventDefault();
    
if ($('.items.ac').next().length > 0) {
      $('.items.ac').removeClass('ac').next().addClass('ac')
}else{
    $('.items.ac').removeClass('ac');
    $('.items').first().addClass('ac')
}
});


$('.prev').click(function (e) { 
    e.preventDefault();
    
if ($('.items.ac').prev().length > 0) {
      $('.items.ac').removeClass('ac').prev().addClass('ac')
}else{
    $('.items.ac').removeClass('ac');
    $('.items').last().addClass('ac')
}
});
    let crt = document.querySelector('.add-cart').getBoundingClientRect(); 
    $('.crt').css({'top': crt.top+"px",'left': crt.left+"px" }) 

$(".add-cart").click(function (e) { 
    e.preventDefault();
 
    let cord = document.querySelector('.carts').getBoundingClientRect();

  
 $(this).replaceWith('<h1> ტექსტი </h1>')

console.log($('.mineinput').attr('type'))
$('.mineinput').attr('type', 'password')
$('.mineinput').removeAttr('type')

    setTimeout(()=>{
        $('.crt').addClass('position-fixed')
    }, 1000)
   
    $('.crt').animate({
        "top":cord.top+"px",
        "left":cord.left+"px",
    }, 1200)

});

$.each($('.items'), function (index, elemt) { 
  console.log( $(elemt).html())  
});


$.ajax({
    type: "get",
    url: "https://jsonplaceholder.typicode.com/posts",
    // data: "data",
    // dataType: "dataType",
    success: function (response) {
        console.log(response);
    }
});

 let mytime;

$(document).on('mousemove', function(e){

clearTimeout(mytime)

  mytime = setTimeout(function(){
  alert('დრო გავიდა')
},5000)


})

s = 0;

setInterval(function(){
 
    console.log(s)
s++;
}, 1000)


 })

 


