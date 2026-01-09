# Microfrontend POC

This is a Proof of Concept (POC) project for implementing a **Microfrontend Architecture** using **Module Federation**.

## Project Structure

For POC purposes, this project is divided into two separate repositories:

| Repository     | Description                                                                                                                           |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| **fan-wallet** | A Microfrontend component that encapsulates wallet functionality. It is designed to be independently developed, tested, and deployed. |
| **host**       | The host/shell application that integrates and consumes the `fan-wallet` microfrontend component.                                     |

The `fan-wallet` component is federated into the `host` application at runtime using Vite's Module Federation plugin.

---

## Tech Stack

| Technology                | Purpose                                                                             |
| ------------------------- | ----------------------------------------------------------------------------------- |
| **React**                 | UI library for building component-based user interfaces                             |
| **TypeScript**            | Static type checking for improved developer experience and code quality             |
| **Vite**                  | Fast build tool and development server with Module Federation support               |
| **CSS Modules**           | Scoped styling to prevent style collisions between microfrontends                   |
| **Zod**                   | Schema validation and parsing for runtime type safety                               |
| **Biome**                 | Fast, all-in-one linter and formatter for code quality                              |
| **Vitest**                | Unit testing framework with native Vite integration                                 |
| **React Testing Library** | Testing utilities for React components                                              |
| **Husky**                 | Runs lint-staged commands before a commit is completed and fails on any error found |

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Fan-Wallet (Microfrontend)

```bash
npm install
npm run preview --watch
```

> This will allow the MF app to be visible on the host app.

### Host

```bash
npm install
npm run dev
```

## Future Improvements

### Critical Features

- **Comprehensive Documentation Portal with Storybook**: To serve as a centralized hub for both UI components and engineering processes. Beyond an interactive sandbox for isolated component development, it will host critical documentation such as onboarding guides, release workflows, and monitoring procedures, ensuring a single source of truth for the team.
- **Internationalization with react-i18next**: To implement robust localization strategies catering to diverse market domains. This setup prepares the application for future integration with Translation Management Systems (TMS) such as Transifex for automated, large-scale globalization workflows.
- **Design System & Shared Component Library**: To establish a standardized source of truth for design tokens (typography, spacing, media queries, colors, etc) and reusable UI components. This ensures consistency across the application and facilitates the future extraction of a standalone library for consumption by multiple repositories.
- **E2E Testing with Playwright or Cypress**: To implement comprehensive automated testing of user flows across the distributed microfrontend architecture.
- **Accessibility (a11y) Compliance**: To ensure the application adheres to WCAG standards, making it inclusive for all users. For enterprise-grade auditing and compliance management, we can utilize solutions like **Level Access** to facilitate rigorous automated scanning and manual audits.
- **Redux Toolkit & RTK Query**: To separate global state management from data fetching logic. This enables caching, efficient data synchronization, and isolated hooks for API calls, preventing state pollution and ensuring predictable data flow.

### Nice to Have

- **Feature Flags & A/B Testing**: To enable dynamic feature management (toggling features on/off) without code deployments. This lays the groundwork for progressive rollouts and integrates with analytics for data-driven A/B testing optimization.
- **Error Monitoring with Bugsnag**: To provide real-time stability monitoring and rapid diagnostic insights. This allows the team to proactively identify and resolve production errors before they impact a significant portion of the user base.
