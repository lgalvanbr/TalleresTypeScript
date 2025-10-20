# Estructura del Proyecto - Gestor de Series

## Organización de Carpetas

```
TalleresTypeScript/
├── public/                    # Archivos públicos para el navegador
│   ├── index.html            # Página principal (antes Taller1y2LuisGalvan.html)
│   ├── css/                  # Estilos CSS (para futuras hojas de estilo)
│   └── js/
│       └── series-app.js     # Aplicación JavaScript compilada
├── src/                      # Código fuente TypeScript
│   ├── index.ts
│   ├── ejercicios/
│   └── series/
│       ├── data.ts           # Datos de las series
│       ├── Serie.ts          # Clase Serie
│       └── SeriesApp.ts      # Aplicación principal
├── assets/                   # Recursos estáticos
│   └── images/               # Imágenes de las series
│       └── A_Very_English_Scandal.png
├── docs/                     # Documentación
│   ├── tallertypescrip1.pdf # Documento original del taller
│   └── ESTRUCTURA_PROYECTO.md # Este archivo
├── dist/                     # Archivos TypeScript compilados
└── node_modules/             # Dependencias de Node.js
```

# Estructura del Proyecto - Gestor de Series

## Organización de Carpetas

```
TalleresTypeScript/
├── Taller1y2LuisGalvan.html  # Página principal del proyecto
├── public/                   # Archivos públicos para el navegador
│   ├── css/                  # Estilos CSS (para futuras hojas de estilo)
│   └── js/
│       └── series-app.js     # Aplicación JavaScript compilada
├── src/                      # Código fuente TypeScript
│   ├── index.ts
│   ├── ejercicios/
│   └── series/
│       ├── data.ts           # Datos de las series
│       ├── Serie.ts          # Clase Serie
│       └── SeriesApp.ts      # Aplicación principal
├── assets/                   # Recursos estáticos
│   └── images/               # Imágenes de las series
│       └── A_Very_English_Scandal.png
├── docs/                     # Documentación
│   ├── tallertypescrip1.pdf # Documento original del taller
│   └── ESTRUCTURA_PROYECTO.md # Este archivo
├── dist/                     # Archivos TypeScript compilados
└── node_modules/             # Dependencias de Node.js
```

## Archivos Principales

- **Taller1y2LuisGalvan.html**: Página web principal del gestor de series (en la raíz)
- **public/js/series-app.js**: Aplicación JavaScript que maneja la lógica de las series
- **src/series/data.ts**: Datos de las series en TypeScript
- **assets/images/**: Imágenes locales de las series

## Cómo usar

1. Abrir `Taller1y2LuisGalvan.html` en un navegador
2. Para desarrollo: modificar archivos en `src/` y ejecutar `npm run build`
3. Para añadir nuevas imágenes: colocarlas en `assets/images/`

## Series Incluidas

1. Breaking Bad (AMC, 5 temporadas)
2. Orange is the New Black (Netflix, 6 temporadas)
3. Game of Thrones (HBO, 7 temporadas)
4. The Big Bang Theory (CBS, 12 temporadas)
5. Sherlock (BBC, 4 temporadas)
6. A Very English Scandal (BBC, 2 temporadas)
7. The Boys (Amazon Prime Video, 4 temporadas)