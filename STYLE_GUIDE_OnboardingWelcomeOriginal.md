# Style Guide: Onboarding Welcome Original Screen

This document provides all style specifications for the OnboardingWelcomeOriginal component, extracted from the implementation.

## Layout & Container

### Main Container
- **Background**: Gradient from `#F9FAFB` (gray-50) → `#FFFFFF` (white) → `#F9FAFB` (gray-50)
- **Min Height**: 100vh (full screen)
- **Max Width**: 28rem (448px / max-w-md)
- **Margin**: Auto (centered horizontally)
- **Display**: Flex column

### Content Area
- **Padding**: 
  - Horizontal: 1.5rem (24px / px-6)
  - Vertical: 1rem (16px / py-4)
  - Bottom: 6rem (96px / pb-24)
- **Flex**: 1 (grows to fill space)
- **Overflow**: Vertical scroll enabled

---

## Header Section

### Header Container
- **Background**: White with 80% opacity + backdrop blur
- **Border**: Bottom border, `#F3F4F6` (gray-100)
- **Padding**: 
  - Horizontal: 1.25rem (20px / px-5)
  - Vertical: 0.75rem (12px / py-3)
- **Position**: Sticky, top: 0
- **Z-index**: 20

### Header Text
- **Text**: "Welcome to iDen2"
- **Font Size**: 1rem (16px / text-base)
- **Font Weight**: Bold (700)
- **Color**: `#111827` (gray-900)

---

## Welcome Section

### Container
- **Margin Bottom**: 1.25rem (20px / mb-5)
- **Display**: Flex, centered
- **Max Width**: 24rem (384px / max-w-sm)

### Logo Container
- **Position**: Relative
- **Flex**: Shrink disabled (flex-shrink-0)

#### Outer Glow Effect
- **Position**: Absolute, inset: -0.25rem (-4px / -inset-1)
- **Background**: Gradient from `#A78BFA` (violet-400) at 50% opacity → `#C084FC` (purple-400) at 50% opacity
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Blur**: 1.5rem (24px / blur-xl)
- **Z-index**: -10

#### Inner Glow Effect
- **Position**: Absolute, inset: 0
- **Background**: Gradient from `#A78BFA` (violet-400) at 30% opacity → `#C084FC` (purple-400) at 30% opacity
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Blur**: 1rem (16px / blur-lg)
- **Z-index**: -10

#### Logo Image Container
- **Position**: Relative
- **Background**: White
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 0.5rem (8px / p-2)
- **Shadow**: 
  - Large shadow with `#DDD6FE` (violet-200) at 50% opacity
- **Ring**: 
  - Width: 2px
  - Color: `#DDD6FE` (violet-200) at 60% opacity

#### Logo Image
- **Width**: 4rem (64px / w-16)
- **Height**: 4rem (64px / h-16)
- **Border Radius**: 0.5rem (8px / rounded-lg)

### Welcome Text Container
- **Flex**: 1 (grows)
- **Min Width**: 0
- **Display**: Flex column, centered
- **Text Align**: Center

#### "Just One ID Away" Text
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Semibold (600)
- **Color**: `#374151` (gray-700)
- **Line Height**: Relaxed (1.625)
- **Margin Bottom**: 0.25rem (4px / mb-1)

#### "You Are All Set" Text
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Semibold (600)
- **Color**: `#7C3AED` (violet-600)
- **Line Height**: Relaxed (1.625)

---

## Section Headers

### "How it works" Header
- **Margin Bottom**: 1rem (16px / mb-4)
- **Display**: Flex, items centered
- **Gap**: 0.75rem (12px / gap-3)

#### Divider Lines
- **Height**: 1px
- **Flex**: 1 (grows)
- **Background**: Gradient
  - Left: Transparent → `#E5E7EB` (gray-200) → `#D1D5DB` (gray-300)
  - Right: `#D1D5DB` (gray-300) → `#E5E7EB` (gray-200) → Transparent

#### Header Text
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Semibold (600)
- **Color**: `#374151` (gray-700)
- **Padding**: Horizontal 0.75rem (12px / px-3)

---

## Step Cards

### Step Card Container
- **Display**: Flex, items start
- **Gap**: 0.75rem (12px / gap-3)
- **Padding**: 1rem (16px / p-4)
- **Background**: White
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Shadow**: Small (`shadow-sm`)
- **Border**: 1px solid `#F3F4F6` (gray-100)
- **Hover**: 
  - Shadow: Medium (`hover:shadow-md`)
- **Transition**: All properties, default duration

### Step Icon Container
- **Flex**: Shrink disabled (flex-shrink-0)
- **Width**: 3rem (48px / w-12)
- **Height**: 3rem (48px / h-12)
- **Background**: Gradient from `#7C3AED` (violet-500) → `#6D28D9` (violet-600)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Display**: Flex, centered
- **Shadow**: 
  - Medium shadow with `#DDD6FE` (violet-200)

