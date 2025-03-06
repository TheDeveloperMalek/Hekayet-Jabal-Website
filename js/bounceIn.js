window.onload = function()
{
    const elements = document.getElementsByClassName('category-item');
Array.from(elements).forEach(element => {
    element.classList.add('bounceInOnload');
});
}