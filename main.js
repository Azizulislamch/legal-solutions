// JavaScript for Accordion Functionality
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const icon = header.querySelector('.icon');

        // Close all other open accordion items (Optional)
        document.querySelectorAll('.accordion-content').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.style.maxHeight = '0';
                otherContent.previousElementSibling.querySelector('.icon').textContent = '+';
                otherContent.classList.remove('mt-4');
            }
        });

        // Toggle current accordion item
        if (content.style.maxHeight && content.style.maxHeight !== '0px') {
            content.style.maxHeight = '0px';
            icon.textContent = '+';
            content.classList.remove('mt-4');
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.textContent = '—';
            content.classList.add('mt-4');
        }
    });
});