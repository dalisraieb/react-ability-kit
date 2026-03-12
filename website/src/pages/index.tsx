import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import LiveStats from "../components/LiveStats";
import HeroRightPanel from "../components/HeroRightPanel";
import styles from "./index.module.css";

export default function Home() {
    return (
        <Layout>
            <header className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <div>
                            <p className={styles.kicker}>react-ability-kit</p>
                            <LiveStats />
                            <h1 className={styles.title}>Type-Safe Permissions for React</h1>
                            <p className={styles.subtitle}>
                                A small library that centralizes permission logic and keeps
                                authorization out of your components.
                            </p>
                            <div className={styles.actions}>
                                <Link className="button button--primary button--lg" to="/docs/quick-start">
                                    Get Started
                                </Link>
                                <Link className="button button--secondary button--lg" to="/docs/demo">
                                    View Demo
                                </Link>
                            </div>
                        </div>
                        <HeroRightPanel />
                    </div>
                </div>
            </header>

            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
