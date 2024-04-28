function passer(){
    var user = document.getElementById("UserId").value
    var l = user.length;
    if(l>0){
        document.getElementById("LoginPage").removeAttribute("disabled");
        document.getElementById("LoginPage").style.backgroundColor="black"
        document.getElementById("LoginPage").style.color="white"
        document.getElementById("LoginPage").style.border="1px solid white"
    }
    else{
        document.getElementById("LoginPage").setAttribute("disabled",true)
        document.getElementById("LoginPage").style.backgroundColor="white"
        document.getElementById("LoginPage").style.color="black"
        document.getElementById("LoginPage").style.border="1px solid black"
    }
}

var per =0 ;
function verify(){
    var user = document.getElementById("UserId").value
    var pass = document.getElementById("UserPass").value
    var ArrUser = localStorage.getItem("user_name").split(",")
    var ArrPass = localStorage.getItem("user_password").split(",")
    var ID = false,PW = false;
    for (i=0;i<ArrUser.length;i++){
        console.log(ArrUser[i])
        if(ArrUser[i]==user){
            console.log("win")
            ID = true;
        }
    }
    for (i=0;i<ArrUser.length;i++){
        console.log(ArrPass[i])
        if(ArrPass[i]==pass){
            console.log("win")
            PW = true;
        }
    }
    document.getElementById("UserId").value = "";
    document.getElementById("UserPass").value = "";
    if(ID && PW){
        document.getElementById("Container").style.backgroundImage="url(/Assets/gifs/correct.gif)";
        document.getElementById("shower").innerHTML="Valid Details"
        document.getElementById("shower").style.textShadow="4px 4px 10px green";
        per++ ;
        setTimeout(orginil,2000);
    }
    else{
        document.getElementById("Container").style.backgroundImage="url(/Assets/gifs/wrong.gif)"
        document.getElementById("shower").innerHTML="InValid Details"
        document.getElementById("shower").style.textShadow="4px 4px 10px red";
        setTimeout(orginil,2000);
    }
    localStorage.setItem("test",per);
}
function orginil(){
    document.getElementById("Container").style.backgroundImage="none";
    document.getElementById("shower").innerHTML="Login"
    document.getElementById("shower").style.textShadow="4px 4px 10px black";
}

var k=0;
function dmode(){
    if(k==0){
    document.getElementById("por").style.backgroundImage=" url(/Assets/Images/sun.png)";
    document.body.style.backgroundColor="black"
    document.getElementById("container").style.color="white"
    document.getElementById("map").style.border="5px solid aqua"
    document.getElementById("address").style.backgroundColor="white"
    document.getElementById("address").style.color="black"
    document.getElementById("user").style.color="white"
    document.getElementById("user").style.border="5px solid white"
    document.getElementById("container002").style.backgroundColor="white"
    var u = document.getElementsByClassName("box")
    for(i=0;i<u.length;i++){
        u[i].style.color="black"
    }
    document.getElementById("por").style.border="5px solid black"
    k++;
    }
    else{
    document.getElementById("por").style.backgroundImage=" url(/Assets/Images/moon.png)";
    document.body.style.backgroundColor="white"
    document.getElementById("container").style.color="black"
    document.getElementById("map").style.border="5px solid black"
    document.getElementById("address").style.backgroundColor="black"
    document.getElementById("address").style.color="white"
    document.getElementById("user").style.color="black"
    document.getElementById("user").style.border="5px solid black"
    document.getElementById("container002").style.backgroundColor="black"
    var u = document.getElementsByClassName("box")
    for(i=0;i<u.length;i++){
        u[i].style.color="white"
    }
    document.getElementById("por").style.border="5px solid white"
    k=0;  
    }
}

function winner() {
    var n =localStorage.getItem("test")
    if(n==0){
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("msg").value="";
        document.getElementById("ou").style.color="red"
        document.getElementById("ou").innerText="login first !!!"
        


    }
    else{
        document.getElementById("name").value="";
        document.getElementById("mail").value="";
        document.getElementById("msg").value="";
        document.getElementById("ou").style.color="green"
        document.getElementById("ou").innerText="message sent"

    }
    setTimeout(cleaner,4000)
}
function cleaner(){
    document.getElementById("ou").innerText="";
}
