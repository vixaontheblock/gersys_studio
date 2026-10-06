# Gersys Hair Studio: entrega

## Qué cambia

Diseño en blanco y negro, titulares en Archivo Black y texto en Helvetica, con fotografías originales. Archivo Black se sirve desde el propio sitio y conserva su licencia. Se eliminan flechas decorativas, numeraciones de servicios, cápsulas de palabras clave, transparencias, efectos de fondo y pantalla de carga. La navegación sigue disponible en móvil; las fotografías se amplían con un diálogo que admite teclado y Escape.

Los textos principales están en español. El H1 identifica el salón y su ubicación. La dirección y el teléfono, antes dispersos o solo presentes en los datos SEO, se muestran junto al horario y las opciones de reserva. Se presenta una sección propia de cursos: Open Hair Touch (2025), Master Class Romeu Felipe (2024), Master Class Brûlée (2024) y certificación Diamond Pro (2024). Se conserva la información del proyecto, sin añadir logros o reseñas.

Se añaden páginas con contenido específico para balayage, color y mechas, y keratina y tratamientos. Cada una tiene título, descripción, canonical, enlaces relacionados y datos estructurados propios. La portada incluye preguntas prácticas antes de reservar.

## La corrección más importante del SEO

El original indicaba `https://gersyshairstudio.com` en canonical, sitemap y datos estructurados, aunque el dominio operativo confirmado es `https://gersys-studio.vercel.app/`. La versión entregada utiliza Vercel de forma coherente. El sitemap y robots se generan desde la configuración de la web para evitar que vuelvan a desajustarse.

Se añade `WebSite` con nombre `Gersys Hair Studio` y alternativa `Gersys`, junto con `BeautySalon`, datos de contacto y horarios. Se retiran coordenadas aproximadas no verificadas. Esto proporciona las señales para que Google considere el nombre correcto; no permite imponerlo ni garantiza posiciones.

Referencia: [documentación oficial de nombres de sitio de Google](https://developers.google.com/search/docs/appearance/site-names). Google elige el nombre automáticamente y puede tardar días o semanas en rastrear cambios.

## Publicación

La entrega es una versión local: el sitio público no se ha reemplazado. Subir este proyecto al repositorio ya conectado a Vercel y desplegar en el proyecto existente. No crear otro subdominio si se quiere conservar la dirección actual.

Preset Astro, compilación `npm run build`, salida `dist`. Usar Node.js 22.12 o posterior. Eliminar cualquier valor antiguo de `SITE_URL` o fijarlo a `https://gersys-studio.vercel.app`.

Después del despliegue, verificar que la portada, las tres páginas de servicios, `/robots.txt` y `/sitemap.xml` responden. En Google Search Console usar la propiedad del dominio de Vercel, enviar el sitemap e inspeccionar/solicitar indexación de las cuatro páginas. Actualizar también el enlace en Google Business Profile y redes si todavía apunta al .com.

Las reservas siguen abriendo WhatsApp y AgendaPro originales. Se mantiene Google Analytics y el archivo de verificación de Search Console.

## Alcance de las comprobaciones

Los resultados de compilación y revisión local se registran al finalizar la entrega. No se accedió a Search Console, Google Business Profile ni al proyecto de Vercel. No se dispone de datos reales de posiciones, impresiones, conversiones o Core Web Vitals; no se atribuye a esta entrega una puntuación de Lighthouse ni una subida garantizada de tráfico.

## Comprobaciones realizadas

Compilación de producción completada con Astro 6.3.1. Revisión automatizada de cinco páginas HTML: portada, tres servicios y 404; títulos únicos, descripción, H1, canonical, JSON-LD, recursos, enlaces internos y anclas. Sitemap con cuatro URL únicas y robots coherentes con el dominio confirmado.

Revisión visual del diseño final en escritorio y móvil de 390 px. Portada y páginas de servicios comprobadas a 320 px sin desbordamientos horizontales ni imágenes rotas detectadas. Carga de Archivo Black local verificada. Cursos presentes: Open Hair Touch, Romeu Felipe, Brûlée y Diamond Pro. Galería comprobada con teclado, cierre con Escape y restitución del foco; preguntas desplegables comprobadas.

Se conservaron los destinos originales de WhatsApp y AgendaPro. No se enviaron mensajes ni se completaron reservas. No se realizó una medición de Lighthouse ni una validación de resultados enriquecidos en el sitio público.
