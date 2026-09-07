# Estudio Jurídico SEC — Landing (Fase 1)

React + Vite + TailwindCSS. Responsiva (mobile / desktop).

## Uso

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview
```

## Estructura

```
index.html
public/img/            logo + fotos (reemplazables)
src/App.jsx            orden de secciones
src/data/site.js       TEXTOS: áreas de práctica, contacto, nav
src/components/
  Header.jsx           nav sticky + menú hamburguesa mobile
  Hero.jsx             "Somos" + CTAs
  Areas.jsx            6 áreas de práctica (desc + alcance)
  MisionVision.jsx
  PorQue.jsx
  Contacto.jsx         form -> abre WhatsApp con el mensaje armado
  Footer.jsx
  WhatsAppFloat.jsx    botón flotante fijo, siempre visible
```

## Orden de la página

Hero → Áreas de práctica → Misión y Visión → Por qué nosotros → Contacto.
La sección "Nuestro equipo" fue removida.

## Editar contenido

Casi todo el texto variable vive en `src/data/site.js`.
El teléfono / WhatsApp está en `contacto.whatsapp` (formato internacional sin +).

## Formulario

Hoy el submit abre WhatsApp con la consulta pre-armada (no requiere backend).
Para enviarlo por email, conectar `enviar()` en `Contacto.jsx` a Formspree,
Resend o similar.

## Paleta y tipografía

marfil `#f5f2ec` · arena `#ece5d5` · negro `#1c1a17` · dorado `#a07f16` / `#c9a227`
Cormorant Garamond (títulos) + Jost (texto). Cargadas por Google Fonts en `index.html`.

## Deploy

Cualquier host estático. Build `npm run build`, servir `dist/`.
Vercel / Netlify: build command `npm run build`, output `dist`.
