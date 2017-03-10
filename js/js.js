
var delayTime = 900; // tu zawsze o 100ms mniej ni w CSS

function hideElement(ele) {
    setTimeout(function() {
        ele.style.display = "none";
    }, delayTime);
}

function showElement(ele) {
    setTimeout(function() {
        ele.style.display = "block";
    }, delayTime);
}


function changeContent(option) {
    var contentChildrens = document.getElementById("content").getElementsByTagName("div");
    var hideTime = "1s"; // CSS czas
    var showTime = hideTime;
    var hideAnimation = "hide-sidebar";
    var showAnimation = "show-sidebar";

    for(var i = 0; i < contentChildrens.length; i++) {
        hideElement(contentChildrens[i]);
        contentChildrens[i].style.animationDuration = hideTime;
        contentChildrens[i].style.animationName = hideAnimation;
    }

    if(option == "about-mma") {
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

