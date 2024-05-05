<script>
        document.addEventListener('DOMContentLoaded', function() {
            const accessToken = 'YOUR_ACCESS_TOKEN'; // Замените на ваш токен доступа

            function fetchFacebookPhotos() {
                const url = `https://graph.facebook.com/v14.0/me/photos?fields=name,picture&access_token=${accessToken}`;
                fetch(url)
                    .then(response => response.json())
                    .then(data => displayPhotos(data))
                    .catch(error => console.error('Error fetching data: ', error));
            }

            function displayPhotos(data) {
                const container = document.getElementById('photo-container');
                data.data.slice(0, 3).forEach(photo => {
                    const photoElement = document.createElement('div');
                    photoElement.className = 'photo';
                    photoElement.innerHTML = `<img src="${photo.picture}" alt="Photo from Facebook">`;
                    container.appendChild(photoElement);
                });
            }

            fetchFacebookPhotos();
        });
    </script>