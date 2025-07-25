const accessKey="U6YvoGFLHdDDo5qB0twBWG6yyr46dZnmUFYNFZSMDvU";
const searchForm=document.getElementById("search-form");
const searchBox=document.getElementById("search-box");
const searchResult=document.getElementById("search-result");
const showMoreBtn=document.getElementById("show-more-btn");

let keyword="";
let page=1;

async function searchImages() {
  keyword=searchBox.value;
  const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
  
  const response=await fetch(url);
  const data=await response.json();


  // to clr the above result photos if the page is not refreshed and another key is entered
  if(page==1){
    searchResult.innerHTML="";
  }
  const results=data.results;

  // displaying images using below function
  results.map((result)=>{
    const image=document.createElement("img");
    image.src=result.urls.small;
    const imageLink=document.createElement("a");
    imageLink.href=result.links.html;
    imageLink.target="_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);

   })
   showMoreBtn.style.display="block";
}
searchForm.addEventListener("submit",(e)=>{
  e.preventDefault();
  page=1;
  searchImages();
}) 
  // to move page to next page
showMoreBtn.addEventListener("click",()=>{
  page++;
  searchImages();
})