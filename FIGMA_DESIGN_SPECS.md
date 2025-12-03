# Onboarding Screen - Figma Design Specifications

## Typography

### Header
- **"Welcome to iDen2"**
  - Font Size: 16px (text-base)
  - Font Weight: Bold (700)
  - Color: #111827 (gray-900)
  - Line Height: Normal

### Welcome Section - Logo Row
- **"Just One ID Away"**
  - Font Size: 14px (text-sm)
  - Font Weight: Semibold (600)
  - Color: #374151 (gray-700)
  - Line Height: Relaxed (1.625)
  - Margin Bottom: 4px

- **"You Are All Set"**
  - Font Size: 14px (text-sm)
  - Font Weight: Semibold (600)
  - Color: #9333EA (violet-600)
  - Line Height: Relaxed (1.625)

### Section Header
- **"How it works"**
  - Font Size: 14px (text-sm)
  - Font Weight: Semibold (600)
  - Color: #374151 (gray-700)
  - Padding: 12px horizontal

### Step Cards
- **Step Titles** (e.g., "Add Your ID", "Scan QR Codes", "Choose What to Share")
  - Font Size: 14px (text-sm)
  - Font Weight: Bold (700)
  - Color: #111827 (gray-900)
  - Margin Bottom: 4px

- **Step Descriptions**
  - Font Size: 12px (text-xs)
  - Font Weight: Normal (400)
  - Color: #4B5563 (gray-600)
  - Line Height: Relaxed (1.625)
  - Margin Top: 2px

### Privacy Section
- **"Your data stays private"**
  - Font Size: 14px (text-sm)
  - Font Weight: Bold (700)
  - Color: #111827 (gray-900)
  - Margin Bottom: 2px

- **Privacy Description**
  - Font Size: 12px (text-xs)
  - Font Weight: Normal (400)
  - Color: #374151 (gray-700)
  - Line Height: Relaxed (1.625)
  - Margin Top: 2px

### CTA Button
- **"Add Your First ID"**
  - Font Size: 14px (text-sm)
  - Font Weight: Bold (700)
  - Color: #FFFFFF (white)

## Colors

### Primary Colors
- **Violet-600**: #9333EA (Main brand color)
- **Violet-700**: #7E22CE (Button hover, darker violet)
- **Violet-500**: #A855F7 (Icon backgrounds)
- **Violet-400**: #C084FC (Gradient elements)
- **Violet-300**: #D8B4FE (Gradient elements)
- **Violet-200**: #E9D5FF (Shadows, borders)
- **Violet-100**: #F3E8FF (Borders, backgrounds)
- **Violet-50**: #FAF5FF (Background tints)

### Purple Colors
- **Purple-50**: #FAF5FF (Background gradients)
- **Purple-400**: #C084FC (Gradient accents)

### Gray Colors
- **Gray-900**: #111827 (Primary text)
- **Gray-700**: #374151 (Secondary text)
- **Gray-600**: #4B5563 (Tertiary text)
- **Gray-200**: #E5E7EB (Dividers, borders)
- **Gray-100**: #F3F4F6 (Borders, backgrounds)
- **Gray-50**: #F9FAFB (Background)

### White
- **White**: #FFFFFF (Cards, backgrounds)
- **White/80**: rgba(255, 255, 255, 0.8) (Header, footer with backdrop blur)

## Spacing

### Container Padding
- **Main Content**: 24px horizontal (px-6), 16px vertical (py-4)
- **Content Bottom Padding**: 96px (pb-24) for sticky footer
- **Header**: 20px horizontal (px-5), 12px vertical (py-3)
- **Footer**: 24px horizontal (px-6), 16px vertical (py-4)

### Component Spacing
- **Logo Row**: 40px gap between logo and text (gap-10)
- **Logo Row Bottom Margin**: 20px (mb-5)
- **Section Spacing**: 20px between sections (mb-5)
- **Step Cards**: 0px vertical (space-y-0, connected)
- **Step Card Padding**: 16px (p-4)
- **Step Card Gap**: 12px between icon and text (gap-3)
- **Flow Arrow**: 4px vertical padding (py-1)
- **Privacy Section Top Margin**: 20px (mt-5)
- **Privacy Section Padding**: 16px (p-4)
- **Privacy Section Gap**: 12px (gap-3)

### Text Spacing
- **Line Spacing**: Relaxed (1.625 line height)
- **Paragraph Spacing**: 2-4px between related text elements

## Border Radius

- **Logo Container**: 12px (rounded-xl)
- **Logo Image**: 8px (rounded-lg)
- **Step Cards**: 12px (rounded-xl)
- **Step Icons**: 12px (rounded-xl)
- **Privacy Section**: 12px (rounded-xl)
- **Privacy Icon**: 8px (rounded-lg)
- **CTA Button**: 12px (rounded-xl)

## Shadows

### Logo
- **Shadow**: Large with violet tint
  - shadow-lg shadow-violet-200/50
  - Box Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
  - Violet Shadow: rgba(233, 213, 255, 0.5)

### Step Cards
- **Default Shadow**: Small
  - shadow-sm
  - Box Shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
- **Hover Shadow**: Medium
  - shadow-md
  - Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)

### Step Icons
- **Shadow**: Medium with violet tint
  - shadow-md shadow-violet-200
  - Box Shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
  - Violet Shadow: rgba(233, 213, 255, 1)

