
document.addEventListener('DOMContentLoaded', () => {
    const songs = [
        './assets/SongsAudios/AURORA - Exist For Love.mp3',
        './assets/SongsAudios/BWU - Hazel Eyes.mp3',
        './assets/SongsAudios/Damiano David - Angel.mp3'
    ];

    const player = document.getElementById('audioPlayer');

    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        player.src = songs[randomIndex];
        player.play();
    }

    // Reproduce una al cargar
    playRandomSong();

    // Cuando termina, reproduce otra
    player.addEventListener('ended', playRandomSong);
});
