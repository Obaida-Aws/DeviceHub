
const buyButtons = document.querySelectorAll('.buy-btn');


buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Purchase successful! Congratulations!');
    });
});
