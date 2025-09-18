// Ecopyxle Design System Constants
// This file ensures consistent design tokens across all components

export const DESIGN_SYSTEM = {
  // Color Palette
  colors: {
    primary: {
      main: 'blue-600',
      light: 'blue-500',
      dark: 'blue-700',
      bg: 'blue-50',
      text: 'blue-900',
    },
    secondary: {
      main: 'purple-600',
      light: 'purple-500',
      dark: 'purple-700',
      bg: 'purple-50',
      text: 'purple-900',
    },
    accent: {
      main: 'cyan-500',
      light: 'cyan-400',
      dark: 'cyan-600',
      bg: 'cyan-50',
      text: 'cyan-900',
    },
    success: {
      main: 'green-500',
      light: 'green-400',
      dark: 'green-600',
      bg: 'green-50',
      text: 'green-900',
    },
    warning: {
      main: 'yellow-500',
      light: 'yellow-400',
      dark: 'yellow-600',
      bg: 'yellow-50',
      text: 'yellow-900',
    },
    error: {
      main: 'red-500',
      light: 'red-400',
      dark: 'red-600',
      bg: 'red-50',
      text: 'red-900',
    },
    neutral: {
      white: 'white',
      gray50: 'gray-50',
      gray100: 'gray-100',
      gray200: 'gray-200',
      gray300: 'gray-300',
      gray400: 'gray-400',
      gray500: 'gray-500',
      gray600: 'gray-600',
      gray700: 'gray-700',
      gray800: 'gray-800',
      gray900: 'gray-900',
    },
  },

  // Typography Scale
  typography: {
    // Headings
    h1: 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight',
    h2: 'text-4xl md:text-5xl font-bold leading-tight tracking-tight',
    h3: 'text-3xl md:text-4xl font-bold leading-tight',
    h4: 'text-2xl md:text-3xl font-bold leading-tight',
    h5: 'text-xl md:text-2xl font-semibold leading-tight',
    h6: 'text-lg md:text-xl font-semibold leading-tight',
    
    // Body Text
    body: {
      xl: 'text-xl leading-relaxed',
      lg: 'text-lg leading-relaxed',
      base: 'text-base leading-relaxed',
      sm: 'text-sm leading-relaxed',
      xs: 'text-xs leading-relaxed',
    },
    
    // Special Text
    gradient: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600',
    muted: 'text-gray-600',
    light: 'text-gray-500',
    dark: 'text-gray-900',
    
    // Button Text
    button: {
      sm: 'text-sm font-semibold',
      base: 'text-base font-semibold',
      lg: 'text-lg font-semibold',
      xl: 'text-xl font-semibold',
    },
  },

  // Spacing Scale
  spacing: {
    // Container Spacing
    container: 'max-w-7xl mx-auto px-6',
    containerSm: 'max-w-4xl mx-auto px-6',
    containerLg: 'max-w-8xl mx-auto px-6',
    
    // Section Spacing
    section: 'py-24',
    sectionSm: 'py-16',
    sectionLg: 'py-32',
    
    // Component Spacing
    card: 'p-6 md:p-8',
    cardSm: 'p-4 md:p-6',
    cardLg: 'p-8 md:p-12',
    
    // Element Spacing
    element: 'mb-6',
    elementSm: 'mb-4',
    elementLg: 'mb-8',
    elementXl: 'mb-12',
  },

  // Border Radius
  borderRadius: {
    sm: 'rounded-lg',
    base: 'rounded-xl',
    lg: 'rounded-2xl',
    xl: 'rounded-3xl',
    full: 'rounded-full',
  },

  // Box Shadows
  shadows: {
    sm: 'shadow-sm',
    base: 'shadow-lg',
    lg: 'shadow-xl',
    xl: 'shadow-2xl',
    glow: 'shadow-glow',
    glowLg: 'shadow-glow-lg',
  },

  // Transitions
  transitions: {
    fast: 'transition-all duration-200',
    base: 'transition-all duration-300',
    slow: 'transition-all duration-500',
    hover: 'hover:scale-105 hover:shadow-lg transition-all duration-300',
    focus: 'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
  },

  // Gradients
  gradients: {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600',
    primaryReverse: 'bg-gradient-to-r from-purple-600 to-blue-600',
    secondary: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-500',
    success: 'bg-gradient-to-r from-green-500 to-emerald-500',
    warning: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    error: 'bg-gradient-to-r from-red-500 to-pink-500',
  },

  // Product Card Colors (Consistent across all products)
  productColors: [
    {
      name: 'blue',
      gradient: 'from-blue-500 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      text: 'text-blue-600',
    },
    {
      name: 'purple',
      gradient: 'from-purple-500 to-pink-500',
      bg: 'from-purple-50 to-pink-50',
      text: 'text-purple-600',
    },
    {
      name: 'teal',
      gradient: 'from-teal-500 to-cyan-500',
      bg: 'from-teal-50 to-cyan-50',
      text: 'text-teal-600',
    },
    {
      name: 'violet',
      gradient: 'from-violet-500 to-purple-500',
      bg: 'from-violet-50 to-purple-50',
      text: 'text-violet-600',
    },
  ],

  // 5D Process Colors (Consistent across all steps)
  processColors: [
    {
      name: 'dream',
      gradient: 'from-yellow-400 to-orange-500',
      bg: 'from-yellow-50 to-orange-50',
      text: 'text-yellow-600',
    },
    {
      name: 'discover',
      gradient: 'from-blue-400 to-cyan-500',
      bg: 'from-blue-50 to-cyan-50',
      text: 'text-blue-600',
    },
    {
      name: 'describe',
      gradient: 'from-green-400 to-emerald-500',
      bg: 'from-green-50 to-emerald-50',
      text: 'text-green-600',
    },
    {
      name: 'design',
      gradient: 'from-purple-400 to-pink-500',
      bg: 'from-purple-50 to-pink-50',
      text: 'text-purple-600',
    },
    {
      name: 'deliver',
      gradient: 'from-red-400 to-rose-500',
      bg: 'from-red-50 to-rose-50',
      text: 'text-red-600',
    },
  ],

  // Button Styles
  buttons: {
    primary: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl',
    secondary: 'border border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300',
    outline: 'border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300',
    ghost: 'text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300',
  },

  // Card Styles
  cards: {
    base: 'bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100',
    elevated: 'bg-white rounded-3xl p-8 shadow-2xl hover:shadow-2xl transition-all duration-500 border border-gray-200',
    gradient: 'bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100',
  },

  // Form Styles
  forms: {
    input: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300',
    textarea: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none',
    select: 'w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300',
    label: 'block text-sm font-medium text-gray-700 mb-2',
    error: 'text-red-600 text-sm mt-1',
  },

  // Background Patterns & Doodles
  backgrounds: {
    hero: 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
    section: 'bg-white',
    sectionAlt: 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50',
    footer: 'bg-gray-900',
    card: 'bg-white/80 backdrop-blur-sm',
  },

  // Doodle Patterns
  doodles: {
    hero: { pattern: 'neural', opacity: 0.08 },
    features: { pattern: 'circuit', opacity: 0.06 },
    useCases: { pattern: 'brain', opacity: 0.05 },
    pricing: { pattern: 'geometric', opacity: 0.07 },
    about: { pattern: 'dataflow', opacity: 0.04 },
    contact: { pattern: 'code', opacity: 0.06 },
  },

  // Animation Variants
  animations: {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.6 }
    },
    fadeInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8 }
    },
    fadeInRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.8 }
    },
    scaleIn: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { duration: 0.6 }
    }
  },
} as const

// Helper functions for consistent styling
export const getProductColor = (index: number) => {
  return DESIGN_SYSTEM.productColors[index % DESIGN_SYSTEM.productColors.length]
}

export const getProcessColor = (index: number) => {
  return DESIGN_SYSTEM.processColors[index % DESIGN_SYSTEM.processColors.length]
}

// Common class combinations
export const COMMON_CLASSES = {
  container: DESIGN_SYSTEM.spacing.container,
  section: DESIGN_SYSTEM.spacing.section,
  card: DESIGN_SYSTEM.cards.base,
  button: DESIGN_SYSTEM.buttons.primary,
  heading: DESIGN_SYSTEM.typography.h2,
  body: DESIGN_SYSTEM.typography.body.base,
  gradient: DESIGN_SYSTEM.typography.gradient,
} as const
