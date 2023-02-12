document.getElementById('btn').addEventListener("click",function(){
    let emailFaild = document.getElementById("user-email");
    let emailValue = emailFaild.value;
    let passwordFaild = document.getElementById("user-password");
    let passwordValue = passwordFaild.value;
    console.log(emailValue, passwordValue)

    if(emailValue == "amran@gmail.com" && passwordValue == "812@gmail.com"){
        window.location.href="two.html"
    }
    else{
        alert('in vaild user')
    }

})