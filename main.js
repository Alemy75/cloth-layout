import './style.scss'

let navPopup = document.getElementById('nav-popup')
let navBtn = document.getElementById('nav-btn')
let navClose = document.getElementById('nav-close')

let loginPopup = document.getElementById('login-popup')
let loginBtn = document.getElementById('login-btn')
let login1Btn = document.getElementById('login-btn1')
let login2Btn = document.getElementById('login-btn2')
let loginClose = document.getElementById('login-close')

let authBtn = document.getElementById('auth-btn')
let authPopup = document.getElementById('auth-popup')
let authClose = document.getElementById('auth-close')
let authBack = document.getElementById('auth-back')

let clothBtn = document.getElementById('cloth-btn')
let clothPopup = document.getElementById('cloth-popup')
let clothBack = document.getElementById('cloth-back')

let searchPopup = document.getElementById('search-popup')
let searchBtn = document.getElementById('search-btn')
let searchClose = document.getElementById('search-close')

navBtn.addEventListener('click', () => {
    navPopup.classList.add('popup_active')
    searchPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})

navClose.addEventListener('click', () => {
    navPopup.classList.remove('popup_active')
})

searchBtn.addEventListener('click', () => {
    searchPopup.classList.add('popup_active')
    navPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})

searchClose.addEventListener('click', () => {
    searchPopup.classList.remove('popup_active')
})

loginBtn.addEventListener('click', () => {
    loginPopup.classList.add('popup_active')
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})

loginClose.addEventListener('click', () => {
    loginPopup.classList.remove('popup_active')
})

login1Btn.addEventListener('click', () => {
    loginPopup.classList.add('popup_active')
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})

login2Btn.addEventListener('click', () => {
    
    loginPopup.classList.add('popup_active')
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})


loginClose.addEventListener('click', () => {
    loginPopup.classList.remove('popup_active')
})

authBtn.addEventListener('click', () => {
    authPopup.classList.add('popup_active')
    loginPopup.classList.remove('popup_active')
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})

authClose.addEventListener('click', () => {
    authPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})


clothBack.addEventListener('click', () => {
    navPopup.classList.add('popup_active')
    searchPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})

clothBtn.addEventListener('click', () => {
    clothPopup.classList.add('popup_active')
    searchPopup.classList.remove('popup_active')
    loginPopup.classList.remove('popup_active')
    authPopup.classList.remove('popup_active')
    navPopup.classList.remove('popup_active')
})

authBack.addEventListener('click', () => {
    navPopup.classList.remove('popup_active')
    searchPopup.classList.remove('popup_active')
    loginPopup.classList.add('popup_active')
    authPopup.classList.remove('popup_active')
    clothPopup.classList.remove('popup_active')
})