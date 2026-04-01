# React Ability Kit

![npm](https://img.shields.io/npm/v/react-ability-kit)
![downloads](https://img.shields.io/npm/dm/react-ability-kit)
![license](https://img.shields.io/npm/l/react-ability-kit)

> 🚀 Built for modern React apps that need **clean, scalable, and type-safe authorization**

**Type-safe authorization & RBAC for React (policy-first, zero runtime surprises)**
Keep authorization logic **out of your components** and **in one place**.

🔥 A simpler, fully type-safe alternative to CASL for React permissions

> ✅ Used in real-world React apps with complex permission logic

<p align="center">
  <img src="https://raw.githubusercontent.com/dalisraieb/react-ability-kit/main/assets/banner.png" alt="react-ability-kit banner" style="border-radius: 16px;"/>
</p>

## Why choose React Ability Kit?

| Feature                     | react-ability-kit | @casl/react | react-ability |
|----------------------------|------------------|-------------|--------------|
| Type safety (TypeScript)   | ✅ Full           | ⚠️ Partial   | ❌ None       |
| Policy-first approach      | ✅ Yes            | ⚠️ Mixed     | ❌ No         |
| DX simplicity              | ✅ Extremely simple    | ❌ Complex   | ⚠️ Medium     |
| Bundle size                | ✅ Lightweight    | ⚠️ Medium    | ✅ Small      |
| Learning curve             | ✅ Low            | ❌ High      | ⚠️ Medium     |
| Ownership rules support    | ✅ First-class    | ⚠️ Indirect  | ❌ Limited    |

> If you want **simple + type-safe permissions without the overhead**, this is for you.

---

## Why this exists

Most React apps don’t plan to become permission nightmares — they just grow into one.

Permissions slowly spread across components as ad-hoc checks:

- `if (user.role === "admin")`
- `if (invoice.ownerId === user.id)`
- `if (permissions.includes("invoice:update"))`

This package introduces a **policy-first** approach to permissions, so your UI stays clean and your rules stay auditable.

---

## Core idea (one sentence)

> Define permission rules once, then query them everywhere — instead of scattering fragile `if` checks across your UI.

Everything else is just implementation details.

---

## The real problem (what goes wrong in real apps)

### ❌ Without a permission layer

```tsx
// Button.tsx
if (user?.role === "admin") {
  return <DeleteButton />;
}

// InvoiceRow.tsx
if (user?.id === invoice.ownerId && invoice.status === "draft") {
  return <EditButton />;
}

// InvoicePage.tsx
const canView =
  user &&
  (user.role === "admin" ||
    user.permissions.includes("invoice:read"));

// Navbar.tsx
if (user && user.role !== "guest") {
  showBilling = true;
}
```

### Problems this creates

- ❌ **Logic duplication** – same rules rewritten in different places  
- ❌ **Rules drift** – one condition changes, others don’t  
- ❌ **Impossible to audit** – “Who can edit invoices?” → grep the whole repo  
- ❌ **UI inconsistencies**
  - Button visible but API rejects
  - Button hidden but API allows
- ❌ **No type safety**

  ```ts
  "inovice:update" // typo = silent bug
  ```

- ❌ **Hard to evolve roles** – adding a new role breaks logic everywhere

---

## The missing abstraction: policy-first permissions

Instead of asking:

> “Can the user do this?”  
> everywhere in the UI…

You define rules once, then query them everywhere.

### Mental model

```text
User + Context → Ability → UI decisions
```

```text
User ──► Policy ──► Ability ──► UI / Components
```

---

## Installation

```bash
npm install react-ability-kit
```

or

```bash
pnpm add react-ability-kit
```

or

```bash
yarn add react-ability-kit
```

---

## ⚡ 30 seconds example

```tsx
const ability = defineAbility((allow, deny, user) => {
  if (user.role === "admin") {
    allow("manage", "Invoice");
  } else {
    allow("update", "Invoice", i => i.ownerId === user.id);
    deny("delete", "Invoice");
  }
});

<Can I="update" a="Invoice" this={invoice}>
  <EditButton />
</Can>
```

---

## 🎮 Live demo

👉 Try it instantly (no install): <https://dalisraieb.github.io/react-ability-kit/docs/demo>

What you can test:

- Switch between **admin** and **member**
- Toggle **resource ownership**
- Instantly see UI updates based on policies

This demo reflects a real-world rule:

```ts
if (user.role === "admin") {
  allow("manage", "Invoice");
} else {
  allow("update", "Invoice", invoice => invoice.ownerId === user.id);
  deny("delete", "Invoice");
}
```

---

## Quick start (5 minutes)

### 1️⃣ Define your abilities (policy-first)

Create a single policy file.

```ts
// ability.ts
import { defineAbility } from "react-ability-kit";

export const ability = defineAbility((allow, deny, user) => {
  allow("read", "Invoice");

  allow(
    "update",
    "Invoice",
    invoice => invoice.ownerId === user.id && invoice.status === "draft"
  );

  deny("delete", "Invoice");
});
```

This file is your **single source of truth**.

---

### 2️⃣ Provide the ability to your app

```tsx
import { AbilityProvider } from "react-ability-kit";
import { ability } from "./ability";

export function App() {
  return (
    <AbilityProvider ability={ability}>
      <YourApp />
    </AbilityProvider>
  );
}
```

---

### 3️⃣ Use permissions anywhere

#### Using the `<Can />` component

```tsx
<Can I="update" a="Invoice" this={invoice}>
  <EditButton />
</Can>
```

#### Using the `can()` function

```ts
const canEdit = can("update", "Invoice", invoice);
```

---

## What this package actually solves

### 1️⃣ Single source of truth for permissions

```ts
allow("update", "Invoice", invoice => invoice.ownerId === user.id);
deny("delete", "Invoice");
```

- All rules live in one place
- Easy to review, change, and reason about
- No scattered conditionals

---

### 2️⃣ Business rules become readable policies

❌ Before

```ts
if (
  user &&
  user.role !== "guest" &&
  invoice.ownerId === user.id &&
  invoice.status === "draft"
)
```

✅ After

```ts
allow(
  "update",
  "Invoice",
  i => i.ownerId === user.id && i.status === "draft"
);
```

This is **domain language**, not UI logic.

---

### 3️⃣ Removes permission logic from components

❌ Before

```tsx
{user?.role === "admin" && <DeleteButton />}
```

✅ After

```tsx
<Can I="delete" a="Invoice">
  <DeleteButton />
</Can>
```

Your components focus on **rendering**, not authorization.

---

### 4️⃣ Type-safe permissions (TypeScript win)

❌ Without typing

```ts
can("updtae", "Invioce"); // typo, no error
```

✅ With this package

```ts
can("updtae", "Invioce");
// ❌ TypeScript error immediately
```

This removes an entire class of bugs.

---

### 5️⃣ Ownership rules become first-class

```ts
allow("update", "Invoice", invoice => invoice.ownerId === user.id);
```

Ownership logic is now:

- consistent
- reusable
- testable

---

### 6️⃣ Predictable SSR & hydration

- No permission flicker
- No server/client mismatch
- Same rules, same result everywhere

---

## What `<Can />` actually does

It’s not magic.

It simply means:

> Render children **only if the permission passes**

```tsx
<Can I="update" a="Invoice" this={invoice}>
  <EditButton />
</Can>
```

That’s it.

---

## Scope (what this package does NOT try to solve)

❌ Not an authentication system  
❌ Not a backend security layer  
❌ Not a role management UI  
❌ Not a permission database  

This package **does not**:

- replace backend checks
- handle authentication
- store users or roles

It answers one question only:

> **“Given a user and a resource, is this action allowed?”**

---

## When this package makes sense

- ✅ SaaS dashboards
- ✅ Multi-role applications
- ✅ B2B products
- ✅ Ownership-based rules
- ✅ Teams larger than one developer

---

## When it’s overkill

- ❌ Landing pages
- ❌ Simple blogs
- ❌ Admin / non-admin only apps

---

## Final summary

**React Ability Kit solves one problem:**

> How do I express and use permissions in React without scattering fragile conditional logic everywhere?

It does this by:

- centralizing permission rules
- typing actions and resources
- exposing a clean `can()` API
- providing `<Can />` for UI rendering

---

## Credits

Created by **Mohamed Ali Sraieb**

---

## Keywords

react permissions  
react authorization  
rbac react  
access control react  
typescript permissions  
react acl  
frontend authorization  
react security ui  
policy based access control  