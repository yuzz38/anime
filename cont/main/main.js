window.addEventListener('load', function() {
    const btnMob = document.querySelector('.btn-mob');
    const btnClose = document.querySelector('.close');
    const headerItem = document.querySelector('.header-buttons');
    btnMob.addEventListener('click', function(){
        headerItem.classList.add('header-buttons--active');
        btnClose.classList.add('close-active');
        btnMob.classList.add('close123');
    });
    btnClose.addEventListener('click', function(){
        headerItem.classList.remove('header-buttons--active');
        btnClose.classList.remove('close-active');
        btnMob.classList.remove('close123');
    });
});