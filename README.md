# Prashant Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.  
Showcases projects, skills, experience, and educational background for Prashant Kushwaha.

## Features

- **Project Showcase:** Interactive display of featured and archived projects with live previews and source code links.
- **About Section:** Introduction, images, and personal background.
- **Skills:** Categorized frontend, backend, and other technical skills.
- **Experience & Education:** Timeline of work experience and academic history.
- **Contact:** Email and social links for easy communication.
- **SEO:** Sitemap generation for better search engine visibility.
- **Responsive Design:** Optimized for all devices.
- **Animations:** Smooth transitions using Framer Motion.

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [FontAwesome](https://fontawesome.com/)
- [Vercel Analytics](https://vercel.com/analytics)

## Getting Started

### Prerequisites

- Node.js >= 18
- [pnpm](https://pnpm.io/) (recommended)

### Installation

```sh
pnpm install
```

### Development

```sh
pnpm dev
```

### Build

```sh
pnpm build
```

### Start

```sh
pnpm start
```

### Lint

```sh
pnpm lint
```

### Generate Sitemap

```sh
pnpm generate-sitemap
```

## Project Structure

```
.
├── app/                # Next.js app directory (pages, components)
├── components/         # Shared React components
├── json/               # Project data (data.json)
├── public/             # Static assets (images, favicon, etc.)
├── generate-sitemap.js # Sitemap generator script
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project metadata and scripts
├── README.md           # Project documentation
└── ...                 # Other config and system files
```

## Customization

- Update your personal info, images, and project data in [`json/data.json`](json/data.json).
- Change Open Graph and SEO settings in [`app/layout.jsx`](app/layout.jsx).
- Add or modify sections/components in the [`app/`](app/) and [`components/`](components/) directories.

## License

This project is licensed under the [GNU GPL v3.0](LICENSE).

---

**Author:** Prashant Kushwaha  
**Contact:** [prashantkush24@gmail.com](mailto:prashantkush24@gmail.com)  
**Portfolio:** []() <!-- Replace with your actual domain -->
