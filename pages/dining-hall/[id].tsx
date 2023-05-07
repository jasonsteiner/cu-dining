import React from 'react';
import { useRouter } from 'next/router';
import ReviewCard from '../../components/ReviewCard';
import styles from '../../styles/dining-hall.module.css';
import { db } from "../../util/firebase"
import { onSnapshot, collection, query} from "firebase/firestore"
import { useEffect, useState } from "react"
import { ReviewWithId, Review } from "../../types"
import { Heading, Spinner, VStack } from "@chakra-ui/react"
import ReviewList from "../../components/ReviewList"

// static locations (not from database)
const diningHalls = [
    {
        id: '1',
        name: "Morrison Dining Room",
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
    {
        id: '4',
        name: "Okenshields Dining Room",
        imageURL: "https://via.placeholder.com/150",
        avgRating: 2.1,
    },
    {
        id: '5',
        name: "Terrace Restaurant",
        imageURL: "https://via.placeholder.com/150",
        avgRating: 4.3,
    },
    {
        id: '6',
        name: "Trillium Food Court",
        imageURL: "https://via.placeholder.com/150",
        avgRating: 4.9,
    }
];

// hardcoded reviews, delete later...
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

// query based on location (setup conditional later)
const reviewQuery = query(collection(db, "morrison"));

const FetchReviews = () => {
    const [reviews, setReviews] = useState<ReviewWithId[] | null>(null)
    useEffect(() => {
        const snap = onSnapshot(reviewQuery, (reviewSnapshot) => {
            setReviews(reviewSnapshot.docs.map((doc) => {
                const review: Review = doc.data() as Review
                return {...review, id: doc.id}
            }) as ReviewWithId[]);
        })
        return snap
    }, [])

    return (
        <VStack spacing={4}> 
          {reviews ? <ReviewList reviews={reviews} /> : <Spinner />}
        </VStack>
    )
}

export default FetchReviews

// location-specific subpages
/*
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
*/