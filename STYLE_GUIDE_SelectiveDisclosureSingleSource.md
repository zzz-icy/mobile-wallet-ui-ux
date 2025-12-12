# Style Guide: Selective Disclosure Single Source Screen

This document provides all style specifications for the SelectiveDisclosureSingleSource component, extracted from the implementation.

## Layout & Container

### Main Container
- **Background**: `#F9FAFB` (gray-50)
- **Min Height**: 100vh (full screen)
- **Max Width**: 28rem (448px / max-w-md)
- **Margin**: Auto (centered horizontally)
- **Display**: Flex column

### Content Area
- **Padding**: 
  - Horizontal: 1rem (16px / px-4)
  - Top: 1.5rem (24px / mt-6)
  - Bottom: 1rem (16px / pb-4)
- **Flex**: 1 (grows to fill space)

## Header Section

### Header Container
- **Background**: White
- **Border**: Bottom border, `#E5E7EB` (gray-200)
- **Padding**: 
  - Horizontal: 1rem (16px / px-4)
  - Vertical: 0.75rem (12px / py-3)

### Header Content
- **Display**: Flex, items centered, space between

### Cancel Button
- **Color**: `#7C3AED` (violet-600)
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Medium (500)

### Title
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Semibold (600)
- **Color**: `#111827` (gray-900)

### Spacer
- **Width**: 3.5rem (56px / w-14)

---

## Request Info Card

### Card Container
- **Background**: White
- **Margin**: 
  - Horizontal: 1rem (16px / mx-4)
  - Top: 1rem (16px / mt-4)
- **Border Radius**: 1rem (16px / rounded-2xl)
- **Padding**: 1rem (16px / p-4)
- **Shadow**: Small (`shadow-sm`)
- **Border**: 1px solid `#F3F4F6` (gray-100)

### Icon Container
- **Width**: 3rem (48px / w-12)
- **Height**: 3rem (48px / h-12)
- **Background**: `#F5F3FF` (violet-100)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Display**: Flex, centered
- **Flex**: Shrink disabled

### Icon (Shield)
- **Width**: 1.5rem (24px / w-6)
- **Height**: 1.5rem (24px / h-6)
- **Color**: `#7C3AED` (violet-600)

### Verifier Name
- **Font Weight**: Semibold (600)
- **Color**: `#111827` (gray-900)
- **Font Size**: 1rem (16px / text-base)

### Verifier Purpose
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#6B7280` (gray-500)
- **Margin Top**: 0.125rem (2px / mt-0.5)

---

## Flow Indicator

### Container
- **Margin**: 
  - Horizontal: 1rem (16px / mx-4)
  - Top: 1rem (16px / mt-4)
- **Padding**: 
  - Horizontal: 1rem (16px / px-4)
  - Vertical: 0.75rem (12px / py-3)

### Step Container
- **Display**: Flex, items centered
- **Gap**: 0.5rem (8px / gap-2)

### Step Circle (Active)
- **Width**: 1.5rem (24px / w-6)
- **Height**: 1.5rem (24px / h-6)
- **Background**: `#7C3AED` (violet-600)
- **Color**: White
- **Border Radius**: Full (rounded-full)
- **Display**: Flex, centered
- **Font Size**: 0.75rem (12px / text-xs)
- **Font Weight**: Semibold (600)

### Step Circle (Completed)
- **Width**: 1.5rem (24px / w-6)
- **Height**: 1.5rem (24px / h-6)
- **Background**: `#F5F3FF` (violet-100)
- **Color**: `#7C3AED` (violet-600)
- **Border Radius**: Full (rounded-full)
- **Display**: Flex, centered

### Step Circle (Inactive)
- **Width**: 1.5rem (24px / w-6)
- **Height**: 1.5rem (24px / h-6)
- **Background**: `#F3F4F6` (gray-100)
- **Color**: `#9CA3AF` (gray-400)
- **Border Radius**: Full (rounded-full)
- **Display**: Flex, centered
- **Font Size**: 0.75rem (12px / text-xs)
- **Font Weight**: Semibold (600)

