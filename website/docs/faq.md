---
id: faq
title: FAQ
---

## Does this replace backend authorization?

No. Backend authorization is still required for real security. This library provides consistent frontend authorization logic.

## Does this manage authentication?

No. Use your existing auth solution for identity/session, then build ability from authenticated user data.

## Does this work with Next.js?

Yes. Build ability on server and client using the same user payload.

## Can it work without React?

Core permission logic can be used independently, while React helpers (`AbilityProvider`, `Can`, `useAbility`) are React-specific.
