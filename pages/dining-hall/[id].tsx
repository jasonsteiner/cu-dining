import React from 'react';
import { useRouter } from 'next/router';
import ReviewCard from '../../components/ReviewCard';
import styles from '../../styles/dining-hall.module.css';

const diningHalls = [
    {
        id: '1',
        name: "Morrison Dining",
        imageURL: "https://via.placeholder.com/150",
        avgRating: 4.7,
    },
    {
        id: '2',
        name: "North Star Dining Room",
        imageURL: "https://via.placeholder.com/150",
        avgRating: 4.1,
    },
    {
        id: '3',
        name: "Risley Dining Room",
        imageURL: "https://via.placeholder.com/150",
        avgRating: 3.2,
    },
];

const diningHallReviews: { [key: string]: { userID: string; rating: number; description: string; }[] } = {
    '1': [
        { userID: 'user1', rating: 5, description: 'Great food!' },
        { userID: 'user2', rating: 3, description: 'It was okay.' },
    ],
    '2': [
        { userID: 'user3', rating: 4, description: 'Nice place!' },
        { userID: 'user4', rating: 5, description: 'Awesome food!' },
    ],
    '3': [
        { userID: 'user5', rating: 2, description: 'Not great.' },
        { userID: 'user6', rating: 3, description: 'Could be better.' },
    ],
};

export default function DiningHall() {
    const router = useRouter();
    const id = String(router.query.id);

    if (!id) {
        return null;
    }

    const diningHall = diningHalls.find((hall) => hall.id === id);

    if (!diningHall) {
        return <div>Dining hall not found.</div>;
    }

    const reviews = diningHallReviews[id] || [];

    return (
        <div>
            <h1>{diningHall.name}</h1>
            <img src={diningHall.imageURL} alt={diningHall.name} />
            <p>Average Rating: {diningHall.avgRating}</p>

            <div className={styles.reviews}>
                {reviews.map((review, index) => (
                    <ReviewCard key={index} review={review} />
                ))}
            </div>
        </div>
    );
}