# 🐾 VetCitas — Vet Appointment Manager

![Vue](https://img.shields.io/badge/Vue-3-42b883?logo=vue.js)
![Quasar](https://img.shields.io/badge/Quasar-Framework-1976D2?logo=quasar)
![Node](https://img.shields.io/badge/Node.js-18-339933?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-000000?logo=express)
![License](https://img.shields.io/badge/license-MIT-green)

---

## 📌 Descripción

**VetCitas** es una aplicación full-stack para la gestión de citas veterinarias.  
Permite crear, listar y administrar citas de manera eficiente, incorporando validaciones de horarios y estados en tiempo real.

Este proyecto demuestra el desarrollo de una arquitectura cliente-servidor utilizando una API REST y una interfaz moderna.

---

## 🚀 Funcionalidades

- 📅 Crear citas veterinarias
- 📋 Listar citas en una tabla interactiva
- 🔄 Cambiar estado: **pendiente → atendida**
- 🔍 Filtrar citas por fecha
- ⛔ Validación de horarios (evita duplicados)
- 🎨 Indicadores visuales de estado

---

## 🧱 Tecnologías

### Frontend

- Vue 3
- Quasar Framework
- Axios

### Backend

- Node.js
- Express.js

---

## 🖼️ Screenshots

### 📊 Dashboard

![Dashboard](./screenshots/dashboard.png)

### ➕ Crear Cita

![Crear Cita](./screenshots/form.png)

### 📋 Listado de Citas

![Listado](./screenshots/table.png)

> ⚠️ Crea un.a carpeta `/screenshots` y agrega tus imágenes aquí para que se vean en GitHub.

---

## ⚙️ Instalación

### 🔹 Backend

```bash
cd backend
npm install
npm run dev
```

### 🔹 Frontend

```bash
cd frontend
npm install
quasar dev
```

---

## 🔌 API Endpoints

| Método | Endpoint      | Descripción          |
| ------ | ------------- | -------------------- |
| GET    | /citas        | Listar citas         |
| POST   | /citas        | Crear cita           |
| PUT    | /citas/:id    | Marcar como atendida |
| GET    | /citas?fecha= | Filtrar por fecha    |

---

## 📈 Mejoras futuras

- 🔐 Autenticación (JWT)
- 🗄️ Base de datos (MongoDB / MySQL)
- 📊 Dashboard con métricas
- 📱 Responsive mejorado

---

## 👥 Equipo

- **Giselle Cifuentes** — Frontend & Backend
- **Teresa Barrios** — Frontend, Backend & QA

---

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
