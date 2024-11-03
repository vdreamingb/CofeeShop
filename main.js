$(document).ready(function(){
    let scrollIndex = 0;
    let changeIndex = 605;
    let min = 2;
    let people = 1;
    let peopleLeft = 2
    $(".burger-menu").click(function(){
        $(".header").toggleClass("active");
        $("body").toggleClass("lock");
        $(".burger-menu").toggleClass("active");
    })
    
    if( Number($("body").innerWidth()) >= 569  &&  Number($("body").innerWidth()) <= 1134){
        peopleLeft = 1;
        min = 1
    }
    if( Number($("body").innerWidth()) < 569){
        changeIndex = 320;
        peopleLeft = 1;
        min = 1;
    }

    $(".items__left .count").text(peopleLeft)

    $(".scroll-right").click(function(){
        if(scrollIndex == changeIndex*6){
            scrollIndex = changeIndex*6
        }
        if(peopleLeft == 6){
            peopleLeft = 6;
        }
        else{
            scrollIndex+=changeIndex
            peopleLeft+= people;
            $(".slider-wrapper").scrollLeft(scrollIndex)
            $(".items__left .count").text(peopleLeft);
        }
        

    })
    $(".scroll-left").click(function(){
        if(scrollIndex == 0){
            scrollIndex = 0;
        }
        if(peopleLeft == min){
            peopleLeft = min;
            
        }
        else{
            scrollIndex -=changeIndex;
            peopleLeft -= people;
            $(".slider-wrapper").scrollLeft(scrollIndex)
            
            $(".items__left .count").text(peopleLeft)
        }
        
    })
    let added = false
    $(".btn-search").click(function(){
        $(".search__interface").addClass("active");
        if(!$("body").hasClass("lock")){
            $("body").addClass("lock");
            added = true;
        }
    })

    $(".search__interface .close").click(function(){
        $(".search__interface").removeClass("active");
        if(added==true){
            $("body").removeClass("lock");
            added = false;
        }
    })

    $(".btn-shopping").click(function(){
        $(".bag__interface").addClass("active");
        if(!$("body").hasClass("lock")){
            $("body").addClass("lock");
            added = true;
        }
    })
    $(".bag__interface .close").click(function(){
        $(".bag__interface").removeClass("active")
        if(added==true){
            $("body").removeClass("lock");
            added = false;
        }
    })
    
})