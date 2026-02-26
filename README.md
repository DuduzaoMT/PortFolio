# Eduardo Silva Portfolio

Personal portfolio built with Astro.

## 🚀 Live Demo

Visit the live portfolio at: [https://DuduzaoMT.github.io/PortFolio/](https://DuduzaoMT.github.io/PortFolio/)

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Deployment**: GitHub Pages
- **Language**: TypeScript

## 📦 Project Structure

```
/
├── public/
│   └── assets/
│       ├── cv/
│       ├── images/
│       │   └── about/
│       └── robot/
│           ├── license.txt
│           └── textures/
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── Navigation.astro
│   │   └── Robot.astro
│   ├── config/
│   │   └── content.ts
│   ├── content/
│   ├── pages/
│   │   └── index.astro
│   ├── utils/
│   └── env.d.ts
├── astro.config.mjs
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/DuduzaoMT/PortFolio.git
cd PortFolio
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment to GitHub Pages

This portfolio is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Initial Setup

1. Go to your repository on GitHub
2. Navigate to **Settings** > **Pages**
3. Under **Source**, select **GitHub Actions**
4. Push your changes to the `main` branch
5. GitHub Actions will automatically build and deploy your site

Your site will be available at: `https://DuduzaoMT.github.io/PortFolio/`

### Manual Deployment

If you need to manually trigger a deployment:

1. Go to the **Actions** tab in your GitHub repository
2. Select the **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## ✏️ Customization

### Update Content

Edit the content in `src/config/content.ts` to customize:

- Personal information
- Project details
- Skills and experience
- Social links

### Styling

The project uses Tailwind CSS with custom configurations in `tailwind.config.js`. Modify classes in the Astro components to change the design.

### Images

Place your images in `public/assets/images/` and reference them in the content configuration.

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build)
