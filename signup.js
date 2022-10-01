document.querySelector("form>div:nth-child(1)").addEventListener("click",moveGoogle);
function moveGoogle(){
    window.location.href="https://accounts.google.com/";
   
}

document.querySelector("form>div:nth-child(2)").addEventListener("click",moveFB);
function moveFB(){
    window.location.href=("https://www.facebook.com/login.php?skip_api_login=1&api_key=2140564542847120&kid_directed_site=0&app_id=2140564542847120&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv12.0%2Fdialog%2Foauth%3Fapp_id%3D2140564542847120%26cbt%3D1664602811899%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df1780f023bea964%2526domain%253Daccounts.hindustantimes.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Faccounts.hindustantimes.com%25252Ff3ca0f1587d5%2526relation%253Dopener%26client_id%3D2140564542847120%26display%3Dpopup%26domain%3Daccounts.hindustantimes.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Faccounts.hindustantimes.com%252F%253FhtMoe%253D%26locale%3Den_US%26logger_id%3Df29212d0118d728%26origin%3D1%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df59cf460d52cd4%2526domain%253Daccounts.hindustantimes.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Faccounts.hindustantimes.com%25252Ff3ca0f1587d5%2526relation%253Dopener%2526frame%253Df357a07bfc65df%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26return_scopes%3Dtrue%26scope%3Dpublic_profile%252Cemail%26sdk%3Djoey%26version%3Dv12.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df59cf460d52cd4%26domain%3Daccounts.hindustantimes.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Faccounts.hindustantimes.com%252Ff3ca0f1587d5%26relation%3Dopener%26frame%3Df357a07bfc65df%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0")
   
}

document.querySelector("form>div:nth-child(3)").addEventListener("click",moveApple);
function moveApple(){
    window.location.href=("https://appleid.apple.com/auth/authorize?client_id=com.ht.htiphoneenglishapp.service&redirect_uri=https%3A%2F%2Faccounts.hindustantimes.com%2Fauth_apple&response_type=code%20id_token&scope=name%20email&nonce=%5BNONCE%5D&response_mode=form_post&state=HT");
}

document.querySelector("form>div:nth-child(4)").addEventListener("click",moveTC);
function moveTC(){
    window.location.href=("https://www.truecaller.com/auth/sign-in");
}

document.querySelector("#btn").addEventListener("mouseover",checker);
function checker(){
    if(document.querySelector("input").value=="" || document.querySelector(".inp2").value=="" || document.querySelector(".psw").value=="" ){
        document.querySelector("#btn").style.cursor="not-allowed";
       
    }
    else{
            
            document.querySelector("#btn").style.cursor="pointer";
            document.querySelector("#btn").style.backgroundColor="#1877f2";
            
    }
}
document.querySelector("#btn").addEventListener("mouseleave",function(){
    document.querySelector("#btn").style.backgroundColor="#dbdbdb";
    
});

let data= JSON.parse(localStorage.getItem("userid")) || [];////////////////-----data------////////////////////////////////////////////////////////////////

document.querySelector("#btn").addEventListener("click",logIn);
function logIn(){
    if(document.querySelector("input").value=="" || document.querySelector(".inp2").value=="" || document.querySelector(".psw").value=="" ){
        document.querySelector("#btn").style.cursor="not-allowed";
        
        return;
    }
    else{
       
       let emp = document.querySelector("input").value;
       for(let i=0;i<data.length-1;i++){
        if(data[i].id==emp){
            alert("user id already exists"); return;
        }
       }
       let seckey=document.querySelector(".inp2").value;
       let psw = document.querySelector(".psw").value;
       if((emp.includes("@") && emp.includes("gmail.com"))||emp.length==10){
        if(psw.length>=8){
            if(psw.includes("@")||psw.includes("#")||psw.includes("$")||psw.includes("!")||psw.includes("%")||psw.includes("^")||psw.includes("~")||psw.includes("*")){

                alert("Your Account With id "+emp+"\n has created succesfully");
                window.open("login.html");


                let obj={id:emp,security:seckey,password:psw}; //obj........///////////////////////////////////////////////////////////////////////



                data.push(obj);
                document.querySelector("button").style.cursor="pointer";
                document.querySelector("button").style.backgroundColor="#1877f2";
                localStorage.setItem("userid",JSON.stringify(data));
              
            }
           else{
            alert("Password should contain a special charecters");
            return;
           }
        }
       else{
        alert("Please Set A Password Minimun length of eight");
        return;
       }
        
       }
       
       else{
        alert("Invaild Email Or Phone Number");
        
       }
}

document.querySelector("input").value="";
document.querySelector("inp2").value="";
document.querySelector(".psw").value="";
}
document.querySelector("#btn2").addEventListener("click", Into);
    function Into(){
        window.open("login.html","_target");
        
    }
