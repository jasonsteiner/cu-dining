import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ReviewForm from '../components/control/ReviewForm';
import {
    collection,
    addDoc,
    query,
    where,
    onSnapshot,
} from 'firebase/firestore';
import { db } from '../util/firebase';
import { ReviewWithId } from '../types';
import { auth } from '../util/firebase';
import styles from '../styles/Layout.module.css';
import Head from 'next/head';

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

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    const hallDict: { [key: string]: string } = {
        '1' : "Morrison Dining Room", 
        '2' : "North Star Dining Room", 
        '3' : "Risley Dining Room", 
        '4' : "Okenshields Dining Room", 
        '5' : "Terrace Restaurant", 
        '6' : "Trillium Food Court"
    };

    return (
        <div>
            <Head>
                <title>{typeof id === 'string' ? hallDict[id] : undefined} | CU Dining</title>
                <meta name="description" content="CU Dining Locations Review App" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.general}>
                <h1 className={styles.bolder}>Reviews for {typeof id === 'string' ? hallDict[id] : undefined}</h1>
                <h2>
                    Average Rating:{' '}
                    {averageRating !== null ? averageRating.toFixed(1) : 'N/A'} / 5.0
                </h2>
            </div>
            <div className={styles.personal}>
                {isLoggedIn === false && ("You must login to add a new review!")}
                {isLoggedIn && (<ReviewForm onSubmit={handleSubmit} />)}
            </div>
            <div>
                {reviews.map((review) => (
                    <div key={review.id} className={styles.bubble}>
                        <p>Rating: {review.stars} / 5</p>
                        <p>Comment: {review.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
