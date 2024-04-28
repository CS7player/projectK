function tt(){
    var d = new Date();
    var hh = d.getHours();
    var mn = d.getMinutes();
    var se = d.getSeconds();
    var dd = d.getDate();
    var mm = d.getMonth()+1;
    var yy = d.getFullYear() - 2000;
    var dt = d.getDay();
    var day = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var dy = day[dt];
    var pa = "AM"
    if(hh>12){
        hh=hh-12
        pa= "PM"
    }
    document.getElementById("se").innerHTML=se
    document.getElementById("ap").innerHTML=pa
    document.getElementById("hh").innerHTML=hh
    document.getElementById("mn").innerHTML=mn
    document.getElementById("dd").innerHTML=dd
    document.getElementById("mm").innerHTML=mm
    document.getElementById("yy").innerHTML=yy
    document.getElementById("da").innerHTML=dy
    setTimeout(tt,1000)
    console.log("work")
}
tt()
function ui(){
    document.getElementById("li").style.display="flex"
}
function sd(){
    var hh = document.getElementById("").value
    var mm = document.getElementById("").value
    var pp = document.getElementById("").value
}