const url ="https://api.imgflip.com/get_memes";
fetch(url).then((res)=>res.json()).then((data)=> getMemes(data) )
.catch((error)=>console.log("errors",error));


// fetch(url)
// .then((res)=>res.json())
// .then((meme)=> generateMeme(meme))
// .catch((error)=>console.log(error))
function getMemes (meme) {
    
    let element=meme.data.memes;
    console.log(element);
    let list=`
   

    <div class="contnet">
    <h2>${element[1].name} <span>(${element[1].id})</span></h2>
    <img src=${element[1].url} alt=${element[1].name} />
    </div>
    <div class="w-h-wrap"> 
    <p>width ${element[1].width}</p>
    <p>height ${element[1].height}</p>
    </div>
    <div class="contnet">
    <h2>${element[3].name} <span>(${element[3].id})</span></h2>
    <img src=${element[3].url} alt=${element[3].name} />
    </div>
    <div class="w-h-wrap"> 
    <p>width ${element[3].width}</p>
    <p>height ${element[3].height}</p>
    </div>
    <div class="contnet">
    <h2>${element[0].name} <span>(${element[0].id})</span></h2>
    <img src=${element[0].url} alt=${element[0].name} />
    </div>
    <div class="w-h-wrap"> 
    <p>width ${element[0].width}</p>
    <p>height ${element[0].height}</p>
    </div>
    `;
    const wrap=document.querySelector(".inner-wrap");
    wrap.innerHTML=list;
   
    // for(let mem in m) {
    //     let list=`
    // <div class="contnet">
    // <h1>${m.name}</h1>
    // </div>
    // `;
    // const wrap=document.querySelector(".inner-wrap");
    // wrap.innerHTML=list;
    // }
}