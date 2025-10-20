/**
 * Archivo de datos con series de televisión
 */

import { Serie } from './Serie';

export const series = [
  new Serie(
    1,
    "Breaking Bad",
    "AMC",
    5,
    "Ambientada y filmada en Albuquerque, Nuevo México, la serie cuenta la historia de Walter White, un profesor de química de secundaria en apuros y deprimido que es diagnosticado con cáncer de pulmón",
    "https://www.amc.com/shows/breaking-bad",
    // IMDb (Amazon CDN)
    "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwZi00ZjQ5LWFmNTEtODM1ZTNmNTBmZWRlXkEyXkFqcGc@._V1_.jpg"
  ),

  new Serie(
    2,
    "Orange Is the New Black",
    "Netflix",
    6,
    "La serie gira en torno a Piper Chapman, una mujer de treinta y tantos años que vive en Nueva York y es sentenciada a 15 meses en la Penitenciaría de Litchfield",
    "https://www.netflix.com/co/title/70242311",
    "https://m.media-amazon.com/images/M/MV5BMjE1MTE2MDEzMV5BMl5BanBnXkFtZTgwNjQ5MzE2MjE@._V1_.jpg"
  ),

  new Serie(
    3,
    "Game of Thrones",
    "HBO",
    7,
    "Serie de televisión de drama fantástico estadounidense creada por David Benioff y D. B. Weiss. Es una adaptación de Canción de hielo y fuego, la serie de novelas de fantasía de George R. R. Martin",
    "https://www.hbo.com/game-of-thrones",
    "https://m.media-amazon.com/images/M/MV5BMTczNjc2NTk0NV5BMl5BanBnXkFtZTgwNzU1NzE3NzE@._V1_.jpg"
  ),

  new Serie(
    4,
    "The Big Bang Theory",
    "CBS",
    12,
    "Leonard y Sheldon son físicos brillantes, genios en el laboratorio pero socialmente torpes en todos los demás aspectos...",
    "https://www.cbs.com/shows/big_bang_theory/about/",
    "https://m.media-amazon.com/images/M/MV5BMTc4NjYxMzI3MF5BMl5BanBnXkFtZTgwNjYwOTk2MjE@._V1_.jpg"
  ),

  new Serie(
    5,
    "Sherlock",
    "BBC",
    4,
    "Sherlock retrata al detective consultor Sherlock Holmes (Benedict Cumberbatch) resolviendo varios misterios en el Londres moderno...",
    "https://www.bbc.co.uk/programmes/b018ttws",
    "https://m.media-amazon.com/images/M/MV5BMjE5NDEyNzEwOV5BMl5BanBnXkFtZTgwNDI2NTQxMDE@._V1_.jpg"
  ),

  new Serie(
    6,
    "A Very English Scandal",
    "BBC",
    2,
    "Una miniserie británica de comedia-drama basada en hechos reales, en tres partes, basada en el libro del mismo nombre de John Preston.",
    "https://www.imdb.com/es/title/tt6938856/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_a%2520very%2520english",
    "src/series/A_Very_English_Scandal.png"
  ),

  new Serie(
    7,
    "The Boys",
    "Amazon Prime Video",
    4,
    "Un grupo de vigilantes lucha contra superhéroes corruptos que abusan de sus superpoderes para beneficio personal y corporativo",
    "https://www.imdb.com/title/tt1190634/",
    "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
  )
];

/**
 * Utilidades de acceso
 */
export function getAllSeries(): Serie[] { return series; }
export function getSerieById(id: number): Serie | undefined {
  return series.find(serie => serie.getId() === id);
}
export function getSeriesByChannel(channel: string): Serie[] {
  return series.filter(serie => serie.getChannel().toLowerCase() === channel.toLowerCase());
}
export function getAverageSeasons(): number {
  const totalSeasons = series.reduce((total, serie) => total + serie.getSeasons(), 0);
  return totalSeasons / series.length;
}