### Step Icon (Lucide Icons)
- **Width**: 1.5rem (24px / w-6)
- **Height**: 1.5rem (24px / h-6)
- **Color**: White
- **Stroke Width**: 2

### Step Content
- **Flex**: 1 (grows)
- **Padding Top**: 0.125rem (2px / pt-0.5)

#### Step Title
- **Font Weight**: Bold (700)
- **Color**: `#111827` (gray-900)
- **Font Size**: 0.875rem (14px / text-sm)

#### Step Description
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#4B5563` (gray-600)
- **Line Height**: Relaxed (1.625)
- **Margin Top**: 0.125rem (2px / mt-0.5)

### Flow Arrow (Between Steps)
- **Display**: Flex, centered
- **Padding**: Vertical 0.25rem (4px / py-1)
- **Width**: 0.125rem (2px / w-0.5)
- **Height**: 1rem (16px / h-4)
- **Background**: Gradient from `#A78BFA` (violet-400) → `#C4B5FD` (violet-300)

---

## Privacy Section

### Separator
- **Margin Bottom**: 0.75rem (12px / mb-3)
- **Display**: Flex, items centered
- **Gap**: 0.75rem (12px / gap-3)

#### Separator Lines
- **Height**: 1px
- **Flex**: 1 (grows)
- **Background**: Gradient
  - Left: Transparent → `#E5E7EB` (gray-200) → `#D1D5DB` (gray-300)
  - Right: `#D1D5DB` (gray-300) → `#E5E7EB` (gray-200) → Transparent

### Privacy Card
- **Background**: White
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 1rem (16px / p-4)
- **Border**: 2px solid `#DDD6FE` (violet-200)
- **Shadow**: Small (`shadow-sm`)
- **Display**: Flex column, items centered
- **Text Align**: Center

#### Privacy Icon Container
- **Width**: 2.5rem (40px / w-10)
- **Height**: 2.5rem (40px / h-10)
- **Background**: Gradient from `#7C3AED` (violet-500) → `#6D28D9` (violet-600)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Display**: Flex, centered
- **Shadow**: Medium shadow with `#DDD6FE` (violet-200)
- **Margin Bottom**: 0.5rem (8px / mb-2)

#### Privacy Icon (Lock)
- **Width**: 1.25rem (20px / w-5)
- **Height**: 1.25rem (20px / h-5)
- **Color**: White
- **Stroke Width**: 1.5

#### Privacy Title
- **Font Weight**: Bold (700)
- **Color**: `#111827` (gray-900)
- **Font Size**: 0.875rem (14px / text-sm)
- **Margin Bottom**: 0.25rem (4px / mb-1)

#### Privacy Description
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#4B5563` (gray-600)
- **Line Height**: Relaxed (1.625)
- **Max Width**: 20rem (320px / max-w-xs)

---

## Footer Section

### Footer Container
- **Background**: White with 80% opacity + backdrop blur
- **Border**: Top border, `#F3F4F6` (gray-100)
- **Padding**: 
  - Horizontal: 1.5rem (24px / px-6)
  - Vertical: 1rem (16px / py-4)
- **Position**: Sticky, bottom: 0
- **Z-index**: 20
- **Shadow**: Large shadow with black at 5% opacity
- **Safe Area**: Bottom inset (for mobile devices)

### Primary Button ("Add Your First ID")
- **Width**: 100%
- **Background**: Gradient from `#7C3AED` (violet-600) → `#6D28D9` (violet-700)
- **Color**: White
- **Font Weight**: Bold (700)
- **Padding**: Vertical 0.875rem (14px / py-3.5)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Shadow**: 
  - Large shadow with `#DDD6FE` (violet-200) at 50% opacity
- **Hover**:
  - Shadow: Extra large with `#DDD6FE` (violet-200) at 60% opacity
  - Background: Gradient from `#6D28D9` (violet-700) → `#5B21B6` (violet-800)
- **Active**: Scale to 98% (`active:scale-[0.98]`)
- **Transition**: All properties, 300ms duration
- **Display**: Flex, items centered, gap: 0.5rem (8px / gap-2)

#### Primary Button Icon
- **Width**: 1rem (16px / w-4)
- **Height**: 1rem (16px / h-4)
- **Stroke Width**: 1.5

#### Primary Button Text
- **Font Size**: 0.875rem (14px / text-sm)

