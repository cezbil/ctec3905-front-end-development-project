
var delayTime = 900; // always less by 100ms than in CSS, used for helper functions to not repeat code

function hideElement(ele) { //helper function to change content function
    setTimeout(function() {
        ele.style.display = "none"; //changes style lement in css display: none;
    }, delayTime);
}

function showElement(ele) { //helper function to change content function
    setTimeout(function() {
        ele.style.display = "block"; //changes style lement in css display: block;
    }, delayTime);
}


function changeContent(option) {
    var contentChildrens = document.getElementById("content").getElementsByTagName("div");
    var hideTime = "1s"; // var to set animation duration in CSS
    var showTime = hideTime; // same as above but for showing content
    var hideAnimation = "hide-sidebar";
    var showAnimation = "show-sidebar";

    for(var i = 0; i < contentChildrens.length; i++) { //for loop that goes through all of the elements in div with id content and then through divs in it
        hideElement(contentChildrens[i]);
        contentChildrens[i].style.animationDuration = hideTime;
        contentChildrens[i].style.animationName = hideAnimation;
    }

    if(option == "about-mma") { //if statement to change content, according to option chosen in the menu
        showElement(document.getElementById("about-mma-content"));
        document.getElementById("about-mma-content").style.animationDuration = showTime;
        document.getElementById("about-mma-content").style.animationName = showAnimation;
    }
    else if(option == "boxing") {
        showElement(document.getElementById("boxing-content"));
        document.getElementById("boxing-content").style.animationDuration = showTime;
        document.getElementById("boxing-content").style.animationName = showAnimation;
    }
    else if(option == "jiujitsu") {
        showElement(document.getElementById("jiujitsu-content"));
        document.getElementById("jiujitsu-content").style.animationDuration = showTime;
        document.getElementById("jiujitsu-content").style.animationName = showAnimation;
    }
    else if(option == "muay-thai") {
        showElement(document.getElementById("muay-thai-content"));
        document.getElementById("muay-thai-content").style.animationDuration = showTime;
        document.getElementById("muay-thai-content").style.animationName = showAnimation;
    }
    else if(option == "karate") {
        showElement(document.getElementById("karate-content"));
        document.getElementById("karate-content").style.animationDuration = showTime;
        document.getElementById("karate-content").style.animationName = showAnimation;
    }
    else if(option == "judo") {
        showElement(document.getElementById("judo-content"));
        document.getElementById("judo-content").style.animationDuration = showTime;
        document.getElementById("judo-content").style.animationName = showAnimation;
    }
    else if(option == "wrestling") {
        showElement(document.getElementById("wrestling-content"));
        document.getElementById("wrestling-content").style.animationDuration = showTime;
        document.getElementById("wrestling-content").style.animationName = showAnimation;
    }

}


