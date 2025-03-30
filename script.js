// Obtener elementos principales
const touchMessage = document.getElementById('touchMessage');
const concertVideo = document.getElementById('concertVideo');

// Configuración inicial del video (muted requerido para autoplay)
concertVideo.muted = true;
concertVideo.playsInline = true;
concertVideo.loop = true;

// Iniciar experiencia con interacción del usuario
document.addEventListener('click', () => {
    // Ocultar mensaje inicial
    touchMessage.style.display = 'none';
    
    // Habilitar sonido después de la interacción del usuario
    concertVideo.muted = false;
    
    // Reproducir video
    concertVideo.play()
        .then(() => console.log("Video iniciado con sonido"))
        .catch(error => console.error("Error en video:", error));
    
    // Iniciar mariposas
    initButterflies();
    
    // Crear partículas de ambiente
    createConcertParticles();

}, { once: true }); // Solo se ejecuta una vez

// Función para inicializar mariposas (8 como solicitaste)
function initButterflies() {
    const container = document.querySelector('.butterflies-container');
    
    // Limpiar mariposas existentes (si las hay)
    container.innerHTML = '';
    
    // Crear 8 mariposas con estilos dinámicos
    for (let i = 0; i < 8; i++) {
        const butterfly = document.createElement('div');
        butterfly.className = 'butterfly';
        
        // Estilos dinámicos
        const size = Math.random() * 30 + 20; // Tamaño entre 20-50px
        butterfly.style.cssText = `
            background-image: url('imagen/mariposa.png');
            width: ${size}px;
            height: ${size}px;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-duration: ${Math.random() * 20 + 20}s, 0.4s;
            animation-delay: ${Math.random() * 5}s, ${Math.random() * 0.5}s;
            opacity: ${Math.random() * 0.6 + 0.4};
        `;
        
        container.appendChild(butterfly);
    }
}

// Función para partículas de ambiente
function createConcertParticles() {
    const container = document.querySelector('.concert-container');
    
    // Crear 30 partículas (ajustable)
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'concert-particle';
        
        particle.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            animation: twinkle ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s;
            opacity: ${Math.random() * 0.5 + 0.3};
        `;
        
        container.appendChild(particle);
    }
}

// Mantener video en bucle (redundante por el atributo loop, pero como refuerzo)
concertVideo.addEventListener('ended', () => {
    concertVideo.currentTime = 0;
    concertVideo.play();
});