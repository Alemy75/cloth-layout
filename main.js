import './style.scss'

let navPopup = document.getElementById('nav-popup')
let navBtn = document.getElementById('nav-btn')
let navClose = document.getElementById('nav-close')

let loginPopup = document.getElementById('login-popup')
let loginBtn = document.getElementById('login-btn')
let loginClose = document.getElementById('login-close')

let searchPopup = document.getElementById('search-popup')
let searchBtn = document.getElementById('search-btn')
let searchClose = document.getElementById('search-close')

navBtn.addEventListener('click', () => {
    navPopup.classList.add('popup_active')
    searchPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
})

navClose.addEventListener('click', () => {
    navPopup.classList.remove('popup_active')
})

searchBtn.addEventListener('click', () => {
    searchPopup.classList.add('popup_active')
    navPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
})

searchClose.addEventListener('click', () => {
    searchPopup.classList.remove('popup_active')
})

loginBtn.addEventListener('click', () => {
    loginPopup.classList.add('popup_active')
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
})

loginClose.addEventListener('click', () => {
    loginPopup.classList.remove('popup_active')
})