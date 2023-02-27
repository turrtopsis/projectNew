"use strict"


let numberOfFilms;

const personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [] ,
    privat: false
};

function start() {
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

// start();



function rememberMyFilms() {
    for ( let i = 0; i < 2; i++) {
        const   a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько вы оцените его?', '');
            if (a != '' && b != '' && a!= null && b!= null && a.length < 50 && b.length < 50) {
                personaMovieDB.movies[a] = b;
            } else {
                i--
            }
            
        }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personaMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов')
    } else if(personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        console.log('Вы класический зритель')
    } else if(personaMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonalLevel ();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
    }
}
showMyDB(personaMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personaMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
    }
}
writeYourGenres();


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

