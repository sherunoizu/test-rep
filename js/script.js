"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: () => {
        personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);

        while (personalMovieDB.count == `` || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt(`Один из последних просмотренных фильмов?`, ``).trim(),
                b = prompt(`На сколько его оцените?`, ``).trim();

            if (a != null && b != null && a != `` && b != `` && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log(`done`);
            } else {
                console.log(`Error`);
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log(`Просмотрено довольно мало фильмов`);
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log(`Просмотрено средне фильмов`);
        } else if (personalMovieDB.count >= 30) {
            console.log(`Просмотрено много фильмов`);
        } else {
            console.log(`error`);
        }
    },
    showMyDB: function () {
        const hidden = personalMovieDB.privat;
        if (hidden) {
            console.log(`Разрешение получено`);
            console.log(personalMovieDB);
        } else {
            console.log(`Доступ запрещен`);
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        let genres = ``;
        for (let i = 1; i < 2; i++) {
            genres = prompt(`Введите ваши любимые жанры через запятую`);

            if (genres === `` || genres == null) {
                console.log(`Incorrect data`);
                i--;
            } else {
                personalMovieDB.genres = genres.split(`, `);
            }
        }
        genres = personalMovieDB.genres;
        genres.forEach((value, index) => {
            console.log(`Любимый жанр #${index+1} - это ${value}`);
        });
    }
};

// personalMovieDB.start();

// personalMovieDB.rememberMyFilms();

// personalMovieDB.detectPersonalLevel();

// personalMovieDB.toggleVisibleMyDB();

// personalMovieDB.showMyDB();

// personalMovieDB.writeYourGenres(); 



