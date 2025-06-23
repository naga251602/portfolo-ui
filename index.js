const menu_btn = document.querySelector('.menubtn');

menu_btn.addEventListener('click', function () {

    const nav_links = document.querySelector('.nav-links');

    if (nav_links.style.display === '') {
        nav_links.style.display = 'block';
    } else {
        nav_links.style.display = '';
    }
});