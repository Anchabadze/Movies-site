
document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
    };

    const adv = document.querySelectorAll('.promo__adv img'),
            poster = document.querySelector('.promo__bg'),
            genre = poster.querySelector('.promo__genre'),
            movieList = document.querySelector('.promo__interactive-list'),
            addForm = document.querySelector('form.add'),
            addInput = addForm.querySelector('.adding__input'),
            checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (e) => { // 23:32
        e.preventDefault();
    });

    adv.forEach(item => {
        item.remove();
    });

    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("img/bg.jpg")';

    movieList.innerHTML = '';

    movieDB.movies.sort();

    movieDB.movies.forEach((film, i) => {
        movieList.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });



});

