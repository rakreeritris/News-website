/*9eee53240dc049bea30bf1cf028c31d0*/
let accordionNews = document.getElementById('accordionNews');
let news='';
let apikey='9eee53240dc049bea30bf1cf028c31d0';
let xhr=new XMLHttpRequest();



xhr.open("GET", "https://bing-news-search1.p.rapidapi.com/news?safeSearch=Off&textFormat=Raw");
xhr.onload=function()
{ let i=0;
 let json=JSON.parse(this.responseText);
 let headlines=json.value;
 console.log(headlines);
 for(item of headlines)
 {
   news=news+`<div class="card">
   <div class="card-header" id="heading${i}">
     <h2 class="mb-0">
       <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${i}" aria-expanded="true" aria-controls="collapse${i}">
         ${item.name}
       </button>
     </h2>
   </div>
   
   <div id="collapse${i}" class="collapse" aria-labelledby="heading${i}" data-parent="#accordionNews">
     <div class="card-body">
      ${item.description}<br>
      for more details visit <h3><a href=${item.url}>Link to complete News</a></h3>
     </div>
     <div>
     <img src=${item.image.thumbnail.contentUrl} alt="" width=400px height=350px>
     </div>
   </div> `
   i++;
 }
 document.getElementById('accordionNews').innerHTML=news
}
xhr.setRequestHeader("x-bingapis-sdk", "true");
xhr.setRequestHeader("x-rapidapi-key", "147d0ad1aamshc1fb43c95060d9dp186124jsna09389dfa7a4");
xhr.setRequestHeader("x-rapidapi-host", "bing-news-search1.p.rapidapi.com");
xhr.send()