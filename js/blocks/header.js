 // Seleciona o header
 const header = document.getElementById('header');

 // Adiciona um ouvinte de evento para a rolagem
 window.addEventListener('scroll', function() {
     if (window.scrollY > 50) { // Muda para o valor de rolagem que preferir
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });
 