import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import LiveStats from "../components/LiveStats";
import styles from "./index.module.css";

export default function Home() {
    return (
        <Layout>
            <header className={styles.hero}>
                <div className="container">
                    <p className={styles.kicker}>react-ability-kit</p>
                    <h1 className={styles.title}>Type-Safe Permissions for React</h1>
                    <p className={styles.subtitle}>
                        A small library that centralizes permission logic and keeps
                        authorization out of your components.
                    </p>
                    <div className={styles.actions}>
                        <Link className="button button--primary button--lg" to="/docs/getting-started">
                            Get Started
                        </Link>
                        <Link className="button button--secondary button--lg" to="/docs/demo">
                            View Demo
                        </Link>
                    </div>
                    <LiveStats />
                    <div className={styles.codePanel}>
                        <pre>
                            <code>{`<Can I="delete" a="Invoice">
  <DeleteButton />
</Can>`}</code>
                        </pre>
                    </div>
                </div>
            </header>

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
