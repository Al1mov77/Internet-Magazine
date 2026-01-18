let loginBtn = document.querySelector("#loginBtn")
let passwordInp = document.querySelector("#inp1")
let loginInp = document.querySelector("#inp2")
loginBtn.onclick = () =>{
   if(passwordInp.value == "98899889" && loginInp.value == "alimovumar707@gmail.com"){
    passwordInp.value = ""
    loginBtn.value = ""
    window.location = "./adminloginSuccsesfull.html"
    alert("Success!")
   }
   else{
    alert("Wrong Input")
   }
}