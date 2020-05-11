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

function myFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        // document.getElementById("background").classList.add("scrollbackground");
        // document.getElementById("background").classList.remove("background-night");
        document.getElementById("layered-left").classList.add("layered-left-push");
        document.getElementById("layered-left").classList.remove("layered-left");
        document.getElementById("layered-right").classList.add("layered-right-push");
        document.getElementById("layered-right").classList.remove("layered-right");
        document.getElementById("imgcontainer").style.width = "90%";
    }
    else {
        // document.getElementById("background").classList.remove("scrollbackground");
    }
}
