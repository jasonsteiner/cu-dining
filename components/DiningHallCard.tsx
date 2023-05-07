import React from 'react';
import Link from 'next/link';
import styles from '../styles/dining-hall-card.module.css';

interface DiningHall {
    id: number;
    name: string;
    image: string;
    averageRating?: number;
}

const DiningHallCard: React.FC<{ diningHall: DiningHall }> = ({ diningHall }) => {
    const averageRating = diningHall.averageRating
        ? diningHall.averageRating.toFixed(1)
        : 'N/A';

    return (
        <Link href={`/dining-hall/${diningHall.id}`}>
            <div className={`${styles.card} ${styles.link}`}>
                <h2 className={styles.title}>{diningHall.name}</h2>
                <img
                    src={diningHall.image}
                    alt={`Image of ${diningHall.name}`}
                    className={styles.image}
                />
                <p className={styles.rating}>
                    Average Rating: {averageRating} / 5.0
                </p>
            </div>
        </Link>
    );
};

export default DiningHallCard;