### Step Label (Active)
- **Font Size**: 0.75rem (12px / text-xs)
- **Font Weight**: Medium (500)
- **Color**: `#111827` (gray-900)

### Step Label (Inactive)
- **Font Size**: 0.75rem (12px / text-xs)
- **Font Weight**: Medium (500)
- **Color**: `#9CA3AF` (gray-400)

### Connector Line (Active)
- **Height**: 2px (0.125rem / h-0.5)
- **Background**: `#7C3AED` (violet-600)
- **Flex**: 1

### Connector Line (Inactive)
- **Height**: 2px (0.125rem / h-0.5)
- **Background**: `#E5E7EB` (gray-200)
- **Flex**: 1

### Check Icon (in completed step)
- **Width**: 1rem (16px / w-4)
- **Height**: 1rem (16px / h-4)
- **Stroke Width**: 3

---

## Warning Cards

### Excessive Request Warning
- **Background**: `#FEF2F2` (red-50)
- **Border**: 2px solid `#FCA5A5` (red-300)
- **Border Radius**: 1rem (16px / rounded-2xl)
- **Padding**: 1rem (16px / p-4)
- **Margin**: 
  - Horizontal: 1rem (16px / mx-4)
  - Top: 1rem (16px / mt-4)

#### Title
- **Font Weight**: Bold (700)
- **Color**: `#991B1B` (red-900)
- **Font Size**: 1rem (16px / text-base)

#### Body Text
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#991B1B` (red-800)
- **Font Weight**: Medium (500)
- **Margin Top**: 0.5rem (8px / mt-2)

#### Secondary Text
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#B91C1C` (red-700)
- **Margin Top**: 0.5rem (8px / mt-2)

#### Action Buttons
- **Font Size**: 0.75rem (12px / text-xs)
- **Font Weight**: Semibold (600)
- **Padding**: 
  - Horizontal: 0.75rem (12px / px-3)
  - Vertical: 0.375rem (6px / py-1.5)
- **Border Radius**: 0.5rem (8px / rounded-lg)
- **Gap**: 0.5rem (8px / gap-2)

##### Deny Button
- **Color**: `#B91C1C` (red-700)
- **Background**: `#FEE2E2` (red-100)
- **Hover**: Background `#FECACA` (red-200)

##### Report Button
- **Color**: `#374151` (gray-700)
- **Background**: `#F3F4F6` (gray-100)
- **Hover**: Background `#E5E7EB` (gray-200)

### Missing Required Fields Warning
- **Background**: `#FEF2F2` (red-50)
- **Border**: 1px solid `#FECACA` (red-200)
- **Border Radius**: 1rem (16px / rounded-2xl)
- **Padding**: 1rem (16px / p-4)
- **Margin**: 
  - Horizontal: 1rem (16px / mx-4)
  - Top: 1rem (16px / mt-4)

#### Title
- **Font Weight**: Semibold (600)
- **Color**: `#991B1B` (red-900)
- **Font Size**: 0.875rem (14px / text-sm)

#### Body Text
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#B91C1C` (red-700)
- **Margin Top**: 0.25rem (4px / mt-1)

### Previous Sharing Notice
- **Background**: `#EFF6FF` (blue-50)
- **Border**: 1px solid `#BFDBFE` (blue-200)
- **Border Radius**: 1rem (16px / rounded-2xl)
- **Padding**: 1rem (16px / p-4)
- **Margin**: 
  - Horizontal: 1rem (16px / mx-4)
  - Top: 1rem (16px / mt-4)

#### Title
- **Font Weight**: Semibold (600)
- **Color**: `#1E3A8A` (blue-900)
- **Font Size**: 0.875rem (14px / text-sm)

