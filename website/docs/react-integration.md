---
id: react-integration
title: React Integration
---

react-ability-kit includes primitives to wire authorization into React:

- `AbilityProvider`
- `useAbility`
- `Can`

```tsx
<AbilityProvider ability={ability}>
  <Can I="update" a="Invoice" this={invoice}>
    <EditButton />
  </Can>
</AbilityProvider>
```

## `Can` props

- `I`: the action
- `a`: the subject
- `this`: optional subject instance for conditional checks
- `fallback`: rendered when access is denied

```tsx
<Can I="delete" a="Invoice" fallback={<span>No access</span>}>
  <DeleteButton />
</Can>
```
