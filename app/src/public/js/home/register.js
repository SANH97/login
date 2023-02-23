"use static"

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    confirmPassword =document.querySelector("#confirm-password"),
    registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);
 
function register(){
    if(!id.value)return alert("아이디입력");
    if(password.value !== confirmPassword.value)return alert("일치노")
    
   const req={
    id:id.value , 
    name: name.value,
    password: password.value , 
   };
   console.log(req);
   fetch("/register",{
    method:"POST", 
    headers:{
        "Content-Type": "application/json"
    }, 
    body: JSON.stringify(req),
   }).then((res)=>res.json())
     .then((res)=>{
        if(res.success){
            location.href="/login";
        }else{
            alert(res.msg);
        }
    })
    .catch((err)=>{
        console.error("회원가입 중 에러 발생");
    });

};