const date =new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
 let y= document.querySelector("#navbar>div:nth-child(1)>div+div").innerHTML;
 document.querySelector("#navbar>div:nth-child(1)>div+div").innerHTML=date+" &nbsp;| "+y;