#### Body Text
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#1E40AF` (blue-700)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Additional Info
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#2563EB` (blue-600)
- **Margin Top**: 0.5rem (8px / mt-2)

### Warning Icons
- **Width**: 1.5rem (24px / w-6) for large warnings
- **Width**: 1.25rem (20px / w-5) for small warnings
- **Height**: Same as width
- **Color**: `#DC2626` (red-600) for alerts
- **Color**: `#2563EB` (blue-600) for info
- **Flex**: Shrink disabled
- **Margin Top**: 0.125rem (2px / mt-0.5)

---

## Source Selection Section

### Section Header
- **Margin Bottom**: 1rem (16px / mb-4)

#### Title
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Semibold (600)
- **Color**: `#111827` (gray-900)
- **Margin Bottom**: 0.25rem (4px / mb-1)

#### Subtitle
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#4B5563` (gray-600)

### Source Cards

#### Unselected Source Card
- **Background**: White
- **Border**: 2px solid `#E5E7EB` (gray-200)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 1rem (16px / p-4)
- **Hover**: 
  - Border: `#C4B5FD` (violet-300)
  - Background: `#F5F3FF` at 50% opacity (violet-50/50)
- **Transition**: All properties
- **Text Align**: Left
- **Width**: 100%

#### Selected Source Card
- **Background**: `#F5F3FF` (violet-50)
- **Border**: 2px solid `#7C3AED` (violet-600)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 1rem (16px / p-4)
- **Shadow**: Small (`shadow-sm`)
- **Text Align**: Left
- **Width**: 100%

#### Source Icon Container
- **Flex**: Shrink disabled
- **Margin Top**: 0.125rem (2px / mt-0.5)

#### Source Icon
- **Width**: 1.25rem (20px / w-5)
- **Height**: 1.25rem (20px / h-5)
- **Color (Selected)**: `#7C3AED` (violet-600)
- **Color (Unselected)**: `#9CA3AF` (gray-400)

#### Source Name (Selected)
- **Font Weight**: Semibold (600)
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#581C87` (violet-900)

#### Source Name (Unselected)
- **Font Weight**: Semibold (600)
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#111827` (gray-900)

#### Source Description (Selected)
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#6D28D9` (violet-700)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Source Description (Unselected)
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#6B7280` (gray-500)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Expired Credential Warning
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#DC2626` (red-600)
- **Margin Top**: 0.5rem (8px / mt-2)
- **Display**: Flex, items centered
- **Gap**: 0.375rem (6px / gap-1.5)

#### Check Icon (Selected Source)
- **Width**: 1rem (16px / w-4)
- **Height**: 1rem (16px / h-4)
- **Color**: `#7C3AED` (violet-600)
- **Stroke Width**: 3

### Source Selection CTA Button

#### Enabled State
- **Background**: `#7C3AED` (violet-600)
- **Color**: White
- **Font Weight**: Semibold (600)
- **Padding**: Vertical 1rem (16px / py-4)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Shadow**: Small (`shadow-sm`)
- **Hover**: Background `#6D28D9` (violet-700)
- **Transition**: Colors
- **Width**: 100%
- **Cursor**: Pointer

#### Disabled State
- **Background**: `#D1D5DB` (gray-300)
- **Color**: `#6B7280` (gray-500)
- **Font Weight**: Semibold (600)
- **Padding**: Vertical 1rem (16px / py-4)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Shadow**: Small (`shadow-sm`)
- **Width**: 100%
- **Cursor**: Not allowed

---

## Field Selection Section

### Section Header
- **Margin Bottom**: 1rem (16px / mb-4)
- **Display**: Flex, items centered, space between

#### "Sharing from" Text
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#4B5563` (gray-600)

#### Source Name
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Semibold (600)
- **Color**: `#7C3AED` (violet-600)

#### Expired Label
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#DC2626` (red-600)

