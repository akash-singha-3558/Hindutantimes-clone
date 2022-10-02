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
    
    
    