document.getElementById("sunset").addEventListener("click", addSunset);

function addSunset() {
    document.getElementById("sun").classList.add("sunset");
    // document.getElementById("moon").classList.add("moonrise");
    setTimeout(moonrise, 3000);
    document.getElementById("background").classList.add("background-night");
    document.getElementById("moonButton").classList.add("moonDark");
    document.getElementById("sunButton").classList.add("moonDark");
    document.getElementById("stars").classList.add("visible");
    console.log("joe");
};

document.getElementById("sunrise").addEventListener("click", addSunrise);

function addSunrise() {
    // document.getElementById("sun").classList.remove("sunset");
    document.getElementById("moon").classList.remove("moonrise");
    setTimeout(sunrise, 3000);
    document.getElementById("background").classList.remove("background-night");
    document.getElementById("stars").classList.remove("visible");
    document.getElementById("moonButton").classList.remove("moonDark");
    document.getElementById("sunButton").classList.remove("moonDark");
    console.log("joe");
};

function moonrise() {
    document.getElementById("moon").classList.add("moonrise");
};

function sunrise() {
    document.getElementById("sun").classList.remove("sunset");
};

// document.getElementById("background").addEventListener("scroll", onscroll);

window.onscroll = function() {myFunction()};

// function myFunction() {
//     if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
//         document.getElementById("layered-left").classList.add("layered-left-push");
//         document.getElementById("layered-left").classList.remove("layered-left");
//         document.getElementById("layered-right").classList.add("layered-right-push");
//         document.getElementById("layered-right").classList.remove("layered-right");
//         document.getElementById("imgcontainer").style.width = "90%";
//         document.getElementById("sun").classList.add("hidden-fast");
//         console.log("400");
//     }
//     if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
//         // document.getElementById("sea2").style.fill = "red";
//         document.getElementById("sea2").classList.toggle("red");
//         console.log("700");
//     }
//     else {
//         document.getElementById("layered-left").classList.remove("layered-left-push");
//         document.getElementById("layered-left").classList.add("layered-left");
//         document.getElementById("layered-right").classList.remove("layered-right-push");
//         document.getElementById("layered-right").classList.add("layered-right");
//         document.getElementById("imgcontainer").style = " ";
//         document.getElementById("sun").classList.remove("hidden-fast");
//     }
// }

function myFunction() {
    let scroll = document.scrollingElement.scrollTop;
    // console.log(scroll);

    if (scroll >= 1000) {
        console.log("1000");
    }
    else if (scroll >= 900) {
    document.getElementById("sub-rocket").classList.add("rocket-sub-anim");
    }
    else if (scroll >= 800) {
        document.getElementById("main-rocket").classList.add("rocket-anim");
    }
    else if (scroll >= 600) {
        document.getElementById("mars-title").classList.add("title-visible");
        document.getElementById("earth-title").classList.add("title-visible");
        document.getElementById("neptune-title").classList.add("title-visible");
    }
    else if (scroll >= 300) {
        document.getElementById("mars").classList.add("layered-left-push");
        document.getElementById("neptune").classList.add("layered-right-push");
        document.getElementById("sun").classList.add("hidden-fast");
        document.getElementById("imgcontainer").style.marginTop = "10em";
        console.log("400");
    }
    else {
        document.getElementById("mars").classList.remove("layered-left-push");
        document.getElementById("neptune").classList.remove("layered-right-push");
        document.getElementById("mars-title").classList.remove("title-visible");
        document.getElementById("earth-title").classList.remove("title-visible");
        document.getElementById("neptune-title").classList.remove("title-visible");
        document.getElementById("imgcontainer").style = " ";
        document.getElementById("sun").classList.remove("hidden-fast");
    }
}
