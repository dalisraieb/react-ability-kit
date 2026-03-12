import styles from "./HeroRightPanel.module.css";

export default function HeroRightPanel() {
    return (
        <aside className={styles.panel} aria-label="Permission system overview">
            <p className={styles.kicker}>Permission Flow</p>
            <h3 className={styles.title}>From rules to reliable UI</h3>

            <div className={styles.steps}>
                <div className={styles.step}>
                    <span className={styles.dot}></span>
                    <div>
                        <p className={styles.stepTitle}>Define policies</p>
                        <p className={styles.stepText}>Keep rules centralized and reusable.</p>
                    </div>
                </div>
                <div className={styles.step}>
                    <span className={styles.dot}></span>
                    <div>
                        <p className={styles.stepTitle}>Create ability</p>
                        <p className={styles.stepText}>Generate a typed permission checker.</p>
                    </div>
                </div>
                <div className={styles.step}>
                    <span className={styles.dot}></span>
                    <div>
                        <p className={styles.stepTitle}>Protect UI</p>
                        <p className={styles.stepText}>Render only what each role can access.</p>
                    </div>
                </div>
            </div>

            <div className={styles.callout}>
                Less duplication, fewer auth bugs, better developer velocity.
            </div>
        </aside>
    );
}
