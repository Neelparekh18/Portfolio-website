$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 600){
            $('.scroll-up-btn').addClass('show');
        }else{
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // slide-up script 

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    //typing animation script
    var typed = new Typed(".typing",{
        strings:["Software Engineer", "full-stack web developer", "Mern stack developer" ],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });
    // var typed = new Typed(".typing-1",{
    //     strings:["full-stack developer", "MERN Stack developer", "Software Engineer"],
    //     typeSpeed: 70,
    //     backSpeed: 60,
    //     loop: true
    // });
    
});