### CTA Button
- **Shadow**: Large with violet tint
  - shadow-lg shadow-violet-200/50
  - Box Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
  - Violet Shadow: rgba(233, 213, 255, 0.5)
- **Hover Shadow**: Extra large
  - shadow-xl shadow-violet-200/60

### Footer
- **Shadow**: Large with black tint
  - shadow-lg shadow-black/5
  - Box Shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
  - Black Shadow: rgba(0, 0, 0, 0.05)

## Component Sizes

### Logo
- **Container Size**: 64px × 64px (w-16 h-16)
- **Container Padding**: 8px (p-2)
- **Outer Glow**: -4px inset (absolute -inset-1)
- **Inner Glow**: Full inset
- **Ring Width**: 2px (ring-2)

### Step Icons
- **Icon Container**: 48px × 48px (w-12 h-12)
- **Icon Size**: 24px × 24px (w-6 h-6)
- **Border Radius**: 12px (rounded-xl)

### Privacy Icon
- **Icon Container**: 36px × 36px (w-9 h-9)
- **Icon Size**: 16px × 16px (w-4 h-4)
- **Border Radius**: 8px (rounded-lg)

### Flow Connectors
- **Width**: 2px (w-0.5)
- **Height**: 16px (h-4)
- **Gradient**: from-violet-400 (#C084FC) to-violet-300 (#D8B4FE)

### Section Divider Lines
- **Height**: 1px (h-px)
- **Gradient**: from-transparent via-gray-200 (#E5E7EB) to-gray-300 (#D1D5DB)

## Borders

### Header
- **Border**: Bottom, 1px solid #F3F4F6 (border-gray-100)

### Step Cards
- **Border**: 1px solid #F3F4F6 (border-gray-100)

### Privacy Section
- **Border**: 1px solid #F3E8FF (border-violet-100)

### Footer
- **Border**: Top, 1px solid #F3F4F6 (border-gray-100)

### Logo Ring
- **Ring**: 2px solid rgba(233, 213, 255, 0.6) (ring-2 ring-violet-200/60)

## Backgrounds

### Main Container
- **Gradient**: from-gray-50 (#F9FAFB) via-white (#FFFFFF) to-gray-50 (#F9FAFB)
- **Max Width**: 448px (max-w-md)

### Header
- **Background**: rgba(255, 255, 255, 0.8) with backdrop blur
- **Backdrop Blur**: Small (backdrop-blur-sm)

### Step Cards
- **Background**: #FFFFFF (white)

### Privacy Section
- **Gradient**: from-violet-50 (#FAF5FF) to-purple-50 (#FAF5FF)

### CTA Button
- **Gradient**: from-violet-600 (#9333EA) to-violet-700 (#7E22CE)
- **Hover Gradient**: from-violet-700 (#7E22CE) to-violet-800 (#6B21A8)

### Logo Glow Effects
- **Outer Glow**: 
  - Gradient: from-violet-400/50 to-purple-400/50
  - Blur: Extra large (blur-xl)
  - Position: -4px inset
- **Inner Glow**:
  - Gradient: from-violet-400/30 to-purple-400/30
  - Blur: Large (blur-lg)
  - Position: Full inset

## Layout Specifications

### Container
- **Width**: Max 448px, centered
- **Height**: Minimum 100vh
- **Layout**: Flex column

### Header
- **Position**: Sticky, top 0
- **Z-index**: 20
- **Height**: Auto (padding-based)

### Main Content
- **Flex**: 1 (takes remaining space)
- **Overflow**: Vertical scroll enabled
- **Padding Bottom**: 96px (for sticky footer)

### Footer
- **Position**: Sticky, bottom 0
- **Z-index**: 20
- **Background**: rgba(255, 255, 255, 0.8) with backdrop blur

## Button Specifications

### CTA Button
- **Width**: 100%
- **Height**: Auto (padding: 14px vertical)
- **Border Radius**: 12px
- **Gap**: 8px between text and icon
- **Active State**: Scale to 98% (active:scale-[0.98])
- **Icon Size**: 16px × 16px

## Icon Specifications

### Step Icons
- **Upload, QrCode, Eye**: 24px × 24px, white color
- **Lock**: 16px × 16px, white color
- **ArrowRight**: 16px × 16px, white color

## Effects

### Backdrop Blur
- **Header**: Small blur (backdrop-blur-sm)
- **Footer**: Small blur (backdrop-blur-sm)

### Transitions
- **Step Cards**: All properties, 300ms duration
- **CTA Button**: All properties, 300ms duration
- **Hover Effects**: Shadow and color transitions

### Hover States
- **Step Cards**: 
  - Shadow: shadow-sm → shadow-md
  - Border: border-gray-100 (no change)
- **CTA Button**:
  - Gradient: Darker violet shades
  - Shadow: Increases in size and intensity

## Responsive Breakpoints

- **Mobile**: Default (max-width: 448px)
- **All content fits within max-width container**

## Notes for Figma

1. **Use System Font Stack**: The design uses system fonts (sans-serif)
2. **Gradients**: Use linear gradients for all gradient backgrounds
3. **Blur Effects**: Use backdrop blur effects where specified
4. **Shadows**: Use multiple shadow layers for depth
5. **Opacity**: Many elements use opacity (e.g., /50, /60, /80)
6. **Safe Area**: Footer includes safe-area-inset-bottom for mobile devices
7. **Z-index Layers**: Header and Footer at z-20, content below

