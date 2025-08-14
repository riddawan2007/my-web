// เพิ่มลูกเล่นให้เมนู active
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// เพิ่มเอฟเฟกต์ข้อความใน Card
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.backgroundColor = '#f9f9ff';
    });
    card.addEventListener('mouseleave', () => {
        card.style.backgroundColor = 'white';
    });
});