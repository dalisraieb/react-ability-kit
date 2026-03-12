---
id: best-practices
title: Best Practices
---

- Keep all policies in one dedicated module.
- Avoid writing permission logic directly in components.
- Mirror backend authorization rules whenever possible.
- Use conditional rules for ownership checks.
- Treat policy changes as security-sensitive changes.
- Add tests for critical allow/deny scenarios.

## Good structure

```text
src/
  auth/
    policy.ts
    ability.ts
    types.ts
```
