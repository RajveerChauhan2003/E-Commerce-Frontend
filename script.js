const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navlinks')

bar.addEventListener('click',(e)=>{
    nav.classList.add('active')
})

close.addEventListener('click',(e)=>{
    nav.classList.remove('active')
})  

let bigimg = document.getElementById('MainImg')
let smallimg = document.getElementsByClassName('small-img')

smallimg[0].addEventListener('click',()=>{
    bigimg.src=smallimg[0].src;
})
smallimg[1].addEventListener('click',()=>{
    bigimg.src=smallimg[1].src;
})
smallimg[2].addEventListener('click',()=>{
    bigimg.src=smallimg[2].src;
})
smallimg[3].addEventListener('click',()=>{
    bigimg.src=smallimg[3].src;
})




