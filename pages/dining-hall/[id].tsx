import React from 'react';
import { db } from "../../util/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"
import { useRouter } from 'next/router';
import { ReviewWithId, Review } from "../../types"
import { VStack } from "@chakra-ui/react"
import ReviewList from "../../components/ReviewList"
import Navbar from '../../components/Navbar';

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

const FetchReviews = ({ reviews }: { reviews: ReviewWithId[] }) => {
    const router = useRouter();
    const { id } = router.query;

    const diningHall = diningHalls.find((dh) => dh.id === id);
    const title = diningHall ? diningHall.name : 'Dining Hall';

    return (
        <VStack spacing={4}>
            <Navbar />
            <h1>{title}</h1>
            <ReviewList reviews={reviews} />
        </VStack>
    );
}

export async function getServerSideProps(context: any) {
    const { id } = context.query;

    const reviewQuery = query(
        collection(db, "reviews"),
        where("diningHallId", "==", parseInt(id))
    );

    const reviewSnapshot = await getDocs(reviewQuery);
    const reviews = reviewSnapshot.docs.map((doc) => {
        const review: Review = doc.data() as Review;
        return { ...review, id: doc.id };
    }) as ReviewWithId[];

    return {
        props: {
            reviews,
        },
    };
}

export default FetchReviews;