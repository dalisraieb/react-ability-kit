import { useMemo, useState } from "react";
import styles from "./PermissionDemo.module.css";

type Role = "admin" | "member";
type InvoiceStatus = "draft" | "sent" | "paid";

type User = {
    id: string;
    role: Role;
};

type Invoice = {
    id: string;
    ownerId: string;
    status: InvoiceStatus;
};

function canUpdateInvoice(user: User, invoice: Invoice): boolean {
    if (user.role === "admin") {
        return true;
    }

    return invoice.ownerId === user.id && invoice.status !== "paid";
}

function canDeleteInvoice(user: User): boolean {
    return user.role === "admin";
}

export default function PermissionDemo() {
    const [role, setRole] = useState<Role>("member");
    const [ownerId, setOwnerId] = useState<string>("u-1");

    const currentUser = useMemo<User>(() => ({ id: "u-1", role }), [role]);
    const invoice = useMemo<Invoice>(
        () => ({ id: "inv-42", ownerId, status: "draft" }),
        [ownerId]
    );

    const canUpdate = canUpdateInvoice(currentUser, invoice);
    const canDelete = canDeleteInvoice(currentUser);

    return (
        <div className={styles.wrap}>
            <div className={styles.controls}>
                <label>
                    Role
                    <select value={role} onChange={(e) => setRole(e.target.value as Role)}>
                        <option value="member">member</option>
                        <option value="admin">admin</option>
                    </select>
                </label>

                <label>
                    Invoice Owner
                    <select value={ownerId} onChange={(e) => setOwnerId(e.target.value)}>
                        <option value="u-1">current user</option>
                        <option value="u-2">another user</option>
                    </select>
                </label>
            </div>

            <div className={styles.card}>
                <p>
                    Signed in as <strong>{currentUser.role}</strong> (id: {currentUser.id})
                </p>
                <p>
                    Invoice {invoice.id} is owned by <strong>{invoice.ownerId}</strong>
                </p>

                <div className={styles.actions}>
                    {canUpdate ? (
                        <button className={styles.primary}>Edit Invoice</button>
                    ) : (
                        <button disabled>Edit Invoice</button>
                    )}

                    {canDelete ? (
                        <button className={styles.danger}>Delete Invoice</button>
                    ) : (
                        <button disabled>Delete Invoice</button>
                    )}
                </div>
            </div>
        </div>
    );
}
