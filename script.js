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
    

}, { once: true }); // Solo se ejecuta una vez




// Mantener video en bucle (redundante por el atributo loop, pero como refuerzo)
concertVideo.addEventListener('ended', () => {
    concertVideo.currentTime = 0;
    concertVideo.play();
});