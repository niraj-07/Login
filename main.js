

gsap.from('.navbar', { duration:1 , y:'-100%'})

gsap.from(".content", {duration: 1, x: 100});
gsap.from(".side-bar", {duration: 1.3, x: 300, opacity: 0, scale: 0.5});
gsap.from(".container", {duration: 1.3, x: 300, opacity: 0, scale: 0.5});

function redirect(){
    let passwordEl = document.getElementById("password").value;
    if(passwordEl==="echojoj"){
     
        window.location.href="homepage/index.html";

    }else{
        document.getElementById("errorMsg").style.visibility = "visible";

    }

}

