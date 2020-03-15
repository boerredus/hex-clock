function updateTimer() {
    const h = ("0" + new Date().getHours()).slice(-2);
    const m = ("0" + new Date().getMinutes()).slice(-2);
    const s = ("0" + new Date().getSeconds()).slice(-2);
    document.body.style.background = "#" + h + m + s;
    document.querySelectorAll(".timer")[0].innerHTML = h;
    document.querySelectorAll(".timer")[1].innerHTML = m;
    document.querySelectorAll(".timer")[2].innerHTML = s;
}
