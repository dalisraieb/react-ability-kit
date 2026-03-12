---
id: intro
title: Overview
slug: /
---

react-ability-kit is a TypeScript-first authorization library for React apps.

It gives you a policy-first model, so permission logic is defined once and used everywhere.

## Why react-ability-kit

- Centralized authorization logic
- Reusable permission checks in UI and business logic
- Strong TypeScript safety for actions and subjects
- Cleaner components without scattered role checks

## Core idea

```text
User -> Policy -> Ability -> UI
```

Instead of checking permissions in many components, define rules in one policy file and query them using `can()` or the `Can` component.

## Simple example

```tsx
<Can I="delete" a="Invoice">
  <DeleteButton />
</Can>
```

## Quick install

```bash
npm install react-ability-kit
```

- GitHub: [react-ability-kit](https://github.com/dalisraieb/react-ability-kit)
- NPM: [react-ability-kit](https://www.npmjs.com/package/react-ability-kit)
