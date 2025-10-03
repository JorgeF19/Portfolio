# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# Jorge Ferrer Portfolio

## 🚀 Deployment en Netlify

Este proyecto está configurado para ser desplegado automáticamente en Netlify.

### Configuración de Deployment

El proyecto incluye:

- ✅ **netlify.toml**: Configuración de build y headers de seguridad
- ✅ **_redirects**: Manejo de rutas para SPA (Single Page Application)
- ✅ **vite.config.js**: Optimizado para producción con code splitting
- ✅ **Build exitoso**: Verificado y listo para production

### Pasos para Deploy en Netlify

1. **Subir a GitHub/GitLab**:
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Conectar con Netlify**:
   - Ve a [netlify.com](https://netlify.com)
   - Click en "Add new site" > "Import an existing project"
   - Conecta tu repositorio de Git
   - Netlify detectará automáticamente la configuración

3. **Deploy Settings** (auto-detectados):
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 (configurado en netlify.toml)

### Características del Build

- 📦 **Code Splitting**: Separación automática de vendor y styled-components
- 🔧 **Optimización**: Assets minificados y comprimidos
- 🎨 **Fuentes**: Incluidas automáticamente en el bundle
- 🔒 **Headers de Seguridad**: Configurados en netlify.toml
- 📱 **SPA Routing**: Configurado para React Router

### Estructura de Archivos Generados

```
dist/
├── index.html
├── assets/
│   ├── fonts/ (Lato, Lexend, Sora)
│   ├── vendor-[hash].js (React, React-DOM)
│   ├── styled-[hash].js (Styled Components)
│   ├── index-[hash].js (Código de la aplicación)
│   └── index-[hash].css (Estilos)
```

### Performance

- ✅ **Vendor chunk**: 11.83 kB (4.20 kB gzipped)
- ✅ **Styled chunk**: 25.90 kB (10.15 kB gzipped)  
- ✅ **App bundle**: 197.51 kB (61.28 kB gzipped)
- ✅ **Total CSS**: 0.94 kB (0.36 kB gzipped)

### Desarrollo Local

```bash
# Instalar dependencias
npm install

# Desarrollo
npm run dev

# Build local
npm run build

# Preview del build
npm run preview
```

### Tecnologías

- ⚛️ React 19.1.1
- 💅 Styled Components 6.1.19
- ⚡ Vite 7.1.7
- 🎨 Custom Fonts (Lato, Lexend, Sora)

---

**Portfolio creado por Jorge Ferrer** 🚀
