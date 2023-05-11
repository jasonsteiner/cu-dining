import React, { useState } from 'react';

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
            <div>
                <label htmlFor="stars">Stars:</label>
                <select
                    id="stars"
                    value={stars}
                    onChange={(e) => setStars(e.target.value)}
                >
                    <option value="5">5</option>
                    <option value="4">4</option>
                    <option value="3">3</option>
                    <option value="2">2</option>
                    <option value="1">1</option>
                </select>
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea
                    id="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ReviewForm;