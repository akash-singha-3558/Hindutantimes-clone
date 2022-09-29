//Category
let arrOfCat =[{name:"Home",link:"homepage.html"},{name:"Latest",link:"#"},{name:"India",link:"india.html"},{name:"World",link:"home.html"},{name:"Delhi"},{name:"Entertainment"},{name:"Cricket"},

{name:"Lifestyle",link:"latest.html"},{name:"Astrology",link:"india.html"},{name:"Editorials",link:"homepage.html"},{name:"For You",link:"india.html"},{name:"Shop Now",link:"homepage.html"},
];



arrOfCat.forEach(function(ele){

let a =document.createElement("a");
a.innerText=ele.name;

a.href=ele.link;
let li = document.createElement("li");
 if(ele.name=="Home")  {li.className="active"; li.style.color="#00b1cd";}
//  document.querySelector(".active>a").style.color="#00b1cd";
li.append(a);

document.querySelector("#category>div").append(li);


})

//Latest News
let arrOfLatestNews=[
   { news:"Case Toh Banta Hai teaser: Sonakshi Sinha slapped someone in court Watch",date:"Published on"},
   { news:"Gold falls by ₹435, Silver tumbles ₹1,600: Report",date:"Published on"},
   { news:"This Xiaomi power bank looks like lipstick. Check price and other details",date:"Published on"},
   { news:"Man held for extortion calls to his uncle through a virtual number",date:"Published on"},
   { news:"CSC Olympiad 3.0: Classes 3-12 students can apply till October 15",date:"Published on"}

]
arrOfLatestNews.forEach(function(ele,i){
    const date = new Date();date.toLocaleString() ;  

let p1=document.createElement("p"),p2= document.createElement("p"),div=document.createElement("div");
p1.innerText=ele.news;
p1.style.textAlign="left";
p1.style.fontWeight="bold";
p1.style.cursor="pointer";
p2.innerText=ele.date+" "+date;
p2.style.color="grey";
p2.style.textAlign="left";
p2.style.fontSize="14px";
div.append(p1,p2);
div.style.padding="2px 4px 4px 8px";

div.style.boxShadow= 'rgba(0, 0, 0, 0.05) 0px 0px 0px 1px';
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
    { news:"Neetu Kapoor celebrates Ranbir Kapoor's 'milestone year' on birthday: 'Your father is orchestrating it from up there'",date:"Published on"},
    { news:"'It was a big deal. He was recently the No. 1 batter in the world': India youngster on dismissing Babar Azam at Asia Cup",date:"Published on"},
    { news:"Vijay Varma recalls he struggled to make ends meet: ‘I was basically just broke because there was no work’",date:"Published on"},
    { news:"On Ranbir Kapoor's birthday, here are some of his most romantic pics with Alia Bhatt. See here",date:"Published on"}

 ]

 arrOfLatestNews2.forEach(function(ele,i){
    const date = new Date();date.toLocaleString() ;  

let p1=document.createElement("p"),p2= document.createElement("p"),div=document.createElement("div");
p1.innerText=ele.news;
p1.style.textAlign="left";
p1.style.fontWeight="bold";
p1.style.cursor="pointer";
p2.innerText=ele.date+" "+date;
p2.style.color="grey";
p2.style.textAlign="left";
p2.style.fontSize="14px";
div.append(p1,p2);
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
}

});
//top news date---------------------------------------
function headDate(){
    let p = document.querySelector("#headline>p+p").innerText;
    const date = new Date();date.toLocaleString() ;  
    document.querySelector("#headline>p+p").innerText=p+" "+date;

}

headDate();

// TOP NEWS UNDER------------------------------

