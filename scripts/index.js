// Generar corazones flotantes
function createHearts() {
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.opacity = Math.random();
        heart.style.width = (Math.random() * 15 + 10) + 'px';
        heart.style.height = heart.style.width;
        heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
        document.body.appendChild(heart);
    }
}

// Generar confeti
function createConfetti() {
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 330}, 100%, 70%)`;
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.width = (Math.random() * 8 + 6) + 'px';
        confetti.style.height = (Math.random() * 8 + 6) + 'px';
        document.body.appendChild(confetti);

        // Animación
        setTimeout(() => {
            confetti.style.opacity = '1';
            confetti.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 + 100}px) rotate(${Math.random() * 360}deg)`;
            confetti.style.transition = `all ${Math.random() * 1 + 0.5}s ease-out`;
        }, 10);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    createHearts();

    document.getElementById('unlockBtn').addEventListener('click', function () {
        const passwordInput = document.getElementById('passwordInput');
        const vaultDoor = document.querySelector('.vault-door');

        if (passwordInput.value === '05/04/25') {
            // Efecto de apertura
            vaultDoor.classList.add('open');
            createConfetti();

            // Redirección después de 1.5 segundos
            setTimeout(() => {
                window.location.href = './pages/songs.html';
            }, 1500);
        } else {
            // Efecto de error
            passwordInput.value = '';
            vaultDoor.classList.add('shake');
            setTimeout(() => {
                vaultDoor.classList.remove('shake');
            }, 500);
        }
    });

    // También permite desbloquear con Enter
    document.getElementById('passwordInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            document.getElementById('unlockBtn').click();
        }
    });
});
