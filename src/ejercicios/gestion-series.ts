/**
 * Ejercicio: Gestión de Series de Televisión
 * Demostración de la funcionalidad completa del sistema
 */

import { Serie } from '../series/Serie';
import { getAllSeries, getSerieById, getSeriesByChannel, getAverageSeasons } from '../series/data';

console.log('📺 Ejercicio: Gestión de Series de Televisión');
console.log('=' .repeat(50));

// 1. Mostrar todas las series
console.log('\n1. 📋 Listado completo de series:');
const todasLasSeries = getAllSeries();
todasLasSeries.forEach(serie => {
    console.log(`   ${serie.getId()}. ${serie.toString()}`);
});

// 2. Buscar una serie específica por ID
console.log('\n2. 🔍 Buscar serie por ID (ID: 3):');
const serieEspecifica = getSerieById(3);
if (serieEspecifica) {
    console.log(`   Encontrada: ${serieEspecifica.getName()}`);
    console.log(`   Canal: ${serieEspecifica.getChannel()}`);
    console.log(`   Temporadas: ${serieEspecifica.getSeasons()}`);
    console.log(`   Descripción: ${serieEspecifica.getDescription().substring(0, 100)}...`);
} else {
    console.log('   Serie no encontrada');
}

// 3. Filtrar series por canal
console.log('\n3. 📡 Series del canal BBC:');
const seriesBBC = getSeriesByChannel('BBC');
seriesBBC.forEach(serie => {
    console.log(`   - ${serie.getName()} (${serie.getSeasons()} temporadas)`);
});

// 4. Estadísticas
console.log('\n4. 📊 Estadísticas:');
console.log(`   Total de series: ${todasLasSeries.length}`);
console.log(`   Promedio de temporadas: ${getAverageSeasons().toFixed(2)}`);

// 5. Serie con más temporadas
console.log('\n5. 🏆 Serie con más temporadas:');
const serieMasTemporadas = todasLasSeries.reduce((max, serie) => 
    serie.getSeasons() > max.getSeasons() ? serie : max
);
console.log(`   ${serieMasTemporadas.getName()} - ${serieMasTemporadas.getSeasons()} temporadas`);

// 6. Canales únicos
console.log('\n6. 📺 Canales disponibles:');
const canalesUnicos = [...new Set(todasLasSeries.map(serie => serie.getChannel()))];
canalesUnicos.forEach(canal => {
    const seriesDelCanal = getSeriesByChannel(canal);
    console.log(`   ${canal}: ${seriesDelCanal.length} series`);
});

// 7. Crear una nueva serie de ejemplo
console.log('\n7. ➕ Crear nueva serie de ejemplo:');
const nuevaSerie = new Serie(
    7,
    "Stranger Things",
    "Netflix",
    4,
    "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.",
    "https://www.netflix.com/title/80057281",
    "https://i.imgur.com/9yxep1I.jpg"
);

console.log(`   Nueva serie creada: ${nuevaSerie.toString()}`);
console.log(`   JSON: ${JSON.stringify(nuevaSerie.toJSON(), null, 2)}`);

// 8. Demostrar métodos de la clase Serie
console.log('\n8. 🔧 Demostrando métodos de la clase Serie:');
const serieDemo = getSerieById(1);
if (serieDemo) {
    console.log(`   Nombre original: ${serieDemo.getName()}`);
    
    // Crear una copia para no modificar la original
    const serieModificada = new Serie(
        serieDemo.getId(),
        serieDemo.getName(),
        serieDemo.getChannel(),
        serieDemo.getSeasons(),
        serieDemo.getDescription(),
        serieDemo.getLink(),
        serieDemo.getImage()
    );
    
    serieModificada.setName("Breaking Bad: Edición Especial");
    serieModificada.setSeasons(6);
    
    console.log(`   Nombre modificado: ${serieModificada.getName()}`);
    console.log(`   Temporadas modificadas: ${serieModificada.getSeasons()}`);
}

// 9. Información para la interfaz web
console.log('\n9. 🌐 Información para la interfaz web:');
console.log('   Para ver la interfaz web con la tabla Bootstrap:');
console.log('   1. Compila el proyecto: npm run build');
console.log('   2. Abre el archivo index.html en tu navegador');
console.log('   3. La tabla mostrará todas las series con sus datos');

console.log('\n✅ Ejercicio de gestión de series completado!');
console.log('');