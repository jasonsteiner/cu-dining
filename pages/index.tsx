import Head from 'next/head';
import DiningHallCard from '../components/layout/DiningHallCard';
import styles from '../styles/Home.module.css';

const diningHalls = [
    {
        id: 1,
        name: "Morrison Dining Room",
        image: "https://i1.wp.com/cornellsun.com/wp-content/uploads/2021/10/morrison-photo-1.jpeg?fit=771%2C578&ssl=1",
        averageRating: 4.7,
    },
    {
        id: 2,
        name: "North Star Dining Room",
        image: "https://bpb-us-e1.wpmucdn.com/blogs.cornell.edu/dist/3/301/files/2021/03/Dining-Hall-Favorites.jpg",
        averageRating: 4.1,
    },
    {
        id: 3,
        name: "Risley Dining Room",
        image: "https://fastly.4sqi.net/img/general/600x600/156271_CK0ccV4VIj8MEpEK2rTIhW58lUxN1hEWa2ffaSvZSdE.jpg",
        averageRating: 3.2,
    },
    {
        id: 4,
        name: "Okenshields Dining Room",
        image: "https://media.thetab.com/blogs.dir/105/files/2017/03/okenshields.jpg",
        averageRating: 2.1,
    },
    {
        id: 5,
        name: "Terrace Restaurant",
        image: "https://fastly.4sqi.net/img/general/600x600/44939460_z_2WRQT6UdktvZxrxHucD4laE0tw6dBRycEFokBSDZE.jpg",
        averageRating: 4.3,
    },
    {
        id: 6,
        name: "Trillium Food Court",
        image: "https://i2.wp.com/cornellsun.com/wp-content/uploads/2017/02/Trillium.jpg?fit=1170%2C878&ssl=1",
        averageRating: 4.9,
    }
];

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Home | CU Dining</title>
                <meta name="description" content="CU Dining - Cornel Eatery Reviews" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>Dining Locations</h1>
                <div className={styles.diningHalls}>
                    {diningHalls.map((diningHall) => (
                        <DiningHallCard key={diningHall.id} diningHall={diningHall} diningHallId={diningHall.id} />
                    ))}
                </div>
            </main>
        </div>
    );
}
