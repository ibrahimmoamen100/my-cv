$(document).ready(function () {
    $('.nav-items li .links').click(function (e) {
        e.preventDefault();
        $('.nav-items li .links').css("background", "rgb(91, 173, 194)");
        $(this).css('background', 'coral')



        $('html , body').animate({
            scrollTop: $("#" + $(this).data('scroll')).offset().top
        }, 1000);

        console.log("#" + $(this).data('scroll'));

    });



});



console.log("hello")

var header = document.querySelector("header");
var humburgerMenu = document.getElementsByClassName("sketchy_end")[0];
var arrowMenu = document.getElementsByClassName("arrow-menu")[0];

humburgerMenu.addEventListener("click", function () {
    header.style.left = "-280px"
    humburgerMenu.style.left = "-45px"
    arrowMenu.style.left = "0px"
})
arrowMenu.addEventListener("click", function () {
    header.style.left = "0px"
    humburgerMenu.style.left = "5px"
    arrowMenu.style.left = "-45px"

})

arrowMenu.addEventListener("click", function () {
    header.style.background = "red"
})




var sectionSkills = document.getElementsByClassName('skills_section')[0]
var sectionProject = document.getElementsByClassName('project')[0]
const progress = document.getElementsByClassName('progras')


// console.log(arrowMenu.clientWidth)
// console.log(window.innerHeight)
// console.log(sectionProject.offsetTop)
// console.log(sectionSkills.offsetTop)
// console.log(window.pageYOffset)


// const showProject = document.getElementsByClassName('show_btn')
// showProject.forEach(btn => {
//     btn.addEventListener('click', () => {
//         window.scrollTo(400)

//     })

// });
// console.log(window.scrollTo(1400))


window.addEventListener('scroll', animationProgress)

function animationProgress() {

    // const scrolled = document.documentElement.scrollHeight - window.innerHeight
    const offsetHght = window.scrollY
    const pageY = window.pageYOffset
    const progress = document.getElementsByClassName('progras')

    // console.log(offsetHght)
    // var one = 1
    // console.log(pageY)
    if (pageY > 1464) {

        progress[0].style.animation = 'progess1 2s ease-in-out 1'
        progress[1].style.animation = 'progess2 2s ease-in-out 1'
        progress[2].style.animation = 'progess3 2s ease-in-out 1'
        progress[3].style.animation = 'progess4 2s ease-in-out 1'
        progress[0].style.width = '90%'
        progress[1].style.width = '70%'
        progress[2].style.width = '90%'
        progress[3].style.width = '60%'




    } else {

        progress[0].style.animation = 'progessEnd1 2s ease-in-out 1'
        progress[1].style.animation = 'progessEnd2 2s ease-in-out 1'
        progress[2].style.animation = 'progessEnd3 2s ease-in-out 1'
        progress[3].style.animation = 'progessEnd4 2s ease-in-out 1'
        for (var i = 0; i < progress.length; i++) {
            progress[i].style.width = '0'
        }
    }


}





// if (1400 < window.pageYOffset) {
//     for (var i = 0; i < progress.length; i++) {
//         const prog = progress[i]
//         prog.style.opacity = '1'
//         prog.style.animation = 'progess 1.5s ease-in-out';
//     }


// } else {
//     const prog = progress[i]
//     prog.style.opacity = '0'
//     prog.style.animation = 'ss 1.5s ease-in-out';
// }