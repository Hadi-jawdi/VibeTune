// Mood Music JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const moodButtons = document.querySelectorAll('.mood-btn');
    const body = document.body;
    const playerContainer = document.getElementById('player-container');
    const spotifyPlayer = document.getElementById('spotify-player');

    // Predefined playlist URIs (replace with actual Spotify playlist URIs)
    const playlists = {
        happy: 'https://open.spotify.com/embed/playlist/37i9dQZF1DXdPec7aLTmlC', // Example: Happy Hits
        sad: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX7qK8ma5wgG1', // Example: Sad Songs
        focused: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8', // Example: Deep Focus
        relaxed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX4E3UdUs7fUx' // Example: Chill Hits
    };

    // Gradient classes
    const gradients = {
        happy: 'happy-bg',
        sad: 'sad-bg',
        focused: 'focused-bg',
        relaxed: 'relaxed-bg'
    };

    moodButtons.forEach(button => {
        button.addEventListener('click', async function() {
            const mood = this.getAttribute('data-mood');

            // Change background gradient
            body.className = `min-h-screen bg-gradient-to-br ${gradients[mood]} flex flex-col items-center justify-center p-4 transition-all duration-500`;

            // Animate button
            anime({
                targets: this,
                scale: [1, 1.2, 1],
                duration: 600,
                easing: 'easeInOutQuad'
            });

            // Fetch playlist dynamically
            try {
                const playlistUrl = await searchPlaylists(mood);
                const embedUrl = playlistUrl.replace('open.spotify.com/playlist', 'open.spotify.com/embed/playlist');

                // Show player and set playlist
                playerContainer.classList.remove('d-none');
                spotifyPlayer.innerHTML = `<iframe src="${embedUrl}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            } catch (error) {
                console.error('Error fetching playlist:', error);
                // Fallback to predefined playlist
                playerContainer.classList.remove('d-none');
                spotifyPlayer.innerHTML = `<iframe src="${playlists[mood]}" width="100%" height="380" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
            }

            // Animate player container
            anime({
                targets: '#player-container',
                opacity: [0, 1],
                translateY: [20, 0],
                duration: 800,
                easing: 'easeOutQuad'
            });
        });
    });

    // Spotify API integration
    // Add your Spotify API key here
    const clientId = 'e79f78281ba24bfc8c623b06056a39f5';
    const clientSecret = '0e0bdcebf24a4036a1c9ad2b95fdfacc';

    async function getAccessToken() {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            body: 'grant_type=client_credentials'
        });
        const data = await response.json();
        return data.access_token;
    }

    async function searchPlaylists(mood) {
        const token = await getAccessToken();
        const response = await fetch(`https://api.spotify.com/v1/search?q=${mood}&type=playlist&limit=1`, {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        const data = await response.json();
        return data.playlists.items[0].external_urls.spotify;
    }
});
