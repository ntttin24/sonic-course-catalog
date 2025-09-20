# 🚀 Sonic Course Catalog

Một ứng dụng web hiện đại để hiển thị danh mục khóa học Web3 với giao diện đẹp mắt, hiệu ứng tương tác phong phú và thiết kế responsive.
## 🎨 Figma Design

🔗 **[Xem thiết kế Figma](https://www.figma.com/design/rNnAMwYY5b1eEr0jfAhlgF/Untitled?m=auto&t=FlEcvvzqj9cvh1XE-1)**

## 🌐 Deploy on Vercel
🔗 **[Live Demo](https://sonic-course-catalog.vercel.app)**

- **Email**: tin3519237@gmail.com

## 📦 Hướng dẫn cài đặt

### Yêu cầu hệ thống
- **Node.js** 18.0 hoặc cao hơn
- **npm** hoặc **yarn** hoặc **pnpm**

### 1. Clone repository
```bash
git clone https://github.com/ntttin24/sonic-course-catalog.git
cd sonic-course-catalog
```

### 2. Cài đặt dependencies
```bash
# Sử dụng npm
npm install

# Hoặc sử dụng yarn
yarn install

# Hoặc sử dụng pnpm
pnpm install
```

### 3. Chạy development server
```bash
npm run dev
```

### 4. Mở trình duyệt
Truy cập [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## 🎪 Tính năng nổi bật

### 🎨 UI/UX Features
- **Glassmorphism effects** với backdrop blur
- **Gradient animations** trên borders và backgrounds
- **Responsive grid layout**: 1 cột mobile, 2 cột tablet, 3 cột desktop
- **Dark theme** với color palette chuyên nghiệp

### ⚡ Interactive Effects
- **Light sweep animation** trên buttons và filters
- **Ripple effects** khi click
- **Hover transformations** với shadow effects
- **Smooth transitions** với cubic-bezier easing

### 🔍 Functionality
- **Real-time search** với debounced input
- **Smart filtering** theo difficulty levels
- **Course sorting** theo featured status, rating, students
- **Animated statistics** với custom AnimatedNumber component

## 🛠️ Công nghệ sử dụng

### Frontend Framework
- **[Next.js 15.5.3](https://nextjs.org/)** - React framework với App Router
- **[React 19.1.0](https://react.dev/)** - Library UI chính
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety và developer experience

### Styling & UI
- **[Tailwind CSS 4]** - Utility-first CSS framework
- **[tw-animate-css]** - Animation utilities
- **[Radix UI]** - Headless UI components
- **[Lucide React]** - Beautiful icon library
- **[Class Variance Authority]** - Component variants
- **[shadcn/ui (scaffolded & customized)]** – các component trong src/components/ui

### Development Tools
- **[ESLint 9]** - Code linting và quality assurance
- **[PostCSS]** - CSS processing



## 📁 Cấu trúc dự án

```
sonic-course-catalog/
├── public/                     # Static files
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── favicon.ico        # App icon
│   │   ├── globals.css        # Global styles & animations
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   ├── AnimatedNumber.tsx # Animated counter component
│   │   ├── CourseCard.tsx     # Individual course display
│   │   ├── CourseCatalog.tsx  # Main catalog with filtering
│   │   ├── Footer.tsx         # Footer with links
│   │   ├── Header.tsx         # Navigation header
│   │   └── Hero.tsx           # Hero section with stats
│   ├── data/
│   │   └── courses.json       # Course data
│   ├── hooks/                 # Custom React hooks
│   ├── lib/
│   │   └── utils.ts          # Utility functions
│   └── types/
│       └── index.ts          # TypeScript type definitions
├── eslint.config.mjs         # ESLint configuration
├── next.config.ts            # Next.js configuration
├── package.json              # Dependencies và scripts
├── postcss.config.mjs        # PostCSS configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Scripts

```bash
# Development
npm run dev          # Chạy development server với hot reload

# Production Build
npm run build        # Build ứng dụng cho production
npm run start        # Chạy production server

# Code Quality
npm run lint         # Kiểm tra code với ESLint (max 0 warnings)
```

