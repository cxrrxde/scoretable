let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let winnerHome = document.getElementById("winner-home")
let winnerGuest = document.getElementById("winner-guest")
let homeCounter = 0
let guestCounter = 0

function add1Point(){
    let idIdentify = event.currentTarget.id
    if(idIdentify=="home-btn"){
        homeCounter ++;
        homeScore.textContent = homeCounter
        if(homeCounter>guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color = "#fff"
        }
        else if(homeCounter<guestCounter){
            winnerGuest.style.color = "#fff"
            winnerHome.style.color = "#881337"
        }
        else if(homeCounter==guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color= "#881337"
        }
    }
    else if (idIdentify=="guest-btn"){
        guestCounter ++;
        guestScore.textContent = guestCounter
        if(homeCounter>guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color = "#fff"
        }
        else if(homeCounter<guestCounter){
            winnerGuest.style.color = "#fff"
            winnerHome.style.color = "#881337"
        }
        else if(homeCounter==guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color= "#881337"
        }
    }
}

function add2Point(){
    let idIdentify = event.currentTarget.id
    if(idIdentify=="home-btn"){
        homeCounter += 2;
        homeScore.textContent = homeCounter
        if(homeCounter>guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color = "#fff"
        }
        else if(homeCounter<guestCounter){
            winnerGuest.style.color = "#fff"
            winnerHome.style.color = "#881337"
        }
        else if(homeCounter==guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color= "#881337"
        }
    }
    else if (idIdentify=="guest-btn"){
        guestCounter += 2;
        guestScore.textContent = guestCounter
        if(homeCounter>guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color = "#fff"
        }
        else if(homeCounter<guestCounter){
            winnerGuest.style.color = "#fff"
            winnerHome.style.color = "#881337"
        }
        else if(homeCounter==guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color= "#881337"
        }
    }
}

function add3Point(){
    let idIdentify = event.currentTarget.id
    if(idIdentify=="home-btn"){
        homeCounter += 3;
        homeScore.textContent = homeCounter
        if(homeCounter>guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color = "#fff"
        }
        else if(homeCounter<guestCounter){
            winnerGuest.style.color = "#fff"
            winnerHome.style.color = "#881337"
        }
        else if(homeCounter==guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color= "#881337"
        }
    }
    else if (idIdentify=="guest-btn"){
        guestCounter += 3;
        guestScore.textContent = guestCounter
        if(homeCounter>guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color = "#fff"
        }
        else if(homeCounter<guestCounter){
            winnerGuest.style.color = "#fff"
            winnerHome.style.color = "#881337"
        }
        else if(homeCounter==guestCounter){
            winnerGuest.style.color = "#881337"
            winnerHome.style.color= "#881337"
        }
    }
}

function clearScore(){
    homeCounter = 0
    guestCounter = 0
    homeScore.textContent = 0
    guestScore.textContent = 0
    winnerGuest.style.color = "#881337"
    winnerHome.style.color = "#881337"
}