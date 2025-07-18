document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { // 스크롤이 50px 이상 내려가면
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Hamburger Menu Toggle (for mobile)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active'); // 햄버거 아이콘 변화를 위한 클래스
    });

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - (header.offsetHeight), // 헤더 높이만큼 빼서 정확한 위치로
                    behavior: 'smooth'
                });
            }
        });
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼의 기본 제출 동작을 막습니다.

    const name = this.querySelector('input[name="name"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;

    const recipient = 'contact@plaium.com'; // ⚠️ 여기에 이메일을 수신할 주소를 입력하세요!
    const subject = `문의 - ${name} (${email})`;
    const body = `보낸 사람: ${name}\n이메일: ${email}\n\n메시지:\n${message}`;

    // 이메일 클라이언트를 띄우기 위한 mailto 링크를 생성합니다.
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // 새 창에서 mailto 링크를 엽니다.
    window.location.href = mailtoLink;
});