"use strict"
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [] ,
    privat: false
};

const   a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько вы оцените его?', ''),
        c = prompt('Один из последних просмотренных фильмов?', ''),
        d = prompt('На сколько вы оцените его?', '');

personaMovieDB.movies[a] = b;
personaMovieDB.movies[c] = d;
console.log(personaMovieDB);