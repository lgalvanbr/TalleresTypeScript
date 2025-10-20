// Aplicación de gestión de series de televisión

// Clase Serie
class Serie {
    constructor(id, name, channel, seasons, description, link, image) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }

    getId() { return this.id; }
    getName() { return this.name; }
    getChannel() { return this.channel; }
    getSeasons() { return this.seasons; }
    getDescription() { return this.description; }
    getLink() { return this.link; }
    getImage() { return this.image; }

    setName(name) { this.name = name; }
    setChannel(channel) { this.channel = channel; }
    setSeasons(seasons) { this.seasons = seasons; }
    setDescription(description) { this.description = description; }
    setLink(link) { this.link = link; }
    setImage(image) { this.image = image; }
}

// Datos de las series
const seriesData = [
    new Serie(
        1,
        "Breaking Bad",
        "AMC",
        5,
        "Un profesor de química de secundaria que se convierte en productor de metanfetaminas",
        "https://www.imdb.com/title/tt0903747/",
        "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg"
    ),
    new Serie(
        2,
        "Orange is the New Black", 
        "Netflix",
        6,
        "La historia de Piper Chapman y su tiempo en una prisión federal femenina",
        "https://www.imdb.com/title/tt2372162/",
        "https://image.tmdb.org/t/p/w500/ekaa7YjGPTkFLcPhwWXTnARuCEU.jpg"
    ),
    new Serie(
        3,
        "Game of Thrones",
        "HBO", 
        7,
        "Nueve familias nobles luchan por el control de las tierras míticas de Westeros",
        "https://www.imdb.com/title/tt0944947/",
        "https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg"
    ),
    new Serie(
        4,
        "The Big Bang Theory",
        "CBS",
        12, 
        "Una comedia centrada en dos físicos brillantes, Leonard y Sheldon",
        "https://www.imdb.com/title/tt0898266/",
        "https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8r7kloA.jpg"
    ),
    new Serie(
        5,
        "Sherlock",
        "BBC",
        4,
        "Una versión moderna del famoso detective y su compañero doctor resolviendo crímenes",
        "https://www.imdb.com/title/tt1475582/",
        "https://image.tmdb.org/t/p/w500/7WTsnHkbA0FaG6R9twfFde0I9hl.jpg"
    ),
    new Serie(
        6,
        "A Very English Scandal",
        "BBC",
        2,
        "Una historia en tres partes del histórico escándalo político del Partido Liberal de los años 60 y 70",
        "https://www.imdb.com/es/title/tt6938856/?ref_=nv_sr_srsg_0_tt_8_nm_0_in_0_q_a%2520very%2520english",
        "assets/images/A_Very_English_Scandal.png"
    ),
    new Serie(
        7,
        "The Boys",
        "Amazon Prime Video",
        4,
        "Un grupo de vigilantes lucha contra superhéroes corruptos que abusan de sus superpoderes",
        "https://www.imdb.com/title/tt1190634/",
        "https://m.media-amazon.com/images/M/MV5BOTEyNDJhMDAtY2U5ZS00OTMzLTkwODktMjU3MjFkZWVlMGYyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_.jpg"
    )
];

// Funciones para manejar los datos
function getAllSeries() {
    return seriesData;
}

function getAverageSeasons() {
    const total = seriesData.reduce((sum, serie) => sum + serie.getSeasons(), 0);
    return total / seriesData.length;
}

// Clase principal de la aplicación
class SeriesApp {
    constructor() {
        this.series = getAllSeries();
        this.tableBody = null;
        this.selectedRow = null;
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }

    setupApp() {
        this.tableBody = document.getElementById('series-table-body');
        
        if (this.tableBody) {
            this.renderTable();
            this.updateStats();
            this.updateDate();
        } else {
            console.error('No se pudo encontrar el elemento de la tabla');
        }
    }

    renderTable() {
        if (!this.tableBody) return;

        this.tableBody.innerHTML = '';

        this.series.forEach((serie, index) => {
            const row = this.createSerieRow(serie, index + 1);
            this.tableBody.appendChild(row);
        });

        // Agregar fila de promedio al final
        this.addAverageRow();
    }

    addAverageRow() {
        if (!this.tableBody) return;

        const averageRow = document.createElement('tr');
        averageRow.style.backgroundColor = '#f8f9fa';
        averageRow.style.fontWeight = 'bold';
        
        // Celda vacía para #
        const cellEmpty1 = document.createElement('td');
        averageRow.appendChild(cellEmpty1);
        
        // Celda vacía para imagen
        const cellEmpty2 = document.createElement('td');
        averageRow.appendChild(cellEmpty2);
        
        // Celda vacía para nombre
        const cellEmpty3 = document.createElement('td');
        averageRow.appendChild(cellEmpty3);
        
        // Celda vacía para canal
        const cellEmpty4 = document.createElement('td');
        averageRow.appendChild(cellEmpty4);
        
        // Celda con texto del promedio que ocupa las últimas 3 columnas
        const averageCell = document.createElement('td');
        averageCell.colSpan = 3;
        averageCell.textContent = `Promedio de temporadas: ${getAverageSeasons().toFixed(0)}`;
        averageCell.style.textAlign = 'center';
        averageRow.appendChild(averageCell);
        
        this.tableBody.appendChild(averageRow);
    }

