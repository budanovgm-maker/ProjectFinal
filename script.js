document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const loadMoreBtn = document.getElementById('load-more');
    const movieGrid = document.querySelector('.movie-grid');
    const contactForm = document.getElementById('contact-form');

    
    const movies = [
        { title: "Гран туризмо", genre: "Боевик", year: 2023 },
        { title: "На западном фронте без перемен", genre: "Драма", year: 2022 },
        { title: "Папу маме заверни", genre: "Комедия", year: 2024 },
        { title: "Вечные", genre: "Фантастика", year: 2021 },
        { title: "В никуда", genre: "Триллер", year: 2023 },
        { title: "Добыча", genre: "Ужасы", year: 2022 },
    ];
    let displayedMoviesCount = 3; 

    
    function renderMovies(moviesToRender) {
        movieGrid.innerHTML = ''; 
        moviesToRender.forEach(movie => {
            const card = document.createElement('div');
            card.classList.add('movie-card');
            card.innerHTML = `
                <h3>${movie.title}</h3>
                <p>Жанр: ${movie.genre}</p>
                <p>Год: ${movie.year}</p>
            `;
            movieGrid.appendChild(card);
        });
    }

   
    renderMovies(movies.slice(0, displayedMoviesCount));

    
    loadMoreBtn.addEventListener('click', () => {
        displayedMoviesCount += 3;
        if (displayedMoviesCount > movies.length) {
            displayedMoviesCount = movies.length;
            loadMoreBtn.style.display = 'none'; 
        }
        renderMovies(movies.slice(0, displayedMoviesCount));
    });

    
    themeToggleBtn.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
    });

    
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
    }

    
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault(); 

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Пожалуйста, введите корректный email.');
            return;
        }

        console.log('Данные формы:');
        console.log('Имя:', name);
        console.log('Email:', email);
        console.log('Сообщение:', message);

        alert('Спасибо за ваше сообщение! Данные отправлены в консоль.');
        contactForm.reset(); 
    });
});