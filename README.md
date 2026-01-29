# React Ability

A small, typed permission layer for React that keeps authorization logic **out of your components** and **in one place**.

---

## Core idea (in one sentence)

> The package centralizes and standardizes permission logic so your UI doesn’t turn into a mess of `if (user.role === …)` checks scattered everywhere.

That’s it. Everything else is implementation details.

---

## The real problem (what goes wrong in real apps)

Let’s start with how apps usually look **without** a permission layer.

### ❌ Without a package (today’s reality)

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


Problems this creates
❌ Logic duplication
The same rules are written differently in many files.

❌ Rules drift
Someone updates one condition but forgets others.

❌ Impossible to audit
“Who can edit invoices?” → you must search the entire codebase.

❌ UI bugs
Button visible but API rejects

Button hidden but API allows

❌ No type safety
ts
Copier le code
"inovice:update" // typo = silent bug
❌ Hard to change roles
Adding a new role breaks logic everywhere.

What this package introduces (the missing abstraction)
Key idea: policy-first permissions
Instead of asking:

“Can the user do this?”

everywhere in the UI…

You define rules once, then query them everywhere.

Mental model (important)
Think of your app like this:

```bash
User + Context → Ability → UI decisions
```

Your package only handles the Ability part.

```bash
User ──► Policy ──► Ability ──► UI / Components
```

What the package actually solves (concretely)
1️⃣ Single source of truth for permissions
Instead of scattered checks, you get one policy file:

```ts
// policy.ts
allow("update", "Invoice", invoice => invoice.ownerId === user.id);
deny("delete", "Invoice");
```

Result:

All permission logic lives in one place

Easy to review, change, and reason about

2️⃣ Turns business rules into readable policies
❌ Before

```ts
if (
  user &&
  user.role !== "guest" &&
  invoice.ownerId === user.id &&
  invoice.status === "draft"
)
```

✅ With the package

```ts
allow(
  "update",
  "Invoice",
  i => i.ownerId === user.id && i.status === "draft"
);
```

This is domain language, not UI logic.

3️⃣ Removes permission logic from components
❌ Before

```ts
{user?.role === "admin" && <DeleteButton />}
```

✅ After

```tsx
<Can I="delete" a="Invoice">
  <DeleteButton />
</Can>
```

Components now care only about UI, not authorization details.

4️⃣ Prevents permission bugs at compile time (TypeScript win)
This is huge.

❌ Without typing

```ts
can("updtae", "Invioce"); // typo, no error
```

✅ With this package

```ts
can("updtae", "Invioce");
// ❌ TypeScript error immediately
```

This eliminates an entire class of bugs.

5️⃣ Makes ownership rules first-class (not hacks)
Ownership checks are usually scattered:

```ts
if (invoice.ownerId === user.id)
```

With this package:

```ts
allow("update", "Invoice", invoice => invoice.ownerId === user.id);
```

Ownership logic becomes:

consistent

reusable

testable

6️⃣ Makes SSR and hydration predictable
Without a system:

UI flickers

Buttons appear/disappear after hydration

Different logic runs on server vs client

With this package:

Ability is created once from the same user data

Server and client render the same decisions

What the <Can /> component really is
It’s not magic.

It simply means:

“Render children only if a permission rule passes.”

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

What this package is NOT
This is important.

❌ Not an auth system
❌ Not a backend security layer
❌ Not a role manager UI
❌ Not a permission database

This package:

does not replace backend checks

does not handle authentication

does not store roles

It only answers one question:

“Given a user and a resource, is this action allowed?”

When this package makes sense
✅ SaaS dashboards
✅ Multi-role apps
✅ B2B products
✅ Apps with ownership rules
✅ Teams larger than 1 developer

When it’s overkill
❌ Landing pages
❌ Simple blogs
❌ Apps with only admin / non-admin logic

Why this is worth publishing
Most developers:

feel this pain

write ad-hoc permission logic

never extract it cleanly

This package:

gives a clear, repeatable pattern

provides excellent TypeScript DX

keeps the API small and focused

That’s exactly what successful small libraries do.

Final simplified summary
This package solves one problem:

“How do I express and use permissions in React without scattering fragile conditional logic everywhere?”

It solves it by:

centralizing permission rules

typing actions and resources

exposing a clean can() API

providing <Can /> for UI rendering
