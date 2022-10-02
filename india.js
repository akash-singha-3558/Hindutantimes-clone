//Category
let arrOfCat =[{name:"Home",link:"index.html"},{name:"Latest",link:"latest.html"},{name:"India",link:"india.html"},{name:"World",link:"index.html"},{name:"Delhi",link:"india.html"},{name:"Entertainment",link:"latest.html"},{name:"Cricket",link:"india.html"},

{name:"Lifestyle",link:"latest.html"},{name:"Astrology",link:"india.html"},{name:"Editorials",link:"index.html"},{name:"For You",link:"india.html"},{name:"Shop Now",link:"index.html"},
];

arrOfCat.forEach(function(ele){

let a =document.createElement("a");
a.innerText=ele.name;

a.href=ele.link;
let li = document.createElement("li");
 if(ele.name=="India")  {li.className="active"; li.style.color="#00b1cd";}
//  document.querySelector(".active>a").style.color="#00b1cd";
li.append(a);

document.querySelector("#category>div").append(li);

})



//Latest News
let arrOfLatestNews=[
    {cat:"INDIA NEWS", news:"Kharge likely among Cong prez poll frontrunners, last day of nomination today",date:"Published on"},
    {cat:"INDIA NEWS", news:"Cong prez race LIVE: Digvijaya Singh at Kharge's residence amid buzz",date:"Published on"},
    {cat:"INDIA NEWS", news:"India Legends vs Australia Legends highlights: IND L through to final",date:"Updateded on"},
    {cat:"INDIA NEWS", news:"Rahul Gandhi says he's having knee problem while walking but... | Watch video",date:"Published on"},
    
    
 ]
 arrOfLatestNews.forEach(function(ele,i){
     const date = new Date();date.toLocaleString() ;  
 
 let p1=document.createElement("p"), p2=document.createElement("p"),p3= document.createElement("p"),div=document.createElement("div");
 p1.innerText=ele.cat;
 p1.style.textAlign="left";
 p1.style.fontWeight="bold";
 p1.style.color="#00b1cd";
 p1.style.fontFamily="Lato, sans-serif";
 p1.style.fontSize="14px";
 p2.innerText=ele.news;
 p2.style.textAlign="left";
 p2.style.fontWeight="bold";
 p2.style.color="#515151";
 p2.style.fontFamily="Lato, sans-serif";
 p2.style.cursor="pointer";
 p2.addEventListener("mouseover",function(){
     p2.style.color="black";
 })
 p2.addEventListener("mouseleave",function(){
  p2.style.color="#515151";
 })
 p3.innerText=ele.date+" "+date;
 p3.style.color="grey";
 p3.style.textAlign="left";
 p3.style.fontSize="14px";
 p3.style.fontFamily="Lato, sans-serif";
 div.append(p1,p2,p3);
 div.style.padding="2px 4px 4px 8px";
 
 div.style.boxShadow= 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px';
 if(i===0)div.style.marginTop="-15px";
 
 if(i==arrOfLatestNews.length-1){
     let p3=document.createElement("p");
     p3.innerText="View All >"
     p3.style.textAlign="center";
     p3.style.color="#00b1cd";
     p3.style.fontWeight="bold";
     p3.style.cursor="pointer";
     div.append(p3);
     document.querySelector("#news>div:nth-child(1)>div").append(div);
 }
 else{
     document.querySelector("#news>div:nth-child(1)>div").append(div);
 }
 
 });
 
 let arrOfLatestNews2=[
     {cat:"INDIA NEWS", news:"Gehlot apologises, opts out of Congress poll citing moral responsibility",date:"Published on"},
     {cat:"INDIA NEWS", news:"What Tharoor said after Digvijaya Singh announced Congress prez bid",date:"Published on"},
     {cat:"CRICKET", news:"India Legends vs Australia Legends highlights: IND L through to final",date:"Updateded on"},
     {cat:"OTHERS", news:"Yash practises shooting with Iron Man stuntman, fans think its for KGF 3. Watch",date:"Published on"},
     {cat:"CRICKET", news:"‘If Gavaskar is backing me, he must’ve seen something': IND star on T20 WC snub",date:"Published on"},
     {cat:"LIFESTYLE", news:"Haryana to build the largest safari outside Africa on more than 10,000 acres",date:"Published on"},
  ]
  arrOfLatestNews2.forEach(function(ele,i){
 
  const date = new Date();date.toLocaleString() ;  
 
  let p1=document.createElement("p"), p2=document.createElement("p"),p3= document.createElement("p"),div=document.createElement("div");
  p1.innerText=ele.cat;
  p1.style.textAlign="left";
  p1.style.fontWeight="bold";
  p1.style.color="#00b1cd";
  p1.style.fontFamily="Lato, sans-serif";
  p1.style.fontSize="14px";
  p2.innerText=ele.news;
  p2.style.textAlign="left";
  p2.style.fontWeight="bold";
  p2.style.color="#515151";
  p2.style.fontFamily="Lato, sans-serif";
  p2.style.cursor="pointer";
  p2.addEventListener("mouseover",function(){
     p2.style.color="black";
 })
 p2.addEventListener("mouseleave",function(){
  p2.style.color="#515151";
 })
  p3.innerText=ele.date+" "+date;
  p3.style.color="grey";
  p3.style.textAlign="left";
  p3.style.fontSize="14px";
  p3.style.fontFamily="Lato, sans-serif";
  div.append(p1,p2,p3);
  div.style.padding="2px 4px 4px 8px";
  
  div.style.boxShadow= 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px';
  if(i===0)div.style.marginTop="-15px";
  
  if(i==arrOfLatestNews2.length-1){
      let p3=document.createElement("p");
      p3.innerText="View All >"
      p3.style.textAlign="center";
      p3.style.color="#00b1cd";
      p3.style.fontWeight="bold";
      p3.style.cursor="pointer";
      div.append(p3);
      document.querySelector("#news>div:nth-child(4)>div:nth-child(2)").append(div);
  }
  else{
     document.querySelector("#news>div:nth-child(4)>div:nth-child(2)").append(div);
  
  }});
 //top news date---------------------------------------
 function headDate(){
     let p = document.querySelector("#headline>p+p").innerText;
     const date = new Date();date.toLocaleString() ;  
     document.querySelector("#headline>p+p").innerText=p+" "+date;
 
 }
 
 headDate();
 
 // TOP NEWS UNDER------------------------------
 
 let arrOFunders=[
     { maintext:"India vs South Africa Live Score 1st T20I: SA rebuild dented as Markram falls",subtext:"Cricket",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/28/148x111/India-South-Africa-Cricket-20_1664373374379_1664373374379_1664373385304_1664373385304.jpg"},
 { maintext:"Covered in black, Durga Puja pandal depicts ‘bloodshed’ in Bengal poll violence",subtext:"Kolkats News",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/Screenshot_201_1664451732572_1664451732748_1664451732748.png"},
 { maintext:"Naane Varuven movie review: Dhanush owns this masterful supernatural thriller",subtext:"Tamil Cinema",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/Naane_Varuven_review_1664442104990_1664442109413_1664442109413.jpeg"},
 { maintext:"Lamborghini unveils new Urus S, its entry-level sports SUV",subtext:"Cars",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/Lamborghini_Urus_S_1664447106667_1664451662623_1664451671370_1664451671370.png"},
 { maintext:"Novak Djokovic fires massive Grand Slam warning to Rafael Nadal",subtext:"Tennis",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/New_Project_-_2022-09-29T165138869_1664450603451_1664450603745_1664450603745.jpg"},
 { maintext:"Delhi airport ready to support 5G services: DIAL",subtext:"India News",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/29/150x84/159a88e4-3fe1-11ed-b0b0-fc99a9f59b01_1664447555756.jpg"},
 { maintext:"Surat will emerge among safest, most convenient diamond trading hubs: Modi",subtext:"India News",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/29/150x84/fcf706b4-3fd6-11ed-b0b0-fc99a9f59b01_1664443263598.jpg"},
 { maintext:"Heavy rain in parts of Telangana, moderate rain forecast for next 4 days",subtext:"India News",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/30/148x111/3d31922a-10fd-11ed-8b26-bc4372205d67_1659291650296_1664545555884_1664545555884.jpg"}
 ]
 
 arrOFunders.forEach(function(el){
     const date = new Date();date.toLocaleString() ;
 let div=document.createElement("div");
 div.style.display="flex";
 div.style.fontFamily="Lato, sans-serif"
 div.style.textAlign="left";
 div.style.margin="0px 0px 5px 0px";
 div.style.boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
 div.style.padding="5px 5px 5px 5px";
 let div1= document.createElement("div");
 div.style.marginTop="5px";
 let div2= document.createElement("div");
 let p1= document.createElement("p");
 p1.innerText=el.maintext;
 p1.style.fontWeight="bold";
 p1.style.color="#212121";
 let p2= document.createElement("p");
 p2.innerText=el.subtext;
 p2.style.color="#00b1cd"
 p2.style.fontWeight="bold";
 p2.style.fontSize="14px";
 p2.style.marginTop="-10px";
 let p3=document.createElement("p");
 p3.innerText=el.pod+" "+date;
 p3.style.color="grey"
 p3.style.fontWeight="lighter";
 p3.style.fontSize="13px";
 p3.style.marginTop="-10px";
 div1.append(p1,p2,p3);
 
 
 let img = document.createElement("img");
 img.src=el.image;
 img.style.width="100%";
 img.style.marginTop="15px"
 img.style.height="70%";
 div2.append(img);
 div.append(div1,div2);
 document.querySelector("#India-news-under").append(div);
 })
 
 let arrOFunders2=[
     { maintext:"Vikram Vedha advance booking slow; lagging behind Laal Singh Chaddha, Shamshera",subtext:"Bollywood",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/Saif_Ali_Khan_Hrithik_Roshan_1664328026831_1664452313607_1664452313607.jpg"},
 { maintext:"Amazon Great Indian Festival Sale: Get up to 48% on hair conditioners",subtext:"Health And Beauty",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/hair_conditioners_1664448448126_1664450108465_1664450108465.jpg"},
 { maintext:"Qatar confirms COVID-19 test requirements for World Cup fans",subtext:"Football",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/World-Cup-_1664452647634_1664452651240_1664452651240.jpg"},
 { maintext:"North Korea fires ballistic missile hours after Kamala Harris' DMZ visit: Seoul",subtext:"World News",pod:"Updated on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/SKOREA-NKOREA-MISSILE-0_1664356986599_1664356986599_1664452670271_1664452670271.jpg"},
 { maintext:"Navratri 2022 recipes: 5 teas that you can drink while fasting during Navratri",subtext:"Recipe",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/8d4049b5d977db0323e1b861ee9fd26b_1664442359899_1664442370908_1664442370908.jpg"},
 { maintext:"SEPC holds session on Services Sector Exports Strategy for India@2047",subtext:"News",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/0738150c-551d-436c-a9a1-0c9fb6837f8f_1664451445098_1664451467074_1664451467074.jpg"},
 { maintext:"Nasa shares startling video of hurricane Ian seen from space. Watch viral video",subtext:"Trending",pod:"Published on",
 image:"https://images.hindustantimes.com/img/2022/09/29/148x111/nasa-shares-video-of-hurricane-ian-from-space-iss_1664448259746_1664448267913_1664448267913.jpg"},
 
 ]
 arrOFunders2.forEach(function(el){
     const date = new Date();date.toLocaleString() ;
 let div=document.createElement("div");
 div.style.display="flex";
 div.style.textAlign="left";
 div.style.fontFamily="Lato, sans-serif"
 div.style.margin="0px 0px 5px 0px";
 div.style.boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
 div.style.padding="5px 5px 5px 5px";
 let div1= document.createElement("div");
 div.style.marginTop="5px";
 let div2= document.createElement("div");
 let p1= document.createElement("p");
 p1.innerText=el.maintext;
 p1.style.color="#212121";
 p1.style.fontWeight="bold";
 let p2= document.createElement("p");
 p2.innerText=el.subtext;
 p2.style.color="#00b1cd"
 p2.style.fontWeight="bold";
 p2.style.fontSize="14px";
 p2.style.marginTop="-10px";
 let p3=document.createElement("p");
 p3.innerText=el.pod+" "+date;
 p3.style.color="grey"
 p3.style.fontWeight="lighter";
 p3.style.fontSize="13px";
 p3.style.marginTop="-10px";
 div1.append(p1,p2,p3);
 
 
 let img = document.createElement("img");
 img.src=el.image;
 img.style.width="100%";
 img.style.marginTop="15px"
 img.style.height="70%";
 div2.append(img);
 div.append(div1,div2);
 document.querySelector("#India-news-under-2").append(div);
 })


 //Trending Topics
 let arrOfTrends = ["Navratri 2022","Navratri 2022 Day 4","Horoscope Today","BPSC 67th Prelims Exam","World Heart Day 2022","RBI Monetary Policy","Repo Rate","GATE 2023","Durga Puja 2022 Date","Vikram Vedha","Navaratri 2022 Ashtami","Ponniyin Selvan I","Vande Bharat Express",
 "GST Collections","Credit Card Rules"];
 arrOfTrends.forEach(function(el){
let div= document.createElement("div");

let btn = document.createElement("btn");
btn.innerText=el;
btn.style.fontWeight="bold";
btn.style.color="#0fb6d0";
btn.style.backgroundColor="#e5f7fa";
btn.style.borderRadius="10px";
btn.style.border="none";
btn.style.padding="7px 16px 7px 16px";
btn.style.cursor="pointer";
div.append(btn);
div.style.margin="10px";

document.querySelector("#news>div:nth-child(1)>div:nth-child(3)>div").append(div);


 })