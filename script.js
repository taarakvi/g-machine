
function Gfunction(){
    let usInp = document.querySelector(".usrInput").value
    let result = document.querySelector(".output")
    let Gcheck = document.querySelector("#check")
    let pattern = /^(?!\.)(?!.*\.\.)(?=.{6,30}$)(?=.*[a-z])(?=.*\d)[a-z0-9.]+(?<!\.)$/
    let r = pattern.test(usInp)

    let patternB = /^(?=.{6,30}$)[a-z]+$/;
    let rB = patternB.test(usInp)
    let x = "@gmail.com";
    //conditon
    if(r === true){
    result.innerText = usInp+x
    result.style.color="white"
    Gcheck.style.display = "block"
    // result.style.fontSize ="16px"
    
    } 
    else if(rB===true){
       let n = Math.floor(Math.random()*(500 - 10)+10)
        result.innerText = usInp+n+x
        result.style.color="white"
        Gcheck.style.display = "block"

    }
    else{
        // result.style.fontSize ="12px"
    result.style.color="gray"
    result.innerText = "TryAgain \n you can only use  small latter,dot(.)and numbers";
    Gcheck.style.display = "non"
}
}
let Gcheck = document.querySelector("#check")
let outputB = document.querySelector(".out-B")
outputB.addEventListener("click",()=>{
    Gfunction()
    Gcheck.style.display = "non"   
})

//text clear
let cutB = document.querySelector(".cutB")
 cutB.addEventListener("click",()=>{
     let usInp = document.querySelector(".usrInput")
     usInp.value = "";
 })

 //bar options
 let barA = document.querySelector("#menu-toggle");
 let barI = document.querySelector(".barIcon")
 barA.addEventListener("click",()=>{
 barI.classList.toggle("barI")
   //  console.log("clicked")
 })

 //navebar clickble
 //homeButton
 let homeB = document.querySelector(".home");
 homeB.addEventListener("click",()=>{
    document.querySelector(".sect1").style.display="block"
    document.querySelector("#l-form").style.display="none"
    document.querySelector(".sect2").style.display="none"

    console.log()
 })
 let homeB2 = document.querySelector(".home2");
 homeB2.addEventListener("click",()=>{
    document.querySelector(".sect1").style.display="block"
    document.querySelector("#l-form").style.display="none"
    document.querySelector(".sect2").style.display="none"
 })

 //aboutButton
let aboutB = document.querySelector(".about-B")
aboutB.addEventListener("click",()=>{
   document.querySelector(".sect2").style.display="block"
   document.querySelector(".sect1").style.display="none"
   document.querySelector("#l-form").style.display="none"
})
let aboutB2 = document.querySelector(".about-B2")
aboutB2.addEventListener("click",()=>{
   document.querySelector(".sect2").style.display="block"
   document.querySelector(".sect1").style.display="none"
   document.querySelector("#l-form").style.display="none"
})

 //loginButton
 let loginB = document.querySelector(".login");
 loginB.addEventListener("click",()=>{
   //  console.log("lform")
    document.querySelector(".sect1").style.display="none"
    document.querySelector("#l-form").style.display="block"
    document.querySelector(".sect2").style.display="none"

 })
 let loginB2 = document.querySelector(".login2");
 loginB2.addEventListener("click",()=>{
   //  console.log("lform")
    document.querySelector(".sect1").style.display="none"
    document.querySelector("#l-form").style.display="block"
    document.querySelector(".sect2").style.display="none"

 })

//login form 
let subB = document.querySelector(".subB")
let inptMail = document.querySelector(".inpt-mail")
let inptPass = document.querySelector(".inpt-pass")

subB.addEventListener("click",()=>{
   if(inptMail.value === "" || inptPass.value===""){
   alert("fill details")
}
else{
   alert("loging successful")
   inptMail.value = "";
   inptPass.value = "";
}
// console.log("clicked")
})