#### Change Button
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#7C3AED` (violet-600)
- **Font Weight**: Medium (500)
- **Hover**: Color `#6D28D9` (violet-700)

### Field Cards

#### Unselected Field Card
- **Background**: White
- **Border**: 2px solid `#E5E7EB` (gray-200)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 1rem (16px / p-4)
- **Margin Bottom**: 0.75rem (12px / mb-3)
- **Focus**: 
  - Background: White
  - Border: `#E5E7EB` (gray-200)
- **Active**: 
  - Background: White
  - Border: `#E5E7EB` (gray-200)
- **Transition**: All properties
- **Text Align**: Left
- **Width**: 100%
- **Cursor**: Pointer
- **Focus Outline**: None

#### Selected Field Card
- **Background**: `#F5F3FF` (violet-50)
- **Border**: 2px solid `#7C3AED` (violet-600)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 1rem (16px / p-4)
- **Margin Bottom**: 0.75rem (12px / mb-3)
- **Shadow**: Small (`shadow-sm`)
- **Text Align**: Left
- **Width**: 100%

#### Required Field Card
- **Opacity**: 75% (0.75)
- **Cursor**: Default (not clickable)

#### Field Label (Selected)
- **Font Weight**: Semibold (600)
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#581C87` (violet-900)

#### Field Label (Unselected)
- **Font Weight**: Semibold (600)
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#111827` (gray-900)

#### Field Value (Selected)
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Medium (500)
- **Color**: `#6D28D9` (violet-700)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Field Value (Unselected)
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Medium (500)
- **Color**: `#374151` (gray-700)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Required Badge
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#6B7280` (gray-500)

#### Privacy-Preserving Badge
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#16A34A` (green-600)
- **Margin Top**: 0.25rem (4px / mt-1)
- **Display**: Inline block

#### Check Icon (Selected Field)
- **Width**: 1rem (16px / w-4)
- **Height**: 1rem (16px / h-4)
- **Color**: `#7C3AED` (violet-600)
- **Stroke Width**: 3

### Data Option Selector

#### Toggle Button
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#7C3AED` (violet-600)
- **Hover**: Color `#6D28D9` (violet-700)
- **Text Align**: Left
- **Width**: 100%
- **Display**: Flex, items centered
- **Gap**: 0.25rem (4px / gap-1)
- **Margin Top**: 0.5rem (8px / mt-2)

#### Chevron Icon
- **Width**: 0.75rem (12px / w-3)
- **Height**: 0.75rem (12px / h-3)
- **Margin Left**: Auto
- **Transition**: Transform
- **Rotated**: 180 degrees when expanded

### Data Options List

#### Option Card (Selected)
- **Background**: `#F5F3FF` (violet-50)
- **Border**: 1px solid `#DDD6FE` (violet-200)
- **Border Radius**: 0.5rem (8px / rounded-lg)
- **Padding**: 
  - Horizontal: 0.75rem (12px / px-3)
  - Vertical: 0.625rem (10px / py-2.5)
- **Display**: Flex, items start, space between
- **Transition**: Colors
- **Width**: 100%

#### Option Card (Unselected)
- **Background**: White
- **Border**: 1px solid `#E5E7EB` (gray-200)
- **Border Radius**: 0.5rem (8px / rounded-lg)
- **Padding**: 
  - Horizontal: 0.75rem (12px / px-3)
  - Vertical: 0.625rem (10px / py-2.5)
- **Hover**: Background `#F9FAFB` (gray-50)
- **Display**: Flex, items start, space between
- **Transition**: Colors
- **Width**: 100%

#### Option Label (Selected)
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Medium (500)
- **Color**: `#581C87` (violet-900)

#### Option Label (Unselected)
- **Font Size**: 0.875rem (14px / text-sm)
- **Font Weight**: Medium (500)
- **Color**: `#374151` (gray-700)

#### Option Value
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#4B5563` (gray-600)

