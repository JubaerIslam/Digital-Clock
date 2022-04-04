
function digitalClock(){
    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let formate = document.getElementById("formate");

    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let fm = "AM";


    if( h === 0) {
        h = 12;
    }
    if( h > 12) {
        h -= 12;
        fm = "PM";
    }


    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;



    hours.innerHTML = h;
    minutes.innerText = m;
    seconds.innerText = s;
    formate.innerText = fm;

}

let interval = setInterval(digitalClock, 1000);


























