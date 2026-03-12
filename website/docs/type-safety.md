---
id: type-safety
title: Type Safety
---

The library is designed for strict TypeScript usage.

Incorrect examples should fail at compile time:

```ts
can("updtae", "Invioce");
```

With typed actions and subjects, TypeScript catches typos before runtime.

## Benefits

- Fewer production authorization bugs
- Better editor autocomplete
- Safer refactoring when permission names change
- Shared type contracts between policy and UI usage
