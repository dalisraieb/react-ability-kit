import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function HomepageFeatures() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <article className={styles.card}>
                        <h2>Why react-ability-kit</h2>
                        <p>
                            Keep authorization logic in one policy layer. Your components stop
                            duplicating role checks, and permission changes happen in one
                            place.
                        </p>
                    </article>

                    <article className={styles.card}>
                        <h2>Core Idea</h2>
                        <p>
                            User data feeds policy rules, policy rules build an ability, and
                            UI consumes that ability through hooks and components.
                        </p>
                        <pre className={styles.diagram}>
                            <code>{`User -> Policy -> Ability -> UI`}</code>
                        </pre>
                    </article>

                    <article className={styles.card}>
                        <h2>Quick Install</h2>
                        <pre>
                            <code>{`npm install react-ability-kit`}</code>
                        </pre>
                        <div className={styles.links}>
                            <Link to="https://github.com/dalisraieb/react-ability-kit">GitHub</Link>
                            <Link to="https://www.npmjs.com/package/react-ability-kit">NPM</Link>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
