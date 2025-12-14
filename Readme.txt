# Taberna Calavera · Comunidad de Albion Online

Proyecto web estático desarrollado como entrega final, inspirado en la facción de Caerleon del juego **Albion Online**.  
La “Taberna Calavera” funciona como hub de comunidad: presentación del pacto, actividades PvP/PvE, mercado negro (en construcción) y formulario de ingreso.

---

## Tecnologías usadas

- **HTML5 semántico**
- **SCSS/CSS3** (compilado a `css/main.css`)
- **Bootstrap 5.3**  
  - Usado **exclusivamente en el navbar** para la navegación responsive (`.navbar`, `.navbar-toggler`, `.collapse`, etc.).
  - El layout principal (secciones, tarjetas, grids) está resuelto con clases propias (`cards-grid`, `join-form`, `features-grid`, etc.).

---

## Estructura de carpetas

```text
.
├─ index.html
├─ pages/
│  ├─ elpacto.html
│  ├─ actividades.html
│  ├─ mercado.html
│  └─ formulario.html
├─ css/
│  ├─ main.css        # CSS compilado a partir de main.scss
├─ sass/
│  └─ main.scss       # Fuente SCSS de estilos (opcional según setup)
├─ img/
│  └─ ...             # Logos, fondos, capturas de actividades
├─ vid/
│  └─ estatica.mp4    # Video de cabecera (hero)
└─ README


Páginas y layout
1. index.html – Landing principal

Hero con video de fondo (.video-hero) y contenido principal en overlay.

Presentación breve del Pacto, actividades destacadas y bloque de “Unirte a la Taberna”.

Layout principal del <main> resuelto con Flexbox mediante la clase layout-flex.

Secciones clave:

#inicio

#pacto

#actividades (resumen)

#mercado-negro

#unete

2. pages/elpacto.html – El Pacto

Página “quiénes somos” con manifiesto del Pacto Calavera.

Sección hero con imagen de taberna y overlay.

Módulos de información estructurados en bloques y pequeñas grillas (stats, código de la taberna, comparativa “Te buscamos / Seguí de largo”).

3. pages/actividades.html – Actividades (Página 100% GRID)

Página dedicada a las operaciones y contenido PvP/PvE.

El <main> de esta página se maquetea con CSS Grid a través de la clase de página:

<body class="page-actividades">

.page-actividades .site-main { display: grid; ... }

Las tarjetas de contenido se organizan con .cards-grid (grid responsivo con repeat(auto-fit, minmax(...))).

Cada actividad se presenta como una card con imagen + título + descripción.

4. pages/mercado.html – Mercado Negro

Pantalla de “en construcción” para el futuro Mercado Negro del Pacto.

Hero con fondo ilustrado y componente visual de “sello” PRÓXIMAMENTE sobre el logo.

5. pages/formulario.html – Formulario de ingreso

Formulario responsivo para solicitar acceso al Pacto.

Campos de nombre, rol, tiempo jugando, intereses y aporte.

Uso de componentes de formulario propios + mínimo soporte de Bootstrap para estilos base.

El diseño de la tarjeta del formulario (.join-form) se resuelve con estilos custom, respetando el tema dark Caerleon.

Navegación y Bootstrap

El navbar de todas las páginas utiliza Bootstrap 5.3 para:

Estructura responsive (.navbar, .navbar-expand-lg).

Toggler colapsable en mobile (.navbar-toggler, .collapse).

Todos los colores, tipografía y efectos visuales del nav se sobrescriben desde main.css para respetar la identidad de Taberna Calavera (rojos, dorados y fondo oscuro).

Bootstrap NO se usa para maquetar la página completa; el layout se realiza con Flexbox y CSS Grid propios.

Estilos y tema visual

Tema oscuro inspirado en Caerleon:

Fondo principal: negro/azul profundo.

Color primario: rojo #b21c2a.

Acentos dorados #c59d4d para títulos y resaltados.

Tipografías:

Títulos: Cinzel (estilo fantasy-medieval).

Cuerpo: Inter (legible, moderna).

Se eliminaron los efectos “muted” sobre los párrafos (.text-muted) para asegurar buena legibilidad en dark mode.

Responsividad

El sitio está optimizado para:

Mobile (ancho reducido, nav colapsable, secciones en stack vertical).

Tablet (grillas con 2 columnas donde hay espacio).

Escritorio (distribución de 2–4 columnas en cards y módulos).

Responsividad lograda a través de:

Media queries en main.css.

Grillas con auto-fit / minmax para las cards.

Flexbox en secciones como hero y formulario.

SEO básico

Cada página define:

<title> específico.

<meta name="description"> descriptiva.

Uso de:

alt en imágenes clave.

Estructura semántica con <header>, <main>, <section>, <footer>.

