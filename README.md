# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




__Asset Folder__
src/assets/ → If the asset is part of the app and imported in components.
Logos, section backgrounds, small icons

logos I want to load faster and arent involved in image searching 

__Public folder__
public/ → If the asset should be accessible directly (e.g., favicon, SEO images, external references).
open grpah images, pdfs
things that can be searched - https://yourdomain.com/seo-image.png
