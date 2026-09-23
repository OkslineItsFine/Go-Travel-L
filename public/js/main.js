/**
 * Go Travel - Frontend Interactivity
 */
document.addEventListener('DOMContentLoaded', function () {
    // 1. Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');

    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function () {
            navMenu.classList.toggle('show');
            const icon = mobileToggle.querySelector('i');
            if (icon) {
                if (navMenu.classList.contains('show')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-xmark');
                } else {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            }
        });
    }

    // 2. Wishlist Heart Button Interactive Toggle
    const wishlistButtons = document.querySelectorAll('.wishlist-btn');
    wishlistButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();
            this.classList.toggle('active');
            const heartIcon = this.querySelector('i');
            if (heartIcon) {
                if (this.classList.contains('active')) {
                    heartIcon.classList.remove('fa-regular');
                    heartIcon.classList.add('fa-solid');
                } else {
                    heartIcon.classList.remove('fa-solid');
                    heartIcon.classList.add('fa-regular');
                }
            }
        });
    });

    // 3. Search Filter in Hero
    const searchInput = document.getElementById('heroSearchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function () {
            const query = this.value.toLowerCase().trim();
            const packageCards = document.querySelectorAll('.package-card');

            packageCards.forEach(card => {
                const title = card.querySelector('.package-name')?.textContent.toLowerCase() || '';
                if (title.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

// 4. Form Submit Handler (Demo / Dummy Notification)
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.nama_lengkap.value;
    
    alert(`Terima kasih ${name}, pesan Anda telah terkirim! Tim Go Travel akan segera menghubungi Anda.`);
    form.reset();
}
