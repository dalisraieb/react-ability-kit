// src/react-typed.tsx
import React, { createContext, useContext } from "react";
import type { Ability } from "./factory";

export function createReactAbilityKit<Actions extends string, SubjectsMap>() {
    const Ctx = createContext<Ability<Actions, SubjectsMap> | null>(null);

    function AbilityProvider({
        ability,
        children,
    }: {
        ability: Ability<Actions, SubjectsMap>;
        children: React.ReactNode;
    }) {
        return <Ctx.Provider value={ability}>{children}</Ctx.Provider>;
    }

    function useAbility() {
        const ability = useContext(Ctx);
        if (!ability) throw new Error("useAbility must be used within AbilityProvider");
        return ability;
    }

    function Can<S extends keyof SubjectsMap>(props: {
        I: Actions;
        a: S;
        this?: SubjectsMap[S];
        fallback?: React.ReactNode;
        children: React.ReactNode;
    }) {
        const { can } = useAbility();
        return <>{can(props.I, props.a, props.this) ? props.children : props.fallback ?? null}</>;
    }

    return { AbilityProvider, useAbility, Can };
}
