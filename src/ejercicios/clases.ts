/**
 * Ejercicio 3: Clases en TypeScript
 * Programación Orientada a Objetos
 */

console.log('📚 Ejercicio 3: Clases');

// 1. Clase básica
class Vehiculo {
    marca: string;
    modelo: string;
    año: number;

    constructor(marca: string, modelo: string, año: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    obtenerInfo(): string {
        return `${this.marca} ${this.modelo} (${this.año})`;
    }

    acelerar(): void {
        console.log(`${this.obtenerInfo()} está acelerando`);
    }
}

const miCarro = new Vehiculo('Toyota', 'Corolla', 2022);
console.log('Mi carro:', miCarro.obtenerInfo());
miCarro.acelerar();

// 2. Herencia
class Carro extends Vehiculo {
    numeroPuertas: number;

    constructor(marca: string, modelo: string, año: number, numeroPuertas: number) {
        super(marca, modelo, año); // Llamar al constructor padre
        this.numeroPuertas = numeroPuertas;
    }

    abrirPuertas(): void {
        console.log(`Abriendo las ${this.numeroPuertas} puertas del carro`);
    }

    // Sobrescribir método padre
    acelerar(): void {
        console.log(`El carro ${this.obtenerInfo()} está acelerando suavemente`);
    }
}

const sedan = new Carro('Honda', 'Civic', 2023, 4);
console.log('Sedán:', sedan.obtenerInfo());
sedan.abrirPuertas();
sedan.acelerar();

// 3. Modificadores de acceso
class CuentaBancaria {
    public titular: string;
    private saldo: number;
    protected numeroCuenta: string;

    constructor(titular: string, saldoInicial: number) {
        this.titular = titular;
        this.saldo = saldoInicial;
        this.numeroCuenta = this.generarNumeroCuenta();
    }

    private generarNumeroCuenta(): string {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    public depositar(cantidad: number): void {
        if (cantidad > 0) {
            this.saldo += cantidad;
            console.log(`Depósito de $${cantidad}. Nuevo saldo: $${this.saldo}`);
        }
    }

    public retirar(cantidad: number): boolean {
        if (cantidad > 0 && cantidad <= this.saldo) {
            this.saldo -= cantidad;
            console.log(`Retiro de $${cantidad}. Nuevo saldo: $${this.saldo}`);
            return true;
        }
        console.log('Fondos insuficientes o cantidad inválida');
        return false;
    }

    public consultarSaldo(): number {
        return this.saldo;
    }
}

const cuenta = new CuentaBancaria('María González', 1000);
console.log('Titular:', cuenta.titular);
cuenta.depositar(500);
cuenta.retirar(200);
console.log('Saldo actual:', cuenta.consultarSaldo());

// 4. Propiedades estáticas
class Utilidades {
    static readonly PI = 3.14159;
    static version = '1.0.0';

    static calcularAreaCirculo(radio: number): number {
        return this.PI * radio * radio;
    }

    static obtenerFechaActual(): string {
        return new Date().toLocaleDateString();
    }
}

console.log('PI:', Utilidades.PI);
console.log('Área del círculo (radio 5):', Utilidades.calcularAreaCirculo(5));
console.log('Fecha actual:', Utilidades.obtenerFechaActual());

// 5. Clases abstractas
abstract class Forma {
    protected color: string;

    constructor(color: string) {
        this.color = color;
    }

    abstract calcularArea(): number;

    obtenerColor(): string {
        return this.color;
    }
}

class Rectangulo extends Forma {
    private ancho: number;
    private alto: number;

    constructor(color: string, ancho: number, alto: number) {
        super(color);
        this.ancho = ancho;
        this.alto = alto;
    }

    calcularArea(): number {
        return this.ancho * this.alto;
    }
}

class Circulo extends Forma {
    private radio: number;

    constructor(color: string, radio: number) {
        super(color);
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}

const rectangulo = new Rectangulo('azul', 10, 5);
const circulo = new Circulo('rojo', 3);

console.log(`Rectángulo ${rectangulo.obtenerColor()}: área = ${rectangulo.calcularArea()}`);
console.log(`Círculo ${circulo.obtenerColor()}: área = ${circulo.calcularArea().toFixed(2)}`);

// 6. Implementación de interfaces
interface Volador {
    volar(): void;
    aterrizar(): void;
}

interface Nadador {
    nadar(): void;
}

class Pato implements Volador, Nadador {
    nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    volar(): void {
        console.log(`${this.nombre} está volando`);
    }

    aterrizar(): void {
        console.log(`${this.nombre} ha aterizado`);
    }

    nadar(): void {
        console.log(`${this.nombre} está nadando`);
    }
}

const pato = new Pato('Donald');
pato.volar();
pato.nadar();
pato.aterrizar();

// 7. Getters y Setters
class Temperatura {
    private _celsius: number = 0;

    get celsius(): number {
        return this._celsius;
    }

    set celsius(value: number) {
        if (value < -273.15) {
            throw new Error('La temperatura no puede ser menor al cero absoluto');
        }
        this._celsius = value;
    }

    get fahrenheit(): number {
        return (this._celsius * 9/5) + 32;
    }

    set fahrenheit(value: number) {
        this.celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperatura();
temp.celsius = 25;
console.log(`${temp.celsius}°C = ${temp.fahrenheit.toFixed(1)}°F`);

temp.fahrenheit = 100;
console.log(`${temp.fahrenheit}°F = ${temp.celsius.toFixed(1)}°C`);

console.log('✅ Ejercicio 3 completado\n');