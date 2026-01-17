// src/factory.ts
export type Condition<SubjectsMap, S extends keyof SubjectsMap> = (
  obj: SubjectsMap[S]
) => boolean;

export type Rule<Actions extends string, SubjectsMap, S extends keyof SubjectsMap = keyof SubjectsMap> = {
  action: Actions;
  subject: S;
  when?: Condition<SubjectsMap, S>;
  inverted?: boolean;
};

export type Ability<Actions extends string, SubjectsMap> = {
  can: <S extends keyof SubjectsMap>(
    action: Actions,
    subject: S,
    obj?: SubjectsMap[S]
  ) => boolean;
};

export function createAbilityKit<Actions extends string, SubjectsMap>() {
  type Subject = keyof SubjectsMap;
  type AnyRule = Rule<Actions, SubjectsMap, any>;

  function createAbility(rules: AnyRule[]): Ability<Actions, SubjectsMap> {
    const compiled = rules.slice();

    const can = <S extends Subject>(
      action: Actions,
      subject: S,
      obj?: SubjectsMap[S]
    ) => {
      let verdict: boolean | undefined;

      for (const rule of compiled) {
        if (rule.subject !== subject) continue;
        if (rule.action !== action) continue;

        if (rule.when) {
          if (!obj) continue;
          if (!rule.when(obj)) continue;
        }

        verdict = rule.inverted ? false : true;
      }

      return verdict ?? false;
    };

    return { can };
  }

  type AllowFn = <S extends Subject>(
    action: Actions,
    subject: S,
    when?: Condition<SubjectsMap, S>
  ) => void;

  type DenyFn = <S extends Subject>(
    action: Actions,
    subject: S,
    when?: Condition<SubjectsMap, S>
  ) => void;

  function defineRules(builder: (allow: AllowFn, deny: DenyFn) => void) {
    const rules: AnyRule[] = [];
    const allow: AllowFn = (action, subject, when) => {
      rules.push({ action, subject, when } as AnyRule);
    };
    const deny: DenyFn = (action, subject, when) => {
      rules.push({ action, subject, when, inverted: true } as AnyRule);
    };
    builder(allow, deny);
    return rules;
  }

  return { createAbility, defineRules };
}
