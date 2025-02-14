const crossBtn = document.querySelector("#cross-btn");
const openformBtn = document.querySelector("#open-formbtn");
const formContainer = document.querySelector("#formContainer");
const applyBtn = document.querySelector(".apply-btn");
const thankyouMsg = document.querySelector("#thank-you");
const admissionForm = document.querySelector("#admission-form");
const menuIcon = document.querySelector(".menu-icon");
const crossMenu= document.querySelector(".cross-menu");
const listItems= document.querySelector(".list-items");

crossMenu.addEventListener("click",()=>{
     listItems.style.left="-200%";
     formContainer.style.display="block";
})

menuIcon.addEventListener("click",()=>{
    listItems.style.left="0";
    formContainer.style.display="none";
})


crossBtn.addEventListener("click",()=>{
     formContainer.style.display="none";
     openformBtn.style.display="block";
})

openformBtn.addEventListener("click",()=>{
    formContainer.style.display="block";
    openformBtn.style.display="none";
})

applyBtn.addEventListener("click",()=>{
    if(formContainer.style.display=="none"){
        formContainer.style.display="block"; 
        openformBtn.style.display="none";
    }
})

formContainer.addEventListener("submit",(e)=>{
    e.preventDefault();
    formContainer.style.display="none";
    thankyouMsg.style.display="block";
    admissionForm.reset();

    setTimeout(()=>{
        thankyouMsg.style.display="none";
        openformBtn.style.display="block";
    },3000)
})

