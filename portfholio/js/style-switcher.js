/*==============================Toggle style switcher========================= */

const styleSwithcerToggle = document.querySelector(".style-switcher-toggler");
styleSwithcerToggle.addEventListener("click",() =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// hide style--switcher on scroll

window.addEventListener("scroll",()=>{
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*==============================Theme colors========================= */
const alternateStyles=document.querySelectorAll(".alternate-style");
function setActiveStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color===style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}

/*==============================Theme light and mode========================= */
const daynight=document.querySelector(".day-night");
daynight.addEventListener("click", () =>{
    daynight.querySelector("i").classList.toggle("bi-sun")
    daynight.querySelector("i").classList.toggle("bi-moon")
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () =>{
    if(document.body.classList.contains("dark"))
    {
        daynight.querySelector("i").classList.add("bi-sun")
    }
    else{
        daynight.querySelector("i").classList.add("bi-moon")
    }
})