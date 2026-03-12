---
id: ownership-rules
title: Ownership Rules
---

Ownership checks are one of the most common SaaS authorization patterns.

```ts
allow("update", "Invoice", (invoice) => invoice.ownerId === user.id);
```

## Why this is common in SaaS apps

- Team members can edit their own records.
- Admins can access everything.
- Shared resources can still have stricter rules for destructive actions.

Model ownership in rules, not UI components, so your rules are easy to audit.
