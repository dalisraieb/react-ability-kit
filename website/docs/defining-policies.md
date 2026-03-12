---
id: defining-policies
title: Defining Policies
---

Policies are where you define authorization rules for actions and subjects.

```ts
const rules = defineRules((allow, deny) => {
  allow("read", "Invoice");
  allow("update", "Invoice", (invoice) => invoice.ownerId === user.id);
  deny("delete", "Invoice");
});
```

## Concepts

- `allow(action, subject)`: grants access.
- `deny(action, subject)`: explicitly blocks access.
- Conditions: pass a predicate function as the third argument.
- Ownership rules: compare current user with resource owner.

## Why policy files help

You avoid spreading `user.role` checks across many components. Rules stay discoverable and easier to test.
