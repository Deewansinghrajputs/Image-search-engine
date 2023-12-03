const accessKey = "Dyh_lxa6jud9YDxod-P4napvQurKe-69AREiEvhrehs";

const formEl = document.querySelector("form")
const inputEl = document.getElementById("search-input")
const searchResults = document.querySelector(".search-results")
const showMore = document.getElementById("show-more-button")
const sbtbtn=document.querySelector('#search-button');
const h5=document.querySelector('h5');
const card=document.querySelector('#card');


let inputData = ""
let page = 1;

async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`
    
    const response = await fetch(url)
    const data = await response.json()

    const results = await data.results;
    // console.log(results[0].urls.full);
    sbtbtn.setAttribute("src",results[0].urls.full)



    
    if (page === 1){
        searchResults.innerHTML = ""
    }
    results.map((result)=>{
    const imageWrapper = document.createElement("div")
    imageWrapper.classList.add("search-result")
    const image = document.createElement('img')
    // console.log(result.urls.full)
    image.setAttribute('load',`${result.urls.full}`)
    console.log(image)
    image.src = `${result.urls.full}`
    image.alt = result.alt_description
    const imageLink = document.createElement('a')
    imageLink.href = result.links.html
    imageLink.target = "_blank"
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);
    // imageWrapper.appendChild(imageWrapper);
    document.querySelector('.search-results').appendChild(imageWrapper)
    });

    page++
    if(page>1){
        showMore.style.display = "block"

    }

    
}

formEl.addEventListener("submit",(event)=>{
    event.preventDefault()
    page = 1;
    searchImages()
})
showMore.addEventListener("click",()=>{
    searchImages()
})

// img.setAttribute("src",results[0].links.html)