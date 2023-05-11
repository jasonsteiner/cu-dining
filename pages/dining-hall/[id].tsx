import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReviewForm from '../../components/ReviewForm';
import ReviewCard from '../../components/ReviewCard';
import {
    collection,
    addDoc,
    query,
    where,
    getDocs,
    onSnapshot,
} from 'firebase/firestore';
import { db } from '../../util/firebase';
import { ReviewWithId } from '../../types';

export default function DiningHallPage() {
    const router = useRouter();
    const { id } = router.query;
    const [reviews, setReviews] = useState<ReviewWithId[]>([]);
    const [averageRating, setAverageRating] = useState<number | null>(null);

    useEffect(() => {
        if (id) {
            const reviewQuery = query(
                collection(db, 'reviews'),
                where('diningHallId', '==', parseInt(id as string))
            );
            const unsubscribe = onSnapshot(reviewQuery, (querySnapshot) => {
                const newReviews: ReviewWithId[] = [];
                let totalRating = 0;
                querySnapshot.forEach((doc) => {
                    const review = { id: doc.id, ...doc.data() } as ReviewWithId;
                    newReviews.push(review);
                    totalRating += parseInt(review.stars);
                });

                setReviews(newReviews);

                if (newReviews.length > 0) {
                    setAverageRating(totalRating / newReviews.length);
                }
            });

            return () => {
                unsubscribe();
            };
        }
    }, [id]);

    const handleSubmit = async (stars: string, comment: string) => {
        if (id) {
            await addDoc(collection(db, 'reviews'), {
                diningHallId: parseInt(id as string),
                stars,
                comment,
            });
        }
    };

    return (
        <div>
            <h1>Reviews for Dining Hall {id}</h1>
            <h2>
                Average Rating:{' '}
                {averageRating !== null ? averageRating.toFixed(1) : 'N/A'} / 5.0
            </h2>
            <ReviewForm onSubmit={handleSubmit} />
            <div>
                {reviews.map((review) => (
                    <div key={review.id}>
                        <p>
                            User: {review.userEmail} Rating: {review.stars} / 5.0
                        </p>
                        <p>Comment: {review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
