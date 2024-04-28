var user_name = "one";
var user_password = "one";
localStorage.setItem("user_name",user_name);
localStorage.setItem("user_password",user_password);
var userChecker = "";
var usermail="";
var userPass="";
function saver(){
    
    usermail = document.getElementById("UserEmail").value
    userPass = document.getElementById("UserPass").value
    user_name = document.getElementById("UserId").value
    userChecker=user_name;
    if(user_name.length<6 && user_name.length>0 ){
        userChecker = "two";
    }
    else if(user_name.length>10){
        userChecker = "three";
    }
    else if(user_name.length==0){
        userChecker= "four";
    }
    else{
    
    }
    document.getElementById("Container").style.animation="none";
    document.getElementById("UserId").value = "";
    document.getElementById("UserPass").value = "";
    document.getElementById("UserEmail").value= "";
    setTimeout(success,1000)
}
function success(){
    var ArrUser = localStorage.getItem("user_name").split(",");
    var c=0; 
    for (i=0;i<ArrUser.length;i++){
        if(ArrUser[i]==userChecker){
            c++;
        }
    }
    console.log(c)
    if(userChecker=="two"){
        document.getElementById("teller").innerHTML="User_ID length is short";
        document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/too_short.gif)"
    }
    else if(userChecker=="three"){
        document.getElementById("teller").innerHTML="User_ID length is long";
        document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/tooLong.gif)"
    }
    else if(userChecker=="four"){
        document.getElementById("teller").innerHTML="Don't play Games with me";
        document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/zero.png)"
    }
    else{
    if(c>1){
        document.getElementById("teller").innerHTML="User-Id already exists";
        document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/exist.png)"
        
    }
    else{
        if(usermail.length==0){
            document.getElementById("teller").innerHTML="please provide email";
        document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/exist.png)"
        }
        else if(userPass.length==0){
            document.getElementById("teller").innerHTML="please provide password";
            document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/exist.png)"
        }
        else{
            var receiveId = localStorage.getItem("user_name");
            // user_name = userChecker;
            receiveId = receiveId + "," +user_name;
            localStorage.setItem("user_name",receiveId);

            var receivePw = localStorage.getItem("user_password");
            user_password = userPass;
            receivePw = receivePw + "," +user_password;
            localStorage.setItem("user_password",receivePw);
            document.getElementById("teller").innerHTML="Sign up SuccessfullY";
            document.getElementById("tell").style.backgroundImage="url(/Assets/gifs/complete.jpeg)"
        }
        
    }
    }
    document.getElementById("teller").style.animation="magic 1s forwards"
    document.getElementById("teller").style.display="flex";
    setTimeout(vanish,3000);
}
function vanish(){
    document.getElementById("teller").style.display="none";
    document.getElementById("tell").style.backgroundImage="none"
}
var x=0;
function Dark(){
    if(x==0){
    document.getElementById("por").style.backgroundImage=" url(/Assets/Images/sun.png)";
    document.body.style.backgroundColor="black";
    var u = document.getElementsByClassName("boxer");
    for(i=0;i<u.length;i++){
        u[i].style.backgroundColor="black";
        u[i].style.color="white"
    }
    document.getElementById("ter").style.color="white"
    document.getElementById("info").style.backgroundColor="rgb(192, 101, 192)"
    x++;
    document.getElementById("Container001").style.backgroundColor="white"
    document.getElementById("info3").style.backgroundColor="white"
    document.getElementById("dash").style.backgroundColor="black"
    document.getElementById("info3").style.color="black"
    document.getElementById("info3").style.borderRight="6px solid rgb(192, 101, 192)"
    document.getElementById("dash1").style.backgroundColor="black"
    document.getElementById("info2").style.color="black"
    document.getElementById("container002").style.backgroundColor="white"
    document.getElementById("info4").style.backgroundColor="white"
    var y = document.getElementsByClassName("box")
    for(i=0;y.length;i++){
        y[i].style.color="black"
    }
    
    document.getElementById("por").style.border="5px solid black"
    
    }
    else{
    document.getElementById("ter").style.color="black"
    document.getElementById("por").style.backgroundImage=" url(/Assets/Images/moon.png)";
    document.body.style.backgroundColor="white";
    document.getElementById("info").style.backgroundColor="rgb(139, 210, 69)"
    document.getElementById("Container001").style.backgroundColor="black"
    document.getElementById("info3").style.backgroundColor="black"
    document.getElementById("dash").style.backgroundColor="black"
    document.getElementById("info3").style.color="aqua"
    document.getElementById("info").style.backgroundColor="rgb(139, 210, 69)"
    document.getElementById("info3").style.borderRight="6px solid rgb(139, 210, 69)"
    document.getElementById("dash1").style.backgroundColor="aqua"
    document.getElementById("info2").style.color="black"
    document.getElementById("container002").style.backgroundColor="black"
    document.getElementById("info4").style.backgroundColor="black"

    var u = document.getElementsByClassName("boxer");
    for(i=0;i<u.length;i++){
        u[i].style.backgroundColor="rgb(139, 210, 69)";
        u[i].style.color="navy"
    }
    var y = document.getElementsByClassName("box")
    for(i=0;y.length;i++){
        y[i].style.color="white"
    }
    document.getElementById("por").style.border="5px solid white"
    x=0; 
    }
}
var j=0;
function Dmode(){
    if(j==0){
    document.getElementById("por").style.backgroundImage=" url(/Assets/Images/sun.png)";
    document.body.style.backgroundColor="black";
    document.getElementById("con1").style.backgroundColor="rgb(228, 58, 228)"
    document.getElementById("con1").style.color="red"
    document.getElementById("con2").style.backgroundColor="rgb(239, 80, 80)"
    document.getElementById("con2").style.color="purple"
    document.getElementById("container001").style.backgroundColor="white"
    document.getElementById("con3").style.color="black"
    document.getElementById("con4").style.color="black"
    document.getElementById("container002").style.backgroundColor="white"
    var u = document.getElementsByClassName("box")
    for(i=0;i<u.length;i++){
        u[i].style.color="black"
    }
    document.getElementById("por").style.border="5px solid black"
    j++;
    }
    else{
    document.getElementById("por").style.backgroundImage=" url(/Assets/Images/moon.png)";
    document.body.style.backgroundColor="white";
    document.getElementById("con1").style.backgroundColor="rgb(70, 70, 185)"
    document.getElementById("con1").style.color="white"
    document.getElementById("con2").style.backgroundColor=" rgb(209, 169, 37)"
    document.getElementById("con2").style.color="white"
    document.getElementById("container001").style.backgroundColor="black"
    document.getElementById("con3").style.color="white"
    document.getElementById("con4").style.color="white"
    document.getElementById("container002").style.backgroundColor="black"
    var u = document.getElementsByClassName("box")
    for(i=0;i<u.length;i++){
        u[i].style.color="white"
    }
    document.getElementById("por").style.border="5px solid white"
    j=0;
    }
}
function an1(){
    document.getElementById("ter").innerText="we";
    setTimeout(er1,1000);
}
function er1(){
    document.getElementById("ter").innerText="";
    setTimeout(an2,500);
}
function an2(){
    document.getElementById("ter").innerHTML="are";
    setTimeout(er2,1000);
}
function er2(){
    document.getElementById("ter").innerText="";
    setTimeout(an3,500);
}
function an3(){
    document.getElementById("ter").innerHTML="hiring !!!";
    setTimeout(er3,1000);
}
function er3(){
    document.getElementById("ter").innerText="";
    setTimeout(an1,500);
}
