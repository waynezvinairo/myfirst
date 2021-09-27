//const nav = document.querySelector('.nav');
//
// navtoggle.onclick = function(){
// 	nav.classList.toggle('.active');
//}


const first =document.querySelector('.first');
const firstSlideIn = document.querySelector('.slideIn');

firstSlideIn.onload = function(){
	first.classList.slideIn('.active');
}