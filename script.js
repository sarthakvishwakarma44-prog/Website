function filterList() {
    const searchInput = document.getElementById('searchbar').value.toLowerCase();
    const listItems = document.getElementsByClassName('item');
    for (let i = 0; i < listItems.length; i++) {
        const itemText = listItems[i].textContent.toLowerCase();
        if (itemText.includes(searchInput)) {
            listItems[i].style.display = '';
        } else {
            listItems[i].style.display = 'none';
        }
    }
}
document.addEventListener("mousemove", (event) => {
    const pupils = document.querySelectorAll(".pupil");
            
    pupils.forEach((pupil) => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const radian = Math.atan2(event.clientX - eyeX, event.clientY - eyeY);
        const maxDistance = 6;
        const pupilX = Math.sin(radian) * maxDistance;
        const pupilY = Math.cos(radian) * maxDistance;
        pupil.style.transform = `translate(calc(-10% + ${pupilX}px), calc(-10% + ${pupilY}px))`;
    });
});
