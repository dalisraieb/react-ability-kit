---
id: using-can-function
title: Using the can() Function
---

In component logic, use `useAbility()` and call `can()` directly.

```ts
const { can } = useAbility();

if (can("delete", "Invoice")) {
  // show delete flow
}
```

This is useful when rendering complex branches or running action guards before navigation.
