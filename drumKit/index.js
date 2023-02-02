// document.getElementsByClassName("graph").addEventListener("mouseover",function(){
//     document.getElementsByClassName("graph").classList.add("hover");
// })
let w = 0;
let a = 0;
let s = 0;
let d = 0;
let j = 0;
let k = 0;
let l = 0;
// let number = 0;

document.querySelector(".graph").addEventListener("mouseover", (e)=>{
    document.querySelector(".graph").classList.add("hover")
})
document.querySelector(".graph").addEventListener("mouseout", (e)=>{
    document.querySelector(".graph").classList.remove("hover")
})


for(var i=0;i<document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        // console.log(this);
        // console.log(buttonInnerHTML);
        makeSound(buttonInnerHTML);
        
        if(buttonInnerHTML==="w") w++;
        if(buttonInnerHTML==="a") a++;
        if(buttonInnerHTML==="s") s++;
        if(buttonInnerHTML==="d") d++;
        if(buttonInnerHTML==="j") j++;
        if(buttonInnerHTML==="k") k++;
        if(buttonInnerHTML==="l") l++;
        // document.querySelector("#w").innerHTML="w";
        console.log(w);
        buttonAnimation(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function(event){
    // console.log(event);
 makeSound(event.key);
 if(event.key==="w") w++;
 if(event.key==="a") a++;
 if(event.key==="s") s++;
 if(event.key==="d") d++;
 if(event.key==="j") j++;
 if(event.key==="k") k++;
 if(event.key==="l") l++;
 
 buttonAnimation(event.key);
})

function makeSound(key)
{
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default: console.log(key);
            break;
    }
}

function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");
     setTimeout(() => {
        document.querySelector("."+key).classList.remove("pressed")
     }, 100);
}


document.querySelector(".graph").addEventListener("click", async function(e){
const data={
        w:w,
        a:a,
        s:s,
        d:d,
        j:j,
        k:k,
        l:l
    };
    
    const response = await fetch("/senddata", {
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)

    });
    
})
