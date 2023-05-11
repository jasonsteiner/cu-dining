import React, { useState } from 'react';
import AddControl from "../components/AddControl";
import { Box, Heading } from "@chakra-ui/react";

export default function ReviewsPage() {
    const [rating, setRating] = useState(0);
    const [description, setDescription] = useState('');

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return (
        <Box>
            <Heading as="h1" textAlign="center" mt={6} mb={10}>Add Review</Heading>
            <AddControl />
        </Box>
    );
}
