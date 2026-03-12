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
                label: "NPM Downloads",
                subtitle: "Last week",
                value: formatMetric(stats.downloads, stats.loading)
            },
            {
                label: "GitHub Stars",
                subtitle: "Total",
                value: formatMetric(stats.stars, stats.loading)
            }
        ],
        [stats.downloads, stats.loading, stats.stars]
    );

    return (
        <div className={styles.grid}>
            {values.map((item) => (
                <div className={styles.card} key={item.label}>
                    <p className={styles.label}>{item.label}</p>
                    <p className={styles.value}>{item.value}</p>
                    <p className={styles.subtitle}>{item.subtitle}</p>
                </div>
            ))}
        </div>
    );
}
