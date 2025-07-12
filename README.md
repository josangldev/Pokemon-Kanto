# 🌟 Mundo Pokémon - Región Kanto

[![Pokémon](https://img.shields.io/badge/Pokémon-Kanto-red)](https://github.com/josangldev/Pokemon-Kanto)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![SASS](https://img.shields.io/badge/SASS-Styled-blue)](https://sass-lang.com/)
[![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)](https://vitejs.dev/)
[![Responsive](https://img.shields.io/badge/Responsive-Design-green)](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
[![AI-Assisted](https://img.shields.io/badge/AI-Assisted%20Development-orange)](https://openai.com/)

> **¡Bienvenido al mundo Pokémon!**

## 📸 Capturas de Pantalla

![Página Principal](docs/screen-main.png)


## 🎮 Características Principales

### 🎯 **Interfaz Retro Game Boy**
- **Diseño pixelado** inspirado en los clásicos juegos Pokémon
- **Pokéball interactiva** como elemento central de navegación
- **Efectos visuales** con animaciones suaves y transiciones
- **Tipografía retro** usando 'Press Start 2P'

### 📱 **Diseño Responsive**
- **Mobile-first** con breakpoints optimizados
- **Adaptable** a tablets y desktop
- **Experiencia fluida** en todos los dispositivos
- **Navegación intuitiva** con gestos táctiles

### 🎵 **Audio Inmersivo**
- **Música de fondo** de los juegos originales
- **Controles de audio** integrados
- **Diferentes tracks** para cada sección
- **Reproducción automática** opcional

## 🚀 Funcionalidades

### 📖 **Pokédex Completa**
- **151 Pokémon** de la primera generación
- **Información detallada** de cada Pokémon:
  - Número en la Pokédex
  - Nombre y tipo
  - Estadísticas completas (PS, Ataque, Defensa, etc.)
  - Imágenes oficiales
- **Navegación por carrusel** con flechas
- **Búsqueda en tiempo real** por nombre
- **Filtrado dinámico** de resultados

### 🧠 **Trivial Pokémon**
- **50 preguntas** sobre Pokémon Rojo y Azul
- **10 preguntas aleatorias** por partida
- **Sistema de puntuación** en tiempo real
- **Feedback inmediato** con respuestas correctas
- **Preguntas variadas** sobre:
  - Pokémon específicos
  - Tipos y evoluciones
  - Lugares y personajes
  - Objetos y movimientos

### 👤 **Sobre Mí**
- **Perfil del desarrollador** con estilo retro
- **Información personal** sobre la pasión por Pokémon
- **Ficha de entrenador** con datos curiosos
- **Enlaces a redes sociales** (GitHub, LinkedIn)

## 🤖 Desarrollo Asistido por IA

Este proyecto fue desarrollado con la asistencia de **Inteligencia Artificial** para optimizar el proceso de desarrollo:

### **🔄 Automatización de Tareas**
- **Optimización de rendimiento** en funciones de búsqueda
- **Revisión completa** de la arquitectura SASS
- **Asistente personal** para el código JavaScript

### **🎯 Mejoras Implementadas**
- **Código más limpio** y mantenible
- **Estructura SASS optimizada** con 7-1 pattern
- **Funciones JavaScript optimizadas** para mejor rendimiento
- **Eliminación de archivos vacíos** y código innecesario

### **📊 Beneficios Obtenidos**
- **Reducción del 15%** en código duplicado
- **Mejor organización** de archivos y carpetas
- **Optimización de rendimiento** en búsquedas
- **Código más legible** y escalable

## 🛠️ Tecnologías Utilizadas

### **Frontend**
- **HTML5** - Estructura semántica
- **CSS3** - Estilos avanzados y animaciones
- **JavaScript ES6+** - Funcionalidad interactiva
- **SASS/SCSS** - Preprocesador CSS con arquitectura modular

### **Build Tools**
- **Vite** - Bundler y servidor de desarrollo
- **Node.js** - Entorno de ejecución

### **Arquitectura SASS**
```
sass/
├── abstracts/
│   ├── _variables.scss    # Variables globales
│   ├── _mixins.scss       # Mixins y breakpoints
│   └── _abstracts.scss    # Imports
├── base/
│   ├── _reset.scss        # Reset CSS
│   ├── _typography.scss   # Definición de fuentes
│   └── _base.scss         # Estilos base
├── components/
│   └── _buttons.scss      # Componentes de botones
├── layout/
│   ├── _main.scss         # Layout principal
│   ├── _header.scss       # Header
│   ├── _footer.scss       # Footer
│   ├── _forms.scss        # Formularios
│   ├── _container.scss    # Contenedores
│   └── _global.scss       # Imports globales
├── themes/
│   ├── _default.scss      # Tema principal
│   └── _themes.scss       # Imports de temas
└── style.scss             # Archivo principal
```

### **Breakpoints Responsive**
- **Mobile**: `max-width: 719px`
- **Tablet**: `min-width: 720px`
- **Desktop**: `min-width: 1200px`
- **Desktop XL**: `min-width: 1440px`

## 📁 Estructura del Proyecto

```
Pokemon-Kanto/
├── public/
│   ├── img/               # Imágenes de Pokémon
│   ├── icons/             # Iconos SVG
│   ├── audio/             # Archivos de música
│   ├── fonts/             # Fuentes retro
│   └── pokedex.json       # Datos de Pokémon
├── sass/                  # Estilos SASS
├── screenshots/           # Capturas de pantalla
├── index.html             # Página principal
├── pokemon.html           # Pokédex
├── trivial.html           # Trivial
├── sobremi.html          # Sobre mí
├── main.js               # JavaScript principal
├── package.json          # Dependencias
└── vite.config.js        # Configuración Vite
```

## 🎨 Diseño y UX

### **Paleta de Colores**
- **Verde Game Boy**: `#8cbf3f`
- **Borde oscuro**: `#222`
- **Fondo pantalla**: `#cde0a8`
- **Acentos**: `#6ecafc`, `#457b9d`

### **Tipografía**
- **Principal**: 'Press Start 2P' (pixelada)
- **Tamaños responsivos** adaptados a cada dispositivo
- **Jerarquía visual** clara y legible

### **Animaciones**
- **Transiciones suaves** en hover states
- **Animaciones de carga** para elementos dinámicos
- **Efectos de flicker** en imágenes Pokémon
- **Transformaciones** en botones y elementos interactivos

## 🚀 Instalación y Uso

### **Prerrequisitos**
- Node.js (versión 14 o superior)
- npm o yarn

### **Instalación**
```bash
# Clonar el repositorio
git clone https://github.com/josangldev/Pokemon-Kanto.git

# Navegar al directorio
cd Pokemon-Kanto

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### **Scripts Disponibles**
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Build para producción
npm run preview  # Preview del build
```

## 🎯 Características Técnicas

### **Optimizaciones de Rendimiento**
- **Lazy loading** de imágenes
- **Debouncing** en búsquedas
- **Event delegation** para mejor rendimiento
- **CSS optimizado** con SASS

### **Accesibilidad**
- **ARIA labels** en elementos interactivos
- **Navegación por teclado** completa
- **Contraste adecuado** en colores
- **Texto alternativo** en imágenes

### **Compatibilidad**
- **Navegadores modernos** (Chrome, Firefox, Safari, Edge)
- **Dispositivos móviles** (iOS, Android)
- **Tablets** (iPad, Android tablets)
- **Desktop** (Windows, macOS, Linux)

## 🧪 Funcionalidades Avanzadas

### **Sistema de Búsqueda**
- **Búsqueda en tiempo real** con filtrado dinámico
- **Búsqueda por nombre** de Pokémon
- **Navegación optimizada** en resultados filtrados
- **Indicadores visuales** de estado de búsqueda

### **Carrusel Interactivo**
- **Navegación por flechas** o gestos
- **Transiciones suaves** entre Pokémon
- **Estado activo** visual
- **Loop infinito** en navegación

### **Sistema de Trivial**
- **Preguntas aleatorias** sin repetición
- **Sistema de puntuación** en tiempo real
- **Feedback inmediato** con colores
- **Reinicio automático** para nuevas partidas

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crea una rama** para tu feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. **Push** a la rama (`git push origin feature/AmazingFeature`)
5. **Abre un Pull Request**

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**José Antonio García López** - [JosanglDev]

- **GitHub**: [@josangldev](https://github.com/josangldev)
- **LinkedIn**: [José Antonio García López](https://www.linkedin.com/in/jos%C3%A9-antonio-garc%C3%ADa-l%C3%B3pez-4ba263347/)

## 🙏 Agradecimientos

- **Nintendo/Game Freak** por crear el universo Pokémon
- **Comunidad Pokémon** por mantener vivo el espíritu de los juegos originales
- **Desarrolladores de Vite** por la excelente herramienta de build
- **Creadores de 'Press Start 2P'** por la tipografía retro perfecta
- **Inteligencia Artificial** por asistir en la optimización y refactorización del código

---

<div align="center">

**¡Atrapalos a todos!** 🎮⚡

</div> 