# Cadaver Exquisito API

## Descripción
API REST para la gestión de un juego de Cadáver Exquisito, un método creativo colaborativo que permite crear historias o frases de manera colectiva.

## Requisitos Previos
- Node.js (versión 12.0 o superior)
- npm (gestor de paquetes de Node.js)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/cadaver-exquisito-api.git
cd cadaver-exquisito-api
```
2. Instalar dependencias:
```bash
npm install
```
## Uso
1. Iniciar el servidor
```bash
npm start
```
2. Ejecutar tests
```bash
npm test
```
## Endpoints API
- POST /words - Agregar una nueva palabra
- GET /phrase - Obtener frase generada

## Estructura de Proyecto

cadaver-exquisito-api/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   └── test/
├── node_modules/
├── package.json
├── package-lock.json
└── README.md

## Tests
El proyecto incluye tests unitarios utilizando Jest. Los tests cubren:

- Agregar palabras válidas
- Validación de palabras inválidas
- Generación de frases