    createSerieRow(serie, rowNumber) {
        const row = document.createElement('tr');
        row.className = 'table-row-clickable';
        row.dataset.serieId = serie.getId();
        
        // Agregar evento de clic para mostrar detalle
        row.addEventListener('click', () => this.showSerieDetail(serie, row));
        
        // Número
        const cellNumber = document.createElement('td');
        cellNumber.textContent = rowNumber;
        row.appendChild(cellNumber);

        // Imagen
        const cellImage = document.createElement('td');
        const img = document.createElement('img');
        img.src = serie.getImage();
        img.alt = serie.getName();
        img.className = 'series-image';
        img.onerror = () => {
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODAgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0yMCA0MEg2MFY2MEgyMFY0MFoiIGZpbGw9IiNkZWUyZTYiLz4KPHN2Zz4K';
        };
        cellImage.appendChild(img);
        row.appendChild(cellImage);

        // Nombre
        const cellName = document.createElement('td');
        cellName.textContent = serie.getName();
        row.appendChild(cellName);

        // Canal
        const cellChannel = document.createElement('td');
        cellChannel.textContent = serie.getChannel();
        row.appendChild(cellChannel);

        // Temporadas
        const cellSeasons = document.createElement('td');
        cellSeasons.textContent = serie.getSeasons();
        row.appendChild(cellSeasons);

        // Descripción
        const cellDescription = document.createElement('td');
        const spanDescription = document.createElement('span');
        spanDescription.className = 'series-description';
        spanDescription.textContent = serie.getDescription();
        spanDescription.title = serie.getDescription();
        cellDescription.appendChild(spanDescription);
        row.appendChild(cellDescription);

        // Enlace
        const cellLink = document.createElement('td');
        const link = document.createElement('a');
        link.href = serie.getLink();
        link.target = '_blank';
        link.className = 'series-link';
        link.textContent = 'Ver más';
        // Prevenir que el clic en el enlace active el evento de la fila
        link.addEventListener('click', (e) => e.stopPropagation());
        cellLink.appendChild(link);
        row.appendChild(cellLink);

        return row;
    }

    updateStats() {
        const totalElement = document.getElementById('total-series');
        const averageElement = document.getElementById('average-seasons');

        if (totalElement) {
            totalElement.textContent = this.series.length.toString();
        }

        if (averageElement) {
            const average = getAverageSeasons();
            averageElement.textContent = average.toFixed(1);
        }
    }

    updateDate() {
        const dateElement = document.getElementById('current-date');
        if (dateElement) {
            const now = new Date();
            dateElement.textContent = now.toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }

    showSerieDetail(serie, row) {
        // Remover selección anterior
        if (this.selectedRow) {
            this.selectedRow.classList.remove('table-row-selected');
        }
        
        // Seleccionar nueva fila
        row.classList.add('table-row-selected');
        this.selectedRow = row;
        
        // Mostrar el panel de detalle
        const detailPanel = document.getElementById('series-detail');
        const detailImage = document.getElementById('detail-image');
        const detailName = document.getElementById('detail-name');
        const detailDescription = document.getElementById('detail-description');
        const detailChannel = document.getElementById('detail-channel');
        const detailSeasons = document.getElementById('detail-seasons');
        const detailLink = document.getElementById('detail-link');
        
        if (detailPanel && detailImage && detailName && detailDescription && 
            detailChannel && detailSeasons && detailLink) {
            
            // Llenar los datos
            detailImage.src = serie.getImage();
            detailImage.alt = serie.getName();
            detailImage.onerror = () => {
                detailImage.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik04MCA4MEgxMjBWMTIwSDgwVjgwWiIgZmlsbD0iI2RlZTJlNiIvPgo8L3N2Zz4K';
            };
            
            detailName.textContent = serie.getName();
            detailDescription.textContent = serie.getDescription();
            detailChannel.textContent = serie.getChannel();
            detailSeasons.textContent = serie.getSeasons();
            detailLink.href = serie.getLink();
            
            // Mostrar el panel
            detailPanel.style.display = 'block';
        }
    }
}

// Inicializar la aplicación
const app = new SeriesApp();
window.seriesApp = app;