/**
 * Aplicación principal para gestionar series de televisión
 * Maneja la interfaz de usuario y la interacción con los datos
 */

import { Serie } from './Serie';
import { getAllSeries, getAverageSeasons } from './data';

export class SeriesApp {
    private series: Serie[];
    private tableBody: HTMLElement | null;

    constructor() {
        this.series = getAllSeries();
        this.tableBody = null;
        this.init();
    }

    /**
     * Inicializa la aplicación
     */
    private init(): void {
        // Esperar a que el DOM esté cargado
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupApp());
        } else {
            this.setupApp();
        }
    }

    /**
     * Configura la aplicación una vez que el DOM está listo
     */
    private setupApp(): void {
        this.tableBody = document.getElementById('series-table-body');
        
        if (this.tableBody) {
            this.renderTable();
            this.updateStats();
            this.updateDate();
        } else {
            console.error('No se pudo encontrar el elemento de la tabla');
        }
    }

    /**
     * Renderiza la tabla de series
     */
    private renderTable(): void {
        if (!this.tableBody) return;

        // Limpiar tabla existente
        this.tableBody.innerHTML = '';

        // Generar filas para cada serie
        this.series.forEach((serie, index) => {
            const row = this.createSerieRow(serie, index + 1);
            this.tableBody!.appendChild(row);
        });
    }

    /**
     * Crea una fila de la tabla para una serie
     */
    private createSerieRow(serie: Serie, rowNumber: number): HTMLTableRowElement {
        const row = document.createElement('tr');
        
        // Crear celdas
        const cells = [
            this.createCell(rowNumber.toString()),
            this.createImageCell(serie.getImage(), serie.getName()),
            this.createCell(serie.getName()),
            this.createCell(serie.getChannel()),
            this.createCell(serie.getSeasons().toString()),
            this.createDescriptionCell(serie.getDescription()),
            this.createLinkCell(serie.getLink(), serie.getName())
        ];

        // Agregar celdas a la fila
        cells.forEach(cell => row.appendChild(cell));

        return row;
    }

    /**
     * Crea una celda simple
     */
    private createCell(content: string): HTMLTableCellElement {
        const cell = document.createElement('td');
        cell.textContent = content;
        return cell;
    }

    /**
     * Crea una celda con imagen
     */
    private createImageCell(imageUrl: string, altText: string): HTMLTableCellElement {
        const cell = document.createElement('td');
        const img = document.createElement('img');
        
        img.src = imageUrl;
        img.alt = altText;
        img.className = 'series-image';
        img.onerror = () => {
            // Si la imagen no carga, mostrar un placeholder
            img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgODAgMTAwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iMTAwIiBmaWxsPSIjZjhmOWZhIi8+CjxwYXRoIGQ9Ik0yMCA0MEg2MFY2MEgyMFY0MFoiIGZpbGw9IiNkZWUyZTYiLz4KPHN2Zz4K';
        };
        
        cell.appendChild(img);
        return cell;
    }

    /**
     * Crea una celda con descripción truncada
     */
    private createDescriptionCell(description: string): HTMLTableCellElement {
        const cell = document.createElement('td');
        const span = document.createElement('span');
        
        span.className = 'series-description';
        span.textContent = description;
        span.title = description; // Tooltip con el texto completo
        
        cell.appendChild(span);
        return cell;
    }

    /**
     * Crea una celda con enlace
     */
    private createLinkCell(url: string, seriesName: string): HTMLTableCellElement {
        const cell = document.createElement('td');
        const link = document.createElement('a');
        
        link.href = url;
        link.target = '_blank';
        link.className = 'series-link';
        link.textContent = 'Ver más';
        link.title = `Ver más información sobre ${seriesName}`;
        
        cell.appendChild(link);
        return cell;
    }

    /**
     * Actualiza las estadísticas
     */
    private updateStats(): void {
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

    /**
     * Actualiza la fecha actual
     */
    private updateDate(): void {
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

    /**
     * Obtiene todas las series
     */
    public getSeries(): Serie[] {
        return this.series;
    }

    /**
     * Busca series por nombre
     */
    public searchSeriesByName(searchTerm: string): Serie[] {
        return this.series.filter(serie => 
            serie.getName().toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    /**
     * Filtra series por canal
     */
    public filterSeriesByChannel(channel: string): Serie[] {
        return this.series.filter(serie => 
            serie.getChannel().toLowerCase() === channel.toLowerCase()
        );
    }

    /**
     * Ordena series por número de temporadas
     */
    public sortSeriesBySeasons(ascending: boolean = true): Serie[] {
        return this.series.sort((a, b) => {
            const diff = a.getSeasons() - b.getSeasons();
            return ascending ? diff : -diff;
        });
    }
}

// Inicializar la aplicación cuando se carga el script
const app = new SeriesApp();

// Exportar para uso global si es necesario
(window as any).SeriesApp = SeriesApp;
(window as any).seriesApp = app;