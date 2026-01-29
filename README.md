# React Ability

**A small, strongly-typed permission layer for React**  
Keep authorization logic **out of your components** and **in one place**.

---

## Why this exists

Most React apps don’t plan to become permission nightmares — they just grow into one.

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

## What this package actually solves

### 1️⃣ Single source of truth for permissions

```ts
// policy.ts
allow("update", "Invoice", invoice => invoice.ownerId === user.id);
deny("delete", "Invoice");
```

**Result**

- All rules live in one place
- Easy to review, change, and reason about
- No more scattered conditions

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

❌ Scattered ownership checks

```ts
if (invoice.ownerId === user.id)
```

✅ Centralized ownership rule

```ts
allow("update", "Invoice", invoice => invoice.ownerId === user.id);
```

Ownership logic is now:

- consistent
- reusable
- testable

---

### 6️⃣ Predictable SSR & hydration

Without a system:

- UI flickers
- Buttons appear/disappear after hydration
- Server/client logic diverges

With **React Ability**:

- Ability is built once from user data
- Server and client agree on permissions
- Stable, predictable rendering

---

## What `<Can />` actually does

It’s not magic.

It simply means:

> Render children **only if the permission passes**.

Instead of:

```tsx
if (!canEdit) return null;
```

You write:

```tsx
<Can I="update" a="Invoice" this={invoice}>
  <EditButton />
</Can>
```

That’s it.

---

## What this package is NOT

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
- ❌ Apps with only admin / non-admin logic

---

## Final summary

**React Ability solves one problem:**

> How do I express and use permissions in React without scattering fragile conditional logic everywhere?

It does this by:

- centralizing permission rules
- typing actions and resources
- exposing a clean `can()` API
- providing `<Can />` for UI rendering

---

## Credits

Created by **Mohamed Ali Sraieb**
