# Frontend Challenge Sass Starter

A lightweight vanilla HTML, Sass, and JavaScript starter for Frontend Mentor challenges and small practice websites.

The goal of this template is not to hide CSS behind a framework. It gives you a clean Sass foundation so you can spend more time practicing layout, responsiveness, accessibility, and component styling.

## Table of Contents

- [Overview](#overview)
- [Folder Structure](#folder-structure)
- [How to Use](#how-to-use)
- [Sass Scripts](#sass-scripts)
- [Sass Files](#sass-files)
- [Starter Patterns](#starter-patterns)
- [Customization Checklist](#customization-checklist)
- [Author](#author)

## Overview

This starter includes:

- Modern CSS reset
- Sass partials organized by base styles, layout helpers, and utilities
- CSS custom properties for colors, fonts, spacing, sizing, radius, and shadows
- Base typography and element defaults
- A reusable container system
- A few small utility classes
- Accessible focus styles
- A tiny JavaScript entry file
- npm scripts for compiling and watching Sass
- A README structure you can adapt for each challenge

## Folder Structure

```txt
frontend-challenge-starter/
  index.html
  package.json
  README.md
  .gitignore
  css/
    style.css
  scss/
    style.scss
    base/
      _reset.scss
      _variables.scss
      _base.scss
    layout/
      _layout.scss
    utilities/
      _utilities.scss
  js/
    script.js
```

## How to Use

1. Copy this folder when starting a new challenge.
2. Rename the copied folder to match the project.
3. Make sure Node.js is installed, then run `npm install`.
4. Start Sass watch mode with `npm run sass:watch`.
5. Replace the starter HTML in `index.html`.
6. Update the design tokens in `scss/base/_variables.scss`.
7. Add challenge-specific styles in `scss/style.scss` or a new partial.
8. Add JavaScript only when the challenge needs interactivity.

If you turn this into a GitHub template repository, you can start new projects from GitHub by clicking **Use this template**.

## Sass Scripts

### `npm run sass`

Compiles `scss/style.scss` to `css/style.css` once.

### `npm run sass:watch`

Watches your Sass files and recompiles whenever you save a change.

### `npm run sass:build`

Compiles a compressed production version of `css/style.css`.

## Sass Files

### `scss/style.scss`

Loads the foundation partials and gives you a place for project-specific Sass.

### `scss/base/_reset.scss`

Removes common browser defaults and makes sizing more predictable.

### `scss/base/_variables.scss`

Stores design tokens such as colors, font families, spacing, container sizes, border radius, and shadows.

This is usually the first file to edit for each new challenge.

### `scss/base/_base.scss`

Sets global page styles like body font, default link behavior, image behavior, buttons, and focus states.

### `scss/layout/_layout.scss`

Contains reusable layout patterns like `.container`, `.section`, and `.cluster`.

### `scss/utilities/_utilities.scss`

Contains small single-purpose helper classes like `.sr-only`, `.flow`, and text alignment helpers.

### `css/style.css`

The compiled stylesheet used by `index.html`. Edit the Sass files, then let Sass update this file.

## Starter Patterns

### Container

```css
.container {
  width: min(100% - (var(--container-padding) * 2), var(--container-max));
  margin-inline: auto;
}
```

This keeps content centered, gives small screens side breathing room, and stops the layout from becoming too wide on large screens.

### Responsive Section Spacing

```css
.section {
  padding-block: var(--section-padding);
}
```

The value comes from `scss/base/_variables.scss`:

```css
--section-padding: clamp(2rem, 6vw, 5rem);
```

This lets vertical spacing grow smoothly between mobile and desktop.

### Flow Utility

```css
.flow > * + * {
  margin-block-start: var(--flow-space, 1rem);
}
```

This adds consistent vertical spacing between direct children. You can customize it per component:

```css
.card {
  --flow-space: 1.5rem;
}
```

## Customization Checklist

Before building a new challenge, update:

- Page title in `index.html`
- Colors in `scss/base/_variables.scss`
- Font family and font weights
- Container max width
- Main spacing scale if the design uses different spacing
- README project name and links

## Author

- Frontend Mentor - Add your profile URL here
