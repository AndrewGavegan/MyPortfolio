
// pop out menu for phone screens //
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
   
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

// opens project in current tab and repository in new tab //
document.querySelector("#project1").addEventListener('click', function(){
    window.open("https://github.com/JemimaSiddiqui/Project_1_Group-B")
    location.href = ("https://jemimasiddiqui.github.io/Project_1_Group-B/")
});

// opens project in current tab and repository in new tab //
document.querySelector("#project2").addEventListener('click', function(){
    window.open("https://github.com/AndrewGavegan/Weather-Dashboard")
    location.href = ("https://andrewgavegan.github.io/Weather-Dashboard/")
});

// opens project in current tab and repository in new tab //
document.querySelector("#project3").addEventListener('click', function(){
    window.open("https://github.com/AndrewGavegan/Work-Diary")
    location.href = ("https://andrewgavegan.github.io/Work-Diary/")
});