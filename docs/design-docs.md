# Finance User Web Application High-Level Design Doc

## 1. Overview

This document outlines the high-level architecture design for Finance user web application. 

This design document addresses the architectural requirements, provides a high-level design, considers alternatives, and outlines a timeline for implementation.

## 2. Context

Finance goal is to build an MVP application with the most required features and use an architechure that is scalable, modular, and maintable, allwoing any other frontend dev that are working in the team or that would be joining in the future to work effeientkly and delkiver new features quiclkly.

Finance is an app that lets customers, save, budget and plan their finances.


## 3. Goals and Non-Goals

### Goals

- **Scalability**: Design an architecture that can support a growing team and an increasing number of users.
- **Modularity**: Ensure the codebase is modular to allow multiple developers to work in parallel without conflicts.
- **Performance**: Optimize the application for quick load times and smooth user interactions, especially on mobile devices.
- **Accessibility**: Ensure compliance with WCAG 2.2 accessibility standards.

### Non-Goals

- **Native Mobile App Development**: The scope is limited to the web application, and does not include development of native mobile apps.

## 4. High Level Design

We're going to build the Finance Web Application as a monolothic server-side rendered React app using Next.js. Like other app clients, the customer web app will communicate with the core database and any external services using the The Finance Core REST API. 

### Container Diagram

![Container Diagram](../starter-code/assets/images/docs/container-diagram.jpg)
[created with excalidraw](https://excalidraw.com/);

### Architectural Style

- **Component-Based Architecture**: Utilize a component-based architecture using React to create reusable UI components.
- **Server-Side Rendered Application**: Use Next.js for server-side rendering, static site generation, and improved performance.
- **TypeScript**: Use TypeScript for type safety and better developer experience.


### Key Components

1. **Home Module**: Serves as the overview page, displaying current balance , income and expenses, and summaries and links to the pots, budgets, transactions and recuring bills page.

2. **Login Module**: Manages user registration, login, and password recovery.

3. **Transaction Module**: Handles displaying money going in and out of the account.

4. **Pot Module**: Manages the process of creating, editing and deleting a savings pot.

5. **Budget Module**: Manages the process of planning a bduget based on a category.

7. **RecurringBills Module**: Displays detailed inmformation on the bills that you havbe to pay monthly.

8. **Search Module**: Enables users to search and filter transactions and recurring bills.


### Technology Stack

- **Frontend**: React, Next.js, TypeScript, Redux, TanStack Query, Material UI
- **Backend**: Golang
- **Deployment**: AWS infrastructure or Netlify or Vercel ?

## 5. Alternatives Considered

1. **Single Page Application (SPA) with React**: While a client-side rendered SPA provides a smooth user experience, it lacks the page load performance and scalability benefits of server-side rendering offered by Next.js.
2. **Vue.js**: the majority have experience with React and Next.js, making it a more suitable choice.
3. **Remix**: Remix was another good candidate, but noone on the team was familiar with it and the unknown unknowns posed a bigger risk than using Next.js given the tight deadline.
