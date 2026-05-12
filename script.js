const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.textContent = navLinks.classList.contains('open') ? 'X' : '\u2630';
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.textContent = '\u2630';
    });
});

const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

const testimonials = [{
        name: 'Carlos Mendes',
        role: 'Paciente',
        text: 'A saude e riqueza, e no ambito medico, curar cada vida importa. Abrange uma ampla gama de especialidades voltadas para diagnosticar, tratar e prevenir doencas, mantendo o bem-estar geral de forma notavel.',
    },
    {
        name: 'Ana Oliveira',
        role: 'Paciente',
        text: 'Excelente atendimento! A equipe medica e extremamente competente e atenciosa. Recomendo a todos que buscam cuidados de saude de qualidade com profissionais dedicados.',
    },
    {
        name: 'Roberto Silva',
        role: 'Paciente',
        text: 'Desde que comecei meu plano de saude aqui, a qualidade de vida da minha familia melhorou significativamente. Atendimento rapido e profissionais excelentes.',
    },
];

let currentTest = 0;

function renderTestimonial(idx) {
    const t = testimonials[idx];
    const textEl = document.getElementById('testText');
    const nameEl = document.getElementById('testName');
    const roleEl = document.getElementById('testRole');
    const avatarEl = document.getElementById('testAvatar');

    textEl.textContent = t.text;
    nameEl.textContent = t.name;
    roleEl.textContent = t.role;
    avatarEl.textContent = t.name.charAt(0);
}

renderTestimonial(0);

document.getElementById('testPrev').addEventListener('click', () => {
    currentTest = currentTest === 0 ? testimonials.length - 1 : currentTest - 1;
    renderTestimonial(currentTest);
});

document.getElementById('testNext').addEventListener('click', () => {
    currentTest = currentTest === testimonials.length - 1 ? 0 : currentTest + 1;
    renderTestimonial(currentTest);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .project-img, .feature-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

const sections = document.querySelectorAll('section[id], footer[id]');
const links = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(sec => {
        if (window.scrollY >= sec.offsetTop - 120) {
            current = sec.getAttribute('id');
        }
    });
    links.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${current}` ? '#eaa458' : '';
    });
});
