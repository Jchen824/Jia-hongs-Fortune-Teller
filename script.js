$(".submit").click(function() {
    let answer1 = $(".question1").val();
    let answer2 = $(".question2").val();
    let answer3 = $(".question3").val();
    let answer4 = $(".question4").val();
    answer3= Number(answer3) + 2;
    $(".fortune-display").append("<p>" + answer1 + ", you will have " + answer2 + " when you are " + answer3 + " years old" + " in " + answer4 + "!" + "</p>");
    $(".fortune-display").append("<img src= 'https://imgs.search.brave.com/SX5uySJCcEA6mDxx8y-kiWM2OziSlKw28Q9J1sxeA5E/rs:fit:1200:1200:1/g:ce/aHR0cDovL2NsaXBh/cnRtYWcuY29tL2lt/YWdlcy90cmFuc3Bh/cmVudC1zbWlsZXkt/ZmFjZS0xMC5wbmc'>");
    console.log();

});