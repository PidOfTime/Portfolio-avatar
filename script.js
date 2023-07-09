let banner = document.querySelector('.banner')
let darkBtn = document.querySelector('#dark')
let lightBtn = document.querySelector('#light')


// ======= Typed Effect=======

let typingText = new Typed('#text', {
    strings: ["Vxrcel", "Designer", "Pulse", "Gamer", "Wudan"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
})


let myTheme = localStorage.getItem('theme')

if (myTheme) {
    document.body.className = myTheme
}
lightBtn.onclick = () => {
    document.body.className = 'dark'
    localStorage.setItem('theme', 'dark')
}
darkBtn.onclick = () => {
    document.body.className = 'light'
    localStorage.setItem('theme', 'light')

}
// localStorage.clear()
