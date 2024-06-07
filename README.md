# NebulaTask

Este proyecto es una aplicación de gestión de proyectos que permite a los usuarios crear, organizar y colaborar en proyectos. Proporciona funcionalidades como tableros Kanban, gestión de tareas, asignación de tareas, notificaciones en tiempo real y más.

## Estructura del Proyecto

```
project-management-app
├── client
│   ├── public
│   │   └── index.html
│   ├── src
│   │   ├── components
│   │   │   ├── Auth
│   │   │   │   ├── Login.js
│   │   │   │   └── Register.js
│   │   │   ├── Dashboard
│   │   │   │   └── Dashboard.js
│   │   │   ├── Kanban
│   │   │   │   └── Board.js
│   │   │   ├── Project
│   │   │   │   ├── ProjectList.js
│   │   │   │   └── ProjectDetails.js
│   │   │   ├── Task
│   │   │   │   └── Task.js
│   │   │   └── Team
│   │   │       └── TeamManagement.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── redux
│   │       ├── actions
│   │       │   └── index.js
│   │       ├── reducers
│   │       │   └── index.js
│   │       └── store.js
│   └── package.json
├── server
│   ├── config
│   │   └── config.js
│   ├── controllers
│   │   ├── authController.js
│   │   ├── projectController.js
│   │   ├── taskController.js
│   │   └── userController.js
│   ├── models
│   │   ├── Project.js
│   │   ├── Task.js
│   │   ├── User.js
│   │   └── Team.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   ├── projectRoutes.js
│   │   ├── taskRoutes.js
│   │   └── userRoutes.js
│   ├── app.js
│   └── package.json
└── README.md
```

## Funcionalidades

- Registro e Inicio de Sesión: Los usuarios pueden registrarse y acceder a la aplicación.
- Gestión de Proyectos: Crear, ver, editar y eliminar proyectos.
- Tableros Kanban: Organizar tareas en tableros con listas y tarjetas.
- Gestión de Tareas: Añadir, editar, eliminar y mover tareas dentro de un proyecto.
- Asignación de Tareas: Asignar tareas a diferentes miembros del equipo.
- Notificaciones: Enviar notificaciones en tiempo real sobre cambios en proyectos o tareas asignadas.
- Comentarios en las Tareas: Comentar en las tareas para colaborar con el equipo.
- Vista de Calendario: Ver tareas y proyectos en una vista de calendario.
- Gestión de Usuarios y Equipos: Crear y gestionar equipos, asignar roles a los miembros.
- Panel de Administración: Un panel para administradores para gestionar usuarios y proyectos.

## Tecnologías Utilizadas

### Frontend

- Framework: React
- Estado Global: Redux o Context API
- Estilos: CSS-in-JS con Styled Components o CSS Modules
- Interacciones Drag and Drop: React DnD
- Calendario: FullCalendar

### Backend

- Servidor: Node.js con Express
- Autenticación: Firebase Authentication o JWT
- Notificaciones en Tiempo Real: WebSockets (por ejemplo, Socket.io)

### Base de Datos

- Elección: PostgreSQL
- ORM: Sequelize o TypeORM

## Instalación

1. Clona el repositorio: `git clone https://github.com/tu-usuario/project-management-app.git`
2. Navega al directorio del cliente: `cd project-management-app/client`
3. Instala las dependencias del cliente: `npm install`
4. Navega al directorio del servidor: `cd ../server`
5. Instala las dependencias del servidor: `npm install`
6. Configura la base de datos y otras variables de entorno en `server/config/config.js`
7. Inicia el cliente y el servidor: `npm run dev`

¡La aplicación de gestión de proyectos está lista para usar!

## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Crea un fork del repositorio
2. Crea una rama para tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`
3. Realiza los cambios necesarios y realiza commit: `git commit -m "Agregar nueva funcionalidad"`
4. Envía tus cambios al repositorio remoto: `git push origin nueva-funcionalidad`
5. Abre un pull request en GitHub

¡Gracias por contribuir!

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.