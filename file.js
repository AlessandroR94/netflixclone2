document.getElementById('searchIcon').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput.style.display === 'none') {
        searchInput.style.display = 'block';
        searchInput.focus();
    } else {
        searchInput.style.display = 'none';
    }
});

document.addEventListener('scroll', function() {
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        const rect = row.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            row.classList.add('visible');
            row.classList.remove('invisible');
        } else {
            row.classList.add('invisible');
            row.classList.remove('visible');
        }
    });
});