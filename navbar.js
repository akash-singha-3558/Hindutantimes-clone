const date =new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) 
 let y= document.querySelector("#navbar>div:nth-child(1)>div+div").innerHTML;
 document.querySelector("#navbar>div:nth-child(1)>div+div").innerHTML=date+" &nbsp;| "+y;

//  let count=0;
// let z = document.querySelector("#sub");
// z.addEventListener("click", hi);
//  function hi(){
// //     event.preventDefault();
// let div1=document.createElement("div");
// // let div2=document.createElement("div");
// // let div3=document.createElement("div");
// // let div4=document.createElement("div");
// // let div5=document.createElement("div");
// // let div6=document.createElement("div");
// // div1.style.width="100%";

// div1.style.backgroundColor="red";
// // let p1= document.createElement("p");
// // p1.innerText="Enjoy unlimited access";
// // p1.style.fontFamily="Lato, sans-serif";
// // p1.style.fontSize="20px";
// // div2.style.textAlign="center";
// // div2.style.margin="auto";
// // div2.append(p1);
// // let p2= document.createElement("p");
// // p2.innerText="Subscribe Now! Get features like";
// // p2.style.fontFamily="Lato, sans-serif";
// // p2.style.fontSize="16px";
// // div3.style.textAlign="center";
// // div3.style.margin="auto";
// // div3.append(p1);

// // div1.append(div2,div3);

// // console.log(p1.innerText)
// z.append(div1);
// document.querySelector("#navbar").append(z);
// }