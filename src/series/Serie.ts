/**
 * Clase Serie para gestionar datos de series de televisión
 * Contiene todos los atributos necesarios para manejar información de series
 */
export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    link: string;
    image: string;

    constructor(
        id: number,
        name: string,
        channel: string,
        seasons: number,
        description: string,
        link: string,
        image: string
    ) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.image = image;
    }

    /**
     * Obtiene el nombre de la serie
     */
    getName(): string {
        return this.name;
    }

    /**
     * Obtiene el canal de la serie
     */
    getChannel(): string {
        return this.channel;
    }

    /**
     * Obtiene el número de temporadas
     */
    getSeasons(): number {
        return this.seasons;
    }

    /**
     * Obtiene la descripción de la serie
     */
    getDescription(): string {
        return this.description;
    }

    /**
     * Obtiene el enlace de la serie
     */
    getLink(): string {
        return this.link;
    }

    /**
     * Obtiene la URL de la imagen
     */
    getImage(): string {
        return this.image;
    }

    /**
     * Obtiene el ID de la serie
     */
    getId(): number {
        return this.id;
    }

    /**
     * Actualiza el nombre de la serie
     */
    setName(name: string): void {
        this.name = name;
    }

    /**
     * Actualiza el canal de la serie
     */
    setChannel(channel: string): void {
        this.channel = channel;
    }

    /**
     * Actualiza el número de temporadas
     */
    setSeasons(seasons: number): void {
        this.seasons = seasons;
    }

    /**
     * Actualiza la descripción
     */
    setDescription(description: string): void {
        this.description = description;
    }

    /**
     * Actualiza el enlace
     */
    setLink(link: string): void {
        this.link = link;
    }

    /**
     * Actualiza la imagen
     */
    setImage(image: string): void {
        this.image = image;
    }

    /**
     * Devuelve una representación en string de la serie
     */
    toString(): string {
        return `${this.name} (${this.channel}) - ${this.seasons} temporadas`;
    }

    /**
     * Convierte la serie a un objeto plano
     */
    toJSON(): object {
        return {
            id: this.id,
            name: this.name,
            channel: this.channel,
            seasons: this.seasons,
            description: this.description,
            link: this.link,
            image: this.image
        };
    }
}