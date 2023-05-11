import React, { useState } from 'react';
import styles from '../../styles/Layout.module.css';

interface ReviewFormProps {
    onSubmit: (stars: string, comment: string) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
    const [stars, setStars] = useState('5');
    const [comment, setComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(stars, comment);
        setStars('5');
        setComment('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className={styles.bolder2}>Write a New Review</h1>
            <div>
                <label htmlFor="stars" className={styles.shift2}>Rating:</label>
                <select
                    id="stars"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                    className={styles.inside} 
                >
                    <option value="5">★★★★★</option>
                    <option value="4">★★★★☆</option>
                    <option value="3">★★★☆☆</option>
                    <option value="2">★★☆☆☆</option>
                    <option value="1">★☆☆☆☆</option>
                </select>
            </div>
            <div>
                <label htmlFor="comment" className={styles.shifter}>Comment:</label>
                <textarea
                    id="comment"
                    className={styles.area} 
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <button type="submit" className={styles.publisher}>Publish Review</button>
        </form>
    );
};

export default ReviewForm;