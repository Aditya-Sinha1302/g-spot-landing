# Goal Description
Build a high-energy, Gen Z streetwear landing page for "G-Spot" using a mobile-first approach. The design will feature a "Midnight Brutalist" aesthetic with deep blacks, high-contrast white text, electric purple accents, and aggressive typography. The page will include a massive hero section with a scroll-triggered headline, a 3-column "Drop Grid" for latest items with interactive hover states and tags, and a sticky "Notify Me" button.

## Proposed Changes
We will build this using a pure HTML/CSS/JS stack as requested for maximum control over the Vanilla CSS styles and animations, keeping it lightweight and extremely fast for mobile users.

---

### App Files
#### [NEW] index.html
Will contain the semantic HTML layout for the landing page. It will import `Archivo Black` from Google Fonts and link to the CSS/JS files.

#### [NEW] styles.css
Will encapsulate the "Midnight Brutalist" design system using CSS variables:
- Background: `#050505`
- Text: `#FFFFFF`
- Accent: Electric Purple (e.g., `#B829FF`)
- Typography: `Archivo Black` for headings, `Inter` for body text.
Will contain all styles for the responsive grid, sticky button, and complex CSS custom properties for hover effects and animations.

#### [NEW] script.js
Will handle the IntersectionObserver for scroll-triggered entrance animations on the massive bold headline and other elements.

## Verification Plan
### Automated Tests
- N/A for static HTML/CSS/JS.

### Manual Verification
- Open `index.html` in Chrome/Safari to check the design system and brutalist styling.
- Test responsiveness by resizing the browser window to mobile devices dimensions (simulatingKoramanagala crowd phones).
- Hover over "Drop Grid" cards to ensure scaling animations and tags work perfectly.
- Scroll down to verify scroll-triggered animations in the hero section.
- Ensure "Notify Me" button remains sticky at the bottom or corner on all scroll positions.
