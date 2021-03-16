# Prueba tecnica para Elenas

## Requerimientos
- NodeJs 10 o superior
- Npm 6 o superior

### Dependencias
```
"dependencies": {
    "@apollo/client": "^3.3.11",
    "@react-native-async-storage/async-storage": "^1.14.1",
    "@testing-library/jest-dom": "^5.11.9",
    "@testing-library/react": "^11.2.5",
    "@testing-library/user-event": "^12.8.3",
    "babel-polyfill": "^6.26.0",
    "cross-fetch": "^3.1.0",
    "graphql": "^15.5.0",
    "prop-types": "^15.7.2",
    "react": "^17.0.1",
    "react-dom": "^17.0.1",
    "react-native-web": "^0.15.0",
    "react-router-dom": "^5.2.0",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.1"
  },
```

### Dependencias de desarrollo
```
"devDependencies": {
    "@babel/plugin-transform-runtime": "^7.13.10",
    "@babel/preset-env": "^7.13.10",
    "@babel/preset-react": "^7.12.13",
    "@testing-library/react-hooks": "^5.1.0",
    "babel-jest": "^26.6.3",
    "enzyme": "^3.11.0",
    "enzyme-adapter-react-16": "^1.15.6",
    "enzyme-to-json": "^3.6.1",
    "jest": "^26.6.0",
    "react-docgen": "^5.3.1",
    "react-test-renderer": "^17.0.1"
  },
```

## Instalacion
```
npm i
```

### Tests
```
npm test
```

### Estructura de archivos
El presente repositorio se divide en 2 modulos:

- Kernel
- v1

### Kernel
Compone la logica de negocios necesaria para el correcto funcionamiento de la aplicacion, este modulo puede ser exportable a cualquier aplicacion mediante el sistemas de submodulos de Git.

#### Estructura de archivos
- config: Se compone de la configuracion del cliente de apollo para conectarse con la DB graphQl remoto, ademas cuenta de un objeto Singleton para almacenar los hooks de los contextos.
- contexts: Se compone del contexto para el usuario que hace uso de la sesion.
- gql: Se compone de las mutaciones, queries y fragmentos para consultar la DB graphql.
- hooks: Se compone de los hooks necesarios para el funcionamiento de la aplicacion.
- kernel: Se compone del componente de orden susperior, que puede encapsular las aplicaciones y proporcionar el acceso al sistema de login, consultas a la DB graphQl.

### v1
Compone los componentes graficos de la aplicacion, utilizando react-native-web y react-router como sistema de navegacion.

#### Estructura de archivos
- components: Se compone de los componentes que pueden ser reutilizables.
- hooks: Se compone de los hooks necesarios para el funcionamiento de los componentes.
- navigation: Se compone del sistema de navegacion y la proteccion de rutas.
- resources: Se compone de la paleta de colores y tamaños de fuentes.
- scenes: Se compone de los componentes que son considerados escenas, capaces de iniciar sesion, crear, editar clientes.

## Testing
El presente repositorio cuenta con un set de testeo para componentes graficos y ganchos, mediante jest, enzime y @testing-library/react-hooks, ademas puede generar un reporte de la cantidad de codigo que ha sido testeado.

Test Suites: 12

Tests: 59

Snapshots: 34