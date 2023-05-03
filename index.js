console.log("Your index.js file is loaded correctly!");

$(".navigation").on("click", function(){
    $(".navigation").animate({fontSize: '1.5em'}, "slow");
});

$(".navigation").hover(function(){
    $(".navigation").animate({fontSize: '1.5em'}, "slow");
});


$("ul li:first").on("click", function(){
    $("ul li:first").css("color", "white").slideUp(1000).slideDown(1000)})

    $("ul li:nth-child(2)").on("click", function(){
        $("ul li:nth-child(2)").css("color", "white").slideUp(1000).slideDown(1000)})
    
        $("ul li:nth-child(3)").on("click", function(){
            $("ul li:nth-child(3)").css("color", "white").slideUp(1000).slideDown(1000)})
        
            $("ul li:nth-child(4)").on("click", function(){
                $("ul li:nth-child(4)").css("color", "white").slideUp(1000).slideDown(1000)})


$(".flexContainer").hover(function(){
    $(".flexContainer").css("background-color", "lightblue");},
    function(){$("section.flexContainer").css("background-color", "pink");}
);


$(".welcome").ready(function(){
  $(".welcome").animate({fontSize: '2em'}, "slow");
})

$(".houseWords").hover(function(){
    $(".houseWords").animate({fontSize: '1.2em'}, "slow");
})

$(".crueltyWords").hover(function(){
    $(".crueltyWords").animate({fontSize: '1.2em'}, "slow");
})
