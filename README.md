# Wallet UX/UI - Selective Disclosure Demo

A React-based UI component for demonstrating selective disclosure scenarios in wallet applications.

## Features

- Multiple scenario demonstrations (age verification, address verification, edge cases, etc.)
- Interactive field selection
- Source selection for conflicting or multiple data sources
- Privacy-preserving options
- Visual warnings for expired credentials, missing fields, and over-sharing risks

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build

To build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
wallet-ux-ui/
├── src/
│   ├── SelectiveDisclosureDemo.tsx  # Main component
│   ├── main.tsx                     # Entry point
│   └── index.css                    # Tailwind CSS imports
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.ts                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
```

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Scenarios Included

1. **Age Verification** - Basic age check scenario
2. **Address Verification** - Delivery address verification
3. **Expired Credential** - Handling expired credentials
4. **Conflicting Data** - Multiple sources with different values
5. **Missing Required Field** - When required credentials aren't available
6. **Partial Data Available** - Manually combined fields
7. **Expired but Data Valid** - Expired credentials with unchanging data
8. **Over-sharing Risk** - Privacy warnings for unnecessary data
9. **Credential Expiring Soon** - Warnings for soon-to-expire credentials
10. **Derived/Calculated Field** - Privacy-preserving calculated values
11. **Multiple Identities** - Handling name changes
12. **Excessive Fields** - Privacy alerts for data brokers
13. **Previously Shared** - Tracking what was shared before

## Customization

The component is fully self-contained in `src/SelectiveDisclosureDemo.tsx`. You can:

- Modify scenarios in the `scenarios` object
- Adjust styling using Tailwind classes
- Add new edge cases or scenarios
- Customize the UI components and interactions

