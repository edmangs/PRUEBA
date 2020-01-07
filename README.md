# PRUEBA
PRUEBA TÉCNICA

**Aplicación de backend(Java) y frontend(Angular 7)** 

En el proyecto se encuentran creadas dos carpetas que son las siguientes: 

1. BACKEND_JAVA: Contiene toda la lógica de negocio y hace los procesos de almacenamiento en la **BD**, 
desarrollado con **spring boot tools** versión 2.2.2
2. FRONTEND-ANGULAR: Hace toda la interacción con el usuario, desarrollado con la versión de **Angular 7**

**Base de datos**:

Se adjunta una copia de la base de datos para **MYSQL** que se encuentra en la carpeta: **SQL**, 
la cual contiene un archivo con el nombre **backup.sql**.

**Despliegue backend**:

1. Es necesario abrir la aplicación con el ID de **Spring Tool Suite4**
2. Se debe usar el ID para poner a correr el servidor.
3. Configurar el archivo **application.properties**, para establecer la conexión a la base de datos.
3. En caso de no estar creada la base de datos, el ID la genera de forma automática.
4. Al iniciar el servidor se podrá acceder a la siguiente ruta: http://localhost:8080/swagger-ui.html#/, 
en la cual podrá ver la información de los APIS que posee la aplicación.

**Despliegue frontend**:

1. Ingrese en la carpeta **FRONTEND-ANGULAR**, desde una terminal.
2. Ejecuta el siguiente comando npm install, esto instalara todas la librerías necesarias para la aplicación.
3. Inicie el servicio con el siguiente comando: **ng serve -o**.
4. Al iniciar el servidor se podrá navegar por la aplicación desde la siguiente url: http://localhost:4200/.
5. La aplicacón posee 2 enlaces, uno para crear mecánicos y otro para generar mantenimientos que depende de los mecanicos creados.
