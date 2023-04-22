var emailidorphno=localStorage.getItem("mailidorphno")
var pass=localStorage.getItem("pass")
var form=document.forms;
function passvalid()
{
    var inputtags=document.querySelectorAll("input")
    var usergivenmailornum=inputtags[0].value
    var usergivenpassword=inputtags[1].value
    var borders=document.getElementsByClassName("inputdiv")
    if(emailidorphno!=usergivenmailornum && pass!=usergivenpassword)
    {
        document.body.style.backgroundImage="inner-gradient(75deg,red,red)";
        borders[0].style.bordercolor="red"
        borders[1].style.bordercolor="red"
        document.getElementById("status").innerHTML="userid and password is wrong"
        
    }
    else if(emailidorphno=usergivenmailornum && pass!=usergivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,rgb(193,0,97),red)";
        borders[0].style.bordercolor="royalblue"
        borders[1].style.bordercolor="red"
        document.getElementById("status").innerHTML="password is wrong"
    }
    else if(emailidorphno!=usergivenmailornum && pass==usergivenpassword)
    {
        document.body.style.backgroundImage="linear-gradient(75deg,red,purple)";
        borders[0].style.bordercolor="red"
        borders[1].style.bordercolor="royalbule"
        document.getElementById("status").innerHTML="Emailid or phno number is wrong"
    }
    else{
        form[0].action="home.html"
        form[0].elements[2].type="submit"
    }
}
function passvis()
{
    form[0].elements[1].type="text"
    document.getElementById("passvis").style.transition="transform 0.3s"
    document.getElementById("passvis").src=""
    document.getElementById("passvis").style.transform="rotateY"
}