let arrOFunders=[
    { maintext:"Fixing visa blues in India, says US after Jaishankar flags concerns; unveils plan",subtext:"India News",pod:"Updated on",
    image:"https://images.hindustantimes.com/img/2022/09/28/150x84/838f97fe-3f2d-11ed-986f-37f88e2260c8_1664370435662.jpg"},
{ maintext:"Govt raises DA to 38% ahead of Diwali and assembly elections in HP, Gujarat",subtext:"India News",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/150x84/0ee42d1a-3f1a-11ed-986f-37f88e2260c8_1664362257069.jpg"},
{ maintext:"AAP MLA Amanatullah Khan gets bail in Delhi Waqf Board graft case",subtext:"India News",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/148x111/e63bccc8-3da3-11ed-bb6c-82755275d414_1664215322261_1664360181712_1664360181712.jpg"},
{ maintext:"Veteran Cong leader to meet Sonia Gandhi at 5 pm, help with Rajasthan crisis",subtext:"Delhi News",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/148x111/Capture_1664367696974_1664367703947_1664367703947.JPG"},
{ maintext:"India vs South Africa Live Score 1st T20I: SA rebuild dented as Markram falls",subtext:"Cricket",pod:"Updated on",
image:"https://images.hindustantimes.com/img/2022/09/28/148x111/India-South-Africa-Cricket-20_1664373374379_1664373374379_1664373385304_1664373385304.jpg"},



]

arrOFunders.forEach(function(el){
    const date = new Date();date.toLocaleString() ;
let div=document.createElement("div");
div.style.display="flex";
div.style.margin="0px 0px 5px 0px";
div.style.boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
div.style.padding="5px 5px 5px 5px";
let div1= document.createElement("div");
div.style.marginTop="5px";
let div2= document.createElement("div");
let p1= document.createElement("p");
p1.innerText=el.maintext;
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
document.querySelector("#top-news-under").append(div);
})

arrOFunders.forEach(function(el){
    const date = new Date();date.toLocaleString() ;
let div=document.createElement("div");
div.style.display="flex";
div.style.margin="0px 0px 5px 0px";
div.style.boxShadow=" rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px";
div.style.padding="5px 5px 5px 5px";
let div1= document.createElement("div");
div.style.marginTop="5px";
let div2= document.createElement("div");
let p1= document.createElement("p");
p1.innerText=el.maintext;
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
document.querySelector("#top-news-under-2").append(div);
})


// Footer

document.querySelector("#footer>div:nth-child(3)>form").addEventListener("submit",function(){
 
alert("Subscribed");
document.querySelector("#footer>div:nth-child(3)>form>input:nth-child(2)").value=null;
})


let r1=[ ["LATEST NEWS","Mumbai","Compatibility Calculator","Pet","Tennis","TRENDING NEWS"],
        ["WORLD NEWS","Noida","EDUCATION","WEB STORIES","Others","Navratri 2022"],
        ["INDIA NEWS","Patna","Admission News","TRENDING","BOOKS","Navratri 2022 Day 4"],
        ["CRICKET","Pune","Board Exams","BUSINESS","HT INSIGHT","Horoscope Today"],
        ["CITY NEWS","Ranchi","Competitive Exams","PHOTOS","HT WEEKEND","BPSC 67th Prelims Exam"],
        ["Bengaluru","Other Cities","Employment News","VIDEOS","BRAND POST","World Heart Day 2022"],
        ["Bhopal","ENTERTAINMENT","Exam Results"," BUDGET","BRAND STORIES","TRENDING TOPICS"],
        ["Chandigarh","Bollywood","Education News","ENVIRONMENT","ELECTIONS","Navratri"],
        ["Chennai","Hollywood","LIFESTYLE","SCIENCE","QUICKREADS","Durga Puja"],
        ["Dehradun","Music","Art and Culture"," OPINION","COVID 19","Dussehra"],
        ["Delhi","Tamil Cinema","Brunch","EDITORIALS","OMICRON","PFI"],
        ["Gurugram","Telugu Cinema","Fashion","CAR AND BIKE","ASSEMBLY ELECTION","IND vs SA"],
        ["Hyderabad","TV","Festivals","TECHNOLOGY","GAMES","Narendra Modi"],
        ["Indore","Web Stories","Health","SPORTS","Daily Sudoku","Congress"],
        ["Jaipur","Entertainment Others","Recipes","Badminton","Daily Crossword","Weather Today"],
        ["Kolkata","ASTROLOGY","Relationship","Football","Daily Word Jumble","Today Horoscope"],
        ["Lucknow","Horoscope","Travel","Hockey","QUIZ"],
       
]
for(let i=0;i<r1.length;i++){
for(let j=0;j<r1[i].length;j++)
{
let div=document.createElement("div");
div.innerText=r1[i][j];


if(r1[i][j]=="LATEST NEWS"||r1[i][j]=="TRENDING NEWS"||r1[i][j]=="World NEWS"||r1[i][j]=="EDUCATION"||r1[i][j]=="INDIA NEWS"||

r1[i][j]=="WEB STORIES"||r1[i][j]=="TRENDING" || r1[i][j]=="BOOKS" ||r1[i][j]=="CRICKET"||r1[i][j]=="BUSINESS"||r1[i][j]=="HT INSIGHT"||r1[i][j]=="INDIA NEWS"||

r1[i][j]=="CITY NEWS"||r1[i][j]=="PHOTOS" || r1[i][j]=="HT WEEKEND" ||r1[i][j]=="ENTERTAINMENT"||r1[i][j]=="BUDGET" || r1[i][j]=="BRAND STORIES" ||r1[i][j]=="TRENDING TOPICS"||r1[i][j]=="ENVIRONMENT"||r1[i][j]=="ELECTIONS"||r1[i][j]=="LIFESTYLE"||

r1[i][j]=="SCIENCE"||r1[i][j]=="QUICKREADS" || r1[i][j]=="OPINION" ||r1[i][j]=="COVID 19"||r1[i][j]=="EDITORIALS" || r1[i][j]=="OMICRON" ||  r1[i][j]=="CAR AND BIKE" ||r1[i][j]=="ASSEMBLY ELECTION"||r1[i][j]=="TECHNOLOGY" || r1[i][j]=="GAMES" ||  r1[i][j]=="SPORTS" || r1[i][j]=="ASTROLOGY" || r1[i][j]=="QUIZ")

{
    div.style.color="#ffffff";
    div.style.fontWeight="bold";
   
}
else{
    div.style.color="grey";
    div.addEventListener("mouseover", function(){
        div.style.color="#ffffff";
    });
    div.addEventListener("mouseleave",function(){
        div.style.color="grey";
    })
}
document.querySelector("#up4").append(div);
}
}

let footer2=[
    ["About Us","Contact Us","Terms Of Use","Privacy Policy","Weather Today","HT Newsletters"],
    ["Subscription","Disclaimer","Print Ad Rates","Code Of Ethics","Site Map","RSS Feeds"]]
   

for(let i=0;i<footer2.length;i++)
{
for(let j=0;j<footer2[i].length;j++)
{
let div = document.createElement("div");
div.innerText=footer2[i][j];
div.style.color="#ffffff";
div.style.fontWeight="bold";
document.querySelector("#footerlower>div").append(div);

}

}


let footer2img=[
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-logo.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HH-logo.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/mint-lounge.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/HT_Auto.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tech.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-bangla.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/healthshots.png"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/OTT-icon.png"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/slurrp-icon.svg"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/smartcast-logo.png"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-kannada.png"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-tamil.png"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-telugu.png"},
       {src:"https://images.hindustantimes.com/images/app-images/2022/1/footer-icons/ht-marathi.png"}
]


footer2img.forEach(function(el){
    let div1 = document.createElement("div");
 let image = document.createElement("img");
 image.src=el.src;
 image.style.width="auto";
 image.style.height="20px"
div1.append(image);
document.querySelector('#img').append(div1);

})






