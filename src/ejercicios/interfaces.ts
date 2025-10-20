/**
 * Ejercicio 2: Interfaces en TypeScript
 * Definición de contratos para objetos
 */

console.log('📚 Ejercicio 2: Interfaces');

// 1. Interface básica
interface Persona {
    nombre: string;
    apellido: string;
    edad: number;
    email?: string; // Propiedad opcional
}

// Implementando la interface
const estudiante: Persona = {
    nombre: 'Ana',
    apellido: 'García',
    edad: 22,
    email: 'ana@universidad.edu'
};

const profesor: Persona = {
    nombre: 'Dr. Roberto',
    apellido: 'Martínez',
    edad: 45
};

console.log('Estudiante:', estudiante);
console.log('Profesor:', profesor);

// 2. Interface con métodos
interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

const miCalculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => b !== 0 ? a / b : 0
};

console.log('Suma 5 + 3 =', miCalculadora.sumar(5, 3));
console.log('División 10 / 2 =', miCalculadora.dividir(10, 2));

// 3. Interface que extiende otra interface
interface Animal {
    nombre: string;
    especie: string;
}

interface Mascota extends Animal {
    dueño: string;
    vacunado: boolean;
}

const miPerro: Mascota = {
    nombre: 'Rex',
    especie: 'Canino',
    dueño: 'Juan',
    vacunado: true
};

console.log('Mi perro:', miPerro);

// 4. Interface con propiedades readonly
interface Configuracion {
    readonly version: string;
    readonly autor: string;
    debug: boolean;
}

const config: Configuracion = {
    version: '1.0.0',
    autor: 'Desarrollador',
    debug: true
};

// config.version = '2.0.0'; // Error: Cannot assign to 'version' because it is a read-only property
config.debug = false; // Esto sí se puede cambiar

console.log('Configuración:', config);

// 5. Interface con índice signature
interface Diccionario {
    [key: string]: string;
}

const traducciones: Diccionario = {
    'hola': 'hello',
    'adiós': 'goodbye',
    'gracias': 'thank you'
};

console.log('Traducciones:', traducciones);
console.log('Hola en inglés:', traducciones['hola']);

// 6. Interface para funciones
interface FuncionSaludo {
    (nombre: string, apellido: string): string;
}

const saludar: FuncionSaludo = (nombre, apellido) => {
    return `¡Hola ${nombre} ${apellido}!`;
};

console.log(saludar('Carlos', 'López'));

// 7. Interface híbrida (objeto con propiedades y métodos)
interface Contador {
    (inicio: number): string;
    intervalo: number;
    reset(): void;
}

function crearContador(): Contador {
    let contador = function(inicio: number) {
        return `Contando desde ${inicio}`;
    } as Contador;
    
    contador.intervalo = 1000;
    contador.reset = function() {
        console.log('Contador reiniciado');
    };
    
    return contador;
}

const miContador = crearContador();
console.log(miContador(10));
console.log('Intervalo:', miContador.intervalo);
miContador.reset();

console.log('✅ Ejercicio 2 completado\n');