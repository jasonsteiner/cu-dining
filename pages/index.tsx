import Head from 'next/head';
import DiningHallCard from '../components/DiningHallCard';
import styles from '../styles/Home.module.css';

const diningHalls = [
    {
        id: 1,
        name: "Dining Hall 1",
        image: "/path/to/image1.jpg",
        averageRating: 4.5,
    },
    {
        id: 2,
        name: "Dining Hall 2",
        image: "/path/to/image2.jpg",
        averageRating: 3.7,
    },
    {
        id: 3,
        name: "Dining Hall 3",
        image: "/path/to/image3.jpg",
        averageRating: 4.2,
    },
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>CU Dining Halls</title>
                <meta name="description" content="CU Dining Halls Review App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>CU Dining Halls</h1>

                <div className={styles.diningHalls}>
                    {diningHalls.map((diningHall) => (
                        <DiningHallCard key={diningHall.id} diningHall={diningHall} />
                    ))}
                </div>
            </main>
        </div>
    );
}