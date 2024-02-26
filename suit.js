const gunting = document.getElementById("gunting");
const batu = document.getElementById("batu");
const kertas = document.getElementById("kertas");

const computer = document.getElementById("computer");
const hasil = document.getElementById("hasil");

var comp = ["batu", "kertas", "gunting"];

function mathRandom() {
    if (Math.random() <= 0.3) {
        computer.innerHTML = "Gunting";
        return comp = "gunting";
    } else if (Math.random() > 0.3 && Math.random() <= 0.6) {
        computer.innerHTML = "Batu";
        return comp = "batu";
    } else {
        computer.innerHTML = "Kertas";
        return comp = "kertas";
    }  
}

if (gunting.addEventListener("click", function () {
    mathRandom();
    if (comp === "gunting") {
        hasil.innerHTML = "Seri";
    } else if (comp === "batu") {
        hasil.innerHTML = "Kamu kalah";
    } else {
        hasil.innerHTML = "Kamu menang";
    }
}));

if (batu.addEventListener("click", function () {
    mathRandom();
    if (comp === "batu") {
        hasil.innerHTML = "Seri";
    } else if (comp === "kertas") {
        hasil.innerHTML = "Kamu kalah";
    } else {
        hasil.innerHTML = "Kamu menang";
    }
}));

if (kertas.addEventListener("click", function () {
    mathRandom();
    if (comp === "kertas") {
        hasil.innerHTML = "Seri";
    } else if (comp === "gunting") {
        hasil.innerHTML = "Kamu kalah";
    } else {
        hasil.innerHTML = "Kamu menang";
    }
}));
