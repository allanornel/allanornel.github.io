
function scrollToElement(id) {
    const element = document.getElementById(id);
    if (element) {
        const offset = 100;
        window.scrollTo({
            top: element.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}