const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting)
            entry.target.classList.add('slide');
        else 
            entry.target.classList.remove('slide');
    });
});

const elements = document.getElementsByClassName('category-item');
Array.from(elements).forEach(element => {
    observer.observe(element);
});