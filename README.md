# Geoensayos

Sitio web corporativo de **GEO ENSAYOS SAS**, laboratorio colombiano de ensayos de ingeniería especializado en pruebas de concretos, suelos, agregados y mezclas asfálticas para la industria de la construcción.

## Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **React:** 19
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v4 + SCSS modules
- **Formularios:** Formik + Yup
- **Email:** Nodemailer (Gmail SMTP)
- **Slider:** react-slideshow-image
- **Analytics:** Google Tag Manager
- **SVGs:** @svgr/webpack

## Requisitos

- Node.js 18+
- npm

## Getting Started

```bash
# Instalar dependencias
pnpm install

# Copiar y configurar variables de entorno
cp .env.example .env

# Iniciar servidor de desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

## Scripts

| Comando | Descripción |
|---|---|
| `pnpm dev` | Inicia servidor de desarrollo |
| `pnpm build` | Construye la aplicación para producción |
| `pnpm start` | Inicia servidor de producción |

## Estructura del Proyecto

```
src/
├── app/
│   ├── (website)/           # Route group - páginas públicas
│   │   ├── page.tsx         # Home
│   │   ├── contacto/
│   │   ├── nosotros/
│   │   ├── servicios/
│   │   │   ├── concretos/
│   │   │   ├── suelos-y-agregados/
│   │   │   ├── mezclas-asfalticas/
│   │   │   ├── laboratorio-en-sitio/
│   │   │   ├── supervision-y-control-en-obra/
│   │   │   └── ejecucion-de-apiques/
│   │   ├── quejas-reclamos/
│   │   ├── acuerdo-confidencialidad/
│   │   ├── politica-calidad/
│   │   └── politica-imparcialidad/
│   ├── api/
│   │   └── pqr-sender/      # API route para envío de formulario PQR
│   ├── layout.tsx            # Root layout (GTM, fuentes)
│   └── globals.css
├── components/
│   ├── ui/                   # Header, Footer
│   ├── forms/                # FormPQR, LabelForms
│   ├── cta/                  # BTNWhatsappText
│   ├── BotonComponent.tsx
│   ├── Certificaciones.tsx
│   ├── ContactPanel.tsx
│   ├── HomeImageSlider.tsx
│   ├── Icons.tsx
│   └── WhatsappBTN.tsx
├── config/
│   ├── fonts.ts
│   └── nodemailer.ts
├── content/
│   ├── menu.json
│   ├── servicios.json
│   └── proyectos.json
└── styles/
    ├── abstract/
    ├── basics/
    ├── components/
    ├── layout/
    └── pages/
```

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home / Landing page |
| `/nosotros` | Quiénes somos |
| `/servicios` | Portafolio de servicios |
| `/servicios/concretos` | Ensayos de concreto |
| `/servicios/suelos-y-agregados` | Suelos y agregados |
| `/servicios/mezclas-asfalticas` | Mezclas asfálticas |
| `/servicios/laboratorio-en-sitio` | Laboratorio en sitio |
| `/servicios/supervision-y-control-en-obra` | Supervisión y control |
| `/servicios/ejecucion-de-apiques` | Ejecución de apiques |
| `/contacto` | Contacto |
| `/quejas-reclamos` | Formulario PQR (PQRSDF) |
| `/acuerdo-confidencialidad` | Acuerdo de confidencialidad |
| `/politica-calidad` | Política de calidad |
| `/politica-imparcialidad` | Política de imparcialidad |

## Variables de Entorno

Crear archivo `.env` en la raíz del proyecto:

```env
MAIL_SENDER_USER=correo@gmail.com
MAIL_SENDER_PASSWORD=contraseña_app_gmail
```

## APIs Externas

- **Gmail SMTP** — Envío de formulario PQR via Nodemailer
- **WhatsApp** — Links directos `wa.me/573168501923`
- **Google Tag Manager** — GTM-5G8S6G4V
- **Google Fonts** — Roboto

## Arquitectura

- **Server Components por defecto** — Solo 3 componentes cliente: Header (menú móvil), HomeImageSlider (carrusel), FormPQR (formulario)
- **Sin estado global** — Todo el estado es local en los componentes
- **Route group `(website)`** — Layout compartido (Header + Footer + WhatsApp) sin afectar API routes
- **SVGs como componentes** — Mediante `@svgr/webpack`
- **Estilos mixtos** — Tailwind CSS v4 + SCSS parciales con estructura BEM

## Despliegue

```bash
npm run build
```

La aplicación puede desplegarse en cualquier plataforma que soporte Next.js (Vercel, Node.js standalone, etc.).
