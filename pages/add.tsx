import React, { useState } from 'react';
import AddControl from "../components/AddControl";

export default function ReviewsPage() {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <div>
            <AddControl />
        </div>
    );
}