### Secondary Button ("Do It Later")
- **Width**: 100%
- **Background**: White
- **Border**: 1px solid `#C4B5FD` (violet-300)
- **Color**: `#6D28D9` (violet-700)
- **Font Weight**: Semibold (600)
- **Font Size**: 0.875rem (14px / text-sm)
- **Padding**: Vertical 0.75rem (12px / py-3)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Margin Top**: 0.75rem (12px / mt-3)
- **Shadow**: Small (`shadow-sm`)
- **Hover**:
  - Background: `#F5F3FF` (violet-50)
  - Border: `#A78BFA` (violet-400)
- **Active**:
  - Background: `#EDE9FE` (violet-100)
  - Scale: 98% (`active:scale-[0.98]`)
- **Transition**: All properties, 200ms duration

---

## Color Palette

### Primary Colors (Violet/Purple)
- `violet-200`: `#DDD6FE` - Borders, rings, shadows
- `violet-300`: `#C4B5FD` - Borders, gradients
- `violet-400`: `#A78BFA` - Gradients, hover states
- `violet-500`: `#7C3AED` - Icon backgrounds (gradient start)
- `violet-600`: `#7C3AED` - Primary button, text accents
- `violet-700`: `#6D28D9` - Primary button (gradient end), text
- `violet-800`: `#5B21B6` - Primary button hover
- `violet-50`: `#F5F3FF` - Secondary button hover
- `violet-100`: `#EDE9FE` - Secondary button active

### Neutral Colors (Gray)
- `gray-50`: `#F9FAFB` - Background gradients
- `gray-100`: `#F3F4F6` - Borders
- `gray-200`: `#E5E7EB` - Dividers
- `gray-300`: `#D1D5DB` - Dividers
- `gray-600`: `#4B5563` - Body text
- `gray-700`: `#374151` - Section headers
- `gray-900`: `#111827` - Headings, titles

### Other Colors
- `white`: `#FFFFFF` - Cards, backgrounds
- `black`: `#000000` - Shadow (at 5% opacity)

---

## Spacing System

All spacing uses Tailwind's default scale (4px base unit):
- `0.5` = 2px (0.125rem)
- `1` = 4px (0.25rem)
- `1.5` = 6px (0.375rem)
- `2` = 8px (0.5rem)
- `3` = 12px (0.75rem)
- `4` = 16px (1rem)
- `5` = 20px (1.25rem)
- `6` = 24px (1.5rem)
- `10` = 40px (2.5rem)
- `12` = 48px (3rem)
- `16` = 64px (4rem)
- `24` = 96px (6rem)

---

## Typography

### Font Sizes
- `text-xs`: 0.75rem (12px) - Descriptions
- `text-sm`: 0.875rem (14px) - Body text, titles
- `text-base`: 1rem (16px) - Header text

### Font Weights
- `font-semibold`: 600 - Section headers, secondary text
- `font-bold`: 700 - Titles, primary text

### Line Heights
- `leading-relaxed`: 1.625 - Body text, descriptions

---

## Border Radius

- `rounded-lg`: 0.5rem (8px) - Logo image
- `rounded-xl`: 0.75rem (12px) - Cards, buttons, icons

---

## Shadows

- `shadow-sm`: Small shadow - Cards, buttons
- `shadow-md`: Medium shadow - Icons, hover states
- `shadow-lg`: Large shadow - Primary button, footer
- `shadow-xl`: Extra large shadow - Primary button hover
- Custom shadows with color:
  - `shadow-violet-200/50`: Violet shadow at 50% opacity
  - `shadow-violet-200/60`: Violet shadow at 60% opacity
  - `shadow-black/5`: Black shadow at 5% opacity

---

## Effects

### Backdrop Blur
- `backdrop-blur-sm`: Small blur effect on header and footer

### Gradients
- **Background gradients**: `from-{color} to-{color}`
- **Border gradients**: Used in dividers with `via-{color}` for middle stops

### Transitions
- **Default**: `transition-all` with default duration
- **Primary button**: 300ms duration
- **Secondary button**: 200ms duration

### Transforms
- **Active scale**: `scale-[0.98]` (98% scale) on button press

---

## Z-Index Layers

- **Header/Footer**: 20 (sticky elements)
- **Glow effects**: -10 (behind logo)

---

## Responsive Considerations

- **Max width**: 448px (max-w-md) - Centers content on larger screens
- **Safe area**: Bottom inset for mobile devices with notches/home indicators
- **Sticky positioning**: Header and footer remain visible during scroll

---

## Icon Specifications

### Icons Used (Lucide React)
- `Plus` - Step 1, Primary button
- `QrCode` - Step 2
- `Eye` - Step 3
- `Lock` - Privacy section

### Icon Sizes
- **Step icons**: 24px × 24px (w-6 h-6)
- **Privacy icon**: 20px × 20px (w-5 h-5)
- **Button icon**: 16px × 16px (w-4 h-4)

### Icon Stroke Widths
- **Step icons**: 2
- **Privacy icon**: 1.5
- **Button icon**: 1.5
