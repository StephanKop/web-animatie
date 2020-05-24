document.getElementById("sunset").addEventListener("click", addSunset);

function addSunset() {
    document.getElementById("sun").classList.add("sunset");
    setTimeout(moonrise, 3000);
    document.getElementById("background").classList.add("background-night");
    document.getElementById("moonButton").classList.add("moonDark");
    document.getElementById("sunButton").classList.add("moonDark");
    document.getElementById("stars").classList.add("visible");
};

document.getElementById("sunrise").addEventListener("click", addSunrise);

function addSunrise() {
    document.getElementById("moon").classList.remove("moonrise");
    setTimeout(sunrise, 3000);
    document.getElementById("background").classList.remove("background-night");
    document.getElementById("stars").classList.remove("visible");
    document.getElementById("moonButton").classList.remove("moonDark");
    document.getElementById("sunButton").classList.remove("moonDark");
};

function moonrise() {
    document.getElementById("moon").classList.add("moonrise");
};

function sunrise() {
    document.getElementById("sun").classList.remove("sunset");
};

window.onscroll = function() {myFunction()};

function myFunction() {
    let scroll = document.scrollingElement.scrollTop;

    if (scroll >= 1300) {
        console.log("1300");
    }
    else if (scroll >= 1200) {
    document.getElementById("sub-rocket").classList.add("rocket-sub-anim");
    }
    else if (scroll >= 900) {
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
        document.getElementById("earth").classList.add("layered-middle-push");
        document.getElementById("sun").classList.add("hidden-fast");
        document.getElementById("imgcontainer").style.marginTop = "10em";
        // remove titles
        document.getElementById("mars-title").classList.remove("title-visible");
        document.getElementById("earth-title").classList.remove("title-visible");
        document.getElementById("neptune-title").classList.remove("title-visible");
    }
    else {
        document.getElementById("mars").classList.remove("layered-left-push");
        document.getElementById("neptune").classList.remove("layered-right-push");
        document.getElementById("earth").classList.remove("layered-middle-push");
        document.getElementById("mars-title").classList.remove("title-visible");
        document.getElementById("earth-title").classList.remove("title-visible");
        document.getElementById("neptune-title").classList.remove("title-visible");
        document.getElementById("imgcontainer").style = " ";
        document.getElementById("sun").classList.remove("hidden-fast");
        document.querySelector("#mars-flag").classList.remove("visible-flag");
        document.querySelector("#neptune-flag").classList.remove("visible-flag");

    }
}

document.getElementById("mars").addEventListener("click", battleMars);
function battleMars() {
    document.querySelector(".mars").classList.toggle("selected");
    document.querySelector(".ufo-container-mars").classList.toggle("hidden-fast");
    document.querySelector("#mars-title").innerHTML = "Press p to conquer";
    document.querySelector("#layered-left").setAttribute("id", "selected-mars")
    document.querySelector("#mars-title").classList.toggle("title-width");
}

document.getElementById("neptune").addEventListener("click", battleNeptune);
function battleNeptune() {
    document.querySelector("#layered-right").classList.toggle("selected");
    document.querySelector(".ufo-container-neptune").classList.toggle("hidden-fast");
    document.querySelector("#neptune-title").innerHTML = "Press p to conquer";
    document.querySelector("#layered-right").setAttribute("id", "selected-neptune");
    document.querySelector("#neptune-title").classList.toggle("title-width");
}

document.getElementById("mars").addEventListener("keydown", keyPressMars);

function keyPressMars(e) {
    let keyCode = e.keyCode;
    if (keyCode === 80) {
        document.querySelector("#mars-flag").classList.toggle("visible-flag");
        document.querySelector("#mars-title").innerHTML = "Mars colony";
        document.querySelector("#mars-title").classList.remove("title-width");
    }
}

document.getElementById("neptune").addEventListener("keydown", keyPressNeptune);
function keyPressNeptune(e) {
    let keyCode = e.keyCode;
    if (keyCode === 80) {
        document.querySelector("#neptune-flag").classList.toggle("visible-flag");
        document.querySelector("#neptune-title").innerHTML = "Neptune colony";
    }
}

document.getElementById("mars").addEventListener("touchmove", LongPressMars);
function LongPressMars(e) {
    document.querySelector("#mars-flag").classList.toggle("visible-flag");
    document.querySelector("#mars-title").innerHTML = "Mars colony";
}

document.getElementById("neptune").addEventListener("touchmove", LongPressNeptune);
function LongPressNeptune(e) {
    document.querySelector("#neptune-flag").classList.toggle("visible-flag");
    document.querySelector("#neptune-title").innerHTML = "Neptune colony";
}


