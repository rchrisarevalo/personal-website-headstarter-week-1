const toggleNav = () => {
    const menu = document.getElementById("nav-menu")
    const closeBtn = document.getElementById("mobile-nav-menu-close")
    const openBtn = document.getElementById("mobile-nav-menu-open")

    openBtn.addEventListener('click', () => {
        menu.style.right = '0%'
        menu.style.transition = '.5s'
        document.body.style.overflow = 'hidden'

        closeBtn.style.right = '0%'
        closeBtn.style.transition = '.5s'
    })

    closeBtn.addEventListener('click', () => {
        menu.style.right = '-100%'
        menu.style.transition = '.5s'
        document.body.style.overflow = 'auto'

        closeBtn.style.right = '-100%'
        closeBtn.style.transition = '.5s'
    })


    // if (action === "open") {
    //     menu.style.right = '0%'
    //     menu.style.transition = '.5s'
    //     document.body.style.overflow = 'hidden'

    //     closeBtn.style.right = '0%'
    //     closeBtn.style.transition = '.5s'
    // } else {
    //     menu.style.right = '-100%'
    //     menu.style.transition = '.5s'
    //     document.body.style.overflow = 'auto'

    //     closeBtn.style.right = '-100%'
    //     closeBtn.style.transition = '.5s'
    // }
}