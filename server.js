// Show This PC
const serc1 = document.getElementById('serc')
const wrapper1 = document.getElementById('wrapper')
const wimgclose1 = document.getElementById('wimgclose')
const thispc1 = document.getElementById('span-thispc')
const reloaad1 = document.getElementById('reload')
const wrappercf1 = document.getElementById('wrappercf')

serc1.addEventListener("click", (osd) => {
    wrapper1.style.display = "block"
})
thispc1.addEventListener("click", (osd) => {
    wrapper1.style.display = "block"
})
// Hide This PC
wimgclose1.addEventListener("click", (osd) => {
    wrapper1.style.display = "none"
})

// more1
// refresh btn
// is done in html file
// end refresh btn
// Right Click in Screen
window.addEventListener("contextmenu",function(event){
    //console.log(event.offsetX,event.offsetY);
    event.preventDefault();
    var contextMenu = document.getElementById("context-menu");
    contextMenu.style.top = event.offsetY+"px";
    contextMenu.style.left = event.offsetX+"px";
    contextMenu.classList.add("active");
  });
  window.addEventListener("click",function(){
    var contextMenu = document.getElementById("context-menu");
    contextMenu.classList.remove("active");
  });

// End Right Click in Screen
// more2
// settings
const settings1 = document.getElementById('settings')
const wrappersetting1 = document.getElementById('wrappersetting')
const imgclosesetting1 = document.getElementById('imgclosesetting')
const body1 = document.getElementById('body')
const wallpaperdefualt41 = document.getElementById('wallpaperdefualt')
const wallpapertow1 = document.getElementById("wallpapertow")
const wallpaperthree1 = document.getElementById('wallpaperthree')

settings1.addEventListener("click", (ysv) => {
  wrappersetting1.style.display = "block"
})
imgclosesetting1.addEventListener("click", (sgb) => {
  wrappersetting1.style.display = "none"
})

wallpaperdefualt41.addEventListener("click", (dog) => {
  body1.style.backgroundImage = "url(Wallpaper/windows-11-windows-10-minimalism-hd-wallpaper-preview.jpg)"
})

wallpapertow1.addEventListener("click", (dog) => {
  body1.style.backgroundImage = "url(./Wallpaper/windows-11-windows-11-se-microsoft-minimalism-operating-system-hd-wallpaper-preview1.jpg)"
})
wallpaperthree1.addEventListener("click", (dog) => {
  body1.style.backgroundImage = "url(./Wallpaper/windows-11-windows-11-se-microsoft-minimalism-operating-system-hd-wallpaper-preview2.jpg)"
})
// End Settings