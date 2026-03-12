---
id: ssr-support
title: SSR Support
---

For frameworks like Next.js, create ability from the same user payload on server and client.

```ts
const ability = buildAbilityFor(user);
```

## Important rule

Use the same user data on both sides to avoid hydration mismatches.

## Suggested flow

```text
Request -> Fetch user -> Build ability on server -> Serialize user -> Rebuild ability on client
```