#### Privacy-Preserving Badge (in option)
- **Font Size**: 0.75rem (12px / text-xs)
- **Background**: `#D1FAE5` (green-100)
- **Color**: `#15803D` (green-700)
- **Padding**: 
  - Horizontal: 0.375rem (6px / px-1.5)
  - Vertical: 0.125rem (2px / py-0.5)
- **Border Radius**: 0.25rem (4px / rounded)
- **Font Weight**: Medium (500)

#### Expired Badge
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#DC2626` (red-600)
- **Display**: Flex, items centered
- **Gap**: 0.25rem (4px / gap-1)

#### Expired (Valid) Badge
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#D97706` (amber-600)
- **Display**: Flex, items centered
- **Gap**: 0.25rem (4px / gap-1)

#### Calculated From Text
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#16A34A` (green-600)

#### Option Check Icon
- **Width**: 1rem (16px / w-4)
- **Height**: 1rem (16px / h-4)
- **Color**: `#7C3AED` (violet-600)
- **Flex**: Shrink disabled
- **Margin Top**: 0.25rem (4px / mt-1)
- **Stroke Width**: 2.5

### Missing Field Card

#### Container
- **Background**: `#FEF2F2` (red-50)
- **Border**: 2px solid `#FECACA` (red-200)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Padding**: 1rem (16px / p-4)

#### Icon Container
- **Width**: 1.5rem (24px / w-6)
- **Height**: 1.5rem (24px / h-6)
- **Background**: White
- **Border**: 2px solid `#FCA5A5` (red-300)
- **Border Radius**: 0.5rem (8px / rounded-lg)
- **Display**: Flex, centered
- **Flex**: Shrink disabled
- **Margin Top**: 0.125rem (2px / mt-0.5)

#### X Icon
- **Width**: 1rem (16px / w-4)
- **Height**: 1rem (16px / h-4)
- **Color**: `#EF4444` (red-500)
- **Stroke Width**: 2.5

#### Missing Field Title
- **Font Weight**: Semibold (600)
- **Color**: `#111827` (gray-900)
- **Font Size**: 0.875rem (14px / text-sm)

#### Missing Field Message
- **Font Size**: 0.875rem (14px / text-sm)
- **Color**: `#B91C1C` (red-700)
- **Font Weight**: Medium (500)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Missing Field Description
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#DC2626` (red-600)
- **Margin Top**: 0.25rem (4px / mt-1)

#### Add Credential Button
- **Font Size**: 0.75rem (12px / text-xs)
- **Font Weight**: Medium (500)
- **Color**: `#7C3AED` (violet-600)
- **Hover**: Color `#6D28D9` (violet-700)
- **Margin Top**: 0.75rem (12px / mt-3)
- **Display**: Flex, items centered
- **Gap**: 0.375rem (6px / gap-1.5)

#### Plus Icon
- **Width**: 0.875rem (14px / w-3.5)
- **Height**: 0.875rem (14px / h-3.5)

### Warning Messages (in fields)

#### Multiple Identities Warning
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#D97706` (amber-600)
- **Margin Top**: 0.5rem (8px / mt-2)
- **Display**: Flex, items centered
- **Gap**: 0.375rem (6px / gap-1.5)

#### Warning Icon
- **Width**: 0.875rem (14px / w-3.5)
- **Height**: 0.875rem (14px / h-3.5)

### Info Text
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#6B7280` (gray-500)
- **Margin Top**: 1rem (16px / mt-4)
- **Padding**: Horizontal 0.25rem (4px / px-1)
- **Text Align**: Center

---

## Bottom Action Section

### Container
- **Background**: White
- **Border**: Top border, `#E5E7EB` (gray-200)
- **Padding**: 
  - Horizontal: 1rem (16px / px-4)
  - Vertical: 1rem (16px / py-4)
- **Margin Top**: Auto

