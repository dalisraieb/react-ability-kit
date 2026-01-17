// demo/src/App.tsx

import { reactAbilityKit } from "./ability";
import { buildAbilityFor } from "./policy";


const user = { id: "u1", role: "member", orgId: "org1" } as const;
const invoice = { id: "i1", ownerId: "u1", status: "draft" } as const;

export default function App() {
  const ability = buildAbilityFor(user);
  const { AbilityProvider, Can } = reactAbilityKit;
  return (
    <AbilityProvider ability={ability}>
      <h1>Permission demo</h1>

      <Can I="update" a="Invoice" this={invoice} fallback={<p>No edit access</p>}>
        <button>Edit invoice</button>
      </Can>

      <Can I="delete" a="Invoice" fallback={<p>No delete access</p>}>
        <button>Delete invoice</button>
      </Can>
    </AbilityProvider>
  );
}
