# Fullstack User Management System

## Descripción
Este proyecto es una aplicación Fullstack desarrollada con el stack **MEAN**:
- **MySQL** como base de datos relacional.
- **Express** para la creación del backend con Node.js.
- **Angular** para el frontend interactivo.
- **Node.js** como servidor principal.

El propósito principal de este proyecto es implementar un sistema de autenticación y gestión de usuarios con funcionalidades avanzadas, asegurando buenas prácticas de desarrollo, seguridad y organización del código.

---

## Funcionalidades principales

### **Autenticación y Autorización:**
- Implementación de JWT (JSON Web Tokens) almacenados en **cookies** para la autenticación segura.
- Autenticación basada en **BehaviorSubject** para gestionar el estado del usuario en el frontend.
- Rutas protegidas mediante middlewares en el backend para verificar:
  - Si el usuario está autenticado.
  - Si el usuario tiene permisos de administrador o es un usuario regular.

### **Gestión de Usuarios (CRUD):**
- Crear, leer, actualizar y eliminar usuarios.
- Formularios reactivos con **Angular** para la creación y edición de usuarios.

### **Buenas Prácticas de Desarrollo:**
- **Manejo de errores:** Middleware global para manejar excepciones y enviar respuestas claras al cliente.
- **Código limpio:** Organización del backend en el patrón **MVC (Model-View-Controller)**.
- **Patrón Singleton:** Utilizado para servicios compartidos tanto en el frontend como en el backend.

### **Seguridad:**
- Cookies configuradas con seguridad para evitar vulnerabilidades.
- Protección de rutas en el frontend con **guards** para asegurar la navegación adecuada.

### **Otras características:**
- Programación reactiva en el frontend con **RxJS**.
- Manejo eficiente del estado de los formularios en Angular.

---

## Tecnologías utilizadas

### Backend
- **Node.js**
- **Express.js**
- **MySQL** con TypeORM

### Frontend
- **Angular**
- **RxJS**

---
