import Head from 'next/head';
import DiningHallCard from '../components/DiningHallCard';
import styles from '../styles/Home.module.css';

const diningHalls = [
    {
        id: 1,
        name: "Morrison Dining Room",
        image: "https://via.placeholder.com/150",
        averageRating: 4.7,
    },
    {
        id: 2,
        name: "North Star Dining Room",
        image: "https://via.placeholder.com/150",
        averageRating: 4.1,
    },
    {
        id: 3,
        name: "Risley Dining Room",
        image: "https://via.placeholder.com/150",
        averageRating: 3.2,
    },
    {
        id: 4,
        name: "Okenshields Dining Room",
        image: "https://via.placeholder.com/150",
        averageRating: 2.1,
    },
    {
        id: 5,
        name: "Terrace Restaurant",
        image: "https://via.placeholder.com/150",
        averageRating: 4.3,
    },
    {
        id: 6,
        name: "Trillium Food Court",
        image: "https://via.placeholder.com/150",
        averageRating: 4.9,
    }
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | CU Dining</title>
                <meta name="description" content="CU Dining Locations Review App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Dining Locations</h1>

                <div className={styles.diningHalls}>
                    {diningHalls.map((diningHall) => (
                        <DiningHallCard key={diningHall.id} diningHall={diningHall} />
                    ))}
                </div>
            </main>
        </div>
    );
}