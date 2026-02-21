    # 📇 Administrador de Contactos en React

Aplicación web desarrollada con **React JS** que permite gestionar contactos de manera dinámica.  
El sistema permite agregar, eliminar, buscar y marcar contactos como favoritos en tiempo real.

---

## 🚀 Características

- ✅ Agregar nuevos contactos
- 🔍 Búsqueda dinámica en tiempo real
- ⭐ Marcar contactos como favoritos
- 🗑️ Eliminar contactos
- 🎨 Interfaz moderna con CSS3
- ⚛️ Arquitectura basada en componentes
- 🔄 Renderizado automático al actualizar el estado

---

## 🛠️ Tecnologías Utilizadas

- React JS
- JavaScript (ES6+)
- Vite
- CSS3
- HTML5

---

## 📂 Estructura del Proyecto

src/
│
├── components/
│   ├── ContactList.jsx
│   ├── ContactForm.jsx
│   ├── Contact.jsx
│   └── SearchBar.jsx
│
├── App.jsx
├── main.jsx
├── App.css
└── index.css

---

## 🧠 Arquitectura del Proyecto

La aplicación sigue el modelo de **Single Page Application (SPA)** utilizando componentes funcionales y manejo de estado con `useState`.

### Flujo de funcionamiento:

1. main.jsx inicializa la aplicación.
2. App.jsx organiza la estructura general.
3. ContactList.jsx administra el estado principal de los contactos.
4. ContactForm.jsx permite agregar nuevos contactos.
5. SearchBar.jsx filtra contactos en tiempo real.
6. Contact.jsx muestra cada contacto individual.

Cada vez que el estado cambia, React vuelve a renderizar la interfaz automáticamente.

---

## ⚙️ Instalación y Ejecución

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/CesarMelendez698/Desafio-Practico-1-DSP-Lab.git
```

### 2️⃣ Entrar en la carpeta del proyecto

```bash
cd Desafio_1_DSP
```

### 3️⃣ Instalar dependencias

```bash
npm install
```

### 4️⃣ Ejecutar el proyecto

```bash
npm run dev
```

El proyecto se ejecutará en:

http://localhost:5173/

---

## 🎯 Objetivos de Aprendizaje

Este proyecto aplica los siguientes conceptos fundamentales de React:

- Componentes funcionales
- Props
- useState
- Manejo de eventos
- Formularios controlados
- Renderizado condicional
- Separación de responsabilidades
- Arquitectura basada en componentes

---

## 🚧 Mejoras Futuras

- Persistencia de datos con LocalStorage
- Integración con base de datos
- Edición de contactos
- Animaciones
- Deploy en producción (Vercel o Netlify)

---

## 👨‍💻 Autor

Cesar Armando Meléndez Arias  
Proyecto académico – Desarrollo Frontend con React  

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos.