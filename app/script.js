const menu= document.querySelector(".menuBars");
const mobileMenu= document.querySelector(".mobile");
const mobileLinks= document.querySelectorAll(".mobileLink");

menu.addEventListener("click", ()=>{
  mobileMenu.classList.contains("menu-closed")?mobileMenu.classList.replace("menu-closed" ,"menu-open"):mobileMenu.classList.replace("menu-open", "menu-closed");
  menu.classList.contains("hamburger-closed")?menu.classList.replace("hamburger-closed" ,"hamburger-open"):menu.classList.replace("hamburger-open", "hamburger-closed");
});
mobileLinks.forEach((mobileLink) =>{
  mobileLink.addEventListener("click", ()=>{
    mobileMenu.classList.contains("menu-closed")?mobileMenu.classList.replace("menu-closed" ,"menu-open"):mobileMenu.classList.replace("menu-open", "menu-closed");
    menu.classList.contains("hamburger-closed")?menu.classList.replace("hamburger-closed" ,"hamburger-open"):menu.classList.replace("hamburger-open", "hamburger-closed");
  });
});