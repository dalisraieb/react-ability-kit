---
id: getting-started
title: Getting Started
---

Install the package:

```bash
npm install react-ability-kit
```

Define your permission vocabulary first.

```ts
type Actions = "read" | "create" | "update" | "delete" | "manage";

type SubjectsMap = {
  Invoice: { id: string; ownerId: string; status: "draft" | "sent" | "paid" };
  User: { id: string; role: "admin" | "member" };
};
```

Create your ability kit:

```ts
import { createAbilityKit } from "react-ability-kit";

const abilityKit = createAbilityKit<Actions, SubjectsMap>();
const { defineRules, createAbility } = abilityKit;
```

At this point, you can define rules and build an ability object for the current user.
