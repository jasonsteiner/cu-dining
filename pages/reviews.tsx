import React, { useState } from 'react';
import Navbar from '../components/Navbar';

export default function ReviewsPage() {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <div>
            <Navbar />
            <form onSubmit={handleSubmit}>
                <label>
                    Rating:
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={rating}
                        onChange={(e) => setRating(parseInt(e.target.value))}
                    />
                </label>
                <label>
                    Review:
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}