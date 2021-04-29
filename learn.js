const navSlide=()=>{
    const burgermenu = document.querySelector('.burgermenu');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click',() => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();