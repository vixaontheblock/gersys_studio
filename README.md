# Gersys Hair Studio

Web estática en Astro para el salón de Brisas del Golf. Dominio de producción confirmado: https://gersys-studio.vercel.app/.

## Trabajar en el proyecto

Se requiere Node.js 22.12 o posterior, compatible con Astro 6.

```sh
npm ci
npm run dev
npm run build
npm run preview
```

El resultado de producción se genera en `dist/`. No requiere servidor de aplicación ni base de datos. No colocar reglas que envíen todas las rutas a index.html: las páginas de servicios tienen su propio HTML y existe una página 404.

## Publicar en el proyecto existente de Vercel

Reemplazar los archivos del repositorio conectado con esta versión y publicar en el mismo proyecto de Vercel. Preset: Astro. Comando de compilación: `npm run build`. Carpeta de salida: `dist`.

No es necesario comprar un dominio ni recuperar el .com para utilizar esta versión. Si existe una variable `SITE_URL` en Vercel, eliminar su antiguo valor o cambiarla a `https://gersys-studio.vercel.app`. El valor predeterminado del código ya es ese dominio. La variable solo se necesita para una futura migración intencional.

Esta entrega no cambia el despliegue público por sí sola.

## Contenido

- `src/data/site.ts`: contacto, reservas, catálogo y textos de las páginas de servicios.
- `src/components/`: portada, servicios, fotografías, salón, preguntas, ubicación y pie.
- `src/styles/global.css`: diseño y adaptaciones móviles.
- `src/layouts/BaseLayout.astro`: títulos, descripciones, canonical, datos estructurados y Analytics.
- `src/pages/servicios/[slug].astro`: genera las tres páginas específicas.
- `src/pages/sitemap.xml.ts` y `robots.txt.ts`: se generan con el mismo dominio que las páginas.

Se mantiene el identificador de Analytics original y su archivo de verificación de Google. Analytics solo se carga en compilaciones de producción. No se enviaron reservas ni mensajes durante la revisión.

## Después de publicar

En la propiedad de Search Console correspondiente a `https://gersys-studio.vercel.app/`, enviar `sitemap.xml` e inspeccionar la portada y las tres páginas de servicios. Solicitar la indexación después de verificar la versión desplegada. Mantener esta misma URL en el perfil de Google Business y en las redes del salón.

Para el nombre de sitio se declara `WebSite.name = Gersys Hair Studio` y `alternateName = Gersys`, además de unificar canonical y Open Graph. Google elige el nombre automáticamente: el cambio requiere un nuevo rastreo y no tiene fecha ni resultado garantizados.

No se han inventado reseñas, puntuaciones, tarifas, disponibilidad ni certificaciones adicionales. Dirección, horarios y formación se conservaron de los datos del proyecto: el negocio debe mantenerlos actualizados.

Documentación oficial: https://developers.google.com/search/docs/appearance/site-names y https://developers.google.com/search/docs/appearance/structured-data/local-business.
