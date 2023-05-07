import React from 'react';
import styles from './ReviewCard.module.css';

interface Review {
    userID: string;
    rating: number;
    description: string;
}

interface ReviewCardProps {
    review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
    return (
        <div className={styles.card}>
            <p className={styles.user}>User: {review.userID}</p>
            <p className={styles.rating}>Rating: {review.rating}</p>
            <p className={styles.description}>{review.description}</p>
        </div>
    );
};

export default ReviewCard;