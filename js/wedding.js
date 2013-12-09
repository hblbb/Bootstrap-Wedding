// Recieve the 'click' motion and toggle QR-code's image
$("#qrcode").click(function() {
    var times = $("#clickTimes").val();
    
    // Toggle
    if (times % 2) {
        $("#scanner").hide();
        $("#wishStats").hide();
    } else {
        $("#scanner").show();
        $("#wishStats").show();
    }

    times++; // increasing
    $("#clickTimes").val(times);
});

// Change the background image
function changeBackgroundImage(seconds) {
    setTimeout(function() {
        var arrayImages = ["full1", "full2", "full3", "full4", "full5"];
        var originalImage = $('html').attr("class");

        console.log(originalImage);

        var randomImage = arrayImages[Math.floor(Math.random() * arrayImages.length)];
    
        console.log(randomImage);

        $('html').removeClass(originalImage);
        $('html').addClass(randomImage);
        
        // the loop of setTimeout 
        changeBackgroundImage(12);

    }, seconds * 1000);
}

changeBackgroundImage(12);

// Statistics from Mobile User Interface and it is store on firebase

// Rrepared
//renderStats(80, 10, 10);
$("#scanner").hide();
$("#wishStats").hide();
