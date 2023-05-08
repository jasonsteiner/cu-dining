import React from 'react';
import { db } from "../../util/firebase"
import { onSnapshot, collection, query} from "firebase/firestore"
import { useEffect, useState } from "react"
import { ReviewWithId, Review } from "../../types"
import { Spinner, VStack } from "@chakra-ui/react"
import ReviewList from "../../components/ReviewList"
import AddControl from "../../components/AddControl"

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

// query based on location (still need to implement)
let scores = {
    '1': "morrison", 
    '2': "northstar", 
    '3': "risley", 
    '4': "okenshields", 
    '5': "terrace", 
    '6': "trillium"
};
const reviewQuery = query(collection(db, "morrison"))

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
            <AddControl />
            {reviews ? <ReviewList reviews={reviews} /> : <Spinner />}
        </VStack>
    )
}

export default FetchReviews