### Primary Button (Enabled)
- **Background**: `#7C3AED` (violet-600)
- **Color**: White
- **Font Weight**: Semibold (600)
- **Padding**: Vertical 1rem (16px / py-4)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Shadow**: Small (`shadow-sm`)
- **Hover**: Background `#6D28D9` (violet-700)
- **Transition**: Colors
- **Width**: 100%

### Primary Button (Disabled)
- **Background**: `#D1D5DB` (gray-300)
- **Color**: `#6B7280` (gray-500)
- **Font Weight**: Semibold (600)
- **Padding**: Vertical 1rem (16px / py-4)
- **Border Radius**: 0.75rem (12px / rounded-xl)
- **Shadow**: Small (`shadow-sm`)
- **Width**: 100%
- **Cursor**: Not allowed

### Helper Text
- **Font Size**: 0.75rem (12px / text-xs)
- **Color**: `#6B7280` (gray-500)
- **Text Align**: Center
- **Margin Top**: 0.75rem (12px / mt-3)

---

## Color Palette

### Primary Colors (Violet/Purple)
- `violet-50`: `#F5F3FF` - Selected backgrounds
- `violet-100`: `#EDE9FE` - Icon backgrounds
- `violet-200`: `#DDD6FE` - Selected option borders
- `violet-300`: `#C4B5FD` - Hover borders
- `violet-600`: `#7C3AED` - Primary actions, borders, text
- `violet-700`: `#6D28D9` - Hover states, text
- `violet-900`: `#581C87` - Selected text

### Neutral Colors (Gray)
- `gray-50`: `#F9FAFB` - Background, hover states
- `gray-100`: `#F3F4F6` - Borders, inactive states
- `gray-200`: `#E5E7EB` - Borders, dividers
- `gray-300`: `#D1D5DB` - Disabled backgrounds
- `gray-400`: `#9CA3AF` - Inactive icons, text
- `gray-500`: `#6B7280` - Secondary text
- `gray-600`: `#4B5563` - Body text
- `gray-700`: `#374151` - Text
- `gray-800`: `#1F2937` - Demo controls background
- `gray-900`: `#111827` - Headings, titles

### Status Colors

#### Red (Errors/Warnings)
- `red-50`: `#FEF2F2` - Warning backgrounds
- `red-100`: `#FEE2E2` - Button backgrounds
- `red-200`: `#FECACA` - Borders
- `red-300`: `#FCA5A5` - Borders
- `red-500`: `#EF4444` - Icons
- `red-600`: `#DC2626` - Text, icons
- `red-700`: `#B91C1C` - Text
- `red-800`: `#991B1B` - Text
- `red-900`: `#991B1B` - Headings

#### Blue (Info)
- `blue-50`: `#EFF6FF` - Info backgrounds
- `blue-200`: `#BFDBFE` - Borders
- `blue-600`: `#2563EB` - Icons, text
- `blue-700`: `#1E40AF` - Text
- `blue-900`: `#1E3A8A` - Headings

#### Green (Success/Privacy)
- `green-100`: `#D1FAE5` - Badge backgrounds
- `green-600`: `#16A34A` - Text, badges
- `green-700`: `#15803D` - Badge text

#### Amber/Yellow (Warnings)
- `amber-600`: `#D97706` - Warning text
- `yellow-400`: `#FACC15` - Demo controls border

### Other Colors
- `white`: `#FFFFFF` - Cards, backgrounds
- `black`: `#000000` - Shadows (at various opacities)

---

## Spacing System

All spacing uses Tailwind's default scale (4px base unit):
- `0.5` = 2px (0.125rem)
- `1` = 4px (0.25rem)
- `1.5` = 6px (0.375rem)
- `2` = 8px (0.5rem)
- `3` = 12px (0.75rem)
- `4` = 16px (1rem)
- `6` = 24px (1.5rem)
- `12` = 48px (3rem)
- `24` = 96px (6rem)

---

## Typography

