import { useEffect, useMemo, useState } from "react";
import styles from "./LiveStats.module.css";

type StatsState = {
    downloads: number | null;
    stars: number | null;
    loading: boolean;
};

const NUMBER_FORMATTER = new Intl.NumberFormat("en-US");

function formatMetric(value: number | null, loading: boolean): string {
    if (loading) {
        return "Loading...";
    }

    if (value === null) {
        return "Unavailable";
    }

    return NUMBER_FORMATTER.format(value);
}

export default function LiveStats() {
    const [stats, setStats] = useState<StatsState>({
        downloads: null,
        stars: null,
        loading: true
    });

    useEffect(() => {
        const controller = new AbortController();

        async function loadStats() {
            const [downloadsResult, starsResult] = await Promise.allSettled([
                fetch(
                    "https://api.npmjs.org/downloads/point/last-week/react-ability-kit",
                    { signal: controller.signal }
                ).then(async (response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch npm downloads");
                    }

                    const data = (await response.json()) as { downloads?: number };
                    return typeof data.downloads === "number" ? data.downloads : null;
                }),
                fetch("https://api.github.com/repos/dalisraieb/react-ability-kit", {
                    signal: controller.signal
                }).then(async (response) => {
                    if (!response.ok) {
                        throw new Error("Failed to fetch GitHub stars");
                    }

                    const data = (await response.json()) as { stargazers_count?: number };
                    return typeof data.stargazers_count === "number"
                        ? data.stargazers_count
                        : null;
                })
            ]);

            setStats({
                downloads:
                    downloadsResult.status === "fulfilled" ? downloadsResult.value : null,
                stars: starsResult.status === "fulfilled" ? starsResult.value : null,
                loading: false
            });
        }

        loadStats().catch(() => {
            setStats({ downloads: null, stars: null, loading: false });
        });

        return () => controller.abort();
    }, []);

    const values = useMemo(
        () => [
            {
                id: "npm",
                label: "NPM Downloads",
                subtitle: "Last week",
                value: formatMetric(stats.downloads, stats.loading),
                href: "https://www.npmjs.com/package/react-ability-kit"
            },
            {
                id: "github",
                label: "GitHub Stars",
                subtitle: "Total",
                value: formatMetric(stats.stars, stats.loading),
                href: "https://github.com/dalisraieb/react-ability-kit"
            }
        ],
        [stats.downloads, stats.loading, stats.stars]
    );

    return (
        <div className={styles.badges}>
            {values.map((item) => (
                <a
                    className={styles.badge}
                    href={item.href}
                    key={item.label}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.label}: ${item.value}`}
                >
                    <span className={styles.iconWrap} aria-hidden="true">
                        {item.id === "npm" ? (
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <path d="M2 7h20v10h-10v-6h-4v6H2z" fill="currentColor" />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" className={styles.icon}>
                                <path
                                    d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.21.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.15-1.1-1.45-1.1-1.45-.9-.62.07-.6.07-.6 1 .08 1.52 1.02 1.52 1.02.88 1.5 2.3 1.07 2.86.82.09-.64.34-1.07.61-1.31-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.38-1.98 1.02-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.02 1.59 1.02 2.68 0 3.84-2.33 4.69-4.56 4.94.35.3.67.89.67 1.8v2.66c0 .27.18.58.69.48A10 10 0 0 0 12 2z"
                                    fill="currentColor"
                                />
                            </svg>
                        )}
                    </span>

                    <span className={styles.copy}>
                        <span className={styles.topLine}>{item.label}</span>
                        <span className={styles.bottomLine}>
                            <strong className={styles.value}>{item.value}</strong>
                            <span className={styles.dot} />
                            <span className={styles.subtitle}>{item.subtitle}</span>
                        </span>
                    </span>
                </a>
            ))}
        </div>
    );
}
