// ===== start make background of landing page change randomly   ======== //
let landingPage = document.querySelector('.landing-page')

let imgArray = ["00.jpg", "01.jpg", "02.jpg", "04.jpg"]

//defin random backgrounds variables
let backgroundOption = true

let backgroundInerval;

// /////// end make background of landing page change randomly   //////// 
// =========== start  toggle class to sitting box-icon  ========
document.querySelector('.setting-box .box-toggle').onclick = function () {

    document.querySelector('.setting-box .fa-cog').classList.toggle('fa-spin')

    // toggle class to  main sitting box
    document.querySelector('.setting-box').classList.toggle('opened')

}
// ///////////// end toggle class to sitting box-icon  /////////
// ========= start swich color ===================
const lisColor = document.querySelectorAll('.colors-list li')

lisColor.forEach(li => {

    li.addEventListener('click', (e) => {

        document.documentElement.style.setProperty('--main--color', e.target.dataset.color)

        // set color in local storage
        localStorage.setItem('option-color', e.target.dataset.color)

        //  remove active from all elements
        e.target.parentElement.querySelectorAll('.active').forEach((element) => {

            element.classList.remove('active')

        })

        e.target.classList.add('active')
    })
})
//  /////////   end swich color  /////////
// =========== add color to local strrage ==============
let mainColor = localStorage.getItem('option-color')

if (mainColor !== null) {

    document.documentElement.style.setProperty('--main--color', mainColor)

    document.querySelectorAll('.colors-list li').forEach((element) => {

        element.classList.remove('active')

        if (element.dataset.color == mainColor) {

            element.classList.add('active')

        }
    })
}
// ///////////  end add color to local strrage ///////////////
// ============= start random background =============
let backgroundLocalItem = localStorage.getItem('background-option')

if (backgroundLocalItem !== null) {

    if (backgroundLocalItem == 'true') {

        backgroundOption = true

    } else {

        backgroundOption = false

    }

    document.querySelectorAll('.random-backgrounds span').forEach(element => {

        element.classList.remove('active')

    })

    if (backgroundLocalItem === 'true') {

        document.querySelector('.random-backgrounds .yes').classList.add('active')

    } else {

        document.querySelector('.random-backgrounds .no').classList.add('active')

    }
}
// ///////////  end random backgound ///////////////

// ========= start remove and add active class to random backgrounds  ===========
const randomBackG = document.querySelectorAll('.random-backgrounds span')

randomBackG.forEach(li => {

    li.addEventListener('click', (e) => {
        //  remove active from all elements
        e.target.parentElement.querySelectorAll('.active').forEach((element) => {

            element.classList.remove('active')

        })
        e.target.classList.add('active')

        if (e.target.dataset.background === 'yes') {

            backgroundOption = true

            randomizeImgs()

            localStorage.setItem('background-option', true)

        } else {

            backgroundOption = false

            clearInterval(backgroundInerval)

            localStorage.setItem('background-option', false)

        }
    })

})
// ////////////// end remove and add active class to random backgrounds  //////////////
function randomizeImgs() {

    if (backgroundOption === true) {

        backgroundInerval = setInterval(() => {

            let randomNumber = Math.floor(Math.random() * imgArray.length)

            landingPage.style.backgroundImage = 'url(../images/' + imgArray[randomNumber] + ')'

        }, 5000)
    }
}
randomizeImgs()

//    animate the skills

let ourSkills = document.querySelector(".skills .container .skills-box")

let aboutUS = document.querySelector(".container .about-us .show-img ")

window.onscroll = function () {

    let SkillsOffsetTop = ourSkills.offsetTop

    let aboutOffsetTop = aboutUS.offsetTop

    // console.log(SkillsOffsetTop)
    // console.log(aboutOffsetTop)
    let skillsOffsetHeight = ourSkills.offsetHeight

    let aboutOffsetHeight = aboutUS.offsetHeight
    // console.log(skillsOffsetHeight)
    // console.log(aboutOffsetHeight)
    let windowHeight = this.innerHeight
    // console.log(windowHeight)
    let windowScrollTop = this.pageYOffset
    // console.log(windowScrollTop)
    if (windowScrollTop > (aboutOffsetTop + aboutOffsetHeight - windowHeight) && windowScrollTop <= (windowHeight)) {

        let aboutImg = document.querySelectorAll('.about-us .img-box-about')

        aboutImg.forEach(img => {

            img.style.opacity = '1'

        })
    }

    if (windowScrollTop > (SkillsOffsetTop + skillsOffsetHeight - windowHeight)) {

        let allSkilss = document.querySelectorAll('.skills .skills-box .progress-bar')

        allSkilss.forEach(skill => {

            skill.style.width = skill.dataset.progress

        })
    } else {
        let allSkilss = document.querySelectorAll('.skills .skills-box .progress-bar')

        allSkilss.forEach(skill => {

            skill.style.width = '0'

        })
    }
}

