
console.log("The app is live!");

$(document).ready(function(){
    $(" #channels li ").click(function() {
        var channelName = $(this).text();
        switchChannel(channelName);
    });

    $(" #channels li img").click(function() {
        var altText = $(this).attr("alt");
        if(altText == "not starred")
        {
            $(this).attr("src", "http://ip.lfe.mw.tum.de/sections/star.png");
            $(this).attr("alt", "starred");
        }
        else
        {
            $(this).attr("src", "http://ip.lfe.mw.tum.de/sections/star-o.png");
            $(this).attr("alt", "not starred");
        }
    })

});


function switchChannel(channelName) {
    console.log("Tuning into channel "  + channelName);
        
    var chatDiv = document.getElementById('chat');
    var appBar = chatDiv.getElementsByTagName('h1');
    appBar[0].innerHTML = channelName;
}

function switchTab() {
    console.log("Switch tab");
}