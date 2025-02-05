document.querySelector("#No").addEventListener("click",()=>{
    document.querySelector(".first").classList.toggle("replacefirst");
    document.querySelector(".secondno").classList.toggle("activesecondno")
});
document.querySelector("#Ok").addEventListener("click",()=>{
    document.querySelector(".first").classList.toggle("replacefirst");
    document.querySelector(".secondyes").classList.toggle("activesecondyes");
});
document.querySelector("#Nosno").addEventListener("click",()=>{
    alert("Okay then, have a good day!");
});
document.querySelector("#Oksno").addEventListener("click",()=>{
    document.querySelector(".secondno").classList.toggle("activesecondno");
    document.querySelector(".secondyes").classList.toggle("activesecondyes")
});
document.querySelector("#start").addEventListener("click",()=>{
    document.querySelector(".secondyes").classList.toggle("activesecondyes");
    document.querySelector(".third").classList.toggle("activethird");
});
document.querySelector("#guessednumber").addEventListener("click",()=>{
    let guessedNumber= document.querySelector("#guessinput").value;
    if(guessedNumber==="6"){
        document.querySelector(".third").classList.toggle("activethird");
        document.querySelector(".right").classList.toggle("activeright");
        }        
    else if(guessedNumber==="") {
        alert("Please, guess a number.");
    }else{
        document.querySelector(".third").classList.toggle("activethird");
        document.querySelector(".wrong").classList.toggle("activewrong");
    }});
document.querySelector("#back").addEventListener("click",()=>{
    document.querySelector(".third").classList.toggle("activethird");
    document.querySelector(".wrong").classList.toggle("activewrong");
});
document.querySelector("#price").addEventListener("click",()=>{
    document.querySelector(".right").classList.toggle("activeright");
    document.querySelector(".payment").classList.toggle("activepayment")
});
document.querySelector("#selectpayment").addEventListener("click",()=>{
    if(document.querySelector("#paymentnumber").value===""){
        alert("Number is required");
    }else{
        alert("Successfully wasted time.");
    }
});