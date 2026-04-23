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

---

---

# 🚀 Ayuda memoria GitFlow

## 🔹 Ramas principales

- **main** → rama de producción / estable
- **develop** → rama de integración / pre-producción

## 🔹 Nomenclatura ramas de trabajo

Cada rama de desarrollo debe crearse desde **develop** con el formato:

```
<iniciales>-<código-JIRA>
```

**Ejemplo:**

```
AB-JIRA-123
```

---

## 📌 Comandos básicos

### 1. Clonar el repositorio

```bash
git clone <url-del-repo>
cd <nombre-del-repo>
```

### 2. Ver ramas disponibles

```bash
git branch        # ramas locales
git branch -r     # ramas remotas
```

### 3. Cambiar a develop

```bash
git checkout develop
git pull origin develop
```

### 4. Crear una nueva rama desde develop

```bash
git checkout develop
git pull origin develop   # asegúrate de estar actualizado
git checkout -b <iniciales>-<código-JIRA>
git push -u origin <iniciales>-<código-JIRA>
```

**Ejemplo:**

```bash
git checkout -b AB-JIRA-123
git push -u origin AB-JIRA-123
```

---

## 📌 Trabajo en la rama

### 5. Ver estado de cambios

```bash
git status
```

### 6. Agregar archivos al staging

```bash
git add <archivo>   # archivo específico
git add .           # todos los cambios
```

### 7. Confirmar cambios

```bash
git commit -m "JIRA123: descripción breve del cambio"
```

---

## 📌 Sincronización con develop

### 8. Traer últimos cambios de develop

```bash
git checkout develop
git pull origin develop
git checkout <iniciales>-<código-JIRA>
git merge develop
```

(O con rebase si el equipo lo prefiere):

```bash
git fetch origin
git rebase origin/develop
```

---

## 📌 Publicar cambios

### 9. Subir cambios de tu rama

```bash
git push
```

### 10. Crear Pull Request (PR)

Desde la plataforma (GitHub, GitLab, Bitbucket).  
**Merge de tu rama → develop.**

---

## 📌 Limpieza

### 11. Eliminar rama local (cuando el PR ya está mergeado)

```bash
git branch -d <iniciales>-<código-JIRA>
```

### 12. Eliminar rama remota

```bash
git push origin --delete <iniciales>-<código-JIRA>
```

---

### ⚠️ En caso de emergencias ("cagazos")

En el caso de que se suban cambios a develop o incluso a main, y esos cambios rompan algo esencial en el proyecto, se recomienda actuar de la siguiente manera:

#### 1. Identificar el commit problemático

Usa git log o la vista de historial en la plataforma (GitHub/GitLab) para encontrar el commit que introdujo el error.

#### 2. Revertir el commit

Si es un único commit:

```bash
git revert <id-del-commit>
```

Esto crea un nuevo commit que deshace los cambios del anterior.

Si es un conjunto de commits, se puede revertir un rango o evaluar un git reset (con mucho cuidado y en coordinación con el equipo).

#### 3. Comunicación inmediata

Avisar al equipo para que nadie siga trabajando sobre la base rota.

#### 4. Subir la corrección a la rama afectada

Hacer git push después del revert y, si corresponde, abrir un PR de urgencia.

#### 5. Registrar el incidente

Documentar qué pasó, cómo se resolvió y cómo prevenirlo a futuro.

---

✅ **Con este flujo:**

- Se trabaja siempre desde **develop**.
- Se crean ramas con la nomenclatura `<iniciales>-<código-JIRA>`.
- Los cambios se suben en un Pull Request hacia **develop**.
- Se mantiene la rama actualizada con **develop**.
- Se eliminan ramas cuando ya fueron integradas.
