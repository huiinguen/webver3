document.addEventListener("DOMContentLoaded", () => {
    // Toggle menu hamburger
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Active link cho thanh menu
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Copy Gmail
    const gmailBlock = document.querySelector('.social-block.gmail');
    if (gmailBlock) {
        gmailBlock.addEventListener('click', () => {
            const email = gmailBlock.getAttribute('data-email');
            navigator.clipboard.writeText(email).then(() => {
                const span = gmailBlock.querySelector('span');
                const originalText = span.textContent;
                span.textContent = '✅ Đã sao chép!';
                setTimeout(() => {
                    span.textContent = originalText;
                }, 2000);
            });
        });
    }

    // Popup cho section-card
    const sectionCards = document.querySelectorAll('.section-card');
    const popup = document.querySelector('#product-popup');
    const popupTitle = document.querySelector('#popup-title');
    const popupNote = document.querySelector('#popup-note');
    const popupRedirect = document.querySelector('#popup-redirect');
    const popupCopy = document.querySelector('#popup-copy');
    const closePopup = document.querySelector('#close-popup');
    const overlay = document.querySelector('#overlay');

    if (sectionCards.length > 0 && popup) {
        sectionCards.forEach(card => {
            card.addEventListener('click', () => {
                popupTitle.textContent = card.querySelector('h2').textContent;
                popupNote.innerHTML = card.getAttribute('data-note') || card.querySelector('p').textContent;
                popupRedirect.setAttribute('href', card.getAttribute('data-link') || '#');
                popup.style.display = 'block';
                overlay.style.display = 'block';
            });
        });
    }

    if (popupCopy) {
        popupCopy.addEventListener('click', () => {
            const link = popupRedirect.getAttribute('href');
            navigator.clipboard.writeText(link).then(() => {
                popupCopy.textContent = '✅ Đã sao chép!';
                setTimeout(() => {
                    popupCopy.textContent = '📋 Sao chép liên kết';
                }, 2000);
            });
        });
    }

    if (closePopup && overlay) {
        closePopup.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });

        overlay.addEventListener('click', () => {
            popup.style.display = 'none';
            overlay.style.display = 'none';
        });
    }
});