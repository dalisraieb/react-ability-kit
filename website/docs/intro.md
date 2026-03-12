---
id: intro
title: Overview
slug: /
---

**react-ability-kit** is a **TypeScript-first authorization library for React applications**.

It provides a **policy-first permission system** that lets you define authorization rules once and reuse them consistently across your UI and business logic.

Instead of scattering permission checks across components, `react-ability-kit` centralizes them into **policies** and exposes a simple API to query permissions.

---

## The Problem

In many applications, permission logic ends up scattered everywhere:

```tsx
if (user?.role === "admin") {
  return <DeleteButton />;
}

if (user?.id === invoice.ownerId) {
  return <EditButton />;
}
```

Over time this creates several problems:

- Permission logic duplicated across many files
- Hard-to-maintain role checks
- UI inconsistencies
- Hidden bugs caused by typos or missing conditions
- Difficult to understand **who can do what**

---

## The Solution

`react-ability-kit` introduces a **policy-first model**.

Instead of checking permissions everywhere, you:

1. Define **permission vocabulary** (actions and subjects)
2. Write **policies** that describe authorization rules
3. Create an **ability instance** for the current user
4. Use the ability inside your React components

This keeps your UI clean and your authorization logic centralized.

---

## Core Concept

```text
User → Policy → Ability → UI
```

1. **User**  
   The authenticated user and their context.

2. **Policy**  
   A set of rules describing what actions are allowed.

3. **Ability**  
   A runtime object that evaluates those rules.

4. **UI**  
   Components use the ability to decide what to render.

---

## Example

```tsx
<Can I="delete" a="Invoice">
  <DeleteButton />
</Can>
```

The `Can` component renders its children **only if the permission rule passes**.

This keeps permission logic **outside of your components**.

---

## Why use react-ability-kit

- **Centralized authorization logic**
- **Cleaner React components**
- **Strong TypeScript safety**
- **Reusable permission checks**
- **Consistent UI behavior**

---

## Installation

```bash
npm install react-ability-kit
```

---

## Links

- GitHub: [react-ability-kit](https://github.com/dalisraieb/react-ability-kit)
- NPM: [react-ability-kit](https://www.npmjs.com/package/react-ability-kit)

---

## Next Step

Continue with the **Quick Start** guide to set up your first permission system in a few minutes.
