function showAlert(message) {
    const alertBox = document.getElementById('customAlert');
    const alertMessage = document.getElementById('alertMessage');

    alertMessage.textContent = message;
    alertBox.style.display = 'block';
}

function closeAlert() {
    document.getElementById('customAlert').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
    const cartButtons = document.querySelectorAll('#cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            showAlert('Product added to cart!');
        });
    });

    const searchForm = document.querySelector('.search-bar form');
    if (searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault();
            showAlert("Search feature coming soon!");
        });
    }
});

