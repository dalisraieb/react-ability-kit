// app/ability.ts
import { createAbilityKit, createReactAbilityKit } from "react-ability-kit";

export type Actions = "read" | "create" | "update" | "delete" | "manage";

export type SubjectsMap = {
  Invoice: { id: string; ownerId: string; status: "draft" | "sent" | "paid" };
  User: { id: string; role: "admin" | "member" };
  Project: { id: string; orgId: string; ownerId: string };
  Settings: { orgId: string };
};

export const abilityKit = createAbilityKit<Actions, SubjectsMap>();
export const reactAbilityKit = createReactAbilityKit<Actions, SubjectsMap>();
