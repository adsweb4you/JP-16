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


$(".hide").click(function (e) { 
    e.preventDefault();
    $('.box').slideUp(1000);
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

 })

 


