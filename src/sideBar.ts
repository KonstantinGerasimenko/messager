const sideBar = document.querySelector(".sideBar");
const chat = document.querySelector("section");
const menuBtn = document.querySelector("#menuBtn");
function menuBtnFunc() {
  sideBar?.classList.toggle("show");
  chat?.classList.toggle("reduce");
}
menuBtn?.addEventListener('click',menuBtnFunc)
window.addEventListener("resize", () => {
  if (window.innerWidth <= 740) {
    sideBar?.classList.remove("show");
    chat?.classList.remove("reduce");
  }
});

export default chat;
