
  // getElementById - busca un elemento por su id
  const menu = document.getElementById('menu')
  const nav = document.querySelector('.nav')
  // const btnOpen = document.getElementById('btnOpen')
  // const btnClose = document.getElementById('btnClose')

  // function openMenu () {
  //   menu.classList.add('show-menu')
  // }

  // function closeMenu () {
  //   menu.classList.remove('show-menu')
  // }

// const pokemon = document.getElementById('pokemon');


// pokemon.onclick = function(){
//     alert('Atrapaste un pokemon');
//   }

  // esta bien
  // btnOpen.onclick = openMenu
  // btnClose.onclick = closeMenu

  //const box = document.querySelector('.box');

  //box.className = 'caja';

  // querySelector 

//  const h1 = document.querySelector('h1');

//  h1.innerText = 'hola mundo';



//hay tres formas de ejecutar un handler de eventos
// 1. atributo de evento en HTML >> osea directamente en el html onclick
// 2. propiedades de eventos

// se recomeintda el querySelector[All] para seleccionar elementos

//  const btnPokemon = document.querySelector()

// 3. addEventListener  


// btnOpen.addEventListener('click',openMenu)
// btnClose.addEventListener('click',closeMenu)

// delegar eventos con if
const links = nav.querySelectorAll('.menu__link')

nav.addEventListener('click',function (event){ // handler es una funcion anonima

 if(event.target.closest('#btnOpen')){
  menu.classList.add('show-menu')
 }

 if(event.target.closest('#btnClose')){
  menu.classList.remove('show-menu')
 }


 if (event.target.matches('.menu__link')){
  menu.classList.remove('show-menu')

  for (const link of links){
    link.classList.remove('active')
  }

  event.target.classList.add('active')
 }
 
})

const body = document.body
const ls = window.localStorage
const btnTheme = document.getElementById('btnTheme')


const theme = ls.getItem('darkMode');
const sun = 'bx bxs-sun'
const moon = 'bx bxs-moon'

if(theme) {
  body.classList.add('dark')
  btnTheme.firstElementChild.className = sun
} else {
  body.classList.remove('dark')
  btnTheme.firstElementChild.className = moon
}

btnTheme.addEventListener('click',function(){

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    ls.setItem('darkMode', true)
    btnTheme.firstElementChild.className = sun
  } else {
    ls.removeItem('darkMode')
    btnTheme.firstElementChild.className = moon
  }



})

//   typing

var typed = new Typed('#typing', {
  strings: ['<i>Frontend </i> Developer', 'Web Developer', 'Fullstack Developer'],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 25,
  loop: true,
  loopCount: Infinity,
});

