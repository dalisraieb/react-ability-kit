---
id: quick-start
title: Quick Start
---

This guide shows how to add **typed permissions** to a React application using **react-ability-kit** in a few minutes.

## 1. Install

Install the package:

```bash
npm install react-ability-kit
```

---

## 2. Define your permission vocabulary

Create a file called `ability.ts`.

This file defines:

- **Actions** (what users can do)
- **Subjects** (what resources those actions apply to)

```ts
import { createAbilityKit, createReactAbilityKit } from "react-ability-kit";

export type Actions = "read" | "create" | "update" | "delete" | "manage";

export type SubjectsMap = {
  Invoice: { id: string; ownerId: string; status: "draft" | "sent" | "paid" };
  User: { id: string; role: "admin" | "member" };
};

export const abilityKit = createAbilityKit<Actions, SubjectsMap>();
export const reactAbilityKit = createReactAbilityKit<Actions, SubjectsMap>();
```

---

## 3. Define your policies

Create a file called `policy.ts`.

Policies describe **what each user is allowed to do**.

```ts
import { abilityKit } from "./ability";

type AppUser = {
  id: string;
  role: "admin" | "member";
};

export function buildAbilityFor(user: AppUser | null) {
  const { defineRules, createAbility } = abilityKit;

  const rules = defineRules((allow, deny) => {
    if (!user) {
      allow("read", "Invoice");
      return;
    }

    if (user.role === "admin") {
      allow("manage", "Invoice");
      allow("manage", "User");
      return;
    }

    allow("read", "Invoice", (i) => i.ownerId === user.id);
    allow("update", "Invoice", (i) => i.ownerId === user.id && i.status === "draft");

    deny("delete", "Invoice");
  });

  return createAbility(rules);
}
```

---

## 4. Use permissions in React

Wrap your application with `AbilityProvider` and use the `<Can />` component to conditionally render UI based on permissions.

```tsx
import { reactAbilityKit, type SubjectsMap } from "./ability";
import { buildAbilityFor } from "./policy";

const user = { id: "u1", role: "member" } as const;

const invoice = {
  id: "i1",
  ownerId: "u1",
  status: "sent",
} as SubjectsMap["Invoice"];

export default function App() {
  const ability = buildAbilityFor(user);
  const { AbilityProvider, Can } = reactAbilityKit;

  return (
    <AbilityProvider ability={ability}>
      <h1>Permission Demo</h1>

      <Can I="update" a="Invoice" this={invoice} fallback={<p>No edit access</p>}>
        <button>Edit Invoice</button>
      </Can>

      <Can I="delete" a="Invoice" fallback={<p>No delete access</p>}>
        <button>Delete Invoice</button>
      </Can>
    </AbilityProvider>
  );
}
```

---

## What happens here?

- The **policy** defines the rules.
- `buildAbilityFor(user)` creates an **ability instance**.
- `<Can />` checks permissions before rendering UI.

Example behavior:

| Action | Result |
|------|------|
Update own draft invoice | ✅ allowed |
Update sent invoice | ❌ blocked |
Delete invoice | ❌ blocked |

---

## Next Steps

Explore the rest of the documentation to learn more:

- [Defining permission vocabulary](/docs/defining-permission-vocabulary)
- [Writing policies](/docs/defining-policies)
- [Creating abilities](/docs/creating-an-ability)
- [React integration](/docs/react-integration)
