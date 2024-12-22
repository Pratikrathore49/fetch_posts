 let boxContainer=document.getElementById("box");
 let btn = document.getElementById("btn");
// let todo1=[];
// console.log(btn)

let myPosts=[];

async function fetchPost() {
  let ApiData = await fetch("https://dummyjson.com/posts")
  let data= await ApiData.json()
    myPosts=data.posts // whole posts object from fetch Api
    console.log(myPosts[0].id)
}
fetchPost();
   setTimeout(()=>{
     getRendomPost()
   },1000);
   

     

function getRendomPost(){
     const randomIndex = Math.floor(Math.random() * myPosts.length);
      // const randomIndex=2;
      let html= ` <div id="postCounOrTitle" class="flex justify-center items-center  text-white font-serif  flex-col mt-[20px] text-xl">
      <h1 > ${myPosts[randomIndex].id}</h1>
      <p id="titel "class="mt-[10px] "><strong><q>${myPosts[randomIndex].title}</q></strong></p>
    </div>

       <!-- ---------------------- Start Post Content-------------------------- -->

    <div id="content" class="flex justify-center  text-white w-600 text-left min-h-[120px]  mt-[35px]">
      <p id="postBody"> "${myPosts[randomIndex].body}"</p>
    </div>
    <hr class="mt-[40px]">


    <!-- ----------------------  start adjust views ,like and tags-------------------------- -->

    <div id="tag_or_like" class="flex gap-12 text-center  mt-[15px] min-h-12 ">

      <div class="flex  ml-[50px] gap-2 text-[#fff6ed]">
        <p id="views"> ${myPosts[randomIndex].views} Views |</p>
        <p id="reactions">
        <p id="reactions"> <i class="fa-solid fa-thumbs-up right"></i> ${myPosts[randomIndex].reactions.likes} |  ${myPosts[randomIndex].reactions.dislikes} <i
            class="fa-solid fa-thumbs-down fa-flip-horizontal"></i></p>
      </div>

      <p id=" tags" class="ml-[50px]   text-[#f4ea28]">#${myPosts[randomIndex].tags[0]} #${myPosts[randomIndex].tags[1]} #${myPosts[randomIndex].tags[2]} </p>

    </div>`
    boxContainer.innerHTML = html;


}



btn.addEventListener("click",getRendomPost);