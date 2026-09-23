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

    // 3. Search Filter in Paket Wisata & Hero
    const paketSearchInput = document.getElementById('paketSearchInput') || document.getElementById('heroSearchInput');
    if (paketSearchInput) {
        paketSearchInput.addEventListener('input', function () {
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

    // 4. Category Filter Dropdown in Paket Wisata
    const btnFilterCategory = document.getElementById('btnFilterCategory');
    const categoryDropdownMenu = document.getElementById('categoryDropdownMenu');

    if (btnFilterCategory && categoryDropdownMenu) {
        btnFilterCategory.addEventListener('click', function (e) {
            e.stopPropagation();
            categoryDropdownMenu.classList.toggle('show');
        });

        document.addEventListener('click', function () {
            categoryDropdownMenu.classList.remove('show');
        });

        const dropdownItems = categoryDropdownMenu.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function (e) {
                e.preventDefault();
                dropdownItems.forEach(d => d.classList.remove('active'));
                this.classList.add('active');

                const selectedCategory = this.getAttribute('data-category');
                const btnText = btnFilterCategory.querySelector('span');
                if (btnText) {
                    btnText.textContent = this.textContent;
                }

                const packageCards = document.querySelectorAll('.package-card');
                packageCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category') || '';
                    if (selectedCategory === 'all' || cardCategory.includes(selectedCategory)) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });

                categoryDropdownMenu.classList.remove('show');
            });
        });
    }
});

// 5. Form Submit Handler (Demo / Dummy Notification)
function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const name = form.nama_lengkap.value;
    
    alert(`Terima kasih ${name}, pesan Anda telah terkirim! Tim Go Travel akan segera menghubungi Anda.`);
    form.reset();
}
