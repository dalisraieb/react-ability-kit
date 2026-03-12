---
id: real-world-example
title: Real World Example
---

Simple SaaS model:

- `admin`: manage everything
- `member`: edit only own invoices

```ts
type Role = "admin" | "member";

const rules = defineRules((allow, deny) => {
  if (user.role === "admin") {
    allow("manage", "Invoice");
    allow("manage", "User");
    return;
  }

  allow("read", "Invoice");
  allow("update", "Invoice", (invoice) => invoice.ownerId === user.id);
  deny("delete", "Invoice");
});
```

This keeps policy decisions explicit and easy to reason about.
