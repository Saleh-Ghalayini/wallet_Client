const dropdown = document.querySelectorAll(".drop");

function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}

function toggleBalance() {
    const balance = document.getElementById('balance');
    const eyeIcon = document.getElementById('eye-icon');
    if (balance.style.filter === 'blur(10px)') {
        balance.style.filter = 'none';
        eyeIcon.classList.remove('bx-low-vision');
        eyeIcon.classList.add('bx-show');
    } else {
        balance.style.filter = 'blur(10px)';
        eyeIcon.classList.remove('bx-show');
        eyeIcon.classList.add('bx-low-vision');
    }
}

function toggleDropdown(event) {
    const currencyList = document.getElementById('currency-list');
    const arrow = document.querySelector('.arrow-icon');
    currencyList.style.display = currencyList.style.display === 'block' ? 'none' : 'block';

    // Toggling the rotation class to make the arrow rotate onclick
    arrow.classList.toggle('rotate');
}

function changeCurrency(currency) {
    const currencyText = document.getElementById('currency');
    const balance = document.getElementById('balance');
    currencyText.textContent = currency;
    balance.textContent = balance.textContent.split(' ')[0] + ' ' + currency;
    document.getElementById('currency-list').style.display = 'none';
}


dropdown.forEach(item => {
    item.addEventListener("click", () => {
        toggleDropdown();
    });
});