### Font Sizes
- `text-xs`: 0.75rem (12px) - Descriptions, badges, helper text
- `text-sm`: 0.875rem (14px) - Body text, labels, buttons
- `text-base`: 1rem (16px) - Titles, headings

### Font Weights
- `font-medium`: 500 - Body text, labels
- `font-semibold`: 600 - Titles, buttons, selected states
- `font-bold`: 700 - Important headings, warnings

### Line Heights
- Default line heights are used (typically 1.5 for body text)

---

## Border Radius

- `rounded`: 0.25rem (4px) - Small badges
- `rounded-lg`: 0.5rem (8px) - Buttons, small cards
- `rounded-xl`: 0.75rem (12px) - Cards, source/field buttons
- `rounded-2xl`: 1rem (16px) - Large cards, info cards
- `rounded-full`: 50% - Step circles, circular icons

---

## Shadows

- `shadow-sm`: Small shadow - Cards, buttons
- `shadow-2xl`: Extra large shadow - Dropdowns

---

## Effects

### Transitions
- **Default**: `transition-all` with default duration
- **Colors**: `transition-colors` for color changes
- **Transform**: `transition-transform` for rotations (chevrons)

### Transforms
- **Rotate**: 180 degrees for expanded dropdowns

### Focus States
- **Outline**: None (removed for custom styling)
- **Background**: Explicitly set to maintain state

### Active States
- **Background**: Explicitly set to maintain state

---

## Z-Index Layers

- **Demo Controls**: 50
- **Dropdowns**: 50

---

## Icon Specifications

### Icons Used (Lucide React)
- `Check` - Selected states, completed steps
- `ChevronDown` - Dropdowns, expandable sections
- `Shield` - Security/verifier icon
- `Info` - Information notices
- `AlertCircle` - Warnings, alerts
- `Clock` - Expired credentials, time-related
- `Plus` - Add actions
- `X` - Missing fields, close actions
- `CreditCard` - Passport icon
- `FileText` - Document icon
- `Car` - Driver's license icon

### Icon Sizes
- **Small**: 0.75rem (12px / w-3 h-3) - Inline badges
- **Small-Medium**: 0.875rem (14px / w-3.5 h-3.5) - Warning icons
- **Medium**: 1rem (16px / w-4 h-4) - Check marks, step icons
- **Medium-Large**: 1.25rem (20px / w-5 h-5) - Source icons
- **Large**: 1.5rem (24px / w-6 h-6) - Main icons, warning icons

### Icon Stroke Widths
- **Thin**: 1.5
- **Normal**: 2
- **Medium**: 2.5
- **Thick**: 3

---

## Responsive Considerations

- **Max width**: 448px (max-w-md) - Centers content on larger screens
- **Full width buttons**: All buttons span 100% width
- **Flexible layouts**: Uses flexbox for responsive alignment
- **Scrollable areas**: Dropdowns and content areas have max-height with overflow

---

## State Management Notes

### Selected States
- Selected sources/fields use violet-50 background with violet-600 border
- Selected options use violet-50 background with violet-200 border
- Check icons appear in selected states

### Disabled States
- Disabled buttons use gray-300 background with gray-500 text
- Required fields that can't be toggled have 75% opacity

### Hover States
- Source cards: Border changes to violet-300, background to violet-50/50
- Buttons: Background darkens (violet-600 → violet-700)
- Text links: Color darkens (violet-600 → violet-700)

### Focus States
- Buttons blur after click to prevent focus state from persisting
- Focus states explicitly set to maintain visual consistency

---

## Component Structure Notes

1. **Two-Step Flow**: Source selection → Field selection
2. **Conditional Rendering**: Different sections show based on `selectedSource` state
3. **Dynamic Content**: Field cards, source cards, and options are dynamically generated
4. **State Preservation**: Selected source is preserved when going back to change it
5. **Auto-Selection**: Required fields are automatically selected when source is chosen
6. **Data Options**: Fields with multiple data sources show expandable option selector
