let size = 16;
let board = document.getElementsByClassName("board")[0];
let colour = "black";
let drawing = false;
let grid = false;

let gridButton = document.getElementById("grid");
gridButton.addEventListener("click",function()
{
    grid=!grid;
    grid?gridButton.textContent="Grid On":gridButton.textContent="Grid Off";
    for(let i =0;i<size**2;i++)
    {
        grid?
            document.getElementsByClassName("pixel")[i].style.outline="solid black":
            document.getElementsByClassName("pixel")[i].style.outline="rgba(0,0,0,0)";
    }
})



document.getElementById("16").addEventListener("click",function(){changeSize(16)});
document.getElementById("32").addEventListener("click",function(){changeSize(32)});
document.getElementById("64").addEventListener("click",function(){changeSize(64)});
document.getElementById("128").addEventListener("click",function(){changeSize(128)});
document.getElementById("256").addEventListener("click",function(){changeSize(256)});

document.getElementById("eraser").addEventListener("click",function(){colour="rgba(0,0,0,0)"});
document.getElementById("colorBlack").addEventListener("click",function(){colour="black"});
document.getElementById("colorWhite").addEventListener("click",function(){colour="white"});
document.getElementById("color1").addEventListener("click",function(){colour="#61764B"});
document.getElementById("color2").addEventListener("click",function(){colour="#9BA17B"});
document.getElementById("color3").addEventListener("click",function(){colour="#CFB997"});
document.getElementById("color4").addEventListener("click",function(){colour="#FAD6A5"});
document.getElementById("color5").addEventListener("click",function(){colour="#EB5353"});
document.getElementById("color6").addEventListener("click",function(){colour="#F9D923"});
document.getElementById("color7").addEventListener("click",function(){colour="#36AE7C"});
document.getElementById("color8").addEventListener("click",function(){colour="#187498"});

updateCanvas();

function updateCanvas()
{
    board.innerHTML="";
    for(let i =0;i<size**2;i++)
    {
        let pixel = document.createElement("div");
        pixel.className="pixel";
        pixel.style.width=(512/size+"px");
        pixel.style.height=(512/size+"px");
        pixel.addEventListener("mouseenter",function()
            {
                if(drawing)
                pixel.style.backgroundColor=colour;
            })  
        pixel.addEventListener("click",function(){pixel.style.backgroundColor=colour;})
        pixel.addEventListener("mousedown",()=>{drawing=true})
        pixel.addEventListener("mouseup",()=>{drawing=false})
        board.append(pixel);
    }
}

function changeSize(Size){size=Size, updateCanvas()};