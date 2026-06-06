# Design System Documentation

This document contains a comprehensive record of the design-related configurations, utility definitions, typography styles, spacing systems, and custom components used across the UareTech website.

---

## 1. Color Palette

The project utilizes a light/slate aesthetic with high-contrast accent highlights and standard light/dark background semantics, defined inside [index.css](file:///e:/UARETECH/UareTech_Website/src/index.css).

### Primary Colors
*   **Brand Primary (Blue)**
    *   **HEX**: `#2563EB`
    *   **RGB**: `rgb(37, 99, 235)`
    *   **Usage**: Primary buttons, links, active navigation lines, form highlights, and brand logos.

### Secondary Colors
*   **Brand Secondary (Cyan)**
    *   **HEX**: `#06B6D4`
    *   **RGB**: `rgb(6, 182, 212)`
    *   **Usage**: Gradient highlights, secondary icons, visual card backdrops, and accents.

### Accent Colors
*   **Brand Accent (Purple)**
    *   **HEX**: `#8B5CF6`
    *   **RGB**: `rgb(139, 92, 246)`
    *   **Usage**: Gradient transitions, active badges, ambient glow elements, and background shapes.

### Background Colors
*   **Deep Background (Light Gray/White)**
    *   **HEX**: `#FFFFFF` / `#F8FAFC`
    *   **RGB**: `rgb(255, 255, 255)` / `rgb(248, 250, 252)`
    *   **Usage**: Global HTML body, section backdrops, and card backgrounds.
*   **Elevated Background (Dark Slate)**
    *   **HEX**: `#0F172A`
    *   **RGB**: `rgb(15, 23, 42)`
    *   **Usage**: Footer container and high-contrast dark sections.

### Text Colors
*   **Primary Text (Dark Slate)**
    *   **HEX**: `#0F172A`
    *   **RGB**: `rgb(15, 23, 42)`
    *   **Usage**: All headings (`h1` to `h6`) and main labels.
*   **Secondary Text (Slate Gray)**
    *   **HEX**: `#475569`
    *   **RGB**: `rgb(71, 85, 105)`
    *   **Usage**: Subheadings, standard text blocks, and paragraph body.
*   **Tertiary Text (Cool Gray)**
    *   **HEX**: `#64748B`
    *   **RGB**: `rgb(100, 116, 139)`
    *   **Usage**: Input labels, descriptors, and subtitle highlights.

### Border Colors
*   **Core Border**
    *   **HEX**: `#E2E8F0`
    *   **RGB**: `rgb(226, 232, 240)`
    *   **Usage**: Card borders, inputs, and layout dividers.

### Hover State Colors
*   **Glass Card Hover**
    *   **HEX**: `rgba(255, 255, 255, 0.9)`
    *   **Usage**: Dynamic card highlighting.
*   **Social Link Hover**
    *   **HEX**: `#FFFFFF`
    *   **Usage**: Icon colors when active in footer.

### Gradient Colors
*   **Primary Brand Gradient**
    *   **HEX/CSS**: `linear-gradient(135deg, #2563EB, #06B6D4, #8B5CF6)`
    *   **Usage**: Heading gradients (`.text-gradient`), buttons, and top border accents.

### Status Colors
*   **Success**
    *   **HEX**: `#10B981` (Green)
    *   **Usage**: Check circle validation marks and success confirmation.
*   **Error**
    *   **HEX**: `#EF4444` (Red)
    *   **Usage**: Form validation errors, warnings, and input error borders.

---

## 2. Typography

The typography system is imported dynamically from Google Fonts and maps specifically to layout hierarchies.

### Font Family
*   **Primary Font (Sans-Serif)**: `"Inter", sans-serif` — Used for body text, form elements, descriptions, and list items.
*   **Secondary Font (Heading)**: `"Outfit", sans-serif` — Used for headings, action titles, badges, and button labels.
*   **Decorative Font**: `"Poppins", sans-serif` — Used in custom visual cards.
*   **Fallback Fonts**: `sans-serif` (system default)

### Font Sizes
*   **Hero Heading**: `text-4xl` (36px) | `sm:text-5xl` (48px) | `md:text-6xl` (60px)
*   **Section Heading**: `text-3xl` (30px) | `sm:text-4xl` (36px)
*   **Subheading**: `text-xl` (20px) | `sm:text-2xl` (24px) | `md:text-3xl` (30px)
*   **Body Text**: `text-base` (16px) | `sm:text-lg` (18px)
*   **Small / Micro Text**: `text-xs` (12px) | `text-[11px]` (11px) | `text-[10px]` (10px)
*   **Button Text**: `text-sm` (14px)
*   **Footer Text**: `text-xs` (12px) | `text-sm` (14px)
*   **Form Labels**: `text-sm` (14px) default | `text-xs` (12px) when focused/active.

### Font Weights
*   **Light**: `300` (Used for lightweight subheadings or descriptors)
*   **Regular**: `400` (Used for paragraph body and standard inputs)
*   **Medium**: `500` (Used for navigation items and labels)
*   **Semi-Bold**: `600` (Used for sub-accents and form highlights)
*   **Bold**: `700` (Used for headers, cards, and buttons)
*   **Extra-Bold / Black**: `800` / `900` (Used for hero titles)

### Line Heights
*   **Hero/Title Line**: `leading-[1.1]` / `leading-tight`
*   **Standard Heading Line**: `leading-snug` / `leading-normal`
*   **Body Text Line**: `leading-relaxed`

### Letter Spacing
*   **Headings**: `tracking-tight` (-0.025em)
*   **Buttons**: `tracking-wide` (0.025em)
*   **Tagline Badges**: `tracking-wider` (0.05em)
*   **Marquee Text**: `tracking-[0.25em]` (0.25em)

---

## 3. Spacing System

Tailwind's standardized spacing system is applied to keep section padding and card structures consistent.

*   **Margin Scale**: Standard margins (`mb-6`, `mb-10`, `mb-16`, `mt-2`, `my-2`) are used for modular spacing.
*   **Padding Scale**: Inputs utilize `px-4 py-3.5`. Button items utilize `px-6 py-3`.
*   **Section Spacing**: Vertical padding of `py-24` (96px) is standard for sections. Hero sections utilize `pt-32 pb-20` or `pt-36 pb-12` to offset sticky navigation.
*   **Component Spacing**: flex/grid components use layout gaps of `gap-3`, `gap-4`, `gap-6`, `gap-8`, and `gap-12`.

---

## 4. Border System

*   **Border Widths**:
    *   Standard divider / input: `1px` (`border`)
    *   Dashed decorative outlines: `2px` (`border-2 border-dashed`)
*   **Border Radius Values**:
    *   Standard Input / Accent Cards: `rounded-xl` (12px)
    *   Info Pills / Detail Cards: `rounded-2xl` (16px)
    *   Large Components / Main Grid Panels: `rounded-3xl` (24px)
    *   Buttons & Badges: `rounded-full` (9999px)
*   **Divider Styles**: Thin borders using `border-slate-200/60` (light sections) and `border-slate-800/50` (dark footer).

---

## 5. Shadows & Effects

*   **Card Shadows**:
    *   `shadow-glass`: `0 10px 30px rgba(37, 99, 235, 0.08)`
    *   `shadow-glass-hover`: `0 20px 40px rgba(37, 99, 235, 0.15)`
*   **Button Shadows**: `shadow-glow` (`0 0 35px 0 rgba(37, 99, 235, 0.12)`)
*   **Glassmorphism Effects**: `.glass-card` uses a backdrop blur of `15px` combined with a thin border and standard glass shadow.
*   **Blur Effects**: Dynamic backdrops use ambient glow shapes with blurs ranging from `blur-xl` to `blur-[160px]`.

---

## 6. Buttons

Implemented as a customizable component in [Button.jsx](file:///e:/UARETECH/UareTech_Website/src/components/common/Button.jsx).

### Primary Button
*   **Background**: `linear-gradient(135deg, #2563EB, #06B6D4)`
*   **Text Color**: `#FFFFFF`
*   **Border**: None
*   **Hover State**: `linear-gradient(135deg, #1D4ED8, #8B5CF6)` with `0 8px 24px rgba(37, 99, 235, 0.2)` shadow. Scale `1.03`, translateY `-2px`.
*   **Active State**: Scale `0.97`.

### Secondary Button
*   **Background**: White/Elevated (`#FFFFFF`) interior background.
*   **Text Color**: Brand gradient text.
*   **Border**: `1.5px` border outline utilizing a custom brand gradient mask (`.gradient-border-btn`).
*   **Hover State**: Outer background turns slightly translucent (`rgba(255, 255, 255, 0.7)`), scale `1.03`, translateY `-2px`.
*   **Active State**: Scale `0.97`.

### Outline Button
*   **Background**: `transparent`
*   **Text Color**: Slate Gray (`#475569`) changing to Blue (`#2563EB`) on hover.
*   **Hover State**: Scale `1.05`, shift right `2px`.

---

## 7. Forms

Form components are built using native HTML elements enhanced with responsive Tailwind styles.

*   **Input / Textarea / Dropdown Base Style**:
    ```css
    peer w-full px-4 py-3.5 rounded-xl border border-slate-200 
    focus:border-brand-primary/40 bg-white text-slate-900 
    font-inter text-sm outline-none transition-all duration-300 shadow-sm
    ```
*   **Validation States**:
    *   **Invalid State**: Input border highlights to `border-red-500` (on blur / touch).
    *   **Error Label**: Shows below input as `text-red-500 font-inter text-[11px] font-semibold mt-1.5 px-1`.
*   **Focus States**: Border transitions to `focus:border-brand-primary/40`. The input label dynamically transitions into a small floating label above the input:
    ```css
    top-0 text-xs text-brand-primary bg-white px-1.5 -translate-y-1/2
    ```

---

## 8. Responsive Breakpoints

Utilizes standard Tailwind breakpoints:

*   **Mobile**: `< 640px`
*   **Tablet**: `sm: 640px` | `md: 768px`
*   **Laptop**: `lg: 1024px`
*   **Desktop**: `xl: 1280px`
*   **Large Desktop**: `2xl: 1536px`

---

## 9. Animations

Animations are controlled using **Framer Motion** and standard CSS transitions.

*   **Hover Animations**: `whileHover={{ scale: 1.03, translateY: -2 }}` for buttons, card translations (`hover:translate-x-1`, `hover:-translate-y-1`).
*   **Scroll Animations**: Staggered scroll animations:
    ```javascript
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    ```
*   **Fade Effects**: Route changes and panel swaps are controlled using `AnimatePresence` with custom entry/exit transitions.
*   **Transitions**: Transitions utilize `transition-all duration-300` / `duration-500` for smooth spacing modifications.

---

## 10. Component Design Standards

*   **Navbar**: Translucent sticky bar (`backdrop-blur-xl bg-white/75 border-b border-slate-200/40`), layout contains a brand signature link, responsive center navigation tabs, an action CTA button, and a responsive toggle overlay menu.
*   **Hero Section**: Structured with a left tagline badge, massive heading text, dynamic typewriter services display, paragraph description, action buttons, and a right-aligned layered orbit visual canvas.
*   **Service Cards**: Custom card with glassmorphism layout, a radial glowing spot appearing on hover, custom gradient logo containers, bold heading, description text, and a bottom action link.
*   **Testimonials**: Displays client cards (name, rating, role, description text, and profile avatar) formatted into a responsive swiper container.
*   **FAQ**: Interactive accordion listings with clean toggle headers and chevron animations.
*   **Contact Form**: Interactive glassmorphism panel (`p-8 sm:p-10`), floating inputs layout, and validation response panels.
*   **Footer**: Placed inside a dark slate block (`bg-[#0F172A]`), contains brand logo, company description, social channels, navigation links, and legal copyrights.
