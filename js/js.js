
function hideElement(ele) {
    ele.style.display = "none";
}

function changeContent(option) {
    var contentChildrens = document.getElementById("content").getElementsByTagName("div");

    for(var i = 0; i < contentChildrens.length; i++) {
        contentChildrens[i].style.animationDuration = "4s";
        contentChildrens[i].style.animationName = "hide-sidebar";
    }

    if(option == "about-mma") {
        document.getElementById("about-mma-content").style.display = "block";
    }
    else if(option == "boxing") {
        document.getElementById("boxing-content").style.animationDuration = "4s";
        document.getElementById("boxing-content").style.animationName = "show-sidebar";
    }
    else if(option == "jiujitsu") {
        document.getElementById("jiujitsu-content").style.display = "block";
    }
    else if(option == "muay-thai") {
        document.getElementById("muay-thai-content").style.display = "block";
    }
    else if(option == "karate") {
        document.getElementById("karate-content").style.display = "block";
    }
    else if(option == "judo") {
        document.getElementById("judo-content").style.display = "block";
    }
    else if(option == "wrestling") {
        document.getElementById("wrestling-content").style.display = "block";
    }
};
