function calculate() {
    var p = 0;
    var t = 0;
    var r = 0;
    var si = 0;

    p = parseInt(document.getElementById("principal").value)
    t = parseInt(document.getElementById("years").value)
    r = parseInt(document.getElementById("rate").value)

    si = (p*r*t)/100;

    document.getElementById("res").innerHTML=si;
}