//srart popup to images
let ourGallery = document.querySelectorAll('.imgs-box-gallery img')

ourGallery.forEach(img => {

    img.addEventListener('click', (e) => {
        //creat overlay annd append it to body
        let overLay = document.createElement('div')

        overLay.className = "popup-overlay"

        document.body.appendChild(overLay)
        //creat img overlay box and append to body
        let popupBox = document.createElement('div')

        popupBox.className = 'popup-box'

        if (img.alt !== null) {
            let imgHeading = document.createElement('h3')

            let imgText = document.createTextNode(img.alt)

            imgHeading.appendChild(imgText)

            popupBox.appendChild(imgHeading)
        }
        //creat imgs to img box
        let popupImage = document.createElement('img')

        popupImage.src = img.src

        popupBox.appendChild(popupImage)

        document.body.appendChild(popupBox)
        //closing the popup
        let closeBtn = document.createElement('span')

        let closeBtnText = document.createTextNode('x')

        closeBtn.appendChild(closeBtnText)

        closeBtn.className = 'close-btn'

        popupBox.appendChild(closeBtn)

    })
})
//close the popup box

document.addEventListener('click', (e) => {

    if (e.target.className == 'close-btn') {

        e.target.parentNode.remove()

        document.querySelector('.popup-overlay').remove()
    }
})
//end popup to images
// start scrool to section with bullets
let allBullets = document.querySelectorAll('.nav-bullets .bullets')

allBullets.forEach(bullet => {

    bullet.addEventListener('click', (e) => {

        document.querySelector(e.target.dataset.section).scrollIntoView({

            behavior: 'smooth'
        })
    })
})
// end scrool to section with bullets
// start show and hide bullets
let bulletSpan = document.querySelectorAll('.show-bullets span')

let bulletContainer = document.querySelector('.nav-bullets')

let bulletLocalItem = localStorage.getItem('bullet-option')
// local storage to show and hide bullets


if (bulletLocalItem !== null) {

    bulletSpan.forEach(span => {

        span.classList.remove('active')
    })

    if (bulletLocalItem === 'block') {

        bulletContainer.style.display = 'block'

        document.querySelector('.show-bullets .yes').classList.add('active')

    } else {

        bulletContainer.style.display = 'none'

        document.querySelector('.show-bullets .no').classList.add('active')

    }
}


bulletSpan.forEach(span => {

    span.addEventListener('click', (e) => {

        if (span.dataset.display == 'show') {

            bulletContainer.style.display = 'block'

            localStorage.setItem('bullet-option', "block")

        } else {

            bulletContainer.style.display = 'none'

            localStorage.setItem('bullet-option', "none")
        }
        // add and remove class active 
        e.target.parentElement.querySelectorAll('.active').forEach((element) => {

            element.classList.remove('active')
        })
        e.target.classList.add('active')
    })
})
// end show and hide bullets
// start reset all options
document.querySelector('.reset-options').onclick = function () {

    // remove items from local Storage
    localStorage.removeItem('option-color')

    localStorage.removeItem('background-option')

    localStorage.removeItem('bullet-option')


    window.location.reload()
}
// end reset all options  
// start toggle menue
let links = document.querySelector('.header-side .header-links')

let btnToggle = document.querySelector('.links-container .btn')

btnToggle.onclick = function (e) {

    e.stopPropagation()

    this.classList.toggle('menu-active')

    links.classList.toggle('open')
}

document.addEventListener('click', (e) => {

    if (e.targrt !== btnToggle && e.target !== links) {

        if (links.classList.contains('open')) {

            btnToggle.classList.toggle('menu-active')

            links.classList.toggle('open')
        }
    }
})

links.onclick =  (e) => {
    e.stopPropagation()
}
// start toggle menue


