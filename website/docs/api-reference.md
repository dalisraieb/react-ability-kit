---
id: api-reference
title: API Reference
---

This page lists the public API exported by react-ability-kit.

## Package Exports

```ts
export * from "./factory";
export * from "./react-typed";
```

## Factory API

### `createAbilityKit<Actions, SubjectsMap>()`

Creates a typed ability toolkit and returns:

- `defineRules(builder)`
- `createAbility(rules)`

### `defineRules(builder)`

Builds a typed list of authorization rules.

```ts
defineRules((allow, deny) => {
  allow("read", "Invoice");
  deny("delete", "Invoice");
});
```

Parameters:

- `builder`: callback with:
  - `allow(action, subject, when?)`
  - `deny(action, subject, when?)`

### `createAbility(rules)`

Creates an ability instance with:

- `can(action, subject, obj?) => boolean`

## Types

### `Condition<SubjectsMap, S>`

Predicate used for conditional rules.

```ts
type Condition<SubjectsMap, S extends keyof SubjectsMap> = (
  obj: SubjectsMap[S]
) => boolean;
```

### `Rule<Actions, SubjectsMap, S>`

Represents a single permission rule.

Fields:

- `action`
- `subject`
- `when?`
- `inverted?` (`true` for deny rules)

### `Ability<Actions, SubjectsMap>`

Ability object shape:

- `can(action, subject, obj?) => boolean`

## React API

### `createReactAbilityKit<Actions, SubjectsMap>()`

Creates typed React bindings and returns:

- `AbilityProvider`
- `useAbility`
- `Can`

### `AbilityProvider`

Context provider that makes an ability instance available to descendants.

Props:

- `ability`
- `children`

### `useAbility()`

React hook that returns the current ability instance.

Throws if used outside `AbilityProvider`.

### `Can`

Conditional rendering component for permission checks.

Props:

- `I`: action
- `a`: subject
- `this?`: subject instance for conditional checks
- `fallback?`: rendered when not allowed
- `children`: rendered when allowed
