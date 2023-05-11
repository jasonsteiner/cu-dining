import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../styles/dining-hall-card.module.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../util/firebase";

interface DiningHall {
    id: number;
    name: string;
    image: string;
    averageRating?: number;
}

const DiningHallCard: React.FC<{ diningHall: DiningHall, diningHallId: number }> = ({ diningHall }) => {
    const [averageRating, setAverageRating] = useState<number | null>(null);

    useEffect(() => {
        const fetchAverageRating = async () => {
            const reviewQuery = query(
                collection(db, "reviews"),
                where("diningHallId", "==", diningHall.id)
            );
            const querySnapshot = await getDocs(reviewQuery);

            let totalRating = 0;
            let reviewCount = 0;

            querySnapshot.forEach((doc) => {
                totalRating += parseFloat(doc.data().stars); // Parse string to float
                reviewCount++;
            });

            setAverageRating(reviewCount > 0 ? totalRating / reviewCount : 0);
        };

        fetchAverageRating();
    }, [diningHall.id]);

    const ratingDisplay = averageRating !== null
        ? averageRating.toFixed(1)
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
                    Average Rating: {ratingDisplay} / 5.0
                </p>
            </div>
        </Link>
    );
};

export default DiningHallCard;