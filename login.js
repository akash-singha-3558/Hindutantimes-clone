

document.querySelector("form").addEventListener("submit",logIn);

document.querySelector("#btn2").addEventListener("mouseover",function(){
if(document.querySelector("#eml").value==""||document.querySelector("#psw").value=="")
{
    document.querySelector("#btn2").style.cursor="not-allowed";
        
    return;
}
else{
    document.querySelector("#btn2").style.cursor="pointer";
    document.querySelector("#btn2").style.backgroundColor="#02bdd5";
}

})

document.querySelector("#btn2").addEventListener("mouseleave",function(){
    document.querySelector("#btn2").style.backgroundColor="#dbdbdb";
})


//data------------------------------------------------------------------------------------
let data= JSON.parse(localStorage.getItem("userid")) || [];



//log in-----------------------------------------------------------------------------------
function logIn(event){
    event.preventDefault();
let eml=document.querySelector("#eml").value;
let psw = document.querySelector("#psw").value;



for(let i=0;i<data.length;i++)
{
    if(data[i].id==eml && data[i].password==psw)
    {
       
                  alert("Hi User "+data[i].id+"\n,Your have successfully Logged In");
                    window.open("homepage.html");
                    document.querySelector("#eml").value="";
                    document.querySelector("#psw").value="";

                   return;
            
}
else if(data[i].id==eml && data[i].password!=psw)
  {

    alert("wrong password");
    document.querySelector("#eml").value="";
document.querySelector("#psw").value="";
    return; 
    
  }

else if(i==data.length-1){
    alert("user id doesn't exist");
    document.querySelector("#eml").value="";
                    document.querySelector("#psw").value="";
}

}


}



//forgot password---------------------------------------------------------------------------------------------------
document.querySelector("#fp").addEventListener("click",reset);


function reset(){
  
var takeinputId = prompt("Type Your user Id  [ Registered Email Or Phone Number ]");
if(takeinputId==null){
    return;
}
else{
for(let i=0;i<data.length;i++)
{
    if(data[i].id==takeinputId){
        var takekey = prompt("Type your security key"+"\n who is your favourite character");
        if(takekey == null) return;
        else if(data[i].security==takekey){
            var pass= prompt("type your new password which should be minimum length of eight and contain minimum one specail characer")
            if(pass==null) return;
           else {
            if((pass.length>=8) && (pass.includes("@")||pass.includes("#")||pass.includes("$")||pass.includes("!")||pass.includes("%")||pass.includes("^")||pass.includes("~")||pass.includes("*")) ){
                data[i].password=pass;
                localStorage.setItem("userid",JSON.stringify(data));
                alert("password has changed"); break;
            }
            else{
                alert("Password doesn't match the criteria, Try Again!");
                reset();
            }
            }
        }
        else{
            alert("wrong key,try again"); 
            let ans = prompt("If you want to try again type Y else N");
            ans.toUpperCase();
            if(ans=='Y'){
                reset();
            }
            else if(ans=='N'){
                break;
            }
            else{
                alert("Wrong Input"); break;
            }
        }
    }
    else if(i==data.length-1){
        alert("Wrong user ID");
    }
}


}


}

