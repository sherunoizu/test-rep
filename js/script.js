"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);

    while (numberOfFilms == `` || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt(`Сколько фильмов вы уже посмотрели?`, ``);
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`Один из последних просмотренных фильмов?`, ``),
            b = prompt(`На сколько его оцените?`, ``);

        if (a != null && b != null && a != `` && b != `` && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log(`done`);
        } else {
            console.log(`Error`);
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel () {
    if (personalMovieDB.count < 10) {
        console.log(`Просмотрено довольно мало фильмов`);
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log(`Просмотрено средне фильмов`);
    } else if (personalMovieDB.count >= 30) {
        console.log(`Просмотрено много фильмов`);
    } else {
        console.log(`error`);
    }
}

detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(`Разрешение получено`);
        console.log(personalMovieDB);
    } else {
        console.log(`Доступ запрещен`);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(genres) {
    for (let i = 1; i <= 3; i++) {
        genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}: `, ``);
    }
}

writeYourGenres(personalMovieDB.genres);





