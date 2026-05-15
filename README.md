# Justo Hacker - Ethical Hacking Web Platform

Una plataforma web moderna de ethical hacking impulsada por inteligencia artificial que nunca duerme.

![Justo Hacker](public/hacker-hero.png)

## 🚀 Inicio Rápido

```bash
# Instalar dependencias
pnpm install

# Iniciar desarrollo
pnpm run dev

# Construir para producción
pnpm run build
```

## 🌐 Demo en Vivo

**URL:** https://vfpdogxb.manus.space

## ✨ Características

- 🎯 **Ethical Hacking con IA** - Detección avanzada de vulnerabilidades
- 🔄 **Monitoreo 24/7** - Protección continua de activos digitales
- 📊 **<0.5% Falsos Positivos** - Precisión del 99.5% en reportes
- 🛡️ **SOC Integrado** - Centro de operaciones de seguridad
- 📱 **Responsive Design** - Optimizado para todos los dispositivos
- ⚡ **Animaciones Interactivas** - Terminal de hacking en tiempo real

## 🛠️ Tecnologías

- **React 18** - Framework frontend
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **Shadcn/UI** - Componentes de interfaz
- **Lucide Icons** - Iconografía moderna

## 📁 Estructura del Proyecto

```
src/
├── App.jsx              # Componente principal
├── App.css              # Estilos principales
├── main.jsx             # Punto de entrada
├── components/          # Componentes personalizados
│   ├── HackingAnimation.jsx
│   ├── ProtectionAnimation.jsx
│   └── ui/              # Componentes UI (40+ archivos)
├── hooks/               # React hooks
└── lib/                 # Utilidades
```

## 🎨 Personalización

### Colores de Marca
```css
:root {
  --color-primary: #FF0066;    /* Fucsia */
  --color-secondary: #00CCCC;  /* Cian */
  --color-background: #000000; /* Negro */
}
```

### Información de Contacto
Editar en `src/App.jsx`:
```jsx
// Buscar sección de contacto
<p>+56 2 326 30660</p>
<p>contacto@justohacker.com</p>
```

## 📊 Estadísticas del Proyecto

- **Líneas de código:** ~850
- **Componentes:** 40+ componentes UI
- **Tamaño del bundle:** ~370KB (optimizado)
- **Lighthouse Score:** 90+

## 🔧 Scripts Disponibles

```bash
# Desarrollo
pnpm run dev              # Servidor de desarrollo
pnpm run dev --host       # Con acceso externo

# Producción
pnpm run build            # Construir para producción
pnpm run preview          # Previsualizar build

# Calidad de código
pnpm run lint             # Verificar código
```

## 🌐 Despliegue

### Opción 1: Netlify
1. `pnpm run build`
2. Subir carpeta `dist/` a Netlify

### Opción 2: Vercel
```bash
npm install -g vercel
vercel --prod
```

### Opción 3: Servidor Propio
```bash
pnpm run build
cd dist
python3 -m http.server 8080
```

## 📞 Soporte

- **Email:** contacto@justohacker.com
- **Teléfono:** +56 2 326 30660
- **Web:** https://vfpdogxb.manus.space

## 📄 Licencia

© 2024 Justo Hacker. Todos los derechos reservados.

---

**Desarrollado con ❤️ para la comunidad de ethical hacking**

