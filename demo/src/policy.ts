// src/example/policy.ts
import { abilityKit } from "./ability";

type AppUser = {
    id: string;
    role: "admin" | "member";
    orgId: string;
}

export function buildAbilityFor(user: AppUser | null) {
    const { defineRules, createAbility } = abilityKit
    const rules = defineRules((allow, deny) => {
        // guest
        if (!user) {
            allow("read", "Project"); // maybe public projects list
            return;
        }

        // admins
        if (user.role === "admin") {
            allow("manage", "Invoice");
            allow("manage", "User");
            allow("manage", "Project");
            allow("manage", "Settings");
            return;
        }

        // members
        allow("read", "Project", (p) => p.orgId === user.orgId);
        allow("update", "Project", (p) => p.ownerId === user.id);

        allow("read", "Invoice", (i) => i.ownerId === user.id);
        allow("update", "Invoice", (i) => i.ownerId === user.id && i.status === "draft");

        // Example deny override:
        deny("delete", "Invoice"); // members can never delete
    });

    return createAbility(rules);
}
