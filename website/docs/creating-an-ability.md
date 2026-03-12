---
id: creating-an-ability
title: Creating an Ability
---

After defining your rules, create an ability object.

```ts
const ability = createAbility(rules);
```

Use `can()` to evaluate permissions:

```ts
ability.can("update", "Invoice", invoice);
```

## How `can()` works

1. It matches action and subject.
2. It evaluates rule order and explicit denies.
3. It evaluates conditions (when provided).
4. It returns a boolean.

This gives you a single, predictable permission API for your app.
