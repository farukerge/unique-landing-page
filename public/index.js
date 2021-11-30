const mobileMenu = document.querySelector('#menu');
const burgerBars = document.querySelector('#burger');

burgerBars.addEventListener('click', () => {
    if (mobileMenu.classList.contains('hidden') && window.innerWidth < 468) {
        mobileMenu.classList.remove('hidden')
        mobileMenu.classList.add(
            'flex',
            'flex-col',
            'text-left',
            'bg-white',
            'w-full',
            'absolute',
            'top-0',
            'right-0',
            'p-3',
            'h-screen',
            'pt-32',
            'bg-black' ,
        )
    } else {
        mobileMenu.classList.add('hidden')
    }
});


mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hidden')
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.classList.add('hidden');
        mobileMenu.classList.remove(
            'flex',
            'flex-col',
            'text-left',
            'bg-white',
            'w-full',
            'absolute',
            'top-0',
            'right-0',
            'p-3',
            'h-screen',
            'pt-32',
            'bg-black',
        )
    }
})

