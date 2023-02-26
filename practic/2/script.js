"use strict"
const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [] ,
    privat: false
};

if (personaMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов')
} else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
    alert('Вы класический зритель')
} else if(personaMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert ('Произошла ошибка');
}

for ( let i = 0; i < 2; i++) {
const   a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько вы оцените его?', '');
    if (a != '' && b != '' && a!= null && b!= null && a.length < 50 && b.length < 50) {
        personaMovieDB.movies[a] = b;
    } else {
        i--
    }
    
}

// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     if (a !== '' &&  a!== null && a.length < 50) {
//         const b = prompt('На сколько вы оцените его?', '');
//         personaMovieDB.movies[a] = b;
//     } else {
//         i--
//     }
//     i++;
// };

// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     if (a !== '' &&  a!== null && a.length < 50) {
//         const b = prompt('На сколько вы оцените его?', '');
//         personaMovieDB.movies[a] = b;
//     } else {
//         i--
//     }
//     i++;
// } while (i < 2);
console.log(personaMovieDB);
