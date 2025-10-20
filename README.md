# Taller de TypeScript - Gestión de Series de Televisión

## 📋 Descripción

Este taller práctico de TypeScript implementa un sistema completo de gestión de series de televisión con una interfaz web interactiva usando Bootstrap.

## 🚀 Características

- **Clase Serie**: Modelo de datos con todos los atributos necesarios
- **Gestión de Datos**: Sistema para manejar series con funciones de búsqueda y estadísticas
- **Interfaz Web**: Tabla responsive con Bootstrap que muestra las series
- **Detalle Interactivo**: Panel lateral que muestra información completa al hacer clic
- **Promedio de Temporadas**: Resumen estadístico al final de la tabla

## 📁 Estructura del Proyecto

```
TalleresTypeScript/
├── src/
│   ├── ejercicios/
│   │   ├── tipos-basicos.ts      # Ejercicio 1: Tipos fundamentales
│   │   ├── interfaces.ts         # Ejercicio 2: Interfaces y contratos
│   │   ├── clases.ts            # Ejercicio 3: Clases y OOP
│   │   └── gestion-series.ts    # Ejercicio principal: Sistema de series
│   ├── series/
│   │   ├── Serie.ts             # Clase principal del modelo
│   │   ├── data.ts              # Datos y funciones utilitarias
│   │   └── SeriesApp.ts         # Lógica de la aplicación web
│   └── index.ts                 # Archivo principal del taller
├── dist/                        # Archivos JavaScript compilados
├── index.html                   # Interfaz web con Bootstrap
├── series-app.js               # Aplicación lista para el navegador
├── package.json
├── tsconfig.json
└── README.md
```

## 🛠️ Instalación y Uso

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar ejercicios en consola:**
   ```bash
   npm run dev
   ```

3. **Compilar TypeScript:**
   ```bash
   npm run build
   ```

4. **Ver interfaz web:**
   - Abre `index.html` en tu navegador
   - O usa un servidor local: `python -m http.server 3000`

## 📺 Funcionalidades de la Interfaz Web

### Tabla Principal
- Lista todas las series con: imagen, nombre, canal, temporadas, descripción, enlace
- Filas clicables con efecto hover
- Promedio de temporadas al final

### Panel de Detalle
- Se activa al hacer clic en cualquier serie
- Muestra imagen ampliada
- Información completa de la serie
- Enlace directo a más información

### Diseño Responsive
- Compatible con dispositivos móviles
- Tabla responsiva con scroll horizontal
- Layout de dos columnas (tabla + detalle)

## 💻 Tecnologías Utilizadas

- **TypeScript 5.0.0**: Lenguaje principal
- **Bootstrap 4.5.2**: Framework CSS
- **HTML5**: Estructura de la interfaz
- **Node.js**: Entorno de desarrollo

## 📊 Datos de Ejemplo

El sistema incluye 6 series predefinidas:
1. Breaking Bad (AMC, 5 temporadas)
2. Orange is the New Black (Netflix, 6 temporadas)
3. Game of Thrones (HBO, 7 temporadas)
4. The Big Bang Theory (CBS, 12 temporadas)
5. Sherlock (BBC, 4 temporadas)
6. A Very English Scandal (BBC, 2 temporadas)

**Promedio de temporadas: 6.0**

## 🎯 Objetivos del Taller

- [x] **Ciclo 1**: Clase Serie (20%) + datos (20%) + tabla Bootstrap (25%)
- [x] **Ciclo 2**: Funcionalidad de detalle con Card de Bootstrap
- [x] **Ejercicios TypeScript**: Tipos, interfaces, clases
- [x] **Interfaz completa**: Web responsiva y funcional

## 🚀 Comandos Disponibles

```bash
npm run dev     # Ejecutar ejercicios con ts-node
npm run build   # Compilar TypeScript a JavaScript
npm test        # Ejecutar pruebas (si las hay)
```
