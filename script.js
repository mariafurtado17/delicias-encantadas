// Seleciona o título com a classe 'titulo'
const titulo = document.querySelector(".titulo");

// Função para criar o efeito de glitter
function criarGlitter(evento) {
    const glitter = document.createElement("span");
    glitter.classList.add("glitter");
    document.body.appendChild(glitter);

    // Define a posição da partícula com base no mouse
    glitter.style.left = evento.pageX + "px";
    glitter.style.top = evento.pageY + "px";

    // Remove a partícula após a animação terminar
    glitter.addEventListener("animationend", () => {
        glitter.remove();
    });
}

// Limita o número de partículas na tela (por exemplo, no máximo 20 partículas)
let glitterCount = 0;
const maxGlitterParticles = 20;

function criarGlitterLimitado(evento) {
    // Verifica se o número de partículas excede o limite
    if (glitterCount < maxGlitterParticles) {
        criarGlitter(evento);
        glitterCount++;
    }

    // Resetando o contador após todas as partículas desaparecerem
    setTimeout(() => {
        glitterCount = Math.max(glitterCount - 1, 0);
    }, 2000); // Ajuste o tempo conforme necessário (2000ms = 2 segundos)
}

// Adiciona o evento de movimento do mouse no título
titulo.addEventListener("mousemove", criarGlitterLimitado);


//para entrar nos itens do menu
function smoothScroll(targetId) {
    const targetElement = document.getElementById(targetId);
    window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
    });
}

    // Configuração do EmailJS
   <script>
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio tradicional do formulário

        // Coleta os dados do formulário
        const nome = document.getElementById("nome").value;
        const assunto = document.getElementById("assunto").value;

        // Codifica os dados para a URL
        const mensagem = `Olá, meu nome é ${nome}. Gostaria de saber mais sobre ${assunto}.`;

        // Cria o link do WhatsApp com a mensagem dinâmica
        const linkWhatsApp = `https://wa.me/5511996161980?text=${encodeURIComponent(mensagem)}`;

        // Redireciona o usuário para o WhatsApp
        window.open(linkWhatsApp, "_blank");
    });
</script>
