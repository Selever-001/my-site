function countPhotos() {
    let photos = document.querySelectorAll('.image-card');
    let counter = document.getElementById('image-counter');

    if (counter) {
        counter.textContent = photos.length;
    }

    console.log('Найдено фотографий:', photos.length);
}

function setupLikes() {
    let likeButtons = document.querySelectorAll('.like-btn');
    let totalLikesElement = document.getElementById('total-likes');

    let totalLikes = 0;

    document.querySelectorAll('.like-count').forEach(function(span) {
        totalLikes += parseInt(span.textContent) || 0;
    });

    if (totalLikesElement) {
        totalLikesElement.textContent = totalLikes;
    }

    likeButtons.forEach(function(button) {
        button.addEventListener('click', function() {

            let likesSpan = this.querySelector('.like-count');
            let heartIcon = this.querySelector('i');

            if (!likesSpan) return;

            let currentLikes = parseInt(likesSpan.textContent) || 0;

            if (this.classList.contains('liked')) {

                currentLikes--;
                totalLikes--;

                this.classList.remove('liked');

                if (heartIcon) {
                    heartIcon.className = 'far fa-heart';
                }

            } else {

                currentLikes++;
                totalLikes++;

                this.classList.add('liked');

                if (heartIcon) {
                    heartIcon.className = 'fas fa-heart';
                }
            }

            likesSpan.textContent = currentLikes;

            if (totalLikesElement) {
                totalLikesElement.textContent = totalLikes;
            }

            this.style.transform = 'scale(1.2)';

            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 300);

            console.log('Лайков всего:', totalLikes);
        });
    });
}

function setupFilters() {

    const filterButtons = document.querySelectorAll('.filter-btn');
    const cards = document.querySelectorAll('.image-card');

    filterButtons.forEach(button => {

        button.addEventListener('click', function() {

            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            this.classList.add('active');

            const filter = this.dataset.filter;

            cards.forEach(card => {

                const category = card.dataset.category;

                if (filter === 'all' || category === filter) {

                    card.style.display = '';

                } else {

                    card.style.display = 'none';
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {

    console.log('Галерея загружена!');

    countPhotos();
    setupLikes();
    setupFilters();

    setTimeout(function() {
        console.log('JavaScript работает правильно!');
    }, 1000);

});