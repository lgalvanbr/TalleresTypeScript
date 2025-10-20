/**
 * Ejercicio 1: Tipos Básicos en TypeScript
 * Aquí aprenderemos los tipos fundamentales
 */

console.log('📚 Ejercicio 1: Tipos Básicos');

// 1. Tipos primitivos
let nombre: string = 'Juan Pérez';
let edad: number = 25;
let esEstudiante: boolean = true;
let indefinido: undefined = undefined;
let nulo: null = null;

console.log(`Nombre: ${nombre}, Edad: ${edad}, Es estudiante: ${esEstudiante}`);

// 2. Arrays
let numeros: number[] = [1, 2, 3, 4, 5];
let frutas: Array<string> = ['manzana', 'pera', 'uva'];

console.log('Números:', numeros);
console.log('Frutas:', frutas);

// 3. Tuplas
let persona: [string, number] = ['Ana García', 30];
let coordenadas: [number, number, number] = [10.5, 20.3, 15.8];

console.log('Persona:', persona);
console.log('Coordenadas:', coordenadas);

// 4. Enum
enum Color {
    Rojo = 'rojo',
    Verde = 'verde',
    Azul = 'azul'
}

enum DiaSemana {
    Lunes = 1,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo
}

let colorFavorito: Color = Color.Azul;
let hoy: DiaSemana = DiaSemana.Martes;

console.log(`Color favorito: ${colorFavorito}`);
console.log(`Hoy es día ${hoy} de la semana`);

// 5. Any (usar con precaución)
let variable: any = 'Hola';
variable = 42;
variable = true;

console.log('Variable any:', variable);

// 6. Union Types
let id: string | number;
id = 'ABC123';
console.log('ID como string:', id);
id = 456;
console.log('ID como number:', id);

// 7. Literal Types
type TipoBoton = 'primary' | 'secondary' | 'danger';
let tipoBoton: TipoBoton = 'primary';

type Tamaño = 'small' | 'medium' | 'large';
let tamaño: Tamaño = 'medium';

console.log(`Botón tipo: ${tipoBoton}, tamaño: ${tamaño}`);

// 8. Type Aliases
type Usuario = {
    nombre: string;
    email: string;
    edad?: number; // Propiedad opcional
};

let usuario1: Usuario = {
    nombre: 'María López',
    email: 'maria@email.com'
};

let usuario2: Usuario = {
    nombre: 'Carlos Ruiz',
    email: 'carlos@email.com',
    edad: 28
};

console.log('Usuario 1:', usuario1);
console.log('Usuario 2:', usuario2);

console.log('✅ Ejercicio 1 completado\n');