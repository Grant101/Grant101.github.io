var link = document.querySelector(".login-link");
var popup = document.querySelector(".modal-login");
var close = popup.querySelector(".modal-close");
var mopen = document.querySelector(".modal-map-open");
var maps = document.querySelector(".modal-map");
var mclose = maps.querySelector(".modal-close-2");
var overlay = document.querySelector(".overlay");

link.addEventListener("click",function(event){
  event.preventDefault();
  overlay.style.display = "block";
  popup.style.display = "block";
});

close.addEventListener("click",function(event){
  event.preventDefault();
  overlay.style.display = "none";
  popup.style.display = "none";
  
});

mopen.addEventListener("click",function(event){
  event.preventDefault();
  overlay.style.display = "block";
  maps.style.display = "block";
});

mclose.addEventListener("click",function(event){
  event.preventDefault();
  overlay.style.display = "none";
  maps.style.display = "none";
  
});