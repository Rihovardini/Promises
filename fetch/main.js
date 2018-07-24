
//parsing data using fetch

fetch('https://jsonplaceholder.typicode.com/photos')  
    .then((response)=>{
        return response.json();
        })
         .then((json)=>{
            createPhotoBlocks(json.slice(0,10));
});


function createPhotoBlocks(data){
    
    let photos=document.getElementById('photos');
    for(let i=0;i<data.length;i++){
        let count=0;
            div=document.createElement('div');
            div.setAttribute('id', "hella"+ (i+1));
            photos.appendChild(div);
        let h4=document.createElement('h4');
            h4.innerHTML=data[i].title;
        let img=document.createElement('img');
            img.setAttribute("src",data[i].thumbnailUrl);
            div.appendChild(h4);
            div.appendChild(img);
            div.style="width:33%;display:inline-block";
            h4.addEventListener('click',()=>{
            h4.innerHTML=`Click ${++count}`
            });
    }

}

