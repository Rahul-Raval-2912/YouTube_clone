
const sidebar = document.querySelector('.sidebar');
const menuIcon = document.querySelector('.menu-icon');
const body = document.body;
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const categoryItems = document.querySelectorAll('.category-item');
const accountIcon = document.querySelector('.header-icon:last-child');


console.log('Dark mode toggle found:', darkModeToggle);

menuIcon.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('active');
    }
});


document.addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && sidebar.classList.contains('expanded') && 
        !sidebar.contains(e.target) && !menuIcon.contains(e.target)) {
        sidebar.classList.remove('expanded', 'active');
    }
});

document.querySelectorAll('.category-item').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.category-item').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Dark Mode Toggle
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️';
} else {
    darkModeToggle.textContent = '🌙';
}

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
});


document.querySelector('.header-icon:last-child').addEventListener('click', () => {
    window.location.href = 'account.html';
});


document.querySelectorAll('.shorts-card .video-thumbnail').forEach(thumbnail => {
    
    thumbnail.style.width = '100%';
    thumbnail.style.height = '0'; 
    thumbnail.style.paddingTop = '177.78%'; 
    thumbnail.style.backgroundSize = 'cover'; 
    thumbnail.style.backgroundPosition = 'center'; 
    thumbnail.style.position = 'relative'; 
});