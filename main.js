const tir = document.getElementById("tir");
const frst = document.getElementById("w");
const secnd = document.getElementById("g");
const tri = document.getElementById("p");
const btn2 = document.querySelector(".btn2");
const bunner = document.querySelector(".bunner");
const join = document.querySelector(".join");
const best = document.querySelector(".best");
const home = document.querySelector(".h");
const best2 = document.querySelector(".b");
const join2 = document.querySelector(".j");
const dog = document.getElementById("dog");
const sound = new Audio('/audios/so-hapy.mp3');
dog.addEventListener("click", ()=>{
  sound.play();
  alert("Thank you for help !");
;})

btn2.addEventListener("click", () => {
  window.location.href =
    "https://go.mo.co/invite/be6f81a9-7246-4884-942b-d6a2e8ccbdbf";
});
tir.src = "/photo/tier-list1.png";
frst.addEventListener("click", () => {
  tir.src = "/photo/tier-list1.png";
  tir.style.transition = "all 1400ms ease";
});
secnd.addEventListener("click", () => {
  tir.src = "/photo/tier-list2.png";
  tir.style.transition = "all 1400ms ease";
});
tri.addEventListener("click", () => {
  tir.src = "/photo/tier-list3.png";
  tir.style.transition = "all 1400ms ease";
});

const weapons = document.querySelectorAll(".weapon");
const blocks = document.querySelectorAll(".table-block");
let dragetImageId = null;

weapons.forEach((weapon) => {
  weapon.addEventListener("dragstart", (e) => {
    dragetImageId = e.target.id;
  });
});

blocks.forEach(block =>{
    block.addEventListener("dragover",(e) =>{
        e.preventDefault();
    })
    block.addEventListener("drop", (e)=>{
         e.preventDefault();
         const image = document.getElementById(dragetImageId)
         console.log(image);
         if(image){
            const newImage = image.cloneNode(true);
            newImage.setAttribute("draggable", false);
            block.innerHTML = "";
            block.appendChild(newImage);
         }
    })
})