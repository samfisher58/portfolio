# Saymon's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and shadcn/ui components.

## Features

- 🎨 Modern design with dark theme
- 📱 Fully responsive layout
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 shadcn/ui components
- 🎯 Smooth animations and transitions
- 🌙 Dark/Light theme toggle
- 📊 Interactive skill cards
- 📈 Timeline-based experience section
- 🚀 Project showcase with live demos

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── About.tsx
│   │   ├── Education.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   └── lib/
│       └── utils.ts
├── components.json
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons
- **Radix UI** - Headless UI primitives

## Customization

### Updating Content

1. **Personal Information**: Edit the content in each component file
2. **Images**: Replace image URLs in the components
3. **Skills**: Update the skills arrays in `Skills.tsx`
4. **Experience**: Modify the experiences array in `Experience.tsx`
5. **Projects**: Update the projects array in `Projects.tsx`

### Styling

- Colors and theme can be customized in `tailwind.config.ts`
- Global styles are in `src/app/globals.css`
- Component-specific styles use Tailwind classes

## Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

## License

This project is open source and available under the [MIT License](LICENSE).