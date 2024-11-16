// Função que será chamada quando o usuário rolar a página
function revealOnScroll() {
    // Seleciona todos os elementos que você quer animar (h1, h2, p, div)
    const elements = document.querySelectorAll('h1, h2, p, div');
  
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;  // Posição do topo do elemento
      const windowHeight = window.innerHeight;  // Altura da janela do navegador
  
      // Verifica se o topo do elemento está dentro da área visível da janela
      if (elementTop < windowHeight - 100) {  // 100px de margem para aparecer antes de entrar totalmente
        element.classList.add('visible');  // Adiciona a classe "visible" para ativar a animação
      }
    });
  }
  
  // Chama a função sempre que o usuário rolar a página
  window.addEventListener('scroll', revealOnScroll);
  
  // Chama a função também quando a página for carregada (garante que os elementos visíveis na carga inicial sejam animados)
  revealOnScroll();