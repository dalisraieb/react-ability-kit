---
id: defining-permission-vocabulary
title: Defining Permission Vocabulary
---

Define your permission vocabulary first

```ts
type Actions = "read" | "create" | "update" | "delete" | "manage";

type SubjectsMap = {
  Invoice: { id: string; ownerId: string; status: "draft" | "sent" | "paid" };
  User: { id: string; role: "admin" | "member" };
};
```

Create your ability kit:

```ts
import { createAbilityKit, createReactAbilityKit } from "react-ability-kit";

const reactAbilityKit = createReactAbilityKit<Actions, SubjectsMap>();
const abilityKit = createAbilityKit<Actions, SubjectsMap>();
```

At this point, you can define rules and build an ability object for the current user.
