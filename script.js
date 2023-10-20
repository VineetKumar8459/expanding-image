var galleryItems = document.querySelectorAll('.gallary');
galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        galleryItems.forEach(e=>{
            e.classList.remove('main');
        });

        item.classList.add('main');
    });
});