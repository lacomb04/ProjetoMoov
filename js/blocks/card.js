// Função para verificar se a seção está visível ao rolar
function handleScroll() {
    const targetSection = document.querySelector('#funcionabilidades');
    const cards = targetSection.querySelectorAll('.card');
    const sectionTop = targetSection.getBoundingClientRect().top;

    // Verifica se a seção está visível na viewport
    if (sectionTop < window.innerHeight && sectionTop > 0) {
        cards.forEach(card => {
            card.classList.add('visible'); // Adiciona a classe 'visible'
        });
        // Remove o evento de rolagem após a animação ser aplicada
        window.removeEventListener('scroll', handleScroll);
    }
}

// Adiciona o evento de rolagem
window.addEventListener('scroll', handleScroll);

// Adiciona smooth scroll ao clicar no link
document.querySelector('a[href="#funcionabilidades"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
});
